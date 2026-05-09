// ============================================================
// lessons-n4-part2.ts
// JLPT N4 — 第 11 課 ～ 第 15 課
// ============================================================

import type { Lesson } from './types';

export const lessonsN4Part2: Lesson[] = [

  // ========================================================
  // 第 11 課 — て形連結
  // ========================================================
  {
    id: 11,
    level: 'N4',
    title: {
      jp: 'て<ruby>形<rt>けい</rt></ruby><ruby>連結<rt>れんけつ</rt></ruby>',
      romaji: 'te-kei renketsu',
      cn: 'て形连接',
      en: 'Connecting Actions with Te-form',
    },
    goals: [
      '掌握三类动词て形的完整变化规则',
      '能用「〜て、〜」串联多个连续动作',
      '理解「〜てから」与「〜て」的细微区别',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '<ruby>朝<rt>あさ</rt></ruby>のルーティン',
          romaji: 'asa no ruutiin',
          cn: '早晨日常',
        },
        sentences: [
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>は<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>六時半<rt>ろくじはん</rt></ruby>に<ruby>起<rt>お</rt></ruby>きて、まず<ruby>顔<rt>かお</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>います。',
            plain: 'わたしはまいあさろくじはんにおきて、まずかおをあらいます。',
            romaji: 'watashi wa maiasa roku-ji-han ni okite, mazu kao o araimasu.',
            cn: '我每天早上六点半起床，先洗脸。',
          },
          {
            jp: 'それから<ruby>歯<rt>は</rt></ruby>を<ruby>磨<rt>みが</rt></ruby>いて、<ruby>着替<rt>きが</rt></ruby>えてから<ruby>台所<rt>だいどころ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。',
            plain: 'それからはをみがいて、きがえてからだいどころへいきます。',
            romaji: 'sorekara ha o migaite, kigaete kara daidokoro e ikimasu.',
            cn: '然后刷牙、换好衣服后去厨房。',
          },
          {
            jp: 'パンを<ruby>焼<rt>や</rt></ruby>いて、コーヒーを<ruby>入<rt>い</rt></ruby>れて、<ruby>新聞<rt>しんぶん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みながら<ruby>朝食<rt>ちょうしょく</rt></ruby>を<ruby>食<rt>た</rt></ruby>べます。',
            plain: 'パンをやいて、コーヒーをいれて、しんぶんをよみながらちょうしょくをたべます。',
            romaji: 'pan o yaite, koohii o irete, shinbun o yominagara choushoku o tabemasu.',
            cn: '烤面包、冲咖啡，一边读报纸一边吃早饭。',
          },
          {
            jp: '<ruby>食<rt>た</rt></ruby>べ<ruby>終<rt>お</rt></ruby>わってから<ruby>食器<rt>しょっき</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>って、ゴミを<ruby>出<rt>だ</rt></ruby>します。',
            plain: 'たべおわってからしょっきをあらって、ゴミをだします。',
            romaji: 'tabe-owatte kara shokki o aratte, gomi o dashimasu.',
            cn: '吃完后洗碗，倒垃圾。',
          },
          {
            jp: '<ruby>七時半<rt>しちじはん</rt></ruby>になって、<ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>て<ruby>駅<rt>えき</rt></ruby>まで<ruby>歩<rt>ある</rt></ruby>きます。',
            plain: 'しちじはんになって、いえをでてえきまであるきます。',
            romaji: 'shichi-ji-han ni natte, ie o dete eki made arukimasu.',
            cn: '到了七点半，出门走到车站。',
          },
          {
            jp: '<ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>って、<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んだり<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いたりしています。',
            plain: 'でんしゃにのって、ほんをよんだりおんがくをきいたりしています。',
            romaji: 'densha ni notte, hon o yondari ongaku o kiitari shiteimasu.',
            cn: '坐上电车，一会儿读书一会儿听音乐。',
          },
          {
            jp: '<ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>着<rt>つ</rt></ruby>いて、パソコンを<ruby>開<rt>ひら</rt></ruby>いて、メールを<ruby>確認<rt>かくにん</rt></ruby>します。',
            plain: 'かいしゃについて、パソコンをひらいて、メールをかくにんします。',
            romaji: 'kaisha ni tsuite, pasokon o hiraite, meeru o kakunin shimasu.',
            cn: '到了公司，打开电脑，确认邮件。',
          },
          {
            jp: '<ruby>毎日<rt>まいにち</rt></ruby><ruby>同<rt>おな</rt></ruby>じですが、<ruby>順番<rt>じゅんばん</rt></ruby>を<ruby>守<rt>まも</rt></ruby>って<ruby>動<rt>うご</rt></ruby>くと<ruby>気持<rt>きも</rt></ruby>ちがいいです。',
            plain: 'まいにちおなじですが、じゅんばんをまもってうごくときもちがいいです。',
            romaji: 'mainichi onaji desu ga, junban o mamotte ugoku to kimochi ga ii desu.',
            cn: '每天都一样，但按顺序行动会心情舒畅。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しの<ruby>日<rt>ひ</rt></ruby>',
          romaji: 'hikkoshi no hi',
          cn: '搬家当天',
        },
        sentences: [
          {
            jp: '<ruby>先週<rt>せんしゅう</rt></ruby>の<ruby>土曜日<rt>どようび</rt></ruby>に<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しをしました。',
            plain: 'せんしゅうのどようびにひっこしをしました。',
            romaji: 'senshuu no doyoubi ni hikkoshi o shimashita.',
            cn: '上周六搬了家。',
          },
          {
            jp: '<ruby>朝<rt>あさ</rt></ruby><ruby>早<rt>はや</rt></ruby>く<ruby>起<rt>お</rt></ruby>きて、<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>箱<rt>はこ</rt></ruby>に<ruby>入<rt>い</rt></ruby>れて、トラックを<ruby>待<rt>ま</rt></ruby>ちました。',
            plain: 'あさはやくおきて、にもつをはこにいれて、トラックをまちました。',
            romaji: 'asa hayaku okite, nimotsu o hako ni irete, torakku o machimashita.',
            cn: '一早起来，把行李装进箱子，等卡车。',
          },
          {
            jp: '<ruby>業者<rt>ぎょうしゃ</rt></ruby>が<ruby>来<rt>き</rt></ruby>て、<ruby>家具<rt>かぐ</rt></ruby>を<ruby>運<rt>はこ</rt></ruby>んで、<ruby>新<rt>あたら</rt></ruby>しい<ruby>部屋<rt>へや</rt></ruby>へ<ruby>持<rt>も</rt></ruby>って<ruby>行<rt>い</rt></ruby>きました。',
            plain: 'ぎょうしゃがきて、かぐをはこんで、あたらしいへやへもっていきました。',
            romaji: 'gyousha ga kite, kagu o hakonde, atarashii heya e motte ikimashita.',
            cn: '搬家公司的人来了，搬运家具，运到新房间。',
          },
          {
            jp: '<ruby>新<rt>あたら</rt></ruby>しい<ruby>家<rt>いえ</rt></ruby>に<ruby>着<rt>つ</rt></ruby>いてから、<ruby>箱<rt>はこ</rt></ruby>を<ruby>開<rt>ひら</rt></ruby>けて、<ruby>本<rt>ほん</rt></ruby>を<ruby>棚<rt>たな</rt></ruby>に<ruby>並<rt>なら</rt></ruby>べました。',
            plain: 'あたらしいいえについてから、はこをひらけて、ほんをたなにならべました。',
            romaji: 'atarashii ie ni tsuite kara, hako o hiraite, hon o tana ni narabemashita.',
            cn: '到新家后，打开箱子，把书摆在书架上。',
          },
          {
            jp: '<ruby>夕方<rt>ゆうがた</rt></ruby>になって、<ruby>近<rt>ちか</rt></ruby>くのスーパーで<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>をして、<ruby>晩<rt>ばん</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>を<ruby>作<rt>つく</rt></ruby>りました。',
            plain: 'ゆうがたになって、ちかくのスーパーでかいものをして、ばんごはんをつくりました。',
            romaji: 'yuugata ni natte, chikaku no suupaa de kaimono o shite, bangohan o tsukurimashita.',
            cn: '到傍晚，在附近的超市买了东西，做了晚饭。',
          },
          {
            jp: '<ruby>疲<rt>つか</rt></ruby>れましたが、<ruby>新<rt>あたら</rt></ruby>しい<ruby>生活<rt>せいかつ</rt></ruby>が<ruby>始<rt>はじ</rt></ruby>まって、ワクワクしています。',
            plain: 'つかれましたが、あたらしいせいかつがはじまって、ワクワクしています。',
            romaji: 'tsukaremashita ga, atarashii seikatsu ga hajimatte, wakuwaku shiteimasu.',
            cn: '虽然累，但新生活开始了，感到很兴奋。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '<ruby>月曜日<rt>げつようび</rt></ruby>の<ruby>朝<rt>あさ</rt></ruby>、<ruby>同僚<rt>どうりょう</rt></ruby>と<ruby>週末<rt>しゅうまつ</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>をする。',
        cn: '周一早上，与同事聊上周末。',
      },
      lines: [
        {
          speaker: '田中',
          jp: 'おはようございます。<ruby>昨日<rt>きのう</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしましたか。',
          plain: 'おはようございます。きのうはなにをしましたか。',
          romaji: 'ohayou gozaimasu. kinou wa nani o shimashita ka.',
          cn: '早上好。昨天做什么了？',
        },
        {
          speaker: '鈴木',
          jp: '<ruby>朝<rt>あさ</rt></ruby><ruby>友達<rt>ともだち</rt></ruby>と<ruby>会<rt>あ</rt></ruby>って、<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>て、それから<ruby>食事<rt>しょくじ</rt></ruby>をしました。',
          plain: 'あさともだちとあって、えいがをみて、それからしょくじをしました。',
          romaji: 'asa tomodachi to atte, eiga o mite, sorekara shokuji o shimashita.',
          cn: '早上和朋友见面，看电影，然后吃饭。',
        },
        {
          speaker: '田中',
          jp: 'いいですね。<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>てから、どこへ<ruby>行<rt>い</rt></ruby>きましたか。',
          plain: 'いいですね。えいがをみてから、どこへいきましたか。',
          romaji: 'ii desu ne. eiga o mite kara, doko e ikimashita ka.',
          cn: '不错啊。看完电影之后去了哪？',
        },
        {
          speaker: '鈴木',
          jp: '<ruby>駅前<rt>えきまえ</rt></ruby>のイタリアンに<ruby>入<rt>はい</rt></ruby>って、パスタを<ruby>食<rt>た</rt></ruby>べて、ワインを<ruby>少<rt>すこ</rt></ruby>し<ruby>飲<rt>の</rt></ruby>みました。',
          plain: 'えきまえのイタリアンにはいって、パスタをたべて、ワインをすこしのみました。',
          romaji: 'eki-mae no itarian ni haitte, pasuta o tabete, wain o sukoshi nomimashita.',
          cn: '进了车站前的意大利餐厅，吃了意面，喝了点葡萄酒。',
        },
        {
          speaker: '田中',
          jp: '<ruby>楽<rt>たの</rt></ruby>しそうですね。<ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>ってから、<ruby>何<rt>なに</rt></ruby>をしましたか。',
          plain: 'たのしそうですね。いえにかえってから、なにをしましたか。',
          romaji: 'tanoshisou desu ne. ie ni kaette kara, nani o shimashita ka.',
          cn: '听起来很开心。回家后做了什么？',
        },
        {
          speaker: '鈴木',
          jp: 'シャワーを<ruby>浴<rt>あ</rt></ruby>びて、すぐ<ruby>寝<rt>ね</rt></ruby>ました。',
          plain: 'シャワーをあびて、すぐねました。',
          romaji: 'shawaa o abite, sugu nemashita.',
          cn: '洗了澡就直接睡了。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きますか。',
          plain: 'まいあさなんじにおきますか。',
          romaji: 'maiasa nan-ji ni okimasu ka.',
          cn: '每天早上几点起床？',
        },
        a: {
          jp: '<ruby>六時半<rt>ろくじはん</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。',
          plain: 'ろくじはんにおきます。',
          romaji: 'roku-ji-han ni okimasu.',
          cn: '六点半起床。',
        },
      },
      {
        q: {
          jp: '<ruby>朝食<rt>ちょうしょく</rt></ruby>を<ruby>食<rt>た</rt></ruby>べた<ruby>後<rt>あと</rt></ruby>、<ruby>何<rt>なに</rt></ruby>をしますか。',
          plain: 'ちょうしょくをたべたあと、なにをしますか。',
          romaji: 'choushoku o tabeta ato, nani o shimasu ka.',
          cn: '吃完早饭后做什么？',
        },
        a: {
          jp: '<ruby>食器<rt>しょっき</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>って、ゴミを<ruby>出<rt>だ</rt></ruby>します。',
          plain: 'しょっきをあらって、ゴミをだします。',
          romaji: 'shokki o aratte, gomi o dashimasu.',
          cn: '洗碗，倒垃圾。',
        },
        hint: '用「〜て、〜」串联两个动作。',
      },
      {
        q: {
          jp: '<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しの<ruby>日<rt>ひ</rt></ruby>、<ruby>新<rt>あたら</rt></ruby>しい<ruby>家<rt>いえ</rt></ruby>に<ruby>着<rt>つ</rt></ruby>いてから<ruby>何<rt>なに</rt></ruby>をしましたか。',
          plain: 'ひっこしのひ、あたらしいいえについてからなにをしましたか。',
          romaji: 'hikkoshi no hi, atarashii ie ni tsuite kara nani o shimashita ka.',
          cn: '搬家那天，到新家后做了什么？',
        },
        a: {
          jp: '<ruby>箱<rt>はこ</rt></ruby>を<ruby>開<rt>ひら</rt></ruby>けて、<ruby>本<rt>ほん</rt></ruby>を<ruby>棚<rt>たな</rt></ruby>に<ruby>並<rt>なら</rt></ruby>べました。',
          plain: 'はこをひらけて、ほんをたなにならべました。',
          romaji: 'hako o hiraite, hon o tana ni narabemashita.',
          cn: '打开箱子，把书摆到书架上。',
        },
      },
      {
        q: {
          jp: '<ruby>鈴木<rt>すずき</rt></ruby>さんは<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>てから、どこで<ruby>食事<rt>しょくじ</rt></ruby>をしましたか。',
          plain: 'すずきさんはえいがをみてから、どこでしょくじをしましたか。',
          romaji: 'Suzuki-san wa eiga o mite kara, doko de shokuji o shimashita ka.',
          cn: '铃木看完电影后，在哪里吃的饭？',
        },
        a: {
          jp: '<ruby>駅前<rt>えきまえ</rt></ruby>のイタリアン<ruby>料理<rt>りょうり</rt></ruby>の<ruby>店<rt>みせ</rt></ruby>です。',
          plain: 'えきまえのイタリアンりょうりのみせです。',
          romaji: 'eki-mae no itarian ryouri no mise desu.',
          cn: '车站前的意大利餐厅。',
        },
      },
    ],
    vocabulary: [
      { jp: '顔', kana: 'かお', romaji: 'kao', meaning: '脸', pos: '名詞' },
      { jp: '洗います', kana: 'あらいます', romaji: 'araimasu', meaning: '洗', pos: '動詞I' },
      { jp: '歯', kana: 'は', romaji: 'ha', meaning: '牙齿', pos: '名詞' },
      { jp: '磨きます', kana: 'みがきます', romaji: 'migakimasu', meaning: '刷；擦亮', pos: '動詞I' },
      { jp: '着替えます', kana: 'きがえます', romaji: 'kigaemasu', meaning: '换衣服', pos: '動詞II' },
      { jp: '台所', kana: 'だいどころ', romaji: 'daidokoro', meaning: '厨房', pos: '名詞' },
      { jp: '焼きます', kana: 'やきます', romaji: 'yakimasu', meaning: '烤；煎', pos: '動詞I' },
      { jp: '新聞', kana: 'しんぶん', romaji: 'shinbun', meaning: '报纸', pos: '名詞' },
      { jp: '朝食', kana: 'ちょうしょく', romaji: 'choushoku', meaning: '早餐', pos: '名詞' },
      { jp: '食器', kana: 'しょっき', romaji: 'shokki', meaning: '餐具', pos: '名詞' },
      { jp: 'ゴミ', kana: 'ゴミ', romaji: 'gomi', meaning: '垃圾', pos: '名詞' },
      { jp: '出します', kana: 'だします', romaji: 'dashimasu', meaning: '拿出；倒（垃圾）', pos: '動詞I' },
      { jp: '出ます', kana: 'でます', romaji: 'demasu', meaning: '出去；离开', pos: '動詞II' },
      { jp: '乗ります', kana: 'のります', romaji: 'norimasu', meaning: '乘坐', pos: '動詞I' },
      { jp: '着きます', kana: 'つきます', romaji: 'tsukimasu', meaning: '到达', pos: '動詞I' },
      { jp: '開きます', kana: 'ひらきます', romaji: 'hirakimasu', meaning: '打开', pos: '動詞I' },
      { jp: '確認します', kana: 'かくにんします', romaji: 'kakunin shimasu', meaning: '确认', pos: '動詞III' },
      { jp: '順番', kana: 'じゅんばん', romaji: 'junban', meaning: '顺序', pos: '名詞' },
      { jp: '守ります', kana: 'まもります', romaji: 'mamorimasu', meaning: '遵守；保护', pos: '動詞I' },
      { jp: '気持ち', kana: 'きもち', romaji: 'kimochi', meaning: '心情', pos: '名詞' },
      { jp: '引っ越し', kana: 'ひっこし', romaji: 'hikkoshi', meaning: '搬家', pos: '名詞' },
      { jp: '荷物', kana: 'にもつ', romaji: 'nimotsu', meaning: '行李', pos: '名詞' },
      { jp: '箱', kana: 'はこ', romaji: 'hako', meaning: '箱子', pos: '名詞' },
      { jp: 'トラック', kana: 'トラック', romaji: 'torakku', meaning: '卡车', pos: '名詞' },
      { jp: '家具', kana: 'かぐ', romaji: 'kagu', meaning: '家具', pos: '名詞' },
      { jp: '運びます', kana: 'はこびます', romaji: 'hakobimasu', meaning: '搬运', pos: '動詞I' },
      { jp: '棚', kana: 'たな', romaji: 'tana', meaning: '架子', pos: '名詞' },
      { jp: '並べます', kana: 'ならべます', romaji: 'narabemasu', meaning: '排列；摆放', pos: '動詞II' },
      { jp: '生活', kana: 'せいかつ', romaji: 'seikatsu', meaning: '生活', pos: '名詞' },
      { jp: 'シャワー', kana: 'シャワー', romaji: 'shawaa', meaning: '淋浴', pos: '名詞' },
      { jp: '浴びます', kana: 'あびます', romaji: 'abimasu', meaning: '冲（澡）', pos: '動詞II' },
    ],
    grammar: [
      {
        pattern: 'V て、V て、V ます',
        name: 'て形连接动作',
        explain: '用动词て形依次串联多个动作，表示按时间先后发生。最后一个动作决定整体时态（て...ました 表过去）。三类动词て形规则需牢记：动词I 词尾 う/つ/る→って、く→いて(行く→行って)、ぐ→いで、す→して、ぬ/ぶ/む→んで；动词II 去る加て(食べる→食べて)；动词III: する→して、来る→来て。',
        examples: [
          {
            jp: '<ruby>朝<rt>あさ</rt></ruby><ruby>起<rt>お</rt></ruby>きて、<ruby>顔<rt>かお</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>って、ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べます。',
            plain: 'あさおきて、かおをあらって、ごはんをたべます。',
            cn: '早上起床，洗脸，吃饭。',
          },
          {
            jp: '<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んで、<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いて、<ruby>寝<rt>ね</rt></ruby>ました。',
            plain: 'ほんをよんで、おんがくをきいて、ねました。',
            cn: '读书、听音乐、然后睡了。',
          },
        ],
      },
      {
        pattern: 'V てから、V ます',
        name: '"做完...之后再..."',
        explain: '强调前一动作完成后，再做下一动作。「〜て、〜」语气较松，「〜てから、〜」更强调"先后顺序的明确性"。一句中通常只用一次「てから」，不能像「て」那样连续多个。',
        examples: [
          {
            jp: '<ruby>仕事<rt>しごと</rt></ruby>が<ruby>終<rt>お</rt></ruby>わってから、<ruby>飲<rt>の</rt></ruby>みに<ruby>行<rt>い</rt></ruby>きませんか。',
            plain: 'しごとがおわってから、のみにいきませんか。',
            cn: '下班之后要不要去喝一杯？',
          },
          {
            jp: '<ruby>手<rt>て</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>ってから、ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べてください。',
            plain: 'てをあらってから、ごはんをたべてください。',
            cn: '洗完手再吃饭。',
          },
        ],
      },
      {
        pattern: 'V たり、V たりします',
        name: '列举若干动作',
        explain: '动词た形 + り + 动词た形 + りします，表示在若干动作中举几个例子（不强调顺序）。「〜て、〜」表示连续动作，「〜たり〜たり」只是举例。',
        examples: [
          {
            jp: '<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>は<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んだり、<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>たりします。',
            plain: 'やすみのひはほんをよんだり、えいがをみたりします。',
            cn: '休息日有时读书，有时看电影。',
          },
        ],
      },
      {
        pattern: 'V ながら、V ます',
        name: '"一边...一边..."',
        explain: '动词ます形去ます加ながら，表示同一主语同时进行两个动作。后面那个动作是主要动作。两个动作必须是可以同时进行的。',
        examples: [
          {
            jp: '<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きながら<ruby>勉強<rt>べんきょう</rt></ruby>します。',
            plain: 'おんがくをききながらべんきょうします。',
            cn: '一边听音乐一边学习。',
          },
        ],
      },
      {
        pattern: 'V て + います（结果残存）',
        name: 'て形 + います 的另一用法',
        explain: '部分动作动词的「ています」表示动作结果留下的状态，如「ドアが開いています」（门开着 / 处于开着的状态）。这种用法不是"正在打开门"。',
        examples: [
          {
            jp: 'ドアが<ruby>開<rt>あ</rt></ruby>いています。',
            plain: 'ドアがあいています。',
            cn: '门开着。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 12 課 — 普通形入門
  // ========================================================
  {
    id: 12,
    level: 'N4',
    title: {
      jp: '<ruby>普通形<rt>ふつうけい</rt></ruby><ruby>入門<rt>にゅうもん</rt></ruby>',
      romaji: 'futsuu-kei nyuumon',
      cn: '常体入门',
      en: 'Plain Form Basics',
    },
    goals: [
      '掌握动词、形容词、名词的常体活用',
      '理解什么场合用常体（普通形）',
      '能在朋友间的会话中自然使用常体',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '<ruby>友達<rt>ともだち</rt></ruby>とのチャット',
          romaji: 'tomodachi to no chatto',
          cn: '与朋友的聊天',
        },
        sentences: [
          {
            jp: '（リン）<ruby>今<rt>いま</rt></ruby><ruby>何<rt>なに</rt></ruby>してる？',
            plain: '（リン）いまなにしてる？',
            romaji: '(Rin) ima nani shiteru?',
            cn: '（铃）你在干嘛？',
          },
          {
            jp: '（<ruby>王<rt>おう</rt></ruby>）<ruby>家<rt>いえ</rt></ruby>でドラマ<ruby>見<rt>み</rt></ruby>てる。<ruby>面白<rt>おもしろ</rt></ruby>いよ。',
            plain: '（おう）いえでドラマみてる。おもしろいよ。',
            romaji: '(Ou) ie de dorama miteru. omoshiroi yo.',
            cn: '（王）在家看剧呢。挺好看。',
          },
          {
            jp: '（リン）へえ、<ruby>何<rt>なに</rt></ruby>のドラマ？',
            plain: '（リン）へえ、なにのドラマ？',
            romaji: '(Rin) hee, nan no dorama?',
            cn: '（铃）哦，什么剧？',
          },
          {
            jp: '（<ruby>王<rt>おう</rt></ruby>）<ruby>韓国<rt>かんこく</rt></ruby>のラブストーリー。<ruby>泣<rt>な</rt></ruby>けるんだ。',
            plain: '（おう）かんこくのラブストーリー。なけるんだ。',
            romaji: '(Ou) Kankoku no rabu-sutoorii. nakeru-n da.',
            cn: '（王）韩国的爱情剧。挺催泪的。',
          },
          {
            jp: '（リン）<ruby>私<rt>わたし</rt></ruby>もそういうの<ruby>好<rt>す</rt></ruby>き。<ruby>明日<rt>あした</rt></ruby><ruby>暇<rt>ひま</rt></ruby>？',
            plain: '（リン）わたしもそういうのすき。あしたひま？',
            romaji: '(Rin) watashi mo sou iu no suki. ashita hima?',
            cn: '（铃）我也喜欢那种。明天有空吗？',
          },
          {
            jp: '（<ruby>王<rt>おう</rt></ruby>）<ruby>午後<rt>ごご</rt></ruby>は<ruby>暇<rt>ひま</rt></ruby>。<ruby>夜<rt>よる</rt></ruby>はバイトある。',
            plain: '（おう）ごごはひま。よるはバイトある。',
            romaji: '(Ou) gogo wa hima. yoru wa baito aru.',
            cn: '（王）下午有空。晚上有兼职。',
          },
          {
            jp: '（リン）じゃあ、<ruby>午後<rt>ごご</rt></ruby><ruby>一緒<rt>いっしょ</rt></ruby>にカフェ<ruby>行<rt>い</rt></ruby>かない？',
            plain: '（リン）じゃあ、ごごいっしょにカフェいかない？',
            romaji: '(Rin) jaa, gogo issho ni kafe ikanai?',
            cn: '（铃）那下午一起去咖啡厅吗？',
          },
          {
            jp: '（<ruby>王<rt>おう</rt></ruby>）<ruby>行<rt>い</rt></ruby>く<ruby>行<rt>い</rt></ruby>く！<ruby>二時<rt>にじ</rt></ruby>に<ruby>駅<rt>えき</rt></ruby>でいい？',
            plain: '（おう）いくいく！にじにえきでいい？',
            romaji: '(Ou) iku iku! ni-ji ni eki de ii?',
            cn: '（王）去去！两点车站见行吗？',
          },
          {
            jp: '（リン）オッケー！<ruby>楽<rt>たの</rt></ruby>しみ。',
            plain: '（リン）オッケー！たのしみ。',
            romaji: '(Rin) okkee! tanoshimi.',
            cn: '（铃）OK！期待。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '<ruby>日記<rt>にっき</rt></ruby>の<ruby>一日<rt>いちにち</rt></ruby>',
          romaji: 'nikki no ichi-nichi',
          cn: '日记中的一天',
        },
        sentences: [
          {
            jp: '<ruby>今日<rt>きょう</rt></ruby>はいい<ruby>天気<rt>てんき</rt></ruby>だった。',
            plain: 'きょうはいいてんきだった。',
            romaji: 'kyou wa ii tenki datta.',
            cn: '今天天气很好。',
          },
          {
            jp: '<ruby>朝<rt>あさ</rt></ruby><ruby>公園<rt>こうえん</rt></ruby>を<ruby>散歩<rt>さんぽ</rt></ruby>した。<ruby>桜<rt>さくら</rt></ruby>がきれいだった。',
            plain: 'あさこうえんをさんぽした。さくらがきれいだった。',
            romaji: 'asa kouen o sanpo shita. sakura ga kirei datta.',
            cn: '早上在公园散了步。樱花很漂亮。',
          },
          {
            jp: '<ruby>昼<rt>ひる</rt></ruby>は<ruby>家<rt>いえ</rt></ruby>でラーメンを<ruby>作<rt>つく</rt></ruby>って<ruby>食<rt>た</rt></ruby>べた。<ruby>美味<rt>おい</rt></ruby>しかった。',
            plain: 'ひるはいえでラーメンをつくってたべた。おいしかった。',
            romaji: 'hiru wa ie de raamen o tsukutte tabeta. oishikatta.',
            cn: '中午在家做了拉面吃。好吃。',
          },
          {
            jp: '<ruby>午後<rt>ごご</rt></ruby>は<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んだ。<ruby>難<rt>むずか</rt></ruby>しくなかった。',
            plain: 'ごごはほんをよんだ。むずかしくなかった。',
            romaji: 'gogo wa hon o yonda. muzukashikunakatta.',
            cn: '下午看了书。不难。',
          },
          {
            jp: '<ruby>夜<rt>よる</rt></ruby>は<ruby>友達<rt>ともだち</rt></ruby>から<ruby>電話<rt>でんわ</rt></ruby>が<ruby>来<rt>き</rt></ruby>た。<ruby>長<rt>なが</rt></ruby>く<ruby>話<rt>はな</rt></ruby>した。',
            plain: 'よるはともだちからでんわがきた。ながくはなした。',
            romaji: 'yoru wa tomodachi kara denwa ga kita. nagaku hanashita.',
            cn: '晚上朋友打来电话。聊了很久。',
          },
          {
            jp: '<ruby>今日<rt>きょう</rt></ruby>はいい<ruby>一日<rt>いちにち</rt></ruby>だった。',
            plain: 'きょうはいいいちにちだった。',
            romaji: 'kyou wa ii ichi-nichi datta.',
            cn: '今天是不错的一天。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '<ruby>先輩<rt>せんぱい</rt></ruby>が<ruby>後輩<rt>こうはい</rt></ruby>に<ruby>普通形<rt>ふつうけい</rt></ruby>の<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を<ruby>説明<rt>せつめい</rt></ruby>する。',
        cn: '前辈向后辈解释常体的用法。',
      },
      lines: [
        {
          speaker: '後輩',
          jp: '<ruby>先輩<rt>せんぱい</rt></ruby>、<ruby>普通形<rt>ふつうけい</rt></ruby>はいつ<ruby>使<rt>つか</rt></ruby>うんですか。',
          plain: 'せんぱい、ふつうけいはいつつかうんですか。',
          romaji: 'senpai, futsuu-kei wa itsu tsukau-n desu ka.',
          cn: '前辈，常体什么时候用？',
        },
        {
          speaker: '先輩',
          jp: '<ruby>友達<rt>ともだち</rt></ruby>や<ruby>家族<rt>かぞく</rt></ruby>と<ruby>話<rt>はな</rt></ruby>す<ruby>時<rt>とき</rt></ruby>に<ruby>使<rt>つか</rt></ruby>うよ。<ruby>会社<rt>かいしゃ</rt></ruby>では<ruby>使<rt>つか</rt></ruby>わない<ruby>方<rt>ほう</rt></ruby>がいい。',
          plain: 'ともだちやかぞくとはなすときにつかうよ。かいしゃではつかわないほうがいい。',
          romaji: 'tomodachi ya kazoku to hanasu toki ni tsukau yo. kaisha de wa tsukawanai hou ga ii.',
          cn: '和朋友、家人说话时用。在公司不用比较好。',
        },
        {
          speaker: '後輩',
          jp: '<ruby>先輩<rt>せんぱい</rt></ruby>に<ruby>使<rt>つか</rt></ruby>っても<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。',
          plain: 'せんぱいにつかってもだいじょうぶですか。',
          romaji: 'senpai ni tsukatte mo daijoubu desu ka.',
          cn: '对前辈用也可以吗？',
        },
        {
          speaker: '先輩',
          jp: 'ううん、<ruby>普通<rt>ふつう</rt></ruby>はだめ。<ruby>仲<rt>なか</rt></ruby>がよくなってからね。',
          plain: 'ううん、ふつうはだめ。なかがよくなってからね。',
          romaji: 'uun, futsuu wa dame. naka ga yoku natte kara ne.',
          cn: '不，一般不行。要等关系好了再用。',
        },
        {
          speaker: '後輩',
          jp: 'なるほど。<ruby>失礼<rt>しつれい</rt></ruby>になるんですね。',
          plain: 'なるほど。しつれいになるんですね。',
          romaji: 'naruhodo. shitsurei ni naru-n desu ne.',
          cn: '原来如此。会很失礼啊。',
        },
        {
          speaker: '先輩',
          jp: 'そう。<ruby>距離感<rt>きょりかん</rt></ruby>が<ruby>大切<rt>たいせつ</rt></ruby>。',
          plain: 'そう。きょりかんがたいせつ。',
          romaji: 'sou. kyorikan ga taisetsu.',
          cn: '对。距离感很重要。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>王<rt>おう</rt></ruby>さんは<ruby>今<rt>いま</rt></ruby><ruby>何<rt>なに</rt></ruby>をしていますか。',
          plain: 'おうさんはいまなにをしていますか。',
          romaji: 'Ou-san wa ima nani o shiteimasu ka.',
          cn: '小王现在在做什么？',
        },
        a: {
          jp: '<ruby>家<rt>いえ</rt></ruby>でドラマを<ruby>見<rt>み</rt></ruby>ています。',
          plain: 'いえでドラマをみています。',
          romaji: 'ie de dorama o miteimasu.',
          cn: '在家看剧。',
        },
      },
      {
        q: {
          jp: '<ruby>明日<rt>あした</rt></ruby>、<ruby>二人<rt>ふたり</rt></ruby>はどこで<ruby>会<rt>あ</rt></ruby>いますか。',
          plain: 'あした、ふたりはどこであいますか。',
          romaji: 'ashita, futari wa doko de aimasu ka.',
          cn: '明天两个人在哪里见？',
        },
        a: {
          jp: '<ruby>二時<rt>にじ</rt></ruby>に<ruby>駅<rt>えき</rt></ruby>で<ruby>会<rt>あ</rt></ruby>います。',
          plain: 'にじにえきであいます。',
          romaji: 'ni-ji ni eki de aimasu.',
          cn: '两点在车站见。',
        },
      },
      {
        q: {
          jp: '<ruby>普通形<rt>ふつうけい</rt></ruby>を<ruby>先輩<rt>せんぱい</rt></ruby>に<ruby>使<rt>つか</rt></ruby>ってもいいですか。',
          plain: 'ふつうけいをせんぱいにつかってもいいですか。',
          romaji: 'futsuu-kei o senpai ni tsukatte mo ii desu ka.',
          cn: '可以对前辈使用常体吗？',
        },
        a: {
          jp: '<ruby>普通<rt>ふつう</rt></ruby>はだめです。<ruby>仲<rt>なか</rt></ruby>がよくなってからです。',
          plain: 'ふつうはだめです。なかがよくなってからです。',
          romaji: 'futsuu wa dame desu. naka ga yoku natte kara desu.',
          cn: '一般不行。要等关系好了之后。',
        },
        hint: '常体不是"不礼貌"，但要看人际距离。',
      },
      {
        q: {
          jp: '<ruby>日記<rt>にっき</rt></ruby>を<ruby>書<rt>か</rt></ruby>く<ruby>時<rt>とき</rt></ruby>、ですますを<ruby>使<rt>つか</rt></ruby>いますか。',
          plain: 'にっきをかくとき、ですますをつかいますか。',
          romaji: 'nikki o kaku toki, desu-masu o tsukaimasu ka.',
          cn: '写日记的时候用です・ます吗？',
        },
        a: {
          jp: 'いいえ、<ruby>普通<rt>ふつう</rt></ruby>は<ruby>普通形<rt>ふつうけい</rt></ruby>で<ruby>書<rt>か</rt></ruby>きます。',
          plain: 'いいえ、ふつうはふつうけいでかきます。',
          romaji: 'iie, futsuu wa futsuu-kei de kakimasu.',
          cn: '不，一般用常体写。',
        },
      },
    ],
    vocabulary: [
      { jp: 'ドラマ', kana: 'ドラマ', romaji: 'dorama', meaning: '电视剧', pos: '名詞' },
      { jp: '韓国', kana: 'かんこく', romaji: 'Kankoku', meaning: '韩国', pos: '名詞' },
      { jp: 'ラブストーリー', kana: 'ラブストーリー', romaji: 'rabu-sutoorii', meaning: '爱情故事', pos: '名詞' },
      { jp: '泣きます', kana: 'なきます', romaji: 'nakimasu', meaning: '哭', pos: '動詞I' },
      { jp: '暇', kana: 'ひま', romaji: 'hima', meaning: '空闲', pos: 'な形容詞' },
      { jp: 'バイト', kana: 'バイト', romaji: 'baito', meaning: '兼职', pos: '名詞' },
      { jp: '楽しみ', kana: 'たのしみ', romaji: 'tanoshimi', meaning: '期待；乐趣', pos: '名詞' },
      { jp: '日記', kana: 'にっき', romaji: 'nikki', meaning: '日记', pos: '名詞' },
      { jp: '散歩します', kana: 'さんぽします', romaji: 'sanpo shimasu', meaning: '散步', pos: '動詞III' },
      { jp: '桜', kana: 'さくら', romaji: 'sakura', meaning: '樱花', pos: '名詞' },
      { jp: 'ラーメン', kana: 'ラーメン', romaji: 'raamen', meaning: '拉面', pos: '名詞' },
      { jp: '難しい', kana: 'むずかしい', romaji: 'muzukashii', meaning: '难', pos: 'い形容詞' },
      { jp: '電話', kana: 'でんわ', romaji: 'denwa', meaning: '电话', pos: '名詞' },
      { jp: '長く', kana: 'ながく', romaji: 'nagaku', meaning: '长时间地', pos: '副詞' },
      { jp: '話します', kana: 'はなします', romaji: 'hanashimasu', meaning: '说；谈', pos: '動詞I' },
      { jp: '一日', kana: 'いちにち', romaji: 'ichi-nichi', meaning: '一天', pos: '名詞' },
      { jp: '先輩', kana: 'せんぱい', romaji: 'senpai', meaning: '前辈', pos: '名詞' },
      { jp: '後輩', kana: 'こうはい', romaji: 'kouhai', meaning: '后辈', pos: '名詞' },
      { jp: '普通形', kana: 'ふつうけい', romaji: 'futsuu-kei', meaning: '常体', pos: '名詞' },
      { jp: '普通', kana: 'ふつう', romaji: 'futsuu', meaning: '一般；普通', pos: '名詞' },
      { jp: '使います', kana: 'つかいます', romaji: 'tsukaimasu', meaning: '使用', pos: '動詞I' },
      { jp: '失礼', kana: 'しつれい', romaji: 'shitsurei', meaning: '失礼', pos: 'な形容詞' },
      { jp: '距離感', kana: 'きょりかん', romaji: 'kyorikan', meaning: '距离感', pos: '名詞' },
      { jp: '大切', kana: 'たいせつ', romaji: 'taisetsu', meaning: '重要', pos: 'な形容詞' },
      { jp: '仲', kana: 'なか', romaji: 'naka', meaning: '关系；交情', pos: '名詞' },
      { jp: 'なるほど', kana: 'なるほど', romaji: 'naruhodo', meaning: '原来如此', pos: '感動詞' },
      { jp: 'だめ', kana: 'だめ', romaji: 'dame', meaning: '不行；不可以', pos: 'な形容詞' },
      { jp: 'オッケー', kana: 'オッケー', romaji: 'okkee', meaning: 'OK', pos: '感動詞' },
    ],
    grammar: [
      {
        pattern: '動詞の普通形（辞書形・ない形・た形・なかった形）',
        name: '动词常体活用',
        explain: '动词常体四个形：肯定现在=辞書形（書く）、否定现在=ない形（書かない）、肯定过去=た形（書いた）、否定过去=なかった形（書かなかった）。三类动词的活用各异。动词I：词尾あ段+ない（書かない/書いた），书く→書いた等同て形规则；动词II：去る加ない/た（食べない/食べた）；动词III：する→しない/した、来る→来ない/来た。',
        examples: [
          {
            jp: '<ruby>行<rt>い</rt></ruby>く / <ruby>行<rt>い</rt></ruby>かない / <ruby>行<rt>い</rt></ruby>った / <ruby>行<rt>い</rt></ruby>かなかった',
            plain: 'いく / いかない / いった / いかなかった',
            cn: '去 / 不去 / 去了 / 没去',
          },
          {
            jp: '<ruby>食<rt>た</rt></ruby>べる / <ruby>食<rt>た</rt></ruby>べない / <ruby>食<rt>た</rt></ruby>べた / <ruby>食<rt>た</rt></ruby>べなかった',
            plain: 'たべる / たべない / たべた / たべなかった',
            cn: '吃 / 不吃 / 吃了 / 没吃',
          },
        ],
      },
      {
        pattern: 'い形容詞・な形容詞の普通形',
        name: '形容词常体活用',
        explain: 'い形容詞：いい→よかった/よくない/よくなかった；高い→高かった/高くない/高くなかった（去い加かった/くない/くなかった）。な形容詞和名词：「だ／じゃない／だった／じゃなかった」。注意：な形容词的"だ"在做连体修饰时变为「な」(きれいな花)。',
        examples: [
          {
            jp: '<ruby>美味<rt>おい</rt></ruby>しい / <ruby>美味<rt>おい</rt></ruby>しくない / <ruby>美味<rt>おい</rt></ruby>しかった',
            plain: 'おいしい / おいしくない / おいしかった',
            cn: '好吃 / 不好吃 / 好吃了',
          },
          {
            jp: '<ruby>暇<rt>ひま</rt></ruby>だ / <ruby>暇<rt>ひま</rt></ruby>じゃない / <ruby>暇<rt>ひま</rt></ruby>だった',
            plain: 'ひまだ / ひまじゃない / ひまだった',
            cn: '空闲 / 不空闲 / 空闲了（曾）',
          },
        ],
      },
      {
        pattern: '名詞の普通形',
        name: '名词常体',
        explain: '名词的常体形式：N だ / N じゃない / N だった / N じゃなかった。会话中"だ"经常被省略：「<ruby>学生<rt>がくせい</rt></ruby>？」「うん、<ruby>学生<rt>がくせい</rt></ruby>。」',
        examples: [
          {
            jp: '<ruby>明日<rt>あした</rt></ruby>は<ruby>休<rt>やす</rt></ruby>みだ。',
            plain: 'あしたはやすみだ。',
            cn: '明天是休息日。',
          },
        ],
      },
      {
        pattern: '常体使用场合',
        name: '常体何时使用',
        explain: '常体不等于"不礼貌"，而是关系亲密的标志。使用对象：朋友、家人、晚辈、心里独白、日记、笔记、新闻标题、小说叙述。绝对不用：刚认识的人、客户、上司、长辈、面试。判断关键是"距离感"。',
        examples: [
          {
            jp: '<ruby>明日<rt>あした</rt></ruby><ruby>暇<rt>ひま</rt></ruby>？<ruby>映画<rt>えいが</rt></ruby><ruby>見<rt>み</rt></ruby>に<ruby>行<rt>い</rt></ruby>かない？',
            plain: 'あしたひま？えいがみにいかない？',
            cn: '明天有空吗？要不要去看电影？',
          },
        ],
      },
      {
        pattern: 'V ない方がいい',
        name: '"不...比较好"的劝告',
        explain: '动词ない形 + 方がいい，表示劝告对方不要做某事。肯定形「V た方がいい」（动词た形 + 方がいい）表示劝告做某事。注意是た形，不是辞書形。',
        examples: [
          {
            jp: 'タバコは<ruby>吸<rt>す</rt></ruby>わない<ruby>方<rt>ほう</rt></ruby>がいいです。',
            plain: 'タバコはすわないほうがいいです。',
            cn: '不抽烟比较好。',
          },
          {
            jp: '<ruby>早<rt>はや</rt></ruby>く<ruby>寝<rt>ね</rt></ruby>た<ruby>方<rt>ほう</rt></ruby>がいいですよ。',
            plain: 'はやくねたほうがいいですよ。',
            cn: '早点睡比较好哦。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 13 課 — 可能形
  // ========================================================
  {
    id: 13,
    level: 'N4',
    title: {
      jp: '<ruby>可能形<rt>かのうけい</rt></ruby>',
      romaji: 'kanou-kei',
      cn: '可能形',
      en: 'Potential Form',
    },
    goals: [
      '掌握三类动词的可能形变化',
      '能用「〜ことができます」表达能力',
      '理解可能形中助词「を」变「が」的规则',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '<ruby>私<rt>わたし</rt></ruby>のできること',
          romaji: 'watashi no dekiru koto',
          cn: '我能做的事',
        },
        sentences: [
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>はリンと<ruby>申<rt>もう</rt></ruby>します。<ruby>中国<rt>ちゅうごく</rt></ruby>から<ruby>来<rt>き</rt></ruby>ました。',
            plain: 'わたしはリンともうします。ちゅうごくからきました。',
            romaji: 'watashi wa Rin to moushimasu. Chuugoku kara kimashita.',
            cn: '我叫小铃，从中国来。',
          },
          {
            jp: '<ruby>中国語<rt>ちゅうごくご</rt></ruby>と<ruby>英語<rt>えいご</rt></ruby>と<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>話<rt>はな</rt></ruby>せます。',
            plain: 'ちゅうごくごとえいごとにほんごがはなせます。',
            romaji: 'Chuugokugo to eigo to nihongo ga hanasemasu.',
            cn: '我会说中文、英语和日语。',
          },
          {
            jp: '<ruby>日本語<rt>にほんご</rt></ruby>はまだ<ruby>難<rt>むずか</rt></ruby>しい<ruby>本<rt>ほん</rt></ruby>は<ruby>読<rt>よ</rt></ruby>めませんが、<ruby>新聞<rt>しんぶん</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<ruby>読<rt>よ</rt></ruby>めます。',
            plain: 'にほんごはまだむずかしいほんはよめませんが、しんぶんはすこしよめます。',
            romaji: 'nihongo wa mada muzukashii hon wa yomemasen ga, shinbun wa sukoshi yomemasu.',
            cn: '日语还读不了难的书，但报纸能读一点。',
          },
          {
            jp: '<ruby>料理<rt>りょうり</rt></ruby>もできます。<ruby>中華料理<rt>ちゅうかりょうり</rt></ruby>と<ruby>和食<rt>わしょく</rt></ruby>が<ruby>作<rt>つく</rt></ruby>れます。',
            plain: 'りょうりもできます。ちゅうかりょうりとわしょくがつくれます。',
            romaji: 'ryouri mo dekimasu. chuuka-ryouri to washoku ga tsukuremasu.',
            cn: '我也会做菜。能做中餐和日餐。',
          },
          {
            jp: 'ピアノは<ruby>少<rt>すこ</rt></ruby>し<ruby>弾<rt>ひ</rt></ruby>けます。<ruby>子<rt>こ</rt></ruby>どもの<ruby>時<rt>とき</rt></ruby>に<ruby>習<rt>なら</rt></ruby>っていました。',
            plain: 'ピアノはすこしひけます。こどものときにならっていました。',
            romaji: 'piano wa sukoshi hikemasu. kodomo no toki ni naratteimashita.',
            cn: '钢琴会弹一点。小时候学过。',
          },
          {
            jp: 'ただし、<ruby>歌<rt>うた</rt></ruby>はあまり<ruby>歌<rt>うた</rt></ruby>えません。<ruby>音痴<rt>おんち</rt></ruby>です。',
            plain: 'ただし、うたはあまりうたえません。おんちです。',
            romaji: 'tadashi, uta wa amari utaemasen. onchi desu.',
            cn: '不过歌不太会唱。我五音不全。',
          },
          {
            jp: '<ruby>運転<rt>うんてん</rt></ruby>は<ruby>免許<rt>めんきょ</rt></ruby>がないので、<ruby>車<rt>くるま</rt></ruby>は<ruby>運転<rt>うんてん</rt></ruby>できません。',
            plain: 'うんてんはめんきょがないので、くるまはうんてんできません。',
            romaji: 'unten wa menkyo ga nai node, kuruma wa unten dekimasen.',
            cn: '驾驶因为没驾照，不会开车。',
          },
          {
            jp: 'これから<ruby>免許<rt>めんきょ</rt></ruby>を<ruby>取<rt>と</rt></ruby>って、<ruby>運転<rt>うんてん</rt></ruby>できるようになりたいです。',
            plain: 'これからめんきょをとって、うんてんできるようになりたいです。',
            romaji: 'korekara menkyo o totte, unten dekiru you ni naritai desu.',
            cn: '今后想考取驾照，变得会开车。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '<ruby>外国語<rt>がいこくご</rt></ruby>の<ruby>学習<rt>がくしゅう</rt></ruby>',
          romaji: 'gaikokugo no gakushuu',
          cn: '外语学习',
        },
        sentences: [
          {
            jp: '<ruby>外国語<rt>がいこくご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>するのは<ruby>大変<rt>たいへん</rt></ruby>ですが、<ruby>面白<rt>おもしろ</rt></ruby>いです。',
            plain: 'がいこくごをべんきょうするのはたいへんですが、おもしろいです。',
            romaji: 'gaikokugo o benkyou suru no wa taihen desu ga, omoshiroi desu.',
            cn: '学外语很辛苦，但很有意思。',
          },
          {
            jp: '<ruby>最初<rt>さいしょ</rt></ruby>はあいさつしかできませんでした。',
            plain: 'さいしょはあいさつしかできませんでした。',
            romaji: 'saisho wa aisatsu shika dekimasen deshita.',
            cn: '最开始只会打招呼。',
          },
          {
            jp: '<ruby>三<rt>さん</rt></ruby>か<ruby>月<rt>げつ</rt></ruby><ruby>勉強<rt>べんきょう</rt></ruby>すると、<ruby>簡単<rt>かんたん</rt></ruby>な<ruby>会話<rt>かいわ</rt></ruby>ができるようになりました。',
            plain: 'さんかげつべんきょうすると、かんたんなかいわができるようになりました。',
            romaji: 'san-kagetsu benkyou suru to, kantan na kaiwa ga dekiru you ni narimashita.',
            cn: '学了三个月后，能做简单对话了。',
          },
          {
            jp: '<ruby>半年<rt>はんとし</rt></ruby><ruby>後<rt>ご</rt></ruby>には<ruby>映画<rt>えいが</rt></ruby>が<ruby>字幕<rt>じまく</rt></ruby>なしで<ruby>見<rt>み</rt></ruby>られるようになりました。',
            plain: 'はんとしごにはえいががじまくなしでみられるようになりました。',
            romaji: 'hantoshi-go ni wa eiga ga jimaku nashi de mirareru you ni narimashita.',
            cn: '半年后能不靠字幕看电影了。',
          },
          {
            jp: '<ruby>今<rt>いま</rt></ruby>では<ruby>友達<rt>ともだち</rt></ruby>と<ruby>長<rt>なが</rt></ruby>い<ruby>会話<rt>かいわ</rt></ruby>もできます。',
            plain: 'いまではともだちとながいかいわもできます。',
            romaji: 'ima de wa tomodachi to nagai kaiwa mo dekimasu.',
            cn: '现在能和朋友聊很久。',
          },
          {
            jp: '<ruby>毎日<rt>まいにち</rt></ruby><ruby>少<rt>すこ</rt></ruby>しずつ<ruby>続<rt>つづ</rt></ruby>けることが<ruby>大切<rt>たいせつ</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'まいにちすこしずつつづけることがたいせつだとおもいます。',
            romaji: 'mainichi sukoshizutsu tsuzukeru koto ga taisetsu da to omoimasu.',
            cn: '我觉得每天坚持一点点很重要。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '<ruby>面接<rt>めんせつ</rt></ruby>で、<ruby>面接官<rt>めんせつかん</rt></ruby>が<ruby>応募者<rt>おうぼしゃ</rt></ruby>に<ruby>能力<rt>のうりょく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>く。',
        cn: '面试中，面试官询问应聘者的能力。',
      },
      lines: [
        {
          speaker: '面接官',
          jp: '<ruby>英語<rt>えいご</rt></ruby>は<ruby>話<rt>はな</rt></ruby>せますか。',
          plain: 'えいごははなせますか。',
          romaji: 'eigo wa hanasemasu ka.',
          cn: '会说英语吗？',
        },
        {
          speaker: '応募者',
          jp: 'はい、<ruby>日常会話<rt>にちじょうかいわ</rt></ruby>ぐらいはできます。ビジネスの<ruby>話<rt>はなし</rt></ruby>はまだ<ruby>難<rt>むずか</rt></ruby>しいです。',
          plain: 'はい、にちじょうかいわぐらいはできます。ビジネスのはなしはまだむずかしいです。',
          romaji: 'hai, nichijou-kaiwa gurai wa dekimasu. bijinesu no hanashi wa mada muzukashii desu.',
          cn: '是的，日常会话还可以。商务话题还有难度。',
        },
        {
          speaker: '面接官',
          jp: 'パソコンは<ruby>使<rt>つか</rt></ruby>えますか。',
          plain: 'パソコンはつかえますか。',
          romaji: 'pasokon wa tsukaemasu ka.',
          cn: '会用电脑吗？',
        },
        {
          speaker: '応募者',
          jp: 'はい、ワードとエクセルが<ruby>使<rt>つか</rt></ruby>えます。<ruby>簡単<rt>かんたん</rt></ruby>な<ruby>資料<rt>しりょう</rt></ruby>も<ruby>作<rt>つく</rt></ruby>れます。',
          plain: 'はい、ワードとエクセルがつかえます。かんたんなしりょうもつくれます。',
          romaji: 'hai, waado to ekuseru ga tsukaemasu. kantan na shiryou mo tsukuremasu.',
          cn: '会用Word和Excel。也能做简单的资料。',
        },
        {
          speaker: '面接官',
          jp: '<ruby>運転免許<rt>うんてんめんきょ</rt></ruby>は<ruby>持<rt>も</rt></ruby>っていますか。',
          plain: 'うんてんめんきょはもっていますか。',
          romaji: 'unten-menkyo wa motteimasu ka.',
          cn: '有驾照吗？',
        },
        {
          speaker: '応募者',
          jp: 'いいえ、まだ<ruby>運転<rt>うんてん</rt></ruby>できません。<ruby>来年<rt>らいねん</rt></ruby><ruby>取<rt>と</rt></ruby>るつもりです。',
          plain: 'いいえ、まだうんてんできません。らいねんとるつもりです。',
          romaji: 'iie, mada unten dekimasen. rainen toru tsumori desu.',
          cn: '没有，还不会开车。打算明年考取。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: 'リンさんは<ruby>何<rt>なに</rt></ruby><ruby>語<rt>ご</rt></ruby>が<ruby>話<rt>はな</rt></ruby>せますか。',
          plain: 'リンさんはなにごがはなせますか。',
          romaji: 'Rin-san wa nani-go ga hanasemasu ka.',
          cn: '小铃会说什么语言？',
        },
        a: {
          jp: '<ruby>中国語<rt>ちゅうごくご</rt></ruby>と<ruby>英語<rt>えいご</rt></ruby>と<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>話<rt>はな</rt></ruby>せます。',
          plain: 'ちゅうごくごとえいごとにほんごがはなせます。',
          romaji: 'Chuugokugo to eigo to nihongo ga hanasemasu.',
          cn: '会说中文、英语、日语。',
        },
      },
      {
        q: {
          jp: 'リンさんは<ruby>車<rt>くるま</rt></ruby>を<ruby>運転<rt>うんてん</rt></ruby>できますか。',
          plain: 'リンさんはくるまをうんてんできますか。',
          romaji: 'Rin-san wa kuruma o unten dekimasu ka.',
          cn: '小铃会开车吗？',
        },
        a: {
          jp: 'いいえ、<ruby>免許<rt>めんきょ</rt></ruby>がないので、<ruby>運転<rt>うんてん</rt></ruby>できません。',
          plain: 'いいえ、めんきょがないので、うんてんできません。',
          romaji: 'iie, menkyo ga nai node, unten dekimasen.',
          cn: '不会，没有驾照所以不会开车。',
        },
        hint: '「ので」表示原因。',
      },
      {
        q: {
          jp: '<ruby>外国語<rt>がいこくご</rt></ruby>の<ruby>学習<rt>がくしゅう</rt></ruby>で<ruby>大切<rt>たいせつ</rt></ruby>なことは<ruby>何<rt>なん</rt></ruby>ですか。',
          plain: 'がいこくごのがくしゅうでたいせつなことはなんですか。',
          romaji: 'gaikokugo no gakushuu de taisetsu na koto wa nan desu ka.',
          cn: '学外语重要的是什么？',
        },
        a: {
          jp: '<ruby>毎日<rt>まいにち</rt></ruby><ruby>少<rt>すこ</rt></ruby>しずつ<ruby>続<rt>つづ</rt></ruby>けることです。',
          plain: 'まいにちすこしずつつづけることです。',
          romaji: 'mainichi sukoshizutsu tsuzukeru koto desu.',
          cn: '每天坚持一点点。',
        },
      },
      {
        q: {
          jp: '<ruby>応募者<rt>おうぼしゃ</rt></ruby>はパソコンで<ruby>何<rt>なに</rt></ruby>ができますか。',
          plain: 'おうぼしゃはパソコンでなにができますか。',
          romaji: 'ouboshya wa pasokon de nani ga dekimasu ka.',
          cn: '应聘者用电脑能做什么？',
        },
        a: {
          jp: 'ワードとエクセルを<ruby>使<rt>つか</rt></ruby>って、<ruby>簡単<rt>かんたん</rt></ruby>な<ruby>資料<rt>しりょう</rt></ruby>が<ruby>作<rt>つく</rt></ruby>れます。',
          plain: 'ワードとエクセルをつかって、かんたんなしりょうがつくれます。',
          romaji: 'waado to ekuseru o tsukatte, kantan na shiryou ga tsukuremasu.',
          cn: '会用Word和Excel做简单资料。',
        },
      },
    ],
    vocabulary: [
      { jp: '申します', kana: 'もうします', romaji: 'moushimasu', meaning: '叫；说（谦让）', pos: '動詞I' },
      { jp: '中国語', kana: 'ちゅうごくご', romaji: 'Chuugokugo', meaning: '中文', pos: '名詞' },
      { jp: '日本語', kana: 'にほんご', romaji: 'nihongo', meaning: '日语', pos: '名詞' },
      { jp: '中華料理', kana: 'ちゅうかりょうり', romaji: 'chuuka-ryouri', meaning: '中餐', pos: '名詞' },
      { jp: '和食', kana: 'わしょく', romaji: 'washoku', meaning: '日餐', pos: '名詞' },
      { jp: 'ピアノ', kana: 'ピアノ', romaji: 'piano', meaning: '钢琴', pos: '名詞' },
      { jp: '弾きます', kana: 'ひきます', romaji: 'hikimasu', meaning: '弹（乐器）', pos: '動詞I' },
      { jp: '習います', kana: 'ならいます', romaji: 'naraimasu', meaning: '学习', pos: '動詞I' },
      { jp: '歌', kana: 'うた', romaji: 'uta', meaning: '歌', pos: '名詞' },
      { jp: '歌います', kana: 'うたいます', romaji: 'utaimasu', meaning: '唱', pos: '動詞I' },
      { jp: '音痴', kana: 'おんち', romaji: 'onchi', meaning: '五音不全', pos: '名詞' },
      { jp: '運転', kana: 'うんてん', romaji: 'unten', meaning: '驾驶', pos: '名詞' },
      { jp: '免許', kana: 'めんきょ', romaji: 'menkyo', meaning: '执照', pos: '名詞' },
      { jp: '取ります', kana: 'とります', romaji: 'torimasu', meaning: '取得；拿', pos: '動詞I' },
      { jp: '外国語', kana: 'がいこくご', romaji: 'gaikokugo', meaning: '外语', pos: '名詞' },
      { jp: '最初', kana: 'さいしょ', romaji: 'saisho', meaning: '最初', pos: '名詞' },
      { jp: 'あいさつ', kana: 'あいさつ', romaji: 'aisatsu', meaning: '打招呼', pos: '名詞' },
      { jp: '会話', kana: 'かいわ', romaji: 'kaiwa', meaning: '会话', pos: '名詞' },
      { jp: '半年', kana: 'はんとし', romaji: 'hantoshi', meaning: '半年', pos: '名詞' },
      { jp: '字幕', kana: 'じまく', romaji: 'jimaku', meaning: '字幕', pos: '名詞' },
      { jp: '続けます', kana: 'つづけます', romaji: 'tsuzukemasu', meaning: '继续', pos: '動詞II' },
      { jp: '思います', kana: 'おもいます', romaji: 'omoimasu', meaning: '认为；觉得', pos: '動詞I' },
      { jp: '面接', kana: 'めんせつ', romaji: 'mensetsu', meaning: '面试', pos: '名詞' },
      { jp: '日常会話', kana: 'にちじょうかいわ', romaji: 'nichijou-kaiwa', meaning: '日常会话', pos: '名詞' },
      { jp: 'ビジネス', kana: 'ビジネス', romaji: 'bijinesu', meaning: '商务', pos: '名詞' },
      { jp: 'ワード', kana: 'ワード', romaji: 'waado', meaning: 'Word', pos: '名詞' },
      { jp: 'エクセル', kana: 'エクセル', romaji: 'ekuseru', meaning: 'Excel', pos: '名詞' },
      { jp: '資料', kana: 'しりょう', romaji: 'shiryou', meaning: '资料', pos: '名詞' },
      { jp: '持ちます', kana: 'もちます', romaji: 'mochimasu', meaning: '持有；拿', pos: '動詞I' },
      { jp: 'つもり', kana: 'つもり', romaji: 'tsumori', meaning: '打算', pos: '名詞' },
    ],
    grammar: [
      {
        pattern: 'V ことができます',
        name: '能力表达（基本式）',
        explain: '动词辞書形 + ことができます，表示具备某种能力或某种条件允许做某事。形式较正式，初学者最先掌握的可能表达。否定形「〜ことができません」。',
        examples: [
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>は<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>話<rt>はな</rt></ruby>すことができます。',
            plain: 'わたしはにほんごをはなすことができます。',
            cn: '我会说日语。',
          },
          {
            jp: 'ここで<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ることができません。',
            plain: 'ここでしゃしんをとることができません。',
            cn: '不能在这里拍照。',
          },
        ],
      },
      {
        pattern: '可能動詞（V える / V られる）',
        name: '可能动词',
        explain: '比「〜ことができます」更常用、更口语。变化规则：动词I 把ます形最后的"い段"变"え段"加る（書きます→書ける、読みます→読める、話します→話せる）；动词II 去る加られる（食べる→食べられる、見る→見られる）；动词III: する→できる、来る→来られる。在日常会话中，「〜られる」（动词II）常省略ら为「〜れる」（食べれる、見れる），称为"ら抜き言葉"。',
        examples: [
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>は<ruby>泳<rt>およ</rt></ruby>げます。',
            plain: 'わたしはおよげます。',
            cn: '我会游泳。',
          },
          {
            jp: 'この<ruby>漢字<rt>かんじ</rt></ruby>が<ruby>読<rt>よ</rt></ruby>めますか。',
            plain: 'このかんじがよめますか。',
            cn: '能读这个汉字吗？',
          },
          {
            jp: '<ruby>朝<rt>あさ</rt></ruby><ruby>早<rt>はや</rt></ruby>く<ruby>起<rt>お</rt></ruby>きられません。',
            plain: 'あさはやくおきられません。',
            cn: '早上起不来。',
          },
        ],
      },
      {
        pattern: 'N が V える',
        name: '可能形助词「を」→「が」',
        explain: '动词原本带「を」的宾语，变可能形后助词通常变「が」。例：本を読む（读书）→ 本が読める（能读书）。但「が」并非绝对，在长句或口语中也可用「を」（本を読める也对）。',
        examples: [
          {
            jp: '<ruby>刺身<rt>さしみ</rt></ruby>が<ruby>食<rt>た</rt></ruby>べられます。',
            plain: 'さしみがたべられます。',
            cn: '能吃生鱼片。',
          },
          {
            jp: 'ピアノが<ruby>弾<rt>ひ</rt></ruby>けます。',
            plain: 'ピアノがひけます。',
            cn: '会弹钢琴。',
          },
        ],
      },
      {
        pattern: 'V られる / できる + ようになります',
        name: '"变得能..."',
        explain: '可能形 + ようになります，表示从"原本不会"到"现在会了"的能力变化。「ように」前用动词原形或可能形，后跟「なる」表变化。否定形「〜ないようになる」。',
        examples: [
          {
            jp: '<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>話<rt>はな</rt></ruby>せるようになりました。',
            plain: 'にほんごがはなせるようになりました。',
            cn: '变得能说日语了。',
          },
        ],
      },
      {
        pattern: 'N しか〜ません',
        name: '"只有..."（限定）',
        explain: '名词 + しか + 否定形，表示"只有...（其他没有）"，强调数量少。注意一定接否定形。与「だけ」（只有...，单纯陈述）不同，「しか」带"觉得不够"的语气。',
        examples: [
          {
            jp: '<ruby>千円<rt>せんえん</rt></ruby>しかありません。',
            plain: 'せんえんしかありません。',
            cn: '只有一千日元。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 14 課 — たい・ほしい
  // ========================================================
  {
    id: 14,
    level: 'N4',
    title: {
      jp: 'たい・ほしい',
      romaji: 'tai / hoshii',
      cn: '想做・想要',
      en: 'Wants and Desires',
    },
    goals: [
      '能用「〜たい」表达自己的愿望',
      '区分「〜たい」（动作愿望）和「〜がほしい」（物品欲望）',
      '理解第三者愿望要用「〜たがる」或推测形式',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '<ruby>将来<rt>しょうらい</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>',
          romaji: 'shourai no yume',
          cn: '将来的梦想',
        },
        sentences: [
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>には<ruby>三<rt>みっ</rt></ruby>つの<ruby>夢<rt>ゆめ</rt></ruby>があります。',
            plain: 'わたしにはみっつのゆめがあります。',
            romaji: 'watashi ni wa mittsu no yume ga arimasu.',
            cn: '我有三个梦想。',
          },
          {
            jp: '<ruby>一<rt>ひと</rt></ruby>つ<ruby>目<rt>め</rt></ruby>は、<ruby>世界中<rt>せかいじゅう</rt></ruby>を<ruby>旅行<rt>りょこう</rt></ruby>したいです。',
            plain: 'ひとつめは、せかいじゅうをりょこうしたいです。',
            romaji: 'hitotsu-me wa, sekaijuu o ryokou shitai desu.',
            cn: '第一是，想周游世界。',
          },
          {
            jp: '<ruby>特<rt>とく</rt></ruby>にヨーロッパへ<ruby>行<rt>い</rt></ruby>って、<ruby>古<rt>ふる</rt></ruby>い<ruby>町<rt>まち</rt></ruby>を<ruby>歩<rt>ある</rt></ruby>きたいです。',
            plain: 'とくにヨーロッパへいって、ふるいまちをあるきたいです。',
            romaji: 'toku ni yooroppa e itte, furui machi o arukitai desu.',
            cn: '尤其想去欧洲，走访古老的城市。',
          },
          {
            jp: '<ruby>二<rt>ふた</rt></ruby>つ<ruby>目<rt>め</rt></ruby>は、<ruby>大<rt>おお</rt></ruby>きい<ruby>家<rt>いえ</rt></ruby>がほしいです。<ruby>庭<rt>にわ</rt></ruby>がある<ruby>家<rt>いえ</rt></ruby>です。',
            plain: 'ふたつめは、おおきいいえがほしいです。にわがあるいえです。',
            romaji: 'futatsu-me wa, ookii ie ga hoshii desu. niwa ga aru ie desu.',
            cn: '第二是，想要一座大房子。要带院子的。',
          },
          {
            jp: '<ruby>庭<rt>にわ</rt></ruby>で<ruby>花<rt>はな</rt></ruby>を<ruby>育<rt>そだ</rt></ruby>てたり、<ruby>犬<rt>いぬ</rt></ruby>と<ruby>遊<rt>あそ</rt></ruby>んだりしたいです。',
            plain: 'にわではなをそだてたり、いぬとあそんだりしたいです。',
            romaji: 'niwa de hana o sodatetari, inu to asondari shitai desu.',
            cn: '想在院子里种花，和狗一起玩。',
          },
          {
            jp: '<ruby>三<rt>みっ</rt></ruby>つ<ruby>目<rt>め</rt></ruby>は、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>店<rt>みせ</rt></ruby>を<ruby>持<rt>も</rt></ruby>ちたいです。',
            plain: 'みっつめは、じぶんのみせをもちたいです。',
            romaji: 'mittsu-me wa, jibun no mise o mochitai desu.',
            cn: '第三是，想拥有自己的店。',
          },
          {
            jp: '<ruby>小<rt>ちい</rt></ruby>さなカフェで、<ruby>美味<rt>おい</rt></ruby>しいコーヒーとケーキを<ruby>出<rt>だ</rt></ruby>したいです。',
            plain: 'ちいさなカフェで、おいしいコーヒーとケーキをだしたいです。',
            romaji: 'chiisa na kafe de, oishii koohii to keeki o dashitai desu.',
            cn: '想开一家小咖啡馆，提供美味的咖啡和蛋糕。',
          },
          {
            jp: '<ruby>夢<rt>ゆめ</rt></ruby>はたくさんありますが、<ruby>一<rt>ひと</rt></ruby>つずつ<ruby>叶<rt>かな</rt></ruby>えていきたいです。',
            plain: 'ゆめはたくさんありますが、ひとつずつかなえていきたいです。',
            romaji: 'yume wa takusan arimasu ga, hitotsu zutsu kanaete ikitai desu.',
            cn: '梦想有很多，想一个一个实现。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '<ruby>誕生日<rt>たんじょうび</rt></ruby>プレゼント',
          romaji: 'tanjoubi purezento',
          cn: '生日礼物',
        },
        sentences: [
          {
            jp: '<ruby>来週<rt>らいしゅう</rt></ruby>は<ruby>友達<rt>ともだち</rt></ruby>のサラちゃんの<ruby>誕生日<rt>たんじょうび</rt></ruby>です。',
            plain: 'らいしゅうはともだちのサラちゃんのたんじょうびです。',
            romaji: 'raishuu wa tomodachi no Sara-chan no tanjoubi desu.',
            cn: '下周是朋友莎拉的生日。',
          },
          {
            jp: 'サラちゃんは<ruby>新<rt>あたら</rt></ruby>しいかばんがほしがっています。',
            plain: 'サラちゃんはあたらしいかばんがほしがっています。',
            romaji: 'Sara-chan wa atarashii kaban o hoshigatteimasu.',
            cn: '莎拉想要新包包。',
          },
          {
            jp: 'でも、<ruby>本人<rt>ほんにん</rt></ruby>から<ruby>直接<rt>ちょくせつ</rt></ruby>「ほしい」と<ruby>聞<rt>き</rt></ruby>いたわけではありません。',
            plain: 'でも、ほんにんからちょくせつ「ほしい」とききいたわけではありません。',
            romaji: 'demo, honnin kara chokusetsu "hoshii" to kiita wake de wa arimasen.',
            cn: '不过不是从本人那里直接听到"想要"。',
          },
          {
            jp: 'インスタの<ruby>投稿<rt>とうこう</rt></ruby>で「このかばん<ruby>欲<rt>ほ</rt></ruby>しいなあ」と<ruby>書<rt>か</rt></ruby>いていました。',
            plain: 'インスタのとうこうで「このかばんほしいなあ」とかいていました。',
            romaji: 'insuta no toukou de "kono kaban hoshii naa" to kaiteimashita.',
            cn: 'Instagram上写"这个包好想要啊"。',
          },
          {
            jp: 'だから、<ruby>同<rt>おな</rt></ruby>じデザインを<ruby>探<rt>さが</rt></ruby>して、プレゼントしようと<ruby>思<rt>おも</rt></ruby>っています。',
            plain: 'だから、おなじデザインをさがして、プレゼントしようとおもっています。',
            romaji: 'dakara, onaji dezain o sagashite, purezento shiyou to omotteimasu.',
            cn: '所以打算找同样的款式，作为礼物送她。',
          },
          {
            jp: 'きっと<ruby>喜<rt>よろこ</rt></ruby>んでくれると<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'きっとよろこんでくれるとおもいます。',
            romaji: 'kitto yorokonde kureru to omoimasu.',
            cn: '我想她一定会很开心。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '<ruby>友達<rt>ともだち</rt></ruby><ruby>同士<rt>どうし</rt></ruby>が<ruby>夏休<rt>なつやす</rt></ruby>みの<ruby>計画<rt>けいかく</rt></ruby>を<ruby>話<rt>はな</rt></ruby>している。',
        cn: '朋友间讨论暑假计划。',
      },
      lines: [
        {
          speaker: '山田',
          jp: '<ruby>夏休<rt>なつやす</rt></ruby>み、<ruby>何<rt>なに</rt></ruby>がしたい？',
          plain: 'なつやすみ、なにがしたい？',
          romaji: 'natsuyasumi, nani ga shitai?',
          cn: '暑假想做什么？',
        },
        {
          speaker: '佐藤',
          jp: '<ruby>海<rt>うみ</rt></ruby>に<ruby>行<rt>い</rt></ruby>って、ゆっくりしたい。<ruby>沖縄<rt>おきなわ</rt></ruby>がいいなあ。',
          plain: 'うみにいって、ゆっくりしたい。おきなわがいいなあ。',
          romaji: 'umi ni itte, yukkuri shitai. Okinawa ga ii naa.',
          cn: '想去海边好好放松。冲绳挺不错。',
        },
        {
          speaker: '山田',
          jp: 'いいね。<ruby>私<rt>わたし</rt></ruby>は<ruby>新<rt>あたら</rt></ruby>しいカメラがほしい。<ruby>旅行<rt>りょこう</rt></ruby>で<ruby>使<rt>つか</rt></ruby>いたいんだ。',
          plain: 'いいね。わたしはあたらしいカメラがほしい。りょこうでつかいたいんだ。',
          romaji: 'ii ne. watashi wa atarashii kamera ga hoshii. ryokou de tsukaitai-n da.',
          cn: '不错。我想要新相机。想在旅行时用。',
        },
        {
          speaker: '佐藤',
          jp: 'カメラいいね。じゃあ、<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>かない？',
          plain: 'カメラいいね。じゃあ、いっしょにいかない？',
          romaji: 'kamera ii ne. jaa, issho ni ikanai?',
          cn: '相机好啊。那要不要一起去？',
        },
        {
          speaker: '山田',
          jp: '<ruby>行<rt>い</rt></ruby>きたい！でも、<ruby>飛行機代<rt>ひこうきだい</rt></ruby>が<ruby>高<rt>たか</rt></ruby>そう…。',
          plain: 'いきたい！でも、ひこうきだいがたかそう…。',
          romaji: 'ikitai! demo, hikouki-dai ga takasou…',
          cn: '想去！但是机票好像很贵…。',
        },
        {
          speaker: '佐藤',
          jp: '<ruby>早<rt>はや</rt></ruby>めに<ruby>予約<rt>よやく</rt></ruby>すれば<ruby>安<rt>やす</rt></ruby>くなるよ。<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>調<rt>しら</rt></ruby>べよう。',
          plain: 'はやめによやくすればやすくなるよ。いっしょにしらべよう。',
          romaji: 'hayame ni yoyaku sureba yasuku naru yo. issho ni shirabeyou.',
          cn: '早点预订就便宜。一起查查看。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>私<rt>わたし</rt></ruby>のヨーロッパでの<ruby>夢<rt>ゆめ</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。',
          plain: 'わたしのヨーロッパでのゆめはなんですか。',
          romaji: 'watashi no yooroppa de no yume wa nan desu ka.',
          cn: '我在欧洲的梦想是什么？',
        },
        a: {
          jp: '<ruby>古<rt>ふる</rt></ruby>い<ruby>町<rt>まち</rt></ruby>を<ruby>歩<rt>ある</rt></ruby>きたいです。',
          plain: 'ふるいまちをあるきたいです。',
          romaji: 'furui machi o arukitai desu.',
          cn: '想走访古老的城市。',
        },
      },
      {
        q: {
          jp: 'どんな<ruby>家<rt>いえ</rt></ruby>がほしいですか。',
          plain: 'どんないえがほしいですか。',
          romaji: 'donna ie ga hoshii desu ka.',
          cn: '想要什么样的房子？',
        },
        a: {
          jp: '<ruby>庭<rt>にわ</rt></ruby>がある<ruby>大<rt>おお</rt></ruby>きい<ruby>家<rt>いえ</rt></ruby>がほしいです。',
          plain: 'にわがあるおおきいいえがほしいです。',
          romaji: 'niwa ga aru ookii ie ga hoshii desu.',
          cn: '想要带院子的大房子。',
        },
      },
      {
        q: {
          jp: 'サラちゃんは<ruby>何<rt>なに</rt></ruby>をほしがっていますか。',
          plain: 'サラちゃんはなにをほしがっていますか。',
          romaji: 'Sara-chan wa nani o hoshigatteimasu ka.',
          cn: '莎拉想要什么？',
        },
        a: {
          jp: '<ruby>新<rt>あたら</rt></ruby>しいかばんをほしがっています。',
          plain: 'あたらしいかばんをほしがっています。',
          romaji: 'atarashii kaban o hoshigatteimasu.',
          cn: '她想要新包包。',
        },
        hint: '第三者的愿望用「ほしがる」。',
      },
      {
        q: {
          jp: '<ruby>佐藤<rt>さとう</rt></ruby>さんは<ruby>夏休<rt>なつやす</rt></ruby>み、どこへ<ruby>行<rt>い</rt></ruby>きたいですか。',
          plain: 'さとうさんはなつやすみ、どこへいきたいですか。',
          romaji: 'Satou-san wa natsuyasumi, doko e ikitai desu ka.',
          cn: '佐藤暑假想去哪？',
        },
        a: {
          jp: '<ruby>沖縄<rt>おきなわ</rt></ruby>の<ruby>海<rt>うみ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>って、ゆっくりしたいです。',
          plain: 'おきなわのうみへいって、ゆっくりしたいです。',
          romaji: 'Okinawa no umi e itte, yukkuri shitai desu.',
          cn: '想去冲绳的海边好好放松。',
        },
      },
    ],
    vocabulary: [
      { jp: '夢', kana: 'ゆめ', romaji: 'yume', meaning: '梦想；梦', pos: '名詞' },
      { jp: '将来', kana: 'しょうらい', romaji: 'shourai', meaning: '将来', pos: '名詞' },
      { jp: '世界中', kana: 'せかいじゅう', romaji: 'sekaijuu', meaning: '全世界', pos: '名詞' },
      { jp: '旅行します', kana: 'りょこうします', romaji: 'ryokou shimasu', meaning: '旅行', pos: '動詞III' },
      { jp: 'ヨーロッパ', kana: 'ヨーロッパ', romaji: 'yooroppa', meaning: '欧洲', pos: '名詞' },
      { jp: '古い', kana: 'ふるい', romaji: 'furui', meaning: '旧；古老', pos: 'い形容詞' },
      { jp: '庭', kana: 'にわ', romaji: 'niwa', meaning: '院子', pos: '名詞' },
      { jp: '育てます', kana: 'そだてます', romaji: 'sodatemasu', meaning: '培育', pos: '動詞II' },
      { jp: '花', kana: 'はな', romaji: 'hana', meaning: '花', pos: '名詞' },
      { jp: '犬', kana: 'いぬ', romaji: 'inu', meaning: '狗', pos: '名詞' },
      { jp: '遊びます', kana: 'あそびます', romaji: 'asobimasu', meaning: '玩耍', pos: '動詞I' },
      { jp: '自分', kana: 'じぶん', romaji: 'jibun', meaning: '自己', pos: '名詞' },
      { jp: '店', kana: 'みせ', romaji: 'mise', meaning: '店', pos: '名詞' },
      { jp: 'ケーキ', kana: 'ケーキ', romaji: 'keeki', meaning: '蛋糕', pos: '名詞' },
      { jp: '叶えます', kana: 'かなえます', romaji: 'kanaemasu', meaning: '实现', pos: '動詞II' },
      { jp: '誕生日', kana: 'たんじょうび', romaji: 'tanjoubi', meaning: '生日', pos: '名詞' },
      { jp: 'プレゼント', kana: 'プレゼント', romaji: 'purezento', meaning: '礼物', pos: '名詞' },
      { jp: 'かばん', kana: 'かばん', romaji: 'kaban', meaning: '包', pos: '名詞' },
      { jp: 'ほしがります', kana: 'ほしがります', romaji: 'hoshigarimasu', meaning: '（第三者）想要', pos: '動詞I' },
      { jp: '本人', kana: 'ほんにん', romaji: 'honnin', meaning: '本人', pos: '名詞' },
      { jp: '直接', kana: 'ちょくせつ', romaji: 'chokusetsu', meaning: '直接', pos: '副詞' },
      { jp: '投稿', kana: 'とうこう', romaji: 'toukou', meaning: '投稿；发帖', pos: '名詞' },
      { jp: 'デザイン', kana: 'デザイン', romaji: 'dezain', meaning: '设计；款式', pos: '名詞' },
      { jp: '探します', kana: 'さがします', romaji: 'sagashimasu', meaning: '寻找', pos: '動詞I' },
      { jp: '喜びます', kana: 'よろこびます', romaji: 'yorokobimasu', meaning: '高兴', pos: '動詞I' },
      { jp: 'カメラ', kana: 'カメラ', romaji: 'kamera', meaning: '相机', pos: '名詞' },
      { jp: '海', kana: 'うみ', romaji: 'umi', meaning: '海', pos: '名詞' },
      { jp: '飛行機代', kana: 'ひこうきだい', romaji: 'hikouki-dai', meaning: '机票钱', pos: '名詞' },
      { jp: '予約します', kana: 'よやくします', romaji: 'yoyaku shimasu', meaning: '预订', pos: '動詞III' },
      { jp: '調べます', kana: 'しらべます', romaji: 'shirabemasu', meaning: '调查；查', pos: '動詞II' },
    ],
    grammar: [
      {
        pattern: 'V たい（です）',
        name: '"想做..."（自己愿望）',
        explain: '动词ます形去ます加たい。「〜たい」本身是い形容词活用：肯定たい、否定たくない、过去たかった、否定过去たくなかった。只能描述"自己"或"问对方"的愿望，绝不能直接描述第三者愿望。助词「を」可换「が」（コーヒーを飲みたい / コーヒーが飲みたい 都对）。',
        examples: [
          {
            jp: '<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きたいです。',
            plain: 'にほんへいきたいです。',
            cn: '想去日本。',
          },
          {
            jp: '<ruby>今<rt>いま</rt></ruby>は<ruby>何<rt>なに</rt></ruby>も<ruby>食<rt>た</rt></ruby>べたくないです。',
            plain: 'いまはなにもたべたくないです。',
            cn: '现在什么都不想吃。',
          },
        ],
      },
      {
        pattern: 'N が ほしい（です）',
        name: '"想要..."（物品欲望）',
        explain: '想要某物用「N がほしい」。「ほしい」是い形容词，活用同其他い形容词：ほしい / ほしくない / ほしかった / ほしくなかった。只能描述自己或问对方。助词必须用「が」，不能用「を」。',
        examples: [
          {
            jp: '<ruby>新<rt>あたら</rt></ruby>しいパソコンがほしいです。',
            plain: 'あたらしいパソコンがほしいです。',
            cn: '想要新电脑。',
          },
          {
            jp: '<ruby>子供<rt>こども</rt></ruby>の<ruby>時<rt>とき</rt></ruby>、<ruby>犬<rt>いぬ</rt></ruby>がほしかったです。',
            plain: 'こどものとき、いぬがほしかったです。',
            cn: '小时候想要狗。',
          },
        ],
      },
      {
        pattern: 'V たがる / N を ほしがる',
        name: '第三者愿望',
        explain: '描述第三者愿望用「〜たがる」（动词去ます加たがる）或「〜をほしがる」。注意助词从「が」变「を」。常以「〜たがっている」「〜ほしがっている」形式出现，强调当下的状态。直接说「サラさんは行きたいです」是错的；应为「サラさんは行きたがっています」或加推测「行きたいようです」。',
        examples: [
          {
            jp: '<ruby>子供<rt>こども</rt></ruby>がアイスを<ruby>食<rt>た</rt></ruby>べたがっています。',
            plain: 'こどもがアイスをたべたがっています。',
            cn: '孩子想吃冰激凌。',
          },
          {
            jp: '<ruby>弟<rt>おとうと</rt></ruby>は<ruby>新<rt>あたら</rt></ruby>しいゲームをほしがっています。',
            plain: 'おとうとはあたらしいゲームをほしがっています。',
            cn: '弟弟想要新游戏。',
          },
        ],
      },
      {
        pattern: 'V (よ)うと思います',
        name: '表达计划/打算',
        explain: '动词意志形（う/よう）+ と思います，表示自己的计划或打算。意志形：动词I 词尾"う段"变"お段"+う（行く→行こう、読む→読もう）；动词II 去る加よう（食べよう、見よう）；动词III: する→しよう、来る→来よう。比「〜たい」更接近实施层面。',
        examples: [
          {
            jp: '<ruby>今度<rt>こんど</rt></ruby>の<ruby>休<rt>やす</rt></ruby>みは<ruby>京都<rt>きょうと</rt></ruby>へ<ruby>行<rt>い</rt></ruby>こうと<ruby>思<rt>おも</rt></ruby>っています。',
            plain: 'こんどのやすみはきょうとへいこうとおもっています。',
            cn: '我打算这次假期去京都。',
          },
        ],
      },
      {
        pattern: 'A そうです（推测）',
        name: '"看起来..."',
        explain: 'い形容词去い加そう、な形容词直接加そう、动词ます形去ます加そう，表示根据外观做出的瞬间判断。注意：いい→よさそう、ない→なさそう（特例）。与表示传闻的「〜そうです」形式相同但用法不同。',
        examples: [
          {
            jp: 'このケーキは<ruby>美味<rt>おい</rt></ruby>しそうですね。',
            plain: 'このケーキはおいしそうですね。',
            cn: '这个蛋糕看起来很好吃啊。',
          },
          {
            jp: '<ruby>飛行機代<rt>ひこうきだい</rt></ruby>が<ruby>高<rt>たか</rt></ruby>そうです。',
            plain: 'ひこうきだいがたかそうです。',
            cn: '机票看起来很贵。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 15 課 — 比較
  // ========================================================
  {
    id: 15,
    level: 'N4',
    title: {
      jp: '<ruby>比較<rt>ひかく</rt></ruby>',
      romaji: 'hikaku',
      cn: '比较',
      en: 'Comparison',
    },
    goals: [
      '能用「〜より〜のほうが〜」表达两者比较',
      '能用「〜の中で〜が一番〜」表达最高级',
      '掌握「どちら」二选一的疑问句',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '<ruby>日本<rt>にほん</rt></ruby>と<ruby>中国<rt>ちゅうごく</rt></ruby>',
          romaji: 'Nihon to Chuugoku',
          cn: '日本和中国',
        },
        sentences: [
          {
            jp: '<ruby>日本<rt>にほん</rt></ruby>と<ruby>中国<rt>ちゅうごく</rt></ruby>は<ruby>近<rt>ちか</rt></ruby>い<ruby>国<rt>くに</rt></ruby>ですが、<ruby>違<rt>ちが</rt></ruby>うところもたくさんあります。',
            plain: 'にほんとちゅうごくはちかいくにですが、ちがうところもたくさんあります。',
            romaji: 'Nihon to Chuugoku wa chikai kuni desu ga, chigau tokoro mo takusan arimasu.',
            cn: '日本和中国是邻近的国家，但也有很多不同的地方。',
          },
          {
            jp: '<ruby>面積<rt>めんせき</rt></ruby>は<ruby>中国<rt>ちゅうごく</rt></ruby>のほうが<ruby>日本<rt>にほん</rt></ruby>よりずっと<ruby>大<rt>おお</rt></ruby>きいです。',
            plain: 'めんせきはちゅうごくのほうがにほんよりずっとおおきいです。',
            romaji: 'menseki wa Chuugoku no hou ga Nihon yori zutto ookii desu.',
            cn: '面积上中国比日本大得多。',
          },
          {
            jp: '<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>は、<ruby>中華料理<rt>ちゅうかりょうり</rt></ruby>のほうが<ruby>味<rt>あじ</rt></ruby>が<ruby>濃<rt>こ</rt></ruby>くて、<ruby>和食<rt>わしょく</rt></ruby>のほうがあっさりしています。',
            plain: 'たべものは、ちゅうかりょうりのほうがあじがこくて、わしょくのほうがあっさりしています。',
            romaji: 'tabemono wa, chuuka-ryouri no hou ga aji ga kokute, washoku no hou ga assari shiteimasu.',
            cn: '食物方面，中餐味道更浓，日餐则更清淡。',
          },
          {
            jp: '<ruby>気候<rt>きこう</rt></ruby>は<ruby>地域<rt>ちいき</rt></ruby>によって<ruby>違<rt>ちが</rt></ruby>いますが、<ruby>東京<rt>とうきょう</rt></ruby>より<ruby>北京<rt>ペキン</rt></ruby>のほうが<ruby>冬<rt>ふゆ</rt></ruby>が<ruby>寒<rt>さむ</rt></ruby>いです。',
            plain: 'きこうはちいきによってちがいますが、とうきょうよりペキンのほうがふゆがさむいです。',
            romaji: 'kikou wa chiiki ni yotte chigaimasu ga, Toukyou yori Pekin no hou ga fuyu ga samui desu.',
            cn: '气候因地区而异，但比起东京，北京冬天更冷。',
          },
          {
            jp: '<ruby>夏<rt>なつ</rt></ruby>はどちらも<ruby>暑<rt>あつ</rt></ruby>いですが、<ruby>湿気<rt>しっけ</rt></ruby>は<ruby>日本<rt>にほん</rt></ruby>のほうが<ruby>高<rt>たか</rt></ruby>いです。',
            plain: 'なつはどちらもあついですが、しっけはにほんのほうがたかいです。',
            romaji: 'natsu wa dochira mo atsui desu ga, shikke wa Nihon no hou ga takai desu.',
            cn: '夏天两国都很热，但湿气日本更重。',
          },
          {
            jp: '<ruby>交通<rt>こうつう</rt></ruby>では、<ruby>日本<rt>にほん</rt></ruby>の<ruby>電車<rt>でんしゃ</rt></ruby>のほうが<ruby>時間<rt>じかん</rt></ruby>が<ruby>正確<rt>せいかく</rt></ruby>です。',
            plain: 'こうつうでは、にほんのでんしゃのほうがじかんがせいかくです。',
            romaji: 'koutsuu de wa, Nihon no densha no hou ga jikan ga seikaku desu.',
            cn: '交通方面，日本的电车时间更准。',
          },
          {
            jp: '<ruby>支払<rt>しはら</rt></ruby>いの<ruby>方法<rt>ほうほう</rt></ruby>は、<ruby>中国<rt>ちゅうごく</rt></ruby>のほうがキャッシュレスが<ruby>進<rt>すす</rt></ruby>んでいます。',
            plain: 'しはらいのほうほうは、ちゅうごくのほうがキャッシュレスがすすんでいます。',
            romaji: 'shiharai no houhou wa, Chuugoku no hou ga kyasshuresu ga susundeimasu.',
            cn: '支付方式上，中国的无现金化更普及。',
          },
          {
            jp: 'どちらの<ruby>国<rt>くに</rt></ruby>も<ruby>魅力<rt>みりょく</rt></ruby>がたくさんあって、<ruby>比<rt>くら</rt></ruby>べるのは<ruby>難<rt>むずか</rt></ruby>しいです。',
            plain: 'どちらのくにもみりょくがたくさんあって、くらべるのはむずかしいです。',
            romaji: 'dochira no kuni mo miryoku ga takusan atte, kuraberu no wa muzukashii desu.',
            cn: '两国都有很多魅力，比较起来很难。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '<ruby>四季<rt>しき</rt></ruby>の<ruby>好<rt>この</rt></ruby>み',
          romaji: 'shiki no konomi',
          cn: '四季的喜好',
        },
        sentences: [
          {
            jp: '<ruby>四<rt>よっ</rt></ruby>つの<ruby>季節<rt>きせつ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で、<ruby>私<rt>わたし</rt></ruby>は<ruby>秋<rt>あき</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>好<rt>す</rt></ruby>きです。',
            plain: 'よっつのきせつのなかで、わたしはあきがいちばんすきです。',
            romaji: 'yottsu no kisetsu no naka de, watashi wa aki ga ichiban suki desu.',
            cn: '四个季节中，我最喜欢秋天。',
          },
          {
            jp: '<ruby>暑<rt>あつ</rt></ruby>すぎず、<ruby>寒<rt>さむ</rt></ruby>すぎず、ちょうどいい<ruby>気温<rt>きおん</rt></ruby>です。',
            plain: 'あつすぎず、さむすぎず、ちょうどいいきおんです。',
            romaji: 'atsusugizu, samusugizu, choudo ii kion desu.',
            cn: '不热不冷，温度刚刚好。',
          },
          {
            jp: '<ruby>夏<rt>なつ</rt></ruby>より<ruby>秋<rt>あき</rt></ruby>のほうが<ruby>過<rt>す</rt></ruby>ごしやすいです。',
            plain: 'なつよりあきのほうがすごしやすいです。',
            romaji: 'natsu yori aki no hou ga sugoshiyasui desu.',
            cn: '比起夏天，秋天更好过。',
          },
          {
            jp: '<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>も<ruby>美味<rt>おい</rt></ruby>しいです。<ruby>果物<rt>くだもの</rt></ruby>もお<ruby>米<rt>こめ</rt></ruby>も<ruby>秋<rt>あき</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby>いいです。',
            plain: 'たべものもおいしいです。くだものもおこめもあきがいちばんいいです。',
            romaji: 'tabemono mo oishii desu. kudamono mo o-kome mo aki ga ichiban ii desu.',
            cn: '食物也很好吃。水果和大米都是秋天的最好。',
          },
          {
            jp: '<ruby>友達<rt>ともだち</rt></ruby>は<ruby>春<rt>はる</rt></ruby>のほうが<ruby>好<rt>す</rt></ruby>きと<ruby>言<rt>い</rt></ruby>っています。<ruby>桜<rt>さくら</rt></ruby>がきれいだからです。',
            plain: 'ともだちははるのほうがすきといっています。さくらがきれいだからです。',
            romaji: 'tomodachi wa haru no hou ga suki to itteimasu. sakura ga kirei da kara desu.',
            cn: '朋友说更喜欢春天。因为樱花漂亮。',
          },
          {
            jp: '<ruby>人<rt>ひと</rt></ruby>によって<ruby>好<rt>この</rt></ruby>みは<ruby>違<rt>ちが</rt></ruby>いますね。',
            plain: 'ひとによってこのみはちがいますね。',
            romaji: 'hito ni yotte konomi wa chigaimasu ne.',
            cn: '每个人喜好不同呢。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '<ruby>友達<rt>ともだち</rt></ruby>と<ruby>東京<rt>とうきょう</rt></ruby>と<ruby>大阪<rt>おおさか</rt></ruby>を<ruby>比<rt>くら</rt></ruby>べる。',
        cn: '朋友间比较东京和大阪。',
      },
      lines: [
        {
          speaker: 'リン',
          jp: '<ruby>東京<rt>とうきょう</rt></ruby>と<ruby>大阪<rt>おおさか</rt></ruby>と、どちらが<ruby>住<rt>す</rt></ruby>みやすいですか。',
          plain: 'とうきょうとおおさかと、どちらがすみやすいですか。',
          romaji: 'Toukyou to Oosaka to, dochira ga sumiyasui desu ka.',
          cn: '东京和大阪，哪个更宜居？',
        },
        {
          speaker: '田中',
          jp: 'うーん、<ruby>大阪<rt>おおさか</rt></ruby>のほうが<ruby>家賃<rt>やちん</rt></ruby>が<ruby>安<rt>やす</rt></ruby>いです。<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>も<ruby>美味<rt>おい</rt></ruby>しいですよ。',
          plain: 'うーん、おおさかのほうがやちんがやすいです。たべものもおいしいですよ。',
          romaji: 'uun, Oosaka no hou ga yachin ga yasui desu. tabemono mo oishii desu yo.',
          cn: '嗯，大阪房租更便宜。食物也很美味。',
        },
        {
          speaker: 'リン',
          jp: '<ruby>仕事<rt>しごと</rt></ruby>は<ruby>東京<rt>とうきょう</rt></ruby>のほうが<ruby>多<rt>おお</rt></ruby>いですよね。',
          plain: 'しごとはとうきょうのほうがおおいですよね。',
          romaji: 'shigoto wa Toukyou no hou ga ooi desu yo ne.',
          cn: '工作是东京更多吧。',
        },
        {
          speaker: '田中',
          jp: 'そうですね。<ruby>大企業<rt>だいきぎょう</rt></ruby>は<ruby>東京<rt>とうきょう</rt></ruby>に<ruby>集中<rt>しゅうちゅう</rt></ruby>していますから、<ruby>選択肢<rt>せんたくし</rt></ruby>は<ruby>多<rt>おお</rt></ruby>いです。',
          plain: 'そうですね。だいきぎょうはとうきょうにしゅうちゅうしていますから、せんたくしはおおいです。',
          romaji: 'sou desu ne. dai-kigyou wa Toukyou ni shuuchuu shiteimasu kara, sentakushi wa ooi desu.',
          cn: '是的。大企业都集中在东京，选择更多。',
        },
        {
          speaker: 'リン',
          jp: '<ruby>人<rt>ひと</rt></ruby>はどうですか。',
          plain: 'ひとはどうですか。',
          romaji: 'hito wa dou desu ka.',
          cn: '人方面呢？',
        },
        {
          speaker: '田中',
          jp: '<ruby>大阪<rt>おおさか</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>のほうがフレンドリーだと<ruby>思<rt>おも</rt></ruby>います。<ruby>東京<rt>とうきょう</rt></ruby>はちょっと<ruby>冷<rt>つめ</rt></ruby>たいかな。',
          plain: 'おおさかのひとのほうがフレンドリーだとおもいます。とうきょうはちょっとつめたいかな。',
          romaji: 'Oosaka no hito no hou ga furendorii da to omoimasu. Toukyou wa chotto tsumetai kana.',
          cn: '我觉得大阪人更友好。东京有点冷淡吧。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>面積<rt>めんせき</rt></ruby>は<ruby>日本<rt>にほん</rt></ruby>と<ruby>中国<rt>ちゅうごく</rt></ruby>と、どちらが<ruby>大<rt>おお</rt></ruby>きいですか。',
          plain: 'めんせきはにほんとちゅうごくと、どちらがおおきいですか。',
          romaji: 'menseki wa Nihon to Chuugoku to, dochira ga ookii desu ka.',
          cn: '面积上日本和中国哪个大？',
        },
        a: {
          jp: '<ruby>中国<rt>ちゅうごく</rt></ruby>のほうがずっと<ruby>大<rt>おお</rt></ruby>きいです。',
          plain: 'ちゅうごくのほうがずっとおおきいです。',
          romaji: 'Chuugoku no hou ga zutto ookii desu.',
          cn: '中国大得多。',
        },
        hint: '「ずっと」表示"...得多"。',
      },
      {
        q: {
          jp: '<ruby>四季<rt>しき</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>私<rt>わたし</rt></ruby>は<ruby>何<rt>なに</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>好<rt>す</rt></ruby>きですか。',
          plain: 'しきのなかでわたしはなにがいちばんすきですか。',
          romaji: 'shiki no naka de watashi wa nani ga ichiban suki desu ka.',
          cn: '四季中我最喜欢什么？',
        },
        a: {
          jp: '<ruby>秋<rt>あき</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>好<rt>す</rt></ruby>きです。',
          plain: 'あきがいちばんすきです。',
          romaji: 'aki ga ichiban suki desu.',
          cn: '最喜欢秋天。',
        },
      },
      {
        q: {
          jp: '<ruby>東京<rt>とうきょう</rt></ruby>と<ruby>大阪<rt>おおさか</rt></ruby>では、<ruby>家賃<rt>やちん</rt></ruby>はどちらが<ruby>安<rt>やす</rt></ruby>いですか。',
          plain: 'とうきょうとおおさかでは、やちんはどちらがやすいですか。',
          romaji: 'Toukyou to Oosaka de wa, yachin wa dochira ga yasui desu ka.',
          cn: '东京和大阪，房租哪个便宜？',
        },
        a: {
          jp: '<ruby>大阪<rt>おおさか</rt></ruby>のほうが<ruby>安<rt>やす</rt></ruby>いです。',
          plain: 'おおさかのほうがやすいです。',
          romaji: 'Oosaka no hou ga yasui desu.',
          cn: '大阪更便宜。',
        },
      },
      {
        q: {
          jp: 'なぜ<ruby>大阪<rt>おおさか</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>のほうがいいと<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>言<rt>い</rt></ruby>っていますか。',
          plain: 'なぜおおさかのひとのほうがいいとたなかさんはいっていますか。',
          romaji: 'naze Oosaka no hito no hou ga ii to Tanaka-san wa itteimasu ka.',
          cn: '为什么田中说大阪人更好？',
        },
        a: {
          jp: 'フレンドリーだからです。<ruby>東京<rt>とうきょう</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<ruby>冷<rt>つめ</rt></ruby>たいです。',
          plain: 'フレンドリーだからです。とうきょうはすこしつめたいです。',
          romaji: 'furendorii da kara desu. Toukyou wa sukoshi tsumetai desu.',
          cn: '因为他们友好。东京有点冷淡。',
        },
      },
    ],
    vocabulary: [
      { jp: '比較', kana: 'ひかく', romaji: 'hikaku', meaning: '比较', pos: '名詞' },
      { jp: '比べます', kana: 'くらべます', romaji: 'kurabemasu', meaning: '比较', pos: '動詞II' },
      { jp: '国', kana: 'くに', romaji: 'kuni', meaning: '国家', pos: '名詞' },
      { jp: '違います', kana: 'ちがいます', romaji: 'chigaimasu', meaning: '不同', pos: '動詞I' },
      { jp: '面積', kana: 'めんせき', romaji: 'menseki', meaning: '面积', pos: '名詞' },
      { jp: 'ずっと', kana: 'ずっと', romaji: 'zutto', meaning: '...得多；一直', pos: '副詞' },
      { jp: '味', kana: 'あじ', romaji: 'aji', meaning: '味道', pos: '名詞' },
      { jp: '濃い', kana: 'こい', romaji: 'koi', meaning: '浓', pos: 'い形容詞' },
      { jp: 'あっさり', kana: 'あっさり', romaji: 'assari', meaning: '清淡；爽快', pos: '副詞' },
      { jp: '気候', kana: 'きこう', romaji: 'kikou', meaning: '气候', pos: '名詞' },
      { jp: '地域', kana: 'ちいき', romaji: 'chiiki', meaning: '地区', pos: '名詞' },
      { jp: '北京', kana: 'ペキン', romaji: 'Pekin', meaning: '北京', pos: '名詞' },
      { jp: '湿気', kana: 'しっけ', romaji: 'shikke', meaning: '湿气', pos: '名詞' },
      { jp: '交通', kana: 'こうつう', romaji: 'koutsuu', meaning: '交通', pos: '名詞' },
      { jp: '正確', kana: 'せいかく', romaji: 'seikaku', meaning: '准确', pos: 'な形容詞' },
      { jp: '支払い', kana: 'しはらい', romaji: 'shiharai', meaning: '支付', pos: '名詞' },
      { jp: '方法', kana: 'ほうほう', romaji: 'houhou', meaning: '方法', pos: '名詞' },
      { jp: 'キャッシュレス', kana: 'キャッシュレス', romaji: 'kyasshuresu', meaning: '无现金', pos: '名詞' },
      { jp: '進みます', kana: 'すすみます', romaji: 'susumimasu', meaning: '前进；普及', pos: '動詞I' },
      { jp: '魅力', kana: 'みりょく', romaji: 'miryoku', meaning: '魅力', pos: '名詞' },
      { jp: '季節', kana: 'きせつ', romaji: 'kisetsu', meaning: '季节', pos: '名詞' },
      { jp: '気温', kana: 'きおん', romaji: 'kion', meaning: '气温', pos: '名詞' },
      { jp: 'ちょうど', kana: 'ちょうど', romaji: 'choudo', meaning: '正好；恰好', pos: '副詞' },
      { jp: '過ごします', kana: 'すごします', romaji: 'sugoshimasu', meaning: '度过', pos: '動詞I' },
      { jp: 'お米', kana: 'おこめ', romaji: 'o-kome', meaning: '大米', pos: '名詞' },
      { jp: '好み', kana: 'このみ', romaji: 'konomi', meaning: '喜好', pos: '名詞' },
      { jp: '家賃', kana: 'やちん', romaji: 'yachin', meaning: '房租', pos: '名詞' },
      { jp: '大企業', kana: 'だいきぎょう', romaji: 'dai-kigyou', meaning: '大企业', pos: '名詞' },
      { jp: '集中します', kana: 'しゅうちゅうします', romaji: 'shuuchuu shimasu', meaning: '集中', pos: '動詞III' },
      { jp: '選択肢', kana: 'せんたくし', romaji: 'sentakushi', meaning: '选择', pos: '名詞' },
      { jp: 'フレンドリー', kana: 'フレンドリー', romaji: 'furendorii', meaning: '友好', pos: 'な形容詞' },
      { jp: '冷たい', kana: 'つめたい', romaji: 'tsumetai', meaning: '冷淡；冷', pos: 'い形容詞' },
    ],
    grammar: [
      {
        pattern: 'N₁ は N₂ より A です',
        name: '基本比较句',
        explain: '"N₁ 比 N₂ 更 A"。「より」前是被比较的对象，「は」标记主语。注意：日语没有比较级形容词词尾变化（不像英语 -er）。可以加程度副词「ずっと」（...得多）、「もっと」（更）、「少し」（稍微）。',
        examples: [
          {
            jp: '<ruby>東京<rt>とうきょう</rt></ruby>は<ruby>大阪<rt>おおさか</rt></ruby>より<ruby>大<rt>おお</rt></ruby>きいです。',
            plain: 'とうきょうはおおさかよりおおきいです。',
            cn: '东京比大阪大。',
          },
          {
            jp: '<ruby>今日<rt>きょう</rt></ruby>は<ruby>昨日<rt>きのう</rt></ruby>よりずっと<ruby>暑<rt>あつ</rt></ruby>いです。',
            plain: 'きょうはきのうよりずっとあついです。',
            cn: '今天比昨天热得多。',
          },
        ],
      },
      {
        pattern: 'N₁ より N₂ のほうが A です',
        name: '"N₂ 更 A"',
        explain: '与上一句式语义相近，但视角不同。强调「N₂のほうが」（N₂ 更...）。「のほう」字面是"那一方"。常用于回答「どちらが」的问题。可以省略「N₁より」只说「N₂のほうが A です」。',
        examples: [
          {
            jp: '<ruby>夏<rt>なつ</rt></ruby>より<ruby>秋<rt>あき</rt></ruby>のほうが<ruby>過<rt>す</rt></ruby>ごしやすいです。',
            plain: 'なつよりあきのほうがすごしやすいです。',
            cn: '比起夏天，秋天更好过。',
          },
          {
            jp: '<ruby>大阪<rt>おおさか</rt></ruby>のほうが<ruby>家賃<rt>やちん</rt></ruby>が<ruby>安<rt>やす</rt></ruby>いです。',
            plain: 'おおさかのほうがやちんがやすいです。',
            cn: '大阪房租更便宜。',
          },
        ],
      },
      {
        pattern: 'N₁ と N₂ と どちらが A ですか',
        name: '二选一疑问句',
        explain: '问"两个之中哪个更...". 必须用「どちら」（不能用「どれ」，「どれ」是三个以上选一）。回答用「N₁ / N₂ のほうが A です」。如果两者一样，可以说「どちらも同じです」或「どちらも A です」。',
        examples: [
          {
            jp: 'コーヒーと<ruby>紅茶<rt>こうちゃ</rt></ruby>とどちらが<ruby>好<rt>す</rt></ruby>きですか。',
            plain: 'コーヒーとこうちゃとどちらがすきですか。',
            cn: '咖啡和红茶，喜欢哪个？',
          },
          {
            jp: 'コーヒーのほうが<ruby>好<rt>す</rt></ruby>きです。',
            plain: 'コーヒーのほうがすきです。',
            cn: '更喜欢咖啡。',
          },
        ],
      },
      {
        pattern: 'N の中で N が一番 A です',
        name: '最高级',
        explain: '"在...中 N 最 A"。「中で」表示比较的范围。问句用「<ruby>何<rt>なに</rt></ruby>/<ruby>誰<rt>だれ</rt></ruby>/どこ/いつ + が一番 A ですか」。三个以上的对象比较时用「どれ」。「一番」也可以替换为「最も（もっとも）」（更书面）。',
        examples: [
          {
            jp: 'クラスの<ruby>中<rt>なか</rt></ruby>で<ruby>誰<rt>だれ</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>背<rt>せ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>いですか。',
            plain: 'クラスのなかでだれがいちばんせがたかいですか。',
            cn: '班里谁最高？',
          },
          {
            jp: '<ruby>四季<rt>しき</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>秋<rt>あき</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>好<rt>す</rt></ruby>きです。',
            plain: 'しきのなかであきがいちばんすきです。',
            cn: '四季中最喜欢秋天。',
          },
        ],
      },
      {
        pattern: 'V やすい / V にくい',
        name: '"容易做..." / "不容易做..."',
        explain: '动词ます形去ます加やすい/にくい，构成い形容词，表示"做某事容易/困难"。常用于评价某种条件。「過ごしやすい」（好过）、「読みやすい」（好读）、「分かりにくい」（难懂）。',
        examples: [
          {
            jp: 'この<ruby>本<rt>ほん</rt></ruby>は<ruby>読<rt>よ</rt></ruby>みやすいです。',
            plain: 'このほんはよみやすいです。',
            cn: '这本书很好读。',
          },
          {
            jp: 'この<ruby>道<rt>みち</rt></ruby>は<ruby>歩<rt>ある</rt></ruby>きにくいです。',
            plain: 'このみちはあるきにくいです。',
            cn: '这条路不好走。',
          },
        ],
      },
    ],
  },

];
