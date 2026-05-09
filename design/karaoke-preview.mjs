// Simulate karaoke highlighting visually without TTS. Snapshots a sentence
// at three charIndex positions (start / middle / near-end) so we can verify
// the gradient effect.
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SPA = path.join(path.dirname(__dirname), 'dist', 'index.html');
const OUT = path.join(__dirname, 'screenshots');

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await ctx.addInitScript(() => {
  try { localStorage.setItem('jp50.progress.v1', JSON.stringify({ completed: [1,2,3,4,5,6,7,8,9,10], current: 11 })); } catch {}
});
const page = await ctx.newPage();
await page.goto('file://' + SPA + '#/lesson/11', { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(600);

async function highlightAt(charIndex) {
  await page.evaluate((idx) => {
    // Highlight the FIRST sentence's kchar spans according to idx.
    const firstSentence = document.querySelector('.reader-main .sentence');
    if (!firstSentence) return;
    firstSentence.classList.add('playing');
    firstSentence.querySelectorAll('.kchar').forEach(el => {
      const ps = parseInt(el.dataset.ps, 10);
      const pl = parseInt(el.dataset.pl, 10);
      el.classList.toggle('kc-past', ps + pl <= idx);
      el.classList.toggle('kc-active', ps <= idx && idx < ps + pl);
    });
  }, charIndex);
  await page.waitForTimeout(200);
}

await highlightAt(2);
await page.screenshot({ path: path.join(OUT, 'karaoke-step-1.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } });
console.log('✓ karaoke-step-1 (charIndex=2)');

await highlightAt(8);
await page.screenshot({ path: path.join(OUT, 'karaoke-step-2.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } });
console.log('✓ karaoke-step-2 (charIndex=8)');

await highlightAt(14);
await page.screenshot({ path: path.join(OUT, 'karaoke-step-3.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } });
console.log('✓ karaoke-step-3 (charIndex=14)');

// AB markers — set first and third sentence
await page.evaluate(() => {
  const list = document.querySelectorAll('.reader-main .sentence');
  if (list.length >= 3) {
    list[0].classList.add('ab-a');
    list[2].classList.add('ab-b');
  }
});
await page.waitForTimeout(200);
await page.screenshot({ path: path.join(OUT, 'ab-markers.png'), clip: { x: 0, y: 0, width: 1440, height: 900 } });
console.log('✓ ab-markers');

await browser.close();
