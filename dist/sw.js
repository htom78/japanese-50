/* eslint-env serviceworker */
// ============================================================
// Japanese 50 課 — Service Worker
//
// Strategy:
//   - install: precache app shell + lessons data + icons (everything
//     needed for full offline operation, including 50 課 content)
//   - fetch:
//       * navigation requests           → network-first w/ shell fallback
//       * same-origin static resources  → stale-while-revalidate
//       * Google Fonts CSS/woff         → stale-while-revalidate (cross-origin)
//       * everything else               → pass through
// Bump CACHE_VERSION to invalidate. Old caches are pruned on activate.
// ============================================================

const CACHE_VERSION = 'v3-2026-05-10';
const CACHE_STATIC = `jp50-static-${CACHE_VERSION}`;
const CACHE_FONTS  = `jp50-fonts-${CACHE_VERSION}`;

// Files we want available offline immediately after install.
const PRECACHE_URLS = [
  './',
  './index.html',
  './app.css',
  './app.js',
  './data.js',
  './manifest.webmanifest',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-180.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC).then((cache) =>
      // Use addAll with a freshly-built Request list so a single 404 doesn't
      // poison the install — but we still want install to fail loudly if a
      // real shell file is missing. addAll throws on any failure; that's
      // fine for our small precache.
      cache.addAll(PRECACHE_URLS.map((u) => new Request(u, { cache: 'reload' })))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k.startsWith('jp50-') && k !== CACHE_STATIC && k !== CACHE_FONTS)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── helpers ─────────────────────────────────────────────────

function isFontsRequest(url) {
  return url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const networkPromise = fetch(request).then((res) => {
    if (res && res.ok) cache.put(request, res.clone()).catch(() => {});
    return res;
  }).catch(() => null);
  return cached || networkPromise || new Response('', { status: 504 });
}

async function networkFirstShell(request) {
  const cache = await caches.open(CACHE_STATIC);
  try {
    const fresh = await fetch(request);
    if (fresh && fresh.ok) cache.put('./index.html', fresh.clone()).catch(() => {});
    return fresh;
  } catch {
    return (await cache.match('./index.html'))
      || (await cache.match('./'))
      || new Response('Offline — please reconnect once to install the app.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  }
}

// ── fetch router ────────────────────────────────────────────

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Navigation = SPA shell. Always try network first to pick up new versions,
  // fall back to cached shell when offline.
  if (req.mode === 'navigate') {
    event.respondWith(networkFirstShell(req));
    return;
  }

  // Same-origin static resources
  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(req, CACHE_STATIC));
    return;
  }

  // Google Fonts (CSS + woff2)
  if (isFontsRequest(url)) {
    event.respondWith(staleWhileRevalidate(req, CACHE_FONTS));
    return;
  }

  // Anything else: pass through (no caching).
});

// Allow page to ask for an immediate update.
self.addEventListener('message', (event) => {
  if (event.data === 'skip-waiting') self.skipWaiting();
});
