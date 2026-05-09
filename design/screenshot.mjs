// Screenshot all mockups at 1440x900 with deviceScaleFactor 2 for sharpness
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
import * as fs from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MOCKS = path.join(__dirname, 'mockups');
const OUT = path.join(__dirname, 'screenshots');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const files = fs.readdirSync(MOCKS).filter(f => f.endsWith('.html')).sort();

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();

for (const f of files) {
  const url = 'file://' + path.join(MOCKS, f);
  await page.goto(url, { waitUntil: 'networkidle' });
  // wait extra for fonts
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
  const out = path.join(OUT, f.replace('.html', '.png'));
  await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1440, height: 900 } });
  console.log('✓', f.replace('.html',''));
}
await browser.close();
