// Screenshot the SPA at each route
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
import * as fs from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.dirname(__dirname);
const SPA = path.join(ROOT, 'dist', 'index.html');
const OUT = path.join(__dirname, 'screenshots');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const routes = [
  ['spa-01-home',       '#/'],
  ['spa-02-course',     '#/course'],
  ['spa-03-grid',       '#/grid'],
  ['spa-04-lesson-11',  '#/lesson/11'],
  ['spa-04-lesson-39',  '#/lesson/39'],
  ['spa-04-lesson-50',  '#/lesson/50'],
  ['spa-05-reference',  '#/reference'],
];

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
await ctx.addInitScript(() => {
  try {
    localStorage.setItem('jp50.progress.v1', JSON.stringify({
      completed: [1,2,3,4,5,6,7,8,9,10],
      current: 11,
    }));
  } catch {}
});

const page = await ctx.newPage();
for (const [name, hash] of routes) {
  const url = 'file://' + SPA + hash;
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(700);
  const out = path.join(OUT, name + '.png');
  await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1440, height: 900 } });
  console.log('✓', name);
}

// Full-page screenshot of home (to capture below-fold including footer)
await page.goto('file://' + SPA + '#/', { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(700);
await page.screenshot({ path: path.join(OUT, 'spa-01-home-full.png'), fullPage: true });
console.log('✓ spa-01-home-full');

await browser.close();
