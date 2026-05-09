// ============================================================
// lessons-n5.ts
// JLPT N5 — 第 1 課 ～ 第 8 課（完整 8 课）
// ============================================================

import type { Lesson } from './types';

export const lessonsN5: Lesson[] = [
// ========================================================
  // 第 1 課
  // ========================================================
  {
    id: 1,
    level: 'N5',
    title: {
      jp: 'わたしの一日',
      romaji: 'watashi no ichinichi',
      cn: '我的一天',
      en: 'My Day',
    },
    goals: [
      '能用「N は N です」介绍自己和他人',
      '掌握基本时间助词「に」、宾语助词「を」、场所助词「で」',
      '能写一段 100 字左右的日常作息',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: 'わたしの一日',
          romaji: 'watashi no ichinichi',
          cn: '我的一天',
        },
        sentences: [
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>は<ruby>田中<rt>たなか</rt></ruby>です。',
            plain: 'わたしはたなかです。',
            romaji: 'watashi wa Tanaka desu.',
            cn: '我是田中。',
          },
          {
            jp: '<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>七時<rt>しちじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。',
            plain: 'まいあさしちじにおきます。',
            romaji: 'maiasa shichi-ji ni okimasu.',
            cn: '每天早上七点起床。',
          },
          {
            jp: 'パンと<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>の<ruby>朝<rt>あさ</rt></ruby>ごはんを<ruby>食<rt>た</rt></ruby>べます。',
            plain: 'パンとぎゅうにゅうのあさごはんをたべます。',
            romaji: 'pan to gyuunyuu no asagohan o tabemasu.',
            cn: '吃面包和牛奶的早餐。',
          },
          {
            jp: 'それから、<ruby>電車<rt>でんしゃ</rt></ruby>で<ruby>会社<rt>かいしゃ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。',
            plain: 'それから、でんしゃでかいしゃへいきます。',
            romaji: 'sorekara, densha de kaisha e ikimasu.',
            cn: '然后乘电车去公司。',
          },
          {
            jp: '<ruby>会社<rt>かいしゃ</rt></ruby>は<ruby>東京<rt>とうきょう</rt></ruby>にあります。',
            plain: 'かいしゃはとうきょうにあります。',
            romaji: 'kaisha wa Toukyou ni arimasu.',
            cn: '公司在东京。',
          },
          {
            jp: '<ruby>昼<rt>ひる</rt></ruby>は<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>にごはんを<ruby>食<rt>た</rt></ruby>べます。',
            plain: 'ひるはどうりょうといっしょにごはんをたべます。',
            romaji: 'hiru wa douryou to issho ni gohan o tabemasu.',
            cn: '中午和同事一起吃饭。',
          },
          {
            jp: '<ruby>夜<rt>よる</rt></ruby>、<ruby>家<rt>いえ</rt></ruby>で<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みます。',
            plain: 'よる、いえでほんをよみます。',
            romaji: 'yoru, ie de hon o yomimasu.',
            cn: '晚上在家里读书。',
          },
          {
            jp: '<ruby>静<rt>しず</rt></ruby>かな<ruby>時間<rt>じかん</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。',
            plain: 'しずかなじかんがすきです。',
            romaji: 'shizuka na jikan ga suki desu.',
            cn: '我喜欢安静的时间。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '友達の田中さん',
          romaji: 'tomodachi no Tanaka-san',
          cn: '朋友田中',
        },
        sentences: [
          {
            jp: '<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>私<rt>わたし</rt></ruby>の<ruby>友達<rt>ともだち</rt></ruby>です。',
            plain: 'たなかさんはわたしのともだちです。',
            romaji: 'Tanaka-san wa watashi no tomodachi desu.',
            cn: '田中是我的朋友。',
          },
          {
            jp: '<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>会社員<rt>かいしゃいん</rt></ruby>です。',
            plain: 'たなかさんはかいしゃいんです。',
            romaji: 'Tanaka-san wa kaishain desu.',
            cn: '田中是公司职员。',
          },
          {
            jp: '<ruby>毎日<rt>まいにち</rt></ruby><ruby>九時<rt>くじ</rt></ruby>から<ruby>六時<rt>ろくじ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きます。',
            plain: 'まいにちくじからろくじまではたらきます。',
            romaji: 'mainichi ku-ji kara roku-ji made hatarakimasu.',
            cn: '每天从九点工作到六点。',
          },
          {
            jp: '<ruby>仕事<rt>しごと</rt></ruby>は<ruby>大変<rt>たいへん</rt></ruby>です。',
            plain: 'しごとはたいへんです。',
            romaji: 'shigoto wa taihen desu.',
            cn: '工作很辛苦。',
          },
          {
            jp: 'でも、<ruby>同僚<rt>どうりょう</rt></ruby>は<ruby>親切<rt>しんせつ</rt></ruby>です。',
            plain: 'でも、どうりょうはしんせつです。',
            romaji: 'demo, douryou wa shinsetsu desu.',
            cn: '但是，同事很亲切。',
          },
          {
            jp: '<ruby>週末<rt>しゅうまつ</rt></ruby>は<ruby>家族<rt>かぞく</rt></ruby>と<ruby>過<rt>す</rt></ruby>ごします。',
            plain: 'しゅうまつはかぞくとすごします。',
            romaji: 'shuumatsu wa kazoku to sugoshimasu.',
            cn: '周末和家人一起度过。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '会社の昼休み。同僚と話している。',
        cn: '公司午休时间。和同事在说话。',
      },
      lines: [
        {
          speaker: '田中',
          jp: '<ruby>鈴木<rt>すずき</rt></ruby>さん、お<ruby>昼<rt>ひる</rt></ruby>はもう<ruby>食<rt>た</rt></ruby>べましたか。',
          plain: 'すずきさん、おひるはもうたべましたか。',
          romaji: 'Suzuki-san, ohiru wa mou tabemashita ka.',
          cn: '铃木，午饭已经吃了吗？',
        },
        {
          speaker: '鈴木',
          jp: 'いいえ、まだです。<ruby>田中<rt>たなか</rt></ruby>さんは。',
          plain: 'いいえ、まだです。たなかさんは。',
          romaji: 'iie, mada desu. Tanaka-san wa.',
          cn: '不，还没。田中你呢？',
        },
        {
          speaker: '田中',
          jp: '<ruby>私<rt>わたし</rt></ruby>もまだです。<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>食堂<rt>しょくどう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きませんか。',
          plain: 'わたしもまだです。いっしょにしょくどうへいきませんか。',
          romaji: 'watashi mo mada desu. issho ni shokudou e ikimasen ka.',
          cn: '我也还没。要一起去食堂吗？',
        },
        {
          speaker: '鈴木',
          jp: 'いいですね。<ruby>行<rt>い</rt></ruby>きましょう。',
          plain: 'いいですね。いきましょう。',
          romaji: 'ii desu ne. ikimashou.',
          cn: '好啊。走吧。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きますか。',
          plain: 'たなかさんはまいあさなんじにおきますか。',
          romaji: 'Tanaka-san wa maiasa nan-ji ni okimasu ka.',
          cn: '田中每天早上几点起床？',
        },
        a: {
          jp: '<ruby>七時<rt>しちじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。',
          plain: 'しちじにおきます。',
          romaji: 'shichi-ji ni okimasu.',
          cn: '七点起床。',
        },
      },
      {
        q: {
          jp: '<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>何<rt>なに</rt></ruby>で<ruby>会社<rt>かいしゃ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きますか。',
          plain: 'たなかさんはなにでかいしゃへいきますか。',
          romaji: 'Tanaka-san wa nani de kaisha e ikimasu ka.',
          cn: '田中怎么去公司？',
        },
        a: {
          jp: '<ruby>電車<rt>でんしゃ</rt></ruby>で<ruby>行<rt>い</rt></ruby>きます。',
          plain: 'でんしゃでいきます。',
          romaji: 'densha de ikimasu.',
          cn: '坐电车去。',
        },
        hint: '注意「で」表示交通工具。',
      },
      {
        q: {
          jp: '<ruby>会社<rt>かいしゃ</rt></ruby>はどこにありますか。',
          plain: 'かいしゃはどこにありますか。',
          romaji: 'kaisha wa doko ni arimasu ka.',
          cn: '公司在哪里？',
        },
        a: {
          jp: '<ruby>東京<rt>とうきょう</rt></ruby>にあります。',
          plain: 'とうきょうにあります。',
          romaji: 'Toukyou ni arimasu.',
          cn: '在东京。',
        },
      },
      {
        q: {
          jp: '<ruby>夜<rt>よる</rt></ruby><ruby>何<rt>なに</rt></ruby>をしますか。',
          plain: 'よるなにをしますか。',
          romaji: 'yoru nani o shimasu ka.',
          cn: '晚上做什么？',
        },
        a: {
          jp: '<ruby>家<rt>いえ</rt></ruby>で<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みます。',
          plain: 'いえでほんをよみます。',
          romaji: 'ie de hon o yomimasu.',
          cn: '在家读书。',
        },
      },
    ],
    vocabulary: [
      { jp: '私', kana: 'わたし', romaji: 'watashi', meaning: '我', pos: '名詞' },
      { jp: '毎朝', kana: 'まいあさ', romaji: 'maiasa', meaning: '每天早上', pos: '名詞' },
      { jp: '七時', kana: 'しちじ', romaji: 'shichi-ji', meaning: '七点', pos: '名詞' },
      { jp: '起きます', kana: 'おきます', romaji: 'okimasu', meaning: '起床', pos: '動詞II' },
      { jp: 'パン', kana: 'パン', romaji: 'pan', meaning: '面包', pos: '名詞' },
      { jp: '牛乳', kana: 'ぎゅうにゅう', romaji: 'gyuunyuu', meaning: '牛奶', pos: '名詞' },
      { jp: '朝ごはん', kana: 'あさごはん', romaji: 'asagohan', meaning: '早餐', pos: '名詞' },
      { jp: '食べます', kana: 'たべます', romaji: 'tabemasu', meaning: '吃', pos: '動詞II' },
      { jp: 'それから', kana: 'それから', romaji: 'sorekara', meaning: '然后', pos: '接続詞' },
      { jp: '電車', kana: 'でんしゃ', romaji: 'densha', meaning: '电车', pos: '名詞' },
      { jp: '会社', kana: 'かいしゃ', romaji: 'kaisha', meaning: '公司', pos: '名詞' },
      { jp: '行きます', kana: 'いきます', romaji: 'ikimasu', meaning: '去', pos: '動詞I' },
      { jp: '東京', kana: 'とうきょう', romaji: 'Toukyou', meaning: '东京', pos: '名詞' },
      { jp: '昼', kana: 'ひる', romaji: 'hiru', meaning: '中午', pos: '名詞' },
      { jp: '同僚', kana: 'どうりょう', romaji: 'douryou', meaning: '同事', pos: '名詞' },
      { jp: '一緒に', kana: 'いっしょに', romaji: 'issho ni', meaning: '一起', pos: '副詞' },
      { jp: '夜', kana: 'よる', romaji: 'yoru', meaning: '晚上', pos: '名詞' },
      { jp: '家', kana: 'いえ', romaji: 'ie', meaning: '家', pos: '名詞' },
      { jp: '読みます', kana: 'よみます', romaji: 'yomimasu', meaning: '读', pos: '動詞I' },
      { jp: '静かな', kana: 'しずかな', romaji: 'shizuka na', meaning: '安静的', pos: 'な形容詞' },
      { jp: '時間', kana: 'じかん', romaji: 'jikan', meaning: '时间', pos: '名詞' },
      { jp: '好きです', kana: 'すきです', romaji: 'suki desu', meaning: '喜欢', pos: 'な形容詞' },
      { jp: '会社員', kana: 'かいしゃいん', romaji: 'kaishain', meaning: '公司职员', pos: '名詞' },
      { jp: '働きます', kana: 'はたらきます', romaji: 'hatarakimasu', meaning: '工作', pos: '動詞I' },
      { jp: '仕事', kana: 'しごと', romaji: 'shigoto', meaning: '工作', pos: '名詞' },
      { jp: '大変', kana: 'たいへん', romaji: 'taihen', meaning: '辛苦的', pos: 'な形容詞' },
      { jp: '親切', kana: 'しんせつ', romaji: 'shinsetsu', meaning: '亲切的', pos: 'な形容詞' },
      { jp: '週末', kana: 'しゅうまつ', romaji: 'shuumatsu', meaning: '周末', pos: '名詞' },
      { jp: '家族', kana: 'かぞく', romaji: 'kazoku', meaning: '家人', pos: '名詞' },
      { jp: '過ごします', kana: 'すごします', romaji: 'sugoshimasu', meaning: '度过', pos: '動詞I' },
    ],
    grammar: [
      {
        pattern: 'N は N です',
        name: '判断句（基本句型）',
        explain: '日语最基本的句型，表示"A 是 B"。「は」是主题助词（读作 wa），「です」是表示肯定的礼貌体词尾。否定形是「じゃありません」。',
        examples: [
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>です。',
            plain: 'わたしはがくせいです。',
            cn: '我是学生。',
          },
          {
            jp: '<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>会社員<rt>かいしゃいん</rt></ruby>です。',
            plain: 'たなかさんはかいしゃいんです。',
            cn: '田中是公司职员。',
          },
        ],
      },
      {
        pattern: '時刻 + に + V ます',
        name: '时间助词「に」',
        explain: '「に」用于具体的时间点（几点、星期几、月份、年份）。注意：「今日」「明日」「昨日」「毎日」等相对时间词不需要加「に」。',
        examples: [
          {
            jp: '<ruby>七時<rt>しちじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。',
            plain: 'しちじにおきます。',
            cn: '七点起床。',
          },
          {
            jp: '<ruby>日曜日<rt>にちようび</rt></ruby>に<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。',
            plain: 'にちようびにえいがをみます。',
            cn: '星期天看电影。',
          },
        ],
      },
      {
        pattern: 'N を V ます',
        name: '宾语助词「を」',
        explain: '「を」（读作 o，不读 wo）标记动作的直接对象。所有及物动词都需要这个助词。',
        examples: [
          {
            jp: 'ごはんを<ruby>食<rt>た</rt></ruby>べます。',
            plain: 'ごはんをたべます。',
            cn: '吃饭。',
          },
          {
            jp: '<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みます。',
            plain: 'ほんをよみます。',
            cn: '读书。',
          },
        ],
      },
      {
        pattern: 'N で V ます',
        name: '助词「で」（手段／场所）',
        explain: '「で」有两个核心用法：表示交通工具或手段（用什么）／表示动作发生的场所（在哪里做）。',
        examples: [
          {
            jp: '<ruby>電車<rt>でんしゃ</rt></ruby>で<ruby>行<rt>い</rt></ruby>きます。',
            plain: 'でんしゃでいきます。',
            cn: '坐电车去。',
          },
          {
            jp: '<ruby>家<rt>いえ</rt></ruby>で<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みます。',
            plain: 'いえでほんをよみます。',
            cn: '在家读书。',
          },
        ],
      },
      {
        pattern: 'N へ／に 行きます',
        name: '移动方向「へ／に」',
        explain: '「へ」（读作 e）和「に」都可表示移动的目的地，「へ」侧重方向感，「に」侧重到达点，初学者两者可互换。',
        examples: [
          {
            jp: '<ruby>会社<rt>かいしゃ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。',
            plain: 'かいしゃへいきます。',
            cn: '去公司。',
          },
          {
            jp: '<ruby>東京<rt>とうきょう</rt></ruby>に<ruby>来<rt>き</rt></ruby>ます。',
            plain: 'とうきょうにきます。',
            cn: '来东京。',
          },
        ],
      },
      {
        pattern: 'N₁ から N₂ まで',
        name: '起止表达',
        explain: '「から」表示起点，「まで」表示终点。可用于时间和场所。',
        examples: [
          {
            jp: '<ruby>九時<rt>くじ</rt></ruby>から<ruby>六時<rt>ろくじ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きます。',
            plain: 'くじからろくじまではたらきます。',
            cn: '从九点工作到六点。',
          },
        ],
      },
      {
        pattern: 'N が 好きです',
        name: '喜好表达',
        explain: '表示"喜欢～"。注意助词是「が」不是「を」。否定形是「好きじゃありません」。同类还有「上手です／下手です／きらいです」。',
        examples: [
          {
            jp: '<ruby>音楽<rt>おんがく</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。',
            plain: 'おんがくがすきです。',
            cn: '喜欢音乐。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 2 課
  // ========================================================
  {
    id: 2,
    level: 'N5',
    title: {
      jp: 'これ・それ・あれ',
      romaji: 'kore · sore · are',
      cn: '指示代词',
      en: 'Demonstratives',
    },
    goals: [
      '掌握こ・そ・あ・ど系完整体系',
      '能区分独立用法（これ）和修饰用法（この）',
      '掌握「N の N」表示所属，以及省略后续名词的用法',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '教室の中',
          romaji: 'kyoushitsu no naka',
          cn: '教室里',
        },
        sentences: [
          {
            jp: '<ruby>山田<rt>やまだ</rt></ruby>さん、<ruby>初<rt>はじ</rt></ruby>めまして。',
            plain: 'やまださん、はじめまして。',
            romaji: 'Yamada-san, hajimemashite.',
            cn: '山田同学，初次见面。',
          },
          {
            jp: 'これは<ruby>私<rt>わたし</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>です。',
            plain: 'これはわたしのほんです。',
            romaji: 'kore wa watashi no hon desu.',
            cn: '这是我的书。',
          },
          {
            jp: 'それも<ruby>本<rt>ほん</rt></ruby>ですか。',
            plain: 'それもほんですか。',
            romaji: 'sore mo hon desu ka.',
            cn: '那也是书吗？',
          },
          {
            jp: 'いいえ、これは<ruby>本<rt>ほん</rt></ruby>じゃありません。ノートです。',
            plain: 'いいえ、これはほんじゃありません。ノートです。',
            romaji: 'iie, kore wa hon ja arimasen. nooto desu.',
            cn: '不，这不是书。是笔记本。',
          },
          {
            jp: 'あれは<ruby>誰<rt>だれ</rt></ruby>のかばんですか。',
            plain: 'あれはだれのかばんですか。',
            romaji: 'are wa dare no kaban desu ka.',
            cn: '那（远处）是谁的书包？',
          },
          {
            jp: 'あれは<ruby>田中<rt>たなか</rt></ruby>さんのかばんです。',
            plain: 'あれはたなかさんのかばんです。',
            romaji: 'are wa Tanaka-san no kaban desu.',
            cn: '那是田中的书包。',
          },
          {
            jp: 'この<ruby>教室<rt>きょうしつ</rt></ruby>は<ruby>静<rt>しず</rt></ruby>かですね。',
            plain: 'このきょうしつはしずかですね。',
            romaji: 'kono kyoushitsu wa shizuka desu ne.',
            cn: '这间教室真安静呢。',
          },
          {
            jp: 'ええ、<ruby>図書館<rt>としょかん</rt></ruby>はあそこですよ。',
            plain: 'ええ、としょかんはあそこですよ。',
            romaji: 'ee, toshokan wa asoko desu yo.',
            cn: '是啊，图书馆在那边哦。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: 'かばんの中身',
          romaji: 'kaban no nakami',
          cn: '书包里的东西',
        },
        sentences: [
          {
            jp: 'これは<ruby>私<rt>わたし</rt></ruby>のかばんです。',
            plain: 'これはわたしのかばんです。',
            romaji: 'kore wa watashi no kaban desu.',
            cn: '这是我的书包。',
          },
          {
            jp: '<ruby>中<rt>なか</rt></ruby>に<ruby>色々<rt>いろいろ</rt></ruby>なものがあります。',
            plain: 'なかにいろいろなものがあります。',
            romaji: 'naka ni iroiro na mono ga arimasu.',
            cn: '里面有各种各样的东西。',
          },
          {
            jp: 'これは<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>教科書<rt>きょうかしょ</rt></ruby>です。',
            plain: 'これはにほんごのきょうかしょです。',
            romaji: 'kore wa nihongo no kyoukasho desu.',
            cn: '这是日语教科书。',
          },
          {
            jp: 'それは<ruby>友達<rt>ともだち</rt></ruby>のペンです。',
            plain: 'それはともだちのペンです。',
            romaji: 'sore wa tomodachi no pen desu.',
            cn: '那是朋友的笔。',
          },
          {
            jp: 'この<ruby>傘<rt>かさ</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>のですか。',
            plain: 'このかさはだれのですか。',
            romaji: 'kono kasa wa dare no desu ka.',
            cn: '这把伞是谁的？',
          },
          {
            jp: '<ruby>母<rt>はは</rt></ruby>のです。',
            plain: 'ははのです。',
            romaji: 'haha no desu.',
            cn: '是妈妈的。',
          },
          {
            jp: 'あの<ruby>赤<rt>あか</rt></ruby>い<ruby>手帳<rt>てちょう</rt></ruby>も<ruby>母<rt>はは</rt></ruby>のです。',
            plain: 'あのあかいてちょうもははのです。',
            romaji: 'ano akai techou mo haha no desu.',
            cn: '那本红色的笔记本也是妈妈的。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '本屋で。お客さんと店員。',
        cn: '书店里。顾客和店员。',
      },
      lines: [
        {
          speaker: '客',
          jp: 'すみません、この<ruby>本<rt>ほん</rt></ruby>はいくらですか。',
          plain: 'すみません、このほんはいくらですか。',
          romaji: 'sumimasen, kono hon wa ikura desu ka.',
          cn: '请问，这本书多少钱？',
        },
        {
          speaker: '店員',
          jp: 'それは<ruby>千五百円<rt>せんごひゃくえん</rt></ruby>です。',
          plain: 'それはせんごひゃくえんです。',
          romaji: 'sore wa sen-go-hyaku-en desu.',
          cn: '那本是 1500 日元。',
        },
        {
          speaker: '客',
          jp: 'あの<ruby>辞書<rt>じしょ</rt></ruby>は。',
          plain: 'あのじしょは。',
          romaji: 'ano jisho wa.',
          cn: '那本词典呢？',
        },
        {
          speaker: '店員',
          jp: 'あれは<ruby>三千円<rt>さんぜんえん</rt></ruby>です。',
          plain: 'あれはさんぜんえんです。',
          romaji: 'are wa san-zen-en desu.',
          cn: '那本是 3000 日元。',
        },
        {
          speaker: '客',
          jp: 'じゃあ、この<ruby>本<rt>ほん</rt></ruby>をください。',
          plain: 'じゃあ、このほんをください。',
          romaji: 'jaa, kono hon o kudasai.',
          cn: '那么，请给我这本书。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: 'これは<ruby>何<rt>なん</rt></ruby>ですか。（ノートを<ruby>見<rt>み</rt></ruby>せて）',
          plain: 'これはなんですか。',
          romaji: 'kore wa nan desu ka.',
          cn: '这是什么？（出示笔记本）',
        },
        a: {
          jp: 'それはノートです。',
          plain: 'それはノートです。',
          romaji: 'sore wa nooto desu.',
          cn: '那是笔记本。',
        },
        hint: '注意：对方拿着的，对自己来说是「それ」。',
      },
      {
        q: {
          jp: 'あのかばんは<ruby>誰<rt>だれ</rt></ruby>のですか。',
          plain: 'あのかばんはだれのですか。',
          romaji: 'ano kaban wa dare no desu ka.',
          cn: '那个书包是谁的？',
        },
        a: {
          jp: '<ruby>田中<rt>たなか</rt></ruby>さんのです。',
          plain: 'たなかさんのです。',
          romaji: 'Tanaka-san no desu.',
          cn: '是田中的。',
        },
      },
      {
        q: {
          jp: '<ruby>図書館<rt>としょかん</rt></ruby>はどこですか。',
          plain: 'としょかんはどこですか。',
          romaji: 'toshokan wa doko desu ka.',
          cn: '图书馆在哪里？',
        },
        a: {
          jp: 'あそこです。',
          plain: 'あそこです。',
          romaji: 'asoko desu.',
          cn: '在那边。',
        },
      },
      {
        q: {
          jp: 'この<ruby>本<rt>ほん</rt></ruby>はいくらですか。',
          plain: 'このほんはいくらですか。',
          romaji: 'kono hon wa ikura desu ka.',
          cn: '这本书多少钱？',
        },
        a: {
          jp: '<ruby>千五百円<rt>せんごひゃくえん</rt></ruby>です。',
          plain: 'せんごひゃくえんです。',
          romaji: 'sen-go-hyaku-en desu.',
          cn: '1500 日元。',
        },
      },
    ],
    vocabulary: [
      { jp: '本', kana: 'ほん', romaji: 'hon', meaning: '书', pos: '名詞' },
      { jp: 'ノート', kana: 'ノート', romaji: 'nooto', meaning: '笔记本', pos: '名詞' },
      { jp: 'かばん', kana: 'かばん', romaji: 'kaban', meaning: '包', pos: '名詞' },
      { jp: '誰', kana: 'だれ', romaji: 'dare', meaning: '谁', pos: '疑問詞' },
      { jp: '教室', kana: 'きょうしつ', romaji: 'kyoushitsu', meaning: '教室', pos: '名詞' },
      { jp: '図書館', kana: 'としょかん', romaji: 'toshokan', meaning: '图书馆', pos: '名詞' },
      { jp: '中', kana: 'なか', romaji: 'naka', meaning: '里面', pos: '名詞' },
      { jp: '色々な', kana: 'いろいろな', romaji: 'iroiro na', meaning: '各种各样的', pos: 'な形容詞' },
      { jp: 'もの', kana: 'もの', romaji: 'mono', meaning: '东西', pos: '名詞' },
      { jp: '教科書', kana: 'きょうかしょ', romaji: 'kyoukasho', meaning: '教科书', pos: '名詞' },
      { jp: '友達', kana: 'ともだち', romaji: 'tomodachi', meaning: '朋友', pos: '名詞' },
      { jp: 'ペン', kana: 'ペン', romaji: 'pen', meaning: '笔', pos: '名詞' },
      { jp: '傘', kana: 'かさ', romaji: 'kasa', meaning: '伞', pos: '名詞' },
      { jp: '母', kana: 'はは', romaji: 'haha', meaning: '妈妈（自己的）', pos: '名詞' },
      { jp: '赤い', kana: 'あかい', romaji: 'akai', meaning: '红色的', pos: 'い形容詞' },
      { jp: '手帳', kana: 'てちょう', romaji: 'techou', meaning: '记事本', pos: '名詞' },
      { jp: 'いくら', kana: 'いくら', romaji: 'ikura', meaning: '多少钱', pos: '疑問詞' },
      { jp: '辞書', kana: 'じしょ', romaji: 'jisho', meaning: '词典', pos: '名詞' },
      { jp: 'ください', kana: 'ください', romaji: 'kudasai', meaning: '请给我', pos: '慣用句' },
      { jp: '初めまして', kana: 'はじめまして', romaji: 'hajimemashite', meaning: '初次见面', pos: '感動詞' },
    ],
    grammar: [
      {
        pattern: 'これ・それ・あれ',
        name: '独立指示代词',
        explain: 'これ＝离自己近的物（this），それ＝离对方近的物（that），あれ＝离双方都远的物（that over there）。这三者可以单独作主语或宾语。',
        examples: [
          {
            jp: 'これは<ruby>本<rt>ほん</rt></ruby>です。',
            plain: 'これはほんです。',
            cn: '这是书。',
          },
          {
            jp: 'あれは<ruby>富士山<rt>ふじさん</rt></ruby>です。',
            plain: 'あれはふじさんです。',
            cn: '那是富士山。',
          },
        ],
      },
      {
        pattern: 'この／その／あの + N',
        name: '修饰用指示词',
        explain: '必须接名词。「この本」（这本书）、「あの人」（那个人）。注意：不能说「この は 本です」，必须是「これ は 本です」或「この本は本です」。',
        examples: [
          {
            jp: 'この<ruby>本<rt>ほん</rt></ruby>は<ruby>面白<rt>おもしろ</rt></ruby>いです。',
            plain: 'このほんはおもしろいです。',
            cn: '这本书很有趣。',
          },
        ],
      },
      {
        pattern: 'N₁ の N₂',
        name: '所属表达',
        explain: '「の」表示所属、所属关系。「私の本」（我的书）。当 N₂ 从上下文能推断时，可省略，如「これは母のです」（省略了「手帳」）。',
        examples: [
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>の<ruby>友達<rt>ともだち</rt></ruby>です。',
            plain: 'わたしのともだちです。',
            cn: '是我的朋友。',
          },
          {
            jp: 'これは<ruby>母<rt>はは</rt></ruby>のです。',
            plain: 'これはははのです。',
            cn: '这是妈妈的。（省略具体物品）',
          },
        ],
      },
      {
        pattern: '〜じゃありません',
        name: 'です的否定形',
        explain: '「です」的否定形。口语也说「じゃないです」，书面体说「ではありません」。',
        examples: [
          {
            jp: 'これは<ruby>本<rt>ほん</rt></ruby>じゃありません。',
            plain: 'これはほんじゃありません。',
            cn: '这不是书。',
          },
        ],
      },
      {
        pattern: 'N も',
        name: '副助词「も」',
        explain: '「也」的意思，替换助词「は」或「が」。注意：「も」前不再加「は」。',
        examples: [
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>も<ruby>学生<rt>がくせい</rt></ruby>です。',
            plain: 'わたしもがくせいです。',
            cn: '我也是学生。',
          },
        ],
      },
      {
        pattern: '〜ね／〜よ',
        name: '句末语气助词',
        explain: '「ね」用于寻求对方共鸣（"...对吧"），「よ」用于告知对方不知道的信息（"...哦"）。',
        examples: [
          {
            jp: '<ruby>静<rt>しず</rt></ruby>かですね。',
            plain: 'しずかですね。',
            cn: '真安静呢。',
          },
          {
            jp: 'あそこですよ。',
            plain: 'あそこですよ。',
            cn: '在那边哦。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 3 課
  // ========================================================
  {
    id: 3,
    level: 'N5',
    title: {
      jp: '場所と存在',
      romaji: 'basho to sonzai',
      cn: '场所与存在',
      en: 'Places and Existence',
    },
    goals: [
      '掌握「あります」（无生命）与「います」（有生命）的区别',
      '能用「N に N が あります／います」描述场所',
      '掌握位置词：上、下、前、後ろ、中、外、隣',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '私の部屋',
          romaji: 'watashi no heya',
          cn: '我的房间',
        },
        sentences: [
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>は<ruby>広<rt>ひろ</rt></ruby>くないです。',
            plain: 'わたしのへやはひろくないです。',
            romaji: 'watashi no heya wa hirokunai desu.',
            cn: '我的房间不大。',
          },
          {
            jp: '<ruby>窓<rt>まど</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くに<ruby>机<rt>つくえ</rt></ruby>があります。',
            plain: 'まどのちかくにつくえがあります。',
            romaji: 'mado no chikaku ni tsukue ga arimasu.',
            cn: '窗户旁边有一张桌子。',
          },
          {
            jp: '<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>とパソコンがあります。',
            plain: 'つくえのうえにほんとパソコンがあります。',
            romaji: 'tsukue no ue ni hon to pasokon ga arimasu.',
            cn: '桌上有书和电脑。',
          },
          {
            jp: '<ruby>机<rt>つくえ</rt></ruby>の<ruby>下<rt>した</rt></ruby>には<ruby>何<rt>なに</rt></ruby>もありません。',
            plain: 'つくえのしたにはなにもありません。',
            romaji: 'tsukue no shita ni wa nani mo arimasen.',
            cn: '桌子下面什么都没有。',
          },
          {
            jp: '<ruby>部屋<rt>へや</rt></ruby>の<ruby>隅<rt>すみ</rt></ruby>に<ruby>猫<rt>ねこ</rt></ruby>がいます。',
            plain: 'へやのすみにねこがいます。',
            romaji: 'heya no sumi ni neko ga imasu.',
            cn: '房间的角落里有一只猫。',
          },
          {
            jp: '<ruby>名前<rt>なまえ</rt></ruby>は「タマ」です。',
            plain: 'なまえは「タマ」です。',
            romaji: 'namae wa "Tama" desu.',
            cn: '名字叫"小玉"。',
          },
          {
            jp: 'タマは<ruby>家族<rt>かぞく</rt></ruby>です。',
            plain: 'タマはかぞくです。',
            romaji: 'Tama wa kazoku desu.',
            cn: '小玉是家人。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '駅の近く',
          romaji: 'eki no chikaku',
          cn: '车站附近',
        },
        sentences: [
          {
            jp: '<ruby>駅<rt>えき</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>にスーパーがあります。',
            plain: 'えきのまえにスーパーがあります。',
            romaji: 'eki no mae ni suupaa ga arimasu.',
            cn: '车站前面有超市。',
          },
          {
            jp: 'スーパーの<ruby>隣<rt>となり</rt></ruby>に<ruby>銀行<rt>ぎんこう</rt></ruby>があります。',
            plain: 'スーパーのとなりにぎんこうがあります。',
            romaji: 'suupaa no tonari ni ginkou ga arimasu.',
            cn: '超市旁边有银行。',
          },
          {
            jp: '<ruby>銀行<rt>ぎんこう</rt></ruby>の<ruby>後<rt>うし</rt></ruby>ろは<ruby>公園<rt>こうえん</rt></ruby>です。',
            plain: 'ぎんこうのうしろはこうえんです。',
            romaji: 'ginkou no ushiro wa kouen desu.',
            cn: '银行后面是公园。',
          },
          {
            jp: '<ruby>公園<rt>こうえん</rt></ruby>には<ruby>子供<rt>こども</rt></ruby>たちがいます。',
            plain: 'こうえんにはこどもたちがいます。',
            romaji: 'kouen ni wa kodomo-tachi ga imasu.',
            cn: '公园里有孩子们。',
          },
          {
            jp: '<ruby>木<rt>き</rt></ruby>の<ruby>下<rt>した</rt></ruby>に<ruby>犬<rt>いぬ</rt></ruby>もいます。',
            plain: 'きのしたにいぬもいます。',
            romaji: 'ki no shita ni inu mo imasu.',
            cn: '树下也有狗。',
          },
          {
            jp: 'とてもにぎやかな<ruby>場所<rt>ばしょ</rt></ruby>です。',
            plain: 'とてもにぎやかなばしょです。',
            romaji: 'totemo nigiyaka na basho desu.',
            cn: '是个非常热闹的地方。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '友達が初めて家に来た。',
        cn: '朋友第一次来家里。',
      },
      lines: [
        {
          speaker: '友達',
          jp: 'いい<ruby>部屋<rt>へや</rt></ruby>ですね。トイレはどこですか。',
          plain: 'いいへやですね。トイレはどこですか。',
          romaji: 'ii heya desu ne. toire wa doko desu ka.',
          cn: '房间不错呢。洗手间在哪里？',
        },
        {
          speaker: '私',
          jp: 'トイレはあそこです。<ruby>台所<rt>だいどころ</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>です。',
          plain: 'トイレはあそこです。だいどころのとなりです。',
          romaji: 'toire wa asoko desu. daidokoro no tonari desu.',
          cn: '洗手间在那边。在厨房旁边。',
        },
        {
          speaker: '友達',
          jp: 'あ、<ruby>猫<rt>ねこ</rt></ruby>がいますね。<ruby>可愛<rt>かわい</rt></ruby>いですね。',
          plain: 'あ、ねこがいますね。かわいいですね。',
          romaji: 'a, neko ga imasu ne. kawaii desu ne.',
          cn: '啊，有只猫呢。好可爱啊。',
        },
        {
          speaker: '私',
          jp: 'タマです。とても<ruby>静<rt>しず</rt></ruby>かな<ruby>猫<rt>ねこ</rt></ruby>ですよ。',
          plain: 'タマです。とてもしずかなねこですよ。',
          romaji: 'Tama desu. totemo shizuka na neko desu yo.',
          cn: '叫小玉。是很安静的猫哦。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>何<rt>なに</rt></ruby>がありますか。',
          plain: 'つくえのうえになにがありますか。',
          romaji: 'tsukue no ue ni nani ga arimasu ka.',
          cn: '桌上有什么？',
        },
        a: {
          jp: '<ruby>本<rt>ほん</rt></ruby>とパソコンがあります。',
          plain: 'ほんとパソコンがあります。',
          romaji: 'hon to pasokon ga arimasu.',
          cn: '有书和电脑。',
        },
      },
      {
        q: {
          jp: '<ruby>部屋<rt>へや</rt></ruby>の<ruby>隅<rt>すみ</rt></ruby>に<ruby>何<rt>なに</rt></ruby>がいますか。',
          plain: 'へやのすみになにがいますか。',
          romaji: 'heya no sumi ni nani ga imasu ka.',
          cn: '房间角落里有什么？',
        },
        a: {
          jp: '<ruby>猫<rt>ねこ</rt></ruby>がいます。',
          plain: 'ねこがいます。',
          romaji: 'neko ga imasu.',
          cn: '有一只猫。',
        },
        hint: '注意：动物用「います」不用「あります」。',
      },
      {
        q: {
          jp: '<ruby>銀行<rt>ぎんこう</rt></ruby>はどこにありますか。',
          plain: 'ぎんこうはどこにありますか。',
          romaji: 'ginkou wa doko ni arimasu ka.',
          cn: '银行在哪里？',
        },
        a: {
          jp: 'スーパーの<ruby>隣<rt>となり</rt></ruby>にあります。',
          plain: 'スーパーのとなりにあります。',
          romaji: 'suupaa no tonari ni arimasu.',
          cn: '在超市旁边。',
        },
      },
      {
        q: {
          jp: '<ruby>公園<rt>こうえん</rt></ruby>には<ruby>誰<rt>だれ</rt></ruby>がいますか。',
          plain: 'こうえんにはだれがいますか。',
          romaji: 'kouen ni wa dare ga imasu ka.',
          cn: '公园里有谁？',
        },
        a: {
          jp: '<ruby>子供<rt>こども</rt></ruby>たちがいます。',
          plain: 'こどもたちがいます。',
          romaji: 'kodomo-tachi ga imasu.',
          cn: '有孩子们。',
        },
      },
    ],
    vocabulary: [
      { jp: '部屋', kana: 'へや', romaji: 'heya', meaning: '房间', pos: '名詞' },
      { jp: '広い', kana: 'ひろい', romaji: 'hiroi', meaning: '宽敞的', pos: 'い形容詞' },
      { jp: '窓', kana: 'まど', romaji: 'mado', meaning: '窗户', pos: '名詞' },
      { jp: '近く', kana: 'ちかく', romaji: 'chikaku', meaning: '附近', pos: '名詞' },
      { jp: '机', kana: 'つくえ', romaji: 'tsukue', meaning: '桌子', pos: '名詞' },
      { jp: '上', kana: 'うえ', romaji: 'ue', meaning: '上面', pos: '名詞' },
      { jp: '下', kana: 'した', romaji: 'shita', meaning: '下面', pos: '名詞' },
      { jp: '前', kana: 'まえ', romaji: 'mae', meaning: '前面', pos: '名詞' },
      { jp: '後ろ', kana: 'うしろ', romaji: 'ushiro', meaning: '后面', pos: '名詞' },
      { jp: '隣', kana: 'となり', romaji: 'tonari', meaning: '旁边', pos: '名詞' },
      { jp: '隅', kana: 'すみ', romaji: 'sumi', meaning: '角落', pos: '名詞' },
      { jp: 'パソコン', kana: 'パソコン', romaji: 'pasokon', meaning: '电脑', pos: '名詞' },
      { jp: '猫', kana: 'ねこ', romaji: 'neko', meaning: '猫', pos: '名詞' },
      { jp: '犬', kana: 'いぬ', romaji: 'inu', meaning: '狗', pos: '名詞' },
      { jp: '名前', kana: 'なまえ', romaji: 'namae', meaning: '名字', pos: '名詞' },
      { jp: '駅', kana: 'えき', romaji: 'eki', meaning: '车站', pos: '名詞' },
      { jp: 'スーパー', kana: 'スーパー', romaji: 'suupaa', meaning: '超市', pos: '名詞' },
      { jp: '銀行', kana: 'ぎんこう', romaji: 'ginkou', meaning: '银行', pos: '名詞' },
      { jp: '公園', kana: 'こうえん', romaji: 'kouen', meaning: '公园', pos: '名詞' },
      { jp: '子供', kana: 'こども', romaji: 'kodomo', meaning: '孩子', pos: '名詞' },
      { jp: '木', kana: 'き', romaji: 'ki', meaning: '树', pos: '名詞' },
      { jp: '場所', kana: 'ばしょ', romaji: 'basho', meaning: '场所', pos: '名詞' },
      { jp: 'にぎやかな', kana: 'にぎやかな', romaji: 'nigiyaka na', meaning: '热闹的', pos: 'な形容詞' },
      { jp: 'トイレ', kana: 'トイレ', romaji: 'toire', meaning: '洗手间', pos: '名詞' },
      { jp: '台所', kana: 'だいどころ', romaji: 'daidokoro', meaning: '厨房', pos: '名詞' },
      { jp: '可愛い', kana: 'かわいい', romaji: 'kawaii', meaning: '可爱的', pos: 'い形容詞' },
      { jp: 'とても', kana: 'とても', romaji: 'totemo', meaning: '非常', pos: '副詞' },
    ],
    grammar: [
      {
        pattern: 'N に N が あります',
        name: '存在句（无生命）',
        explain: '用于无生命的物体（书、桌子、建筑物等）。「に」表示存在的场所，「が」标记存在的主体。否定形是「ありません」。',
        examples: [
          {
            jp: '<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>があります。',
            plain: 'つくえのうえにほんがあります。',
            cn: '桌上有书。',
          },
        ],
      },
      {
        pattern: 'N に N が います',
        name: '存在句（有生命）',
        explain: '用于人和动物等有生命的存在。注意：植物用「あります」不用「います」。',
        examples: [
          {
            jp: '<ruby>公園<rt>こうえん</rt></ruby>に<ruby>子供<rt>こども</rt></ruby>がいます。',
            plain: 'こうえんにこどもがいます。',
            cn: '公园里有小孩。',
          },
          {
            jp: '<ruby>木<rt>き</rt></ruby>があります。（植物）',
            plain: 'きがあります。',
            cn: '有树。（植物用 あります）',
          },
        ],
      },
      {
        pattern: 'N₁ は N₂ にあります／います',
        name: '存在句的另一种语序',
        explain: '当主体是已知信息时，用「は」前置。"那个东西在哪里"的语序。',
        examples: [
          {
            jp: '<ruby>銀行<rt>ぎんこう</rt></ruby>はスーパーの<ruby>隣<rt>となり</rt></ruby>にあります。',
            plain: 'ぎんこうはスーパーのとなりにあります。',
            cn: '银行在超市旁边。',
          },
        ],
      },
      {
        pattern: '位置词 + の + N',
        name: '位置词修饰',
        explain: '表示相对位置时，位置词放在被修饰名词前用「の」连接。常见：上／下／前／後ろ／中／外／隣／近く／間。',
        examples: [
          {
            jp: '<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>',
            plain: 'つくえのうえ',
            cn: '桌子的上面',
          },
          {
            jp: 'スーパーの<ruby>隣<rt>となり</rt></ruby>',
            plain: 'スーパーのとなり',
            cn: '超市的旁边',
          },
        ],
      },
      {
        pattern: '何も〜ません',
        name: '完全否定',
        explain: '「何も」+ 否定形，表示"什么都没有/不"。同类还有「誰も」（谁都不）、「どこも」（哪里都不）。',
        examples: [
          {
            jp: '<ruby>何<rt>なに</rt></ruby>もありません。',
            plain: 'なにもありません。',
            cn: '什么都没有。',
          },
        ],
      },
      {
        pattern: 'N₁ と N₂',
        name: '名词的并列',
        explain: '「と」连接两个或多个名词，相当于"和"。注意只用于名词并列，不能连接动词或形容词。',
        examples: [
          {
            jp: '<ruby>本<rt>ほん</rt></ruby>とパソコン',
            plain: 'ほんとパソコン',
            cn: '书和电脑',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 4 課
  // ========================================================
  {
    id: 4,
    level: 'N5',
    title: {
      jp: '時間と曜日',
      romaji: 'jikan to youbi',
      cn: '时间与星期',
      en: 'Time and Days',
    },
    goals: [
      '能正确读出时刻（〜時〜分）和星期',
      '掌握「〜から〜まで」的时间起止表达',
      '能询问和回答营业时间、上班时间等',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '銀行の営業時間',
          romaji: 'ginkou no eigyou-jikan',
          cn: '银行的营业时间',
        },
        sentences: [
          {
            jp: '<ruby>駅<rt>えき</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に<ruby>銀行<rt>ぎんこう</rt></ruby>があります。',
            plain: 'えきのまえにぎんこうがあります。',
            romaji: 'eki no mae ni ginkou ga arimasu.',
            cn: '车站前有家银行。',
          },
          {
            jp: '<ruby>銀行<rt>ぎんこう</rt></ruby>は<ruby>月曜日<rt>げつようび</rt></ruby>から<ruby>金曜日<rt>きんようび</rt></ruby>までです。',
            plain: 'ぎんこうはげつようびからきんようびまでです。',
            romaji: 'ginkou wa getsuyoubi kara kin\'youbi made desu.',
            cn: '银行从星期一到星期五（开门）。',
          },
          {
            jp: '<ruby>営業時間<rt>えいぎょうじかん</rt></ruby>は<ruby>九時<rt>くじ</rt></ruby>から<ruby>三時<rt>さんじ</rt></ruby>までです。',
            plain: 'えいぎょうじかんはくじからさんじまでです。',
            romaji: 'eigyou-jikan wa ku-ji kara san-ji made desu.',
            cn: '营业时间是九点到三点。',
          },
          {
            jp: '<ruby>土曜日<rt>どようび</rt></ruby>と<ruby>日曜日<rt>にちようび</rt></ruby>は<ruby>休<rt>やす</rt></ruby>みです。',
            plain: 'どようびとにちようびはやすみです。',
            romaji: 'doyoubi to nichiyoubi wa yasumi desu.',
            cn: '周六和周日休息。',
          },
          {
            jp: 'デパートは<ruby>毎日<rt>まいにち</rt></ruby><ruby>十時<rt>じゅうじ</rt></ruby>から<ruby>夜<rt>よる</rt></ruby><ruby>八時<rt>はちじ</rt></ruby>までです。',
            plain: 'デパートはまいにちじゅうじからよるはちじまでです。',
            romaji: 'depaato wa mainichi juu-ji kara yoru hachi-ji made desu.',
            cn: '百货公司每天从十点到晚上八点（营业）。',
          },
          {
            jp: 'コンビニは<ruby>二十四時間<rt>にじゅうよじかん</rt></ruby>です。',
            plain: 'コンビニはにじゅうよじかんです。',
            romaji: 'konbini wa nijuuyo-jikan desu.',
            cn: '便利店是 24 小时（营业）。',
          },
          {
            jp: 'とても<ruby>便利<rt>べんり</rt></ruby>ですね。',
            plain: 'とてもべんりですね。',
            romaji: 'totemo benri desu ne.',
            cn: '非常方便呢。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '日曜日のスケジュール',
          romaji: 'nichiyoubi no sukejuuru',
          cn: '周日的日程',
        },
        sentences: [
          {
            jp: '<ruby>日曜日<rt>にちようび</rt></ruby>は<ruby>忙<rt>いそが</rt></ruby>しいです。',
            plain: 'にちようびはいそがしいです。',
            romaji: 'nichiyoubi wa isogashii desu.',
            cn: '星期天很忙。',
          },
          {
            jp: '<ruby>朝<rt>あさ</rt></ruby><ruby>七時<rt>しちじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。',
            plain: 'あさしちじにおきます。',
            romaji: 'asa shichi-ji ni okimasu.',
            cn: '早上七点起床。',
          },
          {
            jp: '<ruby>九時<rt>くじ</rt></ruby>から<ruby>十一時<rt>じゅういちじ</rt></ruby>まで<ruby>図書館<rt>としょかん</rt></ruby>で<ruby>勉強<rt>べんきょう</rt></ruby>します。',
            plain: 'くじからじゅういちじまでとしょかんでべんきょうします。',
            romaji: 'ku-ji kara juuichi-ji made toshokan de benkyou shimasu.',
            cn: '九点到十一点在图书馆学习。',
          },
          {
            jp: '<ruby>昼<rt>ひる</rt></ruby><ruby>十二時<rt>じゅうにじ</rt></ruby>に<ruby>友達<rt>ともだち</rt></ruby>と<ruby>会<rt>あ</rt></ruby>います。',
            plain: 'ひるじゅうにじにともだちとあいます。',
            romaji: 'hiru juuni-ji ni tomodachi to aimasu.',
            cn: '中午十二点和朋友见面。',
          },
          {
            jp: '<ruby>午後<rt>ごご</rt></ruby><ruby>三時<rt>さんじ</rt></ruby>から<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。',
            plain: 'ごごさんじからえいがをみます。',
            romaji: 'gogo san-ji kara eiga o mimasu.',
            cn: '下午三点开始看电影。',
          },
          {
            jp: '<ruby>夜<rt>よる</rt></ruby>は<ruby>家<rt>いえ</rt></ruby>でゆっくり<ruby>休<rt>やす</rt></ruby>みます。',
            plain: 'よるはいえでゆっくりやすみます。',
            romaji: 'yoru wa ie de yukkuri yasumimasu.',
            cn: '晚上在家好好休息。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '銀行の前で、観光客が地元の人に聞く。',
        cn: '银行门前，游客向当地人询问。',
      },
      lines: [
        {
          speaker: '観光客',
          jp: 'すみません、<ruby>銀行<rt>ぎんこう</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>からですか。',
          plain: 'すみません、ぎんこうはなんじからですか。',
          romaji: 'sumimasen, ginkou wa nan-ji kara desu ka.',
          cn: '请问，银行几点开门？',
        },
        {
          speaker: '地元の人',
          jp: '<ruby>九時<rt>くじ</rt></ruby>からですよ。',
          plain: 'くじからですよ。',
          romaji: 'ku-ji kara desu yo.',
          cn: '九点开始哦。',
        },
        {
          speaker: '観光客',
          jp: '<ruby>何時<rt>なんじ</rt></ruby>までですか。',
          plain: 'なんじまでですか。',
          romaji: 'nan-ji made desu ka.',
          cn: '到几点？',
        },
        {
          speaker: '地元の人',
          jp: '<ruby>三時<rt>さんじ</rt></ruby>までです。<ruby>今日<rt>きょう</rt></ruby>は<ruby>金曜日<rt>きんようび</rt></ruby>ですから、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですよ。',
          plain: 'さんじまでです。きょうはきんようびですから、だいじょうぶですよ。',
          romaji: 'san-ji made desu. kyou wa kin\'youbi desu kara, daijoubu desu yo.',
          cn: '到三点。今天是星期五，所以没问题哦。',
        },
        {
          speaker: '観光客',
          jp: 'ありがとうございます。',
          plain: 'ありがとうございます。',
          romaji: 'arigatou gozaimasu.',
          cn: '谢谢。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>銀行<rt>ぎんこう</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>から<ruby>何時<rt>なんじ</rt></ruby>までですか。',
          plain: 'ぎんこうはなんじからなんじまでですか。',
          romaji: 'ginkou wa nan-ji kara nan-ji made desu ka.',
          cn: '银行从几点到几点？',
        },
        a: {
          jp: '<ruby>九時<rt>くじ</rt></ruby>から<ruby>三時<rt>さんじ</rt></ruby>までです。',
          plain: 'くじからさんじまでです。',
          romaji: 'ku-ji kara san-ji made desu.',
          cn: '从九点到三点。',
        },
      },
      {
        q: {
          jp: '<ruby>銀行<rt>ぎんこう</rt></ruby>の<ruby>休<rt>やす</rt></ruby>みは<ruby>何曜日<rt>なんようび</rt></ruby>ですか。',
          plain: 'ぎんこうのやすみはなんようびですか。',
          romaji: 'ginkou no yasumi wa nan\'youbi desu ka.',
          cn: '银行星期几休息？',
        },
        a: {
          jp: '<ruby>土曜日<rt>どようび</rt></ruby>と<ruby>日曜日<rt>にちようび</rt></ruby>です。',
          plain: 'どようびとにちようびです。',
          romaji: 'doyoubi to nichiyoubi desu.',
          cn: '星期六和星期天。',
        },
      },
      {
        q: {
          jp: '<ruby>日曜日<rt>にちようび</rt></ruby>の<ruby>午後<rt>ごご</rt></ruby><ruby>何<rt>なに</rt></ruby>をしますか。',
          plain: 'にちようびのごごなにをしますか。',
          romaji: 'nichiyoubi no gogo nani o shimasu ka.',
          cn: '星期天下午做什么？',
        },
        a: {
          jp: '<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。',
          plain: 'えいがをみます。',
          romaji: 'eiga o mimasu.',
          cn: '看电影。',
        },
      },
      {
        q: {
          jp: 'コンビニは<ruby>何時<rt>なんじ</rt></ruby>までですか。',
          plain: 'コンビニはなんじまでですか。',
          romaji: 'konbini wa nan-ji made desu ka.',
          cn: '便利店开到几点？',
        },
        a: {
          jp: '<ruby>二十四時間<rt>にじゅうよじかん</rt></ruby>です。<ruby>休<rt>やす</rt></ruby>みません。',
          plain: 'にじゅうよじかんです。やすみません。',
          romaji: 'nijuuyo-jikan desu. yasumimasen.',
          cn: '24 小时。不休息。',
        },
      },
    ],
    vocabulary: [
      { jp: '月曜日', kana: 'げつようび', romaji: 'getsuyoubi', meaning: '星期一', pos: '名詞' },
      { jp: '火曜日', kana: 'かようび', romaji: 'kayoubi', meaning: '星期二', pos: '名詞' },
      { jp: '水曜日', kana: 'すいようび', romaji: 'suiyoubi', meaning: '星期三', pos: '名詞' },
      { jp: '木曜日', kana: 'もくようび', romaji: 'mokuyoubi', meaning: '星期四', pos: '名詞' },
      { jp: '金曜日', kana: 'きんようび', romaji: 'kin\'youbi', meaning: '星期五', pos: '名詞' },
      { jp: '土曜日', kana: 'どようび', romaji: 'doyoubi', meaning: '星期六', pos: '名詞' },
      { jp: '日曜日', kana: 'にちようび', romaji: 'nichiyoubi', meaning: '星期天', pos: '名詞' },
      { jp: '営業時間', kana: 'えいぎょうじかん', romaji: 'eigyou-jikan', meaning: '营业时间', pos: '名詞' },
      { jp: '休み', kana: 'やすみ', romaji: 'yasumi', meaning: '休假；休息', pos: '名詞' },
      { jp: 'デパート', kana: 'デパート', romaji: 'depaato', meaning: '百货公司', pos: '名詞' },
      { jp: 'コンビニ', kana: 'コンビニ', romaji: 'konbini', meaning: '便利店', pos: '名詞' },
      { jp: '便利', kana: 'べんり', romaji: 'benri', meaning: '方便的', pos: 'な形容詞' },
      { jp: '忙しい', kana: 'いそがしい', romaji: 'isogashii', meaning: '忙碌的', pos: 'い形容詞' },
      { jp: '勉強します', kana: 'べんきょうします', romaji: 'benkyou shimasu', meaning: '学习', pos: '動詞III' },
      { jp: '会います', kana: 'あいます', romaji: 'aimasu', meaning: '见面', pos: '動詞I' },
      { jp: '午前', kana: 'ごぜん', romaji: 'gozen', meaning: '上午', pos: '名詞' },
      { jp: '午後', kana: 'ごご', romaji: 'gogo', meaning: '下午', pos: '名詞' },
      { jp: '映画', kana: 'えいが', romaji: 'eiga', meaning: '电影', pos: '名詞' },
      { jp: '見ます', kana: 'みます', romaji: 'mimasu', meaning: '看', pos: '動詞II' },
      { jp: '休みます', kana: 'やすみます', romaji: 'yasumimasu', meaning: '休息', pos: '動詞I' },
      { jp: 'ゆっくり', kana: 'ゆっくり', romaji: 'yukkuri', meaning: '慢慢地；好好地', pos: '副詞' },
      { jp: '何時', kana: 'なんじ', romaji: 'nan-ji', meaning: '几点', pos: '疑問詞' },
      { jp: '何曜日', kana: 'なんようび', romaji: 'nan\'youbi', meaning: '星期几', pos: '疑問詞' },
      { jp: '今日', kana: 'きょう', romaji: 'kyou', meaning: '今天', pos: '名詞' },
      { jp: '大丈夫', kana: 'だいじょうぶ', romaji: 'daijoubu', meaning: '没问题；没事', pos: 'な形容詞' },
    ],
    grammar: [
      {
        pattern: '〜時 / 〜分',
        name: '时刻表达',
        explain: '时刻读法有特殊变化：4 时（よじ）、7 时（しちじ）、9 时（くじ）、4 分（よんぷん）、6 分（ろっぷん）。注意「半」表示半点：「7 時半」=「7:30」。',
        examples: [
          {
            jp: '<ruby>九時<rt>くじ</rt></ruby><ruby>半<rt>はん</rt></ruby>',
            plain: 'くじはん',
            cn: '九点半',
          },
          {
            jp: '<ruby>四時<rt>よじ</rt></ruby><ruby>十五分<rt>じゅうごふん</rt></ruby>',
            plain: 'よじじゅうごふん',
            cn: '四点十五分',
          },
        ],
      },
      {
        pattern: 'N から N まで',
        name: '起止表达',
        explain: '「から」=从，「まで」=到。可用于时间和场所。「〜から〜まで」表示一段时间或一段距离。',
        examples: [
          {
            jp: '<ruby>九時<rt>くじ</rt></ruby>から<ruby>五時<rt>ごじ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きます。',
            plain: 'くじからごじまではたらきます。',
            cn: '从九点工作到五点。',
          },
          {
            jp: '<ruby>東京<rt>とうきょう</rt></ruby>から<ruby>大阪<rt>おおさか</rt></ruby>まで',
            plain: 'とうきょうからおおさかまで',
            cn: '从东京到大阪',
          },
        ],
      },
      {
        pattern: '〜曜日',
        name: '星期表达',
        explain: '七天分别为：月（げつ）／火（か）／水（すい）／木（もく）／金（きん）／土（ど）／日（にち）。问星期几用「何曜日」。',
        examples: [
          {
            jp: '<ruby>今日<rt>きょう</rt></ruby>は<ruby>火曜日<rt>かようび</rt></ruby>です。',
            plain: 'きょうはかようびです。',
            cn: '今天是星期二。',
          },
        ],
      },
      {
        pattern: '〜から、〜',
        name: '原因「から」',
        explain: '接在普通句末，表示"因为...所以..."。注意：作为助词的「から」（从）和接续助词的「から」（因为）形式相同但用法不同。',
        examples: [
          {
            jp: '<ruby>金曜日<rt>きんようび</rt></ruby>ですから、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。',
            plain: 'きんようびですから、だいじょうぶです。',
            cn: '因为是星期五，所以没问题。',
          },
        ],
      },
      {
        pattern: '何〜（なに・なん）',
        name: '疑问词',
        explain: '「何」单独用时多读「なに」，但接「で・に・の」或后接特定词时常读「なん」。例：何ですか（なんですか）／何を（なにを）／何時（なんじ）。',
        examples: [
          {
            jp: 'これは<ruby>何<rt>なん</rt></ruby>ですか。',
            plain: 'これはなんですか。',
            cn: '这是什么？',
          },
          {
            jp: '<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べますか。',
            plain: 'なにをたべますか。',
            cn: '吃什么？',
          },
        ],
      },
    ],
  },
// ========================================================
  // 第 5 課
  // ========================================================
  {
    id: 5,
    level: 'N5',
    title: {
      jp: '動作と目的地',
      romaji: 'dousa to mokutekichi',
      cn: '动作与目的地',
      en: 'Actions and Destinations',
    },
    goals: [
      '能用「〜へ行きます」「〜で来ます」描述移动',
      '掌握「〜と一緒に」与他人一起的表达',
      '能描述周末计划和旅行安排',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '週末の予定',
          romaji: 'shuumatsu no yotei',
          cn: '周末的计划',
        },
        sentences: [
          {
            jp: '<ruby>今度<rt>こんど</rt></ruby>の<ruby>土曜日<rt>どようび</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>と<ruby>京都<rt>きょうと</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。',
            plain: 'こんどのどようび、ともだちときょうとへいきます。',
            romaji: 'kondo no doyoubi, tomodachi to Kyouto e ikimasu.',
            cn: '这个星期六，我和朋友去京都。',
          },
          {
            jp: '<ruby>新幹線<rt>しんかんせん</rt></ruby>で<ruby>行<rt>い</rt></ruby>きます。',
            plain: 'しんかんせんでいきます。',
            romaji: 'shinkansen de ikimasu.',
            cn: '坐新干线去。',
          },
          {
            jp: '<ruby>東京駅<rt>とうきょうえき</rt></ruby>から<ruby>京都駅<rt>きょうとえき</rt></ruby>まで<ruby>二時間半<rt>にじかんはん</rt></ruby>です。',
            plain: 'とうきょうえきからきょうとえきまでにじかんはんです。',
            romaji: 'Toukyou-eki kara Kyouto-eki made ni-jikan-han desu.',
            cn: '从东京站到京都站要两个半小时。',
          },
          {
            jp: '<ruby>京都<rt>きょうと</rt></ruby>で<ruby>古<rt>ふる</rt></ruby>いお<ruby>寺<rt>てら</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。',
            plain: 'きょうとでふるいおてらをみます。',
            romaji: 'Kyouto de furui o-tera o mimasu.',
            cn: '在京都看古老的寺庙。',
          },
          {
            jp: '<ruby>夜<rt>よる</rt></ruby>は<ruby>旅館<rt>りょかん</rt></ruby>に<ruby>泊<rt>と</rt></ruby>まります。',
            plain: 'よるはりょかんにとまります。',
            romaji: 'yoru wa ryokan ni tomarimasu.',
            cn: '晚上住在日式旅馆。',
          },
          {
            jp: '<ruby>日曜日<rt>にちようび</rt></ruby>の<ruby>夕方<rt>ゆうがた</rt></ruby>、<ruby>東京<rt>とうきょう</rt></ruby>へ<ruby>帰<rt>かえ</rt></ruby>ります。',
            plain: 'にちようびのゆうがた、とうきょうへかえります。',
            romaji: 'nichiyoubi no yuugata, Toukyou e kaerimasu.',
            cn: '星期天傍晚回东京。',
          },
          {
            jp: 'とても<ruby>楽<rt>たの</rt></ruby>しみです。',
            plain: 'とてもたのしみです。',
            romaji: 'totemo tanoshimi desu.',
            cn: '非常期待。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '家族との旅行',
          romaji: 'kazoku to no ryokou',
          cn: '和家人的旅行',
        },
        sentences: [
          {
            jp: '<ruby>去年<rt>きょねん</rt></ruby>の<ruby>夏<rt>なつ</rt></ruby>、<ruby>家族<rt>かぞく</rt></ruby>と<ruby>北海道<rt>ほっかいどう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました。',
            plain: 'きょねんのなつ、かぞくとほっかいどうへいきました。',
            romaji: 'kyonen no natsu, kazoku to Hokkaidou e ikimashita.',
            cn: '去年夏天，我和家人去了北海道。',
          },
          {
            jp: '<ruby>飛行機<rt>ひこうき</rt></ruby>で<ruby>行<rt>い</rt></ruby>きました。',
            plain: 'ひこうきでいきました。',
            romaji: 'hikouki de ikimashita.',
            cn: '坐飞机去的。',
          },
          {
            jp: '<ruby>札幌<rt>さっぽろ</rt></ruby>から<ruby>函館<rt>はこだて</rt></ruby>まで<ruby>車<rt>くるま</rt></ruby>で<ruby>移動<rt>いどう</rt></ruby>しました。',
            plain: 'さっぽろからはこだてまでくるまでいどうしました。',
            romaji: 'Sapporo kara Hakodate made kuruma de idou shimashita.',
            cn: '从札幌到函馆我们开车移动。',
          },
          {
            jp: 'ラベンダーの<ruby>畑<rt>はたけ</rt></ruby>はとても<ruby>綺麗<rt>きれい</rt></ruby>でした。',
            plain: 'ラベンダーのはたけはとてもきれいでした。',
            romaji: 'rabendaa no hatake wa totemo kirei deshita.',
            cn: '薰衣草田非常漂亮。',
          },
          {
            jp: '<ruby>父<rt>ちち</rt></ruby>は<ruby>写真<rt>しゃしん</rt></ruby>をたくさん<ruby>撮<rt>と</rt></ruby>りました。',
            plain: 'ちちはしゃしんをたくさんとりました。',
            romaji: 'chichi wa shashin o takusan torimashita.',
            cn: '爸爸拍了很多照片。',
          },
          {
            jp: '<ruby>来年<rt>らいねん</rt></ruby>もまた<ruby>北海道<rt>ほっかいどう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きたいです。',
            plain: 'らいねんもまたほっかいどうへいきたいです。',
            romaji: 'rainen mo mata Hokkaidou e ikitai desu.',
            cn: '明年还想去北海道。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '同僚と週末の予定を話している。',
        cn: '和同事谈周末计划。',
      },
      lines: [
        {
          speaker: '田中',
          jp: '<ruby>鈴木<rt>すずき</rt></ruby>さん、<ruby>週末<rt>しゅうまつ</rt></ruby>はどこかへ<ruby>行<rt>い</rt></ruby>きますか。',
          plain: 'すずきさん、しゅうまつはどこかへいきますか。',
          romaji: 'Suzuki-san, shuumatsu wa dokoka e ikimasu ka.',
          cn: '铃木，周末要去哪儿吗？',
        },
        {
          speaker: '鈴木',
          jp: 'ええ、<ruby>家族<rt>かぞく</rt></ruby>と<ruby>横浜<rt>よこはま</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。<ruby>田中<rt>たなか</rt></ruby>さんは。',
          plain: 'ええ、かぞくとよこはまへいきます。たなかさんは。',
          romaji: 'ee, kazoku to Yokohama e ikimasu. Tanaka-san wa.',
          cn: '嗯，和家人去横滨。田中你呢？',
        },
        {
          speaker: '田中',
          jp: '<ruby>友達<rt>ともだち</rt></ruby>と<ruby>京都<rt>きょうと</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。<ruby>新幹線<rt>しんかんせん</rt></ruby>で<ruby>行<rt>い</rt></ruby>きますよ。',
          plain: 'ともだちときょうとへいきます。しんかんせんでいきますよ。',
          romaji: 'tomodachi to Kyouto e ikimasu. shinkansen de ikimasu yo.',
          cn: '和朋友去京都。坐新干线去哦。',
        },
        {
          speaker: '鈴木',
          jp: 'いいですね。<ruby>気<rt>き</rt></ruby>をつけて。',
          plain: 'いいですね。きをつけて。',
          romaji: 'ii desu ne. ki o tsukete.',
          cn: '真好啊。路上小心。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>誰<rt>だれ</rt></ruby>と<ruby>京都<rt>きょうと</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きますか。',
          plain: 'たなかさんはだれときょうとへいきますか。',
          romaji: 'Tanaka-san wa dare to Kyouto e ikimasu ka.',
          cn: '田中和谁去京都？',
        },
        a: {
          jp: '<ruby>友達<rt>ともだち</rt></ruby>と<ruby>行<rt>い</rt></ruby>きます。',
          plain: 'ともだちといきます。',
          romaji: 'tomodachi to ikimasu.',
          cn: '和朋友一起去。',
        },
      },
      {
        q: {
          jp: '<ruby>何<rt>なに</rt></ruby>で<ruby>京都<rt>きょうと</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きますか。',
          plain: 'なにできょうとへいきますか。',
          romaji: 'nani de Kyouto e ikimasu ka.',
          cn: '坐什么去京都？',
        },
        a: {
          jp: '<ruby>新幹線<rt>しんかんせん</rt></ruby>で<ruby>行<rt>い</rt></ruby>きます。',
          plain: 'しんかんせんでいきます。',
          romaji: 'shinkansen de ikimasu.',
          cn: '坐新干线去。',
        },
        hint: '注意「で」表示交通工具。',
      },
      {
        q: {
          jp: '<ruby>東京<rt>とうきょう</rt></ruby>から<ruby>京都<rt>きょうと</rt></ruby>まで<ruby>何時間<rt>なんじかん</rt></ruby>かかりますか。',
          plain: 'とうきょうからきょうとまでなんじかんかかりますか。',
          romaji: 'Toukyou kara Kyouto made nan-jikan kakarimasu ka.',
          cn: '从东京到京都要几个小时？',
        },
        a: {
          jp: '<ruby>二時間半<rt>にじかんはん</rt></ruby>です。',
          plain: 'にじかんはんです。',
          romaji: 'ni-jikan-han desu.',
          cn: '两个半小时。',
        },
      },
      {
        q: {
          jp: '<ruby>去年<rt>きょねん</rt></ruby>の<ruby>夏<rt>なつ</rt></ruby>、どこへ<ruby>行<rt>い</rt></ruby>きましたか。',
          plain: 'きょねんのなつ、どこへいきましたか。',
          romaji: 'kyonen no natsu, doko e ikimashita ka.',
          cn: '去年夏天去了哪里？',
        },
        a: {
          jp: '<ruby>北海道<rt>ほっかいどう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました。',
          plain: 'ほっかいどうへいきました。',
          romaji: 'Hokkaidou e ikimashita.',
          cn: '去了北海道。',
        },
      },
    ],
    vocabulary: [
      { jp: '今度', kana: 'こんど', romaji: 'kondo', meaning: '这次；下次', pos: '名詞' },
      { jp: '京都', kana: 'きょうと', romaji: 'Kyouto', meaning: '京都', pos: '名詞' },
      { jp: '新幹線', kana: 'しんかんせん', romaji: 'shinkansen', meaning: '新干线', pos: '名詞' },
      { jp: '駅', kana: 'えき', romaji: 'eki', meaning: '车站', pos: '名詞' },
      { jp: '時間', kana: 'じかん', romaji: 'jikan', meaning: '小时；时间', pos: '名詞' },
      { jp: '半', kana: 'はん', romaji: 'han', meaning: '半', pos: '名詞' },
      { jp: '古い', kana: 'ふるい', romaji: 'furui', meaning: '古老的', pos: 'い形容詞' },
      { jp: 'お寺', kana: 'おてら', romaji: 'o-tera', meaning: '寺庙', pos: '名詞' },
      { jp: '旅館', kana: 'りょかん', romaji: 'ryokan', meaning: '日式旅馆', pos: '名詞' },
      { jp: '泊まります', kana: 'とまります', romaji: 'tomarimasu', meaning: '住宿', pos: '動詞I' },
      { jp: '夕方', kana: 'ゆうがた', romaji: 'yuugata', meaning: '傍晚', pos: '名詞' },
      { jp: '帰ります', kana: 'かえります', romaji: 'kaerimasu', meaning: '回去', pos: '動詞I' },
      { jp: '楽しみ', kana: 'たのしみ', romaji: 'tanoshimi', meaning: '期待；乐趣', pos: '名詞' },
      { jp: '去年', kana: 'きょねん', romaji: 'kyonen', meaning: '去年', pos: '名詞' },
      { jp: '夏', kana: 'なつ', romaji: 'natsu', meaning: '夏天', pos: '名詞' },
      { jp: '北海道', kana: 'ほっかいどう', romaji: 'Hokkaidou', meaning: '北海道', pos: '名詞' },
      { jp: '飛行機', kana: 'ひこうき', romaji: 'hikouki', meaning: '飞机', pos: '名詞' },
      { jp: '車', kana: 'くるま', romaji: 'kuruma', meaning: '车', pos: '名詞' },
      { jp: '移動します', kana: 'いどうします', romaji: 'idou shimasu', meaning: '移动', pos: '動詞III' },
      { jp: '畑', kana: 'はたけ', romaji: 'hatake', meaning: '田地', pos: '名詞' },
      { jp: '綺麗', kana: 'きれい', romaji: 'kirei', meaning: '漂亮的；干净的', pos: 'な形容詞' },
      { jp: '父', kana: 'ちち', romaji: 'chichi', meaning: '爸爸（自己的）', pos: '名詞' },
      { jp: '写真', kana: 'しゃしん', romaji: 'shashin', meaning: '照片', pos: '名詞' },
      { jp: '撮ります', kana: 'とります', romaji: 'torimasu', meaning: '拍摄', pos: '動詞I' },
      { jp: 'たくさん', kana: 'たくさん', romaji: 'takusan', meaning: '很多', pos: '副詞' },
      { jp: '来年', kana: 'らいねん', romaji: 'rainen', meaning: '明年', pos: '名詞' },
      { jp: 'また', kana: 'また', romaji: 'mata', meaning: '再次', pos: '副詞' },
      { jp: 'どこか', kana: 'どこか', romaji: 'dokoka', meaning: '某处', pos: '疑問詞' },
      { jp: '気をつけて', kana: 'きをつけて', romaji: 'ki o tsukete', meaning: '小心；保重', pos: '慣用句' },
    ],
    grammar: [
      {
        pattern: 'N と (一緒に) V ます',
        name: '与他人共同动作',
        explain: '「と」表示共同动作的对象。「一緒に」（一起）可以省略，但加上语气更明确。',
        examples: [
          {
            jp: '<ruby>友達<rt>ともだち</rt></ruby>と<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。',
            plain: 'ともだちとえいがをみます。',
            cn: '和朋友看电影。',
          },
          {
            jp: '<ruby>家族<rt>かぞく</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>食<rt>た</rt></ruby>べます。',
            plain: 'かぞくといっしょにたべます。',
            cn: '和家人一起吃饭。',
          },
        ],
      },
      {
        pattern: 'N で V ます（手段）',
        name: '交通工具/手段',
        explain: '「で」前接交通工具或方式。注意「歩いて」（走着去）不用「で」。',
        examples: [
          {
            jp: 'バスで<ruby>行<rt>い</rt></ruby>きます。',
            plain: 'バスでいきます。',
            cn: '坐巴士去。',
          },
          {
            jp: '<ruby>歩<rt>ある</rt></ruby>いて<ruby>行<rt>い</rt></ruby>きます。',
            plain: 'あるいていきます。',
            cn: '走着去。（不加で）',
          },
        ],
      },
      {
        pattern: '〜ました（过去式）',
        name: '动词的过去形',
        explain: '「ます」→「ました」表示过去发生的动作。否定过去式是「ませんでした」。',
        examples: [
          {
            jp: '<ruby>京都<rt>きょうと</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました。',
            plain: 'きょうとへいきました。',
            cn: '去了京都。',
          },
          {
            jp: '<ruby>食<rt>た</rt></ruby>べませんでした。',
            plain: 'たべませんでした。',
            cn: '没吃。',
          },
        ],
      },
      {
        pattern: 'N に 泊まります／住みます',
        name: '住宿/居住助词',
        explain: '表示住宿或居住的地点用「に」，不用「で」。',
        examples: [
          {
            jp: '<ruby>旅館<rt>りょかん</rt></ruby>に<ruby>泊<rt>と</rt></ruby>まります。',
            plain: 'りょかんにとまります。',
            cn: '住在日式旅馆。',
          },
          {
            jp: '<ruby>東京<rt>とうきょう</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいます。',
            plain: 'とうきょうにすんでいます。',
            cn: '住在东京。',
          },
        ],
      },
      {
        pattern: 'N₁ から N₂ まで〜かかります',
        name: '所需时间表达',
        explain: '「かかります」表示花费时间或金钱。常与「〜から〜まで」搭配。',
        examples: [
          {
            jp: '<ruby>家<rt>いえ</rt></ruby>から<ruby>会社<rt>かいしゃ</rt></ruby>まで<ruby>三十分<rt>さんじゅっぷん</rt></ruby>かかります。',
            plain: 'いえからかいしゃまでさんじゅっぷんかかります。',
            cn: '从家到公司花三十分钟。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 6 課
  // ========================================================
  {
    id: 6,
    level: 'N5',
    title: {
      jp: '食べる・飲む・買う',
      romaji: 'taberu · nomu · kau',
      cn: '吃、喝、买',
      en: 'Eating, Drinking, Shopping',
    },
    goals: [
      '掌握「〜ませんか」邀请、「〜ましょう」提议',
      '能在便利店、餐厅完成基本对话',
      '能用「〜をください」点餐、购物',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: 'コンビニで',
          romaji: 'konbini de',
          cn: '在便利店',
        },
        sentences: [
          {
            jp: '<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>帰<rt>かえ</rt></ruby>りに、コンビニへ<ruby>寄<rt>よ</rt></ruby>ります。',
            plain: 'かいしゃのかえりに、コンビニへよります。',
            romaji: 'kaisha no kaeri ni, konbini e yorimasu.',
            cn: '下班回家路上去便利店。',
          },
          {
            jp: 'おにぎりを<ruby>二<rt>ふた</rt></ruby>つと、お<ruby>茶<rt>ちゃ</rt></ruby>を<ruby>一本<rt>いっぽん</rt></ruby><ruby>買<rt>か</rt></ruby>います。',
            plain: 'おにぎりをふたつと、おちゃをいっぽんかいます。',
            romaji: 'onigiri o futatsu to, ocha o ippon kaimasu.',
            cn: '买两个饭团和一瓶茶。',
          },
          {
            jp: '<ruby>店員<rt>てんいん</rt></ruby>さんはとても<ruby>親切<rt>しんせつ</rt></ruby>です。',
            plain: 'てんいんさんはとてもしんせつです。',
            romaji: 'ten\'in-san wa totemo shinsetsu desu.',
            cn: '店员非常亲切。',
          },
          {
            jp: '「<ruby>袋<rt>ふくろ</rt></ruby>はいりますか」と<ruby>聞<rt>き</rt></ruby>きます。',
            plain: 'ふくろはいりますかとききます。',
            romaji: '"fukuro wa irimasu ka" to kikimasu.',
            cn: '会问"需要袋子吗"。',
          },
          {
            jp: '「いいえ、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です」と<ruby>答<rt>こた</rt></ruby>えます。',
            plain: 'いいえ、だいじょうぶですとこたえます。',
            romaji: '"iie, daijoubu desu" to kotaemasu.',
            cn: '回答"不用，没关系"。',
          },
          {
            jp: '<ruby>全部<rt>ぜんぶ</rt></ruby>で<ruby>五百円<rt>ごひゃくえん</rt></ruby>でした。',
            plain: 'ぜんぶでごひゃくえんでした。',
            romaji: 'zenbu de go-hyaku-en deshita.',
            cn: '总共 500 日元。',
          },
          {
            jp: 'コンビニはとても<ruby>便利<rt>べんり</rt></ruby>です。',
            plain: 'コンビニはとてもべんりです。',
            romaji: 'konbini wa totemo benri desu.',
            cn: '便利店真方便。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '友達とランチ',
          romaji: 'tomodachi to ranchi',
          cn: '和朋友午餐',
        },
        sentences: [
          {
            jp: '<ruby>今日<rt>きょう</rt></ruby>のお<ruby>昼<rt>ひる</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>とラーメン<ruby>屋<rt>や</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。',
            plain: 'きょうのおひる、ともだちとラーメンやへいきます。',
            romaji: 'kyou no ohiru, tomodachi to raamen-ya e ikimasu.',
            cn: '今天中午，和朋友去拉面店。',
          },
          {
            jp: 'お<ruby>店<rt>みせ</rt></ruby>はとても<ruby>有名<rt>ゆうめい</rt></ruby>です。',
            plain: 'おみせはとてもゆうめいです。',
            romaji: 'omise wa totemo yuumei desu.',
            cn: '店很有名。',
          },
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>は<ruby>味噌<rt>みそ</rt></ruby>ラーメンを<ruby>注文<rt>ちゅうもん</rt></ruby>します。',
            plain: 'わたしはみそラーメンをちゅうもんします。',
            romaji: 'watashi wa miso-raamen o chuumon shimasu.',
            cn: '我点味噌拉面。',
          },
          {
            jp: '<ruby>友達<rt>ともだち</rt></ruby>は<ruby>醤油<rt>しょうゆ</rt></ruby>ラーメンを<ruby>注文<rt>ちゅうもん</rt></ruby>します。',
            plain: 'ともだちはしょうゆラーメンをちゅうもんします。',
            romaji: 'tomodachi wa shouyu-raamen o chuumon shimasu.',
            cn: '朋友点酱油拉面。',
          },
          {
            jp: 'ラーメンはとても<ruby>美味<rt>おい</rt></ruby>しいです。',
            plain: 'ラーメンはとてもおいしいです。',
            romaji: 'raamen wa totemo oishii desu.',
            cn: '拉面非常好吃。',
          },
          {
            jp: 'また<ruby>来<rt>き</rt></ruby>ましょう。',
            plain: 'またきましょう。',
            romaji: 'mata kimashou.',
            cn: '下次再来吧。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: 'カフェで、注文する。',
        cn: '在咖啡店点单。',
      },
      lines: [
        {
          speaker: '店員',
          jp: 'いらっしゃいませ。ご<ruby>注文<rt>ちゅうもん</rt></ruby>はお<ruby>決<rt>き</rt></ruby>まりですか。',
          plain: 'いらっしゃいませ。ごちゅうもんはおきまりですか。',
          romaji: 'irasshaimase. go-chuumon wa o-kimari desu ka.',
          cn: '欢迎光临。决定要点什么了吗？',
        },
        {
          speaker: '客',
          jp: 'コーヒーを<ruby>一<rt>ひと</rt></ruby>つください。',
          plain: 'コーヒーをひとつください。',
          romaji: 'koohii o hitotsu kudasai.',
          cn: '请来一杯咖啡。',
        },
        {
          speaker: '店員',
          jp: 'ホットですか、アイスですか。',
          plain: 'ホットですか、アイスですか。',
          romaji: 'hotto desu ka, aisu desu ka.',
          cn: '热的还是冰的？',
        },
        {
          speaker: '客',
          jp: 'ホットでお<ruby>願<rt>ねが</rt></ruby>いします。',
          plain: 'ホットでおねがいします。',
          romaji: 'hotto de o-negai shimasu.',
          cn: '麻烦给我热的。',
        },
        {
          speaker: '店員',
          jp: 'かしこまりました。<ruby>少々<rt>しょうしょう</rt></ruby>お<ruby>待<rt>ま</rt></ruby>ちください。',
          plain: 'かしこまりました。しょうしょうおまちください。',
          romaji: 'kashikomarimashita. shoushou o-machi kudasai.',
          cn: '好的。请稍候。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: 'コンビニで<ruby>何<rt>なに</rt></ruby>を<ruby>買<rt>か</rt></ruby>いましたか。',
          plain: 'コンビニでなにをかいましたか。',
          romaji: 'konbini de nani o kaimashita ka.',
          cn: '在便利店买了什么？',
        },
        a: {
          jp: 'おにぎりとお<ruby>茶<rt>ちゃ</rt></ruby>を<ruby>買<rt>か</rt></ruby>いました。',
          plain: 'おにぎりとおちゃをかいました。',
          romaji: 'onigiri to ocha o kaimashita.',
          cn: '买了饭团和茶。',
        },
      },
      {
        q: {
          jp: '<ruby>全部<rt>ぜんぶ</rt></ruby>でいくらでしたか。',
          plain: 'ぜんぶでいくらでしたか。',
          romaji: 'zenbu de ikura deshita ka.',
          cn: '总共多少钱？',
        },
        a: {
          jp: '<ruby>五百円<rt>ごひゃくえん</rt></ruby>でした。',
          plain: 'ごひゃくえんでした。',
          romaji: 'go-hyaku-en deshita.',
          cn: '500 日元。',
        },
      },
      {
        q: {
          jp: '<ruby>友達<rt>ともだち</rt></ruby>は<ruby>何<rt>なに</rt></ruby>を<ruby>注文<rt>ちゅうもん</rt></ruby>しましたか。',
          plain: 'ともだちはなにをちゅうもんしましたか。',
          romaji: 'tomodachi wa nani o chuumon shimashita ka.',
          cn: '朋友点了什么？',
        },
        a: {
          jp: '<ruby>醤油<rt>しょうゆ</rt></ruby>ラーメンを<ruby>注文<rt>ちゅうもん</rt></ruby>しました。',
          plain: 'しょうゆラーメンをちゅうもんしました。',
          romaji: 'shouyu-raamen o chuumon shimashita.',
          cn: '点了酱油拉面。',
        },
      },
      {
        q: {
          jp: 'カフェで<ruby>何<rt>なに</rt></ruby>を<ruby>頼<rt>たの</rt></ruby>みましたか。',
          plain: 'カフェでなにをたのみましたか。',
          romaji: 'kafe de nani o tanomimashita ka.',
          cn: '在咖啡店点了什么？',
        },
        a: {
          jp: 'ホットコーヒーを<ruby>一<rt>ひと</rt></ruby>つ<ruby>頼<rt>たの</rt></ruby>みました。',
          plain: 'ホットコーヒーをひとつたのみました。',
          romaji: 'hotto-koohii o hitotsu tanomimashita.',
          cn: '点了一杯热咖啡。',
        },
      },
    ],
    vocabulary: [
      { jp: '帰り', kana: 'かえり', romaji: 'kaeri', meaning: '回去（途中）', pos: '名詞' },
      { jp: '寄ります', kana: 'よります', romaji: 'yorimasu', meaning: '顺便去', pos: '動詞I' },
      { jp: 'おにぎり', kana: 'おにぎり', romaji: 'onigiri', meaning: '饭团', pos: '名詞' },
      { jp: 'お茶', kana: 'おちゃ', romaji: 'ocha', meaning: '茶', pos: '名詞' },
      { jp: '買います', kana: 'かいます', romaji: 'kaimasu', meaning: '买', pos: '動詞I' },
      { jp: '店員', kana: 'てんいん', romaji: 'ten\'in', meaning: '店员', pos: '名詞' },
      { jp: '袋', kana: 'ふくろ', romaji: 'fukuro', meaning: '袋子', pos: '名詞' },
      { jp: '聞きます', kana: 'ききます', romaji: 'kikimasu', meaning: '听；问', pos: '動詞I' },
      { jp: '答えます', kana: 'こたえます', romaji: 'kotaemasu', meaning: '回答', pos: '動詞II' },
      { jp: '全部', kana: 'ぜんぶ', romaji: 'zenbu', meaning: '全部', pos: '名詞' },
      { jp: 'ラーメン', kana: 'ラーメン', romaji: 'raamen', meaning: '拉面', pos: '名詞' },
      { jp: '屋', kana: 'や', romaji: 'ya', meaning: '...店', pos: '名詞' },
      { jp: 'お店', kana: 'おみせ', romaji: 'omise', meaning: '店', pos: '名詞' },
      { jp: '有名', kana: 'ゆうめい', romaji: 'yuumei', meaning: '有名的', pos: 'な形容詞' },
      { jp: '味噌', kana: 'みそ', romaji: 'miso', meaning: '味噌', pos: '名詞' },
      { jp: '醤油', kana: 'しょうゆ', romaji: 'shouyu', meaning: '酱油', pos: '名詞' },
      { jp: '注文します', kana: 'ちゅうもんします', romaji: 'chuumon shimasu', meaning: '点单', pos: '動詞III' },
      { jp: '美味しい', kana: 'おいしい', romaji: 'oishii', meaning: '好吃的', pos: 'い形容詞' },
      { jp: '来ます', kana: 'きます', romaji: 'kimasu', meaning: '来', pos: '動詞III' },
      { jp: 'コーヒー', kana: 'コーヒー', romaji: 'koohii', meaning: '咖啡', pos: '名詞' },
      { jp: 'ホット', kana: 'ホット', romaji: 'hotto', meaning: '热（饮）', pos: '名詞' },
      { jp: 'アイス', kana: 'アイス', romaji: 'aisu', meaning: '冰（饮）', pos: '名詞' },
      { jp: 'お願いします', kana: 'おねがいします', romaji: 'o-negai shimasu', meaning: '麻烦您', pos: '慣用句' },
      { jp: 'いらっしゃいませ', kana: 'いらっしゃいませ', romaji: 'irasshaimase', meaning: '欢迎光临', pos: '慣用句' },
      { jp: 'かしこまりました', kana: 'かしこまりました', romaji: 'kashikomarimashita', meaning: '明白了（敬语）', pos: '慣用句' },
      { jp: '頼みます', kana: 'たのみます', romaji: 'tanomimasu', meaning: '点；委托', pos: '動詞I' },
    ],
    grammar: [
      {
        pattern: 'N を ください',
        name: '请求/购买表达',
        explain: '直译为"请给我...". 在商店、餐厅最常用的表达。后面常加数量词，如「コーヒーを一つください」。',
        examples: [
          {
            jp: 'コーヒーを<ruby>一<rt>ひと</rt></ruby>つください。',
            plain: 'コーヒーをひとつください。',
            cn: '请来一杯咖啡。',
          },
          {
            jp: 'これをください。',
            plain: 'これをください。',
            cn: '请给我这个。',
          },
        ],
      },
      {
        pattern: 'V ませんか',
        name: '邀请表达',
        explain: '"...不...吗？"=请...吗？用于邀请对方一起做某事。比「ましょう」更礼貌、含征求意见的语气。',
        examples: [
          {
            jp: '<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>食<rt>た</rt></ruby>べませんか。',
            plain: 'いっしょにたべませんか。',
            cn: '要一起吃吗？',
          },
        ],
      },
      {
        pattern: 'V ましょう',
        name: '提议表达',
        explain: '"我们...吧"。表示积极的提议或对邀请的肯定回应。语气比「ませんか」更主动。',
        examples: [
          {
            jp: '<ruby>行<rt>い</rt></ruby>きましょう。',
            plain: 'いきましょう。',
            cn: '走吧。',
          },
          {
            jp: 'また<ruby>来<rt>き</rt></ruby>ましょう。',
            plain: 'またきましょう。',
            cn: '下次再来吧。',
          },
        ],
      },
      {
        pattern: '一つ／二つ／三つ…',
        name: '和式数量词',
        explain: '日语数物品有"和式数词"和"汉语数词"两套。和式：一つ（ひとつ）／二つ（ふたつ）／三つ（みっつ），用于一般物品。',
        examples: [
          {
            jp: 'おにぎりを<ruby>二<rt>ふた</rt></ruby>つください。',
            plain: 'おにぎりをふたつください。',
            cn: '请来两个饭团。',
          },
        ],
      },
      {
        pattern: '〜本／〜枚／〜個',
        name: '量词',
        explain: '日语量词丰富：本（细长物：瓶子、笔）、枚（薄平物：纸、票）、個（小颗粒物）。「一本」是「いっぽん」（音变）。',
        examples: [
          {
            jp: 'お<ruby>茶<rt>ちゃ</rt></ruby>を<ruby>一本<rt>いっぽん</rt></ruby>ください。',
            plain: 'おちゃをいっぽんください。',
            cn: '请来一瓶茶。',
          },
        ],
      },
      {
        pattern: '〜と聞きます／〜と言います',
        name: '引用助词「と」',
        explain: '直接引用别人的话或自己说/听到的内容时用「と」。引用部分用「」标记。',
        examples: [
          {
            jp: '「ありがとう」と<ruby>言<rt>い</rt></ruby>いました。',
            plain: 'ありがとうといいました。',
            cn: '说了"谢谢"。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 7 課
  // ========================================================
  {
    id: 7,
    level: 'N5',
    title: {
      jp: '形容詞',
      romaji: 'keiyoushi',
      cn: '形容词',
      en: 'Adjectives',
    },
    goals: [
      '区分い形容詞和な形容詞的接续',
      '能描述地点、食物、人的特征',
      '掌握「〜は〜が〜です」的双主语句型',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '私の町',
          romaji: 'watashi no machi',
          cn: '我的城市',
        },
        sentences: [
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>の<ruby>町<rt>まち</rt></ruby>は<ruby>小<rt>ちい</rt></ruby>さいですが、とても<ruby>静<rt>しず</rt></ruby>かです。',
            plain: 'わたしのまちはちいさいですが、とてもしずかです。',
            romaji: 'watashi no machi wa chiisai desu ga, totemo shizuka desu.',
            cn: '我的城市虽然小，但很安静。',
          },
          {
            jp: '<ruby>町<rt>まち</rt></ruby>の<ruby>真<rt>ま</rt></ruby>ん<ruby>中<rt>なか</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きい<ruby>川<rt>かわ</rt></ruby>があります。',
            plain: 'まちのまんなかにおおきいかわがあります。',
            romaji: 'machi no mannaka ni ookii kawa ga arimasu.',
            cn: '城市中央有一条大河。',
          },
          {
            jp: '<ruby>春<rt>はる</rt></ruby>は<ruby>桜<rt>さくら</rt></ruby>がきれいです。',
            plain: 'はるはさくらがきれいです。',
            romaji: 'haru wa sakura ga kirei desu.',
            cn: '春天樱花很美。',
          },
          {
            jp: '<ruby>夏<rt>なつ</rt></ruby>は<ruby>暑<rt>あつ</rt></ruby>いですが、<ruby>祭<rt>まつ</rt></ruby>りがにぎやかです。',
            plain: 'なつはあついですが、まつりがにぎやかです。',
            romaji: 'natsu wa atsui desu ga, matsuri ga nigiyaka desu.',
            cn: '夏天虽然热，但庙会很热闹。',
          },
          {
            jp: '<ruby>秋<rt>あき</rt></ruby>は<ruby>果物<rt>くだもの</rt></ruby>が<ruby>美味<rt>おい</rt></ruby>しいです。',
            plain: 'あきはくだものがおいしいです。',
            romaji: 'aki wa kudamono ga oishii desu.',
            cn: '秋天水果很美味。',
          },
          {
            jp: '<ruby>冬<rt>ふゆ</rt></ruby>は<ruby>寒<rt>さむ</rt></ruby>いですが、<ruby>空気<rt>くうき</rt></ruby>がきれいです。',
            plain: 'ふゆはさむいですが、くうきがきれいです。',
            romaji: 'fuyu wa samui desu ga, kuuki ga kirei desu.',
            cn: '冬天虽冷，但空气很干净。',
          },
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>はこの<ruby>町<rt>まち</rt></ruby>が<ruby>大好<rt>だいす</rt></ruby>きです。',
            plain: 'わたしはこのまちがだいすきです。',
            romaji: 'watashi wa kono machi ga daisuki desu.',
            cn: '我非常喜欢这座城市。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '好きな食べ物',
          romaji: 'suki na tabemono',
          cn: '喜欢的食物',
        },
        sentences: [
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>は<ruby>甘<rt>あま</rt></ruby>いものが<ruby>好<rt>す</rt></ruby>きです。',
            plain: 'わたしはあまいものがすきです。',
            romaji: 'watashi wa amai mono ga suki desu.',
            cn: '我喜欢甜的东西。',
          },
          {
            jp: '<ruby>特<rt>とく</rt></ruby>にチョコレートケーキが<ruby>大好<rt>だいす</rt></ruby>きです。',
            plain: 'とくにチョコレートケーキがだいすきです。',
            romaji: 'toku ni chokoreeto-keeki ga daisuki desu.',
            cn: '特别是巧克力蛋糕，非常喜欢。',
          },
          {
            jp: '<ruby>辛<rt>から</rt></ruby>い<ruby>料理<rt>りょうり</rt></ruby>はあまり<ruby>得意<rt>とくい</rt></ruby>じゃありません。',
            plain: 'からいりょうりはあまりとくいじゃありません。',
            romaji: 'karai ryouri wa amari tokui ja arimasen.',
            cn: '辣的菜不太擅长。',
          },
          {
            jp: 'でも、<ruby>韓国<rt>かんこく</rt></ruby>のキムチは<ruby>美味<rt>おい</rt></ruby>しいです。',
            plain: 'でも、かんこくのキムチはおいしいです。',
            romaji: 'demo, Kankoku no kimuchi wa oishii desu.',
            cn: '但是，韩国的泡菜很好吃。',
          },
          {
            jp: '<ruby>友達<rt>ともだち</rt></ruby>はステーキが<ruby>好<rt>す</rt></ruby>きです。',
            plain: 'ともだちはステーキがすきです。',
            romaji: 'tomodachi wa suteeki ga suki desu.',
            cn: '朋友喜欢牛排。',
          },
          {
            jp: '<ruby>人<rt>ひと</rt></ruby>によって<ruby>好<rt>す</rt></ruby>きなものが<ruby>違<rt>ちが</rt></ruby>いますね。',
            plain: 'ひとによってすきなものがちがいますね。',
            romaji: 'hito ni yotte suki na mono ga chigaimasu ne.',
            cn: '每个人喜欢的东西都不一样呢。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '初めて日本に来た留学生と話す。',
        cn: '和第一次来日本的留学生交谈。',
      },
      lines: [
        {
          speaker: '田中',
          jp: '<ruby>東京<rt>とうきょう</rt></ruby>はどうですか。',
          plain: 'とうきょうはどうですか。',
          romaji: 'Toukyou wa dou desu ka.',
          cn: '东京怎么样？',
        },
        {
          speaker: '留学生',
          jp: 'とても<ruby>大<rt>おお</rt></ruby>きい<ruby>町<rt>まち</rt></ruby>ですね。<ruby>少<rt>すこ</rt></ruby>し<ruby>怖<rt>こわ</rt></ruby>いです。',
          plain: 'とてもおおきいまちですね。すこしこわいです。',
          romaji: 'totemo ookii machi desu ne. sukoshi kowai desu.',
          cn: '是个非常大的城市呢。有点害怕。',
        },
        {
          speaker: '田中',
          jp: '<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>はどうですか。',
          plain: 'たべものはどうですか。',
          romaji: 'tabemono wa dou desu ka.',
          cn: '食物呢？',
        },
        {
          speaker: '留学生',
          jp: '<ruby>美味<rt>おい</rt></ruby>しいです。<ruby>特<rt>とく</rt></ruby>に<ruby>寿司<rt>すし</rt></ruby>が<ruby>大好<rt>だいす</rt></ruby>きです。',
          plain: 'おいしいです。とくにすしがだいすきです。',
          romaji: 'oishii desu. toku ni sushi ga daisuki desu.',
          cn: '很好吃。特别喜欢寿司。',
        },
        {
          speaker: '田中',
          jp: 'よかったですね。<ruby>日本<rt>にほん</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>を<ruby>楽<rt>たの</rt></ruby>しんでください。',
          plain: 'よかったですね。にほんのせいかつをたのしんでください。',
          romaji: 'yokatta desu ne. Nihon no seikatsu o tanoshinde kudasai.',
          cn: '太好了。请尽情享受日本生活。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>私<rt>わたし</rt></ruby>の<ruby>町<rt>まち</rt></ruby>はどんな<ruby>町<rt>まち</rt></ruby>ですか。',
          plain: 'わたしのまちはどんなまちですか。',
          romaji: 'watashi no machi wa donna machi desu ka.',
          cn: '我的城市是怎样的城市？',
        },
        a: {
          jp: '<ruby>小<rt>ちい</rt></ruby>さくて<ruby>静<rt>しず</rt></ruby>かな<ruby>町<rt>まち</rt></ruby>です。',
          plain: 'ちいさくてしずかなまちです。',
          romaji: 'chiisakute shizuka na machi desu.',
          cn: '是个小而安静的城市。',
        },
      },
      {
        q: {
          jp: '<ruby>夏<rt>なつ</rt></ruby>はどうですか。',
          plain: 'なつはどうですか。',
          romaji: 'natsu wa dou desu ka.',
          cn: '夏天怎么样？',
        },
        a: {
          jp: '<ruby>暑<rt>あつ</rt></ruby>いですが、<ruby>祭<rt>まつ</rt></ruby>りがにぎやかです。',
          plain: 'あついですが、まつりがにぎやかです。',
          romaji: 'atsui desu ga, matsuri ga nigiyaka desu.',
          cn: '虽然热，但庙会很热闹。',
        },
      },
      {
        q: {
          jp: 'どんな<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>が<ruby>大好<rt>だいす</rt></ruby>きですか。',
          plain: 'どんなたべものがだいすきですか。',
          romaji: 'donna tabemono ga daisuki desu ka.',
          cn: '什么食物最喜欢？',
        },
        a: {
          jp: 'チョコレートケーキが<ruby>大好<rt>だいす</rt></ruby>きです。',
          plain: 'チョコレートケーキがだいすきです。',
          romaji: 'chokoreeto-keeki ga daisuki desu.',
          cn: '最喜欢巧克力蛋糕。',
        },
      },
      {
        q: {
          jp: '<ruby>留学生<rt>りゅうがくせい</rt></ruby>は<ruby>何<rt>なに</rt></ruby>が<ruby>大好<rt>だいす</rt></ruby>きですか。',
          plain: 'りゅうがくせいはなにがだいすきですか。',
          romaji: 'ryuugakusei wa nani ga daisuki desu ka.',
          cn: '留学生最喜欢什么？',
        },
        a: {
          jp: '<ruby>寿司<rt>すし</rt></ruby>が<ruby>大好<rt>だいす</rt></ruby>きです。',
          plain: 'すしがだいすきです。',
          romaji: 'sushi ga daisuki desu.',
          cn: '最喜欢寿司。',
        },
      },
    ],
    vocabulary: [
      { jp: '町', kana: 'まち', romaji: 'machi', meaning: '城镇', pos: '名詞' },
      { jp: '小さい', kana: 'ちいさい', romaji: 'chiisai', meaning: '小的', pos: 'い形容詞' },
      { jp: '大きい', kana: 'おおきい', romaji: 'ookii', meaning: '大的', pos: 'い形容詞' },
      { jp: '真ん中', kana: 'まんなか', romaji: 'mannaka', meaning: '正中央', pos: '名詞' },
      { jp: '川', kana: 'かわ', romaji: 'kawa', meaning: '河', pos: '名詞' },
      { jp: '春', kana: 'はる', romaji: 'haru', meaning: '春天', pos: '名詞' },
      { jp: '桜', kana: 'さくら', romaji: 'sakura', meaning: '樱花', pos: '名詞' },
      { jp: '暑い', kana: 'あつい', romaji: 'atsui', meaning: '热的', pos: 'い形容詞' },
      { jp: '祭り', kana: 'まつり', romaji: 'matsuri', meaning: '庙会；祭典', pos: '名詞' },
      { jp: 'にぎやか', kana: 'にぎやか', romaji: 'nigiyaka', meaning: '热闹的', pos: 'な形容詞' },
      { jp: '秋', kana: 'あき', romaji: 'aki', meaning: '秋天', pos: '名詞' },
      { jp: '果物', kana: 'くだもの', romaji: 'kudamono', meaning: '水果', pos: '名詞' },
      { jp: '冬', kana: 'ふゆ', romaji: 'fuyu', meaning: '冬天', pos: '名詞' },
      { jp: '寒い', kana: 'さむい', romaji: 'samui', meaning: '冷的', pos: 'い形容詞' },
      { jp: '空気', kana: 'くうき', romaji: 'kuuki', meaning: '空气', pos: '名詞' },
      { jp: '大好き', kana: 'だいすき', romaji: 'daisuki', meaning: '非常喜欢', pos: 'な形容詞' },
      { jp: '甘い', kana: 'あまい', romaji: 'amai', meaning: '甜的', pos: 'い形容詞' },
      { jp: '辛い', kana: 'からい', romaji: 'karai', meaning: '辣的', pos: 'い形容詞' },
      { jp: 'チョコレート', kana: 'チョコレート', romaji: 'chokoreeto', meaning: '巧克力', pos: '名詞' },
      { jp: 'ケーキ', kana: 'ケーキ', romaji: 'keeki', meaning: '蛋糕', pos: '名詞' },
      { jp: '料理', kana: 'りょうり', romaji: 'ryouri', meaning: '菜肴', pos: '名詞' },
      { jp: '得意', kana: 'とくい', romaji: 'tokui', meaning: '擅长的', pos: 'な形容詞' },
      { jp: 'キムチ', kana: 'キムチ', romaji: 'kimuchi', meaning: '泡菜', pos: '名詞' },
      { jp: 'ステーキ', kana: 'ステーキ', romaji: 'suteeki', meaning: '牛排', pos: '名詞' },
      { jp: '違います', kana: 'ちがいます', romaji: 'chigaimasu', meaning: '不同；不对', pos: '動詞I' },
      { jp: 'どう', kana: 'どう', romaji: 'dou', meaning: '怎么样', pos: '疑問詞' },
      { jp: '少し', kana: 'すこし', romaji: 'sukoshi', meaning: '稍微', pos: '副詞' },
      { jp: '怖い', kana: 'こわい', romaji: 'kowai', meaning: '可怕的', pos: 'い形容詞' },
      { jp: '寿司', kana: 'すし', romaji: 'sushi', meaning: '寿司', pos: '名詞' },
      { jp: '生活', kana: 'せいかつ', romaji: 'seikatsu', meaning: '生活', pos: '名詞' },
      { jp: '楽しみます', kana: 'たのしみます', romaji: 'tanoshimimasu', meaning: '享受', pos: '動詞I' },
      { jp: 'どんな', kana: 'どんな', romaji: 'donna', meaning: '什么样的', pos: '連体詞' },
    ],
    grammar: [
      {
        pattern: 'い形容詞 + N',
        name: 'い形容词的修饰',
        explain: 'い形容词直接接名词。例：大きい本（大书）。否定形：去い加くない（大きくない）。过去形：去い加かった（大きかった）。',
        examples: [
          {
            jp: '<ruby>大<rt>おお</rt></ruby>きい<ruby>川<rt>かわ</rt></ruby>',
            plain: 'おおきいかわ',
            cn: '大河',
          },
          {
            jp: '<ruby>暑<rt>あつ</rt></ruby>くないです。',
            plain: 'あつくないです。',
            cn: '不热。',
          },
          {
            jp: '<ruby>美味<rt>おい</rt></ruby>しかったです。',
            plain: 'おいしかったです。',
            cn: '（之前）很好吃。',
          },
        ],
      },
      {
        pattern: 'な形容詞 + な + N',
        name: 'な形容词的修饰',
        explain: 'な形容词接名词时必须加「な」。例：静かな町。否定形：「静かじゃありません」。过去形：「静かでした」。',
        examples: [
          {
            jp: '<ruby>静<rt>しず</rt></ruby>かな<ruby>町<rt>まち</rt></ruby>',
            plain: 'しずかなまち',
            cn: '安静的城镇',
          },
          {
            jp: 'にぎやかじゃありません。',
            plain: 'にぎやかじゃありません。',
            cn: '不热闹。',
          },
        ],
      },
      {
        pattern: 'N₁ は N₂ が 形容詞',
        name: '双主语句型',
        explain: '描述某物的某个属性时使用。「象は鼻が長い」（大象鼻子长）是经典例句。「は」标记话题，「が」标记具体属性。',
        examples: [
          {
            jp: '<ruby>春<rt>はる</rt></ruby>は<ruby>桜<rt>さくら</rt></ruby>がきれいです。',
            plain: 'はるはさくらがきれいです。',
            cn: '春天樱花漂亮。',
          },
          {
            jp: '<ruby>秋<rt>あき</rt></ruby>は<ruby>果物<rt>くだもの</rt></ruby>が<ruby>美味<rt>おい</rt></ruby>しいです。',
            plain: 'あきはくだものがおいしいです。',
            cn: '秋天水果好吃。',
          },
        ],
      },
      {
        pattern: '〜が、〜',
        name: '逆接「が」',
        explain: '"虽然...但是..."。比「でも」（句首使用）更连贯。注意：作为助词的「が」（主格）和接续助词的「が」（逆接）形式相同但用法不同。',
        examples: [
          {
            jp: '<ruby>暑<rt>あつ</rt></ruby>いですが、<ruby>楽<rt>たの</rt></ruby>しいです。',
            plain: 'あついですが、たのしいです。',
            cn: '虽然热，但很开心。',
          },
        ],
      },
      {
        pattern: 'どう／どんな',
        name: '询问性质',
        explain: '「どう」=怎么样（询问印象、感受），「どんな」+N=什么样的N（询问性质）。',
        examples: [
          {
            jp: '<ruby>映画<rt>えいが</rt></ruby>はどうでしたか。',
            plain: 'えいがはどうでしたか。',
            cn: '电影怎么样？',
          },
          {
            jp: 'どんな<ruby>人<rt>ひと</rt></ruby>ですか。',
            plain: 'どんなひとですか。',
            cn: '是什么样的人？',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 8 課
  // ========================================================
  {
    id: 8,
    level: 'N5',
    title: {
      jp: '過去',
      romaji: 'kako',
      cn: '过去式',
      en: 'Past Tense',
    },
    goals: [
      '掌握动词、形容词、名词的过去式',
      '能讲述昨天、上周、去年发生的事',
      '能用「先〜」「〜前」表达过去的时间',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '昨日のこと',
          romaji: 'kinou no koto',
          cn: '昨天的事',
        },
        sentences: [
          {
            jp: '<ruby>昨日<rt>きのう</rt></ruby>は<ruby>休<rt>やす</rt></ruby>みでした。',
            plain: 'きのうはやすみでした。',
            romaji: 'kinou wa yasumi deshita.',
            cn: '昨天是休息日。',
          },
          {
            jp: '<ruby>朝<rt>あさ</rt></ruby><ruby>遅<rt>おそ</rt></ruby>く<ruby>起<rt>お</rt></ruby>きました。',
            plain: 'あさおそくおきました。',
            romaji: 'asa osoku okimashita.',
            cn: '早上起得很晚。',
          },
          {
            jp: '<ruby>午前<rt>ごぜん</rt></ruby>は<ruby>家<rt>いえ</rt></ruby>で<ruby>掃除<rt>そうじ</rt></ruby>をしました。',
            plain: 'ごぜんはいえでそうじをしました。',
            romaji: 'gozen wa ie de souji o shimashita.',
            cn: '上午在家里打扫了卫生。',
          },
          {
            jp: '<ruby>午後<rt>ごご</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>と<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ました。',
            plain: 'ごご、ともだちとえいがをみました。',
            romaji: 'gogo, tomodachi to eiga o mimashita.',
            cn: '下午和朋友看了电影。',
          },
          {
            jp: '<ruby>映画<rt>えいが</rt></ruby>はとても<ruby>面白<rt>おもしろ</rt></ruby>かったです。',
            plain: 'えいがはとてもおもしろかったです。',
            romaji: 'eiga wa totemo omoshirokatta desu.',
            cn: '电影非常有趣。',
          },
          {
            jp: '<ruby>夜<rt>よる</rt></ruby>はあまり<ruby>勉強<rt>べんきょう</rt></ruby>しませんでした。',
            plain: 'よるはあまりべんきょうしませんでした。',
            romaji: 'yoru wa amari benkyou shimasen deshita.',
            cn: '晚上没怎么学习。',
          },
          {
            jp: 'でも、いい<ruby>一日<rt>いちにち</rt></ruby>でした。',
            plain: 'でも、いいいちにちでした。',
            romaji: 'demo, ii ichinichi deshita.',
            cn: '不过，是充实的一天。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '先月の旅行',
          romaji: 'sengetsu no ryokou',
          cn: '上个月的旅行',
        },
        sentences: [
          {
            jp: '<ruby>先月<rt>せんげつ</rt></ruby>、<ruby>沖縄<rt>おきなわ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました。',
            plain: 'せんげつ、おきなわへいきました。',
            romaji: 'sengetsu, Okinawa e ikimashita.',
            cn: '上个月去了冲绳。',
          },
          {
            jp: '<ruby>天気<rt>てんき</rt></ruby>はとてもよかったです。',
            plain: 'てんきはとてもよかったです。',
            romaji: 'tenki wa totemo yokatta desu.',
            cn: '天气非常好。',
          },
          {
            jp: '<ruby>海<rt>うみ</rt></ruby>はきれいで、<ruby>魚<rt>さかな</rt></ruby>もたくさんいました。',
            plain: 'うみはきれいで、さかなもたくさんいました。',
            romaji: 'umi wa kirei de, sakana mo takusan imashita.',
            cn: '海很美，鱼也很多。',
          },
          {
            jp: '<ruby>毎日<rt>まいにち</rt></ruby><ruby>泳<rt>およ</rt></ruby>ぎました。',
            plain: 'まいにちおよぎました。',
            romaji: 'mainichi oyogimashita.',
            cn: '每天都游泳。',
          },
          {
            jp: '<ruby>地元<rt>じもと</rt></ruby>の<ruby>料理<rt>りょうり</rt></ruby>も<ruby>美味<rt>おい</rt></ruby>しかったです。',
            plain: 'じもとのりょうりもおいしかったです。',
            romaji: 'jimoto no ryouri mo oishikatta desu.',
            cn: '当地的菜也很好吃。',
          },
          {
            jp: '<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>素晴<rt>すば</rt></ruby>らしい<ruby>旅行<rt>りょこう</rt></ruby>でした。',
            plain: 'ほんとうにすばらしいりょこうでした。',
            romaji: 'hontou ni subarashii ryokou deshita.',
            cn: '真的是一次美好的旅行。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '月曜日の朝、同僚と話す。',
        cn: '星期一早上，和同事交谈。',
      },
      lines: [
        {
          speaker: '田中',
          jp: '<ruby>鈴木<rt>すずき</rt></ruby>さん、<ruby>週末<rt>しゅうまつ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしましたか。',
          plain: 'すずきさん、しゅうまつはなにをしましたか。',
          romaji: 'Suzuki-san, shuumatsu wa nani o shimashita ka.',
          cn: '铃木，周末做了什么？',
        },
        {
          speaker: '鈴木',
          jp: '<ruby>土曜日<rt>どようび</rt></ruby>は<ruby>家族<rt>かぞく</rt></ruby>と<ruby>動物園<rt>どうぶつえん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました。',
          plain: 'どようびはかぞくとどうぶつえんへいきました。',
          romaji: 'doyoubi wa kazoku to doubutsuen e ikimashita.',
          cn: '星期六和家人去了动物园。',
        },
        {
          speaker: '田中',
          jp: 'いいですね。<ruby>子供<rt>こども</rt></ruby>たちは<ruby>喜<rt>よろこ</rt></ruby>びましたか。',
          plain: 'いいですね。こどもたちはよろこびましたか。',
          romaji: 'ii desu ne. kodomo-tachi wa yorokobimashita ka.',
          cn: '真好。孩子们高兴吗？',
        },
        {
          speaker: '鈴木',
          jp: 'はい、とても<ruby>楽<rt>たの</rt></ruby>しかったです。<ruby>田中<rt>たなか</rt></ruby>さんは。',
          plain: 'はい、とてもたのしかったです。たなかさんは。',
          romaji: 'hai, totemo tanoshikatta desu. Tanaka-san wa.',
          cn: '嗯，非常开心。田中你呢？',
        },
        {
          speaker: '田中',
          jp: '<ruby>私<rt>わたし</rt></ruby>はずっと<ruby>家<rt>いえ</rt></ruby>にいました。<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みました。',
          plain: 'わたしはずっといえにいました。ほんをよみました。',
          romaji: 'watashi wa zutto ie ni imashita. hon o yomimashita.',
          cn: '我一直在家。读了书。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>昨日<rt>きのう</rt></ruby>の<ruby>午後<rt>ごご</rt></ruby>、<ruby>何<rt>なに</rt></ruby>をしましたか。',
          plain: 'きのうのごご、なにをしましたか。',
          romaji: 'kinou no gogo, nani o shimashita ka.',
          cn: '昨天下午做了什么？',
        },
        a: {
          jp: '<ruby>友達<rt>ともだち</rt></ruby>と<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ました。',
          plain: 'ともだちとえいがをみました。',
          romaji: 'tomodachi to eiga o mimashita.',
          cn: '和朋友看了电影。',
        },
      },
      {
        q: {
          jp: '<ruby>映画<rt>えいが</rt></ruby>はどうでしたか。',
          plain: 'えいがはどうでしたか。',
          romaji: 'eiga wa dou deshita ka.',
          cn: '电影怎么样？',
        },
        a: {
          jp: 'とても<ruby>面白<rt>おもしろ</rt></ruby>かったです。',
          plain: 'とてもおもしろかったです。',
          romaji: 'totemo omoshirokatta desu.',
          cn: '非常有趣。',
        },
      },
      {
        q: {
          jp: '<ruby>沖縄<rt>おきなわ</rt></ruby>でどんなことをしましたか。',
          plain: 'おきなわでどんなことをしましたか。',
          romaji: 'Okinawa de donna koto o shimashita ka.',
          cn: '在冲绳做了什么？',
        },
        a: {
          jp: '<ruby>毎日<rt>まいにち</rt></ruby><ruby>海<rt>うみ</rt></ruby>で<ruby>泳<rt>およ</rt></ruby>ぎました。',
          plain: 'まいにちうみでおよぎました。',
          romaji: 'mainichi umi de oyogimashita.',
          cn: '每天在海里游泳。',
        },
      },
      {
        q: {
          jp: '<ruby>鈴木<rt>すずき</rt></ruby>さんは<ruby>土曜日<rt>どようび</rt></ruby>どこへ<ruby>行<rt>い</rt></ruby>きましたか。',
          plain: 'すずきさんはどようびどこへいきましたか。',
          romaji: 'Suzuki-san wa doyoubi doko e ikimashita ka.',
          cn: '铃木星期六去了哪里？',
        },
        a: {
          jp: '<ruby>動物園<rt>どうぶつえん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました。',
          plain: 'どうぶつえんへいきました。',
          romaji: 'doubutsuen e ikimashita.',
          cn: '去了动物园。',
        },
      },
    ],
    vocabulary: [
      { jp: '昨日', kana: 'きのう', romaji: 'kinou', meaning: '昨天', pos: '名詞' },
      { jp: '遅く', kana: 'おそく', romaji: 'osoku', meaning: '晚地', pos: '副詞' },
      { jp: '掃除', kana: 'そうじ', romaji: 'souji', meaning: '打扫', pos: '名詞' },
      { jp: 'します', kana: 'します', romaji: 'shimasu', meaning: '做', pos: '動詞III' },
      { jp: '面白い', kana: 'おもしろい', romaji: 'omoshiroi', meaning: '有趣的', pos: 'い形容詞' },
      { jp: 'あまり', kana: 'あまり', romaji: 'amari', meaning: '不太...（接否定）', pos: '副詞' },
      { jp: '一日', kana: 'いちにち', romaji: 'ichinichi', meaning: '一天', pos: '名詞' },
      { jp: '先月', kana: 'せんげつ', romaji: 'sengetsu', meaning: '上个月', pos: '名詞' },
      { jp: '先週', kana: 'せんしゅう', romaji: 'senshuu', meaning: '上周', pos: '名詞' },
      { jp: '沖縄', kana: 'おきなわ', romaji: 'Okinawa', meaning: '冲绳', pos: '名詞' },
      { jp: '天気', kana: 'てんき', romaji: 'tenki', meaning: '天气', pos: '名詞' },
      { jp: '海', kana: 'うみ', romaji: 'umi', meaning: '海', pos: '名詞' },
      { jp: '魚', kana: 'さかな', romaji: 'sakana', meaning: '鱼', pos: '名詞' },
      { jp: '毎日', kana: 'まいにち', romaji: 'mainichi', meaning: '每天', pos: '名詞' },
      { jp: '泳ぎます', kana: 'およぎます', romaji: 'oyogimasu', meaning: '游泳', pos: '動詞I' },
      { jp: '地元', kana: 'じもと', romaji: 'jimoto', meaning: '当地', pos: '名詞' },
      { jp: '本当に', kana: 'ほんとうに', romaji: 'hontou ni', meaning: '真的', pos: '副詞' },
      { jp: '素晴らしい', kana: 'すばらしい', romaji: 'subarashii', meaning: '极好的', pos: 'い形容詞' },
      { jp: '旅行', kana: 'りょこう', romaji: 'ryokou', meaning: '旅行', pos: '名詞' },
      { jp: '動物園', kana: 'どうぶつえん', romaji: 'doubutsuen', meaning: '动物园', pos: '名詞' },
      { jp: '喜びます', kana: 'よろこびます', romaji: 'yorokobimasu', meaning: '高兴', pos: '動詞I' },
      { jp: '楽しい', kana: 'たのしい', romaji: 'tanoshii', meaning: '开心的', pos: 'い形容詞' },
      { jp: 'ずっと', kana: 'ずっと', romaji: 'zutto', meaning: '一直', pos: '副詞' },
    ],
    grammar: [
      {
        pattern: 'V ました／V ませんでした',
        name: '动词过去式',
        explain: '「ます」→「ました」（过去肯定），「ません」→「ませんでした」（过去否定）。日语过去式只有这两种变化。',
        examples: [
          {
            jp: '<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ました。',
            plain: 'えいがをみました。',
            cn: '看了电影。',
          },
          {
            jp: '<ruby>勉強<rt>べんきょう</rt></ruby>しませんでした。',
            plain: 'べんきょうしませんでした。',
            cn: '没学习。',
          },
        ],
      },
      {
        pattern: 'い形容詞 → 〜かったです',
        name: 'い形容词过去式',
        explain: '去「い」加「かった」。否定过去：「〜くなかったです」。例外：「いい→よかった」。',
        examples: [
          {
            jp: '<ruby>美味<rt>おい</rt></ruby>しかったです。',
            plain: 'おいしかったです。',
            cn: '（之前）很好吃。',
          },
          {
            jp: '<ruby>面白<rt>おもしろ</rt></ruby>くなかったです。',
            plain: 'おもしろくなかったです。',
            cn: '（之前）不有趣。',
          },
          {
            jp: 'よかったです。',
            plain: 'よかったです。',
            cn: '（之前）很好。',
          },
        ],
      },
      {
        pattern: 'な形容詞／N → 〜でした',
        name: 'な形容词和名词过去式',
        explain: '「です」→「でした」（过去肯定），「じゃありません」→「じゃありませんでした」（过去否定）。',
        examples: [
          {
            jp: '<ruby>休<rt>やす</rt></ruby>みでした。',
            plain: 'やすみでした。',
            cn: '（之前）是休息日。',
          },
          {
            jp: 'にぎやかじゃありませんでした。',
            plain: 'にぎやかじゃありませんでした。',
            cn: '（之前）不热闹。',
          },
        ],
      },
      {
        pattern: 'あまり〜ません',
        name: '部分否定',
        explain: '「あまり」+ 否定形，表示"不太..."。语气比直接否定柔和。',
        examples: [
          {
            jp: 'あまり<ruby>勉強<rt>べんきょう</rt></ruby>しませんでした。',
            plain: 'あまりべんきょうしませんでした。',
            cn: '没怎么学习。',
          },
          {
            jp: 'あまり<ruby>美味<rt>おい</rt></ruby>しくないです。',
            plain: 'あまりおいしくないです。',
            cn: '不太好吃。',
          },
        ],
      },
      {
        pattern: '先〜／〜前',
        name: '过去时间表达',
        explain: '「先〜」表示"上一个"：先週（上周）、先月（上月）、先年=去年。「〜前」表示"...之前"：三日前（三天前）、一年前（一年前）。',
        examples: [
          {
            jp: '<ruby>先週<rt>せんしゅう</rt></ruby>の<ruby>金曜日<rt>きんようび</rt></ruby>',
            plain: 'せんしゅうのきんようび',
            cn: '上周五',
          },
          {
            jp: '<ruby>三日前<rt>みっかまえ</rt></ruby>',
            plain: 'みっかまえ',
            cn: '三天前',
          },
        ],
      },
    ],
  }
];
