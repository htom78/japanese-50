// ============================================================
// generate.ts — 把课程数据注入 HTML 模板，生成独立学习页面
// ============================================================

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { course } from './data/lessons.ts';
import type { Lesson } from './data/types.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATE_PATH = path.join(__dirname, 'templates', 'lesson-template.html');
const OUTPUT_DIR = path.join(__dirname, 'output');

interface LessonRef {
  id: number;
  title: string;
}

interface PageData {
  lesson: Lesson;
  prev: LessonRef | null;
  next: LessonRef | null;
}

function stripTags(s: string): string {
  return s.replace(/<[^>]*>/g, '');
}

function fileNameFor(id: number): string {
  return `lesson-${String(id).padStart(2, '0')}.html`;
}

function injectLesson(template: string, page: PageData): string {
  // Use a JSON-as-text injection. Escape the closing </script> sequence so
  // the JSON literal cannot prematurely terminate the host <script> block.
  const json = JSON.stringify(page).replace(/<\/script>/gi, '<\\/script>');
  const pageTitle =
    `${page.lesson.level} · 第${page.lesson.id}課 — ` +
    stripTags(page.lesson.title.jp);
  return template
    .replace('__LESSON_DATA_JSON__', json)
    .replace('__PAGE_TITLE__', pageTitle);
}

function buildIndexPage(lessons: Lesson[]): string {
  const byLevel: Record<string, Lesson[]> = { N5: [], N4: [], N3: [], N2: [] };
  for (const l of lessons) {
    (byLevel[l.level] ??= []).push(l);
  }

  const sections = (['N5', 'N4', 'N3', 'N2'] as const)
    .map((level) => {
      const list = byLevel[level] ?? [];
      if (list.length === 0) return '';
      const items = list
        .map((l) => {
          const fn = fileNameFor(l.id);
          const num = String(l.id).padStart(2, '0');
          return `<li><a href="${fn}"><span class="lid">${num}</span><span class="ljp">${l.title.jp}</span><span class="lcn">${l.title.cn}</span></a></li>`;
        })
        .join('\n');
      return `<section class="level-block"><h2>${level}</h2><ul>${items}</ul></section>`;
    })
    .join('\n');

  const total = lessons.length;
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>日本語 50 課 — 索引</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@500&family=Noto+Sans+JP:wght@400&family=IBM+Plex+Mono&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #F5F1E8; --fg: #2A2620; --fg2: #5C544A; --fg3: #8C8275;
    --accent: #A8895C; --accent-soft: rgba(168,137,92,0.12);
    --border: rgba(42,38,32,0.14);
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: var(--bg); color: var(--fg); font-family: "Noto Sans JP", sans-serif; padding: 64px 32px; }
  .wrap { max-width: 720px; margin: 0 auto; }
  header { border-bottom: 1px solid var(--border); padding-bottom: 24px; margin-bottom: 32px; }
  h1 { font-family: "Noto Serif JP", serif; font-size: 28px; font-weight: 500; }
  .meta { font-family: "IBM Plex Mono", monospace; font-size: 11px; color: var(--fg3); margin-top: 8px; letter-spacing: 0.1em; }
  .level-block { margin-bottom: 40px; }
  h2 { font-family: "IBM Plex Mono", monospace; font-size: 12px; color: var(--accent); letter-spacing: 0.2em; margin-bottom: 12px; }
  ul { list-style: none; }
  li a { display: grid; grid-template-columns: 40px 1fr 1.2fr; gap: 12px; padding: 10px 12px; border-bottom: 1px solid var(--border); text-decoration: none; color: var(--fg); transition: background 200ms; align-items: baseline; }
  li a:hover { background: var(--accent-soft); }
  .lid { font-family: "IBM Plex Mono", monospace; font-size: 12px; color: var(--fg3); }
  .ljp { font-family: "Noto Serif JP", serif; font-size: 15px; }
  .lcn { font-size: 12px; color: var(--fg2); }
  @media (max-width: 600px) { li a { grid-template-columns: 30px 1fr; } .lcn { grid-column: 2; font-size: 11px; } }
</style>
</head>
<body>
  <div class="wrap">
    <header>
      <h1>日本語 50 課</h1>
      <div class="meta">${total} / 50 課 · web speech api · zero dependency</div>
    </header>
    ${sections}
  </div>
</body>
</html>`;
}

function main(): void {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');
  const lessons = course.lessons;

  // Sanity check: ids unique and ascending
  const ids = new Set<number>();
  for (const l of lessons) {
    if (ids.has(l.id)) throw new Error(`duplicate lesson id: ${l.id}`);
    ids.add(l.id);
  }

  let count = 0;
  lessons.forEach((lesson, i) => {
    const prev = i > 0 ? lessons[i - 1] : undefined;
    const next = i < lessons.length - 1 ? lessons[i + 1] : undefined;
    const page: PageData = {
      lesson,
      prev: prev ? { id: prev.id, title: stripTags(prev.title.jp) } : null,
      next: next ? { id: next.id, title: stripTags(next.title.jp) } : null,
    };
    const html = injectLesson(template, page);
    const outPath = path.join(OUTPUT_DIR, fileNameFor(lesson.id));
    fs.writeFileSync(outPath, html);
    count++;
    console.log(`✓ ${fileNameFor(lesson.id)} (${lesson.level} ${stripTags(lesson.title.jp)})`);
  });

  const indexHtml = buildIndexPage(lessons);
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), indexHtml);
  console.log(`✓ index.html`);
  console.log(`\nDone. ${count} lessons + 1 index page → ${path.relative(process.cwd(), OUTPUT_DIR)}/`);
}

main();
