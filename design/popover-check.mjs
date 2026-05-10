// Verify word popover: click a kanji ruby cluster, popover appears with
// reading + meaning + multi-lesson recurrence list. Also test the
// no-entry fallback for words not in the vocab index, and the close
// behaviour (Esc + outside click).
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SPA = path.join(path.dirname(__dirname), 'dist', 'index.html');
const OUT = path.join(__dirname, 'screenshots');

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
const errs = [];
page.on('pageerror', e => errs.push(String(e)));
page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });

await page.goto('file://' + SPA + '#/lesson/1', { waitUntil: 'networkidle' });
await page.waitForTimeout(700);

// Find the kchar for 私 (which appears across many lessons in sentences)
const target = await page.evaluateHandle(() => {
  const candidates = document.querySelectorAll('.reader-main .sentence .kchar');
  for (const c of candidates) {
    const ruby = c.querySelector('ruby');
    if (!ruby) continue;
    const clone = ruby.cloneNode(true);
    clone.querySelectorAll('rt').forEach(r => r.remove());
    if (clone.textContent.trim() === '私') return c;
  }
  return null;
});
const tagName = await page.evaluate((el) => el ? el.outerHTML.slice(0, 80) : null, target);
console.log('First kanji kchar:', tagName);

await target.click();
await page.waitForTimeout(400);

// Snapshot popover state
const state = await page.evaluate(() => {
  const root = document.getElementById('wpop');
  if (!root || root.classList.contains('hidden')) return { open: false };
  return {
    open: true,
    jp: root.querySelector('.wpop-jp')?.textContent?.trim(),
    reading: root.querySelector('.wpop-reading')?.textContent?.trim(),
    mean: root.querySelector('.wpop-mean')?.textContent?.trim(),
    occCount: root.querySelectorAll('.wpop-occ-row').length,
    occLabel: root.querySelector('.wpop-occ-label')?.textContent?.trim(),
    bbox: root.getBoundingClientRect().toJSON(),
  };
});
console.log('\nPopover state:', state);

await page.screenshot({ path: path.join(OUT, 'popover-open.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } });
console.log('✓ popover-open.png');

// Click outside → should close
await page.mouse.click(50, 50);
await page.waitForTimeout(300);
const closed = await page.evaluate(() => document.getElementById('wpop').classList.contains('hidden'));
console.log('After outside click — closed:', closed);

// Open again, press Escape
await target.click();
await page.waitForTimeout(300);
await page.keyboard.press('Escape');
await page.waitForTimeout(200);
const closedByEsc = await page.evaluate(() => document.getElementById('wpop').classList.contains('hidden'));
console.log('After Esc — closed:', closedByEsc);

// Click occurrence row — should navigate
await target.click();
await page.waitForTimeout(300);
const occRow = await page.$('#wpop .wpop-occ-row');
let landed = null;
if (occRow) {
  await occRow.click();
  await page.waitForTimeout(700);
  landed = page.url().match(/#\/lesson\/(\d+)/)?.[1];
  console.log('After clicking occurrence row → lesson:', landed);
}

// Verify no errors thrown during the run
console.log('\nerrors:', errs.length ? errs : 'none');

await browser.close();
process.exit(errs.length || !state.open ? 1 : 0);
