# Claude Code 任务说明：完成日本語 50 課课程

> **重要**：开始之前，请先依次阅读以下三份文件，然后再动手：
> 1. `data/types.ts` —— 数据类型定义
> 2. `data/lessons-n5.ts` —— 已完成的 8 课，作为风格参考
> 3. `docs/STYLE-GUIDE.md` —— 内容风格指南
> 4. `docs/LESSON-INDEX.md` —— 剩余 40 课的目录、每课语法点、每课主题

## 你的两阶段任务

### 阶段一：续写课程数据（剩余 40 课）

按以下顺序生成 7 个文件：

| 文件 | 课程范围 | 课数 |
|---|---|---|
| `data/lessons-n4-part2.ts` | 第 11-15 课 | 5 |
| `data/lessons-n4-part3.ts` | 第 16-20 课 | 5 |
| `data/lessons-n3-part1.ts` | 第 21-26 课 | 6 |
| `data/lessons-n3-part2.ts` | 第 27-32 课 | 6 |
| `data/lessons-n3-part3.ts` | 第 33-38 课 | 6 |
| `data/lessons-n2-part1.ts` | 第 39-44 课 | 6 |
| `data/lessons-n2-part2.ts` | 第 45-50 课 | 6 |

**每个 part 文件的结构**：

```ts
import type { Lesson } from './types';

export const lessonsN4Part2: Lesson[] = [
  { id: 11, level: 'N4', /* ... */ },
  { id: 12, level: 'N4', /* ... */ },
  // ...
];
```

**每完成一个 part 文件就做 TypeScript 校验**：

```bash
cd data
npx -y typescript@5 tsc --noEmit --strict --target es2020 --module commonjs types.ts lessons-n4-part2.ts
```

如果校验失败，修复后重试，再开始下一个文件。

### 阶段二：合并 + 生成 HTML 页面

#### 2.1 合并所有 part 文件

创建 `data/lessons.ts` 作为总入口：

```ts
import type { Course } from './types';
import { lessonsN5 } from './lessons-n5';
import { lessonsN4Part1 } from './lessons-n4-part1';
import { lessonsN4Part2 } from './lessons-n4-part2';
import { lessonsN4Part3 } from './lessons-n4-part3';
import { lessonsN3Part1 } from './lessons-n3-part1';
import { lessonsN3Part2 } from './lessons-n3-part2';
import { lessonsN3Part3 } from './lessons-n3-part3';
import { lessonsN2Part1 } from './lessons-n2-part1';
import { lessonsN2Part2 } from './lessons-n2-part2';

export const course: Course = {
  meta: {
    name: '日本語 50 課',
    totalLessons: 50,
    levels: ['N5', 'N4', 'N3', 'N2'],
    version: '1.0.0',
  },
  lessons: [
    ...lessonsN5,
    ...lessonsN4Part1, ...lessonsN4Part2, ...lessonsN4Part3,
    ...lessonsN3Part1, ...lessonsN3Part2, ...lessonsN3Part3,
    ...lessonsN2Part1, ...lessonsN2Part2,
  ],
};
```

#### 2.2 编写 HTML 生成器

创建 `generate.ts`：

```ts
// generate.ts —— 把课程数据注入 HTML 模板，生成 50 个独立学习页面
import * as fs from 'fs';
import * as path from 'path';
import { course } from './data/lessons';
import type { Lesson } from './data/types';

const TEMPLATE_PATH = path.join(__dirname, 'templates/lesson-template.html');
const OUTPUT_DIR = path.join(__dirname, 'output');

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

course.lessons.forEach((lesson: Lesson, index: number) => {
  const prevId = index > 0 ? course.lessons[index - 1].id : null;
  const nextId = index < course.lessons.length - 1 ? course.lessons[index + 1].id : null;

  // 把模板里硬编码的第 2 课数据替换成动态注入
  // 关键替换点：
  //  1. 标题区（masthead）
  //  2. mainSentences / subSentences 数组
  //  3. dialogue 数据
  //  4. questions 数据
  //  5. vocabulary 数据
  //  6. grammar 数据
  //  7. 课程导航链接
  
  const html = injectLessonData(template, lesson, prevId, nextId);
  
  const filename = `lesson-${String(lesson.id).padStart(2, '0')}.html`;
  fs.writeFileSync(path.join(OUTPUT_DIR, filename), html);
  console.log(`✓ ${filename}`);
});

function injectLessonData(
  tpl: string,
  lesson: Lesson,
  prevId: number | null,
  nextId: number | null
): string {
  // 实现细节由你完成 —— 推荐策略：
  // 1. 在 lesson-template.html 里加入占位标记（如 {{LESSON_DATA}}）
  // 2. 把所有数据序列化为 JSON 注入到一个全局变量
  // 3. 模板内的 JS 从这个全局变量读取数据来渲染
  // 这样比正则替换原模板里的硬编码数据更可靠
  // ...
}
```

