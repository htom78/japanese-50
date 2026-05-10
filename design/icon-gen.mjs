// Rasterize SVG icons → PNG at PWA-required sizes via headless Chromium.
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
import * as fs from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ICONS = path.join(path.dirname(__dirname), 'dist', 'icons');

const targets = [
  { svg: 'icon.svg',           size: 192,  out: 'icon-192.png' },
  { svg: 'icon.svg',           size: 512,  out: 'icon-512.png' },
  { svg: 'icon.svg',           size: 180,  out: 'apple-touch-180.png' },
  { svg: 'icon-maskable.svg',  size: 512,  out: 'icon-maskable-512.png' },
];

const browser = await chromium.launch();
const ctx = await browser.newContext({ deviceScaleFactor: 1 });
const page = await ctx.newPage();

for (const t of targets) {
  const svg = fs.readFileSync(path.join(ICONS, t.svg), 'utf-8');
  // Wrap SVG so it renders at the exact pixel size we want.
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@600&display=swap" rel="stylesheet">
    <style>html,body{margin:0;padding:0;background:transparent}</style></head>
    <body><div style="width:${t.size}px;height:${t.size}px">${
      svg.replace(/<svg /, `<svg width="${t.size}" height="${t.size}" `)
    }</div></body></html>`;
  await page.setViewportSize({ width: t.size, height: t.size });
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(200);
  const out = path.join(ICONS, t.out);
  await page.screenshot({ path: out, omitBackground: true, clip: { x: 0, y: 0, width: t.size, height: t.size } });
  console.log('✓', t.out);
}

await browser.close();
