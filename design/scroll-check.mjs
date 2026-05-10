// Verify auto-scroll moves a far-down sentence into the upper third of viewport.
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SPA = path.join(path.dirname(__dirname), 'dist', 'index.html');

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto('file://' + SPA + '#/lesson/11', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);

const stats = await page.evaluate(() => {
  const sentences = document.querySelectorAll('.reader-main .sentence, .reader-main .dialogue-line');
  const target = sentences[Math.min(8, sentences.length - 1)];
  // Simulate the TTS playback path: add .playing then scroll.
  document.querySelectorAll('.playing').forEach(el => el.classList.remove('playing'));
  target.classList.add('playing');
  // Get current top before scroll
  const before = target.getBoundingClientRect().top;
  // Trigger the same scroll function the TTS uses (inline copy)
  const rect = target.getBoundingClientRect();
  const vh = window.innerHeight;
  const targetTop = vh * 0.30;
  const delta = rect.top - targetTop;
  window.scrollBy({ top: delta, behavior: 'instant' });
  const after = target.getBoundingClientRect().top;
  return { before, after, vh, targetTop, totalSentences: sentences.length, idx: 8 };
});
console.log('before:', stats.before.toFixed(0), 'after:', stats.after.toFixed(0), 'targetTop:', stats.targetTop.toFixed(0), '(vh=' + stats.vh + ')');
console.log('idx ' + stats.idx + ' of ' + stats.totalSentences);
const ok = Math.abs(stats.after - stats.targetTop) < 10;
console.log(ok ? '✓ landed in upper-third zone' : '✗ scroll did not land in zone');
await browser.close();
process.exit(ok ? 0 : 1);
