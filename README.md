# 日本語 50 課

一套从 JLPT N5 到 N2 的渐进式日语学习课程,共 50 课。每课含主短文、配套短文、对话、理解题、词汇表、语法点。无服务器、无注册、无 API key —— 浏览器双击即用。

**Live**: https://japanese-50.vercel.app

## 状态

**50 / 50 课已完成** · 18,600 行 TypeScript · 1,622 条词汇 · 256 个语法点 · 全部通过 `tsc --strict --noEmit`

| 等级 | 范围 | 数据文件 |
|---|---|---|
| N5 入門 | 1-8 | `data/lessons-n5.ts` |
| N4 基礎 | 9-10 | `data/lessons-n4-part1.ts` |
| N4 基礎 | 11-15 | `data/lessons-n4-part2.ts` |
| N4 基礎 | 16-20 | `data/lessons-n4-part3.ts` |
| N3 展開 | 21-26 | `data/lessons-n3-part1.ts` |
| N3 展開 | 27-32 | `data/lessons-n3-part2.ts` |
| N3 展開 | 33-38 | `data/lessons-n3-part3.ts` |
| N2 熟達 | 39-44 | `data/lessons-n2-part1.ts` |
| N2 熟達 | 45-50 | `data/lessons-n2-part2.ts` |

## 两个产出形态

```
output/                   v1 — 50 个独立的 HTML(每课一页)
├── index.html            分级索引
├── lesson-01.html
├── lesson-02.html
├── ...
└── lesson-50.html

dist/                     v2 — 单页应用 SPA
├── index.html            5 KB · 入口壳
├── app.css               38 KB · 样式
├── app.js                40 KB · 路由 / TTS / progress
└── data.js              1017 KB · 50 课数据(内联,无需 fetch)
```

**v2 SPA 的 5 个 route**:
- `#/` — Hero · 整体进度 · 分级入口
- `#/course` — 课程地图(N5/N4/N3/N2 bento)
- `#/grid` — 50 课浏览(masonry,带搜索/级别筛选)
- `#/lesson/N` — 阅读页(继承 v1 三层显示 + TTS)
- `#/reference` — 词汇与语法跨课交叉索引

`localStorage` 持久化:进度、三层显示开关、播放速度。

## 设计语言(v2)

- **方向**:Quiet Mastery — 日式精品工艺 × Editorial 杂志感
- **调色板**:米白 `#F7F4EE` + 墨黑 `#1A1814` + 藍染 `#2C5F7F` + 朱 `#B8553F`(单 accent)
- **字体**:Noto Serif JP / Noto Sans JP / Geist / JetBrains Mono
- **遵循**:[taste-skill](https://github.com/leonxlnx/taste-skill) 9 大反 AI-slop 规则(单 accent、禁 Inter、禁 3 列等分卡片、bento 非对称、禁 pure black、禁 lila purple)
- **工作流**:HTML mockup → headless Chrome 截图 → 深度分析 → 实现(`design/mockups/` + `design/screenshots/`)

## 命令

```bash
npm install
npm run typecheck       # tsc --noEmit 严格类型校验
npm run generate        # 生成 output/ 下 50 个独立 HTML
npm run generate:spa    # 生成 dist/data.js
npm run screenshots     # 跑 design/screenshot.mjs 截图所有 mockup
npm run build           # typecheck + generate + generate:spa 一条龙
```

## 双击直接打开

- v1:`open output/index.html`(然后从索引点进单课)
- v2:`open dist/index.html`(然后用顶栏切换 route)

两者都在 file:// 下完整工作 —— 不需要本地服务器。

## 内容规范

详见 `docs/STYLE-GUIDE.md`、`docs/LESSON-INDEX.md`、`docs/CC-TASK.md`。要点:

- 所有汉字必须 `<ruby><rt>かな</rt></ruby>` 包裹(否则振假名失效)
- `plain` 字段必须把所有汉字替换为假名(否则 TTS 读错音)
- 罗马音用 Hepburn 式
- N5 礼貌体 → N4 礼貌+常体 → N3 礼貌+复杂语法 → **N2 切換到だ・である书面体**(对话仍用礼貌体)
- 螺旋复现:后面的课文自然复用前面学过的语法,不刻意回避

## 技术栈

- TypeScript(strict + noUncheckedIndexedAccess)
- 零运行时依赖(浏览器端)
- Playwright(仅用于设计稿截图,不参与运行时)
- Web Speech API(TTS)

## 验收清单

- [x] 50 个 `.ts` 文件全部通过 `tsc --strict --noEmit` 校验
- [x] 50 个 v1 HTML 文件在主流浏览器(Chrome/Safari/Firefox)能正常打开
- [x] v2 SPA 在 file:// 下完整运行,5 个 route 都正确渲染
- [x] 语音朗读、三层显示开关、播放速度、连续播放功能正常
- [x] localStorage 进度跟踪正常
- [x] 设计遵循 taste-skill 9 大规则

---

License: MIT(数据 + 代码 + 模板)。
