// ============================================================
// types.ts
// 日本語学習コースのデータ型定義
// Japanese Learning Course - Type Definitions
// ============================================================

/**
 * JLPT 等级
 */
export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2';

/**
 * 一个句子的三层表示
 * - jp: 含 ruby 标签的 HTML（汉字+振假名）
 * - plain: 纯假名版本（用于 TTS 朗读，避免汉字误读）
 * - romaji: 罗马音
 * - cn: 中文翻译
 */
export interface Sentence {
  jp: string;       // HTML with <ruby><rt> furigana
  plain: string;    // pure kana for TTS
  romaji: string;   // romanization
  cn: string;       // Chinese translation
}

/**
 * 短文（主篇 / 配篇）
 */
export interface Article {
  kind: 'main' | 'companion';
  title: {
    jp: string;     // 日文标题
    romaji: string;
    cn: string;
  };
  sentences: Sentence[];
}

/**
 * 对话中的一句台词
 */
export interface DialogueLine extends Sentence {
  speaker: string;  // 说话人名字（A、B、田中さん 等）
}

/**
 * 对话场景
 */
export interface Dialogue {
  scene: {
    jp: string;     // 场景描述（日文）
    cn: string;     // 场景描述（中文）
  };
  lines: DialogueLine[];
}

/**
 * 理解题
 */
export interface Question {
  q: Sentence;          // 问题（日文 + 假名 + 罗马音 + 中文）
  a: Sentence;          // 参考答案
  hint?: string;        // 中文提示（可选）
}

/**
 * 词汇条目
 */
export interface VocabItem {
  jp: string;           // 日文（含汉字）
  kana: string;         // 假名读音
  romaji: string;
  meaning: string;      // 中文释义
  pos?: PartOfSpeech;   // 词性（可选）
}

export type PartOfSpeech =
  | '名詞'              // noun
  | '動詞I'             // godan verb
  | '動詞II'            // ichidan verb
  | '動詞III'           // irregular verb
  | 'い形容詞'          // i-adjective
  | 'な形容詞'          // na-adjective
  | '副詞'              // adverb
  | '助詞'              // particle
  | '接続詞'            // conjunction
  | '指示詞'            // demonstrative
  | '疑問詞'            // interrogative
  | '感動詞'            // interjection
  | '連体詞'            // pre-noun adjectival
  | '慣用句';           // idiom

/**
 * 语法点
 */
export interface GrammarPoint {
  pattern: string;       // 语法句式（如 "N は N です"）
  name: string;          // 语法名称（如 "判断句"）
  explain: string;       // 中文说明
  examples: {
    jp: string;          // 例句（含 ruby）
    plain: string;       // 例句假名
    cn: string;          // 例句翻译
  }[];
}

/**
 * 一课的完整数据
 */
export interface Lesson {
  id: number;            // 1–50
  level: JLPTLevel;
  title: {
    jp: string;
    romaji: string;
    cn: string;
    en: string;          // 英文短描述
  };
  goals: string[];       // 本课学习目标（中文，2-3 条）
  articles: Article[];   // [main, companion]
  dialogue: Dialogue;
  questions: Question[]; // 3-5 题
  vocabulary: VocabItem[];
  grammar: GrammarPoint[];
}

/**
 * 整个课程
 */
export interface Course {
  meta: {
    name: string;
    totalLessons: number;
    levels: JLPTLevel[];
    version: string;
  };
  lessons: Lesson[];
}
