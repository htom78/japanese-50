// generate-spa.ts — Build dist/data.js by serializing course data
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { course } from './data/lessons.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST = path.join(__dirname, 'dist');

if (!fs.existsSync(DIST)) fs.mkdirSync(DIST, { recursive: true });

const lessonsJson = JSON.stringify(course.lessons);
const metaJson = JSON.stringify(course.meta);

const dataJs = `// Auto-generated. Do not edit by hand. Run: npm run build:spa
window.__META = ${metaJson};
window.__LESSONS = ${lessonsJson};
`;

const outPath = path.join(DIST, 'data.js');
fs.writeFileSync(outPath, dataJs);
const sizeKb = (Buffer.byteLength(dataJs) / 1024).toFixed(1);
console.log(`✓ data.js written (${sizeKb} KB · ${course.lessons.length} lessons)`);
