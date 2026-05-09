// ============================================================
// lessons-n4-part3.ts
// JLPT N4 — 第 16 課 ～ 第 20 課
// ============================================================

import type { Lesson } from './types';

export const lessonsN4Part3: Lesson[] = [

  // ========================================================
  // 第 16 課 — 試しと経験
  // ========================================================
  {
    id: 16,
    level: 'N4',
    title: {
      jp: '試しと経験',
      romaji: 'tameshi to keiken',
      cn: '尝试与经验',
      en: 'Trying and Experiences',
    },
    goals: [
      '能用「〜てみる」表达"试着做某事"',
      '能用「〜たことがある／ない」描述自己的经历',
      '理解过去未曾经历过的表达「〜たことがなかった」',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '初めての温泉',
          romaji: 'hajimete no onsen',
          cn: '第一次去温泉',
        },
        sentences: [
          {
            jp: '<ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>と<ruby>箱根<rt>はこね</rt></ruby>の<ruby>温泉<rt>おんせん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ってみました。',
            plain: 'せんしゅう、ともだちとはこねのおんせんへいってみました。',
            romaji: 'senshuu, tomodachi to Hakone no onsen e itte mimashita.',
            cn: '上周和朋友试着去了箱根的温泉。',
          },
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>はそれまで<ruby>日本<rt>にほん</rt></ruby>の<ruby>温泉<rt>おんせん</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ったことがありませんでした。',
            plain: 'わたしはそれまでにほんのおんせんにはいったことがありませんでした。',
            romaji: 'watashi wa sore made Nihon no onsen ni haitta koto ga arimasen deshita.',
            cn: '在那之前我没泡过日本的温泉。',
          },
          {
            jp: '<ruby>最初<rt>さいしょ</rt></ruby>はちょっと<ruby>恥<rt>は</rt></ruby>ずかしかったです。',
            plain: 'さいしょはちょっとはずかしかったです。',
            romaji: 'saisho wa chotto hazukashikatta desu.',
            cn: '一开始有点不好意思。',
          },
          {
            jp: 'でも、<ruby>勇気<rt>ゆうき</rt></ruby>を<ruby>出<rt>だ</rt></ruby>して<ruby>入<rt>はい</rt></ruby>ってみたら、とても<ruby>気持<rt>きも</rt></ruby>ちよかったです。',
            plain: 'でも、ゆうきをだしてはいってみたら、とてもきもちよかったです。',
            romaji: 'demo, yuuki o dashite haitte mitara, totemo kimochi yokatta desu.',
            cn: '但鼓起勇气试着泡进去后，非常舒服。',
          },
          {
            jp: '<ruby>露天風呂<rt>ろてんぶろ</rt></ruby>から<ruby>山<rt>やま</rt></ruby>が<ruby>見<rt>み</rt></ruby>えて、こんなにきれいな<ruby>景色<rt>けしき</rt></ruby>は<ruby>見<rt>み</rt></ruby>たことがありません。',
            plain: 'ろてんぶろからやまがみえて、こんなにきれいなけしきはみたことがありません。',
            romaji: 'rotenburo kara yama ga miete, konna ni kirei na keshiki wa mita koto ga arimasen.',
            cn: '从露天浴池能看到山，从没见过这么美的景色。',
          },
          {
            jp: '<ruby>夕食<rt>ゆうしょく</rt></ruby>には<ruby>地元<rt>じもと</rt></ruby>の<ruby>料理<rt>りょうり</rt></ruby>を<ruby>食<rt>た</rt></ruby>べてみました。',
            plain: 'ゆうしょくにはじもとのりょうりをたべてみました。',
            romaji: 'yuushoku ni wa jimoto no ryouri o tabete mimashita.',
            cn: '晚餐尝试了当地的料理。',
          },
          {
            jp: '<ruby>初<rt>はじ</rt></ruby>めて<ruby>食<rt>た</rt></ruby>べた<ruby>魚<rt>さかな</rt></ruby>もありました。',
            plain: 'はじめてたべたさかなもありました。',
            romaji: 'hajimete tabeta sakana mo arimashita.',
            cn: '也有第一次吃到的鱼。',
          },
          {
            jp: '<ruby>夜<rt>よる</rt></ruby>は<ruby>畳<rt>たたみ</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>で<ruby>寝<rt>ね</rt></ruby>てみました。<ruby>静<rt>しず</rt></ruby>かでよく<ruby>眠<rt>ねむ</rt></ruby>れました。',
            plain: 'よるはたたみのへやでねてみました。しずかでよくねむれました。',
            romaji: 'yoru wa tatami no heya de nete mimashita. shizuka de yoku nemuremashita.',
            cn: '晚上试着在榻榻米房间里睡。安静，睡得很好。',
          },
          {
            jp: 'こんな<ruby>素敵<rt>すてき</rt></ruby>な<ruby>経験<rt>けいけん</rt></ruby>は<ruby>初<rt>はじ</rt></ruby>めてです。<ruby>来年<rt>らいねん</rt></ruby>もまた<ruby>行<rt>い</rt></ruby>ってみたいです。',
            plain: 'こんなすてきなけいけんははじめてです。らいねんもまたいってみたいです。',
            romaji: 'konna suteki na keiken wa hajimete desu. rainen mo mata itte mitai desu.',
            cn: '这样美好的经历是第一次。明年还想再去。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '面白い経験',
          romaji: 'omoshiroi keiken',
          cn: '有趣的经历',
        },
        sentences: [
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>はこれまでいろいろな<ruby>面白<rt>おもしろ</rt></ruby>い<ruby>経験<rt>けいけん</rt></ruby>をしたことがあります。',
            plain: 'わたしはこれまでいろいろなおもしろいけいけんをしたことがあります。',
            romaji: 'watashi wa kore made iroirona omoshiroi keiken o shita koto ga arimasu.',
            cn: '我至今为止有过很多有趣的经历。',
          },
          {
            jp: '<ruby>大学生<rt>だいがくせい</rt></ruby>の<ruby>時<rt>とき</rt></ruby>、<ruby>一人<rt>ひとり</rt></ruby>でインドへ<ruby>行<rt>い</rt></ruby>ったことがあります。',
            plain: 'だいがくせいのとき、ひとりでインドへいったことがあります。',
            romaji: 'daigakusei no toki, hitori de Indo e itta koto ga arimasu.',
            cn: '大学时曾经一个人去过印度。',
          },
          {
            jp: '<ruby>現地<rt>げんち</rt></ruby>でとても<ruby>辛<rt>から</rt></ruby>いカレーを<ruby>食<rt>た</rt></ruby>べてみました。<ruby>涙<rt>なみだ</rt></ruby>が<ruby>出<rt>で</rt></ruby>ました。',
            plain: 'げんちでとてもからいカレーをたべてみました。なみだがでました。',
            romaji: 'genchi de totemo karai karee o tabete mimashita. namida ga demashita.',
            cn: '在当地试着吃了非常辣的咖喱。眼泪都出来了。',
          },
          {
            jp: '<ruby>象<rt>ぞう</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ったこともあります。<ruby>思<rt>おも</rt></ruby>ったより<ruby>高<rt>たか</rt></ruby>かったです。',
            plain: 'ぞうにのったこともあります。おもったよりたかかったです。',
            romaji: 'zou ni notta koto mo arimasu. omotta yori takakatta desu.',
            cn: '也骑过象。比想象的还要高。',
          },
          {
            jp: 'でも、<ruby>納豆<rt>なっとう</rt></ruby>はまだ<ruby>食<rt>た</rt></ruby>べたことがありません。<ruby>匂<rt>にお</rt></ruby>いがちょっと<ruby>怖<rt>こわ</rt></ruby>いです。',
            plain: 'でも、なっとうはまだたべたことがありません。においがちょっとこわいです。',
            romaji: 'demo, nattou wa mada tabeta koto ga arimasen. nioi ga chotto kowai desu.',
            cn: '但纳豆还没吃过。气味有点可怕。',
          },
          {
            jp: '<ruby>今度<rt>こんど</rt></ruby><ruby>勇気<rt>ゆうき</rt></ruby>を<ruby>出<rt>だ</rt></ruby>して<ruby>食<rt>た</rt></ruby>べてみるつもりです。',
            plain: 'こんどゆうきをだしてたべてみるつもりです。',
            romaji: 'kondo yuuki o dashite tabete miru tsumori desu.',
            cn: '下次打算鼓起勇气尝试一下。',
          },
          {
            jp: '<ruby>新<rt>あたら</rt></ruby>しいことに<ruby>挑戦<rt>ちょうせん</rt></ruby>するのは、<ruby>少<rt>すこ</rt></ruby>し<ruby>怖<rt>こわ</rt></ruby>いですが、<ruby>楽<rt>たの</rt></ruby>しいです。',
            plain: 'あたらしいことにちょうせんするのは、すこしこわいですが、たのしいです。',
            romaji: 'atarashii koto ni chousen suru no wa, sukoshi kowai desu ga, tanoshii desu.',
            cn: '挑战新事物虽然有点害怕，但是很有趣。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: 'カフェで友達におすすめを聞かれている。',
        cn: '在咖啡店被朋友问推荐。',
      },
      lines: [
        {
          speaker: '<ruby>鈴木<rt>すずき</rt></ruby>',
          jp: '<ruby>最近<rt>さいきん</rt></ruby>、<ruby>何<rt>なに</rt></ruby>か<ruby>面白<rt>おもしろ</rt></ruby>いことしましたか。',
          plain: 'さいきん、なにかおもしろいことしましたか。',
          romaji: 'saikin, nani ka omoshiroi koto shimashita ka.',
          cn: '最近做了什么有趣的事吗？',
        },
        {
          speaker: '<ruby>田中<rt>たなか</rt></ruby>',
          jp: '<ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>初<rt>はじ</rt></ruby>めて<ruby>温泉<rt>おんせん</rt></ruby>に<ruby>行<rt>い</rt></ruby>ってみました。',
          plain: 'せんしゅう、はじめておんせんにいってみました。',
          romaji: 'senshuu, hajimete onsen ni itte mimashita.',
          cn: '上周第一次试着去了温泉。',
        },
        {
          speaker: '<ruby>鈴木<rt>すずき</rt></ruby>',
          jp: 'いいですね。<ruby>私<rt>わたし</rt></ruby>はまだ<ruby>行<rt>い</rt></ruby>ったことがありません。どうでしたか。',
          plain: 'いいですね。わたしはまだいったことがありません。どうでしたか。',
          romaji: 'ii desu ne. watashi wa mada itta koto ga arimasen. dou deshita ka.',
          cn: '真好。我还没去过。怎么样？',
        },
        {
          speaker: '<ruby>田中<rt>たなか</rt></ruby>',
          jp: 'とてもよかったです。<ruby>鈴木<rt>すずき</rt></ruby>さんも<ruby>一度<rt>いちど</rt></ruby><ruby>行<rt>い</rt></ruby>ってみたらどうですか。',
          plain: 'とてもよかったです。すずきさんもいちどいってみたらどうですか。',
          romaji: 'totemo yokatta desu. Suzuki-san mo ichido itte mitara dou desu ka.',
          cn: '非常好。铃木你也去试一次怎么样？',
        },
        {
          speaker: '<ruby>鈴木<rt>すずき</rt></ruby>',
          jp: 'そうですね、<ruby>今度<rt>こんど</rt></ruby><ruby>友達<rt>ともだち</rt></ruby>と<ruby>行<rt>い</rt></ruby>ってみます。',
          plain: 'そうですね、こんどともだちといってみます。',
          romaji: 'sou desu ne, kondo tomodachi to itte mimasu.',
          cn: '好啊，下次和朋友一起去试试。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>先週<rt>せんしゅう</rt></ruby>どこへ<ruby>行<rt>い</rt></ruby>きましたか。',
          plain: 'たなかさんはせんしゅうどこへいきましたか。',
          romaji: 'Tanaka-san wa senshuu doko e ikimashita ka.',
          cn: '田中上周去了哪里？',
        },
        a: {
          jp: '<ruby>箱根<rt>はこね</rt></ruby>の<ruby>温泉<rt>おんせん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きました。',
          plain: 'はこねのおんせんへいきました。',
          romaji: 'Hakone no onsen e ikimashita.',
          cn: '去了箱根的温泉。',
        },
      },
      {
        q: {
          jp: '<ruby>筆者<rt>ひっしゃ</rt></ruby>はそれまで<ruby>温泉<rt>おんせん</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ったことがありましたか。',
          plain: 'ひっしゃはそれまでおんせんにはいったことがありましたか。',
          romaji: 'hissha wa sore made onsen ni haitta koto ga arimashita ka.',
          cn: '作者在那之前泡过温泉吗？',
        },
        a: {
          jp: 'いいえ、<ruby>入<rt>はい</rt></ruby>ったことがありませんでした。',
          plain: 'いいえ、はいったことがありませんでした。',
          romaji: 'iie, haitta koto ga arimasen deshita.',
          cn: '不，没泡过。',
        },
        hint: '注意「〜たことがなかった／ありませんでした」是过去未曾经历的表达。',
      },
      {
        q: {
          jp: '<ruby>配篇<rt>はいへん</rt></ruby>の<ruby>筆者<rt>ひっしゃ</rt></ruby>はまだ<ruby>食<rt>た</rt></ruby>べたことがないものは<ruby>何<rt>なに</rt></ruby>ですか。',
          plain: 'はいへんのひっしゃはまだたべたことがないものはなにですか。',
          romaji: 'haihen no hissha wa mada tabeta koto ga nai mono wa nani desu ka.',
          cn: '配篇的作者还没吃过的是什么？',
        },
        a: {
          jp: '<ruby>納豆<rt>なっとう</rt></ruby>です。<ruby>匂<rt>にお</rt></ruby>いが<ruby>怖<rt>こわ</rt></ruby>いからです。',
          plain: 'なっとうです。においがこわいからです。',
          romaji: 'nattou desu. nioi ga kowai kara desu.',
          cn: '是纳豆。因为气味很可怕。',
        },
      },
      {
        q: {
          jp: 'あなたは<ruby>外国<rt>がいこく</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ったことがありますか。',
          plain: 'あなたはがいこくへいったことがありますか。',
          romaji: 'anata wa gaikoku e itta koto ga arimasu ka.',
          cn: '你去过外国吗？',
        },
        a: {
          jp: 'はい、<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ったことがあります。',
          plain: 'はい、にほんへいったことがあります。',
          romaji: 'hai, Nihon e itta koto ga arimasu.',
          cn: '是的，去过日本。',
        },
        hint: '使用「〜たことがあります／ありません」回答经验。',
      },
    ],
    vocabulary: [
      { jp: '試し', kana: 'ためし', romaji: 'tameshi', meaning: '尝试', pos: '名詞' },
      { jp: '経験', kana: 'けいけん', romaji: 'keiken', meaning: '经验；经历', pos: '名詞' },
      { jp: '温泉', kana: 'おんせん', romaji: 'onsen', meaning: '温泉', pos: '名詞' },
      { jp: '初めて', kana: 'はじめて', romaji: 'hajimete', meaning: '第一次', pos: '副詞' },
      { jp: '勇気', kana: 'ゆうき', romaji: 'yuuki', meaning: '勇气', pos: '名詞' },
      { jp: '出します', kana: 'だします', romaji: 'dashimasu', meaning: '拿出', pos: '動詞I' },
      { jp: '気持ちいい', kana: 'きもちいい', romaji: 'kimochi ii', meaning: '舒服', pos: 'い形容詞' },
      { jp: '露天風呂', kana: 'ろてんぶろ', romaji: 'rotenburo', meaning: '露天浴池', pos: '名詞' },
      { jp: '景色', kana: 'けしき', romaji: 'keshiki', meaning: '景色', pos: '名詞' },
      { jp: '地元', kana: 'じもと', romaji: 'jimoto', meaning: '当地', pos: '名詞' },
      { jp: '畳', kana: 'たたみ', romaji: 'tatami', meaning: '榻榻米', pos: '名詞' },
      { jp: '眠れます', kana: 'ねむれます', romaji: 'nemuremasu', meaning: '能睡着', pos: '動詞II' },
      { jp: '素敵', kana: 'すてき', romaji: 'suteki', meaning: '美好；漂亮', pos: 'な形容詞' },
      { jp: '恥ずかしい', kana: 'はずかしい', romaji: 'hazukashii', meaning: '害羞；不好意思', pos: 'い形容詞' },
      { jp: 'インド', kana: 'インド', romaji: 'Indo', meaning: '印度', pos: '名詞' },
      { jp: '現地', kana: 'げんち', romaji: 'genchi', meaning: '当地；现场', pos: '名詞' },
      { jp: '辛い', kana: 'からい', romaji: 'karai', meaning: '辣的', pos: 'い形容詞' },
      { jp: 'カレー', kana: 'カレー', romaji: 'karee', meaning: '咖喱', pos: '名詞' },
      { jp: '涙', kana: 'なみだ', romaji: 'namida', meaning: '眼泪', pos: '名詞' },
      { jp: '象', kana: 'ぞう', romaji: 'zou', meaning: '象', pos: '名詞' },
      { jp: '乗ります', kana: 'のります', romaji: 'norimasu', meaning: '乘坐；骑', pos: '動詞I' },
      { jp: '納豆', kana: 'なっとう', romaji: 'nattou', meaning: '纳豆', pos: '名詞' },
      { jp: '匂い', kana: 'におい', romaji: 'nioi', meaning: '气味', pos: '名詞' },
      { jp: '怖い', kana: 'こわい', romaji: 'kowai', meaning: '可怕的', pos: 'い形容詞' },
      { jp: '挑戦します', kana: 'ちょうせんします', romaji: 'chousen shimasu', meaning: '挑战', pos: '動詞III' },
      { jp: 'つもり', kana: 'つもり', romaji: 'tsumori', meaning: '打算', pos: '名詞' },
      { jp: '今度', kana: 'こんど', romaji: 'kondo', meaning: '下次；这次', pos: '名詞' },
      { jp: '一度', kana: 'いちど', romaji: 'ichido', meaning: '一次', pos: '名詞' },
    ],
    grammar: [
      {
        pattern: 'V て + みる',
        name: '尝试做某事',
        explain: '"试着做..."。表示对未做过或不确定结果的动作进行尝试。「みる」是补助动词，写作平假名。常见变体「〜てみたい」(想试试)、「〜てみました」(尝试了)、「〜てみたら」(试着...看看)。注意区别：与「みる」(看)同源但语义已虚化。',
        examples: [
          {
            jp: 'この<ruby>料理<rt>りょうり</rt></ruby>を<ruby>食<rt>た</rt></ruby>べてみてください。',
            plain: 'このりょうりをたべてみてください。',
            cn: '请尝尝这道菜。',
          },
          {
            jp: '<ruby>新<rt>あたら</rt></ruby>しい<ruby>店<rt>みせ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ってみました。',
            plain: 'あたらしいみせへいってみました。',
            cn: '试着去了新店。',
          },
        ],
      },
      {
        pattern: 'V た + ことがある',
        name: '过去经验（有）',
        explain: '"曾经做过..."。表示过去有某种经历。动词必须用た形（普通形过去）。「こと」是形式名词，前接动词时用普通形。这个语法不能用于刚刚发生的事(刚才→×食べたことがあります)，必须是过去较远的经历。',
        examples: [
          {
            jp: '<ruby>京都<rt>きょうと</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ったことがあります。',
            plain: 'きょうとへいったことがあります。',
            cn: '去过京都。',
          },
          {
            jp: 'すしを<ruby>食<rt>た</rt></ruby>べたことがあります。',
            plain: 'すしをたべたことがあります。',
            cn: '吃过寿司。',
          },
        ],
      },
      {
        pattern: 'V た + ことがない',
        name: '过去经验（无）',
        explain: '"没做过..."。「ある」的否定为「ない」(普通形)、「ありません」(礼貌形)。结合「まだ」(还没)使用更自然：「まだ食べたことがありません」。',
        examples: [
          {
            jp: '<ruby>飛行機<rt>ひこうき</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ったことがありません。',
            plain: 'ひこうきにのったことがありません。',
            cn: '没坐过飞机。',
          },
        ],
      },
      {
        pattern: 'V た + ことがなかった',
        name: '过去未曾经历',
        explain: '"那时还没做过..."。把「ない／ありません」改成过去否定形「なかった／ありませんでした」，表示某个过去时间点之前还没经历过。常与「それまで」(在那之前)、「その時まで」搭配。',
        examples: [
          {
            jp: 'それまで<ruby>温泉<rt>おんせん</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ったことがありませんでした。',
            plain: 'それまでおんせんにはいったことがありませんでした。',
            cn: '在那之前没泡过温泉。',
          },
        ],
      },
      {
        pattern: 'V て + みたら + どうですか',
        name: '建议尝试',
        explain: '"试试...怎么样？"。委婉建议对方尝试。「みたら」是「みる」的たら形（条件形），后接「どうですか」。比直接劝说更柔和。',
        examples: [
          {
            jp: '<ruby>一度<rt>いちど</rt></ruby><ruby>行<rt>い</rt></ruby>ってみたらどうですか。',
            plain: 'いちどいってみたらどうですか。',
            cn: '去一次试试怎么样？',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 17 課 — あげる・もらう・くれる
  // ========================================================
  {
    id: 17,
    level: 'N4',
    title: {
      jp: '授受動詞',
      romaji: 'juju-doushi',
      cn: '授受动词',
      en: 'Giving and Receiving',
    },
    goals: [
      '掌握「あげる／もらう／くれる」三个授受动词的视角',
      '理解日语「内／外」的视角文化',
      '能用「〜てあげる／〜てもらう／〜てくれる」表达恩惠',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: 'お土産',
          romaji: 'o-miyage',
          cn: '伴手礼',
        },
        sentences: [
          {
            jp: '<ruby>先月<rt>せんげつ</rt></ruby>、<ruby>家族<rt>かぞく</rt></ruby>と<ruby>北海道<rt>ほっかいどう</rt></ruby>へ<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>きました。',
            plain: 'せんげつ、かぞくとほっかいどうへりょこうにいきました。',
            romaji: 'sengetsu, kazoku to Hokkaidou e ryokou ni ikimashita.',
            cn: '上个月和家人去北海道旅行了。',
          },
          {
            jp: '<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>同僚<rt>どうりょう</rt></ruby>にお<ruby>土産<rt>みやげ</rt></ruby>をあげました。',
            plain: 'かいしゃのどうりょうにおみやげをあげました。',
            romaji: 'kaisha no douryou ni o-miyage o agemashita.',
            cn: '送了同事伴手礼。',
          },
          {
            jp: '<ruby>有名<rt>ゆうめい</rt></ruby>なチョコレートを<ruby>買<rt>か</rt></ruby>って、みんなに<ruby>配<rt>くば</rt></ruby>りました。',
            plain: 'ゆうめいなチョコレートをかって、みんなにくばりました。',
            romaji: 'yuumei na chokoreeto o katte, minna ni kubarimashita.',
            cn: '买了有名的巧克力分给大家。',
          },
          {
            jp: '<ruby>田中<rt>たなか</rt></ruby>さんは「ありがとう」と<ruby>言<rt>い</rt></ruby>ってくれました。',
            plain: 'たなかさんは「ありがとう」といってくれました。',
            romaji: 'Tanaka-san wa "arigatou" to itte kuremashita.',
            cn: '田中对我说了"谢谢"。',
          },
          {
            jp: '<ruby>部長<rt>ぶちょう</rt></ruby>からはお<ruby>礼<rt>れい</rt></ruby>に<ruby>缶<rt>かん</rt></ruby>コーヒーをもらいました。',
            plain: 'ぶちょうからはおれいにかんコーヒーをもらいました。',
            romaji: 'buchou kara wa o-rei ni kan-koohii o moraimashita.',
            cn: '从部长那里收到了罐装咖啡作为回礼。',
          },
          {
            jp: '<ruby>鈴木<rt>すずき</rt></ruby>さんは<ruby>仕事<rt>しごと</rt></ruby>を<ruby>手伝<rt>てつだ</rt></ruby>ってくれました。',
            plain: 'すずきさんはしごとをてつだってくれました。',
            romaji: 'Suzuki-san wa shigoto o tetsudatte kuremashita.',
            cn: '铃木帮我做了工作。',
          },
          {
            jp: 'お<ruby>礼<rt>れい</rt></ruby>に、<ruby>私<rt>わたし</rt></ruby>は<ruby>鈴木<rt>すずき</rt></ruby>さんに<ruby>昼食<rt>ちゅうしょく</rt></ruby>をごちそうしてあげました。',
            plain: 'おれいに、わたしはすずきさんにちゅうしょくをごちそうしてあげました。',
            romaji: 'o-rei ni, watashi wa Suzuki-san ni chuushoku o gochisou shite agemashita.',
            cn: '作为答谢，我请铃木吃了午饭。',
          },
          {
            jp: '<ruby>日本<rt>にほん</rt></ruby>では、お<ruby>土産<rt>みやげ</rt></ruby>の<ruby>文化<rt>ぶんか</rt></ruby>がとても<ruby>大切<rt>たいせつ</rt></ruby>です。',
            plain: 'にほんでは、おみやげのぶんかがとてもたいせつです。',
            romaji: 'Nihon de wa, o-miyage no bunka ga totemo taisetsu desu.',
            cn: '在日本，伴手礼的文化非常重要。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '家族からの手紙',
          romaji: 'kazoku kara no tegami',
          cn: '来自家人的信',
        },
        sentences: [
          {
            jp: '<ruby>昨日<rt>きのう</rt></ruby>、<ruby>母<rt>はは</rt></ruby>から<ruby>手紙<rt>てがみ</rt></ruby>をもらいました。',
            plain: 'きのう、ははからてがみをもらいました。',
            romaji: 'kinou, haha kara tegami o moraimashita.',
            cn: '昨天收到了妈妈的信。',
          },
          {
            jp: '<ruby>母<rt>はは</rt></ruby>は<ruby>毎月<rt>まいつき</rt></ruby><ruby>手紙<rt>てがみ</rt></ruby>を<ruby>送<rt>おく</rt></ruby>ってくれます。',
            plain: 'ははまいつきてがみをおくってくれます。',
            romaji: 'haha wa maitsuki tegami o okutte kuremasu.',
            cn: '妈妈每个月都给我寄信。',
          },
          {
            jp: '<ruby>妹<rt>いもうと</rt></ruby>は<ruby>誕生日<rt>たんじょうび</rt></ruby>に<ruby>絵<rt>え</rt></ruby>を<ruby>描<rt>か</rt></ruby>いてくれました。',
            plain: 'いもうとはたんじょうびにえをかいてくれました。',
            romaji: 'imouto wa tanjoubi ni e o kaite kuremashita.',
            cn: '妹妹在我生日时画了画给我。',
          },
          {
            jp: '<ruby>父<rt>ちち</rt></ruby>は<ruby>好<rt>す</rt></ruby>きな<ruby>本<rt>ほん</rt></ruby>を<ruby>送<rt>おく</rt></ruby>ってくれました。',
            plain: 'ちちはすきなほんをおくってくれました。',
            romaji: 'chichi wa suki na hon o okutte kuremashita.',
            cn: '爸爸把我喜欢的书寄给了我。',
          },
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>も<ruby>家族<rt>かぞく</rt></ruby>に<ruby>東京<rt>とうきょう</rt></ruby>のお<ruby>菓子<rt>かし</rt></ruby>をあげるつもりです。',
            plain: 'わたしもかぞくにとうきょうのおかしをあげるつもりです。',
            romaji: 'watashi mo kazoku ni Toukyou no o-kashi o ageru tsumori desu.',
            cn: '我也打算送家人东京的点心。',
          },
          {
            jp: '<ruby>家族<rt>かぞく</rt></ruby>がいつも<ruby>応援<rt>おうえん</rt></ruby>してくれることに<ruby>感謝<rt>かんしゃ</rt></ruby>しています。',
            plain: 'かぞくがいつもおうえんしてくれることにかんしゃしています。',
            romaji: 'kazoku ga itsumo ouen shite kureru koto ni kansha shiteimasu.',
            cn: '感谢家人总是支持我。',
          },
          {
            jp: '<ruby>離<rt>はな</rt></ruby>れていても、<ruby>心<rt>こころ</rt></ruby>はいつも<ruby>一緒<rt>いっしょ</rt></ruby>です。',
            plain: 'はなれていても、こころはいつもいっしょです。',
            romaji: 'hanarete ite mo, kokoro wa itsumo issho desu.',
            cn: '即使分开，心也总是在一起。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '友達から誕生日プレゼントをもらった後。',
        cn: '收到朋友的生日礼物之后。',
      },
      lines: [
        {
          speaker: '<ruby>山田<rt>やまだ</rt></ruby>',
          jp: 'これ、<ruby>誕生日<rt>たんじょうび</rt></ruby>プレゼントです。どうぞ。',
          plain: 'これ、たんじょうびプレゼントです。どうぞ。',
          romaji: 'kore, tanjoubi purezento desu. douzo.',
          cn: '这个，是生日礼物。请收下。',
        },
        {
          speaker: '<ruby>田中<rt>たなか</rt></ruby>',
          jp: 'えっ、<ruby>本当<rt>ほんとう</rt></ruby>にいいんですか。ありがとうございます。',
          plain: 'えっ、ほんとうにいいんですか。ありがとうございます。',
          romaji: 'e, hontou ni ii n desu ka. arigatou gozaimasu.',
          cn: '咦，真的可以吗？谢谢。',
        },
        {
          speaker: '<ruby>山田<rt>やまだ</rt></ruby>',
          jp: '<ruby>田中<rt>たなか</rt></ruby>さんが<ruby>好<rt>す</rt></ruby>きそうな<ruby>本<rt>ほん</rt></ruby>を<ruby>選<rt>えら</rt></ruby>んでみました。',
          plain: 'たなかさんがすきそうなほんをえらんでみました。',
          romaji: 'Tanaka-san ga sukisou na hon o erande mimashita.',
          cn: '我试着选了田中你可能喜欢的书。',
        },
        {
          speaker: '<ruby>田中<rt>たなか</rt></ruby>',
          jp: 'こんなに<ruby>素敵<rt>すてき</rt></ruby>なものをくれて、<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>嬉<rt>うれ</rt></ruby>しいです。',
          plain: 'こんなにすてきなものをくれて、ほんとうにうれしいです。',
          romaji: 'konna ni suteki na mono o kurete, hontou ni ureshii desu.',
          cn: '送我这么好的东西，真的很开心。',
        },
        {
          speaker: '<ruby>山田<rt>やまだ</rt></ruby>',
          jp: '<ruby>気<rt>き</rt></ruby>に<ruby>入<rt>い</rt></ruby>ってもらえると<ruby>嬉<rt>うれ</rt></ruby>しいです。',
          plain: 'きにいってもらえるとうれしいです。',
          romaji: 'ki ni itte moraeru to ureshii desu.',
          cn: '你喜欢我就开心了。',
        },
        {
          speaker: '<ruby>田中<rt>たなか</rt></ruby>',
          jp: '<ruby>今度<rt>こんど</rt></ruby><ruby>私<rt>わたし</rt></ruby>もお<ruby>礼<rt>れい</rt></ruby>に<ruby>何<rt>なに</rt></ruby>かあげますね。',
          plain: 'こんどわたしもおれいになにかあげますね。',
          romaji: 'kondo watashi mo o-rei ni nani ka agemasu ne.',
          cn: '下次我也送你点什么作为答谢。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>筆者<rt>ひっしゃ</rt></ruby>は<ruby>同僚<rt>どうりょう</rt></ruby>に<ruby>何<rt>なに</rt></ruby>をあげましたか。',
          plain: 'ひっしゃはどうりょうになにをあげましたか。',
          romaji: 'hissha wa douryou ni nani o agemashita ka.',
          cn: '作者送了同事什么？',
        },
        a: {
          jp: '<ruby>北海道<rt>ほっかいどう</rt></ruby>のチョコレートをあげました。',
          plain: 'ほっかいどうのチョコレートをあげました。',
          romaji: 'Hokkaidou no chokoreeto o agemashita.',
          cn: '送了北海道的巧克力。',
        },
      },
      {
        q: {
          jp: '<ruby>鈴木<rt>すずき</rt></ruby>さんは<ruby>筆者<rt>ひっしゃ</rt></ruby>に<ruby>何<rt>なに</rt></ruby>をしてくれましたか。',
          plain: 'すずきさんはひっしゃになにをしてくれましたか。',
          romaji: 'Suzuki-san wa hissha ni nani o shite kuremashita ka.',
          cn: '铃木为作者做了什么？',
        },
        a: {
          jp: '<ruby>仕事<rt>しごと</rt></ruby>を<ruby>手伝<rt>てつだ</rt></ruby>ってくれました。',
          plain: 'しごとをてつだってくれました。',
          romaji: 'shigoto o tetsudatte kuremashita.',
          cn: '帮了我工作。',
        },
        hint: '「〜てくれる」=对方为我做某事。',
      },
      {
        q: {
          jp: '<ruby>母<rt>はは</rt></ruby>は<ruby>毎月<rt>まいつき</rt></ruby><ruby>何<rt>なに</rt></ruby>をしてくれますか。',
          plain: 'はははまいつきなにをしてくれますか。',
          romaji: 'haha wa maitsuki nani o shite kuremasu ka.',
          cn: '妈妈每个月做什么？',
        },
        a: {
          jp: '<ruby>手紙<rt>てがみ</rt></ruby>を<ruby>送<rt>おく</rt></ruby>ってくれます。',
          plain: 'てがみをおくってくれます。',
          romaji: 'tegami o okutte kuremasu.',
          cn: '寄信给我。',
        },
      },
      {
        q: {
          jp: '<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>山田<rt>やまだ</rt></ruby>さんから<ruby>何<rt>なに</rt></ruby>をもらいましたか。',
          plain: 'たなかさんはやまださんからなにをもらいましたか。',
          romaji: 'Tanaka-san wa Yamada-san kara nani o moraimashita ka.',
          cn: '田中从山田那里收到了什么？',
        },
        a: {
          jp: '<ruby>誕生日<rt>たんじょうび</rt></ruby>プレゼントの<ruby>本<rt>ほん</rt></ruby>をもらいました。',
          plain: 'たんじょうびプレゼントのほんをもらいました。',
          romaji: 'tanjoubi purezento no hon o moraimashita.',
          cn: '收到了生日礼物——一本书。',
        },
      },
    ],
    vocabulary: [
      { jp: 'あげます', kana: 'あげます', romaji: 'agemasu', meaning: '给（我→他）', pos: '動詞II' },
      { jp: 'もらいます', kana: 'もらいます', romaji: 'moraimasu', meaning: '从…得到', pos: '動詞I' },
      { jp: 'くれます', kana: 'くれます', romaji: 'kuremasu', meaning: '（别人）给我', pos: '動詞II' },
      { jp: 'お土産', kana: 'おみやげ', romaji: 'o-miyage', meaning: '伴手礼', pos: '名詞' },
      { jp: '同僚', kana: 'どうりょう', romaji: 'douryou', meaning: '同事', pos: '名詞' },
      { jp: '北海道', kana: 'ほっかいどう', romaji: 'Hokkaidou', meaning: '北海道', pos: '名詞' },
      { jp: '旅行', kana: 'りょこう', romaji: 'ryokou', meaning: '旅行', pos: '名詞' },
      { jp: 'チョコレート', kana: 'チョコレート', romaji: 'chokoreeto', meaning: '巧克力', pos: '名詞' },
      { jp: '配ります', kana: 'くばります', romaji: 'kubarimasu', meaning: '分发', pos: '動詞I' },
      { jp: '部長', kana: 'ぶちょう', romaji: 'buchou', meaning: '部长', pos: '名詞' },
      { jp: 'お礼', kana: 'おれい', romaji: 'o-rei', meaning: '感谢；回礼', pos: '名詞' },
      { jp: '缶コーヒー', kana: 'かんコーヒー', romaji: 'kan-koohii', meaning: '罐装咖啡', pos: '名詞' },
      { jp: '手伝います', kana: 'てつだいます', romaji: 'tetsudaimasu', meaning: '帮忙', pos: '動詞I' },
      { jp: '昼食', kana: 'ちゅうしょく', romaji: 'chuushoku', meaning: '午饭', pos: '名詞' },
      { jp: 'ごちそうします', kana: 'ごちそうします', romaji: 'gochisou shimasu', meaning: '请客', pos: '動詞III' },
      { jp: '文化', kana: 'ぶんか', romaji: 'bunka', meaning: '文化', pos: '名詞' },
      { jp: '大切', kana: 'たいせつ', romaji: 'taisetsu', meaning: '重要的', pos: 'な形容詞' },
      { jp: '手紙', kana: 'てがみ', romaji: 'tegami', meaning: '信', pos: '名詞' },
      { jp: '送ります', kana: 'おくります', romaji: 'okurimasu', meaning: '寄送', pos: '動詞I' },
      { jp: '妹', kana: 'いもうと', romaji: 'imouto', meaning: '妹妹', pos: '名詞' },
      { jp: '描きます', kana: 'かきます', romaji: 'kakimasu', meaning: '画（画）', pos: '動詞I' },
      { jp: 'お菓子', kana: 'おかし', romaji: 'o-kashi', meaning: '点心', pos: '名詞' },
      { jp: '応援します', kana: 'おうえんします', romaji: 'ouen shimasu', meaning: '支持；声援', pos: '動詞III' },
      { jp: '感謝します', kana: 'かんしゃします', romaji: 'kansha shimasu', meaning: '感谢', pos: '動詞III' },
      { jp: '離れます', kana: 'はなれます', romaji: 'hanaremasu', meaning: '分离', pos: '動詞II' },
      { jp: 'プレゼント', kana: 'プレゼント', romaji: 'purezento', meaning: '礼物', pos: '名詞' },
      { jp: '選びます', kana: 'えらびます', romaji: 'erabimasu', meaning: '选择', pos: '動詞I' },
      { jp: '嬉しい', kana: 'うれしい', romaji: 'ureshii', meaning: '高兴的', pos: 'い形容詞' },
      { jp: '気に入ります', kana: 'きにいります', romaji: 'ki ni irimasu', meaning: '喜欢；中意', pos: '慣用句' },
    ],
    grammar: [
      {
        pattern: 'N₁ は N₂ に N₃ を あげる',
        name: 'あげる（我→对方／第三者→第三者）',
        explain: '"给"。视角是给予者站在「我方」一侧。能用于：我→别人 / 我方人→外人 / 第三者→第三者。不能用于「对方→我」。对长辈或上司必须用敬语「さしあげる」。「あげる」是動詞II。',
        examples: [
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>は<ruby>友達<rt>ともだち</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>をあげました。',
            plain: 'わたしはともだちにほんをあげました。',
            cn: '我送了朋友书。',
          },
          {
            jp: '<ruby>母<rt>はは</rt></ruby>は<ruby>妹<rt>いもうと</rt></ruby>にお<ruby>菓子<rt>かし</rt></ruby>をあげました。',
            plain: 'はははいもうとにおかしをあげました。',
            cn: '妈妈送了妹妹点心。',
          },
        ],
      },
      {
        pattern: 'N₁ は N₂ に／から N₃ を もらう',
        name: 'もらう（我方收到）',
        explain: '"从…得到"。视角是接受者，主语是「内方」(我或我方人)。给予者用「に」或「から」标记(「から」更明确表示来源)。「もらう」是動詞I。「いただく」是「もらう」的谦让语。',
        examples: [
          {
            jp: '<ruby>友達<rt>ともだち</rt></ruby>から<ruby>手紙<rt>てがみ</rt></ruby>をもらいました。',
            plain: 'ともだちからてがみをもらいました。',
            cn: '从朋友那里收到了信。',
          },
        ],
      },
      {
        pattern: 'N₁ は N₂ に N₃ を くれる',
        name: 'くれる（外方→我方）',
        explain: '"（别人）给我"。视角与「あげる」相反：必须是「外方」给「内方」。主语是给予者(对方)，「に」后是接受者(我或我方人)。如果对方是「我」，「私に」常省略。「くれる」是動詞II。「くださる」是敬语形式。',
        examples: [
          {
            jp: '<ruby>友達<rt>ともだち</rt></ruby>が<ruby>誕生日<rt>たんじょうび</rt></ruby>プレゼントをくれました。',
            plain: 'ともだちがたんじょうびプレゼントをくれました。',
            cn: '朋友送给我生日礼物。',
          },
        ],
      },
      {
        pattern: 'V て + あげる／もらう／くれる',
        name: '恩惠表达（动作的授受）',
        explain: '动词て形 + 授受动词，表示动作的恩惠方向。「〜てあげる」(我为别人做)、「〜てもらう」(请别人为我做/获得别人做的好处)、「〜てくれる」(别人为我做)。「〜てあげる」对地位高者会显得不礼貌(暗示"我有恩于你")，对长辈用「〜てさしあげる」或不用授受形式。',
        examples: [
          {
            jp: '<ruby>友達<rt>ともだち</rt></ruby>が<ruby>宿題<rt>しゅくだい</rt></ruby>を<ruby>手伝<rt>てつだ</rt></ruby>ってくれました。',
            plain: 'ともだちがしゅくだいをてつだってくれました。',
            cn: '朋友帮我做了作业。',
          },
          {
            jp: '<ruby>母<rt>はは</rt></ruby>に<ruby>料理<rt>りょうり</rt></ruby>を<ruby>作<rt>つく</rt></ruby>ってもらいました。',
            plain: 'ははにりょうりをつくってもらいました。',
            cn: '请妈妈做了菜（妈妈给我做菜）。',
          },
        ],
      },
      {
        pattern: '内・外 视角',
        name: '日语「内／外」视角',
        explain: '日语授受动词体现「内」(自己一方：自己、家人、亲友、本公司)与「外」(别人一方)的区分。「あげる」=内→外；「くれる」=外→内；「もらう」=内方接收。说自家事(家人之间)以「我」为最内层，把家人当外方来描述：「母が妹にお菓子をくれました」(妈妈给妹妹点心，相对妹妹我视妹妹为内)是错的，应说「あげました」。',
        examples: [
          {
            jp: '<ruby>父<rt>ちち</rt></ruby>が<ruby>私<rt>わたし</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>をくれました。',
            plain: 'ちちがわたしにほんをくれました。',
            cn: '爸爸给了我书。（外→内：用くれる）',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 18 課 — 条件 ①
  // ========================================================
  {
    id: 18,
    level: 'N4',
    title: {
      jp: '条件 ①',
      romaji: 'jouken (1)',
      cn: '条件 ①',
      en: 'Conditionals (1)',
    },
    goals: [
      '掌握「〜たら」表达假设和确定条件',
      '掌握「〜と」表达必然结果',
      '理解「と」与「たら」的使用差异',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '天気が良かったら',
          romaji: 'tenki ga yokattara',
          cn: '如果天气好',
        },
        sentences: [
          {
            jp: '<ruby>来週<rt>らいしゅう</rt></ruby>の<ruby>土曜日<rt>どようび</rt></ruby>、<ruby>家族<rt>かぞく</rt></ruby>でピクニックに<ruby>行<rt>い</rt></ruby>く<ruby>予定<rt>よてい</rt></ruby>です。',
            plain: 'らいしゅうのどようび、かぞくでピクニックにいくよていです。',
            romaji: 'raishuu no doyoubi, kazoku de pikunikku ni iku yotei desu.',
            cn: '下周六打算和家人去野餐。',
          },
          {
            jp: '<ruby>天気<rt>てんき</rt></ruby>が<ruby>良<rt>よ</rt></ruby>かったら、<ruby>公園<rt>こうえん</rt></ruby>でお<ruby>弁当<rt>べんとう</rt></ruby>を<ruby>食<rt>た</rt></ruby>べます。',
            plain: 'てんきがよかったら、こうえんでおべんとうをたべます。',
            romaji: 'tenki ga yokattara, kouen de o-bentou o tabemasu.',
            cn: '如果天气好，就在公园吃便当。',
          },
          {
            jp: '<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>ったら、<ruby>家<rt>いえ</rt></ruby>で<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。',
            plain: 'あめがふったら、いえでえいがをみます。',
            romaji: 'ame ga futtara, ie de eiga o mimasu.',
            cn: '如果下雨，就在家里看电影。',
          },
          {
            jp: '<ruby>朝<rt>あさ</rt></ruby><ruby>早<rt>はや</rt></ruby>く<ruby>起<rt>お</rt></ruby>きたら、<ruby>近<rt>ちか</rt></ruby>くの<ruby>山<rt>やま</rt></ruby>へ<ruby>登<rt>のぼ</rt></ruby>りたいです。',
            plain: 'あさはやくおきたら、ちかくのやまへのぼりたいです。',
            romaji: 'asa hayaku okitara, chikaku no yama e noboritai desu.',
            cn: '如果早起，想去附近的山爬山。',
          },
          {
            jp: '<ruby>子供<rt>こども</rt></ruby>たちは<ruby>外<rt>そと</rt></ruby>で<ruby>遊<rt>あそ</rt></ruby>びたがっています。',
            plain: 'こどもたちはそとであそびたがっています。',
            romaji: 'kodomo-tachi wa soto de asobitagatte imasu.',
            cn: '孩子们想去外面玩。',
          },
          {
            jp: '<ruby>準備<rt>じゅんび</rt></ruby>が<ruby>終<rt>お</rt></ruby>わったら、すぐに<ruby>出発<rt>しゅっぱつ</rt></ruby>します。',
            plain: 'じゅんびがおわったら、すぐにしゅっぱつします。',
            romaji: 'junbi ga owattara, sugu ni shuppatsu shimasu.',
            cn: '准备好后就立刻出发。',
          },
          {
            jp: '<ruby>公園<rt>こうえん</rt></ruby>に<ruby>着<rt>つ</rt></ruby>いたら、まず<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>探<rt>さが</rt></ruby>します。',
            plain: 'こうえんについたら、まずばしょをさがします。',
            romaji: 'kouen ni tsuitara, mazu basho o sagashimasu.',
            cn: '到公园后先找地方。',
          },
          {
            jp: '<ruby>楽<rt>たの</rt></ruby>しい<ruby>一日<rt>いちにち</rt></ruby>になることを<ruby>願<rt>ねが</rt></ruby>っています。',
            plain: 'たのしいいちにちになることをねがっています。',
            romaji: 'tanoshii ichinichi ni naru koto o negatte imasu.',
            cn: '希望是开心的一天。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: 'このボタンを押すと',
          romaji: 'kono botan o osu to',
          cn: '按下这个按钮',
        },
        sentences: [
          {
            jp: 'これは<ruby>新<rt>あたら</rt></ruby>しい<ruby>洗濯機<rt>せんたくき</rt></ruby>の<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>の<ruby>説明<rt>せつめい</rt></ruby>です。',
            plain: 'これはあたらしいせんたくきのつかいかたのせつめいです。',
            romaji: 'kore wa atarashii sentakuki no tsukaikata no setsumei desu.',
            cn: '这是新洗衣机使用方法的说明。',
          },
          {
            jp: 'このボタンを<ruby>押<rt>お</rt></ruby>すと、<ruby>電源<rt>でんげん</rt></ruby>が<ruby>入<rt>はい</rt></ruby>ります。',
            plain: 'このボタンをおすと、でんげんがはいります。',
            romaji: 'kono botan o osu to, dengen ga hairimasu.',
            cn: '按下这个按钮，电源就会打开。',
          },
          {
            jp: '<ruby>右<rt>みぎ</rt></ruby>に<ruby>回<rt>まわ</rt></ruby>すと、<ruby>水<rt>みず</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>が<ruby>多<rt>おお</rt></ruby>くなります。',
            plain: 'みぎにまわすと、みずのりょうがおおくなります。',
            romaji: 'migi ni mawasu to, mizu no ryou ga ooku narimasu.',
            cn: '向右转，水量就会变多。',
          },
          {
            jp: '<ruby>緑<rt>みどり</rt></ruby>のランプがつくと、スタートできます。',
            plain: 'みどりのランプがつくと、スタートできます。',
            romaji: 'midori no ranpu ga tsuku to, sutaato dekimasu.',
            cn: '绿灯亮起，就可以启动。',
          },
          {
            jp: '<ruby>音<rt>おと</rt></ruby>が<ruby>鳴<rt>な</rt></ruby>ると、<ruby>洗濯<rt>せんたく</rt></ruby>が<ruby>終<rt>お</rt></ruby>わったという<ruby>意味<rt>いみ</rt></ruby>です。',
            plain: 'おとがなると、せんたくがおわったといういみです。',
            romaji: 'oto ga naru to, sentaku ga owatta to iu imi desu.',
            cn: '响起声音，就表示洗完了。',
          },
          {
            jp: '<ruby>春<rt>はる</rt></ruby>になると、<ruby>桜<rt>さくら</rt></ruby>が<ruby>咲<rt>さ</rt></ruby>きます。<ruby>自然<rt>しぜん</rt></ruby>も<ruby>同<rt>おな</rt></ruby>じです。',
            plain: 'はるになると、さくらがさきます。しぜんもおなじです。',
            romaji: 'haru ni naru to, sakura ga sakimasu. shizen mo onaji desu.',
            cn: '一到春天，樱花就开。自然界也是一样。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '友達と週末の予定を相談している。',
        cn: '在和朋友商量周末的安排。',
      },
      lines: [
        {
          speaker: '<ruby>佐藤<rt>さとう</rt></ruby>',
          jp: '<ruby>週末<rt>しゅうまつ</rt></ruby>、どうしますか。',
          plain: 'しゅうまつ、どうしますか。',
          romaji: 'shuumatsu, dou shimasu ka.',
          cn: '周末怎么办？',
        },
        {
          speaker: '<ruby>田中<rt>たなか</rt></ruby>',
          jp: '<ruby>天気<rt>てんき</rt></ruby>が<ruby>良<rt>よ</rt></ruby>かったら、<ruby>海<rt>うみ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きませんか。',
          plain: 'てんきがよかったら、うみへいきませんか。',
          romaji: 'tenki ga yokattara, umi e ikimasen ka.',
          cn: '如果天气好，要不要去海边？',
        },
        {
          speaker: '<ruby>佐藤<rt>さとう</rt></ruby>',
          jp: 'いいですね。<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>ったらどうしますか。',
          plain: 'いいですね。あめがふったらどうしますか。',
          romaji: 'ii desu ne. ame ga futtara dou shimasu ka.',
          cn: '好啊。下雨的话怎么办？',
        },
        {
          speaker: '<ruby>田中<rt>たなか</rt></ruby>',
          jp: '<ruby>雨<rt>あめ</rt></ruby>だったら、<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>に<ruby>行<rt>い</rt></ruby>きましょう。',
          plain: 'あめだったら、えいがをみにいきましょう。',
          romaji: 'ame dattara, eiga o mi ni ikimashou.',
          cn: '下雨的话，就去看电影吧。',
        },
        {
          speaker: '<ruby>佐藤<rt>さとう</rt></ruby>',
          jp: 'じゃあ、<ruby>金曜日<rt>きんようび</rt></ruby>になったら<ruby>連絡<rt>れんらく</rt></ruby>してください。',
          plain: 'じゃあ、きんようびになったられんらくしてください。',
          romaji: 'jaa, kinyoubi ni nattara renraku shite kudasai.',
          cn: '那等到周五请联系我。',
        },
        {
          speaker: '<ruby>田中<rt>たなか</rt></ruby>',
          jp: 'はい、<ruby>分<rt>わ</rt></ruby>かりました。<ruby>楽<rt>たの</rt></ruby>しみにしています。',
          plain: 'はい、わかりました。たのしみにしています。',
          romaji: 'hai, wakarimashita. tanoshimi ni shite imasu.',
          cn: '好的，明白了。期待着。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>天気<rt>てんき</rt></ruby>が<ruby>良<rt>よ</rt></ruby>かったら、<ruby>家族<rt>かぞく</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしますか。',
          plain: 'てんきがよかったら、かぞくはなにをしますか。',
          romaji: 'tenki ga yokattara, kazoku wa nani o shimasu ka.',
          cn: '天气好的话，家人会做什么？',
        },
        a: {
          jp: '<ruby>公園<rt>こうえん</rt></ruby>でお<ruby>弁当<rt>べんとう</rt></ruby>を<ruby>食<rt>た</rt></ruby>べます。',
          plain: 'こうえんでおべんとうをたべます。',
          romaji: 'kouen de o-bentou o tabemasu.',
          cn: '在公园吃便当。',
        },
      },
      {
        q: {
          jp: 'ボタンを<ruby>押<rt>お</rt></ruby>すとどうなりますか。',
          plain: 'ボタンをおすとどうなりますか。',
          romaji: 'botan o osu to dou narimasu ka.',
          cn: '按下按钮会怎样？',
        },
        a: {
          jp: '<ruby>電源<rt>でんげん</rt></ruby>が<ruby>入<rt>はい</rt></ruby>ります。',
          plain: 'でんげんがはいります。',
          romaji: 'dengen ga hairimasu.',
          cn: '电源会打开。',
        },
        hint: '「〜と」表示必然结果。',
      },
      {
        q: {
          jp: '<ruby>春<rt>はる</rt></ruby>になると<ruby>何<rt>なに</rt></ruby>が<ruby>咲<rt>さ</rt></ruby>きますか。',
          plain: 'はるになるとなにがさきますか。',
          romaji: 'haru ni naru to nani ga sakimasu ka.',
          cn: '一到春天什么花会开？',
        },
        a: {
          jp: '<ruby>桜<rt>さくら</rt></ruby>が<ruby>咲<rt>さ</rt></ruby>きます。',
          plain: 'さくらがさきます。',
          romaji: 'sakura ga sakimasu.',
          cn: '樱花会开。',
        },
      },
      {
        q: {
          jp: '<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>ったら、<ruby>田中<rt>たなか</rt></ruby>さんと<ruby>佐藤<rt>さとう</rt></ruby>さんは<ruby>何<rt>なに</rt></ruby>をしますか。',
          plain: 'あめがふったら、たなかさんとさとうさんはなにをしますか。',
          romaji: 'ame ga futtara, Tanaka-san to Satou-san wa nani o shimasu ka.',
          cn: '下雨的话，田中和佐藤会做什么？',
        },
        a: {
          jp: '<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます。',
          plain: 'えいがをみにいきます。',
          romaji: 'eiga o mi ni ikimasu.',
          cn: '去看电影。',
        },
      },
    ],
    vocabulary: [
      { jp: '条件', kana: 'じょうけん', romaji: 'jouken', meaning: '条件', pos: '名詞' },
      { jp: 'ピクニック', kana: 'ピクニック', romaji: 'pikunikku', meaning: '野餐', pos: '名詞' },
      { jp: '予定', kana: 'よてい', romaji: 'yotei', meaning: '预定；计划', pos: '名詞' },
      { jp: '天気', kana: 'てんき', romaji: 'tenki', meaning: '天气', pos: '名詞' },
      { jp: 'お弁当', kana: 'おべんとう', romaji: 'o-bentou', meaning: '便当', pos: '名詞' },
      { jp: '映画', kana: 'えいが', romaji: 'eiga', meaning: '电影', pos: '名詞' },
      { jp: '登ります', kana: 'のぼります', romaji: 'noborimasu', meaning: '攀登', pos: '動詞I' },
      { jp: '遊びます', kana: 'あそびます', romaji: 'asobimasu', meaning: '玩', pos: '動詞I' },
      { jp: '準備', kana: 'じゅんび', romaji: 'junbi', meaning: '准备', pos: '名詞' },
      { jp: '終わります', kana: 'おわります', romaji: 'owarimasu', meaning: '结束', pos: '動詞I' },
      { jp: '出発します', kana: 'しゅっぱつします', romaji: 'shuppatsu shimasu', meaning: '出发', pos: '動詞III' },
      { jp: '着きます', kana: 'つきます', romaji: 'tsukimasu', meaning: '到达', pos: '動詞I' },
      { jp: '探します', kana: 'さがします', romaji: 'sagashimasu', meaning: '寻找', pos: '動詞I' },
      { jp: '願います', kana: 'ねがいます', romaji: 'negaimasu', meaning: '希望', pos: '動詞I' },
      { jp: '洗濯機', kana: 'せんたくき', romaji: 'sentakuki', meaning: '洗衣机', pos: '名詞' },
      { jp: '説明', kana: 'せつめい', romaji: 'setsumei', meaning: '说明', pos: '名詞' },
      { jp: 'ボタン', kana: 'ボタン', romaji: 'botan', meaning: '按钮', pos: '名詞' },
      { jp: '電源', kana: 'でんげん', romaji: 'dengen', meaning: '电源', pos: '名詞' },
      { jp: '回します', kana: 'まわします', romaji: 'mawashimasu', meaning: '转动', pos: '動詞I' },
      { jp: '量', kana: 'りょう', romaji: 'ryou', meaning: '量', pos: '名詞' },
      { jp: 'ランプ', kana: 'ランプ', romaji: 'ranpu', meaning: '灯', pos: '名詞' },
      { jp: '鳴ります', kana: 'なります', romaji: 'narimasu', meaning: '响', pos: '動詞I' },
      { jp: '意味', kana: 'いみ', romaji: 'imi', meaning: '意思；意义', pos: '名詞' },
      { jp: '春', kana: 'はる', romaji: 'haru', meaning: '春天', pos: '名詞' },
      { jp: '桜', kana: 'さくら', romaji: 'sakura', meaning: '樱花', pos: '名詞' },
      { jp: '咲きます', kana: 'さきます', romaji: 'sakimasu', meaning: '开（花）', pos: '動詞I' },
      { jp: '自然', kana: 'しぜん', romaji: 'shizen', meaning: '自然', pos: '名詞' },
      { jp: '海', kana: 'うみ', romaji: 'umi', meaning: '海', pos: '名詞' },
      { jp: '連絡します', kana: 'れんらくします', romaji: 'renraku shimasu', meaning: '联系', pos: '動詞III' },
      { jp: '楽しみ', kana: 'たのしみ', romaji: 'tanoshimi', meaning: '期待', pos: '名詞' },
    ],
    grammar: [
      {
        pattern: 'V た形 + ら、〜',
        name: '〜たら（假设/确定条件，最常用）',
        explain: '"如果...就..."。最广泛的条件表达。接续：动词た形/形容词た形/名词だった + ら。可表假设(雨が降ったら=如果下雨)、确定(春になったら=到了春天)、过去发现(家へ帰ったら、誰もいなかった=回到家发现没人)。后句可以接意志、命令、请求、推测，限制最少。',
        examples: [
          {
            jp: 'お<ruby>金<rt>かね</rt></ruby>があったら、<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>きたいです。',
            plain: 'おかねがあったら、りょこうにいきたいです。',
            cn: '如果有钱，想去旅行。',
          },
          {
            jp: '<ruby>家<rt>いえ</rt></ruby>に<ruby>着<rt>つ</rt></ruby>いたら、<ruby>電話<rt>でんわ</rt></ruby>してください。',
            plain: 'いえについたら、でんわしてください。',
            cn: '到家后请打电话。',
          },
        ],
      },
      {
        pattern: 'V 辞書形 + と、〜',
        name: '〜と（必然结果）',
        explain: '"一...就..."。表示必然性的因果关系：自然现象、机器操作、地理路径、习惯。接续：动词辞书形/ない形/名词だ + と。【重要限制】后句不能用意志、命令、请求、邀请(意志/命令/依頼/勧誘)。错误：×春になると、旅行に行きましょう。「と」更书面，常出现在说明书、规则中。',
        examples: [
          {
            jp: 'このボタンを<ruby>押<rt>お</rt></ruby>すと、<ruby>水<rt>みず</rt></ruby>が<ruby>出<rt>で</rt></ruby>ます。',
            plain: 'このボタンをおすと、みずがでます。',
            cn: '按下这个按钮，水就出来。',
          },
          {
            jp: '<ruby>夜<rt>よる</rt></ruby>になると、<ruby>暗<rt>くら</rt></ruby>くなります。',
            plain: 'よるになると、くらくなります。',
            cn: '一到晚上就变暗。',
          },
        ],
      },
      {
        pattern: 'い形容词 かったら / な形容词・N だったら',
        name: '形容词・名词的たら形',
        explain: 'い形容词：去い + かったら（高い→高かったら）。な形容词：词干 + だったら（静か→静かだったら）。名詞：N + だったら（雨→雨だったら）。否定：〜なかったら（动词・い形）/〜じゃなかったら（な形・名）。',
        examples: [
          {
            jp: '<ruby>暑<rt>あつ</rt></ruby>かったら、エアコンをつけてください。',
            plain: 'あつかったら、エアコンをつけてください。',
            cn: '如果热，请开空调。',
          },
          {
            jp: '<ruby>暇<rt>ひま</rt></ruby>だったら、<ruby>遊<rt>あそ</rt></ruby>びに<ruby>来<rt>き</rt></ruby>てください。',
            plain: 'ひまだったら、あそびにきてください。',
            cn: '有空的话请来玩。',
          },
        ],
      },
      {
        pattern: 'たら vs と 区别',
        name: 'たら 与 と 的对比',
        explain: '【たら】可以是假设(あした雨が降ったら…)、确定(三時になったら出発します)，后句限制少。【と】只表必然性结果，后句不能用意志/命令/邀请。区分诀窍：能换成「自然就会...」的用「と」(機械操作・自然現象)；其他大多用「たら」更安全。',
        examples: [
          {
            jp: '○ <ruby>春<rt>はる</rt></ruby>になると<ruby>桜<rt>さくら</rt></ruby>が<ruby>咲<rt>さ</rt></ruby>きます。',
            plain: 'はるになるとさくらがさきます。',
            cn: '一到春天樱花就开。（自然现象，用と自然）',
          },
          {
            jp: '○ <ruby>春<rt>はる</rt></ruby>になったら<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>きましょう。',
            plain: 'はるになったらりょこうにいきましょう。',
            cn: '到了春天去旅行吧。（含意志/邀请，必须用たら）',
          },
        ],
      },
      {
        pattern: 'V たがる',
        name: '第三人称的愿望',
        explain: '"...想要..."(描述他人愿望)。「〜たい」描述自己的愿望，描述第三人称必须用「〜たがる」。常用「〜たがっている」(状态)。「〜たい」是い形容词活用，「〜たがる」是動詞I活用。',
        examples: [
          {
            jp: '<ruby>子供<rt>こども</rt></ruby>はお<ruby>菓子<rt>かし</rt></ruby>を<ruby>食<rt>た</rt></ruby>べたがっています。',
            plain: 'こどもはおかしをたべたがっています。',
            cn: '孩子想吃点心。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 19 課 — 条件 ②
  // ========================================================
  {
    id: 19,
    level: 'N4',
    title: {
      jp: '条件 ②',
      romaji: 'jouken (2)',
      cn: '条件 ②',
      en: 'Conditionals (2)',
    },
    goals: [
      '掌握「〜ば」表达一般条件',
      '掌握「〜なら」接对方话题',
      '能区分 たら／と／ば／なら 四种条件',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: 'もし時間があれば',
          romaji: 'moshi jikan ga areba',
          cn: '如果有时间',
        },
        sentences: [
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>は<ruby>毎日<rt>まいにち</rt></ruby><ruby>仕事<rt>しごと</rt></ruby>でとても<ruby>忙<rt>いそが</rt></ruby>しいです。',
            plain: 'わたしはまいにちしごとでとてもいそがしいです。',
            romaji: 'watashi wa mainichi shigoto de totemo isogashii desu.',
            cn: '我每天工作很忙。',
          },
          {
            jp: 'もし<ruby>時間<rt>じかん</rt></ruby>があれば、いろいろなことをやってみたいです。',
            plain: 'もしじかんがあれば、いろいろなことをやってみたいです。',
            romaji: 'moshi jikan ga areba, iroirona koto o yatte mitai desu.',
            cn: '如果有时间，想试着做各种各样的事。',
          },
          {
            jp: 'まず、<ruby>外国語<rt>がいこくご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>すれば、<ruby>世界<rt>せかい</rt></ruby>がもっと<ruby>広<rt>ひろ</rt></ruby>くなります。',
            plain: 'まず、がいこくごをべんきょうすれば、せかいがもっとひろくなります。',
            romaji: 'mazu, gaikokugo o benkyou sureba, sekai ga motto hiroku narimasu.',
            cn: '首先，学外语就能让世界更宽广。',
          },
          {
            jp: '<ruby>毎日<rt>まいにち</rt></ruby><ruby>少<rt>すこ</rt></ruby>しずつ<ruby>練習<rt>れんしゅう</rt></ruby>すれば、きっと<ruby>上手<rt>じょうず</rt></ruby>になります。',
            plain: 'まいにちすこしずつれんしゅうすれば、きっとじょうずになります。',
            romaji: 'mainichi sukoshi zutsu renshuu sureba, kitto jouzu ni narimasu.',
            cn: '如果每天一点点练习，一定会变得擅长。',
          },
          {
            jp: 'お<ruby>金<rt>かね</rt></ruby>があれば、<ruby>世界中<rt>せかいじゅう</rt></ruby>を<ruby>旅<rt>たび</rt></ruby>したいです。',
            plain: 'おかねがあれば、せかいじゅうをたびしたいです。',
            romaji: 'o-kane ga areba, sekaijuu o tabi shitai desu.',
            cn: '如果有钱，想环游世界。',
          },
          {
            jp: '<ruby>体<rt>からだ</rt></ruby>が<ruby>丈夫<rt>じょうぶ</rt></ruby>であれば、<ruby>山登<rt>やまのぼ</rt></ruby>りも<ruby>挑戦<rt>ちょうせん</rt></ruby>してみたいです。',
            plain: 'からだがじょうぶであれば、やまのぼりもちょうせんしてみたいです。',
            romaji: 'karada ga joubu de areba, yamanobori mo chousen shite mitai desu.',
            cn: '如果身体健壮，也想挑战登山。',
          },
          {
            jp: '<ruby>天気<rt>てんき</rt></ruby>が<ruby>良<rt>よ</rt></ruby>ければ、<ruby>毎週<rt>まいしゅう</rt></ruby><ruby>散歩<rt>さんぽ</rt></ruby>をしたいです。',
            plain: 'てんきがよければ、まいしゅうさんぽをしたいです。',
            romaji: 'tenki ga yokereba, maishuu sanpo o shitai desu.',
            cn: '天气好的话，想每周散步。',
          },
          {
            jp: '<ruby>夢<rt>ゆめ</rt></ruby>はたくさんありますが、<ruby>少<rt>すこ</rt></ruby>しずつ<ruby>実現<rt>じつげん</rt></ruby>していきたいと<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'ゆめはたくさんありますが、すこしずつじつげんしていきたいとおもいます。',
            romaji: 'yume wa takusan arimasu ga, sukoshi zutsu jitsugen shite ikitai to omoimasu.',
            cn: '梦想有很多，想一点点实现它。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '東京へ行くなら',
          romaji: 'Toukyou e iku nara',
          cn: '要去东京的话',
        },
        sentences: [
          {
            jp: '<ruby>友達<rt>ともだち</rt></ruby>から<ruby>東京<rt>とうきょう</rt></ruby>のおすすめを<ruby>聞<rt>き</rt></ruby>かれました。',
            plain: 'ともだちからとうきょうのおすすめをきかれました。',
            romaji: 'tomodachi kara Toukyou no osusume o kikaremashita.',
            cn: '被朋友问东京的推荐。',
          },
          {
            jp: '<ruby>東京<rt>とうきょう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くなら、<ruby>浅草<rt>あさくさ</rt></ruby>がおすすめです。',
            plain: 'とうきょうへいくなら、あさくさがおすすめです。',
            romaji: 'Toukyou e iku nara, Asakusa ga osusume desu.',
            cn: '要去东京的话，推荐浅草。',
          },
          {
            jp: '<ruby>古<rt>ふる</rt></ruby>い<ruby>町<rt>まち</rt></ruby>を<ruby>見<rt>み</rt></ruby>たいなら、<ruby>谷中<rt>やなか</rt></ruby>もいいですよ。',
            plain: 'ふるいまちをみたいなら、やなかもいいですよ。',
            romaji: 'furui machi o mitai nara, Yanaka mo ii desu yo.',
            cn: '想看古老的街道，谷中也不错。',
          },
          {
            jp: 'おしゃれな<ruby>店<rt>みせ</rt></ruby>なら、<ruby>表参道<rt>おもてさんどう</rt></ruby>がいいです。',
            plain: 'おしゃれなみせなら、おもてさんどうがいいです。',
            romaji: 'oshare na mise nara, Omotesandou ga ii desu.',
            cn: '时尚的店的话，表参道很好。',
          },
          {
            jp: '<ruby>美味<rt>おい</rt></ruby>しい<ruby>寿司<rt>すし</rt></ruby>を<ruby>食<rt>た</rt></ruby>べたいなら、<ruby>築地<rt>つきじ</rt></ruby>がいいでしょう。',
            plain: 'おいしいすしをたべたいなら、つきじがいいでしょう。',
            romaji: 'oishii sushi o tabetai nara, Tsukiji ga ii deshou.',
            cn: '想吃好吃的寿司，筑地不错。',
          },
          {
            jp: '<ruby>夜<rt>よる</rt></ruby>の<ruby>景色<rt>けしき</rt></ruby>がきれいなのは、<ruby>東京<rt>とうきょう</rt></ruby>タワーです。',
            plain: 'よるのけしきがきれいなのは、とうきょうタワーです。',
            romaji: 'yoru no keshiki ga kirei na no wa, Toukyou-tawaa desu.',
            cn: '夜景漂亮的是东京塔。',
          },
          {
            jp: '<ruby>困<rt>こま</rt></ruby>ったら、<ruby>駅<rt>えき</rt></ruby>の<ruby>案内所<rt>あんないじょ</rt></ruby>に<ruby>聞<rt>き</rt></ruby>いてください。',
            plain: 'こまったら、えきのあんないじょにきいてください。',
            romaji: 'komattara, eki no annaijo ni kiite kudasai.',
            cn: '有困难的话，请去车站的咨询处问。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '友達が旅行の相談をしている。',
        cn: '朋友来咨询旅行。',
      },
      lines: [
        {
          speaker: '<ruby>李<rt>リー</rt></ruby>',
          jp: '<ruby>来月<rt>らいげつ</rt></ruby>、<ruby>京都<rt>きょうと</rt></ruby>へ<ruby>行<rt>い</rt></ruby>こうと<ruby>思<rt>おも</rt></ruby>っています。',
          plain: 'らいげつ、きょうとへいこうとおもっています。',
          romaji: 'raigetsu, Kyouto e ikou to omotteimasu.',
          cn: '下个月想去京都。',
        },
        {
          speaker: '<ruby>田中<rt>たなか</rt></ruby>',
          jp: '<ruby>京都<rt>きょうと</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くなら、<ruby>春<rt>はる</rt></ruby>か<ruby>秋<rt>あき</rt></ruby>がいいですよ。',
          plain: 'きょうとへいくなら、はるかあきがいいですよ。',
          romaji: 'Kyouto e iku nara, haru ka aki ga ii desu yo.',
          cn: '要去京都的话，春天或秋天最好。',
        },
        {
          speaker: '<ruby>李<rt>リー</rt></ruby>',
          jp: 'お<ruby>寺<rt>てら</rt></ruby>を<ruby>見<rt>み</rt></ruby>たいんですが、どこがいいですか。',
          plain: 'おてらをみたいんですが、どこがいいですか。',
          romaji: 'o-tera o mitai n desu ga, doko ga ii desu ka.',
          cn: '我想看寺庙，哪里好？',
        },
        {
          speaker: '<ruby>田中<rt>たなか</rt></ruby>',
          jp: 'お<ruby>寺<rt>てら</rt></ruby>なら、<ruby>清水寺<rt>きよみずでら</rt></ruby>が<ruby>有名<rt>ゆうめい</rt></ruby>です。<ruby>朝<rt>あさ</rt></ruby><ruby>早<rt>はや</rt></ruby>く<ruby>行<rt>い</rt></ruby>けば、<ruby>人<rt>ひと</rt></ruby>が<ruby>少<rt>すく</rt></ruby>ないです。',
          plain: 'おてらなら、きよみずでらがゆうめいです。あさはやくいけば、ひとがすくないです。',
          romaji: 'o-tera nara, Kiyomizudera ga yuumei desu. asa hayaku ikeba, hito ga sukunai desu.',
          cn: '寺庙的话，清水寺有名。早起去的话人少。',
        },
        {
          speaker: '<ruby>李<rt>リー</rt></ruby>',
          jp: 'なるほど。<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>はどうですか。',
          plain: 'なるほど。たべものはどうですか。',
          romaji: 'naruhodo. tabemono wa dou desu ka.',
          cn: '原来如此。食物呢？',
        },
        {
          speaker: '<ruby>田中<rt>たなか</rt></ruby>',
          jp: '<ruby>京都<rt>きょうと</rt></ruby>なら、<ruby>湯豆腐<rt>ゆどうふ</rt></ruby>と<ruby>抹茶<rt>まっちゃ</rt></ruby>のスイーツがおすすめです。',
          plain: 'きょうとなら、ゆどうふとまっちゃのスイーツがおすすめです。',
          romaji: 'Kyouto nara, yudoufu to maccha no suiitsu ga osusume desu.',
          cn: '京都的话，推荐汤豆腐和抹茶甜品。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>筆者<rt>ひっしゃ</rt></ruby>はお<ruby>金<rt>かね</rt></ruby>があれば<ruby>何<rt>なに</rt></ruby>をしたいですか。',
          plain: 'ひっしゃはおかねがあればなにをしたいですか。',
          romaji: 'hissha wa o-kane ga areba nani o shitai desu ka.',
          cn: '作者如果有钱想做什么？',
        },
        a: {
          jp: '<ruby>世界中<rt>せかいじゅう</rt></ruby>を<ruby>旅<rt>たび</rt></ruby>したいです。',
          plain: 'せかいじゅうをたびしたいです。',
          romaji: 'sekaijuu o tabi shitai desu.',
          cn: '想环游世界。',
        },
      },
      {
        q: {
          jp: '<ruby>東京<rt>とうきょう</rt></ruby>でおしゃれな<ruby>店<rt>みせ</rt></ruby>を<ruby>探<rt>さが</rt></ruby>すなら、どこがいいですか。',
          plain: 'とうきょうでおしゃれなみせをさがすなら、どこがいいですか。',
          romaji: 'Toukyou de oshare na mise o sagasu nara, doko ga ii desu ka.',
          cn: '在东京找时尚的店的话，哪里好？',
        },
        a: {
          jp: '<ruby>表参道<rt>おもてさんどう</rt></ruby>がいいです。',
          plain: 'おもてさんどうがいいです。',
          romaji: 'Omotesandou ga ii desu.',
          cn: '表参道不错。',
        },
        hint: '注意「〜なら」接收对方话题。',
      },
      {
        q: {
          jp: '<ruby>清水寺<rt>きよみずでら</rt></ruby>は<ruby>朝<rt>あさ</rt></ruby><ruby>早<rt>はや</rt></ruby>く<ruby>行<rt>い</rt></ruby>けば、どうですか。',
          plain: 'きよみずでらはあさはやくいけば、どうですか。',
          romaji: 'Kiyomizudera wa asa hayaku ikeba, dou desu ka.',
          cn: '清水寺早起去的话怎么样？',
        },
        a: {
          jp: '<ruby>人<rt>ひと</rt></ruby>が<ruby>少<rt>すく</rt></ruby>ないです。',
          plain: 'ひとがすくないです。',
          romaji: 'hito ga sukunai desu.',
          cn: '人少。',
        },
      },
      {
        q: {
          jp: '<ruby>京都<rt>きょうと</rt></ruby>の<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>のおすすめは<ruby>何<rt>なに</rt></ruby>ですか。',
          plain: 'きょうとのたべもののおすすめはなにですか。',
          romaji: 'Kyouto no tabemono no osusume wa nan desu ka.',
          cn: '京都的食物推荐是什么？',
        },
        a: {
          jp: '<ruby>湯豆腐<rt>ゆどうふ</rt></ruby>と<ruby>抹茶<rt>まっちゃ</rt></ruby>のスイーツです。',
          plain: 'ゆどうふとまっちゃのスイーツです。',
          romaji: 'yudoufu to maccha no suiitsu desu.',
          cn: '汤豆腐和抹茶甜品。',
        },
      },
    ],
    vocabulary: [
      { jp: '忙しい', kana: 'いそがしい', romaji: 'isogashii', meaning: '忙的', pos: 'い形容詞' },
      { jp: 'もし', kana: 'もし', romaji: 'moshi', meaning: '如果', pos: '副詞' },
      { jp: 'やってみます', kana: 'やってみます', romaji: 'yatte mimasu', meaning: '试着做', pos: '動詞II' },
      { jp: '外国語', kana: 'がいこくご', romaji: 'gaikokugo', meaning: '外语', pos: '名詞' },
      { jp: '世界', kana: 'せかい', romaji: 'sekai', meaning: '世界', pos: '名詞' },
      { jp: '広い', kana: 'ひろい', romaji: 'hiroi', meaning: '宽广的', pos: 'い形容詞' },
      { jp: '練習します', kana: 'れんしゅうします', romaji: 'renshuu shimasu', meaning: '练习', pos: '動詞III' },
      { jp: 'きっと', kana: 'きっと', romaji: 'kitto', meaning: '一定', pos: '副詞' },
      { jp: '上手', kana: 'じょうず', romaji: 'jouzu', meaning: '擅长', pos: 'な形容詞' },
      { jp: '世界中', kana: 'せかいじゅう', romaji: 'sekaijuu', meaning: '全世界', pos: '名詞' },
      { jp: '旅します', kana: 'たびします', romaji: 'tabi shimasu', meaning: '旅行', pos: '動詞III' },
      { jp: '丈夫', kana: 'じょうぶ', romaji: 'joubu', meaning: '健壮的', pos: 'な形容詞' },
      { jp: '山登り', kana: 'やまのぼり', romaji: 'yamanobori', meaning: '登山', pos: '名詞' },
      { jp: '散歩', kana: 'さんぽ', romaji: 'sanpo', meaning: '散步', pos: '名詞' },
      { jp: '夢', kana: 'ゆめ', romaji: 'yume', meaning: '梦想', pos: '名詞' },
      { jp: '実現します', kana: 'じつげんします', romaji: 'jitsugen shimasu', meaning: '实现', pos: '動詞III' },
      { jp: 'おすすめ', kana: 'おすすめ', romaji: 'osusume', meaning: '推荐', pos: '名詞' },
      { jp: '浅草', kana: 'あさくさ', romaji: 'Asakusa', meaning: '浅草', pos: '名詞' },
      { jp: '町', kana: 'まち', romaji: 'machi', meaning: '街道；城市', pos: '名詞' },
      { jp: 'おしゃれ', kana: 'おしゃれ', romaji: 'oshare', meaning: '时尚', pos: 'な形容詞' },
      { jp: '寿司', kana: 'すし', romaji: 'sushi', meaning: '寿司', pos: '名詞' },
      { jp: 'タワー', kana: 'タワー', romaji: 'tawaa', meaning: '塔', pos: '名詞' },
      { jp: '困ります', kana: 'こまります', romaji: 'komarimasu', meaning: '为难；困扰', pos: '動詞I' },
      { jp: '案内所', kana: 'あんないじょ', romaji: 'annaijo', meaning: '咨询处', pos: '名詞' },
      { jp: 'お寺', kana: 'おてら', romaji: 'o-tera', meaning: '寺庙', pos: '名詞' },
      { jp: '清水寺', kana: 'きよみずでら', romaji: 'Kiyomizudera', meaning: '清水寺', pos: '名詞' },
      { jp: '湯豆腐', kana: 'ゆどうふ', romaji: 'yudoufu', meaning: '汤豆腐', pos: '名詞' },
      { jp: '抹茶', kana: 'まっちゃ', romaji: 'maccha', meaning: '抹茶', pos: '名詞' },
      { jp: 'スイーツ', kana: 'スイーツ', romaji: 'suiitsu', meaning: '甜品', pos: '名詞' },
      { jp: 'なるほど', kana: 'なるほど', romaji: 'naruhodo', meaning: '原来如此', pos: '感動詞' },
    ],
    grammar: [
      {
        pattern: 'V ば形',
        name: 'ば形活用规则',
        explain: 'ば形（条件形）的变化：【動詞I】う段→え段+ば（行く→行けば、読む→読めば、話す→話せば）。【動詞II】る→れば（食べる→食べれば、見る→見れば）。【動詞III】する→すれば、来る→来れば。【い形容词】い→ければ（高い→高ければ、良い→良ければ）。【な形容词・名词】＋であれば（暇であれば、雨であれば）。',
        examples: [
          {
            jp: '<ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby>けば',
            plain: 'いく→いけば',
            cn: '去 → 如果去',
          },
          {
            jp: '<ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べれば',
            plain: 'たべる→たべれば',
            cn: '吃 → 如果吃',
          },
          {
            jp: '<ruby>高<rt>たか</rt></ruby>い → <ruby>高<rt>たか</rt></ruby>ければ',
            plain: 'たかい→たかければ',
            cn: '贵 → 如果贵',
          },
        ],
      },
      {
        pattern: 'V ば形 + 〜',
        name: '〜ば（一般条件）',
        explain: '"如果...就..."。最具一般性的条件，强调因果必然性，常用于格言、原则、建议。和「と」一样后句限制：通常不能接意志/命令(但允许程度高于「と」)。「ば」常出现「もし〜ば」搭配。如果前后主语相同且后句是意志/命令，要改用「たら」或「なら」。',
        examples: [
          {
            jp: '<ruby>毎日<rt>まいにち</rt></ruby><ruby>勉強<rt>べんきょう</rt></ruby>すれば、<ruby>上手<rt>じょうず</rt></ruby>になります。',
            plain: 'まいにちべんきょうすれば、じょうずになります。',
            cn: '每天学习就会进步。',
          },
          {
            jp: '<ruby>安<rt>やす</rt></ruby>ければ、<ruby>買<rt>か</rt></ruby>います。',
            plain: 'やすければ、かいます。',
            cn: '便宜的话就买。',
          },
        ],
      },
      {
        pattern: 'N／V 普通形 + なら',
        name: '〜なら（话题接收）',
        explain: '"如果是...的话"。最大特点：接收对方刚刚提到的话题。对方先说A，我用「Aなら〜」回应。常见场景：建议、推荐、忠告。前句不一定为前提，可以仅是话题接收。接续：名詞 + なら、动词普通形 + なら、形容词普通形 + なら。',
        examples: [
          {
            jp: 'A:「すしを<ruby>食<rt>た</rt></ruby>べたいです。」B:「すしなら、<ruby>築地<rt>つきじ</rt></ruby>がいいですよ。」',
            plain: 'A:「すしをたべたいです。」B:「すしなら、つきじがいいですよ。」',
            cn: 'A:"想吃寿司。" B:"寿司的话，筑地不错。"',
          },
          {
            jp: '<ruby>東京<rt>とうきょう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くなら、<ruby>新幹線<rt>しんかんせん</rt></ruby>が<ruby>便利<rt>べんり</rt></ruby>です。',
            plain: 'とうきょうへいくなら、しんかんせんがべんりです。',
            cn: '要去东京的话，新干线方便。',
          },
        ],
      },
      {
        pattern: 'たら／と／ば／なら 对比',
        name: '四种条件的区别',
        explain: '【たら】最广用，假设/确定/过去发现皆可，后句限制最少。【と】必然结果，后句不能用意志/命令。【ば】一般条件，强调因果，常用于格言、建议。【なら】接对方话题，常用于推荐(去东京的话→なら)。诀窍：「行ったら」(到达东京之后) vs「行くなら」(在去之前的准备)，时间顺序相反。',
        examples: [
          {
            jp: '<ruby>東京<rt>とうきょう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ったら、お<ruby>土産<rt>みやげ</rt></ruby>を<ruby>買<rt>か</rt></ruby>います。',
            plain: 'とうきょうへいったら、おみやげをかいます。',
            cn: '到了东京之后，买伴手礼。（先到达再买）',
          },
          {
            jp: '<ruby>東京<rt>とうきょう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くなら、<ruby>切符<rt>きっぷ</rt></ruby>を<ruby>予約<rt>よやく</rt></ruby>してください。',
            plain: 'とうきょうへいくなら、きっぷをよやくしてください。',
            cn: '要去东京的话，请预订车票。（去之前的准备）',
          },
        ],
      },
      {
        pattern: 'V ば V ほど',
        name: '"越...越..."',
        explain: 'ば形 + 同一动词辞书形 + ほど，表示"越...越..."。形容词：い形 ければ + い形辞书形 + ほど（高ければ高いほど）。な形：な形 であれば あるほど（静かであればあるほど）。',
        examples: [
          {
            jp: '<ruby>勉強<rt>べんきょう</rt></ruby>すればするほど、<ruby>面白<rt>おもしろ</rt></ruby>くなります。',
            plain: 'べんきょうすればするほど、おもしろくなります。',
            cn: '越学越有趣。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 20 課 — 引用と思考
  // ========================================================
  {
    id: 20,
    level: 'N4',
    title: {
      jp: '引用と思考',
      romaji: 'inyou to shikou',
      cn: '引用与思考',
      en: 'Quotation and Thought',
    },
    goals: [
      '掌握「〜と言う／〜と思う」的引用结构',
      '掌握「〜そうだ」(伝聞) 表达听说',
      '能转述别人的话并发表自己的看法',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: 'ニュースで聞いた話',
          romaji: 'nyuusu de kiita hanashi',
          cn: '在新闻里听到的事',
        },
        sentences: [
          {
            jp: '<ruby>今朝<rt>けさ</rt></ruby>のニュースで<ruby>面白<rt>おもしろ</rt></ruby>い<ruby>話<rt>はなし</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きました。',
            plain: 'けさのニュースでおもしろいはなしをききました。',
            romaji: 'kesa no nyuusu de omoshiroi hanashi o kikimashita.',
            cn: '今早在新闻里听到了有趣的事。',
          },
          {
            jp: '<ruby>来年<rt>らいねん</rt></ruby>から<ruby>新<rt>あたら</rt></ruby>しい<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>走<rt>はし</rt></ruby>るそうです。',
            plain: 'らいねんからあたらしいでんしゃがはしるそうです。',
            romaji: 'rainen kara atarashii densha ga hashiru sou desu.',
            cn: '听说从明年开始有新电车运行。',
          },
          {
            jp: 'アナウンサーは「<ruby>東京<rt>とうきょう</rt></ruby>から<ruby>大阪<rt>おおさか</rt></ruby>まで<ruby>二<rt>に</rt></ruby><ruby>時間<rt>じかん</rt></ruby>です」と<ruby>言<rt>い</rt></ruby>いました。',
            plain: 'アナウンサーは「とうきょうからおおさかまでにじかんです」といいました。',
            romaji: 'anaunsaa wa "Toukyou kara Oosaka made ni-jikan desu" to iimashita.',
            cn: '播音员说"从东京到大阪两个小时"。',
          },
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>はそれを<ruby>聞<rt>き</rt></ruby>いて、とても<ruby>便利<rt>べんり</rt></ruby>になると<ruby>思<rt>おも</rt></ruby>いました。',
            plain: 'わたしはそれをきいて、とてもべんりになるとおもいました。',
            romaji: 'watashi wa sore o kiite, totemo benri ni naru to omoimashita.',
            cn: '我听到后觉得会变得非常方便。',
          },
          {
            jp: 'でも、<ruby>値段<rt>ねだん</rt></ruby>が<ruby>高<rt>たか</rt></ruby>くなるかもしれないと<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'でも、ねだんがたかくなるかもしれないとおもいます。',
            romaji: 'demo, nedan ga takaku naru kamoshirenai to omoimasu.',
            cn: '不过，我觉得价格可能也会变贵。',
          },
          {
            jp: '<ruby>友達<rt>ともだち</rt></ruby>もそのニュースを<ruby>見<rt>み</rt></ruby>たそうです。',
            plain: 'ともだちもそのニュースをみたそうです。',
            romaji: 'tomodachi mo sono nyuusu o mita sou desu.',
            cn: '听说朋友也看了那条新闻。',
          },
          {
            jp: '<ruby>友達<rt>ともだち</rt></ruby>は「<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ってみたい」と<ruby>言<rt>い</rt></ruby>っていました。',
            plain: 'ともだちは「ぜったいにのってみたい」といっていました。',
            romaji: 'tomodachi wa "zettai ni notte mitai" to itte imashita.',
            cn: '朋友说"绝对想坐看看"。',
          },
          {
            jp: '<ruby>新<rt>あたら</rt></ruby>しい<ruby>技術<rt>ぎじゅつ</rt></ruby>が<ruby>生活<rt>せいかつ</rt></ruby>を<ruby>変<rt>か</rt></ruby>えると<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'あたらしいぎじゅつがせいかつをかえるとおもいます。',
            romaji: 'atarashii gijutsu ga seikatsu o kaeru to omoimasu.',
            cn: '我觉得新技术会改变生活。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '友達の意見',
          romaji: 'tomodachi no iken',
          cn: '朋友的意见',
        },
        sentences: [
          {
            jp: '<ruby>昨日<rt>きのう</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>と<ruby>仕事<rt>しごと</rt></ruby>について<ruby>話<rt>はな</rt></ruby>しました。',
            plain: 'きのう、ともだちとしごとについてはなしました。',
            romaji: 'kinou, tomodachi to shigoto ni tsuite hanashimashita.',
            cn: '昨天和朋友谈了工作的事。',
          },
          {
            jp: '<ruby>友達<rt>ともだち</rt></ruby>は「<ruby>今<rt>いま</rt></ruby>の<ruby>会社<rt>かいしゃ</rt></ruby>を<ruby>辞<rt>や</rt></ruby>めたい」と<ruby>言<rt>い</rt></ruby>いました。',
            plain: 'ともだちは「いまのかいしゃをやめたい」といいました。',
            romaji: 'tomodachi wa "ima no kaisha o yametai" to iimashita.',
            cn: '朋友说"想辞掉现在的公司"。',
          },
          {
            jp: '<ruby>仕事<rt>しごと</rt></ruby>がとても<ruby>大変<rt>たいへん</rt></ruby>だと<ruby>言<rt>い</rt></ruby>っていました。',
            plain: 'しごとがとてもたいへんだといっていました。',
            romaji: 'shigoto ga totemo taihen da to itte imashita.',
            cn: '说工作非常辛苦。',
          },
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<ruby>休<rt>やす</rt></ruby>んだほうがいいと<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'わたしはすこしやすんだほうがいいとおもいます。',
            romaji: 'watashi wa sukoshi yasunda hou ga ii to omoimasu.',
            cn: '我觉得稍微休息一下比较好。',
          },
          {
            jp: 'でも、すぐに<ruby>辞<rt>や</rt></ruby>めるのはよくないと<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'でも、すぐにやめるのはよくないとおもいます。',
            romaji: 'demo, sugu ni yameru no wa yokunai to omoimasu.',
            cn: '不过，我觉得马上辞职不好。',
          },
          {
            jp: '<ruby>友達<rt>ともだち</rt></ruby>はもう<ruby>少<rt>すこ</rt></ruby>し<ruby>考<rt>かんが</rt></ruby>えると<ruby>言<rt>い</rt></ruby>っていました。',
            plain: 'ともだちはもうすこしかんがえるといっていました。',
            romaji: 'tomodachi wa mou sukoshi kangaeru to itte imashita.',
            cn: '朋友说再考虑一下。',
          },
          {
            jp: '<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>決定<rt>けってい</rt></ruby>はゆっくり<ruby>決<rt>き</rt></ruby>めるべきだと<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'たいせつなけっていはゆっくりきめるべきだとおもいます。',
            romaji: 'taisetsu na kettei wa yukkuri kimeru beki da to omoimasu.',
            cn: '我觉得重要的决定应该慢慢决定。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '会社で同僚と新しいプロジェクトについて話している。',
        cn: '在公司和同事谈论新项目。',
      },
      lines: [
        {
          speaker: '<ruby>森<rt>もり</rt></ruby>',
          jp: '<ruby>部長<rt>ぶちょう</rt></ruby>は<ruby>新<rt>あたら</rt></ruby>しいプロジェクトを<ruby>始<rt>はじ</rt></ruby>めると<ruby>言<rt>い</rt></ruby>っていましたね。',
          plain: 'ぶちょうはあたらしいプロジェクトをはじめるといっていましたね。',
          romaji: 'buchou wa atarashii purojekuto o hajimeru to itte imashita ne.',
          cn: '部长说要开始新项目呢。',
        },
        {
          speaker: '<ruby>田中<rt>たなか</rt></ruby>',
          jp: 'はい。<ruby>来月<rt>らいげつ</rt></ruby>から<ruby>始<rt>はじ</rt></ruby>まるそうですよ。',
          plain: 'はい。らいげつからはじまるそうですよ。',
          romaji: 'hai. raigetsu kara hajimaru sou desu yo.',
          cn: '是的。听说从下个月开始。',
        },
        {
          speaker: '<ruby>森<rt>もり</rt></ruby>',
          jp: '<ruby>田中<rt>たなか</rt></ruby>さんはどう<ruby>思<rt>おも</rt></ruby>いますか。',
          plain: 'たなかさんはどうおもいますか。',
          romaji: 'Tanaka-san wa dou omoimasu ka.',
          cn: '田中你怎么想？',
        },
        {
          speaker: '<ruby>田中<rt>たなか</rt></ruby>',
          jp: '<ruby>面白<rt>おもしろ</rt></ruby>そうだと<ruby>思<rt>おも</rt></ruby>います。でも、<ruby>少<rt>すこ</rt></ruby>し<ruby>難<rt>むずか</rt></ruby>しいかもしれません。',
          plain: 'おもしろそうだとおもいます。でも、すこしむずかしいかもしれません。',
          romaji: 'omoshirosou da to omoimasu. demo, sukoshi muzukashii kamoshiremasen.',
          cn: '我觉得看起来有趣。不过，可能有点难。',
        },
        {
          speaker: '<ruby>森<rt>もり</rt></ruby>',
          jp: '<ruby>佐藤<rt>さとう</rt></ruby>さんも「<ruby>挑戦<rt>ちょうせん</rt></ruby>したい」と<ruby>言<rt>い</rt></ruby>っていました。',
          plain: 'さとうさんも「ちょうせんしたい」といっていました。',
          romaji: 'Satou-san mo "chousen shitai" to itte imashita.',
          cn: '佐藤也说"想挑战"。',
        },
        {
          speaker: '<ruby>田中<rt>たなか</rt></ruby>',
          jp: 'みんなで<ruby>頑張<rt>がんば</rt></ruby>れば、きっとうまくいくと<ruby>思<rt>おも</rt></ruby>います。',
          plain: 'みんなでがんばれば、きっとうまくいくとおもいます。',
          romaji: 'minna de ganbareba, kitto umaku iku to omoimasu.',
          cn: '我觉得大家一起努力，一定会顺利的。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: 'ニュースは<ruby>何<rt>なに</rt></ruby>が<ruby>始<rt>はじ</rt></ruby>まると<ruby>伝<rt>つた</rt></ruby>えていましたか。',
          plain: 'ニュースはなにがはじまるとつたえていましたか。',
          romaji: 'nyuusu wa nani ga hajimaru to tsutaete imashita ka.',
          cn: '新闻在传达什么要开始？',
        },
        a: {
          jp: '<ruby>新<rt>あたら</rt></ruby>しい<ruby>電車<rt>でんしゃ</rt></ruby>が<ruby>走<rt>はし</rt></ruby>るそうです。',
          plain: 'あたらしいでんしゃがはしるそうです。',
          romaji: 'atarashii densha ga hashiru sou desu.',
          cn: '听说有新电车运行。',
        },
      },
      {
        q: {
          jp: '<ruby>筆者<rt>ひっしゃ</rt></ruby>はそれを<ruby>聞<rt>き</rt></ruby>いて<ruby>何<rt>なに</rt></ruby>を<ruby>思<rt>おも</rt></ruby>いましたか。',
          plain: 'ひっしゃはそれをきいてなにをおもいましたか。',
          romaji: 'hissha wa sore o kiite nani o omoimashita ka.',
          cn: '作者听了之后想到了什么？',
        },
        a: {
          jp: 'とても<ruby>便利<rt>べんり</rt></ruby>になると<ruby>思<rt>おも</rt></ruby>いました。でも、<ruby>値段<rt>ねだん</rt></ruby>が<ruby>高<rt>たか</rt></ruby>くなるかもしれないと<ruby>思<rt>おも</rt></ruby>いました。',
          plain: 'とてもべんりになるとおもいました。でも、ねだんがたかくなるかもしれないとおもいました。',
          romaji: 'totemo benri ni naru to omoimashita. demo, nedan ga takaku naru kamoshirenai to omoimashita.',
          cn: '觉得会变得方便，但价格可能也会变贵。',
        },
        hint: '使用「〜と思います」表达自己的看法。',
      },
      {
        q: {
          jp: '<ruby>友達<rt>ともだち</rt></ruby>は<ruby>仕事<rt>しごと</rt></ruby>について<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>いましたか。',
          plain: 'ともだちはしごとについてなんといいましたか。',
          romaji: 'tomodachi wa shigoto ni tsuite nan to iimashita ka.',
          cn: '朋友关于工作说了什么？',
        },
        a: {
          jp: '「<ruby>会社<rt>かいしゃ</rt></ruby>を<ruby>辞<rt>や</rt></ruby>めたい」と<ruby>言<rt>い</rt></ruby>いました。',
          plain: '「かいしゃをやめたい」といいました。',
          romaji: '"kaisha o yametai" to iimashita.',
          cn: '说"想辞掉公司"。',
        },
      },
      {
        q: {
          jp: '<ruby>新<rt>あたら</rt></ruby>しいプロジェクトはいつ<ruby>始<rt>はじ</rt></ruby>まりますか。',
          plain: 'あたらしいプロジェクトはいつはじまりますか。',
          romaji: 'atarashii purojekuto wa itsu hajimarimasu ka.',
          cn: '新项目什么时候开始？',
        },
        a: {
          jp: '<ruby>来月<rt>らいげつ</rt></ruby>から<ruby>始<rt>はじ</rt></ruby>まるそうです。',
          plain: 'らいげつからはじまるそうです。',
          romaji: 'raigetsu kara hajimaru sou desu.',
          cn: '听说从下个月开始。',
        },
      },
    ],
    vocabulary: [
      { jp: '引用', kana: 'いんよう', romaji: 'inyou', meaning: '引用', pos: '名詞' },
      { jp: '思考', kana: 'しこう', romaji: 'shikou', meaning: '思考', pos: '名詞' },
      { jp: 'ニュース', kana: 'ニュース', romaji: 'nyuusu', meaning: '新闻', pos: '名詞' },
      { jp: '今朝', kana: 'けさ', romaji: 'kesa', meaning: '今天早上', pos: '名詞' },
      { jp: '走ります', kana: 'はしります', romaji: 'hashirimasu', meaning: '跑；行驶', pos: '動詞I' },
      { jp: 'アナウンサー', kana: 'アナウンサー', romaji: 'anaunsaa', meaning: '播音员', pos: '名詞' },
      { jp: '電車', kana: 'でんしゃ', romaji: 'densha', meaning: '电车', pos: '名詞' },
      { jp: '便利', kana: 'べんり', romaji: 'benri', meaning: '方便', pos: 'な形容詞' },
      { jp: '値段', kana: 'ねだん', romaji: 'nedan', meaning: '价格', pos: '名詞' },
      { jp: 'かもしれません', kana: 'かもしれません', romaji: 'kamoshiremasen', meaning: '可能；也许', pos: '慣用句' },
      { jp: '絶対', kana: 'ぜったい', romaji: 'zettai', meaning: '绝对', pos: '副詞' },
      { jp: '技術', kana: 'ぎじゅつ', romaji: 'gijutsu', meaning: '技术', pos: '名詞' },
      { jp: '生活', kana: 'せいかつ', romaji: 'seikatsu', meaning: '生活', pos: '名詞' },
      { jp: '変えます', kana: 'かえます', romaji: 'kaemasu', meaning: '改变', pos: '動詞II' },
      { jp: '意見', kana: 'いけん', romaji: 'iken', meaning: '意见', pos: '名詞' },
      { jp: '辞めます', kana: 'やめます', romaji: 'yamemasu', meaning: '辞职', pos: '動詞II' },
      { jp: '大変', kana: 'たいへん', romaji: 'taihen', meaning: '辛苦；不得了', pos: 'な形容詞' },
      { jp: '休みます', kana: 'やすみます', romaji: 'yasumimasu', meaning: '休息', pos: '動詞I' },
      { jp: '考えます', kana: 'かんがえます', romaji: 'kangaemasu', meaning: '思考', pos: '動詞II' },
      { jp: '決定', kana: 'けってい', romaji: 'kettei', meaning: '决定', pos: '名詞' },
      { jp: '決めます', kana: 'きめます', romaji: 'kimemasu', meaning: '决定', pos: '動詞II' },
      { jp: 'プロジェクト', kana: 'プロジェクト', romaji: 'purojekuto', meaning: '项目', pos: '名詞' },
      { jp: '始まります', kana: 'はじまります', romaji: 'hajimarimasu', meaning: '开始（自动词）', pos: '動詞I' },
      { jp: 'うまくいきます', kana: 'うまくいきます', romaji: 'umaku ikimasu', meaning: '顺利进行', pos: '慣用句' },
      { jp: '伝えます', kana: 'つたえます', romaji: 'tsutaemasu', meaning: '传达', pos: '動詞II' },
      { jp: '話', kana: 'はなし', romaji: 'hanashi', meaning: '话；故事', pos: '名詞' },
      { jp: '面白い', kana: 'おもしろい', romaji: 'omoshiroi', meaning: '有趣的', pos: 'い形容詞' },
      { jp: '言います', kana: 'いいます', romaji: 'iimasu', meaning: '说', pos: '動詞I' },
      { jp: '思います', kana: 'おもいます', romaji: 'omoimasu', meaning: '想；觉得', pos: '動詞I' },
    ],
    grammar: [
      {
        pattern: '「...」と + 言う／聞く',
        name: '直接引用',
        explain: '"说...". 用「...」夹住原文不变(尊敬体或简体均可保留)，加「と」+ 言う／聞く。可以保留原句的语气、敬语、感叹号。常用于正式转述、新闻、文章。',
        examples: [
          {
            jp: '<ruby>先生<rt>せんせい</rt></ruby>は「<ruby>明日<rt>あした</rt></ruby>テストです」と<ruby>言<rt>い</rt></ruby>いました。',
            plain: 'せんせいは「あしたテストです」といいました。',
            cn: '老师说"明天考试"。',
          },
        ],
      },
      {
        pattern: '普通形 + と + 言う／思う',
        name: '间接引用',
        explain: '"说...／认为..."。引用前必须用普通形(辞書形/た形/ない形/だ)，礼貌形「です／ます」需变成普通形。「と思う」前可以是普通形断定，但「だと思う」(名词・な形)中的「だ」不能省。否定可用「〜ないと思う」或「〜とは思わない」。',
        examples: [
          {
            jp: '<ruby>明日<rt>あした</rt></ruby><ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>ると<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'あしたあめがふるとおもいます。',
            cn: '我觉得明天会下雨。',
          },
          {
            jp: '<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>来<rt>こ</rt></ruby>ないと<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'たなかさんはこないとおもいます。',
            cn: '我觉得田中不会来。',
          },
          {
            jp: 'これは<ruby>大切<rt>たいせつ</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'これはたいせつだとおもいます。',
            cn: '我觉得这很重要。',
          },
        ],
      },
      {
        pattern: '普通形 + そうだ（伝聞）',
        name: '〜そうだ（听说）',
        explain: '"听说..."。表示从他处获得的信息。接续：动词・形容词普通形 + そうだ；名詞/な形容詞 + だそうだ。常和「〜によると」「〜から聞いた」搭配。注意与样态「そうだ」(看起来像)区别：样态接动词ます形或形容词词干(雨が降りそうだ＝看起来要下雨)。',
        examples: [
          {
            jp: 'ニュースによると、<ruby>明日<rt>あした</rt></ruby><ruby>雪<rt>ゆき</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るそうです。',
            plain: 'ニュースによると、あしたゆきがふるそうです。',
            cn: '据新闻说，明天会下雪。',
          },
          {
            jp: '<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>元気<rt>げんき</rt></ruby>だそうです。',
            plain: 'たなかさんはげんきだそうです。',
            cn: '听说田中很有精神。',
          },
        ],
      },
      {
        pattern: 'V ます形/形容词词干 + そうだ（様態）',
        name: '〜そうだ（看起来）',
        explain: '"看起来..."。表示根据外观判断。接续与伝聞不同：动词ます形/い形容词去い/な形容词词干 + そうだ（降りそう、おいしそう、元気そう）。「〜そうな + N」可作连体修饰。良い→よさそう、ない→なさそう (例外)。',
        examples: [
          {
            jp: 'このケーキは<ruby>美味<rt>おい</rt></ruby>しそうです。',
            plain: 'このケーキはおいしそうです。',
            cn: '这个蛋糕看起来好吃。',
          },
          {
            jp: '<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>りそうです。',
            plain: 'あめがふりそうです。',
            cn: '看起来要下雨。',
          },
        ],
      },
      {
        pattern: 'V 普通形 + かもしれない',
        name: '〜かもしれない（可能）',
        explain: '"也许...". 表示推测，可能性约 50%。接续：动词・い形普通形 + かもしれない；名詞/な形容詞 + かもしれない（无「だ」）。比「〜と思う」表示更不确定。礼貌形：かもしれません。',
        examples: [
          {
            jp: '<ruby>彼<rt>かれ</rt></ruby>はもう<ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>ったかもしれません。',
            plain: 'かれはもういえにかえったかもしれません。',
            cn: '他可能已经回家了。',
          },
        ],
      },
    ],
  },

];
