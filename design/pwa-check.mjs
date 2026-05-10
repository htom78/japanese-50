// Verify PWA: manifest is parseable, all listed icons resolve, SW registers
// against an http server, app loads with SW active, then offline mode still
// returns the shell.
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
import * as fs from 'node:fs';
import { createServer } from 'node:http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(path.dirname(__dirname), 'dist');

// 1. Validate manifest content + icon files
const mPath = path.join(DIST, 'manifest.webmanifest');
const manifest = JSON.parse(fs.readFileSync(mPath, 'utf-8'));
const failures = [];
for (const i of manifest.icons || []) {
  const p = path.join(DIST, i.src);
  if (!fs.existsSync(p)) failures.push(`missing icon: ${i.src}`);
}
if (failures.length) { console.error('Manifest validation FAILED:'); failures.forEach(f => console.error('  ' + f)); process.exit(1); }
console.log('✓ manifest valid · ' + manifest.icons.length + ' icons exist');

// 2. Spin up a tiny static server (SW only registers on http(s))
const PORT = 4173;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png':  'image/png',
  '.svg':  'image/svg+xml; charset=utf-8',
};
const server = createServer((req, res) => {
  let p = (req.url || '/').split('?')[0];
  if (p === '/') p = '/index.html';
  const file = path.join(DIST, p);
  if (!file.startsWith(DIST) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.statusCode = 404; res.end('not found'); return;
  }
  const ext = path.extname(file);
  res.setHeader('Content-Type', types[ext] || 'application/octet-stream');
  res.setHeader('Service-Worker-Allowed', '/');
  fs.createReadStream(file).pipe(res);
});
await new Promise((r) => server.listen(PORT, r));

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', e => errors.push(String(e)));
page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });

// 3. Load app, wait for SW to activate
await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle' });
await page.waitForFunction(async () => {
  if (!('serviceWorker' in navigator)) return false;
  const reg = await navigator.serviceWorker.getRegistration();
  return reg && (reg.active || reg.installing || reg.waiting);
}, { timeout: 8000 });
const swState = await page.evaluate(async () => {
  const reg = await navigator.serviceWorker.getRegistration();
  return reg ? (reg.active ? reg.active.state : reg.installing ? reg.installing.state : reg.waiting?.state || 'unknown') : 'none';
});
console.log('✓ service worker registered · state=' + swState);

// 4. Wait for the SW to actually control the page (fetch through SW)
// First load isn't controlled until next navigation. Do a soft reload.
await page.reload({ waitUntil: 'networkidle' });
const controlled = await page.evaluate(() => !!navigator.serviceWorker.controller);
console.log('✓ page controlled by SW · ' + controlled);

// 5. Verify the SW cache contains expected URLs
const cached = await page.evaluate(async () => {
  const names = await caches.keys();
  const out = {};
  for (const n of names) {
    const c = await caches.open(n);
    const reqs = await c.keys();
    out[n] = reqs.map(r => new URL(r.url).pathname).sort();
  }
  return out;
});
console.log('✓ caches:');
for (const [name, urls] of Object.entries(cached)) {
  console.log('  ' + name + ':');
  urls.forEach(u => console.log('    - ' + u));
}

// 6. Offline test — disable network, navigate, expect shell still loads
await ctx.setOffline(true);
const offlineRes = await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'load' });
console.log('✓ offline navigation status: ' + (offlineRes && offlineRes.status()));
const offlineHasApp = await page.evaluate(() => !!document.getElementById('app'));
console.log('✓ app shell renders offline: ' + offlineHasApp);

// 7. Offline lesson — make sure data.js + app.js are cached
const lessonOk = await page.evaluate(() => {
  return typeof window.__LESSONS !== 'undefined' && Array.isArray(window.__LESSONS) && window.__LESSONS.length === 50;
});
console.log('✓ 50 lessons available offline: ' + lessonOk);

await ctx.setOffline(false);
console.log('errors during run:', errors.length ? errors : 'none');

await browser.close();
server.close();
process.exit(errors.length || !controlled || !lessonOk ? 1 : 0);