#### 2.3 修改模板使其数据驱动

`templates/lesson-template.html` 是基于第 2 课的成品。请改造它：

- 把硬编码的 `mainSentences`、`subSentences`、`vocabulary`、`grammar`、`dialogue`、`questions` 等数据全部替换为占位符
- 在生成时，把每课的完整 JSON 数据注入到一个 `<script>` 标签里：

```html
<script id="lesson-data" type="application/json">
{{LESSON_DATA_JSON}}
</script>
<script>
  const lesson = JSON.parse(document.getElementById('lesson-data').textContent);
  // 用 lesson 数据动态渲染所有内容
</script>
```

这样模板只有一份，所有课都共享同一份渲染逻辑。

#### 2.4 添加索引页

额外创建一个 `index.html`，列出所有 50 课，可以点击跳转。建议按 N5 / N4 / N3 / N2 分组展示。

### 2.5 最终目录

```
japanese-50/
├── data/
│   ├── types.ts
│   ├── lessons-n5.ts
│   ├── lessons-n4-part1.ts ~ lessons-n2-part2.ts
│   └── lessons.ts                    ← 总入口
├── templates/
│   └── lesson-template.html          ← 已改造为数据驱动
├── output/                           ← 你新建
│   ├── index.html
│   ├── lesson-01.html
│   ├── lesson-02.html
│   ├── ...
│   └── lesson-50.html
├── generate.ts                       ← 你新建
└── package.json                      ← 你新建（可选）
```

## 关键质量要求（必读）

### 内容质量

- **每个汉字必须用 `<ruby>...<rt>...</rt></ruby>` 标签包裹振假名**，否则页面振假名显示功能会失效
- **`plain` 字段必须是把所有汉字替换成假名后的版本**，这是 TTS 朗读用的——如果含汉字，朗读器可能会读错音
- **罗马音用 Hepburn 式**：し=shi、ち=chi、つ=tsu；长音用「ou」「ee」「aa」
- **每课字数严格按等级递增**（详见 STYLE-GUIDE.md）

### 技术质量

- 所有 `.ts` 文件必须通过 `tsc --strict --noEmit` 校验，零错误
- 所有 HTML 文件必须能在 Chrome、Safari 双击直接打开（无需服务器）
- 不引入任何额外的 JS 库（保持纯原生）
- 颜色、字体、布局保持与 `lesson-01-reference.html` 和 `lesson-template.html` 一致

### 螺旋上升

后面的课文应自然复现前面学过的语法和词汇。比如第 30 课的短文里完全可以出现 N5 的「は・が・を」、N4 的「て形」「たい」等。**不要刻意回避已学内容，反而应主动复现**。

### 不重复词汇

如果某个词在前面的课已经出现过（如「私」「行きます」「学校」），后续课文的 vocabulary 数组里**不必再次列出**。只列出该课首次出现的新词。

## 工作建议

1. **从 N4 开始**，因为 N5 已经做完，你可以参照 N5 的结构和密度
2. **每完成一个 part 暂停一次**，做类型校验，确认无误再继续下一个
3. **N3 中段是难点**，每课语法点容易混淆，请仔细查阅 LESSON-INDEX.md 中每课的语法点说明
4. **N2 阶段需要切换文风**，从「です・ます」转向「だ・である」体；可以参考真实日本新闻或评论的语气
5. **生成 HTML 是机械工作，把它放到最后**，等所有数据都做完再统一处理

## 验收清单

完成后请运行：

```bash
# 类型校验
cd data && tsc --noEmit --strict types.ts lessons-*.ts lessons.ts

# 计数检查
ls output/lesson-*.html | wc -l   # 应为 50
grep -c "id: " data/lessons-*.ts  # 总和应为 50

# 抽查渲染
open output/lesson-25.html         # 选几课随机看看
open output/lesson-42.html
```

确认：
- [ ] 7 个新数据文件全部生成
- [ ] `data/lessons.ts` 总入口正确导出 50 课
- [ ] `output/` 目录有 50 个 HTML + 1 个 index
- [ ] 抽查 5 个 HTML 页面，三层显示开关、语音朗读、播放速度都正常
- [ ] N5、N4、N3、N2 至少各抽一课检查内容质量
