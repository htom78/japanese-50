// Check SPA for console errors + verify karaoke spans + AB pill IDs exist
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SPA = path.join(path.dirname(__dirname), 'dist', 'index.html');

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', e => errors.push(String(e)));
page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });

await page.goto('file://' + SPA + '#/lesson/11', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);

// Count kchar spans + sample one
const stats = await page.evaluate(() => {
  const spans = document.querySelectorAll('.reader-main .kchar');
  const sample = spans[0];
  return {
    kcharCount: spans.length,
    sampleHtml: sample ? sample.outerHTML : null,
    sampleAttr: sample ? { ps: sample.dataset.ps, pl: sample.dataset.pl } : null,
    audioPlay: !!document.getElementById('audio-play'),
    abAPill: !!document.getElementById('ab-a-pill'),
    abBPill: !!document.getElementById('ab-b-pill'),
    abPlay: !!document.getElementById('ab-play'),
    loopSelect: !!document.getElementById('loop-select'),
    speedSelect: !!document.getElementById('speed-select'),
    sentenceCount: document.querySelectorAll('.reader-main .sentence').length,
    dialogueCount: document.querySelectorAll('.reader-main .dialogue-line').length,
  };
});

console.log('errors:', errors);
console.log('stats:', stats);

await browser.close();
process.exit(errors.length > 0 ? 1 : 0);
