// ============================================================
// lessons-n3-part1.ts
// JLPT N3 — 第 21 課 ～ 第 26 課
// ============================================================

import type { Lesson } from './types';

export const lessonsN3Part1: Lesson[] = [

  // ========================================================
  // 第 21 課 — 受身（被动）
  // ========================================================
  {
    id: 21,
    level: 'N3',
    title: {
      jp: '受身',
      romaji: 'ukemi',
      cn: '被动语态',
      en: 'Passive Voice',
    },
    goals: [
      '掌握三类动词被动形的变化规则',
      '理解"迷惑被动"（受到困扰）和中性被动的区别',
      '能用被动句描述被影响、被报道等场景',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '雨に降られた日',
          romaji: 'ame ni furareta hi',
          cn: '被雨淋的一天',
        },
        sentences: [
          {
            jp: '<ruby>昨日<rt>きのう</rt></ruby>は<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>運<rt>うん</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>い<ruby>一日<rt>いちにち</rt></ruby>でした。',
            plain: 'きのうはほんとうにうんがわるいいちにちでした。',
            romaji: 'kinou wa hontou ni un ga warui ichinichi deshita.',
            cn: '昨天真是运气不好的一天。',
          },
          {
            jp: '<ruby>朝<rt>あさ</rt></ruby>、<ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>てすぐ、<ruby>急<rt>きゅう</rt></ruby>に<ruby>雨<rt>あめ</rt></ruby>に<ruby>降<rt>ふ</rt></ruby>られてしまいました。',
            plain: 'あさ、いえをでてすぐ、きゅうにあめにふられてしまいました。',
            romaji: 'asa, ie o dete sugu, kyuu ni ame ni furarete shimaimashita.',
            cn: '早上一出门，突然就被雨淋了。',
          },
          {
            jp: '<ruby>傘<rt>かさ</rt></ruby>を<ruby>持<rt>も</rt></ruby>っていなかったので、スーツがびしょびしょになりました。',
            plain: 'かさをもっていなかったので、スーツがびしょびしょになりました。',
            romaji: 'kasa o motte inakatta node, suutsu ga bishobisho ni narimashita.',
            cn: '因为没带伞，西装湿透了。',
          },
          {
            jp: '<ruby>駅<rt>えき</rt></ruby>では<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>に<ruby>足<rt>あし</rt></ruby>を<ruby>踏<rt>ふ</rt></ruby>まれて、とても<ruby>痛<rt>いた</rt></ruby>かったです。',
            plain: 'えきではしらないひとにあしをふまれて、とてもいたかったです。',
            romaji: 'eki de wa shiranai hito ni ashi o fumarete, totemo itakatta desu.',
            cn: '在车站被陌生人踩到了脚，非常痛。',
          },
          {
            jp: '<ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>着<rt>つ</rt></ruby>くと、<ruby>部長<rt>ぶちょう</rt></ruby>に<ruby>遅刻<rt>ちこく</rt></ruby>を<ruby>注意<rt>ちゅうい</rt></ruby>されました。',
            plain: 'かいしゃにつくと、ぶちょうにちこくをちゅういされました。',
            romaji: 'kaisha ni tsuku to, buchou ni chikoku o chuui saremashita.',
            cn: '一到公司，就被部长批评迟到。',
          },
          {
            jp: '<ruby>昼休<rt>ひるやす</rt></ruby>みには、<ruby>同僚<rt>どうりょう</rt></ruby>に<ruby>大事<rt>だいじ</rt></ruby>な<ruby>書類<rt>しょるい</rt></ruby>を<ruby>汚<rt>よご</rt></ruby>されてしまいました。',
            plain: 'ひるやすみには、どうりょうにだいじなしょるいをよごされてしまいました。',
            romaji: 'hiruyasumi ni wa, douryou ni daiji na shorui o yogosarete shimaimashita.',
            cn: '午休时，重要文件被同事弄脏了。',
          },
          {
            jp: '<ruby>夕方<rt>ゆうがた</rt></ruby>、<ruby>新<rt>あたら</rt></ruby>しいプロジェクトのリーダーに<ruby>選<rt>えら</rt></ruby>ばれましたが、<ruby>正直<rt>しょうじき</rt></ruby><ruby>嬉<rt>うれ</rt></ruby>しくありませんでした。',
            plain: 'ゆうがた、あたらしいプロジェクトのリーダーにえらばれましたが、しょうじきうれしくありませんでした。',
            romaji: 'yuugata, atarashii purojekuto no riidaa ni erabaremashita ga, shoujiki ureshiku arimasen deshita.',
            cn: '傍晚，被选为新项目的负责人，但说实话并不开心。',
          },
          {
            jp: '<ruby>仕事<rt>しごと</rt></ruby>がさらに<ruby>増<rt>ふ</rt></ruby>えると<ruby>思<rt>おも</rt></ruby>うと、<ruby>気<rt>き</rt></ruby>が<ruby>重<rt>おも</rt></ruby>くなったからです。',
            plain: 'しごとがさらにふえるとおもうと、きがおもくなったからです。',
            romaji: 'shigoto ga sara ni fueru to omou to, ki ga omoku natta kara desu.',
            cn: '一想到工作还要增加，心情就沉重起来。',
          },
          {
            jp: '<ruby>帰<rt>かえ</rt></ruby>り<ruby>道<rt>みち</rt></ruby>でも、また<ruby>雨<rt>あめ</rt></ruby>に<ruby>降<rt>ふ</rt></ruby>られました。',
            plain: 'かえりみちでも、またあめにふられました。',
            romaji: 'kaerimichi de mo, mata ame ni furaremashita.',
            cn: '回家路上又被雨淋了。',
          },
          {
            jp: 'こんな<ruby>日<rt>ひ</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>にでも<ruby>慰<rt>なぐさ</rt></ruby>められたい<ruby>気分<rt>きぶん</rt></ruby>です。',
            plain: 'こんなひはだれにでもなぐさめられたいきぶんです。',
            romaji: 'konna hi wa dare ni demo nagusameraretai kibun desu.',
            cn: '这种日子真想被谁安慰一下。',
          },
          {
            jp: '<ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>って、<ruby>温<rt>あたた</rt></ruby>かいお<ruby>風呂<rt>ふろ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>って、ようやく<ruby>少<rt>すこ</rt></ruby>し<ruby>元気<rt>げんき</rt></ruby>になりました。',
            plain: 'いえにかえって、あたたかいおふろにはいって、ようやくすこしげんきになりました。',
            romaji: 'ie ni kaette, atatakai o-furo ni haitte, youyaku sukoshi genki ni narimashita.',
            cn: '回到家泡了热水澡，总算稍微恢复了精神。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '先生にほめられました',
          romaji: 'sensei ni homeraremashita',
          cn: '被老师表扬了',
        },
        sentences: [
          {
            jp: '<ruby>今日<rt>きょう</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>で、<ruby>先生<rt>せんせい</rt></ruby>にほめられました。',
            plain: 'きょうのじゅぎょうで、せんせいにほめられました。',
            romaji: 'kyou no jugyou de, sensei ni homeraremashita.',
            cn: '在今天的课上，被老师表扬了。',
          },
          {
            jp: '<ruby>難<rt>むずか</rt></ruby>しい<ruby>質問<rt>しつもん</rt></ruby>に<ruby>正<rt>ただ</rt></ruby>しく<ruby>答<rt>こた</rt></ruby>えられたからです。',
            plain: 'むずかしいしつもんにただしくこたえられたからです。',
            romaji: 'muzukashii shitsumon ni tadashiku kotaerareta kara desu.',
            cn: '因为我正确回答出了一个难题。',
          },
          {
            jp: 'クラスのみんなにも<ruby>拍手<rt>はくしゅ</rt></ruby>されて、とても<ruby>嬉<rt>うれ</rt></ruby>しかったです。',
            plain: 'クラスのみんなにもはくしゅされて、とてもうれしかったです。',
            romaji: 'kurasu no minna ni mo hakushu sarete, totemo ureshikatta desu.',
            cn: '还被全班同学鼓掌，非常高兴。',
          },
          {
            jp: 'この<ruby>本<rt>ほん</rt></ruby>は<ruby>多<rt>おお</rt></ruby>くの<ruby>言葉<rt>ことば</rt></ruby>に<ruby>翻訳<rt>ほんやく</rt></ruby>されています。',
            plain: 'このほんはおおくのことばにほんやくされています。',
            romaji: 'kono hon wa ooku no kotoba ni honyaku sarete imasu.',
            cn: '这本书已被翻译成多种语言。',
          },
          {
            jp: '<ruby>来月<rt>らいげつ</rt></ruby>、<ruby>新<rt>あたら</rt></ruby>しいスマホが<ruby>発売<rt>はつばい</rt></ruby>されるそうです。',
            plain: 'らいげつ、あたらしいスマホがはつばいされるそうです。',
            romaji: 'raigetsu, atarashii sumaho ga hatsubai sareru sou desu.',
            cn: '听说下个月会发售新手机。',
          },
          {
            jp: 'オリンピックは<ruby>四年<rt>よねん</rt></ruby>に<ruby>一度<rt>いちど</rt></ruby><ruby>開<rt>ひら</rt></ruby>かれます。',
            plain: 'オリンピックはよねんにいちどひらかれます。',
            romaji: 'orinpikku wa yo-nen ni ichi-do hirakaremasu.',
            cn: '奥运会每四年举办一次。',
          },
          {
            jp: '<ruby>子<rt>こ</rt></ruby>どもの<ruby>頃<rt>ころ</rt></ruby>、<ruby>母<rt>はは</rt></ruby>によくしかられました。',
            plain: 'こどものころ、ははによくしかられました。',
            romaji: 'kodomo no koro, haha ni yoku shikararemashita.',
            cn: '小时候经常被母亲训。',
          },
          {
            jp: 'でも、ほめられた<ruby>記憶<rt>きおく</rt></ruby>のほうが<ruby>強<rt>つよ</rt></ruby>く<ruby>残<rt>のこ</rt></ruby>っています。',
            plain: 'でも、ほめられたきおくのほうがつよくのこっています。',
            romaji: 'demo, homerareta kioku no hou ga tsuyoku nokotte imasu.',
            cn: '不过被表扬的记忆留下得更深。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '会社の休憩室で、同僚の二人が今日のトラブルについて話している。',
        cn: '公司休息室里，两位同事在抱怨今天的麻烦。',
      },
      lines: [
        {
          speaker: '田中',
          jp: '<ruby>聞<rt>き</rt></ruby>いてくださいよ。<ruby>朝<rt>あさ</rt></ruby>、<ruby>満員<rt>まんいん</rt></ruby><ruby>電車<rt>でんしゃ</rt></ruby>でおじさんに<ruby>足<rt>あし</rt></ruby>を<ruby>踏<rt>ふ</rt></ruby>まれちゃって。',
          plain: 'きいてくださいよ。あさ、まんいんでんしゃでおじさんにあしをふまれちゃって。',
          romaji: 'kiite kudasai yo. asa, man-in densha de ojisan ni ashi o fumarechatte.',
          cn: '听我说啊。早上在拥挤的电车里被一位大叔踩到脚了。',
        },
        {
          speaker: '鈴木',
          jp: 'ええ、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>でしたか。<ruby>謝<rt>あやま</rt></ruby>られましたか。',
          plain: 'ええ、だいじょうぶでしたか。あやまられましたか。',
          romaji: 'ee, daijoubu deshita ka. ayamararemashita ka.',
          cn: '哎，没事吧？对方道歉了吗？',
        },
        {
          speaker: '田中',
          jp: 'いいえ、<ruby>何<rt>なに</rt></ruby>も<ruby>言<rt>い</rt></ruby>われませんでした。<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>失礼<rt>しつれい</rt></ruby>ですよね。',
          plain: 'いいえ、なにもいわれませんでした。ほんとうにしつれいですよね。',
          romaji: 'iie, nani mo iwaremasen deshita. hontou ni shitsurei desu yo ne.',
          cn: '没有，什么都没说。真是没礼貌。',
        },
        {
          speaker: '鈴木',
          jp: '<ruby>私<rt>わたし</rt></ruby>も<ruby>昨日<rt>きのう</rt></ruby>、<ruby>子<rt>こ</rt></ruby>どもにコーヒーをこぼされて、<ruby>新<rt>あたら</rt></ruby>しいシャツが<ruby>台無<rt>だいな</rt></ruby>しになりました。',
          plain: 'わたしもきのう、こどもにコーヒーをこぼされて、あたらしいシャツがだいなしになりました。',
          romaji: 'watashi mo kinou, kodomo ni koohii o kobosarete, atarashii shatsu ga dainashi ni narimashita.',
          cn: '我昨天也是被孩子打翻咖啡，新衬衫毁了。',
        },
        {
          speaker: '田中',
          jp: 'それはひどいですね。<ruby>洗濯<rt>せんたく</rt></ruby>しても<ruby>落<rt>お</rt></ruby>ちなかったんですか。',
          plain: 'それはひどいですね。せんたくしてもおちなかったんですか。',
          romaji: 'sore wa hidoi desu ne. sentaku shite mo ochinakatta n desu ka.',
          cn: '那太惨了。洗了也没掉吗？',
        },
        {
          speaker: '鈴木',
          jp: 'ええ、シミが<ruby>残<rt>のこ</rt></ruby>ってしまって。<ruby>妻<rt>つま</rt></ruby>にも<ruby>怒<rt>おこ</rt></ruby>られましたよ。',
          plain: 'ええ、シミがのこってしまって。つまにもおこられましたよ。',
          romaji: 'ee, shimi ga nokotte shimatte. tsuma ni mo okoraremashita yo.',
          cn: '是的，留下了污渍。还被老婆训了一顿。',
        },
        {
          speaker: '田中',
          jp: 'お<ruby>互<rt>たが</rt></ruby>いに<ruby>大変<rt>たいへん</rt></ruby>ですね。<ruby>今日<rt>きょう</rt></ruby>は<ruby>早<rt>はや</rt></ruby>く<ruby>帰<rt>かえ</rt></ruby>って<ruby>休<rt>やす</rt></ruby>みましょう。',
          plain: 'おたがいにたいへんですね。きょうははやくかえってやすみましょう。',
          romaji: 'o-tagai ni taihen desu ne. kyou wa hayaku kaette yasumimashou.',
          cn: '彼此都不容易啊。今天早点回家休息吧。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>主人公<rt>しゅじんこう</rt></ruby>は<ruby>朝<rt>あさ</rt></ruby>、<ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>てすぐ<ruby>何<rt>なに</rt></ruby>がありましたか。',
          plain: 'しゅじんこうはあさ、いえをでてすぐなにがありましたか。',
          romaji: 'shujinkou wa asa, ie o dete sugu nani ga arimashita ka.',
          cn: '主人公早上一出门发生了什么？',
        },
        a: {
          jp: '<ruby>急<rt>きゅう</rt></ruby>に<ruby>雨<rt>あめ</rt></ruby>に<ruby>降<rt>ふ</rt></ruby>られて、スーツがびしょびしょになりました。',
          plain: 'きゅうにあめにふられて、スーツがびしょびしょになりました。',
          romaji: 'kyuu ni ame ni furarete, suutsu ga bishobisho ni narimashita.',
          cn: '突然被雨淋，西装湿透了。',
        },
      },
      {
        q: {
          jp: '<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>誰<rt>だれ</rt></ruby>に<ruby>何<rt>なに</rt></ruby>を<ruby>注意<rt>ちゅうい</rt></ruby>されましたか。',
          plain: 'かいしゃでだれになにをちゅういされましたか。',
          romaji: 'kaisha de dare ni nani o chuui saremashita ka.',
          cn: '在公司被谁批评了什么？',
        },
        a: {
          jp: '<ruby>部長<rt>ぶちょう</rt></ruby>に<ruby>遅刻<rt>ちこく</rt></ruby>を<ruby>注意<rt>ちゅうい</rt></ruby>されました。',
          plain: 'ぶちょうにちこくをちゅういされました。',
          romaji: 'buchou ni chikoku o chuui saremashita.',
          cn: '被部长批评迟到了。',
        },
      },
      {
        q: {
          jp: 'リーダーに<ruby>選<rt>えら</rt></ruby>ばれて、なぜ<ruby>嬉<rt>うれ</rt></ruby>しくなかったのですか。',
          plain: 'リーダーにえらばれて、なぜうれしくなかったのですか。',
          romaji: 'riidaa ni erabarete, naze ureshikunakatta no desu ka.',
          cn: '被选为负责人，为什么不高兴？',
        },
        a: {
          jp: '<ruby>仕事<rt>しごと</rt></ruby>がさらに<ruby>増<rt>ふ</rt></ruby>えると<ruby>思<rt>おも</rt></ruby>ったからです。',
          plain: 'しごとがさらにふえるとおもったからです。',
          romaji: 'shigoto ga sara ni fueru to omotta kara desu.',
          cn: '因为想到工作还要增加。',
        },
        hint: '迷惑被动也可以延伸到"被任命却感到困扰"的语感。',
      },
      {
        q: {
          jp: 'オリンピックはどのぐらいの<ruby>間隔<rt>かんかく</rt></ruby>で<ruby>開<rt>ひら</rt></ruby>かれますか。',
          plain: 'オリンピックはどのぐらいのかんかくでひらかれますか。',
          romaji: 'orinpikku wa donogurai no kankaku de hirakaremasu ka.',
          cn: '奥运会多久举办一次？',
        },
        a: {
          jp: '<ruby>四年<rt>よねん</rt></ruby>に<ruby>一度<rt>いちど</rt></ruby><ruby>開<rt>ひら</rt></ruby>かれます。',
          plain: 'よねんにいちどひらかれます。',
          romaji: 'yo-nen ni ichi-do hirakaremasu.',
          cn: '每四年举办一次。',
        },
      },
    ],
    vocabulary: [
      { jp: '運', kana: 'うん', romaji: 'un', meaning: '运气', pos: '名詞' },
      { jp: '急に', kana: 'きゅうに', romaji: 'kyuu ni', meaning: '突然', pos: '副詞' },
      { jp: '傘', kana: 'かさ', romaji: 'kasa', meaning: '伞', pos: '名詞' },
      { jp: 'びしょびしょ', kana: 'びしょびしょ', romaji: 'bishobisho', meaning: '湿透', pos: 'な形容詞' },
      { jp: '踏みます', kana: 'ふみます', romaji: 'fumimasu', meaning: '踩', pos: '動詞I' },
      { jp: '部長', kana: 'ぶちょう', romaji: 'buchou', meaning: '部长', pos: '名詞' },
      { jp: '遅刻', kana: 'ちこく', romaji: 'chikoku', meaning: '迟到', pos: '名詞' },
      { jp: '注意します', kana: 'ちゅういします', romaji: 'chuui shimasu', meaning: '提醒；批评', pos: '動詞III' },
      { jp: '同僚', kana: 'どうりょう', romaji: 'douryou', meaning: '同事', pos: '名詞' },
      { jp: '書類', kana: 'しょるい', romaji: 'shorui', meaning: '文件', pos: '名詞' },
      { jp: '汚します', kana: 'よごします', romaji: 'yogoshimasu', meaning: '弄脏', pos: '動詞I' },
      { jp: 'プロジェクト', kana: 'プロジェクト', romaji: 'purojekuto', meaning: '项目', pos: '名詞' },
      { jp: 'リーダー', kana: 'リーダー', romaji: 'riidaa', meaning: '领导者', pos: '名詞' },
      { jp: '選びます', kana: 'えらびます', romaji: 'erabimasu', meaning: '选择', pos: '動詞I' },
      { jp: '正直', kana: 'しょうじき', romaji: 'shoujiki', meaning: '老实说', pos: '副詞' },
      { jp: '気が重い', kana: 'きがおもい', romaji: 'ki ga omoi', meaning: '心情沉重', pos: '慣用句' },
      { jp: '慰めます', kana: 'なぐさめます', romaji: 'nagusamemasu', meaning: '安慰', pos: '動詞II' },
      { jp: 'ほめます', kana: 'ほめます', romaji: 'homemasu', meaning: '表扬', pos: '動詞II' },
      { jp: '拍手', kana: 'はくしゅ', romaji: 'hakushu', meaning: '鼓掌', pos: '名詞' },
      { jp: '翻訳', kana: 'ほんやく', romaji: 'honyaku', meaning: '翻译', pos: '名詞' },
      { jp: '発売', kana: 'はつばい', romaji: 'hatsubai', meaning: '发售', pos: '名詞' },
      { jp: 'オリンピック', kana: 'オリンピック', romaji: 'orinpikku', meaning: '奥运会', pos: '名詞' },
      { jp: '開きます', kana: 'ひらきます', romaji: 'hirakimasu', meaning: '举办；打开', pos: '動詞I' },
      { jp: 'しかります', kana: 'しかります', romaji: 'shikarimasu', meaning: '训斥', pos: '動詞I' },
      { jp: '記憶', kana: 'きおく', romaji: 'kioku', meaning: '记忆', pos: '名詞' },
      { jp: '満員', kana: 'まんいん', romaji: 'man-in', meaning: '满员', pos: '名詞' },
      { jp: '謝ります', kana: 'あやまります', romaji: 'ayamarimasu', meaning: '道歉', pos: '動詞I' },
      { jp: 'こぼします', kana: 'こぼします', romaji: 'koboshimasu', meaning: '弄洒', pos: '動詞I' },
      { jp: '台無し', kana: 'だいなし', romaji: 'dainashi', meaning: '糟蹋；毁掉', pos: 'な形容詞' },
      { jp: 'シミ', kana: 'シミ', romaji: 'shimi', meaning: '污渍', pos: '名詞' },
      { jp: '怒ります', kana: 'おこります', romaji: 'okorimasu', meaning: '生气', pos: '動詞I' },
      { jp: 'お互いに', kana: 'おたがいに', romaji: 'o-tagai ni', meaning: '彼此', pos: '副詞' },
    ],
    grammar: [
      {
        pattern: 'V（受身形）— 動詞I',
        name: '动词I类被动形',
        explain: '动词I类（五段动词）被动形：词尾う段→あ段+れる。書く→書かれる、読む→読まれる、踏む→踏まれる。词尾う特殊：買う→買われる（う→わ+れる）。被动句基本结构：「Bが Aに Vれる」（B被A做V），主動句「Aが Bを Vる」中的宾语B升为主语，A加助词「に」。',
        examples: [
          {
            jp: '<ruby>足<rt>あし</rt></ruby>を<ruby>踏<rt>ふ</rt></ruby>まれました。',
            plain: 'あしをふまれました。',
            cn: '脚被踩了。',
          },
          {
            jp: '<ruby>母<rt>はは</rt></ruby>に<ruby>叱<rt>しか</rt></ruby>られました。',
            plain: 'ははにしかられました。',
            cn: '被母亲训了。',
          },
        ],
      },
      {
        pattern: 'V（受身形）— 動詞II・III',
        name: '动词II・III类被动形',
        explain: '動詞II类（一段动词）：去る加られる。食べる→食べられる、見る→見られる、ほめる→ほめられる。注意被动形和可能形同形，需要靠语境区分。動詞III：する→される、来る→来られる。「先生にほめられる」（被老师表扬）这种"中性被动"在日语里比中文常见得多，往往是日语避免主语切换的自然表达。',
        examples: [
          {
            jp: '<ruby>先生<rt>せんせい</rt></ruby>にほめられました。',
            plain: 'せんせいにほめられました。',
            cn: '被老师表扬了。',
          },
          {
            jp: '<ruby>友達<rt>ともだち</rt></ruby>に<ruby>来<rt>こ</rt></ruby>られて、<ruby>勉強<rt>べんきょう</rt></ruby>ができませんでした。',
            plain: 'ともだちにこられて、べんきょうができませんでした。',
            cn: '朋友来了，没法学习。',
          },
        ],
      },
      {
        pattern: 'A に B を V（ら）れる',
        name: '迷惑被动（受害被动）',
        explain: '日语特有的"迷惑被动"：表示"被某事影响、感到困扰"。即使动词本身不及物（如「降る、来る、泣く」），也能构成被动表达受害感。「雨に降られる」字面"被雨下"，实指"因下雨受困"。「子供に泣かれる」=被孩子哭烦。中文里没有完全对应的结构，需理解为"受...所累"。这是N3 必考点之一。',
        examples: [
          {
            jp: '<ruby>雨<rt>あめ</rt></ruby>に<ruby>降<rt>ふ</rt></ruby>られて、スーツが<ruby>濡<rt>ぬ</rt></ruby>れました。',
            plain: 'あめにふられて、スーツがぬれました。',
            cn: '被雨淋了，西装湿了。',
          },
          {
            jp: '<ruby>赤<rt>あか</rt></ruby>ちゃんに<ruby>夜中<rt>よなか</rt></ruby><ruby>泣<rt>な</rt></ruby>かれて、<ruby>眠<rt>ねむ</rt></ruby>れませんでした。',
            plain: 'あかちゃんによなかなかれて、ねむれませんでした。',
            cn: '半夜被婴儿哭吵得睡不着。',
          },
        ],
      },
      {
        pattern: 'N が V（ら）れる',
        name: '物品被动（无生命主语）',
        explain: '当主语是物或事，常用被动表达"被...（做）"，往往不出现动作主体。报道、说明、客观叙述中常见。「この本は多くの言語に翻訳されている」（这本书被译成多种语言）。日常会话中，主体不重要或是"大家"时尤为常用。',
        examples: [
          {
            jp: '<ruby>新<rt>あたら</rt></ruby>しい<ruby>製品<rt>せいひん</rt></ruby>が<ruby>発売<rt>はつばい</rt></ruby>されました。',
            plain: 'あたらしいせいひんがはつばいされました。',
            cn: '新产品发售了。',
          },
          {
            jp: 'オリンピックは<ruby>四年<rt>よねん</rt></ruby>に<ruby>一度<rt>いちど</rt></ruby><ruby>開<rt>ひら</rt></ruby>かれます。',
            plain: 'オリンピックはよねんにいちどひらかれます。',
            cn: '奥运会每四年举办一次。',
          },
        ],
      },
      {
        pattern: 'A に B を V（ら）れる（持ち物受身）',
        name: '所有物被动',
        explain: '当被影响的是"我"，但具体动作发生在"我的某物"上时，主语仍是「私」（常省略），「を」标记被影响的物。「弟に手紙を読まれた」（被弟弟看了我的信）≠「手紙が読まれた」（信被读了——客观）。前者强调"我"受困扰；后者只是描述事实。',
        examples: [
          {
            jp: '<ruby>弟<rt>おとうと</rt></ruby>に<ruby>日記<rt>にっき</rt></ruby>を<ruby>読<rt>よ</rt></ruby>まれました。',
            plain: 'おとうとににっきをよまれました。',
            cn: '日记被弟弟看了。',
          },
          {
            jp: '<ruby>同僚<rt>どうりょう</rt></ruby>に<ruby>書類<rt>しょるい</rt></ruby>を<ruby>汚<rt>よご</rt></ruby>されました。',
            plain: 'どうりょうにしょるいをよごされました。',
            cn: '文件被同事弄脏了。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 22 課 — 使役
  // ========================================================
  {
    id: 22,
    level: 'N3',
    title: {
      jp: '使役',
      romaji: 'shieki',
      cn: '使役语态',
      en: 'Causative Voice',
    },
    goals: [
      '掌握三类动词使役形的变化规则',
      '区分"强制让做"和"允许做"两种语感',
      '能用「〜させてください」礼貌地请求许可',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '部下に書かせる',
          romaji: 'buka ni kakaseru',
          cn: '让下属写报告',
        },
        sentences: [
          {
            jp: '<ruby>来週<rt>らいしゅう</rt></ruby>、<ruby>大事<rt>だいじ</rt></ruby>な<ruby>会議<rt>かいぎ</rt></ruby>があります。',
            plain: 'らいしゅう、だいじなかいぎがあります。',
            romaji: 'raishuu, daiji na kaigi ga arimasu.',
            cn: '下周有重要的会议。',
          },
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>はマネージャーとして、<ruby>準備<rt>じゅんび</rt></ruby>を<ruby>進<rt>すす</rt></ruby>めなければなりません。',
            plain: 'わたしはマネージャーとして、じゅんびをすすめなければなりません。',
            romaji: 'watashi wa maneejaa toshite, junbi o susumenakereba narimasen.',
            cn: '我作为经理必须推进准备工作。',
          },
          {
            jp: 'まず、<ruby>新人<rt>しんじん</rt></ruby>の<ruby>山田<rt>やまだ</rt></ruby>さんに<ruby>資料<rt>しりょう</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>めさせます。',
            plain: 'まず、しんじんのやまださんにしりょうをあつめさせます。',
            romaji: 'mazu, shinjin no Yamada-san ni shiryou o atsumesasemasu.',
            cn: '首先，让新员工山田收集资料。',
          },
          {
            jp: '<ruby>次<rt>つぎ</rt></ruby>に、<ruby>鈴木<rt>すずき</rt></ruby>さんにレポートを<ruby>書<rt>か</rt></ruby>かせる<ruby>予定<rt>よてい</rt></ruby>です。',
            plain: 'つぎに、すずきさんにレポートをかかせるよていです。',
            romaji: 'tsugi ni, Suzuki-san ni repooto o kakaseru yotei desu.',
            cn: '接下来打算让铃木写报告。',
          },
          {
            jp: 'ただ、<ruby>仕事<rt>しごと</rt></ruby>を<ruby>頼<rt>たの</rt></ruby>むときは<ruby>言<rt>い</rt></ruby>い<ruby>方<rt>かた</rt></ruby>に<ruby>気<rt>き</rt></ruby>をつけています。',
            plain: 'ただ、しごとをたのむときはいいかたにきをつけています。',
            romaji: 'tada, shigoto o tanomu toki wa iikata ni ki o tsukete imasu.',
            cn: '不过，分配工作时我很注意说话方式。',
          },
          {
            jp: '<ruby>無理<rt>むり</rt></ruby>にやらせると、<ruby>部下<rt>ぶか</rt></ruby>のやる<ruby>気<rt>き</rt></ruby>がなくなってしまうからです。',
            plain: 'むりにやらせると、ぶかのやるきがなくなってしまうからです。',
            romaji: 'muri ni yaraseru to, buka no yaru-ki ga naku natte shimau kara desu.',
            cn: '因为强迫他们做，下属会失去干劲。',
          },
          {
            jp: 'できるだけ<ruby>本人<rt>ほんにん</rt></ruby>に<ruby>選<rt>えら</rt></ruby>ばせて、<ruby>自分<rt>じぶん</rt></ruby>のペースで<ruby>進<rt>すす</rt></ruby>めさせるようにしています。',
            plain: 'できるだけほんにんにえらばせて、じぶんのペースですすめさせるようにしています。',
            romaji: 'dekiru dake honnin ni erabasete, jibun no peesu de susumesaseru you ni shite imasu.',
            cn: '尽量让本人选择，按自己的节奏推进。',
          },
          {
            jp: 'もちろん、<ruby>困<rt>こま</rt></ruby>っているときはすぐに<ruby>相談<rt>そうだん</rt></ruby>させます。',
            plain: 'もちろん、こまっているときはすぐにそうだんさせます。',
            romaji: 'mochiron, komatte iru toki wa sugu ni soudan sasemasu.',
            cn: '当然，遇到困难时让他们马上来商量。',
          },
          {
            jp: '<ruby>上司<rt>じょうし</rt></ruby>として、<ruby>部下<rt>ぶか</rt></ruby>を<ruby>育<rt>そだ</rt></ruby>てるのも<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>仕事<rt>しごと</rt></ruby>です。',
            plain: 'じょうしとして、ぶかをそだてるのもたいせつなしごとです。',
            romaji: 'joushi toshite, buka o sodateru no mo taisetsu na shigoto desu.',
            cn: '作为上司，培养下属也是重要的工作。',
          },
          {
            jp: '<ruby>命令<rt>めいれい</rt></ruby>するのではなく、<ruby>挑戦<rt>ちょうせん</rt></ruby>させて<ruby>成長<rt>せいちょう</rt></ruby>を<ruby>見守<rt>みまも</rt></ruby>りたいと<ruby>思<rt>おも</rt></ruby>っています。',
            plain: 'めいれいするのではなく、ちょうせんさせてせいちょうをみまもりたいとおもっています。',
            romaji: 'meirei suru no de wa naku, chousen sasete seichou o mimamoritai to omotte imasu.',
            cn: '不是命令，而是想让他们挑战、守护他们成长。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '子供を留学させる',
          romaji: 'kodomo o ryuugaku saseru',
          cn: '让孩子去留学',
        },
        sentences: [
          {
            jp: '<ruby>来年<rt>らいねん</rt></ruby>、<ruby>息子<rt>むすこ</rt></ruby>をアメリカに<ruby>留学<rt>りゅうがく</rt></ruby>させるつもりです。',
            plain: 'らいねん、むすこをアメリカにりゅうがくさせるつもりです。',
            romaji: 'rainen, musuko o amerika ni ryuugaku saseru tsumori desu.',
            cn: '明年打算让儿子去美国留学。',
          },
          {
            jp: '<ruby>本人<rt>ほんにん</rt></ruby>がずっと<ruby>行<rt>い</rt></ruby>きたいと<ruby>言<rt>い</rt></ruby>っていたからです。',
            plain: 'ほんにんがずっといきたいといっていたからです。',
            romaji: 'honnin ga zutto ikitai to itte ita kara desu.',
            cn: '因为他本人一直说想去。',
          },
          {
            jp: '<ruby>若<rt>わか</rt></ruby>いうちに<ruby>広<rt>ひろ</rt></ruby>い<ruby>世界<rt>せかい</rt></ruby>を<ruby>見<rt>み</rt></ruby>させたいです。',
            plain: 'わかいうちにひろいせかいをみさせたいです。',
            romaji: 'wakai uchi ni hiroi sekai o misasetai desu.',
            cn: '想趁年轻让他看看更广阔的世界。',
          },
          {
            jp: '<ruby>妻<rt>つま</rt></ruby>は<ruby>心配<rt>しんぱい</rt></ruby>して、<ruby>反対<rt>はんたい</rt></ruby>しています。',
            plain: 'つまはしんぱいして、はんたいしています。',
            romaji: 'tsuma wa shinpai shite, hantai shite imasu.',
            cn: '妻子很担心，表示反对。',
          },
          {
            jp: '「<ruby>一人<rt>ひとり</rt></ruby>で<ruby>生活<rt>せいかつ</rt></ruby>させるのは<ruby>早<rt>はや</rt></ruby>すぎる」と<ruby>言<rt>い</rt></ruby>うのです。',
            plain: '「ひとりでせいかつさせるのははやすぎる」というのです。',
            romaji: '"hitori de seikatsu saseru no wa hayasugiru" to iu no desu.',
            cn: '她说"让他一个人生活还太早"。',
          },
          {
            jp: 'でも、<ruby>失敗<rt>しっぱい</rt></ruby>もさせて、<ruby>自分<rt>じぶん</rt></ruby>で<ruby>考<rt>かんが</rt></ruby>えさせることが<ruby>大事<rt>だいじ</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'でも、しっぱいもさせて、じぶんでかんがえさせることがだいじだとおもいます。',
            romaji: 'demo, shippai mo sasete, jibun de kangaesaseru koto ga daiji da to omoimasu.',
            cn: '但我认为让他失败、让他自己思考也很重要。',
          },
          {
            jp: '<ruby>過保護<rt>かほご</rt></ruby>にすると、<ruby>子供<rt>こども</rt></ruby>は<ruby>強<rt>つよ</rt></ruby>く<ruby>育<rt>そだ</rt></ruby>ちません。',
            plain: 'かほごにすると、こどもはつよくそだちません。',
            romaji: 'kahogo ni suru to, kodomo wa tsuyoku sodachimasen.',
            cn: '过度保护，孩子就长不强。',
          },
          {
            jp: '<ruby>親<rt>おや</rt></ruby>の<ruby>役目<rt>やくめ</rt></ruby>は、<ruby>背中<rt>せなか</rt></ruby>を<ruby>押<rt>お</rt></ruby>すことだと<ruby>信<rt>しん</rt></ruby>じています。',
            plain: 'おやのやくめは、せなかをおすことだとしんじています。',
            romaji: 'oya no yakume wa, senaka o osu koto da to shinjite imasu.',
            cn: '我相信父母的责任是推他们一把。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '会議室で、社員が部長に新しい企画について相談している。',
        cn: '会议室里，员工就新企划向部长请示。',
      },
      lines: [
        {
          speaker: '山田',
          jp: '<ruby>部長<rt>ぶちょう</rt></ruby>、<ruby>新<rt>あたら</rt></ruby>しい<ruby>企画<rt>きかく</rt></ruby>について<ruby>少<rt>すこ</rt></ruby>しお<ruby>時間<rt>じかん</rt></ruby>をいただけますか。',
          plain: 'ぶちょう、あたらしいきかくについてすこしおじかんをいただけますか。',
          romaji: 'buchou, atarashii kikaku ni tsuite sukoshi o-jikan o itadakemasu ka.',
          cn: '部长，关于新企划能给我一点时间吗？',
        },
        {
          speaker: '部長',
          jp: 'ええ、どうぞ。<ruby>説明<rt>せつめい</rt></ruby>させてください。',
          plain: 'ええ、どうぞ。せつめいさせてください。',
          romaji: 'ee, douzo. setsumei sasete kudasai.',
          cn: '可以，请讲。',
        },
        {
          speaker: '山田',
          jp: '<ruby>来月<rt>らいげつ</rt></ruby>のイベントで、<ruby>私<rt>わたし</rt></ruby>にプレゼンを<ruby>担当<rt>たんとう</rt></ruby>させていただけませんか。',
          plain: 'らいげつのイベントで、わたしにプレゼンをたんとうさせていただけませんか。',
          romaji: 'raigetsu no ibento de, watashi ni purezen o tantou sasete itadakemasen ka.',
          cn: '下个月的活动，能让我负责演讲吗？',
        },
        {
          speaker: '部長',
          jp: 'ほう、<ruby>自分<rt>じぶん</rt></ruby>からですか。<ruby>理由<rt>りゆう</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かせてください。',
          plain: 'ほう、じぶんからですか。りゆうをきかせてください。',
          romaji: 'hou, jibun kara desu ka. riyuu o kikasete kudasai.',
          cn: '哦，你主动要做？请说说理由。',
        },
        {
          speaker: '山田',
          jp: 'お<ruby>客様<rt>きゃくさま</rt></ruby>と<ruby>直接<rt>ちょくせつ</rt></ruby><ruby>話<rt>はな</rt></ruby>す<ruby>経験<rt>けいけん</rt></ruby>を<ruby>積<rt>つ</rt></ruby>みたいんです。<ruby>挑戦<rt>ちょうせん</rt></ruby>させてください。',
          plain: 'おきゃくさまとちょくせつはなすけいけんをつみたいんです。ちょうせんさせてください。',
          romaji: 'o-kyakusama to chokusetsu hanasu keiken o tsumitai n desu. chousen sasete kudasai.',
          cn: '我想积累和客户直接沟通的经验。请让我挑战一下。',
        },
        {
          speaker: '部長',
          jp: 'いい<ruby>姿勢<rt>しせい</rt></ruby>ですね。じゃあ、やらせてみましょう。<ruby>準備<rt>じゅんび</rt></ruby>は<ruby>大変<rt>たいへん</rt></ruby>ですよ。',
          plain: 'いいしせいですね。じゃあ、やらせてみましょう。じゅんびはたいへんですよ。',
          romaji: 'ii shisei desu ne. jaa, yarasete mimashou. junbi wa taihen desu yo.',
          cn: '态度不错。那就让你试试。准备工作很辛苦哦。',
        },
        {
          speaker: '山田',
          jp: 'はい、<ruby>頑張<rt>がんば</rt></ruby>ります。ありがとうございます。',
          plain: 'はい、がんばります。ありがとうございます。',
          romaji: 'hai, ganbarimasu. arigatou gozaimasu.',
          cn: '是，我会努力的。谢谢。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: 'マネージャーは<ruby>会議<rt>かいぎ</rt></ruby>のために、まず<ruby>誰<rt>だれ</rt></ruby>に<ruby>何<rt>なに</rt></ruby>をさせますか。',
          plain: 'マネージャーはかいぎのために、まずだれになにをさせますか。',
          romaji: 'maneejaa wa kaigi no tame ni, mazu dare ni nani o sasemasu ka.',
          cn: '经理为了会议，首先让谁做什么？',
        },
        a: {
          jp: '<ruby>新人<rt>しんじん</rt></ruby>の<ruby>山田<rt>やまだ</rt></ruby>さんに<ruby>資料<rt>しりょう</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>めさせます。',
          plain: 'しんじんのやまださんにしりょうをあつめさせます。',
          romaji: 'shinjin no Yamada-san ni shiryou o atsumesasemasu.',
          cn: '让新员工山田收集资料。',
        },
      },
      {
        q: {
          jp: 'マネージャーは<ruby>無理<rt>むり</rt></ruby>にやらせるとどうなると<ruby>言<rt>い</rt></ruby>っていますか。',
          plain: 'マネージャーはむりにやらせるとどうなるといっていますか。',
          romaji: 'maneejaa wa muri ni yaraseru to dou naru to itte imasu ka.',
          cn: '经理说强迫做会怎样？',
        },
        a: {
          jp: '<ruby>部下<rt>ぶか</rt></ruby>のやる<ruby>気<rt>き</rt></ruby>がなくなってしまうと<ruby>言<rt>い</rt></ruby>っています。',
          plain: 'ぶかのやるきがなくなってしまうといっています。',
          romaji: 'buka no yaru-ki ga naku natte shimau to itte imasu.',
          cn: '说下属会失去干劲。',
        },
      },
      {
        q: {
          jp: '<ruby>留学<rt>りゅうがく</rt></ruby>について<ruby>妻<rt>つま</rt></ruby>はどう<ruby>思<rt>おも</rt></ruby>っていますか。',
          plain: 'りゅうがくについてつまはどうおもっていますか。',
          romaji: 'ryuugaku ni tsuite tsuma wa dou omotte imasu ka.',
          cn: '关于留学，妻子怎么想？',
        },
        a: {
          jp: '<ruby>心配<rt>しんぱい</rt></ruby>して、<ruby>反対<rt>はんたい</rt></ruby>しています。<ruby>一人<rt>ひとり</rt></ruby>で<ruby>生活<rt>せいかつ</rt></ruby>させるのは<ruby>早<rt>はや</rt></ruby>すぎると<ruby>言<rt>い</rt></ruby>っています。',
          plain: 'しんぱいして、はんたいしています。ひとりでせいかつさせるのははやすぎるといっています。',
          romaji: 'shinpai shite, hantai shite imasu. hitori de seikatsu saseru no wa hayasugiru to itte imasu.',
          cn: '很担心，表示反对。说让他一个人生活还太早。',
        },
      },
      {
        q: {
          jp: '<ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>部長<rt>ぶちょう</rt></ruby>に<ruby>何<rt>なに</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いしましたか。',
          plain: 'やまださんはぶちょうになにをおねがいしましたか。',
          romaji: 'Yamada-san wa buchou ni nani o o-negai shimashita ka.',
          cn: '山田向部长请求了什么？',
        },
        a: {
          jp: 'プレゼンを<ruby>担当<rt>たんとう</rt></ruby>させてくださいとお<ruby>願<rt>ねが</rt></ruby>いしました。',
          plain: 'プレゼンをたんとうさせてくださいとおねがいしました。',
          romaji: 'purezen o tantou sasete kudasai to o-negai shimashita.',
          cn: '请求让他负责演讲。',
        },
        hint: '「〜させてください」是请求许可的标准表达。',
      },
    ],
    vocabulary: [
      { jp: 'マネージャー', kana: 'マネージャー', romaji: 'maneejaa', meaning: '经理', pos: '名詞' },
      { jp: '準備', kana: 'じゅんび', romaji: 'junbi', meaning: '准备', pos: '名詞' },
      { jp: '進めます', kana: 'すすめます', romaji: 'susumemasu', meaning: '推进', pos: '動詞II' },
      { jp: '新人', kana: 'しんじん', romaji: 'shinjin', meaning: '新人', pos: '名詞' },
      { jp: '資料', kana: 'しりょう', romaji: 'shiryou', meaning: '资料', pos: '名詞' },
      { jp: '集めます', kana: 'あつめます', romaji: 'atsumemasu', meaning: '收集', pos: '動詞II' },
      { jp: 'レポート', kana: 'レポート', romaji: 'repooto', meaning: '报告', pos: '名詞' },
      { jp: '頼みます', kana: 'たのみます', romaji: 'tanomimasu', meaning: '拜托', pos: '動詞I' },
      { jp: '言い方', kana: 'いいかた', romaji: 'iikata', meaning: '说法', pos: '名詞' },
      { jp: '気をつけます', kana: 'きをつけます', romaji: 'ki o tsukemasu', meaning: '注意', pos: '慣用句' },
      { jp: '無理', kana: 'むり', romaji: 'muri', meaning: '勉强；强迫', pos: 'な形容詞' },
      { jp: 'やる気', kana: 'やるき', romaji: 'yaru-ki', meaning: '干劲', pos: '名詞' },
      { jp: '本人', kana: 'ほんにん', romaji: 'honnin', meaning: '本人', pos: '名詞' },
      { jp: 'ペース', kana: 'ペース', romaji: 'peesu', meaning: '节奏', pos: '名詞' },
      { jp: '相談します', kana: 'そうだんします', romaji: 'soudan shimasu', meaning: '商量', pos: '動詞III' },
      { jp: '上司', kana: 'じょうし', romaji: 'joushi', meaning: '上司', pos: '名詞' },
      { jp: '部下', kana: 'ぶか', romaji: 'buka', meaning: '下属', pos: '名詞' },
      { jp: '育てます', kana: 'そだてます', romaji: 'sodatemasu', meaning: '培养', pos: '動詞II' },
      { jp: '命令します', kana: 'めいれいします', romaji: 'meirei shimasu', meaning: '命令', pos: '動詞III' },
      { jp: '挑戦します', kana: 'ちょうせんします', romaji: 'chousen shimasu', meaning: '挑战', pos: '動詞III' },
      { jp: '成長', kana: 'せいちょう', romaji: 'seichou', meaning: '成长', pos: '名詞' },
      { jp: '見守ります', kana: 'みまもります', romaji: 'mimamorimasu', meaning: '守护', pos: '動詞I' },
      { jp: '留学', kana: 'りゅうがく', romaji: 'ryuugaku', meaning: '留学', pos: '名詞' },
      { jp: '世界', kana: 'せかい', romaji: 'sekai', meaning: '世界', pos: '名詞' },
      { jp: '反対します', kana: 'はんたいします', romaji: 'hantai shimasu', meaning: '反对', pos: '動詞III' },
      { jp: '生活', kana: 'せいかつ', romaji: 'seikatsu', meaning: '生活', pos: '名詞' },
      { jp: '失敗', kana: 'しっぱい', romaji: 'shippai', meaning: '失败', pos: '名詞' },
      { jp: '過保護', kana: 'かほご', romaji: 'kahogo', meaning: '过度保护', pos: '名詞' },
      { jp: '親', kana: 'おや', romaji: 'oya', meaning: '父母', pos: '名詞' },
      { jp: '役目', kana: 'やくめ', romaji: 'yakume', meaning: '责任；职责', pos: '名詞' },
      { jp: '信じます', kana: 'しんじます', romaji: 'shinjimasu', meaning: '相信', pos: '動詞II' },
      { jp: '企画', kana: 'きかく', romaji: 'kikaku', meaning: '企划', pos: '名詞' },
      { jp: 'プレゼン', kana: 'プレゼン', romaji: 'purezen', meaning: '演讲', pos: '名詞' },
      { jp: '担当します', kana: 'たんとうします', romaji: 'tantou shimasu', meaning: '负责', pos: '動詞III' },
      { jp: '姿勢', kana: 'しせい', romaji: 'shisei', meaning: '态度；姿势', pos: '名詞' },
    ],
    grammar: [
      {
        pattern: 'V（使役形）— 動詞I',
        name: '动词I类使役形',
        explain: '动词I类（五段动词）使役形：词尾う段→あ段+せる。書く→書かせる、読む→読ませる、行く→行かせる。词尾う特殊：買う→買わせる。表示"让某人做"或"使某人做"。',
        examples: [
          {
            jp: '<ruby>部下<rt>ぶか</rt></ruby>にレポートを<ruby>書<rt>か</rt></ruby>かせます。',
            plain: 'ぶかにレポートをかかせます。',
            cn: '让下属写报告。',
          },
          {
            jp: '<ruby>子供<rt>こども</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>ませます。',
            plain: 'こどもにほんをよませます。',
            cn: '让孩子读书。',
          },
        ],
      },
      {
        pattern: 'V（使役形）— 動詞II・III',
        name: '动词II・III类使役形',
        explain: '動詞II类：去る加させる。食べる→食べさせる、見る→見させる。動詞III：する→させる、来る→来させる。注意「行かせる/来させる」是使役，不是可能形或被动。',
        examples: [
          {
            jp: '<ruby>息子<rt>むすこ</rt></ruby>に<ruby>野菜<rt>やさい</rt></ruby>を<ruby>食<rt>た</rt></ruby>べさせます。',
            plain: 'むすこにやさいをたべさせます。',
            cn: '让儿子吃蔬菜。',
          },
          {
            jp: '<ruby>娘<rt>むすめ</rt></ruby>を<ruby>留学<rt>りゅうがく</rt></ruby>させます。',
            plain: 'むすめをりゅうがくさせます。',
            cn: '让女儿去留学。',
          },
        ],
      },
      {
        pattern: 'A は B を／に V させる',
        name: '使役句的助词',
        explain: '使役句助词区分：自动词使役用「を」（子供を行かせる＝让孩子去）；他动词使役用「に」（子供にご飯を食べさせる＝让孩子吃饭——因为「を」已用于宾语，避免重复）。这是 N3 必考的细节。简记：他动词使役 = AにBをVさせる。',
        examples: [
          {
            jp: '<ruby>子供<rt>こども</rt></ruby>を<ruby>公園<rt>こうえん</rt></ruby>で<ruby>遊<rt>あそ</rt></ruby>ばせます。',
            plain: 'こどもをこうえんであそばせます。',
            cn: '让孩子在公园玩。（自动词→を）',
          },
          {
            jp: '<ruby>学生<rt>がくせい</rt></ruby>に<ruby>宿題<rt>しゅくだい</rt></ruby>をさせます。',
            plain: 'がくせいにしゅくだいをさせます。',
            cn: '让学生做作业。（他动词→に）',
          },
        ],
      },
      {
        pattern: '使役の二つの意味',
        name: '强制 vs 允许',
        explain: '同一个使役形可以有两种语感：①「強制」让/命令做（嫌でもやらせる＝强迫做）；②「許可」允许做（行かせてあげる＝让他去）。区别要靠语境和搭配。「無理に〜させる」偏强制；「やりたいことをさせる」偏允许。情态副词如「むりやり」「自由に」是判断关键。',
        examples: [
          {
            jp: '<ruby>子供<rt>こども</rt></ruby>を<ruby>無理<rt>むり</rt></ruby>に<ruby>勉強<rt>べんきょう</rt></ruby>させます。',
            plain: 'こどもをむりにべんきょうさせます。',
            cn: '强迫孩子学习。（强制）',
          },
          {
            jp: '<ruby>子供<rt>こども</rt></ruby>に<ruby>好<rt>す</rt></ruby>きなことをさせます。',
            plain: 'こどもにすきなことをさせます。',
            cn: '让孩子做喜欢的事。（允许）',
          },
        ],
      },
      {
        pattern: 'V（さ）せてください',
        name: '请求许可',
        explain: '使役形+てください：礼貌地请求"请让我做..."。比「〜たい」更礼貌，是商务场合常用表达。更礼貌的版本「〜させていただけませんか」（能否让我...？）。注意主语是说话人自己，对方是允许的一方。',
        examples: [
          {
            jp: '<ruby>少<rt>すこ</rt></ruby>し<ruby>休<rt>やす</rt></ruby>ませてください。',
            plain: 'すこしやすませてください。',
            cn: '请让我休息一下。',
          },
          {
            jp: 'この<ruby>仕事<rt>しごと</rt></ruby>を<ruby>担当<rt>たんとう</rt></ruby>させていただけませんか。',
            plain: 'このしごとをたんとうさせていただけませんか。',
            cn: '能否让我负责这项工作？',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 23 課 — 使役受身
  // ========================================================
  {
    id: 23,
    level: 'N3',
    title: {
      jp: '使役受身',
      romaji: 'shieki-ukemi',
      cn: '使役被动',
      en: 'Causative Passive',
    },
    goals: [
      '掌握使役被动形的变化规则和缩约形',
      '理解"被迫做不情愿的事"这一核心语感',
      '能用使役被动表达职场和学校生活中的无奈',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '飲み会の思い出',
          romaji: 'nomikai no omoide',
          cn: '酒会的回忆',
        },
        sentences: [
          {
            jp: '<ruby>新入社員<rt>しんにゅうしゃいん</rt></ruby>のころ、<ruby>飲<rt>の</rt></ruby>み<ruby>会<rt>かい</rt></ruby>がとても<ruby>苦手<rt>にがて</rt></ruby>でした。',
            plain: 'しんにゅうしゃいんのころ、のみかいがとてもにがてでした。',
            romaji: 'shin-nyuu-shain no koro, nomikai ga totemo nigate deshita.',
            cn: '刚进公司时，我非常不擅长应酬酒会。',
          },
          {
            jp: 'お<ruby>酒<rt>さけ</rt></ruby>が<ruby>強<rt>つよ</rt></ruby>くないのに、<ruby>先輩<rt>せんぱい</rt></ruby>に<ruby>無理<rt>むり</rt></ruby>やりビールを<ruby>飲<rt>の</rt></ruby>まされました。',
            plain: 'おさけがつよくないのに、せんぱいにむりやりビールをのまされました。',
            romaji: 'o-sake ga tsuyokunai noni, senpai ni muriyari biiru o nomasaremashita.',
            cn: '明明酒量不好，却被前辈强行灌啤酒。',
          },
          {
            jp: '<ruby>断<rt>ことわ</rt></ruby>ろうとしても、「<ruby>付<rt>つ</rt></ruby>き<ruby>合<rt>あ</rt></ruby>いだから」と<ruby>言<rt>い</rt></ruby>われ、<ruby>結局<rt>けっきょく</rt></ruby><ruby>何<rt>なん</rt></ruby><ruby>杯<rt>ばい</rt></ruby>も<ruby>飲<rt>の</rt></ruby>まされました。',
            plain: 'ことわろうとしても、「つきあいだから」といわれ、けっきょくなんばいものまされました。',
            romaji: 'kotowarou to shite mo, "tsukiai da kara" to iware, kekkyoku nan-bai mo nomasaremashita.',
            cn: '想拒绝也不行，被告知"是应酬"，结果被灌了好几杯。',
          },
          {
            jp: '<ruby>歌<rt>うた</rt></ruby>が<ruby>下手<rt>へた</rt></ruby>なのに、カラオケでも<ruby>歌<rt>うた</rt></ruby>わされました。',
            plain: 'うたがへたなのに、カラオケでもうたわされました。',
            romaji: 'uta ga heta na noni, karaoke de mo utawasaremashita.',
            cn: '虽然唱歌不好，却也被叫去唱卡拉OK。',
          },
          {
            jp: '<ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>る<ruby>頃<rt>ころ</rt></ruby>には<ruby>終電<rt>しゅうでん</rt></ruby>もなく、タクシーで<ruby>帰<rt>かえ</rt></ruby>らされたこともあります。',
            plain: 'いえにかえるころにはしゅうでんもなく、タクシーでかえらされたこともあります。',
            romaji: 'ie ni kaeru koro ni wa shuuden mo naku, takushii de kaerasareta koto mo arimasu.',
            cn: '回家时已经没末班车了，还试过被迫坐出租车回家。',
          },
          {
            jp: '<ruby>翌日<rt>よくじつ</rt></ruby>はひどい<ruby>二日酔<rt>ふつかよ</rt></ruby>いで、<ruby>会社<rt>かいしゃ</rt></ruby>を<ruby>休<rt>やす</rt></ruby>みたいくらいでした。',
            plain: 'よくじつはひどいふつかよいで、かいしゃをやすみたいくらいでした。',
            romaji: 'yokujitsu wa hidoi futsukayoi de, kaisha o yasumitai kurai deshita.',
            cn: '第二天严重宿醉，简直想请假。',
          },
          {
            jp: '<ruby>先輩<rt>せんぱい</rt></ruby>たちは「<ruby>昔<rt>むかし</rt></ruby>はこれが<ruby>普通<rt>ふつう</rt></ruby>だった」と<ruby>笑<rt>わら</rt></ruby>っていました。',
            plain: 'せんぱいたちは「むかしはこれがふつうだった」とわらっていました。',
            romaji: 'senpai-tachi wa "mukashi wa kore ga futsuu datta" to waratte imashita.',
            cn: '前辈们笑着说"以前这很正常"。',
          },
          {
            jp: 'でも、<ruby>最近<rt>さいきん</rt></ruby>は<ruby>時代<rt>じだい</rt></ruby>が<ruby>変<rt>か</rt></ruby>わって、そういう<ruby>強制<rt>きょうせい</rt></ruby>はなくなってきました。',
            plain: 'でも、さいきんはじだいがかわって、そういうきょうせいはなくなってきました。',
            romaji: 'demo, saikin wa jidai ga kawatte, sou iu kyousei wa nakunatte kimashita.',
            cn: '不过最近时代变了，那种强迫已经少了。',
          },
          {
            jp: '<ruby>後輩<rt>こうはい</rt></ruby>には<ruby>同<rt>おな</rt></ruby>じ<ruby>思<rt>おも</rt></ruby>いをさせたくないと<ruby>強<rt>つよ</rt></ruby>く<ruby>思<rt>おも</rt></ruby>っています。',
            plain: 'こうはいにはおなじおもいをさせたくないとつよくおもっています。',
            romaji: 'kouhai ni wa onaji omoi o sasetakunai to tsuyoku omotte imasu.',
            cn: '我强烈希望不让后辈有同样的经历。',
          },
          {
            jp: '<ruby>飲<rt>の</rt></ruby>みたい<ruby>人<rt>ひと</rt></ruby>が<ruby>飲<rt>の</rt></ruby>めばいい、それが<ruby>本当<rt>ほんとう</rt></ruby>の<ruby>大人<rt>おとな</rt></ruby>の<ruby>付<rt>つ</rt></ruby>き<ruby>合<rt>あ</rt></ruby>いだと<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'のみたいひとがのめばいい、それがほんとうのおとなのつきあいだとおもいます。',
            romaji: 'nomitai hito ga nomeba ii, sore ga hontou no otona no tsukiai da to omoimasu.',
            cn: '想喝的人喝就好，这才是真正大人的应酬。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '学生時代',
          romaji: 'gakusei jidai',
          cn: '学生时代',
        },
        sentences: [
          {
            jp: '<ruby>子<rt>こ</rt></ruby>どもの<ruby>頃<rt>ころ</rt></ruby>、<ruby>嫌<rt>きら</rt></ruby>いな<ruby>野菜<rt>やさい</rt></ruby>を<ruby>母<rt>はは</rt></ruby>に<ruby>食<rt>た</rt></ruby>べさせられました。',
            plain: 'こどものころ、きらいなやさいをははにたべさせられました。',
            romaji: 'kodomo no koro, kirai na yasai o haha ni tabesaseraremashita.',
            cn: '小时候被妈妈逼着吃讨厌的蔬菜。',
          },
          {
            jp: '<ruby>毎日<rt>まいにち</rt></ruby>ピアノを<ruby>練習<rt>れんしゅう</rt></ruby>させられて、<ruby>友達<rt>ともだち</rt></ruby>と<ruby>遊<rt>あそ</rt></ruby>ぶ<ruby>時間<rt>じかん</rt></ruby>がありませんでした。',
            plain: 'まいにちピアノをれんしゅうさせられて、ともだちとあそぶじかんがありませんでした。',
            romaji: 'mainichi piano o renshuu saserarete, tomodachi to asobu jikan ga arimasen deshita.',
            cn: '每天被逼着练钢琴，没时间和朋友玩。',
          },
          {
            jp: '<ruby>高校<rt>こうこう</rt></ruby>では<ruby>部活<rt>ぶかつ</rt></ruby>で<ruby>毎日<rt>まいにち</rt></ruby><ruby>遅<rt>おそ</rt></ruby>くまで<ruby>走<rt>はし</rt></ruby>らされました。',
            plain: 'こうこうではぶかつでまいにちおそくまではしらされました。',
            romaji: 'koukou de wa bukatsu de mainichi osoku made hashirasaremashita.',
            cn: '高中时社团里每天被逼着跑到很晚。',
          },
          {
            jp: '<ruby>先生<rt>せんせい</rt></ruby>に<ruby>難<rt>むずか</rt></ruby>しい<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>まされたこともよく<ruby>覚<rt>おぼ</rt></ruby>えています。',
            plain: 'せんせいにむずかしいほんをよまされたこともよくおぼえています。',
            romaji: 'sensei ni muzukashii hon o yomasareta koto mo yoku oboete imasu.',
            cn: '被老师逼着读难懂的书，我至今还记得。',
          },
          {
            jp: '<ruby>当時<rt>とうじ</rt></ruby>はつらかったですが、<ruby>今<rt>いま</rt></ruby>になって<ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>っています。',
            plain: 'とうじはつらかったですが、いまになってやくにたっています。',
            romaji: 'touji wa tsurakatta desu ga, ima ni natte yaku ni tatte imasu.',
            cn: '当时很痛苦，但现在受用。',
          },
          {
            jp: '<ruby>嫌<rt>いや</rt></ruby>でもやらされたから、<ruby>続<rt>つづ</rt></ruby>けられたのかもしれません。',
            plain: 'いやでもやらされたから、つづけられたのかもしれません。',
            romaji: 'iya demo yarasareta kara, tsuzukerareta no kamoshiremasen.',
            cn: '也许正因为不愿意也被逼着做，才坚持下来了。',
          },
          {
            jp: '<ruby>親<rt>おや</rt></ruby>や<ruby>先生<rt>せんせい</rt></ruby>に<ruby>感謝<rt>かんしゃ</rt></ruby>している<ruby>部分<rt>ぶぶん</rt></ruby>もあります。',
            plain: 'おややせんせいにかんしゃしているぶぶんもあります。',
            romaji: 'oya ya sensei ni kansha shite iru bubun mo arimasu.',
            cn: '对父母和老师也有感谢的地方。',
          },
          {
            jp: 'ただ、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>子供<rt>こども</rt></ruby>には<ruby>同<rt>おな</rt></ruby>じことはしたくありません。',
            plain: 'ただ、じぶんのこどもにはおなじことはしたくありません。',
            romaji: 'tada, jibun no kodomo ni wa onaji koto wa shitakuarimasen.',
            cn: '只是，对自己的孩子，我不想这样做。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '同期入社の二人が、最近の残業について愚痴を言っている。',
        cn: '同期入职的两人在抱怨最近的加班。',
      },
      lines: [
        {
          speaker: '佐藤',
          jp: '<ruby>昨日<rt>きのう</rt></ruby>もまた<ruby>残業<rt>ざんぎょう</rt></ruby>させられました。<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>疲<rt>つか</rt></ruby>れますね。',
          plain: 'きのうもまたざんぎょうさせられました。ほんとうにつかれますね。',
          romaji: 'kinou mo mata zangyou saseraremashita. hontou ni tsukaremasu ne.',
          cn: '昨天又被叫加班了。真累啊。',
        },
        {
          speaker: '高橋',
          jp: '<ruby>私<rt>わたし</rt></ruby>もです。<ruby>急<rt>きゅう</rt></ruby>な<ruby>仕事<rt>しごと</rt></ruby>をやらされて、<ruby>夜<rt>よる</rt></ruby><ruby>十一時<rt>じゅういちじ</rt></ruby>まで<ruby>会社<rt>かいしゃ</rt></ruby>にいました。',
          plain: 'わたしもです。きゅうなしごとをやらされて、よるじゅういちじまでかいしゃにいました。',
          romaji: 'watashi mo desu. kyuu na shigoto o yarasarete, yoru juuichi-ji made kaisha ni imashita.',
          cn: '我也是。被临时塞了工作，在公司待到晚上十一点。',
        },
        {
          speaker: '佐藤',
          jp: 'しかも<ruby>休日<rt>きゅうじつ</rt></ruby>にも<ruby>研修<rt>けんしゅう</rt></ruby>に<ruby>行<rt>い</rt></ruby>かされるんですよ。<ruby>休<rt>やす</rt></ruby>める<ruby>日<rt>ひ</rt></ruby>がない。',
          plain: 'しかもきゅうじつにもけんしゅうにいかされるんですよ。やすめるひがない。',
          romaji: 'shikamo kyuujitsu ni mo kenshuu ni ikasareru n desu yo. yasumeru hi ga nai.',
          cn: '而且休息日也被叫去培训。没有能休息的日子。',
        },
        {
          speaker: '高橋',
          jp: '<ruby>断<rt>ことわ</rt></ruby>れない<ruby>雰囲気<rt>ふんいき</rt></ruby>がありますよね。みんな<ruby>我慢<rt>がまん</rt></ruby>させられている<ruby>感<rt>かん</rt></ruby>じです。',
          plain: 'ことわれないふんいきがありますよね。みんながまんさせられているかんじです。',
          romaji: 'kotowarenai fun-iki ga arimasu yo ne. minna gaman saserarete iru kanji desu.',
          cn: '有种没法拒绝的氛围。感觉大家都被迫忍着。',
        },
        {
          speaker: '佐藤',
          jp: '<ruby>転職<rt>てんしょく</rt></ruby>したいと<ruby>真剣<rt>しんけん</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>え<ruby>始<rt>はじ</rt></ruby>めました。',
          plain: 'てんしょくしたいとしんけんにかんがえはじめました。',
          romaji: 'tenshoku shitai to shinken ni kangaehajimemashita.',
          cn: '我开始认真考虑要不要跳槽了。',
        },
        {
          speaker: '高橋',
          jp: '<ruby>気持<rt>きも</rt></ruby>ちはわかります。<ruby>体<rt>からだ</rt></ruby>を<ruby>壊<rt>こわ</rt></ruby>す<ruby>前<rt>まえ</rt></ruby>に<ruby>動<rt>うご</rt></ruby>いたほうがいいかもしれません。',
          plain: 'きもちはわかります。からだをこわすまえにうごいたほうがいいかもしれません。',
          romaji: 'kimochi wa wakarimasu. karada o kowasu mae ni ugoita hou ga ii kamoshiremasen.',
          cn: '我能理解。在搞坏身体之前行动也许更好。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>新入社員<rt>しんにゅうしゃいん</rt></ruby>のころ、<ruby>飲<rt>の</rt></ruby>み<ruby>会<rt>かい</rt></ruby>で<ruby>何<rt>なに</rt></ruby>をさせられましたか。',
          plain: 'しんにゅうしゃいんのころ、のみかいでなにをさせられましたか。',
          romaji: 'shin-nyuu-shain no koro, nomikai de nani o saseraremashita ka.',
          cn: '刚进公司时，在酒会上被迫做什么了？',
        },
        a: {
          jp: '<ruby>無理<rt>むり</rt></ruby>やりビールを<ruby>飲<rt>の</rt></ruby>まされたり、カラオケで<ruby>歌<rt>うた</rt></ruby>わされたりしました。',
          plain: 'むりやりビールをのまされたり、カラオケでうたわされたりしました。',
          romaji: 'muriyari biiru o nomasaretari, karaoke de utawasaretari shimashita.',
          cn: '被强行灌啤酒，还被叫去唱卡拉OK。',
        },
      },
      {
        q: {
          jp: '<ruby>子<rt>こ</rt></ruby>どもの<ruby>頃<rt>ころ</rt></ruby>、<ruby>母<rt>はは</rt></ruby>に<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べさせられましたか。',
          plain: 'こどものころ、ははになにをたべさせられましたか。',
          romaji: 'kodomo no koro, haha ni nani o tabesaseraremashita ka.',
          cn: '小时候被妈妈逼着吃什么？',
        },
        a: {
          jp: '<ruby>嫌<rt>きら</rt></ruby>いな<ruby>野菜<rt>やさい</rt></ruby>を<ruby>食<rt>た</rt></ruby>べさせられました。',
          plain: 'きらいなやさいをたべさせられました。',
          romaji: 'kirai na yasai o tabesaseraremashita.',
          cn: '被逼吃讨厌的蔬菜。',
        },
      },
      {
        q: {
          jp: '<ruby>佐藤<rt>さとう</rt></ruby>さんはなぜ<ruby>転職<rt>てんしょく</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えていますか。',
          plain: 'さとうさんはなぜてんしょくをかんがえていますか。',
          romaji: 'Satou-san wa naze tenshoku o kangaete imasu ka.',
          cn: '佐藤为什么考虑跳槽？',
        },
        a: {
          jp: '<ruby>残業<rt>ざんぎょう</rt></ruby>や<ruby>休日<rt>きゅうじつ</rt></ruby><ruby>研修<rt>けんしゅう</rt></ruby>を<ruby>無理<rt>むり</rt></ruby>にさせられて、<ruby>休<rt>やす</rt></ruby>める<ruby>日<rt>ひ</rt></ruby>がないからです。',
          plain: 'ざんぎょうやきゅうじつけんしゅうをむりにさせられて、やすめるひがないからです。',
          romaji: 'zangyou ya kyuujitsu kenshuu o muri ni saserarete, yasumeru hi ga nai kara desu.',
          cn: '因为被迫加班和休日培训，没有能休息的日子。',
        },
        hint: '使役被动表达"被迫做不愿做的事"。',
      },
      {
        q: {
          jp: '<ruby>主人公<rt>しゅじんこう</rt></ruby>は<ruby>後輩<rt>こうはい</rt></ruby>に<ruby>対<rt>たい</rt></ruby>してどう<ruby>思<rt>おも</rt></ruby>っていますか。',
          plain: 'しゅじんこうはこうはいにたいしてどうおもっていますか。',
          romaji: 'shujinkou wa kouhai ni taishite dou omotte imasu ka.',
          cn: '主人公对后辈是怎么想的？',
        },
        a: {
          jp: '<ruby>同<rt>おな</rt></ruby>じ<ruby>思<rt>おも</rt></ruby>いをさせたくないと<ruby>強<rt>つよ</rt></ruby>く<ruby>思<rt>おも</rt></ruby>っています。',
          plain: 'おなじおもいをさせたくないとつよくおもっています。',
          romaji: 'onaji omoi o sasetakunai to tsuyoku omotte imasu.',
          cn: '强烈希望不让他们有同样的经历。',
        },
      },
    ],
    vocabulary: [
      { jp: '新入社員', kana: 'しんにゅうしゃいん', romaji: 'shin-nyuu-shain', meaning: '新员工', pos: '名詞' },
      { jp: '飲み会', kana: 'のみかい', romaji: 'nomikai', meaning: '酒会', pos: '名詞' },
      { jp: '苦手', kana: 'にがて', romaji: 'nigate', meaning: '不擅长', pos: 'な形容詞' },
      { jp: 'お酒', kana: 'おさけ', romaji: 'o-sake', meaning: '酒', pos: '名詞' },
      { jp: '先輩', kana: 'せんぱい', romaji: 'senpai', meaning: '前辈', pos: '名詞' },
      { jp: '無理やり', kana: 'むりやり', romaji: 'muriyari', meaning: '强行；硬要', pos: '副詞' },
      { jp: 'ビール', kana: 'ビール', romaji: 'biiru', meaning: '啤酒', pos: '名詞' },
      { jp: '断ります', kana: 'ことわります', romaji: 'kotowarimasu', meaning: '拒绝', pos: '動詞I' },
      { jp: '付き合い', kana: 'つきあい', romaji: 'tsukiai', meaning: '应酬；交往', pos: '名詞' },
      { jp: '結局', kana: 'けっきょく', romaji: 'kekkyoku', meaning: '结果', pos: '副詞' },
      { jp: 'カラオケ', kana: 'カラオケ', romaji: 'karaoke', meaning: '卡拉OK', pos: '名詞' },
      { jp: '終電', kana: 'しゅうでん', romaji: 'shuuden', meaning: '末班车', pos: '名詞' },
      { jp: 'タクシー', kana: 'タクシー', romaji: 'takushii', meaning: '出租车', pos: '名詞' },
      { jp: '翌日', kana: 'よくじつ', romaji: 'yokujitsu', meaning: '第二天', pos: '名詞' },
      { jp: '二日酔い', kana: 'ふつかよい', romaji: 'futsukayoi', meaning: '宿醉', pos: '名詞' },
      { jp: '昔', kana: 'むかし', romaji: 'mukashi', meaning: '以前', pos: '名詞' },
      { jp: '時代', kana: 'じだい', romaji: 'jidai', meaning: '时代', pos: '名詞' },
      { jp: '強制', kana: 'きょうせい', romaji: 'kyousei', meaning: '强制', pos: '名詞' },
      { jp: '後輩', kana: 'こうはい', romaji: 'kouhai', meaning: '后辈', pos: '名詞' },
      { jp: '大人', kana: 'おとな', romaji: 'otona', meaning: '大人', pos: '名詞' },
      { jp: 'ピアノ', kana: 'ピアノ', romaji: 'piano', meaning: '钢琴', pos: '名詞' },
      { jp: '練習', kana: 'れんしゅう', romaji: 'renshuu', meaning: '练习', pos: '名詞' },
      { jp: '部活', kana: 'ぶかつ', romaji: 'bukatsu', meaning: '社团活动', pos: '名詞' },
      { jp: '走ります', kana: 'はしります', romaji: 'hashirimasu', meaning: '跑', pos: '動詞I' },
      { jp: '当時', kana: 'とうじ', romaji: 'touji', meaning: '当时', pos: '名詞' },
      { jp: 'つらい', kana: 'つらい', romaji: 'tsurai', meaning: '痛苦的', pos: 'い形容詞' },
      { jp: '役に立ちます', kana: 'やくにたちます', romaji: 'yaku ni tachimasu', meaning: '有用；起作用', pos: '慣用句' },
      { jp: '感謝', kana: 'かんしゃ', romaji: 'kansha', meaning: '感谢', pos: '名詞' },
      { jp: '残業', kana: 'ざんぎょう', romaji: 'zangyou', meaning: '加班', pos: '名詞' },
      { jp: '研修', kana: 'けんしゅう', romaji: 'kenshuu', meaning: '培训', pos: '名詞' },
      { jp: '雰囲気', kana: 'ふんいき', romaji: 'fun-iki', meaning: '氛围', pos: '名詞' },
      { jp: '我慢します', kana: 'がまんします', romaji: 'gaman shimasu', meaning: '忍耐', pos: '動詞III' },
      { jp: '転職', kana: 'てんしょく', romaji: 'tenshoku', meaning: '跳槽', pos: '名詞' },
      { jp: '真剣', kana: 'しんけん', romaji: 'shinken', meaning: '认真', pos: 'な形容詞' },
      { jp: '壊します', kana: 'こわします', romaji: 'kowashimasu', meaning: '弄坏', pos: '動詞I' },
    ],
    grammar: [
      {
        pattern: 'V（さ）せられる',
        name: '使役被动基本形',
        explain: '使役被动 = 使役形 +「られる」。表示"被迫做不愿做的事"。動詞II・III类直接接：食べる→食べさせられる、する→させられる、来る→来させられる。動詞I类先变使役（書かせる），再加られる→書かせられる，但口语常用缩约形（见下）。主语是被动的"被迫者"，强迫者用「に」。',
        examples: [
          {
            jp: '<ruby>母<rt>はは</rt></ruby>に<ruby>野菜<rt>やさい</rt></ruby>を<ruby>食<rt>た</rt></ruby>べさせられました。',
            plain: 'ははにやさいをたべさせられました。',
            cn: '被妈妈逼着吃蔬菜。',
          },
          {
            jp: '<ruby>先生<rt>せんせい</rt></ruby>に<ruby>来<rt>こ</rt></ruby>させられました。',
            plain: 'せんせいにこさせられました。',
            cn: '被老师叫来。',
          },
        ],
      },
      {
        pattern: 'V（短）される（動詞I 缩约形）',
        name: '动词I类缩约形',
        explain: '動詞I类使役被动有缩约形：「〜（さ）せられる」→「〜される」。书く→書かせられる→書かされる、飲む→飲ませられる→飲まされる、行く→行かせられる→行かされる。口语中缩约形更常用。注意：词尾「す」结尾的動詞I 没有缩约形（話させられる 不能缩成 話さされる）；動詞II 也没有缩约形（食べさせられる 不能缩）。',
        examples: [
          {
            jp: 'ビールを<ruby>飲<rt>の</rt></ruby>まされました。',
            plain: 'ビールをのまされました。',
            cn: '被灌啤酒。',
          },
          {
            jp: '<ruby>仕事<rt>しごと</rt></ruby>をやらされました。',
            plain: 'しごとをやらされました。',
            cn: '被塞工作（被迫做）。',
          },
        ],
      },
      {
        pattern: '無理に／無理やり〜（さ）せられる',
        name: '强调被迫感',
        explain: '常与「無理に」「無理やり」「嫌でも」等副词搭配，加强"违背意愿"的语气。是N3 写作和口语中表达不满、抱怨的核心结构。「〜たくないのに〜（さ）せられる」（明明不想做却被迫做）也很常用。',
        examples: [
          {
            jp: '<ruby>無理<rt>むり</rt></ruby>やりカラオケで<ruby>歌<rt>うた</rt></ruby>わされました。',
            plain: 'むりやりカラオケでうたわされました。',
            cn: '被强迫在卡拉OK唱歌。',
          },
          {
            jp: '<ruby>休<rt>やす</rt></ruby>みたいのに、<ruby>残業<rt>ざんぎょう</rt></ruby>させられました。',
            plain: 'やすみたいのに、ざんぎょうさせられました。',
            cn: '明明想休息，却被迫加班。',
          },
        ],
      },
      {
        pattern: '使役 vs 使役受身',
        name: '主语视角的对比',
        explain: '使役（〜させる）：主语是"让别人做"的一方，常是上司、父母。使役被动（〜させられる）：主语是"被迫做"的一方，常是下属、孩子。同一件事可以两面表达：「先輩が後輩にお酒を飲ませた」（前辈让后辈喝酒）vs「後輩は先輩にお酒を飲まされた」（后辈被前辈灌酒）。前者中性，后者带不满情绪。',
        examples: [
          {
            jp: '<ruby>先生<rt>せんせい</rt></ruby>が<ruby>学生<rt>がくせい</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>ませた。',
            plain: 'せんせいががくせいにほんをよませた。',
            cn: '老师让学生读书。（使役）',
          },
          {
            jp: '<ruby>学生<rt>がくせい</rt></ruby>は<ruby>先生<rt>せんせい</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>まされた。',
            plain: 'がくせいはせんせいにほんをよまされた。',
            cn: '学生被老师逼着读书。（使役被动）',
          },
        ],
      },
      {
        pattern: 'V（さ）せられて〜',
        name: '使役被动作状语',
        explain: '使役被动的て形可作状语，描述"由于被迫做而..."或先后动作。常出现在抱怨、回忆中。「〜させられたから」（因为被迫做）也常用于因果。',
        examples: [
          {
            jp: '<ruby>毎日<rt>まいにち</rt></ruby><ruby>練習<rt>れんしゅう</rt></ruby>させられて、<ruby>遊<rt>あそ</rt></ruby>ぶ<ruby>時間<rt>じかん</rt></ruby>がなかった。',
            plain: 'まいにちれんしゅうさせられて、あそぶじかんがなかった。',
            cn: '每天被逼练习，没时间玩。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 24 課 — 敬語入門 ① 尊敬語
  // ========================================================
  {
    id: 24,
    level: 'N3',
    title: {
      jp: '敬語入門 ① 尊敬語',
      romaji: 'keigo nyuumon 1 sonkei-go',
      cn: '敬语入门 ① 尊敬语',
      en: 'Keigo 1 — Respectful Language',
    },
    goals: [
      '理解日语三大敬语体系（尊敬・谦让・丁宁）的关系',
      '掌握尊敬动词和「お+V+になる」「〜れる/られる」尊敬用法',
      '能在职场场合用尊敬语谈论上司、客户的行为',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '社長のスピーチ',
          romaji: 'shachou no supiichi',
          cn: '社长的讲话',
        },
        sentences: [
          {
            jp: '<ruby>今朝<rt>けさ</rt></ruby>、<ruby>社長<rt>しゃちょう</rt></ruby>が<ruby>会社<rt>かいしゃ</rt></ruby>にいらっしゃいました。',
            plain: 'けさ、しゃちょうがかいしゃにいらっしゃいました。',
            romaji: 'kesa, shachou ga kaisha ni irasshaimashita.',
            cn: '今天早上，社长来到了公司。',
          },
          {
            jp: '<ruby>全社員<rt>ぜんしゃいん</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>めて、<ruby>大切<rt>たいせつ</rt></ruby>なお<ruby>話<rt>はなし</rt></ruby>をなさいました。',
            plain: 'ぜんしゃいんをあつめて、たいせつなおはなしをなさいました。',
            romaji: 'zen-shain o atsumete, taisetsu na o-hanashi o nasaimashita.',
            cn: '把全体员工召集起来，做了重要的讲话。',
          },
          {
            jp: '<ruby>社長<rt>しゃちょう</rt></ruby>は「<ruby>来年<rt>らいねん</rt></ruby>から<ruby>新<rt>あたら</rt></ruby>しい<ruby>市場<rt>しじょう</rt></ruby>に<ruby>進出<rt>しんしゅつ</rt></ruby>する」とおっしゃいました。',
            plain: 'しゃちょうは「らいねんからあたらしいしじょうにしんしゅつする」とおっしゃいました。',
            romaji: 'shachou wa "rainen kara atarashii shijou ni shinshutsu suru" to osshaimashita.',
            cn: '社长说："明年起将进入新市场。"',
          },
          {
            jp: 'そのために、<ruby>新<rt>あたら</rt></ruby>しい<ruby>計画<rt>けいかく</rt></ruby>をご<ruby>覧<rt>らん</rt></ruby>になりました。',
            plain: 'そのために、あたらしいけいかくをごらんになりました。',
            romaji: 'sono tame ni, atarashii keikaku o go-ran ni narimashita.',
            cn: '为此，他过目了新的计划。',
          },
          {
            jp: 'スピーチの<ruby>後<rt>あと</rt></ruby>、<ruby>社員<rt>しゃいん</rt></ruby>の<ruby>意見<rt>いけん</rt></ruby>もよくお<ruby>聞<rt>き</rt></ruby>きになりました。',
            plain: 'スピーチのあと、しゃいんのいけんもよくおききになりました。',
            romaji: 'supiichi no ato, shain no iken mo yoku o-kiki ni narimashita.',
            cn: '讲话之后，他也认真听取了员工的意见。',
          },
          {
            jp: '<ruby>食堂<rt>しょくどう</rt></ruby>では、みんなと<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>昼食<rt>ちゅうしょく</rt></ruby>を<ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がりました。',
            plain: 'しょくどうでは、みんなといっしょにちゅうしょくをめしあがりました。',
            romaji: 'shokudou de wa, minna to issho ni chuushoku o meshiagarimashita.',
            cn: '在食堂，他和大家一起用了午餐。',
          },
          {
            jp: '<ruby>気<rt>き</rt></ruby>さくな<ruby>方<rt>かた</rt></ruby>で、<ruby>若<rt>わか</rt></ruby>い<ruby>社員<rt>しゃいん</rt></ruby>とも<ruby>笑顔<rt>えがお</rt></ruby>でお<ruby>話<rt>はな</rt></ruby>しになりました。',
            plain: 'きさくなかたで、わかいしゃいんともえがおでおはなしになりました。',
            romaji: 'kisaku na kata de, wakai shain to mo egao de o-hanashi ni narimashita.',
            cn: '他是平易近人的人，也和年轻员工笑着交谈。',
          },
          {
            jp: '<ruby>午後<rt>ごご</rt></ruby>はお<ruby>客様<rt>きゃくさま</rt></ruby>と<ruby>会<rt>あ</rt></ruby>うために、<ruby>本社<rt>ほんしゃ</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>られました。',
            plain: 'ごごはおきゃくさまとあうために、ほんしゃにもどられました。',
            romaji: 'gogo wa o-kyakusama to au tame ni, honsha ni modoraremashita.',
            cn: '下午为了见客户，回到了总部。',
          },
          {
            jp: '<ruby>社長<rt>しゃちょう</rt></ruby>がお<ruby>越<rt>こ</rt></ruby>しになる<ruby>日<rt>ひ</rt></ruby>はいつも<ruby>緊張<rt>きんちょう</rt></ruby>しますが、<ruby>勉強<rt>べんきょう</rt></ruby>になります。',
            plain: 'しゃちょうがおこしになるひはいつもきんちょうしますが、べんきょうになります。',
            romaji: 'shachou ga o-koshi ni naru hi wa itsumo kinchou shimasu ga, benkyou ni narimasu.',
            cn: '社长光临的日子总让人紧张，但很有收获。',
          },
          {
            jp: 'これからも<ruby>社長<rt>しゃちょう</rt></ruby>の<ruby>姿勢<rt>しせい</rt></ruby>から<ruby>多<rt>おお</rt></ruby>くを<ruby>学<rt>まな</rt></ruby>ばせていただきたいです。',
            plain: 'これからもしゃちょうのしせいからおおくをまなばせていただきたいです。',
            romaji: 'kore kara mo shachou no shisei kara ooku o manabasete itadakitai desu.',
            cn: '今后也想从社长的态度中学到更多。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: 'お客様への対応',
          romaji: 'o-kyakusama e no taiou',
          cn: '接待客人',
        },
        sentences: [
          {
            jp: 'いらっしゃいませ。<ruby>本日<rt>ほんじつ</rt></ruby>はようこそお<ruby>越<rt>こ</rt></ruby>しくださいました。',
            plain: 'いらっしゃいませ。ほんじつはようこそおこしくださいました。',
            romaji: 'irasshaimase. honjitsu wa youkoso o-koshi kudasaimashita.',
            cn: '欢迎光临。今天感谢您的莅临。',
          },
          {
            jp: 'お<ruby>名前<rt>なまえ</rt></ruby>をお<ruby>聞<rt>き</rt></ruby>きしてもよろしいでしょうか。',
            plain: 'おなまえをおききしてもよろしいでしょうか。',
            romaji: 'o-namae o o-kiki shite mo yoroshii deshou ka.',
            cn: '请问能否告知贵姓？',
          },
          {
            jp: 'こちらの<ruby>商品<rt>しょうひん</rt></ruby>をご<ruby>覧<rt>らん</rt></ruby>ください。',
            plain: 'こちらのしょうひんをごらんください。',
            romaji: 'kochira no shouhin o go-ran kudasai.',
            cn: '请看这边的商品。',
          },
          {
            jp: '<ruby>何<rt>なに</rt></ruby>かご<ruby>質問<rt>しつもん</rt></ruby>がございましたら、お<ruby>気軽<rt>きがる</rt></ruby>にお<ruby>声<rt>こえ</rt></ruby>がけください。',
            plain: 'なにかごしつもんがございましたら、おきがるにおこえがけください。',
            romaji: 'nani ka go-shitsumon ga gozaimashitara, o-kigaru ni o-koegake kudasai.',
            cn: '如果有任何疑问，请随时招呼我们。',
          },
          {
            jp: 'お<ruby>客様<rt>きゃくさま</rt></ruby>はもうお<ruby>決<rt>き</rt></ruby>めになりましたか。',
            plain: 'おきゃくさまはもうおきめになりましたか。',
            romaji: 'o-kyakusama wa mou o-kime ni narimashita ka.',
            cn: '客人您已经决定好了吗？',
          },
          {
            jp: 'ご<ruby>注文<rt>ちゅうもん</rt></ruby>はお<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>から<ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がりますか。',
            plain: 'ごちゅうもんはおのみものからめしあがりますか。',
            romaji: 'go-chuumon wa o-nomimono kara meshiagarimasu ka.',
            cn: '您要先用点饮品吗？',
          },
          {
            jp: 'またのお<ruby>越<rt>こ</rt></ruby>しを<ruby>心<rt>こころ</rt></ruby>からお<ruby>待<rt>ま</rt></ruby>ちしております。',
            plain: 'またのおこしをこころからおまちしております。',
            romaji: 'mata no o-koshi o kokoro kara o-machi shite orimasu.',
            cn: '衷心期待您再次光临。',
          },
          {
            jp: 'お<ruby>気<rt>き</rt></ruby>をつけてお<ruby>帰<rt>かえ</rt></ruby>りください。',
            plain: 'おきをつけておかえりください。',
            romaji: 'o-ki o tsukete o-kaeri kudasai.',
            cn: '请慢走，注意安全。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: 'デパートの売り場で、店員がお客様に応対している。',
        cn: '百货公司卖场，店员在接待客人。',
      },
      lines: [
        {
          speaker: '店員',
          jp: 'いらっしゃいませ。<ruby>何<rt>なに</rt></ruby>かお<ruby>探<rt>さが</rt></ruby>しでしょうか。',
          plain: 'いらっしゃいませ。なにかおさがしでしょうか。',
          romaji: 'irasshaimase. nani ka o-sagashi deshou ka.',
          cn: '欢迎光临。您在找什么吗？',
        },
        {
          speaker: 'お客様',
          jp: 'ええ、<ruby>母<rt>はは</rt></ruby>へのプレゼントを<ruby>探<rt>さが</rt></ruby>しているのですが。',
          plain: 'ええ、ははへのプレゼントをさがしているのですが。',
          romaji: 'ee, haha e no purezento o sagashite iru no desu ga.',
          cn: '是的，我在找送给母亲的礼物。',
        },
        {
          speaker: '店員',
          jp: 'お<ruby>母様<rt>かあさま</rt></ruby>はおいくつでいらっしゃいますか。',
          plain: 'おかあさまはおいくつでいらっしゃいますか。',
          romaji: 'o-kaasama wa oikutsu de irasshaimasu ka.',
          cn: '令堂多大年纪？',
        },
        {
          speaker: 'お客様',
          jp: '<ruby>六十歳<rt>ろくじゅっさい</rt></ruby>です。<ruby>軽<rt>かる</rt></ruby>くて<ruby>使<rt>つか</rt></ruby>いやすい<ruby>物<rt>もの</rt></ruby>がいいです。',
          plain: 'ろくじゅっさいです。かるくてつかいやすいものがいいです。',
          romaji: 'rokujussai desu. karukute tsukaiyasui mono ga ii desu.',
          cn: '六十岁。希望是轻便好用的东西。',
        },
        {
          speaker: '店員',
          jp: 'でしたら、こちらのスカーフをご<ruby>覧<rt>らん</rt></ruby>になりませんか。とても<ruby>人気<rt>にんき</rt></ruby>がございます。',
          plain: 'でしたら、こちらのスカーフをごらんになりませんか。とてもにんきがございます。',
          romaji: 'deshitara, kochira no sukaafu o go-ran ni narimasen ka. totemo ninki ga gozaimasu.',
          cn: '那么，要不要看看这边的丝巾？非常受欢迎。',
        },
        {
          speaker: 'お客様',
          jp: 'きれいですね。<ruby>少<rt>すこ</rt></ruby>し<ruby>触<rt>さわ</rt></ruby>ってもいいですか。',
          plain: 'きれいですね。すこしさわってもいいですか。',
          romaji: 'kirei desu ne. sukoshi sawatte mo ii desu ka.',
          cn: '真漂亮。可以摸一下吗？',
        },
        {
          speaker: '店員',
          jp: 'もちろんでございます。どうぞお<ruby>手<rt>て</rt></ruby>に<ruby>取<rt>と</rt></ruby>ってご<ruby>覧<rt>らん</rt></ruby>ください。',
          plain: 'もちろんでございます。どうぞおてにとってごらんください。',
          romaji: 'mochiron de gozaimasu. douzo o-te ni totte go-ran kudasai.',
          cn: '当然可以。请您拿在手里看看。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>社長<rt>しゃちょう</rt></ruby>は<ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>来<rt>き</rt></ruby>て<ruby>何<rt>なに</rt></ruby>をなさいましたか。',
          plain: 'しゃちょうはかいしゃにきてなにをなさいましたか。',
          romaji: 'shachou wa kaisha ni kite nani o nasaimashita ka.',
          cn: '社长来到公司做了什么？',
        },
        a: {
          jp: '<ruby>全社員<rt>ぜんしゃいん</rt></ruby>を<ruby>集<rt>あつ</rt></ruby>めて、<ruby>大切<rt>たいせつ</rt></ruby>なお<ruby>話<rt>はなし</rt></ruby>をなさいました。',
          plain: 'ぜんしゃいんをあつめて、たいせつなおはなしをなさいました。',
          romaji: 'zen-shain o atsumete, taisetsu na o-hanashi o nasaimashita.',
          cn: '把全体员工召集起来，做了重要讲话。',
        },
      },
      {
        q: {
          jp: '<ruby>社長<rt>しゃちょう</rt></ruby>は<ruby>昼<rt>ひる</rt></ruby>、どこで<ruby>何<rt>なに</rt></ruby>を<ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がりましたか。',
          plain: 'しゃちょうはひる、どこでなにをめしあがりましたか。',
          romaji: 'shachou wa hiru, doko de nani o meshiagarimashita ka.',
          cn: '社长中午在哪里用了什么？',
        },
        a: {
          jp: '<ruby>食堂<rt>しょくどう</rt></ruby>でみんなと<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>昼食<rt>ちゅうしょく</rt></ruby>を<ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がりました。',
          plain: 'しょくどうでみんなといっしょにちゅうしょくをめしあがりました。',
          romaji: 'shokudou de minna to issho ni chuushoku o meshiagarimashita.',
          cn: '在食堂和大家一起吃了午饭。',
        },
        hint: '「召し上がる」是「食べる／飲む」的尊敬语。',
      },
      {
        q: {
          jp: 'お<ruby>客様<rt>きゃくさま</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>へのプレゼントを<ruby>探<rt>さが</rt></ruby>していますか。',
          plain: 'おきゃくさまはだれへのプレゼントをさがしていますか。',
          romaji: 'o-kyakusama wa dare e no purezento o sagashite imasu ka.',
          cn: '客人在找送给谁的礼物？',
        },
        a: {
          jp: 'お<ruby>母様<rt>かあさま</rt></ruby>へのプレゼントを<ruby>探<rt>さが</rt></ruby>しています。',
          plain: 'おかあさまへのプレゼントをさがしています。',
          romaji: 'o-kaasama e no purezento o sagashite imasu.',
          cn: '在找送给母亲的礼物。',
        },
      },
      {
        q: {
          jp: '<ruby>店員<rt>てんいん</rt></ruby>はお<ruby>客様<rt>きゃくさま</rt></ruby>に<ruby>何<rt>なに</rt></ruby>をすすめましたか。',
          plain: 'てんいんはおきゃくさまになにをすすめましたか。',
          romaji: 'ten-in wa o-kyakusama ni nani o susumemashita ka.',
          cn: '店员向客人推荐了什么？',
        },
        a: {
          jp: '<ruby>軽<rt>かる</rt></ruby>くて<ruby>使<rt>つか</rt></ruby>いやすい、<ruby>人気<rt>にんき</rt></ruby>のあるスカーフをすすめました。',
          plain: 'かるくてつかいやすい、にんきのあるスカーフをすすめました。',
          romaji: 'karukute tsukaiyasui, ninki no aru sukaafu o susumemashita.',
          cn: '推荐了轻便好用、很受欢迎的丝巾。',
        },
      },
    ],
    vocabulary: [
      { jp: '社長', kana: 'しゃちょう', romaji: 'shachou', meaning: '社长', pos: '名詞' },
      { jp: 'いらっしゃいます', kana: 'いらっしゃいます', romaji: 'irasshaimasu', meaning: '在；去；来（尊敬）', pos: '動詞I' },
      { jp: '全社員', kana: 'ぜんしゃいん', romaji: 'zen-shain', meaning: '全体员工', pos: '名詞' },
      { jp: 'なさいます', kana: 'なさいます', romaji: 'nasaimasu', meaning: '做（尊敬）', pos: '動詞I' },
      { jp: 'おっしゃいます', kana: 'おっしゃいます', romaji: 'osshaimasu', meaning: '说（尊敬）', pos: '動詞I' },
      { jp: '市場', kana: 'しじょう', romaji: 'shijou', meaning: '市场', pos: '名詞' },
      { jp: '進出', kana: 'しんしゅつ', romaji: 'shinshutsu', meaning: '进军；进入', pos: '名詞' },
      { jp: 'ご覧になります', kana: 'ごらんになります', romaji: 'go-ran ni narimasu', meaning: '看（尊敬）', pos: '動詞I' },
      { jp: 'スピーチ', kana: 'スピーチ', romaji: 'supiichi', meaning: '讲话', pos: '名詞' },
      { jp: '意見', kana: 'いけん', romaji: 'iken', meaning: '意见', pos: '名詞' },
      { jp: '食堂', kana: 'しょくどう', romaji: 'shokudou', meaning: '食堂', pos: '名詞' },
      { jp: '昼食', kana: 'ちゅうしょく', romaji: 'chuushoku', meaning: '午餐', pos: '名詞' },
      { jp: '召し上がります', kana: 'めしあがります', romaji: 'meshiagarimasu', meaning: '吃；喝（尊敬）', pos: '動詞I' },
      { jp: '気さく', kana: 'きさく', romaji: 'kisaku', meaning: '平易近人', pos: 'な形容詞' },
      { jp: '方', kana: 'かた', romaji: 'kata', meaning: '人（尊敬）', pos: '名詞' },
      { jp: '笑顔', kana: 'えがお', romaji: 'egao', meaning: '笑容', pos: '名詞' },
      { jp: '本社', kana: 'ほんしゃ', romaji: 'honsha', meaning: '总部', pos: '名詞' },
      { jp: 'お越しになります', kana: 'おこしになります', romaji: 'o-koshi ni narimasu', meaning: '来；去（尊敬）', pos: '動詞I' },
      { jp: '緊張', kana: 'きんちょう', romaji: 'kinchou', meaning: '紧张', pos: '名詞' },
      { jp: '学びます', kana: 'まなびます', romaji: 'manabimasu', meaning: '学习', pos: '動詞I' },
      { jp: 'よろしい', kana: 'よろしい', romaji: 'yoroshii', meaning: '好；可以（礼貌）', pos: 'い形容詞' },
      { jp: '商品', kana: 'しょうひん', romaji: 'shouhin', meaning: '商品', pos: '名詞' },
      { jp: 'ございます', kana: 'ございます', romaji: 'gozaimasu', meaning: '有；是（礼貌）', pos: '動詞I' },
      { jp: '気軽', kana: 'きがる', romaji: 'kigaru', meaning: '随意；轻松', pos: 'な形容詞' },
      { jp: 'お客様', kana: 'おきゃくさま', romaji: 'o-kyakusama', meaning: '客人（尊敬）', pos: '名詞' },
      { jp: '注文', kana: 'ちゅうもん', romaji: 'chuumon', meaning: '点单；订购', pos: '名詞' },
      { jp: 'お母様', kana: 'おかあさま', romaji: 'o-kaasama', meaning: '令堂', pos: '名詞' },
      { jp: 'スカーフ', kana: 'スカーフ', romaji: 'sukaafu', meaning: '丝巾', pos: '名詞' },
      { jp: '人気', kana: 'にんき', romaji: 'ninki', meaning: '人气', pos: '名詞' },
      { jp: '触ります', kana: 'さわります', romaji: 'sawarimasu', meaning: '摸；触碰', pos: '動詞I' },
      { jp: 'もちろん', kana: 'もちろん', romaji: 'mochiron', meaning: '当然', pos: '副詞' },
    ],
    grammar: [
      {
        pattern: '敬語の三本柱',
        name: '敬语三大体系',
        explain: '日语敬语分三类：①「尊敬語」抬高对方/话题人的行为（主语是对方）；②「謙譲語」降低自己一方的行为（主语是自己/自方）；③「丁寧語」基本礼貌（です・ます、ございます）。本课先学①尊敬语，下一课学②谦让语。判断关键：动作的主体是谁？对方→尊敬语，自己→谦让语，谁都可以→丁宁语。',
        examples: [
          {
            jp: '<ruby>先生<rt>せんせい</rt></ruby>がいらっしゃる。（尊敬）',
            plain: 'せんせいがいらっしゃる。',
            cn: '老师来。（抬高对方）',
          },
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>が<ruby>参<rt>まい</rt></ruby>る。（謙譲）',
            plain: 'わたしがまいる。',
            cn: '我去。（降低自己）',
          },
        ],
      },
      {
        pattern: '特殊な尊敬動詞',
        name: '尊敬专用动词',
        explain: '部分常用动词有专门的尊敬形（必须背）：行く/来る/いる→いらっしゃる、お越しになる；食べる/飲む→召し上がる；する→なさる；言う→おっしゃる；見る→ご覧になる；くれる→くださる；知っている→ご存じだ。这些是 N3 必背词，N2 也常考。注意ます形不规则：いらっしゃる→いらっしゃいます（去掉 r）。',
        examples: [
          {
            jp: '<ruby>社長<rt>しゃちょう</rt></ruby>は<ruby>何<rt>なに</rt></ruby>を<ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がりますか。',
            plain: 'しゃちょうはなにをめしあがりますか。',
            cn: '社长要吃什么？',
          },
          {
            jp: '<ruby>先生<rt>せんせい</rt></ruby>がそうおっしゃいました。',
            plain: 'せんせいがそうおっしゃいました。',
            cn: '老师那样说了。',
          },
        ],
      },
      {
        pattern: 'お+V ます形+になる',
        name: '通用尊敬句式',
        explain: '没有专用尊敬动词时的通用形式：「お+V ます形+になる」。書く→お書きになる、読む→お読みになる、聞く→お聞きになる。サ变动词用「ご+漢語+になる」（説明する→ご説明になる）。但单音节ます形动词（する、来る、見る等）和已有专用尊敬形的动词不能用此式。',
        examples: [
          {
            jp: '<ruby>先生<rt>せんせい</rt></ruby>はもうお<ruby>帰<rt>かえ</rt></ruby>りになりました。',
            plain: 'せんせいはもうおかえりになりました。',
            cn: '老师已经回去了。',
          },
          {
            jp: 'こちらをお<ruby>使<rt>つか</rt></ruby>いになってください。',
            plain: 'こちらをおつかいになってください。',
            cn: '请使用这边的。',
          },
        ],
      },
      {
        pattern: 'V（ら）れる（尊敬）',
        name: '被动形作尊敬',
        explain: '动词被动形（〜れる/られる）也可作尊敬用法，敬意比「お〜になる」稍弱，但比「ます」礼貌。「社長が話される」「お客様が来られる」。注意：与被动同形，需靠语境区分；常在职场新闻中用。比较：①「社長が話す」普通；②「社長が話される」尊敬（弱）；③「社長がお話しになる」尊敬（强）。',
        examples: [
          {
            jp: '<ruby>部長<rt>ぶちょう</rt></ruby>は<ruby>明日<rt>あした</rt></ruby><ruby>来<rt>こ</rt></ruby>られますか。',
            plain: 'ぶちょうはあしたこられますか。',
            cn: '部长明天来吗？（尊敬）',
          },
          {
            jp: '<ruby>社長<rt>しゃちょう</rt></ruby>が<ruby>新<rt>あたら</rt></ruby>しい<ruby>計画<rt>けいかく</rt></ruby>を<ruby>発表<rt>はっぴょう</rt></ruby>されました。',
            plain: 'しゃちょうがあたらしいけいかくをはっぴょうされました。',
            cn: '社长发布了新计划。',
          },
        ],
      },
      {
        pattern: 'お/ご + N',
        name: '名词的尊敬接头',
        explain: '名词前加「お」（和語）或「ご」（漢語），表示对所属物的尊敬：お名前、お電話、お時間、ご家族、ご意見、ご注文。一些已固定化的词不分尊敬只是礼貌（お茶、お米、お金）。规则不绝对，需逐个记忆。误用规则会显得不自然。',
        examples: [
          {
            jp: 'お<ruby>名前<rt>なまえ</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いします。',
            plain: 'おなまえをおねがいします。',
            cn: '请告知您的姓名。',
          },
          {
            jp: 'ご<ruby>意見<rt>いけん</rt></ruby>をお<ruby>聞<rt>き</rt></ruby>かせください。',
            plain: 'ごいけんをおきかせください。',
            cn: '请告诉我您的意见。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 25 課 — 敬語入門 ② 謙譲語
  // ========================================================
  {
    id: 25,
    level: 'N3',
    title: {
      jp: '敬語入門 ② 謙譲語',
      romaji: 'keigo nyuumon 2 kenjou-go',
      cn: '敬语入门 ② 谦让语',
      en: 'Keigo 2 — Humble Language',
    },
    goals: [
      '掌握谦让动词和「お+V+する」「〜させていただく」结构',
      '理解谦让语的核心是"降低自己以抬高对方"',
      '能在面试和商务邮件中使用恰当的谦让表达',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '面接で',
          romaji: 'mensetsu de',
          cn: '在面试中',
        },
        sentences: [
          {
            jp: '<ruby>本日<rt>ほんじつ</rt></ruby>はお<ruby>忙<rt>いそが</rt></ruby>しい<ruby>中<rt>なか</rt></ruby>、<ruby>面接<rt>めんせつ</rt></ruby>のお<ruby>時間<rt>じかん</rt></ruby>をいただき、ありがとうございます。',
            plain: 'ほんじつはおいそがしいなか、めんせつのおじかんをいただき、ありがとうございます。',
            romaji: 'honjitsu wa o-isogashii naka, mensetsu no o-jikan o itadaki, arigatou gozaimasu.',
            cn: '今天百忙之中给我面试的时间，非常感谢。',
          },
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>、<ruby>佐藤<rt>さとう</rt></ruby><ruby>健太<rt>けんた</rt></ruby>と<ruby>申<rt>もう</rt></ruby>します。',
            plain: 'わたし、さとうけんたともうします。',
            romaji: 'watashi, Satou Kenta to moushimasu.',
            cn: '我叫佐藤健太。',
          },
          {
            jp: '<ruby>東京大学<rt>とうきょうだいがく</rt></ruby>の<ruby>経済学部<rt>けいざいがくぶ</rt></ruby>からまいりました。',
            plain: 'とうきょうだいがくのけいざいがくぶからまいりました。',
            romaji: 'Toukyou-daigaku no keizai-gakubu kara mairimashita.',
            cn: '我来自东京大学经济学部。',
          },
          {
            jp: '<ruby>御社<rt>おんしゃ</rt></ruby>のホームページを<ruby>拝見<rt>はいけん</rt></ruby>し、<ruby>大変<rt>たいへん</rt></ruby><ruby>感銘<rt>かんめい</rt></ruby>を<ruby>受<rt>う</rt></ruby>けました。',
            plain: 'おんしゃのホームページをはいけんし、たいへんかんめいをうけました。',
            romaji: 'onsha no hoomupeeji o haiken shi, taihen kanmei o ukemashita.',
            cn: '拜读了贵公司的主页，深受感动。',
          },
          {
            jp: '<ruby>特<rt>とく</rt></ruby>に<ruby>環境<rt>かんきょう</rt></ruby>への<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>みについて、<ruby>詳<rt>くわ</rt></ruby>しくお<ruby>聞<rt>き</rt></ruby>きしたいと<ruby>思<rt>おも</rt></ruby>っております。',
            plain: 'とくにかんきょうへのとりくみについて、くわしくおききしたいとおもっております。',
            romaji: 'toku ni kankyou e no torikumi ni tsuite, kuwashiku o-kiki shitai to omotte orimasu.',
            cn: '特别是关于贵公司在环保方面的努力，我想详细请教。',
          },
          {
            jp: '<ruby>大学<rt>だいがく</rt></ruby>では<ruby>四年間<rt>よねんかん</rt></ruby>、<ruby>持続<rt>じぞく</rt></ruby><ruby>可能<rt>かのう</rt></ruby>な<ruby>経済<rt>けいざい</rt></ruby>について<ruby>研究<rt>けんきゅう</rt></ruby>してまいりました。',
            plain: 'だいがくではよねんかん、じぞくかのうなけいざいについてけんきゅうしてまいりました。',
            romaji: 'daigaku de wa yo-nen-kan, jizoku-kanou na keizai ni tsuite kenkyuu shite mairimashita.',
            cn: '在大学里我研究可持续经济已经四年了。',
          },
          {
            jp: '<ruby>御社<rt>おんしゃ</rt></ruby>でその<ruby>知識<rt>ちしき</rt></ruby>を<ruby>活<rt>い</rt></ruby>かさせていただきたく、<ruby>応募<rt>おうぼ</rt></ruby>いたしました。',
            plain: 'おんしゃでそのちしきをいかさせていただきたく、おうぼいたしました。',
            romaji: 'onsha de sono chishiki o ikasasete itadakitaku, oubo itashimashita.',
            cn: '希望能在贵公司发挥这些知识，因此前来应聘。',
          },
          {
            jp: 'もし<ruby>採用<rt>さいよう</rt></ruby>していただけましたら、<ruby>全力<rt>ぜんりょく</rt></ruby>で<ruby>努力<rt>どりょく</rt></ruby>させていただきます。',
            plain: 'もしさいようしていただけましたら、ぜんりょくでどりょくさせていただきます。',
            romaji: 'moshi saiyou shite itadakemashitara, zenryoku de doryoku sasete itadakimasu.',
            cn: '如果能被录用，我会全力以赴。',
          },
          {
            jp: '<ruby>後<rt>のち</rt></ruby>ほど、<ruby>履歴書<rt>りれきしょ</rt></ruby>のコピーをお<ruby>渡<rt>わた</rt></ruby>しいたします。',
            plain: 'のちほど、りれきしょのコピーをおわたしいたします。',
            romaji: 'nochi-hodo, rirekisho no kopii o o-watashi itashimasu.',
            cn: '稍后我会把简历复印件交给您。',
          },
          {
            jp: '<ruby>本日<rt>ほんじつ</rt></ruby>はどうぞよろしくお<ruby>願<rt>ねが</rt></ruby>い<ruby>申<rt>もう</rt></ruby>し<ruby>上<rt>あ</rt></ruby>げます。',
            plain: 'ほんじつはどうぞよろしくおねがいもうしあげます。',
            romaji: 'honjitsu wa douzo yoroshiku o-negai moushiagemasu.',
            cn: '今天恳请多关照。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: 'メールの書き方',
          romaji: 'meeru no kakikata',
          cn: '邮件的写法',
        },
        sentences: [
          {
            jp: 'いつも<ruby>大変<rt>たいへん</rt></ruby>お<ruby>世話<rt>せわ</rt></ruby>になっております。',
            plain: 'いつもたいへんおせわになっております。',
            romaji: 'itsumo taihen o-sewa ni natte orimasu.',
            cn: '一直承蒙关照。',
          },
          {
            jp: 'ABC<ruby>商事<rt>しょうじ</rt></ruby>の<ruby>田中<rt>たなか</rt></ruby>と<ruby>申<rt>もう</rt></ruby>します。',
            plain: 'ABCしょうじのたなかともうします。',
            romaji: 'ABC-shouji no Tanaka to moushimasu.',
            cn: '我是 ABC 商事的田中。',
          },
          {
            jp: '<ruby>先日<rt>せんじつ</rt></ruby>はお<ruby>打<rt>う</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせのお<ruby>時間<rt>じかん</rt></ruby>をいただき、<ruby>誠<rt>まこと</rt></ruby>にありがとうございました。',
            plain: 'せんじつはおうちあわせのおじかんをいただき、まことにありがとうございました。',
            romaji: 'senjitsu wa o-uchiawase no o-jikan o itadaki, makoto ni arigatou gozaimashita.',
            cn: '前几天承蒙抽出洽谈时间，诚挚感谢。',
          },
          {
            jp: 'お<ruby>話<rt>はな</rt></ruby>しいたしました<ruby>件<rt>けん</rt></ruby>について、<ruby>資料<rt>しりょう</rt></ruby>をお<ruby>送<rt>おく</rt></ruby>りいたします。',
            plain: 'おはなしいたしましたけんについて、しりょうをおおくりいたします。',
            romaji: 'o-hanashi itashimashita ken ni tsuite, shiryou o o-okuri itashimasu.',
            cn: '关于商谈过的事项，附上资料。',
          },
          {
            jp: 'ご<ruby>確認<rt>かくにん</rt></ruby>のうえ、ご<ruby>意見<rt>いけん</rt></ruby>を<ruby>伺<rt>うかが</rt></ruby>えれば<ruby>幸<rt>さいわ</rt></ruby>いです。',
            plain: 'ごかくにんのうえ、ごいけんをうかがえればさいわいです。',
            romaji: 'go-kakunin no ue, go-iken o ukagaereba saiwai desu.',
            cn: '请确认后告知您的意见，将不胜感激。',
          },
          {
            jp: '<ruby>来週<rt>らいしゅう</rt></ruby>、<ruby>御社<rt>おんしゃ</rt></ruby>に<ruby>伺<rt>うかが</rt></ruby>わせていただきたく<ruby>存<rt>ぞん</rt></ruby>じます。',
            plain: 'らいしゅう、おんしゃにうかがわせていただきたくぞんじます。',
            romaji: 'raishuu, onsha ni ukagawasete itadakitaku zonjimasu.',
            cn: '希望下周能拜访贵公司。',
          },
          {
            jp: 'お<ruby>忙<rt>いそが</rt></ruby>しいところ<ruby>恐縮<rt>きょうしゅく</rt></ruby>ですが、よろしくお<ruby>願<rt>ねが</rt></ruby>いいたします。',
            plain: 'おいそがしいところきょうしゅくですが、よろしくおねがいいたします。',
            romaji: 'o-isogashii tokoro kyoushuku desu ga, yoroshiku o-negai itashimasu.',
            cn: '百忙之中打扰您，敬请关照。',
          },
          {
            jp: 'ご<ruby>返信<rt>へんしん</rt></ruby>をお<ruby>待<rt>ま</rt></ruby>ち<ruby>申<rt>もう</rt></ruby>し<ruby>上<rt>あ</rt></ruby>げております。',
            plain: 'ごへんしんをおまちもうしあげております。',
            romaji: 'go-henshin o o-machi moushiagete orimasu.',
            cn: '恭候您的回复。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '取引先のオフィスで、営業担当者が初対面の挨拶をしている。',
        cn: '客户公司的办公室，业务负责人在做初次见面的寒暄。',
      },
      lines: [
        {
          speaker: '田中',
          jp: 'はじめまして。ABC<ruby>商事<rt>しょうじ</rt></ruby>の<ruby>田中<rt>たなか</rt></ruby>と<ruby>申<rt>もう</rt></ruby>します。',
          plain: 'はじめまして。ABCしょうじのたなかともうします。',
          romaji: 'hajimemashite. ABC-shouji no Tanaka to moushimasu.',
          cn: '初次见面。我是 ABC 商事的田中。',
        },
        {
          speaker: '山田',
          jp: 'こちらこそ、はじめまして。XYZ<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>山田<rt>やまだ</rt></ruby>でございます。',
          plain: 'こちらこそ、はじめまして。XYZかいしゃのやまだでございます。',
          romaji: 'kochira koso, hajimemashite. XYZ-kaisha no Yamada de gozaimasu.',
          cn: '彼此彼此，初次见面。我是 XYZ 公司的山田。',
        },
        {
          speaker: '田中',
          jp: '<ruby>本日<rt>ほんじつ</rt></ruby>はお<ruby>時間<rt>じかん</rt></ruby>をいただきまして、ありがとうございます。',
          plain: 'ほんじつはおじかんをいただきまして、ありがとうございます。',
          romaji: 'honjitsu wa o-jikan o itadakimashite, arigatou gozaimasu.',
          cn: '今天承蒙抽出时间，非常感谢。',
        },
        {
          speaker: '山田',
          jp: 'いえいえ、こちらこそ。<ruby>新<rt>あたら</rt></ruby>しい<ruby>提案<rt>ていあん</rt></ruby>を<ruby>伺<rt>うかが</rt></ruby>えるのを<ruby>楽<rt>たの</rt></ruby>しみにしておりました。',
          plain: 'いえいえ、こちらこそ。あたらしいていあんをうかがえるのをたのしみにしておりました。',
          romaji: 'ie ie, kochira koso. atarashii teian o ukagaeru no o tanoshimi ni shite orimashita.',
          cn: '不客气，彼此彼此。我一直期待听您的新提案。',
        },
        {
          speaker: '田中',
          jp: 'では、さっそく<ruby>資料<rt>しりょう</rt></ruby>をお<ruby>渡<rt>わた</rt></ruby>しいたします。ご<ruby>覧<rt>らん</rt></ruby>ください。',
          plain: 'では、さっそくしりょうをおわたしいたします。ごらんください。',
          romaji: 'dewa, sassoku shiryou o o-watashi itashimasu. go-ran kudasai.',
          cn: '那么，立即把资料给您。请过目。',
        },
        {
          speaker: '山田',
          jp: 'ありがとうございます。<ruby>後<rt>のち</rt></ruby>ほど<ruby>拝見<rt>はいけん</rt></ruby>させていただきます。',
          plain: 'ありがとうございます。のちほどはいけんさせていただきます。',
          romaji: 'arigatou gozaimasu. nochi-hodo haiken sasete itadakimasu.',
          cn: '谢谢。我稍后会拜读。',
        },
        {
          speaker: '田中',
          jp: 'ご<ruby>不明<rt>ふめい</rt></ruby>な<ruby>点<rt>てん</rt></ruby>がございましたら、いつでもご<ruby>連絡<rt>れんらく</rt></ruby>くださいませ。',
          plain: 'ごふめいなてんがございましたら、いつでもごれんらくくださいませ。',
          romaji: 'go-fumei na ten ga gozaimashitara, itsudemo go-renraku kudasaimase.',
          cn: '如有不明之处，请随时联系我。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>佐藤<rt>さとう</rt></ruby>さんはどこから<ruby>来<rt>き</rt></ruby>ましたか。',
          plain: 'さとうさんはどこからきましたか。',
          romaji: 'Satou-san wa doko kara kimashita ka.',
          cn: '佐藤来自哪里？',
        },
        a: {
          jp: '<ruby>東京大学<rt>とうきょうだいがく</rt></ruby>の<ruby>経済学部<rt>けいざいがくぶ</rt></ruby>からまいりました。',
          plain: 'とうきょうだいがくのけいざいがくぶからまいりました。',
          romaji: 'Toukyou-daigaku no keizai-gakubu kara mairimashita.',
          cn: '来自东京大学经济学部。',
        },
        hint: '「まいる」是「来る／行く」的谦让语。',
      },
      {
        q: {
          jp: '<ruby>佐藤<rt>さとう</rt></ruby>さんは<ruby>大学<rt>だいがく</rt></ruby>で<ruby>何<rt>なに</rt></ruby>を<ruby>研究<rt>けんきゅう</rt></ruby>してきましたか。',
          plain: 'さとうさんはだいがくでなにをけんきゅうしてきましたか。',
          romaji: 'Satou-san wa daigaku de nani o kenkyuu shite kimashita ka.',
          cn: '佐藤在大学里研究什么？',
        },
        a: {
          jp: '<ruby>四年間<rt>よねんかん</rt></ruby>、<ruby>持続<rt>じぞく</rt></ruby><ruby>可能<rt>かのう</rt></ruby>な<ruby>経済<rt>けいざい</rt></ruby>について<ruby>研究<rt>けんきゅう</rt></ruby>してまいりました。',
          plain: 'よねんかん、じぞくかのうなけいざいについてけんきゅうしてまいりました。',
          romaji: 'yo-nen-kan, jizoku-kanou na keizai ni tsuite kenkyuu shite mairimashita.',
          cn: '四年来研究可持续经济。',
        },
      },
      {
        q: {
          jp: '<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>山田<rt>やまだ</rt></ruby>さんに<ruby>何<rt>なに</rt></ruby>を<ruby>渡<rt>わた</rt></ruby>しましたか。',
          plain: 'たなかさんはやまださんになにをわたしましたか。',
          romaji: 'Tanaka-san wa Yamada-san ni nani o watashimashita ka.',
          cn: '田中给山田递了什么？',
        },
        a: {
          jp: '<ruby>提案<rt>ていあん</rt></ruby>の<ruby>資料<rt>しりょう</rt></ruby>をお<ruby>渡<rt>わた</rt></ruby>ししました。',
          plain: 'ていあんのしりょうをおわたししました。',
          romaji: 'teian no shiryou o o-watashi shimashita.',
          cn: '把提案的资料递给了对方。',
        },
      },
      {
        q: {
          jp: 'メールで<ruby>来週<rt>らいしゅう</rt></ruby><ruby>何<rt>なに</rt></ruby>をしたいと<ruby>言<rt>い</rt></ruby>っていますか。',
          plain: 'メールでらいしゅうなにをしたいといっていますか。',
          romaji: 'meeru de raishuu nani o shitai to itte imasu ka.',
          cn: '邮件里说下周想做什么？',
        },
        a: {
          jp: '<ruby>御社<rt>おんしゃ</rt></ruby>に<ruby>伺<rt>うかが</rt></ruby>わせていただきたいと<ruby>言<rt>い</rt></ruby>っています。',
          plain: 'おんしゃにうかがわせていただきたいといっています。',
          romaji: 'onsha ni ukagawasete itadakitai to itte imasu.',
          cn: '说想去拜访贵公司。',
        },
      },
    ],
    vocabulary: [
      { jp: '本日', kana: 'ほんじつ', romaji: 'honjitsu', meaning: '今天（书面）', pos: '名詞' },
      { jp: '面接', kana: 'めんせつ', romaji: 'mensetsu', meaning: '面试', pos: '名詞' },
      { jp: 'いただきます', kana: 'いただきます', romaji: 'itadakimasu', meaning: '收下；吃（谦让）', pos: '動詞I' },
      { jp: '申します', kana: 'もうします', romaji: 'moushimasu', meaning: '叫；说（谦让）', pos: '動詞I' },
      { jp: '経済学部', kana: 'けいざいがくぶ', romaji: 'keizai-gakubu', meaning: '经济学部', pos: '名詞' },
      { jp: 'まいります', kana: 'まいります', romaji: 'mairimasu', meaning: '去；来（谦让）', pos: '動詞I' },
      { jp: '御社', kana: 'おんしゃ', romaji: 'onsha', meaning: '贵公司', pos: '名詞' },
      { jp: 'ホームページ', kana: 'ホームページ', romaji: 'hoomupeeji', meaning: '主页', pos: '名詞' },
      { jp: '拝見します', kana: 'はいけんします', romaji: 'haiken shimasu', meaning: '拜读；看（谦让）', pos: '動詞III' },
      { jp: '感銘', kana: 'かんめい', romaji: 'kanmei', meaning: '感动；感铭', pos: '名詞' },
      { jp: '受けます', kana: 'うけます', romaji: 'ukemasu', meaning: '接受', pos: '動詞II' },
      { jp: '環境', kana: 'かんきょう', romaji: 'kankyou', meaning: '环境', pos: '名詞' },
      { jp: '取り組み', kana: 'とりくみ', romaji: 'torikumi', meaning: '努力；着手', pos: '名詞' },
      { jp: '伺います', kana: 'うかがいます', romaji: 'ukagaimasu', meaning: '拜访；询问（谦让）', pos: '動詞I' },
      { jp: 'おります', kana: 'おります', romaji: 'orimasu', meaning: '在（谦让）', pos: '動詞I' },
      { jp: '持続可能', kana: 'じぞくかのう', romaji: 'jizoku-kanou', meaning: '可持续', pos: 'な形容詞' },
      { jp: '研究', kana: 'けんきゅう', romaji: 'kenkyuu', meaning: '研究', pos: '名詞' },
      { jp: '知識', kana: 'ちしき', romaji: 'chishiki', meaning: '知识', pos: '名詞' },
      { jp: '活かします', kana: 'いかします', romaji: 'ikashimasu', meaning: '发挥', pos: '動詞I' },
      { jp: '応募します', kana: 'おうぼします', romaji: 'oubo shimasu', meaning: '应聘；报名', pos: '動詞III' },
      { jp: 'いたします', kana: 'いたします', romaji: 'itashimasu', meaning: '做（谦让）', pos: '動詞I' },
      { jp: '採用', kana: 'さいよう', romaji: 'saiyou', meaning: '录用', pos: '名詞' },
      { jp: '全力', kana: 'ぜんりょく', romaji: 'zenryoku', meaning: '全力', pos: '名詞' },
      { jp: '努力', kana: 'どりょく', romaji: 'doryoku', meaning: '努力', pos: '名詞' },
      { jp: '履歴書', kana: 'りれきしょ', romaji: 'rirekisho', meaning: '简历', pos: '名詞' },
      { jp: '渡します', kana: 'わたします', romaji: 'watashimasu', meaning: '交给', pos: '動詞I' },
      { jp: 'お世話', kana: 'おせわ', romaji: 'o-sewa', meaning: '关照', pos: '名詞' },
      { jp: '商事', kana: 'しょうじ', romaji: 'shouji', meaning: '商事（公司）', pos: '名詞' },
      { jp: '打ち合わせ', kana: 'うちあわせ', romaji: 'uchiawase', meaning: '商谈', pos: '名詞' },
      { jp: '誠に', kana: 'まことに', romaji: 'makoto ni', meaning: '诚挚地', pos: '副詞' },
      { jp: '件', kana: 'けん', romaji: 'ken', meaning: '事项；件', pos: '名詞' },
      { jp: '確認', kana: 'かくにん', romaji: 'kakunin', meaning: '确认', pos: '名詞' },
      { jp: '幸い', kana: 'さいわい', romaji: 'saiwai', meaning: '幸运；荣幸', pos: 'な形容詞' },
      { jp: '存じます', kana: 'ぞんじます', romaji: 'zonjimasu', meaning: '认为；知道（谦让）', pos: '動詞II' },
      { jp: '恐縮', kana: 'きょうしゅく', romaji: 'kyoushuku', meaning: '不好意思；过意不去', pos: '名詞' },
      { jp: '返信', kana: 'へんしん', romaji: 'henshin', meaning: '回信', pos: '名詞' },
      { jp: '提案', kana: 'ていあん', romaji: 'teian', meaning: '提案', pos: '名詞' },
      { jp: '不明', kana: 'ふめい', romaji: 'fumei', meaning: '不明', pos: 'な形容詞' },
    ],
    grammar: [
      {
        pattern: '特殊な謙譲動詞',
        name: '谦让专用动词',
        explain: '常用谦让形（必须背）：行く/来る→参る；言う→申す；する→いたす；もらう/食べる/飲む→いただく；訪ねる/聞く→伺う；見る→拝見する；知っている→存じる/存じ上げる；あげる→差し上げる。注意「いただく」既是「もらう」也是「食べる」的谦让，靠语境区分。「申す」对应「言う」，「申し上げる」更礼貌。',
        examples: [
          {
            jp: '<ruby>佐藤<rt>さとう</rt></ruby>と<ruby>申<rt>もう</rt></ruby>します。',
            plain: 'さとうともうします。',
            cn: '我叫佐藤。',
          },
          {
            jp: '<ruby>明日<rt>あした</rt></ruby>、<ruby>御社<rt>おんしゃ</rt></ruby>に<ruby>伺<rt>うかが</rt></ruby>います。',
            plain: 'あした、おんしゃにうかがいます。',
            cn: '明天去贵公司拜访。',
          },
        ],
      },
      {
        pattern: 'お+V ます形+する／いたす',
        name: '通用谦让句式',
        explain: '没有专用谦让动词时的通用形式：「お+V ます形+する」（或更礼貌的「いたす」）。送る→お送りする/お送りいたす、待つ→お待ちする/お待ちいたす。サ变动词用「ご+漢語+する／いたす」（連絡する→ご連絡いたす、案内する→ご案内いたす）。注意：动作必须涉及对方（指向对方）才能用此式；纯粹自己的事不能用。',
        examples: [
          {
            jp: '<ruby>資料<rt>しりょう</rt></ruby>をお<ruby>送<rt>おく</rt></ruby>りいたします。',
            plain: 'しりょうをおおくりいたします。',
            cn: '我将寄送资料给您。',
          },
          {
            jp: 'ご<ruby>連絡<rt>れんらく</rt></ruby>いたします。',
            plain: 'ごれんらくいたします。',
            cn: '我会与您联系。',
          },
        ],
      },
      {
        pattern: 'V（さ）せていただく',
        name: '请求许可的谦让形',
        explain: '使役形 + ていただく：表示"承蒙允许做..."，是商务和正式场合的高频表达。比「〜させてください」更礼貌、间接。「拝見させていただく」（请允许我拜读）、「説明させていただく」（请允许我说明）。注意：日常对话中使用过多会显得过于做作。语义上含"得到对方许可"的暗示。',
        examples: [
          {
            jp: '<ruby>後<rt>のち</rt></ruby>ほど<ruby>拝見<rt>はいけん</rt></ruby>させていただきます。',
            plain: 'のちほどはいけんさせていただきます。',
            cn: '请允许我稍后拜读。',
          },
          {
            jp: 'ご<ruby>説明<rt>せつめい</rt></ruby>させていただきます。',
            plain: 'ごせつめいさせていただきます。',
            cn: '请允许我说明。',
          },
        ],
      },
      {
        pattern: '尊敬 vs 謙譲（主語の見分け方）',
        name: '尊敬 vs 谦让 主语判断',
        explain: '判断关键看主语：①主语是对方/上司/客户 → 用尊敬语（ご覧になる、いらっしゃる）；②主语是自己/自方 → 用谦让语（拝見する、参る）。错误对调会非常失礼。例如：「先生が拝見した」（错，自己用谦让说老师）应说「先生がご覧になった」；「私がご覧になる」（错，对方用尊敬说自己）应说「私が拝見する」。',
        examples: [
          {
            jp: '<ruby>先生<rt>せんせい</rt></ruby>はもう<ruby>資料<rt>しりょう</rt></ruby>をご<ruby>覧<rt>らん</rt></ruby>になりましたか。',
            plain: 'せんせいはもうしりょうをごらんになりましたか。',
            cn: '老师已经看过资料了吗？（尊敬·主语=对方）',
          },
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>はもう<ruby>資料<rt>しりょう</rt></ruby>を<ruby>拝見<rt>はいけん</rt></ruby>しました。',
            plain: 'わたしはもうしりょうをはいけんしました。',
            cn: '我已经拜读过资料了。（谦让·主语=自己）',
          },
        ],
      },
      {
        pattern: 'おります／〜ております',
        name: '「いる」的谦让・状态',
        explain: '「おる」是「いる」的谦让形，「〜ております」相当于「〜ています」的更礼貌版本。用于自己一方的存在或状态：「東京におります」「お待ちしております」。注意：「ております」≠「いらっしゃる」，主语不同。商务邮件常用「楽しみにしております」「お待ちしております」。',
        examples: [
          {
            jp: '<ruby>東京<rt>とうきょう</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでおります。',
            plain: 'とうきょうにすんでおります。',
            cn: '我住在东京。',
          },
          {
            jp: 'ご<ruby>連絡<rt>れんらく</rt></ruby>をお<ruby>待<rt>ま</rt></ruby>ちしております。',
            plain: 'ごれんらくをおまちしております。',
            cn: '恭候您的联系。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 26 課 — 様態（外観・伝聞・推量）
  // ========================================================
  {
    id: 26,
    level: 'N3',
    title: {
      jp: '様態と伝聞',
      romaji: 'youtai to denbun',
      cn: '样态与传闻',
      en: 'Appearance and Hearsay',
    },
    goals: [
      '区分「〜そう」「〜らしい」「〜みたい」「〜ようだ」的语感',
      '掌握各表达的接续规则和典型搭配',
      '能用样态表达直观判断、传闻和推测',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: 'あの店、おいしそう',
          romaji: 'ano mise, oishisou',
          cn: '那家店，看起来好吃',
        },
        sentences: [
          {
            jp: '<ruby>駅前<rt>えきまえ</rt></ruby>に<ruby>新<rt>あたら</rt></ruby>しいラーメン<ruby>屋<rt>や</rt></ruby>がオープンしました。',
            plain: 'えきまえにあたらしいラーメンやがオープンしました。',
            romaji: 'eki-mae ni atarashii raamen-ya ga oopun shimashita.',
            cn: '车站前新开了一家拉面店。',
          },
          {
            jp: 'ガラスごしに<ruby>見<rt>み</rt></ruby>えるスープがとても<ruby>濃<rt>こ</rt></ruby>くて、おいしそうです。',
            plain: 'ガラスごしにみえるスープがとてもこくて、おいしそうです。',
            romaji: 'garasu-goshi ni mieru suupu ga totemo kokute, oishisou desu.',
            cn: '透过玻璃看到的汤非常浓，看起来很好吃。',
          },
          {
            jp: 'お<ruby>客<rt>きゃく</rt></ruby>さんもたくさん<ruby>並<rt>なら</rt></ruby>んでいて、<ruby>人気<rt>にんき</rt></ruby>がありそうです。',
            plain: 'おきゃくさんもたくさんならんでいて、にんきがありそうです。',
            romaji: 'o-kyaku-san mo takusan narande ite, ninki ga arisou desu.',
            cn: '排队的客人也很多，看起来很受欢迎。',
          },
          {
            jp: 'ネットの<ruby>口<rt>くち</rt></ruby>コミによると、<ruby>店主<rt>てんしゅ</rt></ruby>は<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>料理人<rt>りょうりにん</rt></ruby>だったらしいです。',
            plain: 'ネットのくちコミによると、てんしゅはゆうめいなりょうりにんだったらしいです。',
            romaji: 'netto no kuchikomi ni yoru to, tenshu wa yuumei na ryouri-nin datta rashii desu.',
            cn: '据网上的评论，店主以前是有名的厨师。',
          },
          {
            jp: '<ruby>地元<rt>じもと</rt></ruby>の<ruby>素材<rt>そざい</rt></ruby>にこだわっているらしく、<ruby>味<rt>あじ</rt></ruby>もかなり<ruby>本格的<rt>ほんかくてき</rt></ruby>みたいです。',
            plain: 'じもとのそざいにこだわっているらしく、あじもかなりほんかくてきみたいです。',
            romaji: 'jimoto no sozai ni kodawatte iru rashiku, aji mo kanari honkakuteki mitai desu.',
            cn: '听说讲究当地食材，味道似乎也相当正宗。',
          },
          {
            jp: '<ruby>友達<rt>ともだち</rt></ruby>はもう<ruby>食<rt>た</rt></ruby>べに<ruby>行<rt>い</rt></ruby>ったみたいで、すごく<ruby>満足<rt>まんぞく</rt></ruby>していました。',
            plain: 'ともだちはもうたべにいったみたいで、すごくまんぞくしていました。',
            romaji: 'tomodachi wa mou tabe ni itta mitai de, sugoku manzoku shite imashita.',
            cn: '朋友好像已经去吃过了，非常满意。',
          },
          {
            jp: '<ruby>値段<rt>ねだん</rt></ruby>もそんなに<ruby>高<rt>たか</rt></ruby>くなさそうなので、<ruby>気軽<rt>きがる</rt></ruby>に<ruby>入<rt>はい</rt></ruby>れそうです。',
            plain: 'ねだんもそんなにたかくなさそうなので、きがるにはいれそうです。',
            romaji: 'nedan mo sonna ni takakunasasou na node, kigaru ni hairesou desu.',
            cn: '价格看起来也不那么贵，似乎可以轻松进去。',
          },
          {
            jp: 'スープから<ruby>湯気<rt>ゆげ</rt></ruby>が<ruby>立<rt>た</rt></ruby>って、いい<ruby>香<rt>かお</rt></ruby>りが<ruby>外<rt>そと</rt></ruby>まで<ruby>漂<rt>ただよ</rt></ruby>っています。',
            plain: 'スープからゆげがたって、いいかおりがそとまでただよっています。',
            romaji: 'suupu kara yuge ga tatte, ii kaori ga soto made tadayotte imasu.',
            cn: '汤里冒着热气，香味飘到了外面。',
          },
          {
            jp: '<ruby>今日<rt>きょう</rt></ruby>は<ruby>寒<rt>さむ</rt></ruby>いし、<ruby>体<rt>からだ</rt></ruby>が<ruby>温<rt>あたた</rt></ruby>まりそうですね。',
            plain: 'きょうはさむいし、からだがあたたまりそうですね。',
            romaji: 'kyou wa samui shi, karada ga atatamarisou desu ne.',
            cn: '今天又冷，似乎能暖和身体呢。',
          },
          {
            jp: '<ruby>明日<rt>あした</rt></ruby>のお<ruby>昼<rt>ひる</rt></ruby>、ぜひ<ruby>行<rt>い</rt></ruby>ってみようと<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'あしたのおひる、ぜひいってみようとおもいます。',
            romaji: 'ashita no o-hiru, zehi itte miyou to omoimasu.',
            cn: '明天中午一定要去试试看。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '彼は忙しいらしい',
          romaji: 'kare wa isogashii rashii',
          cn: '听说他很忙',
        },
        sentences: [
          {
            jp: '<ruby>同期<rt>どうき</rt></ruby>の<ruby>田中<rt>たなか</rt></ruby>くんは<ruby>最近<rt>さいきん</rt></ruby>すごく<ruby>忙<rt>いそが</rt></ruby>しいらしいです。',
            plain: 'どうきのたなかくんはさいきんすごくいそがしいらしいです。',
            romaji: 'douki no Tanaka-kun wa saikin sugoku isogashii rashii desu.',
            cn: '听说同期的田中最近非常忙。',
          },
          {
            jp: '<ruby>新<rt>あたら</rt></ruby>しいプロジェクトを<ruby>任<rt>まか</rt></ruby>されたみたいです。',
            plain: 'あたらしいプロジェクトをまかされたみたいです。',
            romaji: 'atarashii purojekuto o makasareta mitai desu.',
            cn: '好像被交付了新项目。',
          },
          {
            jp: '<ruby>毎晩<rt>まいばん</rt></ruby><ruby>残業<rt>ざんぎょう</rt></ruby>していて、<ruby>週末<rt>しゅうまつ</rt></ruby>も<ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>来<rt>き</rt></ruby>ているそうです。',
            plain: 'まいばんざんぎょうしていて、しゅうまつもかいしゃにきているそうです。',
            romaji: 'maiban zangyou shite ite, shuumatsu mo kaisha ni kite iru sou desu.',
            cn: '听说每晚加班，周末也来公司。',
          },
          {
            jp: '<ruby>昨日<rt>きのう</rt></ruby><ruby>会<rt>あ</rt></ruby>ったとき、<ruby>顔色<rt>かおいろ</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>くて、<ruby>疲<rt>つか</rt></ruby>れていそうでした。',
            plain: 'きのうあったとき、かおいろがわるくて、つかれていそうでした。',
            romaji: 'kinou atta toki, kao-iro ga warukute, tsukarete isou deshita.',
            cn: '昨天见到他时，脸色不好，看起来很累。',
          },
          {
            jp: '<ruby>体<rt>からだ</rt></ruby>を<ruby>壊<rt>こわ</rt></ruby>しそうで、<ruby>心配<rt>しんぱい</rt></ruby>です。',
            plain: 'からだをこわしそうで、しんぱいです。',
            romaji: 'karada o kowashisou de, shinpai desu.',
            cn: '担心他可能要把身体搞坏。',
          },
          {
            jp: '<ruby>奥<rt>おく</rt></ruby>さんもとても<ruby>心配<rt>しんぱい</rt></ruby>しているようです。',
            plain: 'おくさんもとてもしんぱいしているようです。',
            romaji: 'oku-san mo totemo shinpai shite iru you desu.',
            cn: '夫人似乎也很担心。',
          },
          {
            jp: '<ruby>来月<rt>らいげつ</rt></ruby>には<ruby>少<rt>すこ</rt></ruby>し<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>くらしいので、<ruby>食事<rt>しょくじ</rt></ruby>に<ruby>誘<rt>さそ</rt></ruby>うつもりです。',
            plain: 'らいげつにはすこしおちつくらしいので、しょくじにさそうつもりです。',
            romaji: 'raigetsu ni wa sukoshi ochitsuku rashii node, shokuji ni sasou tsumori desu.',
            cn: '听说下个月会稍微稳定下来，我打算约他吃饭。',
          },
          {
            jp: 'やはり<ruby>友達<rt>ともだち</rt></ruby>のサポートが<ruby>大事<rt>だいじ</rt></ruby>みたいです。',
            plain: 'やはりともだちのサポートがだいじみたいです。',
            romaji: 'yahari tomodachi no sapooto ga daiji mitai desu.',
            cn: '果然朋友的支持很重要。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: 'カフェで、二人がスマホを見ながら噂話をしている。',
        cn: '咖啡厅里，两人边看手机边聊八卦。',
      },
      lines: [
        {
          speaker: '美咲',
          jp: 'ねえ、<ruby>聞<rt>き</rt></ruby>いた？<ruby>鈴木<rt>すずき</rt></ruby>さん、<ruby>結婚<rt>けっこん</rt></ruby>するらしいよ。',
          plain: 'ねえ、きいた？すずきさん、けっこんするらしいよ。',
          romaji: 'nee, kiita? Suzuki-san, kekkon suru rashii yo.',
          cn: '哎，听说了吗？铃木好像要结婚了。',
        },
        {
          speaker: '愛',
          jp: 'えっ、<ruby>本当<rt>ほんとう</rt></ruby>？<ruby>相手<rt>あいて</rt></ruby>はどんな<ruby>人<rt>ひと</rt></ruby>みたい？',
          plain: 'えっ、ほんとう？あいてはどんなひとみたい？',
          romaji: "e', hontou? aite wa donna hito mitai?",
          cn: '哎，真的？对方好像是什么样的人？',
        },
        {
          speaker: '美咲',
          jp: 'インスタを<ruby>見<rt>み</rt></ruby>たけど、すごく<ruby>優<rt>やさ</rt></ruby>しそうな<ruby>男性<rt>だんせい</rt></ruby>だったよ。',
          plain: 'インスタをみたけど、すごくやさしそうなだんせいだったよ。',
          romaji: 'insuta o mita kedo, sugoku yasashisou na dansei datta yo.',
          cn: '我看了 Instagram，是个看起来很温柔的男生。',
        },
        {
          speaker: '愛',
          jp: 'よかったね。<ruby>鈴木<rt>すずき</rt></ruby>さんも<ruby>幸<rt>しあわ</rt></ruby>せそうで、<ruby>嬉<rt>うれ</rt></ruby>しい。',
          plain: 'よかったね。すずきさんもしあわせそうで、うれしい。',
          romaji: 'yokatta ne. Suzuki-san mo shiawasesou de, ureshii.',
          cn: '太好了。铃木看起来也很幸福，真高兴。',
        },
        {
          speaker: '美咲',
          jp: '<ruby>結婚式<rt>けっこんしき</rt></ruby>は<ruby>来年<rt>らいねん</rt></ruby>の<ruby>春<rt>はる</rt></ruby>みたい。<ruby>沖縄<rt>おきなわ</rt></ruby>でやるそうだよ。',
          plain: 'けっこんしきはらいねんのはるみたい。おきなわでやるそうだよ。',
          romaji: 'kekkon-shiki wa rainen no haru mitai. Okinawa de yaru sou da yo.',
          cn: '婚礼好像在明年春天。听说在冲绳办。',
        },
        {
          speaker: '愛',
          jp: '<ruby>沖縄<rt>おきなわ</rt></ruby>！それは<ruby>素敵<rt>すてき</rt></ruby>そう。<ruby>招待<rt>しょうたい</rt></ruby>されたら<ruby>絶対<rt>ぜったい</rt></ruby><ruby>行<rt>い</rt></ruby>く。',
          plain: 'おきなわ！それはすてきそう。しょうたいされたらぜったいいく。',
          romaji: 'Okinawa! sore wa sutekisou. shoutai saretara zettai iku.',
          cn: '冲绳！那看起来很棒。要是被邀请我一定去。',
        },
        {
          speaker: '美咲',
          jp: 'うん、ぜひ<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>こうね。',
          plain: 'うん、ぜひいっしょにいこうね。',
          romaji: 'un, zehi issho ni ikou ne.',
          cn: '嗯，一定一起去吧。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>新<rt>あたら</rt></ruby>しいラーメン<ruby>屋<rt>や</rt></ruby>はどうしておいしそうだと<ruby>思<rt>おも</rt></ruby>いましたか。',
          plain: 'あたらしいラーメンやはどうしておいしそうだとおもいましたか。',
          romaji: 'atarashii raamen-ya wa doushite oishisou da to omoimashita ka.',
          cn: '为什么觉得新拉面店看起来好吃？',
        },
        a: {
          jp: 'スープが<ruby>濃<rt>こ</rt></ruby>くて、お<ruby>客<rt>きゃく</rt></ruby>さんもたくさん<ruby>並<rt>なら</rt></ruby>んでいたからです。',
          plain: 'スープがこくて、おきゃくさんもたくさんならんでいたからです。',
          romaji: 'suupu ga kokute, o-kyaku-san mo takusan narande ita kara desu.',
          cn: '因为汤很浓，排队的客人也很多。',
        },
        hint: '「〜そう」表示外观判断。',
      },
      {
        q: {
          jp: '<ruby>店主<rt>てんしゅ</rt></ruby>はどんな<ruby>人<rt>ひと</rt></ruby>だったらしいですか。',
          plain: 'てんしゅはどんなひとだったらしいですか。',
          romaji: 'tenshu wa donna hito datta rashii desu ka.',
          cn: '店主据说以前是什么样的人？',
        },
        a: {
          jp: '<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>料理人<rt>りょうりにん</rt></ruby>だったらしいです。',
          plain: 'ゆうめいなりょうりにんだったらしいです。',
          romaji: 'yuumei na ryouri-nin datta rashii desu.',
          cn: '据说以前是有名的厨师。',
        },
      },
      {
        q: {
          jp: '<ruby>田中<rt>たなか</rt></ruby>くんはなぜ<ruby>忙<rt>いそが</rt></ruby>しいですか。',
          plain: 'たなかくんはなぜいそがしいですか。',
          romaji: 'Tanaka-kun wa naze isogashii desu ka.',
          cn: '田中为什么忙？',
        },
        a: {
          jp: '<ruby>新<rt>あたら</rt></ruby>しいプロジェクトを<ruby>任<rt>まか</rt></ruby>されたみたいで、<ruby>毎晩<rt>まいばん</rt></ruby><ruby>残業<rt>ざんぎょう</rt></ruby>しているそうです。',
          plain: 'あたらしいプロジェクトをまかされたみたいで、まいばんざんぎょうしているそうです。',
          romaji: 'atarashii purojekuto o makasareta mitai de, maiban zangyou shite iru sou desu.',
          cn: '好像被交付了新项目，听说每晚都加班。',
        },
      },
      {
        q: {
          jp: '<ruby>鈴木<rt>すずき</rt></ruby>さんの<ruby>結婚式<rt>けっこんしき</rt></ruby>はいつ、どこでやるそうですか。',
          plain: 'すずきさんのけっこんしきはいつ、どこでやるそうですか。',
          romaji: 'Suzuki-san no kekkon-shiki wa itsu, doko de yaru sou desu ka.',
          cn: '铃木的婚礼据说什么时候、在哪里办？',
        },
        a: {
          jp: '<ruby>来年<rt>らいねん</rt></ruby>の<ruby>春<rt>はる</rt></ruby>、<ruby>沖縄<rt>おきなわ</rt></ruby>でやるそうです。',
          plain: 'らいねんのはる、おきなわでやるそうです。',
          romaji: 'rainen no haru, Okinawa de yaru sou desu.',
          cn: '据说明年春天，在冲绳办。',
        },
      },
    ],
    vocabulary: [
      { jp: '駅前', kana: 'えきまえ', romaji: 'eki-mae', meaning: '车站前', pos: '名詞' },
      { jp: 'ラーメン屋', kana: 'ラーメンや', romaji: 'raamen-ya', meaning: '拉面店', pos: '名詞' },
      { jp: 'オープンします', kana: 'オープンします', romaji: 'oopun shimasu', meaning: '开张', pos: '動詞III' },
      { jp: 'ガラス', kana: 'ガラス', romaji: 'garasu', meaning: '玻璃', pos: '名詞' },
      { jp: 'スープ', kana: 'スープ', romaji: 'suupu', meaning: '汤', pos: '名詞' },
      { jp: '濃い', kana: 'こい', romaji: 'koi', meaning: '浓的', pos: 'い形容詞' },
      { jp: '並びます', kana: 'ならびます', romaji: 'narabimasu', meaning: '排队', pos: '動詞I' },
      { jp: '口コミ', kana: 'くちコミ', romaji: 'kuchikomi', meaning: '口碑；评论', pos: '名詞' },
      { jp: '店主', kana: 'てんしゅ', romaji: 'tenshu', meaning: '店主', pos: '名詞' },
      { jp: '料理人', kana: 'りょうりにん', romaji: 'ryouri-nin', meaning: '厨师', pos: '名詞' },
      { jp: '地元', kana: 'じもと', romaji: 'jimoto', meaning: '当地', pos: '名詞' },
      { jp: '素材', kana: 'そざい', romaji: 'sozai', meaning: '食材；素材', pos: '名詞' },
      { jp: 'こだわります', kana: 'こだわります', romaji: 'kodawarimasu', meaning: '讲究', pos: '動詞I' },
      { jp: '本格的', kana: 'ほんかくてき', romaji: 'honkakuteki', meaning: '正宗的', pos: 'な形容詞' },
      { jp: '満足', kana: 'まんぞく', romaji: 'manzoku', meaning: '满足；满意', pos: 'な形容詞' },
      { jp: '値段', kana: 'ねだん', romaji: 'nedan', meaning: '价格', pos: '名詞' },
      { jp: '湯気', kana: 'ゆげ', romaji: 'yuge', meaning: '热气', pos: '名詞' },
      { jp: '香り', kana: 'かおり', romaji: 'kaori', meaning: '香气', pos: '名詞' },
      { jp: '漂います', kana: 'ただよいます', romaji: 'tadayoimasu', meaning: '飘荡', pos: '動詞I' },
      { jp: '温まります', kana: 'あたたまります', romaji: 'atatamarimasu', meaning: '变暖', pos: '動詞I' },
      { jp: '同期', kana: 'どうき', romaji: 'douki', meaning: '同期', pos: '名詞' },
      { jp: '任せます', kana: 'まかせます', romaji: 'makasemasu', meaning: '托付；交给', pos: '動詞II' },
      { jp: '週末', kana: 'しゅうまつ', romaji: 'shuumatsu', meaning: '周末', pos: '名詞' },
      { jp: '顔色', kana: 'かおいろ', romaji: 'kao-iro', meaning: '脸色', pos: '名詞' },
      { jp: '奥さん', kana: 'おくさん', romaji: 'oku-san', meaning: '夫人', pos: '名詞' },
      { jp: '落ち着きます', kana: 'おちつきます', romaji: 'ochitsukimasu', meaning: '稳定；平静', pos: '動詞I' },
      { jp: '誘います', kana: 'さそいます', romaji: 'sasoimasu', meaning: '邀请', pos: '動詞I' },
      { jp: 'やはり', kana: 'やはり', romaji: 'yahari', meaning: '果然', pos: '副詞' },
      { jp: 'サポート', kana: 'サポート', romaji: 'sapooto', meaning: '支持', pos: '名詞' },
      { jp: '相手', kana: 'あいて', romaji: 'aite', meaning: '对方', pos: '名詞' },
      { jp: 'インスタ', kana: 'インスタ', romaji: 'insuta', meaning: 'Instagram', pos: '名詞' },
      { jp: '優しい', kana: 'やさしい', romaji: 'yasashii', meaning: '温柔的', pos: 'い形容詞' },
      { jp: '男性', kana: 'だんせい', romaji: 'dansei', meaning: '男性', pos: '名詞' },
      { jp: '結婚式', kana: 'けっこんしき', romaji: 'kekkon-shiki', meaning: '婚礼', pos: '名詞' },
      { jp: '沖縄', kana: 'おきなわ', romaji: 'Okinawa', meaning: '冲绳', pos: '名詞' },
      { jp: '素敵', kana: 'すてき', romaji: 'suteki', meaning: '极好；漂亮', pos: 'な形容詞' },
      { jp: '招待', kana: 'しょうたい', romaji: 'shoutai', meaning: '邀请', pos: '名詞' },
      { jp: '絶対', kana: 'ぜったい', romaji: 'zettai', meaning: '绝对', pos: '副詞' },
    ],
    grammar: [
      {
        pattern: 'V ます形／A 词干 + そう（様態）',
        name: '样态「そう」',
        explain: '表示根据外观或眼前情景做出的直观判断："看起来...". 接续：动词去ます形（降る→降りそう）；い形容词去い（おいしい→おいしそう）；な形容词词干直接（元気→元気そう）。例外：いい→よさそう、ない→なさそう。否定形：动词「〜なさそう」；形容词「〜くなさそう」「〜ではなさそう」。注意「そう」不能用于眼前不可见的事，如「日本人そう」（错，应用「らしい/みたい」）。',
        examples: [
          {
            jp: 'このケーキ、おいしそうですね。',
            plain: 'このケーキ、おいしそうですね。',
            cn: '这块蛋糕看起来好吃啊。',
          },
          {
            jp: '<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>りそうです。',
            plain: 'あめがふりそうです。',
            cn: '看起来要下雨了。',
          },
          {
            jp: 'この<ruby>本<rt>ほん</rt></ruby>はあまり<ruby>面白<rt>おもしろ</rt></ruby>くなさそうです。',
            plain: 'このほんはあまりおもしろくなさそうです。',
            cn: '这本书看起来不太有趣。',
          },
        ],
      },
      {
        pattern: '普通形 + そう（伝聞）',
        name: '传闻「そうだ」',
        explain: '另一个「そう」：表示传闻"听说...". 接续是动词/形容词的普通形+そうだ：「降るそうだ」「おいしいそうだ」「学生だそうだ」（注意名词后用「だ」）。与样态「そう」区分关键在接续：样态用 ます形/词干，传闻用普通形。「〜によると」「〜の話では」常一起用以指明信息源。',
        examples: [
          {
            jp: '<ruby>天気<rt>てんき</rt></ruby><ruby>予報<rt>よほう</rt></ruby>によると、<ruby>明日<rt>あした</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るそうです。',
            plain: 'てんきよほうによると、あしたはあめがふるそうです。',
            cn: '天气预报说，明天会下雨。',
          },
          {
            jp: '<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>来月<rt>らいげつ</rt></ruby><ruby>結婚<rt>けっこん</rt></ruby>するそうです。',
            plain: 'たなかさんはらいげつけっこんするそうです。',
            cn: '听说田中下个月结婚。',
          },
        ],
      },
      {
        pattern: '普通形 + らしい',
        name: '推断・传闻「らしい」',
        explain: '「〜らしい」表示"听说"或"根据某些线索推断"。接续：动词/形容词普通形+らしい，名词/な形容词词干直接+らしい（学生らしい、元気らしい）。语感比「そうだ（伝聞）」多一层"客观推断"，比「みたい」更书面。也能表达"像...的样子"：「彼はいかにも医者らしい」（他很有医生的样子）。',
        examples: [
          {
            jp: '<ruby>田中<rt>たなか</rt></ruby>くんは<ruby>最近<rt>さいきん</rt></ruby><ruby>忙<rt>いそが</rt></ruby>しいらしい。',
            plain: 'たなかくんはさいきんいそがしいらしい。',
            cn: '听说田中最近很忙。',
          },
          {
            jp: '<ruby>店主<rt>てんしゅ</rt></ruby>は<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>料理人<rt>りょうりにん</rt></ruby>だったらしい。',
            plain: 'てんしゅはゆうめいなりょうりにんだったらしい。',
            cn: '据说店主以前是有名的厨师。',
          },
        ],
      },
      {
        pattern: '普通形 + みたい',
        name: '直觉・口语推测「みたい」',
        explain: '「みたい」是「ようだ」的口语形式，表示根据自己的直接感受、观察推测"似乎/好像"。接续：动词/形容词普通形+みたい，名词/な形容词词干直接+みたい（学生みたい、元気みたい）。也能表示比喻"像..."：「夢みたい」（像做梦一样）。日常会话最常用。书面体用「〜ようだ」。',
        examples: [
          {
            jp: '<ruby>友達<rt>ともだち</rt></ruby>はもう<ruby>食<rt>た</rt></ruby>べに<ruby>行<rt>い</rt></ruby>ったみたいです。',
            plain: 'ともだちはもうたべにいったみたいです。',
            cn: '朋友好像已经去吃过了。',
          },
          {
            jp: '<ruby>子供<rt>こども</rt></ruby>みたいに<ruby>泣<rt>な</rt></ruby>かないでください。',
            plain: 'こどもみたいになかないでください。',
            cn: '请不要像孩子一样哭。',
          },
        ],
      },
      {
        pattern: '三者の使い分け',
        name: '三者的细微区别',
        explain: '「そう」「らしい」「みたい」语感对比：①「そう（様態）」=直接外观判断，眼前可见（おいしそう＝看起来好吃）；②「らしい」=听来的或客观线索推断，多用于他人传话（忙しいらしい＝听说他忙）；③「みたい」=口语直观感受，依据自己看到的（疲れているみたい＝看上去累）。书面正式场合用「ようだ」代替「みたい」。三者接续严格，不可混用。例：✕「彼は学生そうだ」（错，应用「らしい/みたい」）。',
        examples: [
          {
            jp: '<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>りそうだ。（雲の様子から）',
            plain: 'あめがふりそうだ。',
            cn: '看起来要下雨。（看云）',
          },
          {
            jp: '<ruby>明日<rt>あした</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>らしい。（天気予報で）',
            plain: 'あしたはあめらしい。',
            cn: '听说明天下雨。（听天气预报）',
          },
          {
            jp: '<ruby>外<rt>そと</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>みたい。（窓を見て）',
            plain: 'そとはあめみたい。',
            cn: '外面好像在下雨。（看窗外）',
          },
        ],
      },
    ],
  },

];

