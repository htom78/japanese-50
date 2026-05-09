// ============================================================
// lessons-n4-part1.ts
// JLPT N4 — 第 9 課 ～ 第 14 課
// ============================================================

import type { Lesson } from './types';

export const lessonsN4Part1: Lesson[] = [

  // ========================================================
  // 第 9 課
  // ========================================================
  {
    id: 9,
    level: 'N4',
    title: {
      jp: 'て形入門',
      romaji: 'te-kei nyuumon',
      cn: 'て形入门',
      en: 'Te-form Basics',
    },
    goals: [
      '掌握三类动词的て形变化规则',
      '能用「〜てください」请求他人',
      '能给出简单的指路、操作步骤',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '道を聞く',
          romaji: 'michi o kiku',
          cn: '问路',
        },
        sentences: [
          {
            jp: 'すみません、<ruby>東京駅<rt>とうきょうえき</rt></ruby>はどこですか。',
            plain: 'すみません、とうきょうえきはどこですか。',
            romaji: 'sumimasen, Toukyou-eki wa doko desu ka.',
            cn: '请问，东京站在哪里？',
          },
          {
            jp: 'まっすぐ<ruby>行<rt>い</rt></ruby>って、<ruby>二<rt>ふた</rt></ruby>つ<ruby>目<rt>め</rt></ruby>の<ruby>信号<rt>しんごう</rt></ruby>を<ruby>右<rt>みぎ</rt></ruby>に<ruby>曲<rt>ま</rt></ruby>がってください。',
            plain: 'まっすぐいって、ふたつめのしんごうをみぎにまがってください。',
            romaji: 'massugu itte, futatsume no shingou o migi ni magatte kudasai.',
            cn: '请直走，到第二个红绿灯往右转。',
          },
          {
            jp: 'それから、<ruby>少<rt>すこ</rt></ruby>し<ruby>歩<rt>ある</rt></ruby>いて、<ruby>橋<rt>はし</rt></ruby>を<ruby>渡<rt>わた</rt></ruby>ってください。',
            plain: 'それから、すこしあるいて、はしをわたってください。',
            romaji: 'sorekara, sukoshi aruite, hashi o watatte kudasai.',
            cn: '然后，稍微走一段，过桥。',
          },
          {
            jp: '<ruby>橋<rt>はし</rt></ruby>を<ruby>渡<rt>わた</rt></ruby>って、すぐ<ruby>左側<rt>ひだりがわ</rt></ruby>にあります。',
            plain: 'はしをわたって、すぐひだりがわにあります。',
            romaji: 'hashi o watatte, sugu hidari-gawa ni arimasu.',
            cn: '过桥后，马上就在左边。',
          },
          {
            jp: 'どのぐらいかかりますか。',
            plain: 'どのぐらいかかりますか。',
            romaji: 'donogurai kakarimasu ka.',
            cn: '大概要多久？',
          },
          {
            jp: '<ruby>歩<rt>ある</rt></ruby>いて<ruby>十分<rt>じゅっぷん</rt></ruby>ぐらいです。',
            plain: 'あるいてじゅっぷんぐらいです。',
            romaji: 'aruite juppun gurai desu.',
            cn: '走着大约十分钟。',
          },
          {
            jp: 'どうもありがとうございました。',
            plain: 'どうもありがとうございました。',
            romaji: 'doumo arigatou gozaimashita.',
            cn: '非常感谢。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '料理の作り方（簡単版）',
          romaji: 'ryouri no tsukurikata (kantan-ban)',
          cn: '简单料理的做法',
        },
        sentences: [
          {
            jp: '<ruby>今日<rt>きょう</rt></ruby>は<ruby>簡単<rt>かんたん</rt></ruby>な<ruby>玉子<rt>たまご</rt></ruby>サンドの<ruby>作<rt>つく</rt></ruby>り<ruby>方<rt>かた</rt></ruby>を<ruby>紹介<rt>しょうかい</rt></ruby>します。',
            plain: 'きょうはかんたんなたまごサンドのつくりかたをしょうかいします。',
            romaji: 'kyou wa kantan na tamago-sando no tsukurikata o shoukai shimasu.',
            cn: '今天介绍简单的鸡蛋三明治做法。',
          },
          {
            jp: 'まず、<ruby>玉子<rt>たまご</rt></ruby>を<ruby>三<rt>みっ</rt></ruby>つゆでてください。',
            plain: 'まず、たまごをみっつゆでてください。',
            romaji: 'mazu, tamago o mittsu yudete kudasai.',
            cn: '首先，请煮三个鸡蛋。',
          },
          {
            jp: '<ruby>次<rt>つぎ</rt></ruby>に、ゆで<ruby>玉子<rt>たまご</rt></ruby>を<ruby>細<rt>こま</rt></ruby>かく<ruby>切<rt>き</rt></ruby>って、マヨネーズと<ruby>混<rt>ま</rt></ruby>ぜます。',
            plain: 'つぎに、ゆでたまごをこまかくきって、マヨネーズとまぜます。',
            romaji: 'tsugi ni, yude-tamago o komakaku kitte, mayoneezu to mazemasu.',
            cn: '接下来，把水煮蛋切碎，和蛋黄酱混合。',
          },
          {
            jp: '<ruby>塩<rt>しお</rt></ruby>とこしょうを<ruby>少<rt>すこ</rt></ruby>し<ruby>入<rt>い</rt></ruby>れて、<ruby>味<rt>あじ</rt></ruby>を<ruby>整<rt>ととの</rt></ruby>えてください。',
            plain: 'しおとこしょうをすこしいれて、あじをととのえてください。',
            romaji: 'shio to koshou o sukoshi irete, aji o totonoete kudasai.',
            cn: '加少许盐和胡椒，调整味道。',
          },
          {
            jp: 'パンに<ruby>玉子<rt>たまご</rt></ruby>サラダを<ruby>挟<rt>はさ</rt></ruby>んで、<ruby>半分<rt>はんぶん</rt></ruby>に<ruby>切<rt>き</rt></ruby>ってください。',
            plain: 'パンにたまごサラダをはさんで、はんぶんにきってください。',
            romaji: 'pan ni tamago-sarada o hasande, hanbun ni kitte kudasai.',
            cn: '把鸡蛋沙拉夹在面包里，切成两半。',
          },
          {
            jp: 'できあがり！とても<ruby>美味<rt>おい</rt></ruby>しいですよ。',
            plain: 'できあがり！とてもおいしいですよ。',
            romaji: 'dekiagari! totemo oishii desu yo.',
            cn: '完成！非常好吃哦。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: 'コンビニで店員に聞く。',
        cn: '在便利店询问店员。',
      },
      lines: [
        {
          speaker: '客',
          jp: 'すみません、ATMはありますか。',
          plain: 'すみません、ATMはありますか。',
          romaji: 'sumimasen, ATM wa arimasu ka.',
          cn: '请问，有ATM吗？',
        },
        {
          speaker: '店員',
          jp: 'はい、<ruby>店<rt>みせ</rt></ruby>の<ruby>奥<rt>おく</rt></ruby>です。あちらに<ruby>行<rt>い</rt></ruby>ってください。',
          plain: 'はい、みせのおくです。あちらにいってください。',
          romaji: 'hai, mise no oku desu. achira ni itte kudasai.',
          cn: '有的，在店里里面。请去那边。',
        },
        {
          speaker: '客',
          jp: '<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。',
          plain: 'つかいかたをおしえてください。',
          romaji: 'tsukaikata o oshiete kudasai.',
          cn: '请告诉我使用方法。',
        },
        {
          speaker: '店員',
          jp: 'カードを<ruby>入<rt>い</rt></ruby>れて、<ruby>暗証番号<rt>あんしょうばんごう</rt></ruby>を<ruby>押<rt>お</rt></ruby>してください。それだけです。',
          plain: 'カードをいれて、あんしょうばんごうをおしてください。それだけです。',
          romaji: 'kaado o irete, anshou-bangou o oshite kudasai. sore dake desu.',
          cn: '插卡，然后按密码。就这样。',
        },
        {
          speaker: '客',
          jp: 'わかりました、ありがとうございます。',
          plain: 'わかりました、ありがとうございます。',
          romaji: 'wakarimashita, arigatou gozaimasu.',
          cn: '明白了，谢谢。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>東京駅<rt>とうきょうえき</rt></ruby>へどう<ruby>行<rt>い</rt></ruby>きますか。',
          plain: 'とうきょうえきへどういきますか。',
          romaji: 'Toukyou-eki e dou ikimasu ka.',
          cn: '怎么去东京站？',
        },
        a: {
          jp: 'まっすぐ<ruby>行<rt>い</rt></ruby>って、<ruby>二<rt>ふた</rt></ruby>つ<ruby>目<rt>め</rt></ruby>の<ruby>信号<rt>しんごう</rt></ruby>を<ruby>右<rt>みぎ</rt></ruby>に<ruby>曲<rt>ま</rt></ruby>がります。',
          plain: 'まっすぐいって、ふたつめのしんごうをみぎにまがります。',
          romaji: 'massugu itte, futatsume no shingou o migi ni magarimasu.',
          cn: '直走，到第二个红绿灯往右转。',
        },
      },
      {
        q: {
          jp: '<ruby>歩<rt>ある</rt></ruby>いてどのぐらいかかりますか。',
          plain: 'あるいてどのぐらいかかりますか。',
          romaji: 'aruite donogurai kakarimasu ka.',
          cn: '走着大约要多久？',
        },
        a: {
          jp: '<ruby>十分<rt>じゅっぷん</rt></ruby>ぐらいです。',
          plain: 'じゅっぷんぐらいです。',
          romaji: 'juppun gurai desu.',
          cn: '大约十分钟。',
        },
      },
      {
        q: {
          jp: '<ruby>玉子<rt>たまご</rt></ruby>サンドを<ruby>作<rt>つく</rt></ruby>る<ruby>時<rt>とき</rt></ruby>、まず<ruby>何<rt>なに</rt></ruby>をしますか。',
          plain: 'たまごサンドをつくるとき、まずなにをしますか。',
          romaji: 'tamago-sando o tsukuru toki, mazu nani o shimasu ka.',
          cn: '做鸡蛋三明治时，首先做什么？',
        },
        a: {
          jp: '<ruby>玉子<rt>たまご</rt></ruby>をゆでます。',
          plain: 'たまごをゆでます。',
          romaji: 'tamago o yudemasu.',
          cn: '煮鸡蛋。',
        },
      },
      {
        q: {
          jp: 'ATMの<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>は<ruby>難<rt>むずか</rt></ruby>しいですか。',
          plain: 'ATMのつかいかたはむずかしいですか。',
          romaji: 'ATM no tsukaikata wa muzukashii desu ka.',
          cn: 'ATM的使用方法难吗？',
        },
        a: {
          jp: 'いいえ、カードを<ruby>入<rt>い</rt></ruby>れて、<ruby>暗証番号<rt>あんしょうばんごう</rt></ruby>を<ruby>押<rt>お</rt></ruby>すだけです。<ruby>簡単<rt>かんたん</rt></ruby>です。',
          plain: 'いいえ、カードをいれて、あんしょうばんごうをおすだけです。かんたんです。',
          romaji: 'iie, kaado o irete, anshou-bangou o osu dake desu. kantan desu.',
          cn: '不，只要插卡按密码就行。很简单。',
        },
      },
    ],
    vocabulary: [
      { jp: 'まっすぐ', kana: 'まっすぐ', romaji: 'massugu', meaning: '笔直地', pos: '副詞' },
      { jp: '信号', kana: 'しんごう', romaji: 'shingou', meaning: '红绿灯', pos: '名詞' },
      { jp: '右', kana: 'みぎ', romaji: 'migi', meaning: '右', pos: '名詞' },
      { jp: '左', kana: 'ひだり', romaji: 'hidari', meaning: '左', pos: '名詞' },
      { jp: '曲がります', kana: 'まがります', romaji: 'magarimasu', meaning: '拐弯', pos: '動詞I' },
      { jp: '歩きます', kana: 'あるきます', romaji: 'arukimasu', meaning: '走路', pos: '動詞I' },
      { jp: '橋', kana: 'はし', romaji: 'hashi', meaning: '桥', pos: '名詞' },
      { jp: '渡ります', kana: 'わたります', romaji: 'watarimasu', meaning: '过（桥/路）', pos: '動詞I' },
      { jp: 'すぐ', kana: 'すぐ', romaji: 'sugu', meaning: '马上', pos: '副詞' },
      { jp: '左側', kana: 'ひだりがわ', romaji: 'hidari-gawa', meaning: '左侧', pos: '名詞' },
      { jp: 'どのぐらい', kana: 'どのぐらい', romaji: 'donogurai', meaning: '大约多少', pos: '疑問詞' },
      { jp: '簡単', kana: 'かんたん', romaji: 'kantan', meaning: '简单', pos: 'な形容詞' },
      { jp: '玉子', kana: 'たまご', romaji: 'tamago', meaning: '鸡蛋', pos: '名詞' },
      { jp: 'サンド', kana: 'サンド', romaji: 'sando', meaning: '三明治', pos: '名詞' },
      { jp: '作り方', kana: 'つくりかた', romaji: 'tsukurikata', meaning: '做法', pos: '名詞' },
      { jp: '紹介します', kana: 'しょうかいします', romaji: 'shoukai shimasu', meaning: '介绍', pos: '動詞III' },
      { jp: 'まず', kana: 'まず', romaji: 'mazu', meaning: '首先', pos: '副詞' },
      { jp: 'ゆでます', kana: 'ゆでます', romaji: 'yudemasu', meaning: '煮', pos: '動詞II' },
      { jp: '次に', kana: 'つぎに', romaji: 'tsugi ni', meaning: '接下来', pos: '副詞' },
      { jp: '細かく', kana: 'こまかく', romaji: 'komakaku', meaning: '细碎地', pos: '副詞' },
      { jp: '切ります', kana: 'きります', romaji: 'kirimasu', meaning: '切', pos: '動詞I' },
      { jp: 'マヨネーズ', kana: 'マヨネーズ', romaji: 'mayoneezu', meaning: '蛋黄酱', pos: '名詞' },
      { jp: '混ぜます', kana: 'まぜます', romaji: 'mazemasu', meaning: '混合', pos: '動詞II' },
      { jp: '塩', kana: 'しお', romaji: 'shio', meaning: '盐', pos: '名詞' },
      { jp: 'こしょう', kana: 'こしょう', romaji: 'koshou', meaning: '胡椒', pos: '名詞' },
      { jp: '入れます', kana: 'いれます', romaji: 'iremasu', meaning: '放入', pos: '動詞II' },
      { jp: '挟みます', kana: 'はさみます', romaji: 'hasamimasu', meaning: '夹', pos: '動詞I' },
      { jp: '半分', kana: 'はんぶん', romaji: 'hanbun', meaning: '一半', pos: '名詞' },
      { jp: '使い方', kana: 'つかいかた', romaji: 'tsukaikata', meaning: '使用方法', pos: '名詞' },
      { jp: '教えます', kana: 'おしえます', romaji: 'oshiemasu', meaning: '教', pos: '動詞II' },
      { jp: '押します', kana: 'おします', romaji: 'oshimasu', meaning: '按', pos: '動詞I' },
      { jp: '暗証番号', kana: 'あんしょうばんごう', romaji: 'anshou-bangou', meaning: '密码', pos: '名詞' },
    ],
    grammar: [
      {
        pattern: 'V て形（动词て形）',
        name: '动词て形变化规则',
        explain: '【II类・る动词】去る加て：食べる→食べて、見る→見て。\n【III类】する→して、来る→来て。\n【I类・う动词】根据词尾变化：う/つ/る→って，く→いて（行く例外→行って），ぐ→いで，す→して，ぬ/ぶ/む→んで。',
        examples: [
          {
            jp: '<ruby>食<rt>た</rt></ruby>べる→<ruby>食<rt>た</rt></ruby>べて',
            plain: 'たべる→たべて',
            cn: '吃→吃（て形）',
          },
          {
            jp: '<ruby>書<rt>か</rt></ruby>く→<ruby>書<rt>か</rt></ruby>いて',
            plain: 'かく→かいて',
            cn: '写→写（て形）',
          },
          {
            jp: '<ruby>飲<rt>の</rt></ruby>む→<ruby>飲<rt>の</rt></ruby>んで',
            plain: 'のむ→のんで',
            cn: '喝→喝（て形）',
          },
        ],
      },
      {
        pattern: 'V て + ください',
        name: '请求表达',
        explain: '"请...". 是日语最常用的请求表达，比「〜ください」（请给我...）更广。否定形「〜ないでください」（请不要...）。',
        examples: [
          {
            jp: '<ruby>待<rt>ま</rt></ruby>ってください。',
            plain: 'まってください。',
            cn: '请等一下。',
          },
          {
            jp: 'ここに<ruby>名前<rt>なまえ</rt></ruby>を<ruby>書<rt>か</rt></ruby>いてください。',
            plain: 'ここになまえをかいてください。',
            cn: '请在这里写名字。',
          },
        ],
      },
      {
        pattern: 'V て、V て、V ます',
        name: 'て形连接动作',
        explain: '"做...，然后..." 用て形连接多个动作，表示先后顺序。最后一个动作用ます形结尾。',
        examples: [
          {
            jp: '<ruby>朝<rt>あさ</rt></ruby><ruby>起<rt>お</rt></ruby>きて、ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べて、<ruby>会社<rt>かいしゃ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。',
            plain: 'あさおきて、ごはんをたべて、かいしゃへいきます。',
            cn: '早上起床，吃饭，去公司。',
          },
        ],
      },
      {
        pattern: '〜ぐらい',
        name: '大约/程度',
        explain: '接在数量后面表示"大约"。也读作「くらい」，意思相同。「ごろ」是用于具体时间点的"大约"（七時ごろ＝大约七点）。',
        examples: [
          {
            jp: '<ruby>十分<rt>じゅっぷん</rt></ruby>ぐらい',
            plain: 'じゅっぷんぐらい',
            cn: '大约十分钟',
          },
          {
            jp: '<ruby>千円<rt>せんえん</rt></ruby>ぐらい',
            plain: 'せんえんぐらい',
            cn: '大约一千日元',
          },
        ],
      },
      {
        pattern: 'V る + だけです',
        name: '"只要...就行"',
        explain: '动词原形 + だけ表示"只...". 在说明操作步骤时常用。',
        examples: [
          {
            jp: 'ボタンを<ruby>押<rt>お</rt></ruby>すだけです。',
            plain: 'ボタンをおすだけです。',
            cn: '只要按按钮就行。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 10 課
  // ========================================================
  {
    id: 10,
    level: 'N4',
    title: {
      jp: '進行と状態',
      romaji: 'shinkou to joutai',
      cn: '进行与状态',
      en: 'Progressive and State',
    },
    goals: [
      '掌握「〜ています」表示正在进行',
      '掌握「〜ています」表示状态、职业、习惯',
      '能描述他人的工作和日常',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '今、何をしていますか',
          romaji: 'ima, nani o shiteimasu ka',
          cn: '你现在在做什么？',
        },
        sentences: [
          {
            jp: '<ruby>今<rt>いま</rt></ruby>、<ruby>家<rt>いえ</rt></ruby>でゆっくりしています。',
            plain: 'いま、いえでゆっくりしています。',
            romaji: 'ima, ie de yukkuri shiteimasu.',
            cn: '现在在家里悠闲地待着。',
          },
          {
            jp: '<ruby>窓<rt>まど</rt></ruby>の<ruby>外<rt>そと</rt></ruby>では<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っています。',
            plain: 'まどのそとではあめがふっています。',
            romaji: 'mado no soto de wa ame ga futteimasu.',
            cn: '窗外正在下雨。',
          },
          {
            jp: '<ruby>子供<rt>こども</rt></ruby>たちは<ruby>居間<rt>いま</rt></ruby>でテレビを<ruby>見<rt>み</rt></ruby>ています。',
            plain: 'こどもたちはいまでテレビをみています。',
            romaji: 'kodomo-tachi wa ima de terebi o miteimasu.',
            cn: '孩子们在客厅里看电视。',
          },
          {
            jp: '<ruby>妻<rt>つま</rt></ruby>はキッチンでコーヒーを<ruby>入<rt>い</rt></ruby>れています。',
            plain: 'つまはキッチンでコーヒーをいれています。',
            romaji: 'tsuma wa kitchin de koohii o ireteimasu.',
            cn: '妻子在厨房里冲咖啡。',
          },
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>はソファーで<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んでいます。',
            plain: 'わたしはソファーでほんをよんでいます。',
            romaji: 'watashi wa sofaa de hon o yondeimasu.',
            cn: '我在沙发上读书。',
          },
          {
            jp: '<ruby>静<rt>しず</rt></ruby>かな<ruby>休日<rt>きゅうじつ</rt></ruby>の<ruby>午後<rt>ごご</rt></ruby>です。',
            plain: 'しずかなきゅうじつのごごです。',
            romaji: 'shizuka na kyuujitsu no gogo desu.',
            cn: '是个安静的假日下午。',
          },
          {
            jp: 'こういう<ruby>時間<rt>じかん</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>幸<rt>しあわ</rt></ruby>せです。',
            plain: 'こういうじかんがいちばんしあわせです。',
            romaji: 'kou iu jikan ga ichiban shiawase desu.',
            cn: '这样的时光最幸福。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '父の仕事',
          romaji: 'chichi no shigoto',
          cn: '父亲的工作',
        },
        sentences: [
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>の<ruby>父<rt>ちち</rt></ruby>は<ruby>銀行<rt>ぎんこう</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>いています。',
            plain: 'わたしのちちはぎんこうではたらいています。',
            romaji: 'watashi no chichi wa ginkou de hataraiteimasu.',
            cn: '我父亲在银行工作。',
          },
          {
            jp: '<ruby>毎朝<rt>まいあさ</rt></ruby>スーツを<ruby>着<rt>き</rt></ruby>て、ネクタイを<ruby>締<rt>し</rt></ruby>めています。',
            plain: 'まいあさスーツをきて、ネクタイをしめています。',
            romaji: 'maiasa suutsu o kite, nekutai o shimeteimasu.',
            cn: '每天早上穿西装、系领带。',
          },
          {
            jp: '<ruby>母<rt>はは</rt></ruby>は<ruby>小学校<rt>しょうがっこう</rt></ruby>で<ruby>英語<rt>えいご</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えています。',
            plain: 'はははしょうがっこうでえいごをおしえています。',
            romaji: 'haha wa shougakkou de eigo o oshieteimasu.',
            cn: '母亲在小学教英语。',
          },
          {
            jp: '<ruby>兄<rt>あに</rt></ruby>はIT<ruby>会社<rt>がいしゃ</rt></ruby>でプログラマーをしています。',
            plain: 'あにはITがいしゃでプログラマーをしています。',
            romaji: 'ani wa IT-gaisha de puroguramaa o shiteimasu.',
            cn: '哥哥在IT公司当程序员。',
          },
          {
            jp: '<ruby>姉<rt>あね</rt></ruby>は<ruby>結婚<rt>けっこん</rt></ruby>しています。<ruby>大阪<rt>おおさか</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいます。',
            plain: 'あねはけっこんしています。おおさかにすんでいます。',
            romaji: 'ane wa kekkon shiteimasu. Oosaka ni sundeimasu.',
            cn: '姐姐结婚了。住在大阪。',
          },
          {
            jp: '<ruby>家族<rt>かぞく</rt></ruby>はみんな<ruby>頑張<rt>がんば</rt></ruby>っています。',
            plain: 'かぞくはみんながんばっています。',
            romaji: 'kazoku wa minna ganbatteimasu.',
            cn: '家人都在努力。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '電話で友達と話している。',
        cn: '在电话里和朋友说话。',
      },
      lines: [
        {
          speaker: '友達',
          jp: 'もしもし、<ruby>今<rt>いま</rt></ruby>、<ruby>何<rt>なに</rt></ruby>をしていますか。',
          plain: 'もしもし、いま、なにをしていますか。',
          romaji: 'moshimoshi, ima, nani o shiteimasu ka.',
          cn: '喂，现在在做什么？',
        },
        {
          speaker: '私',
          jp: '<ruby>夕食<rt>ゆうしょく</rt></ruby>を<ruby>作<rt>つく</rt></ruby>っています。あなたは。',
          plain: 'ゆうしょくをつくっています。あなたは。',
          romaji: 'yuushoku o tsukutteimasu. anata wa.',
          cn: '在做晚饭。你呢？',
        },
        {
          speaker: '友達',
          jp: '<ruby>私<rt>わたし</rt></ruby>はカフェでコーヒーを<ruby>飲<rt>の</rt></ruby>んでいます。<ruby>仕事<rt>しごと</rt></ruby>の<ruby>後<rt>あと</rt></ruby>です。',
          plain: 'わたしはカフェでコーヒーをのんでいます。しごとのあとです。',
          romaji: 'watashi wa kafe de koohii o nondeimasu. shigoto no ato desu.',
          cn: '我在咖啡店喝咖啡。下班后。',
        },
        {
          speaker: '私',
          jp: 'お<ruby>疲<rt>つか</rt></ruby>れさま。<ruby>明日<rt>あした</rt></ruby>は<ruby>休<rt>やす</rt></ruby>みですか。',
          plain: 'おつかれさま。あしたはやすみですか。',
          romaji: 'o-tsukaresama. ashita wa yasumi desu ka.',
          cn: '辛苦了。明天休息吗？',
        },
        {
          speaker: '友達',
          jp: 'はい、<ruby>休<rt>やす</rt></ruby>みです。<ruby>一緒<rt>いっしょ</rt></ruby>にどこかへ<ruby>行<rt>い</rt></ruby>きませんか。',
          plain: 'はい、やすみです。いっしょにどこかへいきませんか。',
          romaji: 'hai, yasumi desu. issho ni dokoka e ikimasen ka.',
          cn: '嗯，休息。要不要一起去哪里？',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: 'お<ruby>父<rt>とう</rt></ruby>さんは<ruby>何<rt>なに</rt></ruby>をしていますか。',
          plain: 'おとうさんはなにをしていますか。',
          romaji: 'o-tousan wa nani o shiteimasu ka.',
          cn: '父亲做什么工作？',
        },
        a: {
          jp: '<ruby>銀行<rt>ぎんこう</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>いています。',
          plain: 'ぎんこうではたらいています。',
          romaji: 'ginkou de hataraiteimasu.',
          cn: '在银行工作。',
        },
      },
      {
        q: {
          jp: 'お<ruby>姉<rt>ねえ</rt></ruby>さんはどこに<ruby>住<rt>す</rt></ruby>んでいますか。',
          plain: 'おねえさんはどこにすんでいますか。',
          romaji: 'o-neesan wa doko ni sundeimasu ka.',
          cn: '姐姐住在哪里？',
        },
        a: {
          jp: '<ruby>大阪<rt>おおさか</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいます。<ruby>結婚<rt>けっこん</rt></ruby>しています。',
          plain: 'おおさかにすんでいます。けっこんしています。',
          romaji: 'Oosaka ni sundeimasu. kekkon shiteimasu.',
          cn: '住在大阪。已经结婚了。',
        },
        hint: '「結婚しています」表示已婚的状态。',
      },
      {
        q: {
          jp: '<ruby>休日<rt>きゅうじつ</rt></ruby>の<ruby>午後<rt>ごご</rt></ruby>、<ruby>家族<rt>かぞく</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしていますか。',
          plain: 'きゅうじつのごご、かぞくはなにをしていますか。',
          romaji: 'kyuujitsu no gogo, kazoku wa nani o shiteimasu ka.',
          cn: '假日下午，家人都在做什么？',
        },
        a: {
          jp: '<ruby>子供<rt>こども</rt></ruby>たちはテレビを<ruby>見<rt>み</rt></ruby>ています。<ruby>妻<rt>つま</rt></ruby>はコーヒーを<ruby>入<rt>い</rt></ruby>れています。',
          plain: 'こどもたちはテレビをみています。つまはコーヒーをいれています。',
          romaji: 'kodomo-tachi wa terebi o miteimasu. tsuma wa koohii o ireteimasu.',
          cn: '孩子们看电视，妻子冲咖啡。',
        },
      },
      {
        q: {
          jp: '<ruby>友達<rt>ともだち</rt></ruby>は<ruby>今<rt>いま</rt></ruby>どこにいますか。',
          plain: 'ともだちはいまどこにいますか。',
          romaji: 'tomodachi wa ima doko ni imasu ka.',
          cn: '朋友现在在哪里？',
        },
        a: {
          jp: 'カフェにいます。コーヒーを<ruby>飲<rt>の</rt></ruby>んでいます。',
          plain: 'カフェにいます。コーヒーをのんでいます。',
          romaji: 'kafe ni imasu. koohii o nondeimasu.',
          cn: '在咖啡店。在喝咖啡。',
        },
      },
    ],
    vocabulary: [
      { jp: '今', kana: 'いま', romaji: 'ima', meaning: '现在', pos: '名詞' },
      { jp: 'ゆっくりします', kana: 'ゆっくりします', romaji: 'yukkuri shimasu', meaning: '悠闲地度过', pos: '動詞III' },
      { jp: '雨', kana: 'あめ', romaji: 'ame', meaning: '雨', pos: '名詞' },
      { jp: '降ります', kana: 'ふります', romaji: 'furimasu', meaning: '下（雨/雪）', pos: '動詞I' },
      { jp: '居間', kana: 'いま', romaji: 'ima', meaning: '客厅', pos: '名詞' },
      { jp: 'テレビ', kana: 'テレビ', romaji: 'terebi', meaning: '电视', pos: '名詞' },
      { jp: '妻', kana: 'つま', romaji: 'tsuma', meaning: '妻子（自己的）', pos: '名詞' },
      { jp: 'キッチン', kana: 'キッチン', romaji: 'kitchin', meaning: '厨房', pos: '名詞' },
      { jp: 'ソファー', kana: 'ソファー', romaji: 'sofaa', meaning: '沙发', pos: '名詞' },
      { jp: '休日', kana: 'きゅうじつ', romaji: 'kyuujitsu', meaning: '假日', pos: '名詞' },
      { jp: '幸せ', kana: 'しあわせ', romaji: 'shiawase', meaning: '幸福', pos: 'な形容詞' },
      { jp: '一番', kana: 'いちばん', romaji: 'ichiban', meaning: '最', pos: '副詞' },
      { jp: '銀行', kana: 'ぎんこう', romaji: 'ginkou', meaning: '银行', pos: '名詞' },
      { jp: 'スーツ', kana: 'スーツ', romaji: 'suutsu', meaning: '西装', pos: '名詞' },
      { jp: '着ます', kana: 'きます', romaji: 'kimasu', meaning: '穿（上半身）', pos: '動詞II' },
      { jp: 'ネクタイ', kana: 'ネクタイ', romaji: 'nekutai', meaning: '领带', pos: '名詞' },
      { jp: '締めます', kana: 'しめます', romaji: 'shimemasu', meaning: '系；关', pos: '動詞II' },
      { jp: '小学校', kana: 'しょうがっこう', romaji: 'shougakkou', meaning: '小学', pos: '名詞' },
      { jp: '英語', kana: 'えいご', romaji: 'eigo', meaning: '英语', pos: '名詞' },
      { jp: '兄', kana: 'あに', romaji: 'ani', meaning: '哥哥（自己的）', pos: '名詞' },
      { jp: '姉', kana: 'あね', romaji: 'ane', meaning: '姐姐（自己的）', pos: '名詞' },
      { jp: '結婚します', kana: 'けっこんします', romaji: 'kekkon shimasu', meaning: '结婚', pos: '動詞III' },
      { jp: '住みます', kana: 'すみます', romaji: 'sumimasu', meaning: '居住', pos: '動詞I' },
      { jp: '頑張ります', kana: 'がんばります', romaji: 'ganbarimasu', meaning: '努力', pos: '動詞I' },
      { jp: 'もしもし', kana: 'もしもし', romaji: 'moshimoshi', meaning: '喂（电话）', pos: '感動詞' },
      { jp: '夕食', kana: 'ゆうしょく', romaji: 'yuushoku', meaning: '晚饭', pos: '名詞' },
      { jp: '作ります', kana: 'つくります', romaji: 'tsukurimasu', meaning: '做；制作', pos: '動詞I' },
      { jp: 'カフェ', kana: 'カフェ', romaji: 'kafe', meaning: '咖啡店', pos: '名詞' },
      { jp: 'お疲れさま', kana: 'おつかれさま', romaji: 'o-tsukaresama', meaning: '辛苦了', pos: '慣用句' },
      { jp: 'プログラマー', kana: 'プログラマー', romaji: 'puroguramaa', meaning: '程序员', pos: '名詞' },
    ],
    grammar: [
      {
        pattern: 'V て + います（进行）',
        name: '正在进行',
        explain: '表示动作正在进行。「今、〜ています」是典型搭配。否定形「〜ていません」。',
        examples: [
          {
            jp: '<ruby>今<rt>いま</rt></ruby>、<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んでいます。',
            plain: 'いま、ほんをよんでいます。',
            cn: '现在在读书。',
          },
          {
            jp: '<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っています。',
            plain: 'あめがふっています。',
            cn: '正在下雨。',
          },
        ],
      },
      {
        pattern: 'V て + います（状态）',
        name: '持续状态',
        explain: '某些动词用「ています」表示状态而非进行：結婚しています（已婚状态）、住んでいます（居住状态）、知っています（知道）、持っています（拥有）。这些动词的"动作瞬间"已经完成，留下的是状态。',
        examples: [
          {
            jp: '<ruby>東京<rt>とうきょう</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいます。',
            plain: 'とうきょうにすんでいます。',
            cn: '住在东京。',
          },
          {
            jp: '<ruby>結婚<rt>けっこん</rt></ruby>しています。',
            plain: 'けっこんしています。',
            cn: '已结婚。',
          },
        ],
      },
      {
        pattern: 'V て + います（职业・习惯）',
        name: '职业和习惯性动作',
        explain: '描述职业或重复性的习惯动作。「銀行で働いています」（在银行工作）、「英語を教えています」（教英语）。',
        examples: [
          {
            jp: '<ruby>銀行<rt>ぎんこう</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>いています。',
            plain: 'ぎんこうではたらいています。',
            cn: '在银行工作。（职业）',
          },
          {
            jp: '<ruby>毎朝<rt>まいあさ</rt></ruby>ジョギングをしています。',
            plain: 'まいあさジョギングをしています。',
            cn: '每天早上跑步。（习惯）',
          },
        ],
      },
      {
        pattern: 'N₁ は N₂ で V ています',
        name: '场所 + 进行',
        explain: '场所助词用「で」（动作发生的地方）。注意与存在句的「に」区分。',
        examples: [
          {
            jp: '<ruby>図書館<rt>としょかん</rt></ruby>で<ruby>勉強<rt>べんきょう</rt></ruby>しています。',
            plain: 'としょかんでべんきょうしています。',
            cn: '在图书馆学习。',
          },
        ],
      },
      {
        pattern: '一番 + 形容詞',
        name: '最高级',
        explain: '「一番」=最，放在形容词前表示最高级。后面常加「〜が一番〜です」结构。',
        examples: [
          {
            jp: 'これが<ruby>一番<rt>いちばん</rt></ruby><ruby>美味<rt>おい</rt></ruby>しいです。',
            plain: 'これがいちばんおいしいです。',
            cn: '这个最好吃。',
          },
        ],
      },
    ],
  },

];
