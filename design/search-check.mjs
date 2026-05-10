// Verify search index, /search route, palette, and anchor jump.
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SPA = path.join(path.dirname(__dirname), 'dist', 'index.html');
const OUT = path.join(__dirname, 'screenshots');

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', e => errors.push(String(e)));
page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });

// 1. Load home, open palette via Ctrl+K
await page.goto('file://' + SPA + '#/', { waitUntil: 'networkidle' });
await page.waitForTimeout(500);

// 2. Open palette and run a few canonical queries
async function runPaletteQuery(q, expectKind) {
  await page.keyboard.press('Control+K');
  await page.waitForSelector('#cmdk-input', { timeout: 1500 });
  await page.locator('#cmdk-input').fill(q);
  await page.waitForTimeout(300);
  const rows = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('#cmdk-results .cmdk-row')).slice(0, 5).map(r => ({
      kind: r.querySelector('.cmdk-kind')?.textContent?.trim(),
      jp: r.querySelector('.cmdk-jp')?.textContent?.trim(),
      lesson: r.querySelector('.cmdk-lesson')?.textContent?.trim(),
    }));
  });
  await page.keyboard.press('Escape');
  await page.waitForTimeout(150);
  return rows;
}

const cases = [
  { q: '受身',     expect: 'grammar' },
  { q: 'おはよう', expect: 'sentence' },
  { q: 'kao',      expect: 'vocab' },
  { q: '敬語',     expect: 'lesson' },
  { q: '〜たら',   expect: 'grammar' },
];

for (const c of cases) {
  const rows = await runPaletteQuery(c.q, c.expect);
  console.log(`\n  q="${c.q}" → ${rows.length} results`);
  rows.slice(0, 3).forEach(r => console.log(`    [${r.kind}] ${r.jp}  ·  ${r.lesson}`));
}

// 3. Navigate to /search?q=受身 directly, snapshot
await page.goto('file://' + SPA + '#/search?q=' + encodeURIComponent('受身'), { waitUntil: 'networkidle' });
await page.waitForTimeout(500);
const groups = await page.evaluate(() => {
  return Array.from(document.querySelectorAll('.search-group')).map(g => ({
    head: g.querySelector('.search-group-head .kicker')?.textContent?.trim(),
    n: g.querySelectorAll('.search-row').length,
  }));
});
console.log('\nSearch route — query="受身":');
groups.forEach(g => console.log('  ' + g.head + ' · ' + g.n + ' rows'));
await page.screenshot({ path: path.join(OUT, 'search-route.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } });
console.log('✓ search-route.png');

// 4. Open palette, type, screenshot
await page.goto('file://' + SPA + '#/', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
await page.keyboard.press('Control+K');
await page.waitForSelector('#cmdk-input', { timeout: 1500 });
await page.locator('#cmdk-input').fill('受身');
await page.waitForTimeout(300);
await page.screenshot({ path: path.join(OUT, 'cmdk-palette.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } });
console.log('✓ cmdk-palette.png');

// 5. Anchor jump test — go to lesson with focus param, verify scroll lands
await page.keyboard.press('Escape');
await page.goto('file://' + SPA + '#/lesson/21?focus=grammar-0', { waitUntil: 'networkidle' });
await page.waitForTimeout(900);
const anchorState = await page.evaluate(() => {
  const target = document.querySelector('.reader-main [data-anchor="grammar-0"]');
  if (!target) return { ok: false };
  const rect = target.getBoundingClientRect();
  const flashing = target.classList.contains('focus-flash');
  return { ok: true, top: Math.round(rect.top), flashing };
});
console.log('\nAnchor jump (lesson 21, grammar-0):');
console.log('  found:    ' + anchorState.ok);
console.log('  topAfter: ' + anchorState.top + 'px (target ~252)');
console.log('  flashing: ' + anchorState.flashing);
await page.screenshot({ path: path.join(OUT, 'anchor-jump.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } });
console.log('✓ anchor-jump.png');

console.log('\nerrors:', errors.length ? errors : 'none');
await browser.close();
process.exit(errors.length ? 1 : 0);
