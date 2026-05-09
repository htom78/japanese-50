// ============================================================
// lessons-n2-part2.ts
// JLPT N2 — 第 45 課 ～ 第 50 課（課程の最終部）
// ============================================================

import type { Lesson } from './types';

export const lessonsN2Part2: Lesson[] = [

  // ========================================================
  // 第 45 課 — 抽象的な時間
  // ========================================================
  {
    id: 45,
    level: 'N2',
    title: {
      jp: '抽象的な時間',
      romaji: 'chuushou-teki na jikan',
      cn: '抽象的时间表达',
      en: 'Formal Time Expressions',
    },
    goals: [
      '掌握「〜に際して／〜にあたって」等仪式感强烈的时间表达',
      '理解商务日语中「〜次第」「〜に先立って」的语感差异',
      '能写一段正式致辞或商务通知',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '新年度に際して',
          romaji: 'shinnendo ni saishite',
          cn: '新年度致辞',
        },
        sentences: [
          {
            jp: '<ruby>新<rt>あたら</rt></ruby>しい<ruby>年度<rt>ねんど</rt></ruby>を<ruby>迎<rt>むか</rt></ruby>えるに<ruby>際<rt>さい</rt></ruby>して、<ruby>一言<rt>ひとこと</rt></ruby><ruby>申<rt>もう</rt></ruby>し<ruby>上<rt>あ</rt></ruby>げたい。',
            plain: 'あたらしいねんどをむかえるにさいして、ひとこともうしあげたい。',
            romaji: 'atarashii nendo o mukaeru ni saishite, hitokoto moushiagetai.',
            cn: '在迎来新年度之际，想说几句话。',
          },
          {
            jp: '<ruby>昨年度<rt>さくねんど</rt></ruby>は、<ruby>社員<rt>しゃいん</rt></ruby><ruby>一同<rt>いちどう</rt></ruby>の<ruby>努力<rt>どりょく</rt></ruby>により、<ruby>過去<rt>かこ</rt></ruby><ruby>最高<rt>さいこう</rt></ruby>の<ruby>業績<rt>ぎょうせき</rt></ruby>を<ruby>達成<rt>たっせい</rt></ruby>することができた。',
            plain: 'さくねんどは、しゃいんいちどうのどりょくにより、かこさいこうのぎょうせきをたっせいすることができた。',
            romaji: 'sakunendo wa, shain ichidou no doryoku ni yori, kako saikou no gyouseki o tassei suru koto ga dekita.',
            cn: '上一年度，由于全体员工的努力，达成了过去最高的业绩。',
          },
          {
            jp: 'これは、<ruby>諸君<rt>しょくん</rt></ruby>の<ruby>日々<rt>ひび</rt></ruby>の<ruby>地道<rt>じみち</rt></ruby>な<ruby>努力<rt>どりょく</rt></ruby>の<ruby>賜物<rt>たまもの</rt></ruby>に<ruby>他<rt>ほか</rt></ruby>ならない。',
            plain: 'これは、しょくんのひびのじみちなどりょくのたまものにほかならない。',
            romaji: 'kore wa, shokun no hibi no jimichi na doryoku no tamamono ni hokanaranai.',
            cn: '这无非是诸位日常踏实努力的成果。',
          },
          {
            jp: 'さて、<ruby>本年度<rt>ほんねんど</rt></ruby>の<ruby>方針<rt>ほうしん</rt></ruby>を<ruby>発表<rt>はっぴょう</rt></ruby>するにあたって、まず<ruby>現状<rt>げんじょう</rt></ruby>の<ruby>分析<rt>ぶんせき</rt></ruby>から<ruby>始<rt>はじ</rt></ruby>めたい。',
            plain: 'さて、ほんねんどのほうしんをはっぴょうするにあたって、まずげんじょうのぶんせきからはじめたい。',
            romaji: 'sate, honnendo no houshin o happyou suru ni atatte, mazu genjou no bunseki kara hajimetai.',
            cn: '那么，在发布本年度方针之时，首先想从现状分析开始。',
          },
          {
            jp: '<ruby>世界<rt>せかい</rt></ruby><ruby>経済<rt>けいざい</rt></ruby>は<ruby>依然<rt>いぜん</rt></ruby>として<ruby>不安定<rt>ふあんてい</rt></ruby>であり、わが<ruby>社<rt>しゃ</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>巻<rt>ま</rt></ruby>く<ruby>環境<rt>かんきょう</rt></ruby>も<ruby>厳<rt>きび</rt></ruby>しさを<ruby>増<rt>ま</rt></ruby>している。',
            plain: 'せかいけいざいはいぜんとしてふあんていであり、わがしゃをとりまくかんきょうもきびしさをましている。',
            romaji: 'sekai keizai wa izen to shite fuantei de ari, wagasha o torimaku kankyou mo kibishisa o mashite iru.',
            cn: '世界经济依然不稳定，围绕我司的环境也愈发严峻。',
          },
          {
            jp: '<ruby>新規<rt>しんき</rt></ruby>プロジェクトの<ruby>立<rt>た</rt></ruby>ち<ruby>上<rt>あ</rt></ruby>げに<ruby>先立<rt>さきだ</rt></ruby>って、<ruby>市場<rt>しじょう</rt></ruby><ruby>調査<rt>ちょうさ</rt></ruby>を<ruby>徹底<rt>てってい</rt></ruby>させる<ruby>必要<rt>ひつよう</rt></ruby>がある。',
            plain: 'しんきプロジェクトのたちあげにさきだって、しじょうちょうさをてっていさせるひつようがある。',
            romaji: 'shinki purojekuto no tachiage ni sakidatte, shijou chousa o tettei saseru hitsuyou ga aru.',
            cn: '在启动新项目之前，必须彻底进行市场调查。',
          },
          {
            jp: '<ruby>調査<rt>ちょうさ</rt></ruby><ruby>結果<rt>けっか</rt></ruby>が<ruby>出<rt>で</rt></ruby><ruby>次第<rt>しだい</rt></ruby>、<ruby>速<rt>すみ</rt></ruby>やかに<ruby>戦略<rt>せんりゃく</rt></ruby>を<ruby>決定<rt>けってい</rt></ruby>し、<ruby>実行<rt>じっこう</rt></ruby>に<ruby>移<rt>うつ</rt></ruby>す<ruby>所存<rt>しょぞん</rt></ruby>である。',
            plain: 'ちょうさけっかがでしだい、すみやかにせんりゃくをけっていし、じっこうにうつすしょぞんである。',
            romaji: 'chousa kekka ga ide shidai, sumiyaka ni senryaku o kettei shi, jikkou ni utsusu shozon de aru.',
            cn: '调查结果一出来，便会迅速决定战略并付诸实行。',
          },
          {
            jp: 'また、<ruby>人材<rt>じんざい</rt></ruby><ruby>育成<rt>いくせい</rt></ruby>にも<ruby>力<rt>ちから</rt></ruby>を<ruby>入<rt>い</rt></ruby>れていく<ruby>方針<rt>ほうしん</rt></ruby>である。',
            plain: 'また、じんざいいくせいにもちからをいれていくほうしんである。',
            romaji: 'mata, jinzai ikusei ni mo chikara o irete iku houshin de aru.',
            cn: '另外，方针是也要在人才培养方面加大力度。',
          },
          {
            jp: '<ruby>採用<rt>さいよう</rt></ruby>に<ruby>際<rt>さい</rt></ruby>しては、<ruby>多様<rt>たよう</rt></ruby>な<ruby>背景<rt>はいけい</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ<ruby>人材<rt>じんざい</rt></ruby>を<ruby>積極的<rt>せっきょくてき</rt></ruby>に<ruby>登用<rt>とうよう</rt></ruby>していきたい。',
            plain: 'さいようにさいしては、たようなはいけいをもつじんざいをせっきょくてきにとうようしていきたい。',
            romaji: 'saiyou ni saishite wa, tayou na haikei o motsu jinzai o sekkyokuteki ni touyou shite ikitai.',
            cn: '在招聘之际，希望积极启用拥有多元背景的人才。',
          },
          {
            jp: '<ruby>変革<rt>へんかく</rt></ruby>の<ruby>時代<rt>じだい</rt></ruby>を<ruby>生<rt>い</rt></ruby>き<ruby>抜<rt>ぬ</rt></ruby>くには、<ruby>従来<rt>じゅうらい</rt></ruby>の<ruby>枠組<rt>わくぐ</rt></ruby>みにとらわれない<ruby>発想<rt>はっそう</rt></ruby>が<ruby>不可欠<rt>ふかけつ</rt></ruby>である。',
            plain: 'へんかくのじだいをいきぬくには、じゅうらいのわくぐみにとらわれないはっそうがふかけつである。',
            romaji: 'henkaku no jidai o ikinuku ni wa, juurai no wakugumi ni torawarenai hassou ga fukaketsu de aru.',
            cn: '要在变革的时代中存活下来，不被既有框架束缚的发想不可或缺。',
          },
          {
            jp: '<ruby>諸君<rt>しょくん</rt></ruby>には、<ruby>是非<rt>ぜひ</rt></ruby>とも<ruby>挑戦<rt>ちょうせん</rt></ruby>する<ruby>姿勢<rt>しせい</rt></ruby>を<ruby>持<rt>も</rt></ruby>ち<ruby>続<rt>つづ</rt></ruby>けてもらいたい。',
            plain: 'しょくんには、ぜひともちょうせんするしせいをもちつづけてもらいたい。',
            romaji: 'shokun ni wa, zehi tomo chousen suru shisei o mochitsuzukete moraitai.',
            cn: '希望诸位务必保持挑战的姿态。',
          },
          {
            jp: '<ruby>結<rt>むす</rt></ruby>びに、<ruby>本年度<rt>ほんねんど</rt></ruby>がわが<ruby>社<rt>しゃ</rt></ruby>にとって<ruby>飛躍<rt>ひやく</rt></ruby>の<ruby>年<rt>とし</rt></ruby>となることを<ruby>祈念<rt>きねん</rt></ruby>し、<ruby>挨拶<rt>あいさつ</rt></ruby>とさせていただく。',
            plain: 'むすびに、ほんねんどがわがしゃにとってひやくのとしとなることをきねんし、あいさつとさせていただく。',
            romaji: 'musubi ni, honnendo ga wagasha ni totte hiyaku no toshi to naru koto o kinen shi, aisatsu to sasete itadaku.',
            cn: '最后，谨祈本年度成为我司飞跃之年，以此作为致辞。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '結果が出次第ご連絡します',
          romaji: 'kekka ga ide shidai go-renraku shimasu',
          cn: '结果一出来就通知',
        },
        sentences: [
          {
            jp: '<ruby>先日<rt>せんじつ</rt></ruby>はお<ruby>問<rt>と</rt></ruby>い<ruby>合<rt>あ</rt></ruby>わせいただき、<ruby>誠<rt>まこと</rt></ruby>にありがとうございました。',
            plain: 'せんじつはおといあわせいただき、まことにありがとうございました。',
            romaji: 'senjitsu wa o-toiawase itadaki, makoto ni arigatou gozaimashita.',
            cn: '前几日承蒙咨询，诚挚感谢。',
          },
          {
            jp: 'お<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みの<ruby>件<rt>けん</rt></ruby>につきまして、<ruby>現在<rt>げんざい</rt></ruby><ruby>社内<rt>しゃない</rt></ruby>で<ruby>審査<rt>しんさ</rt></ruby>を<ruby>進<rt>すす</rt></ruby>めております。',
            plain: 'おもうしこみのけんにつきまして、げんざいしゃないでしんさをすすめております。',
            romaji: 'o-moushikomi no ken ni tsukimashite, genzai shanai de shinsa o susumete orimasu.',
            cn: '关于您申请的事项，目前正在公司内部审核。',
          },
          {
            jp: '<ruby>結果<rt>けっか</rt></ruby>が<ruby>判明<rt>はんめい</rt></ruby><ruby>次第<rt>しだい</rt></ruby>、<ruby>速<rt>すみ</rt></ruby>やかにご<ruby>連絡<rt>れんらく</rt></ruby><ruby>申<rt>もう</rt></ruby>し<ruby>上<rt>あ</rt></ruby>げます。',
            plain: 'けっかがはんめいしだい、すみやかにごれんらくもうしあげます。',
            romaji: 'kekka ga hanmei shidai, sumiyaka ni go-renraku moushiagemasu.',
            cn: '结果一旦明朗，将立即与您联系。',
          },
          {
            jp: 'なお、<ruby>契約<rt>けいやく</rt></ruby>の<ruby>締結<rt>ていけつ</rt></ruby>に<ruby>先立<rt>さきだ</rt></ruby>ち、<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>書類<rt>しょるい</rt></ruby>をご<ruby>準備<rt>じゅんび</rt></ruby>いただきますようお<ruby>願<rt>ねが</rt></ruby>い<ruby>申<rt>もう</rt></ruby>し<ruby>上<rt>あ</rt></ruby>げます。',
            plain: 'なお、けいやくのていけつにさきだち、ひつようなしょるいをごじゅんびいただきますようおねがいもうしあげます。',
            romaji: 'nao, keiyaku no teiketsu ni sakidachi, hitsuyou na shorui o go-junbi itadakimasu you o-negai moushiagemasu.',
            cn: '另外，在缔结合同之前，恳请您准备所需文件。',
          },
          {
            jp: '<ruby>具体的<rt>ぐたいてき</rt></ruby>な<ruby>必要<rt>ひつよう</rt></ruby><ruby>書類<rt>しょるい</rt></ruby>については、<ruby>添付<rt>てんぷ</rt></ruby>のリストをご<ruby>確認<rt>かくにん</rt></ruby>ください。',
            plain: 'ぐたいてきなひつようしょるいについては、てんぷのリストをごかくにんください。',
            romaji: 'gutaiteki na hitsuyou shorui ni tsuite wa, tenpu no risuto o go-kakunin kudasai.',
            cn: '关于具体所需文件，请确认附件清单。',
          },
          {
            jp: '<ruby>面談<rt>めんだん</rt></ruby>を<ruby>実施<rt>じっし</rt></ruby>するにあたっては、<ruby>事前<rt>じぜん</rt></ruby>に<ruby>日程<rt>にってい</rt></ruby>を<ruby>調整<rt>ちょうせい</rt></ruby>させていただきます。',
            plain: 'めんだんをじっしするにあたっては、じぜんににっていをちょうせいさせていただきます。',
            romaji: 'mendan o jisshi suru ni atatte wa, jizen ni nittei o chousei sasete itadakimasu.',
            cn: '在实施面谈之时，将事先与您调整日程。',
          },
          {
            jp: 'ご<ruby>不明<rt>ふめい</rt></ruby>な<ruby>点<rt>てん</rt></ruby>がございましたら、<ruby>遠慮<rt>えんりょ</rt></ruby>なくお<ruby>問<rt>と</rt></ruby>い<ruby>合<rt>あ</rt></ruby>わせください。',
            plain: 'ごふめいなてんがございましたら、えんりょなくおといあわせください。',
            romaji: 'go-fumei na ten ga gozaimashitara, enryo naku o-toiawase kudasai.',
            cn: '如有不明之处，请不吝咨询。',
          },
          {
            jp: '<ruby>担当者<rt>たんとうしゃ</rt></ruby>が<ruby>戻<rt>もど</rt></ruby>り<ruby>次第<rt>しだい</rt></ruby>、<ruby>折<rt>お</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>しご<ruby>連絡<rt>れんらく</rt></ruby>させていただきます。',
            plain: 'たんとうしゃがもどりしだい、おりかえしごれんらくさせていただきます。',
            romaji: 'tantousha ga modori shidai, orikaeshi go-renraku sasete itadakimasu.',
            cn: '负责人一回来便会回电。',
          },
          {
            jp: '<ruby>今後<rt>こんご</rt></ruby>とも、お<ruby>引<rt>ひ</rt></ruby>き<ruby>立<rt>た</rt></ruby>てのほどよろしくお<ruby>願<rt>ねが</rt></ruby>い<ruby>申<rt>もう</rt></ruby>し<ruby>上<rt>あ</rt></ruby>げます。',
            plain: 'こんごとも、おひきたてのほどよろしくおねがいもうしあげます。',
            romaji: 'kongo tomo, o-hikitate no hodo yoroshiku o-negai moushiagemasu.',
            cn: '今后也请多多关照。',
          },
          {
            jp: '<ruby>取<rt>と</rt></ruby>り<ruby>急<rt>いそ</rt></ruby>ぎ、ご<ruby>連絡<rt>れんらく</rt></ruby>まで。',
            plain: 'とりいそぎ、ごれんらくまで。',
            romaji: 'toriisogi, go-renraku made.',
            cn: '匆匆，谨此联络。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '会議の冒頭、司会者と秘書のやりとり。',
        cn: '会议开场，主持人与秘书的对话。',
      },
      lines: [
        {
          speaker: '司会',
          jp: 'それでは、<ruby>会議<rt>かいぎ</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めるに<ruby>際<rt>さい</rt></ruby>しまして、<ruby>社長<rt>しゃちょう</rt></ruby>から<ruby>一言<rt>ひとこと</rt></ruby>いただきます。',
          plain: 'それでは、かいぎをはじめるにさいしまして、しゃちょうからひとこといただきます。',
          romaji: 'sore de wa, kaigi o hajimeru ni saishimashite, shachou kara hitokoto itadakimasu.',
          cn: '那么，在开始会议之际，请社长讲几句。',
        },
        {
          speaker: '秘書',
          jp: 'すみません、<ruby>議事<rt>ぎじ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>に、<ruby>資料<rt>しりょう</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いできますか。',
          plain: 'すみません、ぎじにはいるまえに、しりょうのかくにんをおねがいできますか。',
          romaji: 'sumimasen, giji ni hairu mae ni, shiryou no kakunin o o-negai dekimasu ka.',
          cn: '不好意思，进入议程前可以确认一下资料吗？',
        },
        {
          speaker: '司会',
          jp: 'はい。<ruby>議事<rt>ぎじ</rt></ruby>に<ruby>先立<rt>さきだ</rt></ruby>って、<ruby>本日<rt>ほんじつ</rt></ruby>の<ruby>資料<rt>しりょう</rt></ruby>をご<ruby>確認<rt>かくにん</rt></ruby>ください。',
          plain: 'はい。ぎじにさきだって、ほんじつのしりょうをごかくにんください。',
          romaji: 'hai. giji ni sakidatte, honjitsu no shiryou o go-kakunin kudasai.',
          cn: '好的。在议程之前，请大家确认今天的资料。',
        },
        {
          speaker: '秘書',
          jp: '<ruby>欠席者<rt>けっせきしゃ</rt></ruby>からの<ruby>返事<rt>へんじ</rt></ruby>が<ruby>届<rt>とど</rt></ruby>き<ruby>次第<rt>しだい</rt></ruby>、お<ruby>知<rt>し</rt></ruby>らせいたします。',
          plain: 'けっせきしゃからのへんじがとどきしだい、おしらせいたします。',
          romaji: 'kessekisha kara no henji ga todoki shidai, o-shirase itashimasu.',
          cn: '缺席者的回复一到，我就通知您。',
        },
        {
          speaker: '司会',
          jp: 'よろしくお<ruby>願<rt>ねが</rt></ruby>いします。それでは、<ruby>本題<rt>ほんだい</rt></ruby>に<ruby>入<rt>はい</rt></ruby>るにあたって、<ruby>議題<rt>ぎだい</rt></ruby>を<ruby>確認<rt>かくにん</rt></ruby>いたします。',
          plain: 'よろしくおねがいします。それでは、ほんだいにはいるにあたって、ぎだいをかくにんいたします。',
          romaji: 'yoroshiku o-negai shimasu. sore de wa, hondai ni hairu ni atatte, gidai o kakunin itashimasu.',
          cn: '拜托了。那么，进入正题之时，先确认一下议题。',
        },
        {
          speaker: '秘書',
          jp: '<ruby>議題<rt>ぎだい</rt></ruby>は<ruby>三<rt>みっ</rt></ruby>つ、お<ruby>手元<rt>てもと</rt></ruby>の<ruby>資料<rt>しりょう</rt></ruby>のとおりでございます。',
          plain: 'ぎだいはみっつ、おてもとのしりょうのとおりでございます。',
          romaji: 'gidai wa mittsu, o-temoto no shiryou no toori de gozaimasu.',
          cn: '议题有三项，如各位手头资料所示。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>新規<rt>しんき</rt></ruby>プロジェクトを<ruby>始<rt>はじ</rt></ruby>める<ruby>前<rt>まえ</rt></ruby>に、<ruby>何<rt>なに</rt></ruby>をしなければならないか。',
          plain: 'しんきプロジェクトをはじめるまえに、なにをしなければならないか。',
          romaji: 'shinki purojekuto o hajimeru mae ni, nani o shinakereba naranai ka.',
          cn: '在开始新项目之前，必须做什么？',
        },
        a: {
          jp: '<ruby>立<rt>た</rt></ruby>ち<ruby>上<rt>あ</rt></ruby>げに<ruby>先立<rt>さきだ</rt></ruby>って、<ruby>市場<rt>しじょう</rt></ruby><ruby>調査<rt>ちょうさ</rt></ruby>を<ruby>徹底<rt>てってい</rt></ruby>させる<ruby>必要<rt>ひつよう</rt></ruby>がある。',
          plain: 'たちあげにさきだって、しじょうちょうさをてっていさせるひつようがある。',
          romaji: 'tachiage ni sakidatte, shijou chousa o tettei saseru hitsuyou ga aru.',
          cn: '在启动之前，必须彻底进行市场调查。',
        },
        hint: '使用「〜に先立って」表达"在...之前"',
      },
      {
        q: {
          jp: '<ruby>調査<rt>ちょうさ</rt></ruby><ruby>結果<rt>けっか</rt></ruby>が<ruby>出<rt>で</rt></ruby>たら、どうするか。',
          plain: 'ちょうさけっかがでたら、どうするか。',
          romaji: 'chousa kekka ga detara, dou suru ka.',
          cn: '调查结果出来之后怎么办？',
        },
        a: {
          jp: '<ruby>結果<rt>けっか</rt></ruby>が<ruby>出<rt>で</rt></ruby><ruby>次第<rt>しだい</rt></ruby>、<ruby>速<rt>すみ</rt></ruby>やかに<ruby>戦略<rt>せんりゃく</rt></ruby>を<ruby>決定<rt>けってい</rt></ruby>する。',
          plain: 'けっかがでしだい、すみやかにせんりゃくをけっていする。',
          romaji: 'kekka ga ide shidai, sumiyaka ni senryaku o kettei suru.',
          cn: '结果一出来，就立即决定战略。',
        },
      },
      {
        q: {
          jp: '「〜に際して」と「〜次第」のニュアンスの<ruby>違<rt>ちが</rt></ruby>いは<ruby>何<rt>なに</rt></ruby>か。',
          plain: '「〜にさいして」と「〜しだい」のニュアンスのちがいはなにか。',
          romaji: '"-ni saishite" to "-shidai" no nyuansu no chigai wa nani ka.',
          cn: '「〜に際して」和「〜次第」语感上有什么区别？',
        },
        a: {
          jp: '「〜に<ruby>際<rt>さい</rt></ruby>して」は<ruby>仪式的<rt>ぎしきてき</rt></ruby>な<ruby>場面<rt>ばめん</rt></ruby>で<ruby>用<rt>もち</rt></ruby>い、「〜<ruby>次第<rt>しだい</rt></ruby>」は「〜したらすぐに」という<ruby>意味<rt>いみ</rt></ruby>に<ruby>限<rt>かぎ</rt></ruby>られる。',
          plain: '「〜にさいして」はぎしきてきなばめんでもちい、「〜しだい」は「〜したらすぐに」といういみにかぎられる。',
          romaji: '"-ni saishite" wa gishikiteki na bamen de mochii, "-shidai" wa "-shitara sugu ni" to iu imi ni kagirareru.',
          cn: '「〜に際して」用于仪式场合，「〜次第」限于"...就立刻..."的意思。',
        },
      },
      {
        q: {
          jp: '<ruby>採用<rt>さいよう</rt></ruby>に<ruby>際<rt>さい</rt></ruby>しての<ruby>方針<rt>ほうしん</rt></ruby>はどのようなものか。',
          plain: 'さいようにさいしてのほうしんはどのようなものか。',
          romaji: 'saiyou ni saishite no houshin wa dono you na mono ka.',
          cn: '招聘之际的方针是怎样的？',
        },
        a: {
          jp: '<ruby>多様<rt>たよう</rt></ruby>な<ruby>背景<rt>はいけい</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ<ruby>人材<rt>じんざい</rt></ruby>を<ruby>積極的<rt>せっきょくてき</rt></ruby>に<ruby>登用<rt>とうよう</rt></ruby>する<ruby>方針<rt>ほうしん</rt></ruby>である。',
          plain: 'たようなはいけいをもつじんざいをせっきょくてきにとうようするほうしんである。',
          romaji: 'tayou na haikei o motsu jinzai o sekkyokuteki ni touyou suru houshin de aru.',
          cn: '是积极启用拥有多元背景人才的方针。',
        },
      },
    ],
    vocabulary: [
      { jp: '年度', kana: 'ねんど', romaji: 'nendo', meaning: '年度', pos: '名詞' },
      { jp: '迎える', kana: 'むかえる', romaji: 'mukaeru', meaning: '迎接', pos: '動詞II' },
      { jp: '申し上げる', kana: 'もうしあげる', romaji: 'moushiageru', meaning: '说（谦语）', pos: '動詞II' },
      { jp: '社員', kana: 'しゃいん', romaji: 'shain', meaning: '员工', pos: '名詞' },
      { jp: '一同', kana: 'いちどう', romaji: 'ichidou', meaning: '全体', pos: '名詞' },
      { jp: '業績', kana: 'ぎょうせき', romaji: 'gyouseki', meaning: '业绩', pos: '名詞' },
      { jp: '達成', kana: 'たっせい', romaji: 'tassei', meaning: '达成', pos: '名詞' },
      { jp: '諸君', kana: 'しょくん', romaji: 'shokun', meaning: '诸位', pos: '名詞' },
      { jp: '地道', kana: 'じみち', romaji: 'jimichi', meaning: '踏实', pos: 'な形容詞' },
      { jp: '賜物', kana: 'たまもの', romaji: 'tamamono', meaning: '成果', pos: '名詞' },
      { jp: '方針', kana: 'ほうしん', romaji: 'houshin', meaning: '方针', pos: '名詞' },
      { jp: '現状', kana: 'げんじょう', romaji: 'genjou', meaning: '现状', pos: '名詞' },
      { jp: '依然', kana: 'いぜん', romaji: 'izen', meaning: '依然', pos: '副詞' },
      { jp: '不安定', kana: 'ふあんてい', romaji: 'fuantei', meaning: '不稳定', pos: 'な形容詞' },
      { jp: '取り巻く', kana: 'とりまく', romaji: 'torimaku', meaning: '围绕', pos: '動詞I' },
      { jp: '新規', kana: 'しんき', romaji: 'shinki', meaning: '新规', pos: '名詞' },
      { jp: '立ち上げ', kana: 'たちあげ', romaji: 'tachiage', meaning: '启动', pos: '名詞' },
      { jp: '徹底', kana: 'てってい', romaji: 'tettei', meaning: '彻底', pos: '名詞' },
      { jp: '速やか', kana: 'すみやか', romaji: 'sumiyaka', meaning: '迅速', pos: 'な形容詞' },
      { jp: '戦略', kana: 'せんりゃく', romaji: 'senryaku', meaning: '战略', pos: '名詞' },
      { jp: '所存', kana: 'しょぞん', romaji: 'shozon', meaning: '打算（书面）', pos: '名詞' },
      { jp: '人材', kana: 'じんざい', romaji: 'jinzai', meaning: '人才', pos: '名詞' },
      { jp: '育成', kana: 'いくせい', romaji: 'ikusei', meaning: '培养', pos: '名詞' },
      { jp: '採用', kana: 'さいよう', romaji: 'saiyou', meaning: '录用', pos: '名詞' },
      { jp: '多様', kana: 'たよう', romaji: 'tayou', meaning: '多样', pos: 'な形容詞' },
      { jp: '登用', kana: 'とうよう', romaji: 'touyou', meaning: '启用', pos: '名詞' },
      { jp: '変革', kana: 'へんかく', romaji: 'henkaku', meaning: '变革', pos: '名詞' },
      { jp: '枠組み', kana: 'わくぐみ', romaji: 'wakugumi', meaning: '框架', pos: '名詞' },
      { jp: '不可欠', kana: 'ふかけつ', romaji: 'fukaketsu', meaning: '不可或缺', pos: 'な形容詞' },
      { jp: '飛躍', kana: 'ひやく', romaji: 'hiyaku', meaning: '飞跃', pos: '名詞' },
      { jp: '祈念', kana: 'きねん', romaji: 'kinen', meaning: '祈愿', pos: '名詞' },
      { jp: '審査', kana: 'しんさ', romaji: 'shinsa', meaning: '审核', pos: '名詞' },
      { jp: '判明', kana: 'はんめい', romaji: 'hanmei', meaning: '查明', pos: '名詞' },
      { jp: '締結', kana: 'ていけつ', romaji: 'teiketsu', meaning: '缔结', pos: '名詞' },
      { jp: '折り返し', kana: 'おりかえし', romaji: 'orikaeshi', meaning: '回电', pos: '名詞' },
    ],
    grammar: [
      {
        pattern: 'V る／N に際して',
        name: '在...之际（仪式感）',
        explain: '表示"在某重要场合或时刻之际"，用于致辞、仪式、入学、开业、签约等正式场面。语气最庄重，比「にあたって」更书面、更具仪式感。多与「申し上げる／挨拶／お祝い」等敬语词搭配。日常琐事不能用。',
        examples: [
          {
            jp: '<ruby>卒業<rt>そつぎょう</rt></ruby>に<ruby>際<rt>さい</rt></ruby>して、<ruby>感謝<rt>かんしゃ</rt></ruby>の<ruby>言葉<rt>ことば</rt></ruby>を<ruby>述<rt>の</rt></ruby>べたい。',
            plain: 'そつぎょうにさいして、かんしゃのことばをのべたい。',
            cn: '在毕业之际，想致以感谢之辞。',
          },
          {
            jp: '<ruby>契約<rt>けいやく</rt></ruby>の<ruby>締結<rt>ていけつ</rt></ruby>に<ruby>際<rt>さい</rt></ruby>しては、<ruby>慎重<rt>しんちょう</rt></ruby>な<ruby>判断<rt>はんだん</rt></ruby>が<ruby>求<rt>もと</rt></ruby>められる。',
            plain: 'けいやくのていけつにさいしては、しんちょうなはんだんがもとめられる。',
            cn: '签约之际，需要慎重判断。',
          },
        ],
      },
      {
        pattern: 'V る／N に先立って',
        name: '在...之前（先于）',
        explain: '表示"在某事之前先做..."，强调时间上的"先于"以及为之做准备的语感。常用于商务、报告、研究等场合。比单纯的「〜の前に」更书面化，且暗含"作为前置准备"的意思。「に先立ち」是更书面的形式。',
        examples: [
          {
            jp: '<ruby>会議<rt>かいぎ</rt></ruby>に<ruby>先立<rt>さきだ</rt></ruby>って、<ruby>資料<rt>しりょう</rt></ruby>を<ruby>配<rt>くば</rt></ruby>った。',
            plain: 'かいぎにさきだって、しりょうをくばった。',
            cn: '会议之前先发了资料。',
          },
          {
            jp: '<ruby>発売<rt>はつばい</rt></ruby>に<ruby>先立<rt>さきだ</rt></ruby>ち、<ruby>試作品<rt>しさくひん</rt></ruby>のテストを<ruby>行<rt>おこな</rt></ruby>う。',
            plain: 'はつばいにさきだち、しさくひんのテストをおこなう。',
            cn: '发售之前，先做试制品测试。',
          },
        ],
      },
      {
        pattern: 'V ます形語幹／N 次第',
        name: '一...就立刻...',
        explain: '表示"一旦...就立即..."。前接动词ます形词干（出る→出次第）或名词。强调"一发生就马上行动"，是商务日语高频表达。注意：不能接过去时态。与「〜たらすぐに」相比更正式、更书面，常出现在商务邮件中（届き次第・分かり次第・到着次第）。',
        examples: [
          {
            jp: '<ruby>準備<rt>じゅんび</rt></ruby>ができ<ruby>次第<rt>しだい</rt></ruby>、<ruby>出発<rt>しゅっぱつ</rt></ruby>します。',
            plain: 'じゅんびができしだい、しゅっぱつします。',
            cn: '准备好了就立刻出发。',
          },
          {
            jp: '<ruby>商品<rt>しょうひん</rt></ruby>が<ruby>到着<rt>とうちゃく</rt></ruby><ruby>次第<rt>しだい</rt></ruby>、ご<ruby>連絡<rt>れんらく</rt></ruby>いたします。',
            plain: 'しょうひんがとうちゃくしだい、ごれんらくいたします。',
            cn: '商品一到就联系您。',
          },
        ],
      },
      {
        pattern: 'V る／N にあたって',
        name: '在...之时（正式）',
        explain: '表示"面临某重要事项之时"。比「に際して」语气稍轻，但仍然正式。多用于"开始一个项目／进入新阶段"之类的场面。「にあたり」是更书面的形式。与「に際して」相比，「にあたって」更强调"对此事进行准备"的语感，因此后续多接表准备、决心、注意事项的内容。',
        examples: [
          {
            jp: '<ruby>新<rt>あたら</rt></ruby>しい<ruby>事業<rt>じぎょう</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めるにあたって、<ruby>専門家<rt>せんもんか</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>した。',
            plain: 'あたらしいじぎょうをはじめるにあたって、せんもんかにそうだんした。',
            cn: '在开展新事业之时，请教了专家。',
          },
          {
            jp: '<ruby>面接<rt>めんせつ</rt></ruby>にあたり、<ruby>注意<rt>ちゅうい</rt></ruby><ruby>事項<rt>じこう</rt></ruby>をご<ruby>確認<rt>かくにん</rt></ruby>ください。',
            plain: 'めんせつにあたり、ちゅういじこうをごかくにんください。',
            cn: '面试之时，请确认注意事项。',
          },
        ],
      },
      {
        pattern: '〜に他ならない',
        name: '无非是...',
        explain: '强调"不是别的，正是..."，用于断言事物的本质或唯一原因。书面色彩强烈，常出现在评论、致辞、论说文中。结构上「N に他ならない」直接接名词。语气比「まさに〜だ」更书面、更绝对。',
        examples: [
          {
            jp: 'これは<ruby>努力<rt>どりょく</rt></ruby>の<ruby>賜物<rt>たまもの</rt></ruby>に<ruby>他<rt>ほか</rt></ruby>ならない。',
            plain: 'これはどりょくのたまものにほかならない。',
            cn: '这无非是努力的成果。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 46 課 — 因果関係
  // ========================================================
  {
    id: 46,
    level: 'N2',
    title: {
      jp: '因果関係',
      romaji: 'inga kankei',
      cn: '因果关系',
      en: 'Causality',
    },
    goals: [
      '掌握「〜ばかりに／〜あまり／〜ことから／〜だけに」四种因果表达',
      '理解四者的语感差异（懊悔／过度／推断／强调）',
      '能用恰当的因果表达写一段警示性文章',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '油断したばかりに',
          romaji: 'yudan shita bakari ni',
          cn: '就因为疏忽',
        },
        sentences: [
          {
            jp: '<ruby>人間<rt>にんげん</rt></ruby>は、ほんの<ruby>一瞬<rt>いっしゅん</rt></ruby><ruby>油断<rt>ゆだん</rt></ruby>したばかりに、<ruby>取<rt>と</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>しのつかない<ruby>結果<rt>けっか</rt></ruby>を<ruby>招<rt>まね</rt></ruby>くことがある。',
            plain: 'にんげんは、ほんのいっしゅんゆだんしたばかりに、とりかえしのつかないけっかをまねくことがある。',
            romaji: 'ningen wa, honno isshun yudan shita bakari ni, torikaeshi no tsukanai kekka o maneku koto ga aru.',
            cn: '人就因为一瞬间的疏忽，会招致无法挽回的结果。',
          },
          {
            jp: '<ruby>友人<rt>ゆうじん</rt></ruby>のAは、<ruby>運転<rt>うんてん</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>に<ruby>携帯<rt>けいたい</rt></ruby>を<ruby>見<rt>み</rt></ruby>たばかりに、<ruby>大<rt>おお</rt></ruby>きな<ruby>事故<rt>じこ</rt></ruby>を<ruby>起<rt>お</rt></ruby>こしてしまった。',
            plain: 'ゆうじんのAは、うんてんちゅうにけいたいをみたばかりに、おおきなじこをおこしてしまった。',
            romaji: 'yuujin no A wa, unten-chuu ni keitai o mita bakari ni, ookina jiko o okoshite shimatta.',
            cn: '我朋友A就因为开车时看了手机，导致了重大事故。',
          },
          {
            jp: '<ruby>幸<rt>さいわ</rt></ruby>い<ruby>命<rt>いのち</rt></ruby>は<ruby>助<rt>たす</rt></ruby>かったものの、<ruby>後遺症<rt>こういしょう</rt></ruby>に<ruby>苦<rt>くる</rt></ruby>しむ<ruby>日々<rt>ひび</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>いている。',
            plain: 'さいわいいのちはたすかったものの、こういしょうにくるしむひびがつづいている。',
            romaji: 'saiwai inochi wa tasukatta mono no, kouishou ni kurushimu hibi ga tsuzuite iru.',
            cn: '所幸保住了性命，但仍持续着被后遗症折磨的日子。',
          },
          {
            jp: '<ruby>彼<rt>かれ</rt></ruby>は<ruby>後悔<rt>こうかい</rt></ruby>の<ruby>余<rt>あま</rt></ruby>り、<ruby>長<rt>なが</rt></ruby>い<ruby>間<rt>あいだ</rt></ruby><ruby>外出<rt>がいしゅつ</rt></ruby>すらできなくなった。',
            plain: 'かれはこうかいのあまり、ながいあいだがいしゅつすらできなくなった。',
            romaji: 'kare wa koukai no amari, nagai aida gaishutsu sura dekinaku natta.',
            cn: '他过于后悔，长时间连外出都做不到了。',
          },
          {
            jp: 'こうした<ruby>事例<rt>じれい</rt></ruby>が<ruby>後<rt>あと</rt></ruby>を<ruby>絶<rt>た</rt></ruby>たないことから、<ruby>多<rt>おお</rt></ruby>くの<ruby>自治体<rt>じちたい</rt></ruby>は<ruby>規制<rt>きせい</rt></ruby>を<ruby>強化<rt>きょうか</rt></ruby>した。',
            plain: 'こうしたじれいがあとをたたないことから、おおくのじちたいはきせいをきょうかした。',
            romaji: 'koushita jirei ga ato o tatanai koto kara, ooku no jichitai wa kisei o kyouka shita.',
            cn: '由于此类事例不绝，许多自治体加强了管制。',
          },
          {
            jp: '<ruby>人命<rt>じんめい</rt></ruby>に<ruby>関<rt>かか</rt></ruby>わる<ruby>問題<rt>もんだい</rt></ruby>であるだけに、<ruby>厳<rt>きび</rt></ruby>しい<ruby>処罰<rt>しょばつ</rt></ruby>もやむを<ruby>得<rt>え</rt></ruby>ない。',
            plain: 'じんめいにかかわるもんだいであるだけに、きびしいしょばつもやむをえない。',
            romaji: 'jinmei ni kakawaru mondai de aru dake ni, kibishii shobatsu mo yamu o enai.',
            cn: '正因为是关乎人命的问题，严厉处罚也是不得已。',
          },
          {
            jp: '<ruby>一方<rt>いっぽう</rt></ruby>で、<ruby>規制<rt>きせい</rt></ruby>を<ruby>強<rt>つよ</rt></ruby>めたばかりに、<ruby>新<rt>あたら</rt></ruby>しい<ruby>抜<rt>ぬ</rt></ruby>け<ruby>道<rt>みち</rt></ruby>を<ruby>探<rt>さが</rt></ruby>す<ruby>者<rt>もの</rt></ruby>も<ruby>現<rt>あらわ</rt></ruby>れている。',
            plain: 'いっぽうで、きせいをつよめたばかりに、あたらしいぬけみちをさがすものもあらわれている。',
            romaji: 'ippou de, kisei o tsuyometa bakari ni, atarashii nukemichi o sagasu mono mo arawarete iru.',
            cn: '另一方面，正因为加强了管制，开始出现寻找新漏洞的人。',
          },
          {
            jp: '<ruby>結局<rt>けっきょく</rt></ruby>のところ、<ruby>制度<rt>せいど</rt></ruby>に<ruby>頼<rt>たよ</rt></ruby>るだけでは<ruby>限界<rt>げんかい</rt></ruby>がある。',
            plain: 'けっきょくのところ、せいどにたよるだけではげんかいがある。',
            romaji: 'kekkyoku no tokoro, seido ni tayoru dake de wa genkai ga aru.',
            cn: '说到底，仅依靠制度是有局限的。',
          },
          {
            jp: '<ruby>個人<rt>こじん</rt></ruby>の<ruby>意識<rt>いしき</rt></ruby>が<ruby>変<rt>か</rt></ruby>わらないことには、<ruby>同<rt>おな</rt></ruby>じ<ruby>過<rt>あやま</rt></ruby>ちが<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>される。',
            plain: 'こじんのいしきがかわらないことには、おなじあやまちがくりかえされる。',
            romaji: 'kojin no ishiki ga kawaranai koto ni wa, onaji ayamachi ga kurikaesareru.',
            cn: '若个人意识不改变，相同的错误会被重复。',
          },
          {
            jp: 'たった<ruby>一度<rt>いちど</rt></ruby>の<ruby>過<rt>あやま</rt></ruby>ちでも、<ruby>人生<rt>じんせい</rt></ruby>を<ruby>左右<rt>さゆう</rt></ruby>することがあるという<ruby>事実<rt>じじつ</rt></ruby>を、<ruby>常<rt>つね</rt></ruby>に<ruby>胸<rt>むね</rt></ruby>に<ruby>刻<rt>きざ</rt></ruby>むべきである。',
            plain: 'たったいちどのあやまちでも、じんせいをさゆうすることがあるというじじつを、つねにむねにきざむべきである。',
            romaji: 'tatta ichido no ayamachi de mo, jinsei o sayuu suru koto ga aru to iu jijitsu o, tsune ni mune ni kizamu beki de aru.',
            cn: '哪怕仅一次过错也可能左右人生——这一事实应时刻铭记在心。',
          },
          {
            jp: '<ruby>油断<rt>ゆだん</rt></ruby>は<ruby>大敵<rt>たいてき</rt></ruby>とは、まさにこのことに<ruby>他<rt>ほか</rt></ruby>ならない。',
            plain: 'ゆだんはたいてきとは、まさにこのことにほかならない。',
            romaji: 'yudan wa taiteki to wa, masa ni kono koto ni hokanaranai.',
            cn: '所谓"疏忽是大敌"，无非正是此意。',
          },
          {
            jp: '<ruby>日々<rt>ひび</rt></ruby>の<ruby>慎重<rt>しんちょう</rt></ruby>さこそが、<ruby>未来<rt>みらい</rt></ruby>を<ruby>守<rt>まも</rt></ruby>る<ruby>唯一<rt>ゆいいつ</rt></ruby>の<ruby>盾<rt>たて</rt></ruby>であろう。',
            plain: 'ひびのしんちょうさこそが、みらいをまもるゆいいつのたてであろう。',
            romaji: 'hibi no shinchousa koso ga, mirai o mamoru yuiitsu no tate de arou.',
            cn: '日常的谨慎，恐怕才是守护未来的唯一盾牌。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '歴史的な経緯',
          romaji: 'rekishi-teki na keii',
          cn: '历史的经纬',
        },
        sentences: [
          {
            jp: 'この<ruby>地域<rt>ちいき</rt></ruby>に<ruby>独特<rt>どくとく</rt></ruby>の<ruby>文化<rt>ぶんか</rt></ruby>が<ruby>残<rt>のこ</rt></ruby>っていることから、<ruby>多<rt>おお</rt></ruby>くの<ruby>研究者<rt>けんきゅうしゃ</rt></ruby>が<ruby>注目<rt>ちゅうもく</rt></ruby>している。',
            plain: 'このちいきにどくとくのぶんかがのこっていることから、おおくのけんきゅうしゃがちゅうもくしている。',
            romaji: 'kono chiiki ni dokutoku no bunka ga nokotte iru koto kara, ooku no kenkyuusha ga chuumoku shite iru.',
            cn: '由于这一地区遗留着独特的文化，许多研究者都在关注。',
          },
          {
            jp: '<ruby>歴史的<rt>れきしてき</rt></ruby>な<ruby>経緯<rt>けいい</rt></ruby>から<ruby>見<rt>み</rt></ruby>れば、ここはかつて<ruby>交易<rt>こうえき</rt></ruby>の<ruby>要衝<rt>ようしょう</rt></ruby>であった。',
            plain: 'れきしてきなけいいからみれば、ここはかつてこうえきのようしょうであった。',
            romaji: 'rekishi-teki na keii kara mireba, koko wa katsute koueki no youshou de atta.',
            cn: '从历史经纬来看，这里曾是交易要冲。',
          },
          {
            jp: '<ruby>外国<rt>がいこく</rt></ruby>との<ruby>交流<rt>こうりゅう</rt></ruby>が<ruby>盛<rt>さか</rt></ruby>んだったことから、<ruby>言葉<rt>ことば</rt></ruby>にも<ruby>多<rt>おお</rt></ruby>くの<ruby>外来語<rt>がいらいご</rt></ruby>が<ruby>入<rt>はい</rt></ruby>り<ruby>込<rt>こ</rt></ruby>んだ。',
            plain: 'がいこくとのこうりゅうがさかんだったことから、ことばにもおおくのがいらいごがはいりこんだ。',
            romaji: 'gaikoku to no kouryuu ga sakan datta koto kara, kotoba ni mo ooku no gairaigo ga hairikonda.',
            cn: '由于与外国交流频繁，语言中也混入了许多外来语。',
          },
          {
            jp: '<ruby>地元<rt>じもと</rt></ruby>の<ruby>人々<rt>ひとびと</rt></ruby>は<ruby>誇<rt>ほこ</rt></ruby>りに<ruby>思<rt>おも</rt></ruby>うあまり、<ruby>外部<rt>がいぶ</rt></ruby>からの<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>過剰<rt>かじょう</rt></ruby>に<ruby>警戒<rt>けいかい</rt></ruby>することもあった。',
            plain: 'じもとのひとびとはほこりにおもうあまり、がいぶからのえいきょうをかじょうにけいかいすることもあった。',
            romaji: 'jimoto no hitobito wa hokori ni omou amari, gaibu kara no eikyou o kajou ni keikai suru koto mo atta.',
            cn: '当地人因过于自豪，也曾对外部影响过度警戒。',
          },
          {
            jp: '<ruby>誇<rt>ほこ</rt></ruby>りある<ruby>歴史<rt>れきし</rt></ruby>を<ruby>持<rt>も</rt></ruby>つだけに、<ruby>変化<rt>へんか</rt></ruby>を<ruby>受<rt>う</rt></ruby>け<ruby>入<rt>い</rt></ruby>れることが<ruby>難<rt>むずか</rt></ruby>しかったのだろう。',
            plain: 'ほこりあるれきしをもつだけに、へんかをうけいれることがむずかしかったのだろう。',
            romaji: 'hokori aru rekishi o motsu dake ni, henka o ukeireru koto ga muzukashikatta no darou.',
            cn: '正因为拥有引以为豪的历史，接受变化才会困难吧。',
          },
          {
            jp: '<ruby>閉鎖的<rt>へいさてき</rt></ruby>な<ruby>姿勢<rt>しせい</rt></ruby>を<ruby>取<rt>と</rt></ruby>ったばかりに、<ruby>近代化<rt>きんだいか</rt></ruby>に<ruby>乗<rt>の</rt></ruby>り<ruby>遅<rt>おく</rt></ruby>れた<ruby>地域<rt>ちいき</rt></ruby>もある。',
            plain: 'へいさてきなしせいをとったばかりに、きんだいかにのりおくれたちいきもある。',
            romaji: 'heisa-teki na shisei o totta bakari ni, kindaika ni noriokureta chiiki mo aru.',
            cn: '也有地区因采取封闭姿态，错过了近代化。',
          },
          {
            jp: '<ruby>過去<rt>かこ</rt></ruby>を<ruby>振<rt>ふ</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>ることは、<ruby>未来<rt>みらい</rt></ruby>への<ruby>道<rt>みち</rt></ruby>を<ruby>照<rt>て</rt></ruby>らす<ruby>営<rt>いとな</rt></ruby>みである。',
            plain: 'かこをふりかえることは、みらいへのみちをてらすいとなみである。',
            romaji: 'kako o furikaeru koto wa, mirai e no michi o terasu itonami de aru.',
            cn: '回顾过去，是照亮通往未来之路的活动。',
          },
          {
            jp: '<ruby>歴史<rt>れきし</rt></ruby>の<ruby>教訓<rt>きょうくん</rt></ruby>に<ruby>学<rt>まな</rt></ruby>ぶことこそ、<ruby>賢明<rt>けんめい</rt></ruby>な<ruby>選択<rt>せんたく</rt></ruby>だと<ruby>言<rt>い</rt></ruby>えよう。',
            plain: 'れきしのきょうくんにまなぶことこそ、けんめいなせんたくだといえよう。',
            romaji: 'rekishi no kyoukun ni manabu koto koso, kenmei na sentaku da to ieyou.',
            cn: '从历史教训中学习，方可谓明智之选。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '祖父が孫に過去の失敗を語る。',
        cn: '祖父向孙子讲述过去的失败。',
      },
      lines: [
        {
          speaker: '祖父',
          jp: '<ruby>昔<rt>むかし</rt></ruby>な、わしも<ruby>若<rt>わか</rt></ruby>かったばかりに、<ruby>大<rt>おお</rt></ruby>きな<ruby>失敗<rt>しっぱい</rt></ruby>をしたんだよ。',
          plain: 'むかしな、わしもわかかったばかりに、おおきなしっぱいをしたんだよ。',
          romaji: 'mukashi na, washi mo wakakatta bakari ni, ookina shippai o shitan da yo.',
          cn: '从前啊，就因为我太年轻，犯过大错。',
        },
        {
          speaker: '孫',
          jp: 'おじいちゃん、どんな<ruby>失敗<rt>しっぱい</rt></ruby>だったの？',
          plain: 'おじいちゃん、どんなしっぱいだったの？',
          romaji: 'ojiichan, donna shippai datta no?',
          cn: '爷爷，是什么样的失败？',
        },
        {
          speaker: '祖父',
          jp: '<ruby>自信<rt>じしん</rt></ruby>があったあまり、<ruby>人<rt>ひと</rt></ruby>の<ruby>忠告<rt>ちゅうこく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>かなかったんだ。それで<ruby>事業<rt>じぎょう</rt></ruby>を<ruby>失<rt>うしな</rt></ruby>ってしまった。',
          plain: 'じしんがあったあまり、ひとのちゅうこくをきかなかったんだ。それでじぎょうをうしなってしまった。',
          romaji: 'jishin ga atta amari, hito no chuukoku o kikanakatta n da. sore de jigyou o ushinatte shimatta.',
          cn: '因为太自信，没听别人的忠告。结果失去了事业。',
        },
        {
          speaker: '孫',
          jp: 'そうなんだ……。<ruby>大変<rt>たいへん</rt></ruby>だったんだね。',
          plain: 'そうなんだ……。たいへんだったんだね。',
          romaji: 'sou nan da... taihen datta n da ne.',
          cn: '原来如此……真不容易啊。',
        },
        {
          speaker: '祖父',
          jp: 'お<ruby>前<rt>まえ</rt></ruby>は<ruby>若<rt>わか</rt></ruby>いだけに、<ruby>可能性<rt>かのうせい</rt></ruby>がたくさんある。だが、<ruby>忠告<rt>ちゅうこく</rt></ruby>には<ruby>耳<rt>みみ</rt></ruby>を<ruby>傾<rt>かたむ</rt></ruby>けるんだぞ。',
          plain: 'おまえはわかいだけに、かのうせいがたくさんある。だが、ちゅうこくにはみみをかたむけるんだぞ。',
          romaji: 'omae wa wakai dake ni, kanousei ga takusan aru. da ga, chuukoku ni wa mimi o katamukerun da zo.',
          cn: '正因为你年轻，才有许多可能性。但是，要倾听忠告。',
        },
        {
          speaker: '孫',
          jp: 'うん、おじいちゃんの<ruby>言葉<rt>ことば</rt></ruby>、<ruby>覚<rt>おぼ</rt></ruby>えておくよ。',
          plain: 'うん、おじいちゃんのことば、おぼえておくよ。',
          romaji: 'un, ojiichan no kotoba, oboete oku yo.',
          cn: '嗯，爷爷的话我会记住。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>友人<rt>ゆうじん</rt></ruby>のAは、なぜ<ruby>事故<rt>じこ</rt></ruby>を<ruby>起<rt>お</rt></ruby>こしたか。',
          plain: 'ゆうじんのAは、なぜじこをおこしたか。',
          romaji: 'yuujin no A wa, naze jiko o okoshita ka.',
          cn: '朋友A为什么发生事故？',
        },
        a: {
          jp: '<ruby>運転<rt>うんてん</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>に<ruby>携帯<rt>けいたい</rt></ruby>を<ruby>見<rt>み</rt></ruby>たばかりに、<ruby>事故<rt>じこ</rt></ruby>を<ruby>起<rt>お</rt></ruby>こした。',
          plain: 'うんてんちゅうにけいたいをみたばかりに、じこをおこした。',
          romaji: 'unten-chuu ni keitai o mita bakari ni, jiko o okoshita.',
          cn: '就因为开车时看了手机而发生事故。',
        },
      },
      {
        q: {
          jp: '<ruby>地元<rt>じもと</rt></ruby>の<ruby>人々<rt>ひとびと</rt></ruby>は、なぜ<ruby>外部<rt>がいぶ</rt></ruby>を<ruby>警戒<rt>けいかい</rt></ruby>したか。',
          plain: 'じもとのひとびとは、なぜがいぶをけいかいしたか。',
          romaji: 'jimoto no hitobito wa, naze gaibu o keikai shita ka.',
          cn: '当地人为何警戒外部？',
        },
        a: {
          jp: '<ruby>誇<rt>ほこ</rt></ruby>りに<ruby>思<rt>おも</rt></ruby>う<ruby>余<rt>あま</rt></ruby>り、<ruby>外部<rt>がいぶ</rt></ruby>からの<ruby>影響<rt>えいきょう</rt></ruby>を<ruby>過剰<rt>かじょう</rt></ruby>に<ruby>警戒<rt>けいかい</rt></ruby>した。',
          plain: 'ほこりにおもうあまり、がいぶからのえいきょうをかじょうにけいかいした。',
          romaji: 'hokori ni omou amari, gaibu kara no eikyou o kajou ni keikai shita.',
          cn: '因过于自豪，对外部影响过度警戒。',
        },
        hint: '使用「〜あまり」表达"过度"',
      },
      {
        q: {
          jp: '「〜ばかりに」と「〜だけに」の<ruby>違<rt>ちが</rt></ruby>いは<ruby>何<rt>なに</rt></ruby>か。',
          plain: '「〜ばかりに」と「〜だけに」のちがいはなにか。',
          romaji: '"-bakari ni" to "-dake ni" no chigai wa nani ka.',
          cn: '「〜ばかりに」与「〜だけに」的区别是什么？',
        },
        a: {
          jp: '「〜ばかりに」は<ruby>後悔<rt>こうかい</rt></ruby>を<ruby>含<rt>ふく</rt></ruby>む<ruby>否定<rt>ひてい</rt></ruby>的な<ruby>結果<rt>けっか</rt></ruby>を<ruby>導<rt>みちび</rt></ruby>き、「〜だけに」は「<ruby>正<rt>まさ</rt></ruby>にその<ruby>理由<rt>りゆう</rt></ruby>で」と<ruby>強調<rt>きょうちょう</rt></ruby>する。',
          plain: '「〜ばかりに」はこうかいをふくむひていてきなけっかをみちびき、「〜だけに」は「まさにそのりゆうで」ときょうちょうする。',
          romaji: '"-bakari ni" wa koukai o fukumu hitei-teki na kekka o michibiki, "-dake ni" wa "masa ni sono riyuu de" to kyouchou suru.',
          cn: '「〜ばかりに」引出含懊悔的负面结果，「〜だけに」强调"正因为这个原因"。',
        },
      },
      {
        q: {
          jp: '<ruby>祖父<rt>そふ</rt></ruby>は<ruby>孫<rt>まご</rt></ruby>に<ruby>何<rt>なに</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えたかったか。',
          plain: 'そふはまごになにをつたえたかったか。',
          romaji: 'sofu wa mago ni nani o tsutaetakatta ka.',
          cn: '祖父想向孙子传达什么？',
        },
        a: {
          jp: '<ruby>若<rt>わか</rt></ruby>いだけに<ruby>可能性<rt>かのうせい</rt></ruby>はあるが、<ruby>忠告<rt>ちゅうこく</rt></ruby>には<ruby>耳<rt>みみ</rt></ruby>を<ruby>傾<rt>かたむ</rt></ruby>けるべきだということ。',
          plain: 'わかいだけにかのうせいはあるが、ちゅうこくにはみみをかたむけるべきだということ。',
          romaji: 'wakai dake ni kanousei wa aru ga, chuukoku ni wa mimi o katamukeru beki da to iu koto.',
          cn: '正因为年轻才有可能性，但应当倾听忠告。',
        },
      },
    ],
    vocabulary: [
      { jp: '油断', kana: 'ゆだん', romaji: 'yudan', meaning: '疏忽', pos: '名詞' },
      { jp: '一瞬', kana: 'いっしゅん', romaji: 'isshun', meaning: '一瞬', pos: '名詞' },
      { jp: '取り返し', kana: 'とりかえし', romaji: 'torikaeshi', meaning: '挽回', pos: '名詞' },
      { jp: '招く', kana: 'まねく', romaji: 'maneku', meaning: '招致', pos: '動詞I' },
      { jp: '友人', kana: 'ゆうじん', romaji: 'yuujin', meaning: '友人', pos: '名詞' },
      { jp: '携帯', kana: 'けいたい', romaji: 'keitai', meaning: '手机', pos: '名詞' },
      { jp: '事故', kana: 'じこ', romaji: 'jiko', meaning: '事故', pos: '名詞' },
      { jp: '幸い', kana: 'さいわい', romaji: 'saiwai', meaning: '幸而', pos: '副詞' },
      { jp: '後遺症', kana: 'こういしょう', romaji: 'kouishou', meaning: '后遗症', pos: '名詞' },
      { jp: '後悔', kana: 'こうかい', romaji: 'koukai', meaning: '后悔', pos: '名詞' },
      { jp: '事例', kana: 'じれい', romaji: 'jirei', meaning: '事例', pos: '名詞' },
      { jp: '後を絶たない', kana: 'あとをたたない', romaji: 'ato o tatanai', meaning: '不绝', pos: '慣用句' },
      { jp: '自治体', kana: 'じちたい', romaji: 'jichitai', meaning: '自治体', pos: '名詞' },
      { jp: '規制', kana: 'きせい', romaji: 'kisei', meaning: '管制', pos: '名詞' },
      { jp: '強化', kana: 'きょうか', romaji: 'kyouka', meaning: '强化', pos: '名詞' },
      { jp: '人命', kana: 'じんめい', romaji: 'jinmei', meaning: '人命', pos: '名詞' },
      { jp: '処罰', kana: 'しょばつ', romaji: 'shobatsu', meaning: '处罚', pos: '名詞' },
      { jp: 'やむを得ない', kana: 'やむをえない', romaji: 'yamu o enai', meaning: '不得已', pos: '慣用句' },
      { jp: '抜け道', kana: 'ぬけみち', romaji: 'nukemichi', meaning: '漏洞', pos: '名詞' },
      { jp: '限界', kana: 'げんかい', romaji: 'genkai', meaning: '极限', pos: '名詞' },
      { jp: '意識', kana: 'いしき', romaji: 'ishiki', meaning: '意识', pos: '名詞' },
      { jp: '過ち', kana: 'あやまち', romaji: 'ayamachi', meaning: '过错', pos: '名詞' },
      { jp: '左右する', kana: 'さゆうする', romaji: 'sayuu suru', meaning: '左右', pos: '動詞III' },
      { jp: '胸に刻む', kana: 'むねにきざむ', romaji: 'mune ni kizamu', meaning: '铭记于心', pos: '慣用句' },
      { jp: '大敵', kana: 'たいてき', romaji: 'taiteki', meaning: '大敌', pos: '名詞' },
      { jp: '慎重', kana: 'しんちょう', romaji: 'shinchou', meaning: '慎重', pos: 'な形容詞' },
      { jp: '盾', kana: 'たて', romaji: 'tate', meaning: '盾牌', pos: '名詞' },
      { jp: '独特', kana: 'どくとく', romaji: 'dokutoku', meaning: '独特', pos: 'な形容詞' },
      { jp: '経緯', kana: 'けいい', romaji: 'keii', meaning: '经纬', pos: '名詞' },
      { jp: '交易', kana: 'こうえき', romaji: 'koueki', meaning: '交易', pos: '名詞' },
      { jp: '要衝', kana: 'ようしょう', romaji: 'youshou', meaning: '要冲', pos: '名詞' },
      { jp: '誇り', kana: 'ほこり', romaji: 'hokori', meaning: '骄傲', pos: '名詞' },
      { jp: '過剰', kana: 'かじょう', romaji: 'kajou', meaning: '过度', pos: 'な形容詞' },
      { jp: '警戒', kana: 'けいかい', romaji: 'keikai', meaning: '警戒', pos: '名詞' },
      { jp: '閉鎖的', kana: 'へいさてき', romaji: 'heisa-teki', meaning: '封闭的', pos: 'な形容詞' },
      { jp: '忠告', kana: 'ちゅうこく', romaji: 'chuukoku', meaning: '忠告', pos: '名詞' },
    ],
    grammar: [
      {
        pattern: 'V た／い形／な形な／N である ばかりに',
        name: '就因为...（懊悔）',
        explain: '表示"就因为..."，引出说话人感到后悔、遗憾的负面结果。强烈的懊悔语感是其核心特征。前接动词常用过去时，强调"已经做了那件事，结果导致..."。后续句必须是消极、不良的结果。与「〜から」相比情感色彩浓得多。',
        examples: [
          {
            jp: 'お<ruby>金<rt>かね</rt></ruby>がなかったばかりに、<ruby>留学<rt>りゅうがく</rt></ruby>を<ruby>諦<rt>あきら</rt></ruby>めた。',
            plain: 'おかねがなかったばかりに、りゅうがくをあきらめた。',
            cn: '就因为没钱，放弃了留学。',
          },
          {
            jp: 'たった<ruby>一言<rt>ひとこと</rt></ruby><ruby>言<rt>い</rt></ruby>ったばかりに、<ruby>友情<rt>ゆうじょう</rt></ruby>を<ruby>失<rt>うしな</rt></ruby>った。',
            plain: 'たったひとこといったばかりに、ゆうじょうをうしなった。',
            cn: '就因为说了一句话，失去了友情。',
          },
        ],
      },
      {
        pattern: 'V る／い形／な形な／N の あまり',
        name: '由于太...（过度）',
        explain: '表示"由于太/过于...而..."，前项是某种感情或状态过度，导致后项的特殊结果。多用于情感（嬉しい・悲しい・心配・驚き）和状态（疲れる・忙しい）。注意：「〜あまり」直接接动词时常用「思うあまり」「考えるあまり」等，名词后接「の」。后项多是消极或异常的结果。',
        examples: [
          {
            jp: '<ruby>嬉<rt>うれ</rt></ruby>しさのあまり、<ruby>涙<rt>なみだ</rt></ruby>が<ruby>出<rt>で</rt></ruby>た。',
            plain: 'うれしさのあまり、なみだがでた。',
            cn: '高兴得流出了眼泪。',
          },
          {
            jp: '<ruby>子供<rt>こども</rt></ruby>を<ruby>心配<rt>しんぱい</rt></ruby>するあまり、<ruby>過保護<rt>かほご</rt></ruby>になってしまった。',
            plain: 'こどもをしんぱいするあまり、かほごになってしまった。',
            cn: '过于担心孩子，结果变得过度保护。',
          },
        ],
      },
      {
        pattern: 'V 普通形／い形／な形な／N である ことから',
        name: '由于这一点',
        explain: '表示"从...这一点可推断"或"由于这种情况，因此..."，是客观的、推论性的因果表达。常用于说明地名由来、事件起因、社会现象等。语气客观、书面化，不带感情色彩。与「〜から」相比，强调"以此为依据/线索"，常出现在新闻、说明文里。',
        examples: [
          {
            jp: '<ruby>桜<rt>さくら</rt></ruby>の<ruby>名所<rt>めいしょ</rt></ruby>であることから、<ruby>春<rt>はる</rt></ruby>には<ruby>多<rt>おお</rt></ruby>くの<ruby>観光客<rt>かんこうきゃく</rt></ruby>が<ruby>訪<rt>おとず</rt></ruby>れる。',
            plain: 'さくらのめいしょであることから、はるにはおおくのかんこうきゃくがおとずれる。',
            cn: '因为是赏樱名胜，春天有许多游客造访。',
          },
          {
            jp: '<ruby>事故<rt>じこ</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>いていることから、<ruby>警察<rt>けいさつ</rt></ruby>は<ruby>取<rt>と</rt></ruby>り<ruby>締<rt>し</rt></ruby>まりを<ruby>強化<rt>きょうか</rt></ruby>した。',
            plain: 'じこがつづいていることから、けいさつはとりしまりをきょうかした。',
            cn: '因事故频发，警方加强了管制。',
          },
        ],
      },
      {
        pattern: 'V 普通形／い形／な形な／N である だけに',
        name: '正因为...所以...',
        explain: '表示"正因为...，所以更加..."，强调正是这个原因导致后项的程度更深。后项常常是"理所当然"或"反而更加..."的内容。可接积极或消极结果，但通常带有"超出常规预期"的语感。与「〜から」相比，更强调因果之间的合理性和强度。',
        examples: [
          {
            jp: '<ruby>長年<rt>ながねん</rt></ruby>の<ruby>努力<rt>どりょく</rt></ruby>があっただけに、<ruby>合格<rt>ごうかく</rt></ruby>の<ruby>喜<rt>よろこ</rt></ruby>びは<ruby>大<rt>おお</rt></ruby>きい。',
            plain: 'ながねんのどりょくがあっただけに、ごうかくのよろこびはおおきい。',
            cn: '正因为有多年的努力，合格的喜悦才更大。',
          },
          {
            jp: 'プロだけに、<ruby>仕上<rt>しあ</rt></ruby>がりが<ruby>違<rt>ちが</rt></ruby>う。',
            plain: 'プロだけに、しあがりがちがう。',
            cn: '正因为是专业人士，成品不一样。',
          },
        ],
      },
      {
        pattern: '〜ものの',
        name: '虽然...但是...',
        explain: '表示"虽然...但是..."，前项承认某事实，后项叙述与预期不一致的结果。书面色彩强，比「〜けれど」更正式。常用「〜とはいうものの」、「〜たものの」等形式。后项多为消极、未达预期的内容。',
        examples: [
          {
            jp: '<ruby>免許<rt>めんきょ</rt></ruby>は<ruby>取<rt>と</rt></ruby>ったものの、<ruby>運転<rt>うんてん</rt></ruby>する<ruby>機会<rt>きかい</rt></ruby>がない。',
            plain: 'めんきょはとったものの、うんてんするきかいがない。',
            cn: '虽然考了驾照，但没有开车的机会。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 47 課 — 主観的判断
  // ========================================================
  {
    id: 47,
    level: 'N2',
    title: {
      jp: '主観的判断',
      romaji: 'shukan-teki handan',
      cn: '主观判断',
      en: 'Subjective Judgment',
    },
    goals: [
      '掌握「〜ものだ」的多重含义（普遍真理／怀念／应当）',
      '理解「〜ことだ」与「〜まい」的语感差异',
      '能用书面体写一段哲理性的散文',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '人生というもの',
          romaji: 'jinsei to iu mono',
          cn: '所谓人生',
        },
        sentences: [
          {
            jp: '<ruby>人生<rt>じんせい</rt></ruby>というものは、<ruby>思<rt>おも</rt></ruby>い<ruby>通<rt>どお</rt></ruby>りにいかないものである。',
            plain: 'じんせいというものは、おもいどおりにいかないものである。',
            romaji: 'jinsei to iu mono wa, omoidoori ni ikanai mono de aru.',
            cn: '所谓人生，往往不会如愿以偿。',
          },
          {
            jp: '<ruby>若<rt>わか</rt></ruby>い<ruby>頃<rt>ころ</rt></ruby>は、<ruby>努力<rt>どりょく</rt></ruby>さえすれば<ruby>何<rt>なん</rt></ruby>でも<ruby>叶<rt>かな</rt></ruby>うものだと<ruby>信<rt>しん</rt></ruby>じていた。',
            plain: 'わかいころは、どりょくさえすればなんでもかなうものだとしんじていた。',
            romaji: 'wakai koro wa, doryoku sae sureba nan demo kanau mono da to shinjite ita.',
            cn: '年轻时，曾相信只要努力就什么都能实现。',
          },
          {
            jp: 'しかし、<ruby>年<rt>とし</rt></ruby>を<ruby>重<rt>かさ</rt></ruby>ねるにつれて、<ruby>世<rt>よ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>には<ruby>努力<rt>どりょく</rt></ruby>だけでは<ruby>越<rt>こ</rt></ruby>えられない<ruby>壁<rt>かべ</rt></ruby>があることを<ruby>知<rt>し</rt></ruby>った。',
            plain: 'しかし、としをかさねるにつれて、よのなかにはどりょくだけではこえられないかべがあることをしった。',
            romaji: 'shikashi, toshi o kasaneru ni tsurete, yo no naka ni wa doryoku dake de wa koerarenai kabe ga aru koto o shitta.',
            cn: '然而随着岁月增长，逐渐知道世上有仅靠努力跨不过去的墙。',
          },
          {
            jp: '<ruby>子供<rt>こども</rt></ruby>の<ruby>頃<rt>ころ</rt></ruby>は、よく<ruby>家族<rt>かぞく</rt></ruby>みんなで<ruby>夕食<rt>ゆうしょく</rt></ruby>を<ruby>囲<rt>かこ</rt></ruby>んだものだ。',
            plain: 'こどものころは、よくかぞくみんなでゆうしょくをかこんだものだ。',
            romaji: 'kodomo no koro wa, yoku kazoku minna de yuushoku o kakonda mono da.',
            cn: '小时候，常常全家一起围着吃晚饭。',
          },
          {
            jp: 'あの<ruby>頃<rt>ころ</rt></ruby>の<ruby>食卓<rt>しょくたく</rt></ruby>には、<ruby>笑<rt>わら</rt></ruby>い<ruby>声<rt>ごえ</rt></ruby>が<ruby>絶<rt>た</rt></ruby>えなかった。',
            plain: 'あのころのしょくたくには、わらいごえがたえなかった。',
            romaji: 'ano koro no shokutaku ni wa, waraigoe ga taenakatta.',
            cn: '那时候的餐桌上，笑声不断。',
          },
          {
            jp: '<ruby>大人<rt>おとな</rt></ruby>になれば、<ruby>失<rt>うしな</rt></ruby>うものもあれば、<ruby>得<rt>え</rt></ruby>るものもある。',
            plain: 'おとなになれば、うしなうものもあれば、えるものもある。',
            romaji: 'otona ni nareba, ushinau mono mo areba, eru mono mo aru.',
            cn: '长大成人，既有失去的，也有得到的。',
          },
          {
            jp: '<ruby>大切<rt>たいせつ</rt></ruby>なのは、<ruby>失<rt>うしな</rt></ruby>ったものを<ruby>嘆<rt>なげ</rt></ruby>くのではなく、<ruby>今<rt>いま</rt></ruby><ruby>手<rt>て</rt></ruby>にしているものに<ruby>感謝<rt>かんしゃ</rt></ruby>することだ。',
            plain: 'たいせつなのは、うしなったものをなげくのではなく、いまてにしているものにかんしゃすることだ。',
            romaji: 'taisetsu na no wa, ushinatta mono o nageku no de wa naku, ima te ni shite iru mono ni kansha suru koto da.',
            cn: '重要的是，不要为失去的悲叹，而要感谢眼下所拥有的。',
          },
          {
            jp: '<ruby>人<rt>ひと</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>しも、<ruby>過<rt>あやま</rt></ruby>ちを<ruby>犯<rt>おか</rt></ruby>すものである。',
            plain: 'ひとはだれしも、あやまちをおかすものである。',
            romaji: 'hito wa dare shi mo, ayamachi o okasu mono de aru.',
            cn: '人都会犯错。',
          },
          {
            jp: '<ruby>同<rt>おな</rt></ruby>じ<ruby>過<rt>あやま</rt></ruby>ちは<ruby>二度<rt>にど</rt></ruby>と<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>すまい——そう<ruby>誓<rt>ちか</rt></ruby>って<ruby>生<rt>い</rt></ruby>きていくしかない。',
            plain: 'おなじあやまちはにどとくりかえすまい——そうちかっていきていくしかない。',
            romaji: 'onaji ayamachi wa nido to kurikaesu mai—sou chikatte ikite iku shika nai.',
            cn: '"绝不再犯同样的错"——只能如此发誓而活下去。',
          },
          {
            jp: '<ruby>幸<rt>しあわ</rt></ruby>せとは、<ruby>遠<rt>とお</rt></ruby>くにあるものではなく、<ruby>身近<rt>みぢか</rt></ruby>な<ruby>日常<rt>にちじょう</rt></ruby>の<ruby>中<rt>なか</rt></ruby>にひそんでいるものだ。',
            plain: 'しあわせとは、とおくにあるものではなく、みぢかなにちじょうのなかにひそんでいるものだ。',
            romaji: 'shiawase to wa, tooku ni aru mono de wa naku, mijika na nichijou no naka ni hisonde iru mono da.',
            cn: '所谓幸福，并非远在彼岸，而是潜藏于身边的日常之中。',
          },
          {
            jp: '<ruby>毎日<rt>まいにち</rt></ruby>を<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>生<rt>い</rt></ruby>きること——それこそが、<ruby>人生<rt>じんせい</rt></ruby>を<ruby>豊<rt>ゆた</rt></ruby>かにする<ruby>唯一<rt>ゆいいつ</rt></ruby>の<ruby>方法<rt>ほうほう</rt></ruby>であろう。',
            plain: 'まいにちをていねいにいきること——それこそが、じんせいをゆたかにするゆいいつのほうほうであろう。',
            romaji: 'mainichi o teinei ni ikiru koto—sore koso ga, jinsei o yutaka ni suru yuiitsu no houhou de arou.',
            cn: '认真度过每一天——这恐怕才是丰富人生的唯一方法。',
          },
          {
            jp: '<ruby>人生<rt>じんせい</rt></ruby>とはそういうものなのだと、<ruby>今<rt>いま</rt></ruby>になってようやく<ruby>分<rt>わ</rt></ruby>かりかけている。',
            plain: 'じんせいとはそういうものなのだと、いまになってようやくわかりかけている。',
            romaji: 'jinsei to wa sou iu mono na no da to, ima ni natte youyaku wakari kakete iru.',
            cn: '所谓人生即是如此——直到如今，才终于开始有所领悟。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '二度と忘れまい',
          romaji: 'nido to wasureru mai',
          cn: '绝不再忘',
        },
        sentences: [
          {
            jp: 'あの<ruby>日<rt>ひ</rt></ruby>の<ruby>失敗<rt>しっぱい</rt></ruby>は、<ruby>私<rt>わたし</rt></ruby>にとって<ruby>忘<rt>わす</rt></ruby>れがたい<ruby>記憶<rt>きおく</rt></ruby>である。',
            plain: 'あのひのしっぱいは、わたしにとってわすれがたいきおくである。',
            romaji: 'ano hi no shippai wa, watashi ni totte wasuregatai kioku de aru.',
            cn: '那一天的失败，对我而言是难以忘怀的记忆。',
          },
          {
            jp: '<ruby>準備<rt>じゅんび</rt></ruby><ruby>不足<rt>ぶそく</rt></ruby>のまま<ruby>本番<rt>ほんばん</rt></ruby>に<ruby>臨<rt>のぞ</rt></ruby>み、<ruby>大<rt>おお</rt></ruby>きな<ruby>失敗<rt>しっぱい</rt></ruby>を<ruby>犯<rt>おか</rt></ruby>した。',
            plain: 'じゅんびぶそくのままほんばんにのぞみ、おおきなしっぱいをおかした。',
            romaji: 'junbi-busoku no mama honban ni nozomi, ookina shippai o okashita.',
            cn: '在准备不足的情况下上场，犯了大错。',
          },
          {
            jp: '<ruby>同<rt>おな</rt></ruby>じ<ruby>失敗<rt>しっぱい</rt></ruby>は<ruby>二度<rt>にど</rt></ruby>と<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>すまいと<ruby>固<rt>かた</rt></ruby>く<ruby>誓<rt>ちか</rt></ruby>った。',
            plain: 'おなじしっぱいはにどとくりかえすまいとかたくちかった。',
            romaji: 'onaji shippai wa nido to kurikaesu mai to kataku chikatta.',
            cn: '坚决发誓绝不再犯同样的失败。',
          },
          {
            jp: '<ruby>反省<rt>はんせい</rt></ruby>することだ。それだけが、<ruby>次<rt>つぎ</rt></ruby>に<ruby>進<rt>すす</rt></ruby>むための<ruby>唯一<rt>ゆいいつ</rt></ruby>の<ruby>道<rt>みち</rt></ruby>だ。',
            plain: 'はんせいすることだ。それだけが、つぎにすすむためのゆいいつのみちだ。',
            romaji: 'hansei suru koto da. sore dake ga, tsugi ni susumu tame no yuiitsu no michi da.',
            cn: '要反省。唯有如此，才是迈向下一步的唯一道路。',
          },
          {
            jp: '<ruby>人<rt>ひと</rt></ruby>は<ruby>失敗<rt>しっぱい</rt></ruby>から<ruby>学<rt>まな</rt></ruby>ぶものだという。',
            plain: 'ひとはしっぱいからまなぶものだという。',
            romaji: 'hito wa shippai kara manabu mono da to iu.',
            cn: '据说人是从失败中学习的。',
          },
          {
            jp: 'しかし、<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>学<rt>まな</rt></ruby>ぶためには、<ruby>痛<rt>いた</rt></ruby>みを<ruby>正面<rt>しょうめん</rt></ruby>から<ruby>受<rt>う</rt></ruby>け<ruby>止<rt>と</rt></ruby>めることである。',
            plain: 'しかし、ほんとうにまなぶためには、いたみをしょうめんからうけとめることである。',
            romaji: 'shikashi, hontou ni manabu tame ni wa, itami o shoumen kara uketomeru koto de aru.',
            cn: '但是，要真正学到东西，就要正面承受痛苦。',
          },
          {
            jp: '<ruby>逃<rt>に</rt></ruby>げるまい——そう<ruby>決<rt>き</rt></ruby>めた<ruby>瞬間<rt>しゅんかん</rt></ruby>から、<ruby>新<rt>あたら</rt></ruby>しい<ruby>道<rt>みち</rt></ruby>が<ruby>開<rt>ひら</rt></ruby>けてくる。',
            plain: 'にげるまい——そうきめたしゅんかんから、あたらしいみちがひらけてくる。',
            romaji: 'nigeru mai—sou kimeta shunkan kara, atarashii michi ga hirakete kuru.',
            cn: '"绝不逃避"——决心如此的瞬间，新的道路便会打开。',
          },
          {
            jp: 'あの<ruby>苦<rt>くる</rt></ruby>しい<ruby>経験<rt>けいけん</rt></ruby>こそが、<ruby>今<rt>いま</rt></ruby>の<ruby>私<rt>わたし</rt></ruby>を<ruby>支<rt>ささ</rt></ruby>えているのだと<ruby>言<rt>い</rt></ruby>えよう。',
            plain: 'あのくるしいけいけんこそが、いまのわたしをささえているのだといえよう。',
            romaji: 'ano kurushii keiken koso ga, ima no watashi o sasaete iru no da to ieyou.',
            cn: '正是那段痛苦的经历，方可说是支撑着如今的我。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '人生相談で、年配の人が若者に語りかける。',
        cn: '人生咨询时，长者对年轻人说话。',
      },
      lines: [
        {
          speaker: '若者',
          jp: '<ruby>最近<rt>さいきん</rt></ruby>、<ruby>何<rt>なに</rt></ruby>をやっても<ruby>上手<rt>うま</rt></ruby>くいかなくて……。',
          plain: 'さいきん、なにをやってもうまくいかなくて……。',
          romaji: 'saikin, nani o yatte mo umaku ikanakute....',
          cn: '最近，不管做什么都不顺利……。',
        },
        {
          speaker: '年配者',
          jp: '<ruby>人生<rt>じんせい</rt></ruby>はそういうものですよ。<ruby>誰<rt>だれ</rt></ruby>にでも<ruby>谷<rt>たに</rt></ruby>の<ruby>時期<rt>じき</rt></ruby>はあるものです。',
          plain: 'じんせいはそういうものですよ。だれにでもたにのじきはあるものです。',
          romaji: 'jinsei wa sou iu mono desu yo. dare ni de mo tani no jiki wa aru mono desu.',
          cn: '人生就是这样。谁都会有低谷期。',
        },
        {
          speaker: '若者',
          jp: 'でも、<ruby>同<rt>おな</rt></ruby>じ<ruby>失敗<rt>しっぱい</rt></ruby>を<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>してしまうんです。',
          plain: 'でも、おなじしっぱいをくりかえしてしまうんです。',
          romaji: 'demo, onaji shippai o kurikaeshite shimau n desu.',
          cn: '可是，我会重复同样的失败。',
        },
        {
          speaker: '年配者',
          jp: 'まずは、なぜ<ruby>失敗<rt>しっぱい</rt></ruby>したのかを<ruby>冷静<rt>れいせい</rt></ruby>に<ruby>分析<rt>ぶんせき</rt></ruby>することです。',
          plain: 'まずは、なぜしっぱいしたのかをれいせいにぶんせきすることです。',
          romaji: 'mazu wa, naze shippai shita no ka o reisei ni bunseki suru koto desu.',
          cn: '首先，要冷静分析为什么会失败。',
        },
        {
          speaker: '若者',
          jp: 'はい、<ruby>分<rt>わ</rt></ruby>かりました。<ruby>同<rt>おな</rt></ruby>じ<ruby>過<rt>あやま</rt></ruby>ちは<ruby>二度<rt>にど</rt></ruby>とすまいと<ruby>思<rt>おも</rt></ruby>います。',
          plain: 'はい、わかりました。おなじあやまちはにどとすまいとおもいます。',
          romaji: 'hai, wakarimashita. onaji ayamachi wa nido to su mai to omoimasu.',
          cn: '好的，我明白了。我想绝不再犯同样的过错。',
        },
        {
          speaker: '年配者',
          jp: 'その<ruby>気持<rt>きも</rt></ruby>ちが<ruby>大切<rt>たいせつ</rt></ruby>です。<ruby>失敗<rt>しっぱい</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>でもするものですから、<ruby>立<rt>た</rt></ruby>ち<ruby>直<rt>なお</rt></ruby>る<ruby>力<rt>ちから</rt></ruby>こそが<ruby>大事<rt>だいじ</rt></ruby>なんです。',
          plain: 'そのきもちがたいせつです。しっぱいはだれでもするものですから、たちなおるちからこそがだいじなんです。',
          romaji: 'sono kimochi ga taisetsu desu. shippai wa dare de mo suru mono desu kara, tachinaoru chikara koso ga daiji nan desu.',
          cn: '那种心情很重要。失败谁都会经历，能重新站起的力量才是关键。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>筆者<rt>ひっしゃ</rt></ruby>は<ruby>若<rt>わか</rt></ruby>い<ruby>頃<rt>ころ</rt></ruby>、<ruby>何<rt>なに</rt></ruby>を<ruby>信<rt>しん</rt></ruby>じていたか。',
          plain: 'ひっしゃはわかいころ、なにをしんじていたか。',
          romaji: 'hissha wa wakai koro, nani o shinjite ita ka.',
          cn: '作者年轻时相信什么？',
        },
        a: {
          jp: '<ruby>努力<rt>どりょく</rt></ruby>さえすれば<ruby>何<rt>なん</rt></ruby>でも<ruby>叶<rt>かな</rt></ruby>うものだと<ruby>信<rt>しん</rt></ruby>じていた。',
          plain: 'どりょくさえすればなんでもかなうものだとしんじていた。',
          romaji: 'doryoku sae sureba nan demo kanau mono da to shinjite ita.',
          cn: '相信只要努力就什么都能实现。',
        },
      },
      {
        q: {
          jp: '<ruby>幸<rt>しあわ</rt></ruby>せはどこにあると<ruby>筆者<rt>ひっしゃ</rt></ruby>は<ruby>言<rt>い</rt></ruby>っているか。',
          plain: 'しあわせはどこにあるとひっしゃはいっているか。',
          romaji: 'shiawase wa doko ni aru to hissha wa itte iru ka.',
          cn: '作者说幸福在哪里？',
        },
        a: {
          jp: '<ruby>遠<rt>とお</rt></ruby>くではなく、<ruby>身近<rt>みぢか</rt></ruby>な<ruby>日常<rt>にちじょう</rt></ruby>の<ruby>中<rt>なか</rt></ruby>にひそんでいると<ruby>言<rt>い</rt></ruby>っている。',
          plain: 'とおくではなく、みぢかなにちじょうのなかにひそんでいるといっている。',
          romaji: 'tooku de wa naku, mijika na nichijou no naka ni hisonde iru to itte iru.',
          cn: '不是远处，而是潜藏于身边的日常之中。',
        },
      },
      {
        q: {
          jp: '「<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>すまい」とはどういう<ruby>意味<rt>いみ</rt></ruby>か。',
          plain: '「くりかえすまい」とはどういういみか。',
          romaji: '"kurikaesu mai" to wa dou iu imi ka.',
          cn: '「繰り返すまい」是什么意思？',
        },
        a: {
          jp: '「<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>さない」という<ruby>強<rt>つよ</rt></ruby>い<ruby>否定<rt>ひてい</rt></ruby>の<ruby>意志<rt>いし</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>す。',
          plain: '「ぜったいにくりかえさない」というつよいひていのいしをあらわす。',
          romaji: '"zettai ni kurikaesanai" to iu tsuyoi hitei no ishi o arawasu.',
          cn: '表示"绝对不再重复"的强烈否定意志。',
        },
        hint: '「〜まい」是否定意志或否定推量',
      },
      {
        q: {
          jp: '<ruby>年配者<rt>ねんぱいしゃ</rt></ruby>は、<ruby>若者<rt>わかもの</rt></ruby>に<ruby>何<rt>なに</rt></ruby>が<ruby>大事<rt>だいじ</rt></ruby>だと<ruby>言<rt>い</rt></ruby>ったか。',
          plain: 'ねんぱいしゃは、わかものになにがだいじだといったか。',
          romaji: 'nenpaisha wa, wakamono ni nani ga daiji da to itta ka.',
          cn: '长者对年轻人说什么是重要的？',
        },
        a: {
          jp: '<ruby>立<rt>た</rt></ruby>ち<ruby>直<rt>なお</rt></ruby>る<ruby>力<rt>ちから</rt></ruby>こそが<ruby>大事<rt>だいじ</rt></ruby>だと<ruby>言<rt>い</rt></ruby>った。',
          plain: 'たちなおるちからこそがだいじだといった。',
          romaji: 'tachinaoru chikara koso ga daiji da to itta.',
          cn: '说重新站起的力量才是关键。',
        },
      },
    ],
    vocabulary: [
      { jp: '思い通り', kana: 'おもいどおり', romaji: 'omoidoori', meaning: '如愿', pos: '名詞' },
      { jp: '叶う', kana: 'かなう', romaji: 'kanau', meaning: '实现', pos: '動詞I' },
      { jp: '重ねる', kana: 'かさねる', romaji: 'kasaneru', meaning: '累积', pos: '動詞II' },
      { jp: '世の中', kana: 'よのなか', romaji: 'yo no naka', meaning: '世上', pos: '名詞' },
      { jp: '越える', kana: 'こえる', romaji: 'koeru', meaning: '越过', pos: '動詞II' },
      { jp: '壁', kana: 'かべ', romaji: 'kabe', meaning: '墙', pos: '名詞' },
      { jp: '囲む', kana: 'かこむ', romaji: 'kakomu', meaning: '围绕', pos: '動詞I' },
      { jp: '食卓', kana: 'しょくたく', romaji: 'shokutaku', meaning: '餐桌', pos: '名詞' },
      { jp: '笑い声', kana: 'わらいごえ', romaji: 'waraigoe', meaning: '笑声', pos: '名詞' },
      { jp: '絶える', kana: 'たえる', romaji: 'taeru', meaning: '断绝', pos: '動詞II' },
      { jp: '失う', kana: 'うしなう', romaji: 'ushinau', meaning: '失去', pos: '動詞I' },
      { jp: '嘆く', kana: 'なげく', romaji: 'nageku', meaning: '悲叹', pos: '動詞I' },
      { jp: '誰しも', kana: 'だれしも', romaji: 'dareshimo', meaning: '谁都', pos: '副詞' },
      { jp: '犯す', kana: 'おかす', romaji: 'okasu', meaning: '犯（错）', pos: '動詞I' },
      { jp: '誓う', kana: 'ちかう', romaji: 'chikau', meaning: '发誓', pos: '動詞I' },
      { jp: '身近', kana: 'みぢか', romaji: 'mijika', meaning: '身边', pos: 'な形容詞' },
      { jp: '日常', kana: 'にちじょう', romaji: 'nichijou', meaning: '日常', pos: '名詞' },
      { jp: 'ひそむ', kana: 'ひそむ', romaji: 'hisomu', meaning: '潜藏', pos: '動詞I' },
      { jp: '丁寧', kana: 'ていねい', romaji: 'teinei', meaning: '认真', pos: 'な形容詞' },
      { jp: '豊か', kana: 'ゆたか', romaji: 'yutaka', meaning: '丰富', pos: 'な形容詞' },
      { jp: '本番', kana: 'ほんばん', romaji: 'honban', meaning: '正式上场', pos: '名詞' },
      { jp: '臨む', kana: 'のぞむ', romaji: 'nozomu', meaning: '面对', pos: '動詞I' },
      { jp: '反省', kana: 'はんせい', romaji: 'hansei', meaning: '反省', pos: '名詞' },
      { jp: '痛み', kana: 'いたみ', romaji: 'itami', meaning: '痛苦', pos: '名詞' },
      { jp: '正面', kana: 'しょうめん', romaji: 'shoumen', meaning: '正面', pos: '名詞' },
      { jp: '受け止める', kana: 'うけとめる', romaji: 'uketomeru', meaning: '承受', pos: '動詞II' },
      { jp: '逃げる', kana: 'にげる', romaji: 'nigeru', meaning: '逃避', pos: '動詞II' },
      { jp: '開ける', kana: 'ひらける', romaji: 'hirakeru', meaning: '打开', pos: '動詞II' },
      { jp: '支える', kana: 'ささえる', romaji: 'sasaeru', meaning: '支撑', pos: '動詞II' },
      { jp: '冷静', kana: 'れいせい', romaji: 'reisei', meaning: '冷静', pos: 'な形容詞' },
      { jp: '立ち直る', kana: 'たちなおる', romaji: 'tachinaoru', meaning: '重新站起', pos: '動詞I' },
    ],
    grammar: [
      {
        pattern: 'V 普通形／い形／な形な／N の ものだ',
        name: 'ものだ的多重含义',
        explain: '「〜ものだ」有三层含义：(1) 普遍真理 / 本性："人は誰しも失敗するものだ"（人都会犯错）；(2) 怀念过去（接动词过去时）："よく遊んだものだ"（以前常常玩）；(3) 应当 / 道德义务："お年寄りには席を譲るものだ"（应该给老人让座）。判断时看上下文：感叹普遍性 / 回忆 / 教导。',
        examples: [
          {
            jp: '<ruby>時間<rt>じかん</rt></ruby>はあっという<ruby>間<rt>ま</rt></ruby>に<ruby>過<rt>す</rt></ruby>ぎるものだ。',
            plain: 'じかんはあっというまにすぎるものだ。',
            cn: '时间总是转眼就过去。（普遍真理）',
          },
          {
            jp: '<ruby>子供<rt>こども</rt></ruby>の<ruby>頃<rt>ころ</rt></ruby>はよく<ruby>川<rt>かわ</rt></ruby>で<ruby>遊<rt>あそ</rt></ruby>んだものだ。',
            plain: 'こどものころはよくかわであそんだものだ。',
            cn: '小时候常常在河边玩。（怀念）',
          },
          {
            jp: '<ruby>約束<rt>やくそく</rt></ruby>は<ruby>守<rt>まも</rt></ruby>るものだ。',
            plain: 'やくそくはまもるものだ。',
            cn: '约定就该遵守。（应当）',
          },
        ],
      },
      {
        pattern: 'V る／V ない ことだ',
        name: '建议、警示',
        explain: '表示"应该..."、"...为好"，用于给对方建议或警告。语气比「〜べきだ」柔和但仍有指导意味，常出现在长辈对晚辈、过来人的告诫中。否定形「〜ないことだ」表示"不要..."。注意与「ものだ」（普遍道理）的区别：「ことだ」针对具体情境的具体建议。',
        examples: [
          {
            jp: '<ruby>健康<rt>けんこう</rt></ruby>のためには、<ruby>毎日<rt>まいにち</rt></ruby><ruby>運動<rt>うんどう</rt></ruby>することだ。',
            plain: 'けんこうのためには、まいにちうんどうすることだ。',
            cn: '为了健康，要每天运动。',
          },
          {
            jp: '<ruby>無理<rt>むり</rt></ruby>はしないことだ。',
            plain: 'むりはしないことだ。',
            cn: '不要勉强自己。',
          },
        ],
      },
      {
        pattern: 'V る まい／V よう まい',
        name: '否定意志 / 否定推量',
        explain: '「〜まい」是书面、古风的否定形式，有两种用法：(1) 否定意志（"绝不..."）："二度と行くまい"（绝不再去）；(2) 否定推量（"大概不会..."）："雨は降るまい"（大概不会下雨）。接续：I类动词原形＋まい（行くまい）、II类动词る／ない去掉＋まい（食べまい・食べるまい都可）、III类（するまい・すまい・しまい／来るまい・来まい・こまい）。一般用于书面语和正式演讲。',
        examples: [
          {
            jp: 'もう<ruby>二度<rt>にど</rt></ruby>とあのような<ruby>失敗<rt>しっぱい</rt></ruby>はすまい。',
            plain: 'もうにどとあのようなしっぱいはすまい。',
            cn: '绝不再犯那样的失败。（否定意志）',
          },
          {
            jp: 'こんな<ruby>難<rt>むずか</rt></ruby>しい<ruby>問題<rt>もんだい</rt></ruby>、<ruby>誰<rt>だれ</rt></ruby>にも<ruby>解<rt>と</rt></ruby>けまい。',
            plain: 'こんなむずかしいもんだい、だれにもとけまい。',
            cn: '这么难的题，恐怕谁也解不出来。（否定推量）',
          },
        ],
      },
      {
        pattern: '〜というもの',
        name: '所谓...',
        explain: '用于定义、说明某概念的本质。前接名词，引出对它的整体性评价或抽象议论。常出现在散文、随笔的开头。语气哲思味浓。',
        examples: [
          {
            jp: '<ruby>友情<rt>ゆうじょう</rt></ruby>というものは、<ruby>時<rt>とき</rt></ruby>を<ruby>越<rt>こ</rt></ruby>えても<ruby>変<rt>か</rt></ruby>わらないものだ。',
            plain: 'ゆうじょうというものは、ときをこえてもかわらないものだ。',
            cn: '所谓友情，是跨越时间也不会改变的东西。',
          },
        ],
      },
      {
        pattern: '〜こそ',
        name: '正是...才...',
        explain: '强调"正是..."。前接名词或部分句子成分，强调其唯一性、重要性。「〜こそが」是更强调主语的形式。',
        examples: [
          {
            jp: '<ruby>今<rt>いま</rt></ruby>こそ、<ruby>立<rt>た</rt></ruby>ち<ruby>上<rt>あ</rt></ruby>がるべき<ruby>時<rt>とき</rt></ruby>だ。',
            plain: 'いまこそ、たちあがるべきときだ。',
            cn: '正是现在，是应该站起来的时候。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 48 課 — 文化と社会
  // ========================================================
  {
    id: 48,
    level: 'N2',
    title: {
      jp: '文化と社会',
      romaji: 'bunka to shakai',
      cn: '文化与社会',
      en: 'Culture and Society',
    },
    goals: [
      '综合运用 N5-N2 的书面语法表达',
      '理解日本四季文化与文学的深层联系',
      '能阅读较长的文化散文，把握其美学逻辑',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '日本の四季と文学',
          romaji: 'nihon no shiki to bungaku',
          cn: '日本的四季与文学',
        },
        sentences: [
          {
            jp: '<ruby>日本人<rt>にほんじん</rt></ruby>にとって、<ruby>四季<rt>しき</rt></ruby>は<ruby>単<rt>たん</rt></ruby>なる<ruby>気候<rt>きこう</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>ではない。',
            plain: 'にほんじんにとって、しきはたんなるきこうのへんかではない。',
            romaji: 'nihonjin ni totte, shiki wa tan naru kikou no henka de wa nai.',
            cn: '对日本人而言，四季并非单纯的气候变化。',
          },
          {
            jp: 'それは<ruby>感性<rt>かんせい</rt></ruby>を<ruby>磨<rt>みが</rt></ruby>き、<ruby>言葉<rt>ことば</rt></ruby>を<ruby>豊<rt>ゆた</rt></ruby>かにする、<ruby>文化<rt>ぶんか</rt></ruby>の<ruby>根<rt>ね</rt></ruby>そのものなのである。',
            plain: 'それはかんせいをみがき、ことばをゆたかにする、ぶんかのねそのものなのである。',
            romaji: 'sore wa kansei o migaki, kotoba o yutaka ni suru, bunka no ne sono mono na no de aru.',
            cn: '它是磨砺感性、丰富语言的——文化之根本身。',
          },
          {
            jp: '<ruby>春<rt>はる</rt></ruby>になれば、<ruby>桜<rt>さくら</rt></ruby>が<ruby>咲<rt>さ</rt></ruby>き、<ruby>人々<rt>ひとびと</rt></ruby>は<ruby>木<rt>こ</rt></ruby>の<ruby>下<rt>した</rt></ruby>に<ruby>集<rt>あつ</rt></ruby>まる。',
            plain: 'はるになれば、さくらがさき、ひとびとはこのしたにあつまる。',
            romaji: 'haru ni nareba, sakura ga saki, hitobito wa ko no shita ni atsumaru.',
            cn: '春天到来，樱花盛开，人们便聚集在树下。',
          },
          {
            jp: '<ruby>満開<rt>まんかい</rt></ruby>の<ruby>桜<rt>さくら</rt></ruby>はわずか<ruby>一週間<rt>いっしゅうかん</rt></ruby>ほどで<ruby>散<rt>ち</rt></ruby>ってしまうにもかかわらず、その<ruby>儚<rt>はかな</rt></ruby>さこそが<ruby>美<rt>うつく</rt></ruby>しさの<ruby>本質<rt>ほんしつ</rt></ruby>である。',
            plain: 'まんかいのさくらはわずかいっしゅうかんほどでちってしまうにもかかわらず、そのはかなさこそがうつくしさのほんしつである。',
            romaji: 'mankai no sakura wa wazuka isshuukan hodo de chitte shimau ni mo kakawarazu, sono hakanasa koso ga utsukushisa no honshitsu de aru.',
            cn: '满开的樱花虽仅仅一周左右便会凋落，正是这种短暂才是美的本质。',
          },
          {
            jp: '<ruby>古来<rt>こらい</rt></ruby>、<ruby>歌人<rt>かじん</rt></ruby>たちは<ruby>桜<rt>さくら</rt></ruby>を<ruby>通<rt>とお</rt></ruby>して<ruby>人生<rt>じんせい</rt></ruby>の<ruby>無常<rt>むじょう</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>ってきたのである。',
            plain: 'こらい、かじんたちはさくらをとおしてじんせいのむじょうをうたってきたのである。',
            romaji: 'korai, kajin-tachi wa sakura o tooshite jinsei no mujou o utatte kita no de aru.',
            cn: '自古以来，歌人们便通过樱花歌咏人生的无常。',
          },
          {
            jp: '<ruby>夏<rt>なつ</rt></ruby>になると、<ruby>蝉<rt>せみ</rt></ruby>の<ruby>声<rt>こえ</rt></ruby>が<ruby>森<rt>もり</rt></ruby>を<ruby>満<rt>み</rt></ruby>たす。',
            plain: 'なつになると、せみのこえがもりをみたす。',
            romaji: 'natsu ni naru to, semi no koe ga mori o mitasu.',
            cn: '一到夏天，蝉声便充盈森林。',
          },
          {
            jp: '<ruby>松尾芭蕉<rt>まつおばしょう</rt></ruby>の<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>句<rt>く</rt></ruby>「<ruby>閑<rt>しずか</rt></ruby>さや<ruby>岩<rt>いわ</rt></ruby>にしみ<ruby>入<rt>い</rt></ruby>る<ruby>蝉<rt>せみ</rt></ruby>の<ruby>声<rt>こえ</rt></ruby>」は、<ruby>音<rt>おと</rt></ruby>と<ruby>静寂<rt>せいじゃく</rt></ruby>の<ruby>逆説<rt>ぎゃくせつ</rt></ruby>を<ruby>見事<rt>みごと</rt></ruby>に<ruby>捉<rt>とら</rt></ruby>えている。',
            plain: 'まつおばしょうのゆうめいなく「しずかさやいわにしみいるせみのこえ」は、おととせいじゃくのぎゃくせつをみごとにとらえている。',
            romaji: 'Matsuo Bashou no yuumei na ku "shizukasa ya iwa ni shimiiru semi no koe" wa, oto to seijaku no gyakusetsu o migoto ni toraete iru.',
            cn: '松尾芭蕉的名句"幽静啊—渗入岩石的蝉声"，绝妙地捕捉了声音与寂静的悖论。',
          },
          {
            jp: '<ruby>音<rt>おと</rt></ruby>がうるさいからこそ、<ruby>逆<rt>ぎゃく</rt></ruby>に<ruby>静<rt>しず</rt></ruby>けさを<ruby>感<rt>かん</rt></ruby>じる——これは<ruby>日本的<rt>にほんてき</rt></ruby>美意識<rt>びいしき</rt></ruby>の<ruby>典型<rt>てんけい</rt></ruby>である。',
            plain: 'おとがうるさいからこそ、ぎゃくにしずけさをかんじる——これはにほんてきびいしきのてんけいである。',
            romaji: 'oto ga urusai kara koso, gyaku ni shizukesa o kanjiru—kore wa nihon-teki biishiki no tenkei de aru.',
            cn: '正因为声音吵闹，反而感到寂静——这正是日本式美学意识的典型。',
          },
          {
            jp: '<ruby>秋<rt>あき</rt></ruby>は、<ruby>月<rt>つき</rt></ruby>を<ruby>愛<rt>め</rt></ruby>でる<ruby>季節<rt>きせつ</rt></ruby>である。',
            plain: 'あきは、つきをめでるきせつである。',
            romaji: 'aki wa, tsuki o mederu kisetsu de aru.',
            cn: '秋天，是赏月的季节。',
          },
          {
            jp: '<ruby>中秋<rt>ちゅうしゅう</rt></ruby>の<ruby>名月<rt>めいげつ</rt></ruby>は<ruby>古来<rt>こらい</rt></ruby>から<ruby>多<rt>おお</rt></ruby>くの<ruby>歌人<rt>かじん</rt></ruby>に<ruby>詠<rt>よ</rt></ruby>まれてきたわけだが、<ruby>月<rt>つき</rt></ruby>そのものを<ruby>美<rt>うつく</rt></ruby>しいと<ruby>感<rt>かん</rt></ruby>じる<ruby>感性<rt>かんせい</rt></ruby>は<ruby>日本<rt>にほん</rt></ruby>に<ruby>限<rt>かぎ</rt></ruby>らない。',
            plain: 'ちゅうしゅうのめいげつはこらいからおおくのかじんによまれてきたわけだが、つきそのものをうつくしいとかんじるかんせいはにほんにかぎらない。',
            romaji: 'chuushuu no meigetsu wa korai kara ooku no kajin ni yomarete kita wake da ga, tsuki sono mono o utsukushii to kanjiru kansei wa Nihon ni kagiranai.',
            cn: '中秋名月自古便被许多歌人吟咏，然而觉得月亮本身美丽的感性，并不限于日本。',
          },
          {
            jp: 'むしろ、<ruby>月<rt>つき</rt></ruby>に<ruby>映<rt>うつ</rt></ruby>る<ruby>影<rt>かげ</rt></ruby>や、<ruby>欠<rt>か</rt></ruby>けゆく<ruby>形<rt>かたち</rt></ruby>に<ruby>季節<rt>きせつ</rt></ruby>の<ruby>移<rt>うつ</rt></ruby>ろいを<ruby>重<rt>かさ</rt></ruby>ねる<ruby>視点<rt>してん</rt></ruby>こそが、<ruby>日本的<rt>にほんてき</rt></ruby>な<ruby>独自<rt>どくじ</rt></ruby>性<rt>せい</rt>と<ruby>言<rt>い</rt></ruby>えよう。',
            plain: 'むしろ、つきにうつるかげや、かけゆくかたちにきせつのうつろいをかさねるしてんこそが、にほんてきなどくじせいといえよう。',
            romaji: 'mushiro, tsuki ni utsuru kage ya, kakeyuku katachi ni kisetsu no utsuroi o kasaneru shiten koso ga, nihon-teki na dokujisei to ieyou.',
            cn: '不如说，将月中投影、月之残形与季节流转相重叠的视点，方可谓日本式的独特性。',
          },
          {
            jp: '<ruby>冬<rt>ふゆ</rt></ruby>の<ruby>雪<rt>ゆき</rt></ruby>は、<ruby>静寂<rt>せいじゃく</rt></ruby>を<ruby>運<rt>はこ</rt></ruby>んでくる。',
            plain: 'ふゆのゆきは、せいじゃくをはこんでくる。',
            romaji: 'fuyu no yuki wa, seijaku o hakonde kuru.',
            cn: '冬天的雪，带来寂静。',
          },
          {
            jp: '<ruby>音<rt>おと</rt></ruby>を<ruby>吸<rt>す</rt></ruby>い<ruby>込<rt>こ</rt></ruby>む<ruby>白<rt>しろ</rt></ruby>い<ruby>世界<rt>せかい</rt></ruby>では、<ruby>普段<rt>ふだん</rt></ruby><ruby>気<rt>き</rt></ruby>づかぬ<ruby>細<rt>こま</rt></ruby>やかな<ruby>感覚<rt>かんかく</rt></ruby>がよみがえってくる。',
            plain: 'おとをすいこむしろいせかいでは、ふだんきづかぬこまやかなかんかくがよみがえってくる。',
            romaji: 'oto o suikomu shiroi sekai de wa, fudan kizukanu komayaka na kankaku ga yomigaette kuru.',
            cn: '在吸收声音的白色世界里，平日不曾察觉的细腻感觉会苏醒。',
          },
          {
            jp: '<ruby>四季<rt>しき</rt></ruby>を<ruby>大切<rt>たいせつ</rt></ruby>にする<ruby>感性<rt>かんせい</rt></ruby>は、<ruby>豊<rt>ゆた</rt></ruby>かではあるものの、<ruby>近年<rt>きんねん</rt></ruby>の<ruby>気候<rt>きこう</rt></ruby><ruby>変動<rt>へんどう</rt></ruby>によって<ruby>失<rt>うしな</rt></ruby>われつつあるとも<ruby>言<rt>い</rt></ruby>われている。',
            plain: 'しきをたいせつにするかんせいは、ゆたかではあるものの、きんねんのきこうへんどうによってうしなわれつつあるともいわれている。',
            romaji: 'shiki o taisetsu ni suru kansei wa, yutaka de wa aru mono no, kinnen no kikou hendou ni yotte ushinaware tsutsu aru to mo iwarete iru.',
            cn: '珍视四季的感性虽然丰富，但据说也正因近年的气候变动而逐渐被失去。',
          },
          {
            jp: 'だからこそ、<ruby>古典<rt>こてん</rt></ruby><ruby>文学<rt>ぶんがく</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に<ruby>残<rt>のこ</rt></ruby>る<ruby>四季<rt>しき</rt></ruby>の<ruby>言葉<rt>ことば</rt></ruby>を<ruby>読<rt>よ</rt></ruby>み<ruby>返<rt>かえ</rt></ruby>すことには、<ruby>大<rt>おお</rt></ruby>きな<ruby>意義<rt>いぎ</rt></ruby>がある。',
            plain: 'だからこそ、こてんぶんがくのなかにのこるしきのことばをよみかえすことには、おおきないぎがある。',
            romaji: 'dakara koso, koten bungaku no naka ni nokoru shiki no kotoba o yomikaesu koto ni wa, ookina igi ga aru.',
            cn: '正因如此，重读古典文学中遗存的四季之语，便有了重大意义。',
          },
          {
            jp: '<ruby>言葉<rt>ことば</rt></ruby>は<ruby>記憶<rt>きおく</rt></ruby>の<ruby>器<rt>うつわ</rt></ruby>であり、<ruby>未来<rt>みらい</rt></ruby>へ<ruby>季節<rt>きせつ</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>える<ruby>橋<rt>はし</rt></ruby>でもあるのだ。',
            plain: 'ことばはきおくのうつわであり、みらいへきせつをつたえるはしでもあるのだ。',
            romaji: 'kotoba wa kioku no utsuwa de ari, mirai e kisetsu o tsutaeru hashi de mo aru no da.',
            cn: '语言是记忆的容器，也是把季节传向未来的桥梁。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '茶道の精神',
          romaji: 'sadou no seishin',
          cn: '茶道精神',
        },
        sentences: [
          {
            jp: '<ruby>茶道<rt>さどう</rt></ruby>は<ruby>単<rt>たん</rt></ruby>に<ruby>茶<rt>ちゃ</rt></ruby>を<ruby>飲<rt>の</rt></ruby>む<ruby>芸事<rt>げいごと</rt></ruby>ではない。',
            plain: 'さどうはたんにちゃをのむげいごとではない。',
            romaji: 'sadou wa tan ni cha o nomu geigoto de wa nai.',
            cn: '茶道并非仅仅是饮茶的技艺。',
          },
          {
            jp: 'それは「<ruby>和敬清寂<rt>わけいせいじゃく</rt></ruby>」という<ruby>四<rt>よっ</rt></ruby>つの<ruby>理念<rt>りねん</rt></ruby>に<ruby>支<rt>ささ</rt></ruby>えられた<ruby>総合<rt>そうごう</rt></ruby><ruby>芸術<rt>げいじゅつ</rt></ruby>である。',
            plain: 'それは「わけいせいじゃく」というよっつのりねんにささえられたそうごうげいじゅつである。',
            romaji: 'sore wa "wa-kei-sei-jaku" to iu yottsu no rinen ni sasaerareta sougou geijutsu de aru.',
            cn: '它是受"和敬清寂"四理念支撑的综合艺术。',
          },
          {
            jp: '「<ruby>和<rt>わ</rt></ruby>」とは<ruby>調和<rt>ちょうわ</rt></ruby>、「<ruby>敬<rt>けい</rt></ruby>」とは<ruby>敬意<rt>けいい</rt></ruby>、「<ruby>清<rt>せい</rt></ruby>」とは<ruby>清<rt>きよ</rt></ruby>らかさ、「<ruby>寂<rt>じゃく</rt></ruby>」とは<ruby>静<rt>しず</rt></ruby>けさである。',
            plain: '「わ」とはちょうわ、「けい」とはけいい、「せい」とはきよらかさ、「じゃく」とはしずけさである。',
            romaji: '"wa" to wa chouwa, "kei" to wa keii, "sei" to wa kiyorakasa, "jaku" to wa shizukesa de aru.',
            cn: '"和"为调和，"敬"为敬意，"清"为清净，"寂"为寂静。',
          },
          {
            jp: '<ruby>客<rt>きゃく</rt></ruby>と<ruby>主人<rt>しゅじん</rt></ruby>は<ruby>互<rt>たが</rt></ruby>いに<ruby>敬<rt>うやま</rt></ruby>い、<ruby>一<rt>いっ</rt></ruby><ruby>椀<rt>わん</rt></ruby>の<ruby>茶<rt>ちゃ</rt></ruby>を<ruby>分<rt>わ</rt></ruby>かち<ruby>合<rt>あ</rt></ruby>う。',
            plain: 'きゃくとしゅじんはたがいにうやまい、いちわんのちゃをわかちあう。',
            romaji: 'kyaku to shujin wa tagai ni uyamai, ichiwan no cha o wakachi-au.',
            cn: '客与主人互相尊敬，分享一碗茶。',
          },
          {
            jp: '<ruby>茶室<rt>ちゃしつ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>るに<ruby>際<rt>さい</rt></ruby>しては、<ruby>身分<rt>みぶん</rt></ruby>や<ruby>地位<rt>ちい</rt></ruby>は<ruby>問<rt>と</rt></ruby>われない。',
            plain: 'ちゃしつにはいるにさいしては、みぶんやちいはとわれない。',
            romaji: 'chashitsu ni hairu ni saishite wa, mibun ya chii wa towarenai.',
            cn: '在进入茶室之时，身份地位不被过问。',
          },
          {
            jp: '<ruby>狭<rt>せま</rt></ruby>い<ruby>入口<rt>いりぐち</rt></ruby>「<ruby>躙口<rt>にじりぐち</rt></ruby>」を<ruby>通<rt>とお</rt></ruby>るからこそ、<ruby>誰<rt>だれ</rt></ruby>もが<ruby>頭<rt>あたま</rt></ruby>を<ruby>下<rt>さ</rt></ruby>げて<ruby>入<rt>はい</rt></ruby>るわけだ。',
            plain: 'せまいいりぐち「にじりぐち」をとおるからこそ、だれもがあたまをさげてはいるわけだ。',
            romaji: 'semai iriguchi "nijiriguchi" o tooru kara koso, dare mo ga atama o sagete hairu wake da.',
            cn: '正因为要通过狭小的入口"躙口"，所以谁都得低头进入。',
          },
          {
            jp: '<ruby>一期一会<rt>いちごいちえ</rt></ruby>——この<ruby>言葉<rt>ことば</rt></ruby>は<ruby>茶道<rt>さどう</rt></ruby>の<ruby>核心<rt>かくしん</rt></ruby>を<ruby>表<rt>あらわ</rt></ruby>している。',
            plain: 'いちごいちえ——このことばはさどうのかくしんをあらわしている。',
            romaji: 'ichigo-ichie—kono kotoba wa sadou no kakushin o arawashite iru.',
            cn: '一期一会——这一词语表达了茶道的核心。',
          },
          {
            jp: '<ruby>同<rt>おな</rt></ruby>じ<ruby>瞬間<rt>しゅんかん</rt></ruby>は<ruby>二度<rt>にど</rt></ruby>と<ruby>訪<rt>おとず</rt></ruby>れない<ruby>以上<rt>いじょう</rt></ruby>、<ruby>今<rt>いま</rt></ruby>この<ruby>一<rt>いち</rt></ruby><ruby>椀<rt>わん</rt></ruby>を<ruby>大切<rt>たいせつ</rt></ruby>にしなければならない。',
            plain: 'おなじしゅんかんはにどとおとずれないいじょう、いまこのいちわんをたいせつにしなければならない。',
            romaji: 'onaji shunkan wa nido to otozurenai ijou, ima kono ichiwan o taisetsu ni shinakereba naranai.',
            cn: '相同的瞬间不会再次到来，因此必须珍惜眼前这一碗茶。',
          },
          {
            jp: 'この<ruby>精神<rt>せいしん</rt></ruby>こそが、<ruby>現代<rt>げんだい</rt></ruby>の<ruby>慌<rt>あわ</rt></ruby>ただしい<ruby>生活<rt>せいかつ</rt></ruby>に<ruby>欠<rt>か</rt></ruby>けがちなものではないだろうか。',
            plain: 'このせいしんこそが、げんだいのあわただしいせいかつにかけがちなものではないだろうか。',
            romaji: 'kono seishin koso ga, gendai no awatadashii seikatsu ni kakegachi na mono de wa nai darou ka.',
            cn: '这种精神，不正是现代忙碌生活中所欠缺的吗？',
          },
          {
            jp: '<ruby>茶<rt>ちゃ</rt></ruby>を<ruby>点<rt>た</rt></ruby>てるその<ruby>所作<rt>しょさ</rt></ruby>の<ruby>一<rt>ひと</rt></ruby>つ<ruby>一<rt>ひと</rt></ruby>つに、<ruby>千年<rt>せんねん</rt></ruby>の<ruby>美学<rt>びがく</rt></ruby>が<ruby>息<rt>いき</rt></ruby>づいているのである。',
            plain: 'ちゃをたてるそのしょさのひとつひとつに、せんねんのびがくがいきづいているのである。',
            romaji: 'cha o tateru sono shosa no hitotsu hitotsu ni, sennen no bigaku ga ikizuite iru no de aru.',
            cn: '点茶的每一个动作里，都跳动着千年的美学。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '文化研究者と編集者が日本美学について語り合う。',
        cn: '文化研究者与编辑就日本美学进行讨论。',
      },
      lines: [
        {
          speaker: '研究者',
          jp: '<ruby>日本<rt>にほん</rt></ruby>の<ruby>美意識<rt>びいしき</rt></ruby>の<ruby>核心<rt>かくしん</rt></ruby>は、<ruby>不完全<rt>ふかんぜん</rt></ruby>さを<ruby>愛<rt>あい</rt></ruby>する<ruby>姿勢<rt>しせい</rt></ruby>にあると<ruby>言<rt>い</rt></ruby>えるでしょう。',
          plain: 'にほんのびいしきのかくしんは、ふかんぜんさをあいするしせいにあるといえるでしょう。',
          romaji: 'Nihon no biishiki no kakushin wa, fukanzen-sa o ai suru shisei ni aru to ieru deshou.',
          cn: '日本美学意识的核心，可说是在于热爱不完全的姿态。',
        },
        {
          speaker: '編集者',
          jp: 'いわゆる「わびさび」ですね。<ruby>欧米<rt>おうべい</rt></ruby>の<ruby>完璧<rt>かんぺき</rt></ruby>な<ruby>美<rt>び</rt></ruby>とは<ruby>対照的<rt>たいしょうてき</rt></ruby>です。',
          plain: 'いわゆる「わびさび」ですね。おうべいのかんぺきなびとはたいしょうてきです。',
          romaji: 'iwayuru "wabi-sabi" desu ne. Oubei no kanpeki na bi to wa taishouteki desu.',
          cn: '就是所谓"侘寂"吧。与欧美的完美之美形成对照。',
        },
        {
          speaker: '研究者',
          jp: 'ええ。<ruby>欠<rt>か</rt></ruby>けたものこそ<ruby>美<rt>うつく</rt></ruby>しいという<ruby>発想<rt>はっそう</rt></ruby>は、<ruby>仏教<rt>ぶっきょう</rt></ruby>の<ruby>無常観<rt>むじょうかん</rt></ruby>と<ruby>深<rt>ふか</rt></ruby>く<ruby>結<rt>むす</rt></ruby>びついています。',
          plain: 'ええ。かけたものこそうつくしいというはっそうは、ぶっきょうのむじょうかんとふかくむすびついています。',
          romaji: 'ee. kaketa mono koso utsukushii to iu hassou wa, bukkyou no mujoukan to fukaku musubitsuite imasu.',
          cn: '是的。"残缺方为美"的发想，与佛教的无常观深深关联。',
        },
        {
          speaker: '編集者',
          jp: '<ruby>桜<rt>さくら</rt></ruby>が<ruby>散<rt>ち</rt></ruby>るからこそ<ruby>美<rt>うつく</rt></ruby>しい——という<ruby>感覚<rt>かんかく</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じわけですね。',
          plain: 'さくらがちるからこそうつくしい——というかんかくとおなじわけですね。',
          romaji: 'sakura ga chiru kara koso utsukushii—to iu kankaku to onaji wake desu ne.',
          cn: '与"樱花因凋落才美丽"的感觉是一样的吧。',
        },
        {
          speaker: '研究者',
          jp: 'その<ruby>通<rt>とお</rt></ruby>りです。<ruby>儚<rt>はかな</rt></ruby>さを<ruby>受<rt>う</rt></ruby>け<ruby>入<rt>い</rt></ruby>れることが、かえって<ruby>瞬間<rt>しゅんかん</rt></ruby>を<ruby>濃<rt>こ</rt></ruby>くするのです。',
          plain: 'そのとおりです。はかなさをうけいれることが、かえってしゅんかんをこくするのです。',
          romaji: 'sono toori desu. hakanasa o ukeireru koto ga, kaette shunkan o koku suru no desu.',
          cn: '正是如此。接受短暂，反而使瞬间变得浓烈。',
        },
        {
          speaker: '編集者',
          jp: '<ruby>現代<rt>げんだい</rt></ruby>のせわしない<ruby>社会<rt>しゃかい</rt></ruby>にこそ、こうした<ruby>視点<rt>してん</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>かもしれませんね。',
          plain: 'げんだいのせわしないしゃかいにこそ、こうしたしてんがひつようかもしれませんね。',
          romaji: 'gendai no sewashinai shakai ni koso, koushita shiten ga hitsuyou ka mo shiremasen ne.',
          cn: '正是在繁忙的现代社会，或许更需要这种视点。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>日本人<rt>にほんじん</rt></ruby>にとって<ruby>四季<rt>しき</rt></ruby>とは<ruby>何<rt>なに</rt></ruby>か。',
          plain: 'にほんじんにとってしきとはなにか。',
          romaji: 'nihonjin ni totte shiki to wa nani ka.',
          cn: '对日本人而言四季是什么？',
        },
        a: {
          jp: '<ruby>感性<rt>かんせい</rt></ruby>を<ruby>磨<rt>みが</rt></ruby>き、<ruby>言葉<rt>ことば</rt></ruby>を<ruby>豊<rt>ゆた</rt></ruby>かにする、<ruby>文化<rt>ぶんか</rt></ruby>の<ruby>根<rt>ね</rt></ruby>そのものである。',
          plain: 'かんせいをみがき、ことばをゆたかにする、ぶんかのねそのものである。',
          romaji: 'kansei o migaki, kotoba o yutaka ni suru, bunka no ne sono mono de aru.',
          cn: '是磨砺感性、丰富语言的文化之根本身。',
        },
      },
      {
        q: {
          jp: '<ruby>桜<rt>さくら</rt></ruby>の<ruby>美<rt>うつく</rt></ruby>しさの<ruby>本質<rt>ほんしつ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>か。',
          plain: 'さくらのうつくしさのほんしつはなにか。',
          romaji: 'sakura no utsukushisa no honshitsu wa nani ka.',
          cn: '樱花美的本质是什么？',
        },
        a: {
          jp: 'わずか<ruby>一週間<rt>いっしゅうかん</rt></ruby>ほどで<ruby>散<rt>ち</rt></ruby>ってしまう<ruby>儚<rt>はかな</rt></ruby>さこそが、<ruby>本質<rt>ほんしつ</rt></ruby>である。',
          plain: 'わずかいっしゅうかんほどでちってしまうはかなさこそが、ほんしつである。',
          romaji: 'wazuka isshuukan hodo de chitte shimau hakanasa koso ga, honshitsu de aru.',
          cn: '仅仅一周左右便会凋落的短暂本身，便是本质。',
        },
      },
      {
        q: {
          jp: '<ruby>茶道<rt>さどう</rt></ruby>の<ruby>四<rt>よっ</rt></ruby>つの<ruby>理念<rt>りねん</rt></ruby>とは<ruby>何<rt>なに</rt></ruby>か。',
          plain: 'さどうのよっつのりねんとはなにか。',
          romaji: 'sadou no yottsu no rinen to wa nani ka.',
          cn: '茶道的四个理念是什么？',
        },
        a: {
          jp: '<ruby>和<rt>わ</rt></ruby>・<ruby>敬<rt>けい</rt></ruby>・<ruby>清<rt>せい</rt></ruby>・<ruby>寂<rt>じゃく</rt></ruby>の<ruby>四<rt>よっ</rt></ruby>つである。',
          plain: 'わ・けい・せい・じゃくのよっつである。',
          romaji: 'wa, kei, sei, jaku no yottsu de aru.',
          cn: '和、敬、清、寂这四个。',
        },
      },
      {
        q: {
          jp: '「<ruby>一期一会<rt>いちごいちえ</rt></ruby>」とはどのような<ruby>意味<rt>いみ</rt></ruby>か。',
          plain: '「いちごいちえ」とはどのよういみか。',
          romaji: '"ichigo-ichie" to wa dono you na imi ka.',
          cn: '"一期一会"是什么意思？',
        },
        a: {
          jp: '<ruby>同<rt>おな</rt></ruby>じ<ruby>瞬間<rt>しゅんかん</rt></ruby>は<ruby>二度<rt>にど</rt></ruby>と<ruby>訪<rt>おとず</rt></ruby>れないので、<ruby>今<rt>いま</rt></ruby>この<ruby>瞬間<rt>しゅんかん</rt></ruby>を<ruby>大切<rt>たいせつ</rt></ruby>にすべきだという<ruby>意味<rt>いみ</rt></ruby>である。',
          plain: 'おなじしゅんかんはにどとおとずれないので、いまこのしゅんかんをたいせつにすべきだといういみである。',
          romaji: 'onaji shunkan wa nido to otozurenai node, ima kono shunkan o taisetsu ni subeki da to iu imi de aru.',
          cn: '相同的瞬间不会再次到来，因而应当珍惜眼前这一瞬。',
        },
      },
    ],
    vocabulary: [
      { jp: '感性', kana: 'かんせい', romaji: 'kansei', meaning: '感性', pos: '名詞' },
      { jp: '磨く', kana: 'みがく', romaji: 'migaku', meaning: '磨砺', pos: '動詞I' },
      { jp: '根', kana: 'ね', romaji: 'ne', meaning: '根本', pos: '名詞' },
      { jp: '満開', kana: 'まんかい', romaji: 'mankai', meaning: '满开', pos: '名詞' },
      { jp: '散る', kana: 'ちる', romaji: 'chiru', meaning: '凋落', pos: '動詞I' },
      { jp: '儚さ', kana: 'はかなさ', romaji: 'hakanasa', meaning: '短暂', pos: '名詞' },
      { jp: '本質', kana: 'ほんしつ', romaji: 'honshitsu', meaning: '本质', pos: '名詞' },
      { jp: '古来', kana: 'こらい', romaji: 'korai', meaning: '自古以来', pos: '副詞' },
      { jp: '歌人', kana: 'かじん', romaji: 'kajin', meaning: '歌人', pos: '名詞' },
      { jp: '無常', kana: 'むじょう', romaji: 'mujou', meaning: '无常', pos: '名詞' },
      { jp: '蝉', kana: 'せみ', romaji: 'semi', meaning: '蝉', pos: '名詞' },
      { jp: '森', kana: 'もり', romaji: 'mori', meaning: '森林', pos: '名詞' },
      { jp: '満たす', kana: 'みたす', romaji: 'mitasu', meaning: '充盈', pos: '動詞I' },
      { jp: '静寂', kana: 'せいじゃく', romaji: 'seijaku', meaning: '寂静', pos: '名詞' },
      { jp: '逆説', kana: 'ぎゃくせつ', romaji: 'gyakusetsu', meaning: '悖论', pos: '名詞' },
      { jp: '美意識', kana: 'びいしき', romaji: 'biishiki', meaning: '美学意识', pos: '名詞' },
      { jp: '愛でる', kana: 'めでる', romaji: 'mederu', meaning: '欣赏', pos: '動詞II' },
      { jp: '名月', kana: 'めいげつ', romaji: 'meigetsu', meaning: '名月', pos: '名詞' },
      { jp: '詠む', kana: 'よむ', romaji: 'yomu', meaning: '吟咏', pos: '動詞I' },
      { jp: '映る', kana: 'うつる', romaji: 'utsuru', meaning: '映照', pos: '動詞I' },
      { jp: '欠ける', kana: 'かける', romaji: 'kakeru', meaning: '残缺', pos: '動詞II' },
      { jp: '移ろい', kana: 'うつろい', romaji: 'utsuroi', meaning: '流转', pos: '名詞' },
      { jp: '視点', kana: 'してん', romaji: 'shiten', meaning: '视点', pos: '名詞' },
      { jp: '独自性', kana: 'どくじせい', romaji: 'dokujisei', meaning: '独特性', pos: '名詞' },
      { jp: '吸い込む', kana: 'すいこむ', romaji: 'suikomu', meaning: '吸入', pos: '動詞I' },
      { jp: '細やか', kana: 'こまやか', romaji: 'komayaka', meaning: '细腻', pos: 'な形容詞' },
      { jp: 'よみがえる', kana: 'よみがえる', romaji: 'yomigaeru', meaning: '苏醒', pos: '動詞I' },
      { jp: '気候変動', kana: 'きこうへんどう', romaji: 'kikou-hendou', meaning: '气候变化', pos: '名詞' },
      { jp: '古典', kana: 'こてん', romaji: 'koten', meaning: '古典', pos: '名詞' },
      { jp: '意義', kana: 'いぎ', romaji: 'igi', meaning: '意义', pos: '名詞' },
      { jp: '器', kana: 'うつわ', romaji: 'utsuwa', meaning: '容器', pos: '名詞' },
      { jp: '茶道', kana: 'さどう', romaji: 'sadou', meaning: '茶道', pos: '名詞' },
      { jp: '理念', kana: 'りねん', romaji: 'rinen', meaning: '理念', pos: '名詞' },
      { jp: '一期一会', kana: 'いちごいちえ', romaji: 'ichigo-ichie', meaning: '一期一会', pos: '慣用句' },
      { jp: '所作', kana: 'しょさ', romaji: 'shosa', meaning: '动作', pos: '名詞' },
      { jp: '美学', kana: 'びがく', romaji: 'bigaku', meaning: '美学', pos: '名詞' },
    ],
    grammar: [
      {
        pattern: '〜にもかかわらず',
        name: '尽管...',
        explain: '表示"尽管...还..."，前后逆接。比「〜のに」语气更书面、更正式。前接动词普通形、形容词、名词均可。常用于评论、新闻报道，强调与预期相反的事实。',
        examples: [
          {
            jp: '<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っているにもかかわらず、<ruby>試合<rt>しあい</rt></ruby>は<ruby>続<rt>つづ</rt></ruby>けられた。',
            plain: 'あめがふっているにもかかわらず、しあいはつづけられた。',
            cn: '尽管在下雨，比赛仍继续进行。',
          },
        ],
      },
      {
        pattern: '〜こそ／〜からこそ',
        name: '正因为...才...',
        explain: '「〜こそ」单独使用强调"正是..."。「〜からこそ」表"正因为...所以更..."，比单纯的「〜から」语气强烈得多，强调因果关系的合理性、必然性。常用于反驳或加强语气。',
        examples: [
          {
            jp: '<ruby>苦<rt>くる</rt></ruby>しいときだからこそ、<ruby>友人<rt>ゆうじん</rt></ruby>の<ruby>大切<rt>たいせつ</rt></ruby>さがわかる。',
            plain: 'くるしいときだからこそ、ゆうじんのたいせつさがわかる。',
            cn: '正是痛苦的时候，才能明白友人的可贵。',
          },
        ],
      },
      {
        pattern: '〜わけだ',
        name: '难怪...／因此...',
        explain: '表示"难怪..."、"也就是说..."，用于根据已知信息得出合乎逻辑的结论。「〜わけではない」（并非...）和「〜わけにはいかない」（不能...）是常见变形。书面体常用「〜わけである」。',
        examples: [
          {
            jp: '<ruby>長年<rt>ながねん</rt></ruby>の<ruby>努力<rt>どりょく</rt></ruby>があったから、<ruby>成功<rt>せいこう</rt></ruby>したわけだ。',
            plain: 'ながねんのどりょくがあったから、せいこうしたわけだ。',
            cn: '正因有多年的努力，才会成功。',
          },
        ],
      },
      {
        pattern: '〜つつある',
        name: '正在逐渐...',
        explain: '表示"正在逐渐...的过程中"，强调缓慢的、持续的变化。比「〜ている」更书面，常用于描述社会、自然、状态的渐进变化。前接动词ます形词干。',
        examples: [
          {
            jp: '<ruby>地球<rt>ちきゅう</rt></ruby>の<ruby>環境<rt>かんきょう</rt></ruby>は<ruby>悪化<rt>あっか</rt></ruby>しつつある。',
            plain: 'ちきゅうのかんきょうはあっかしつつある。',
            cn: '地球的环境正在逐渐恶化。',
          },
        ],
      },
      {
        pattern: '〜以上',
        name: '既然...',
        explain: '表示"既然...就...", 前项是已成立的事实，后项是基于该事实的合理结论或义务。书面色彩强，比「〜からには」语感更正式。常出现在论说文中。',
        examples: [
          {
            jp: '<ruby>約束<rt>やくそく</rt></ruby>した<ruby>以上<rt>いじょう</rt></ruby>、<ruby>必<rt>かなら</rt></ruby>ず<ruby>守<rt>まも</rt></ruby>らなければならない。',
            plain: 'やくそくしたいじょう、かならずまもらなければならない。',
            cn: '既然约定了，就必须遵守。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 49 課 — 議論文の構造
  // ========================================================
  {
    id: 49,
    level: 'N2',
    title: {
      jp: '議論文の構造',
      romaji: 'gironbun no kouzou',
      cn: '议论文的结构',
      en: 'Structure of Argumentative Writing',
    },
    goals: [
      '掌握议论文的「論点・論拠・例・結論」结构',
      '熟练运用「例えば／つまり／要するに／結論として」等接续表达',
      '能写一篇结构清晰的短篇议论文',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: 'AIと人間の未来',
          romaji: 'AI to ningen no mirai',
          cn: 'AI 与人类的未来',
        },
        sentences: [
          {
            jp: '<ruby>近年<rt>きんねん</rt></ruby>、<ruby>人工<rt>じんこう</rt></ruby><ruby>知能<rt>ちのう</rt></ruby>(AI)の<ruby>急速<rt>きゅうそく</rt></ruby>な<ruby>発展<rt>はってん</rt></ruby>は、<ruby>社会<rt>しゃかい</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きな<ruby>議論<rt>ぎろん</rt></ruby>を<ruby>呼<rt>よ</rt></ruby>び<ruby>起<rt>お</rt></ruby>こしている。',
            plain: 'きんねん、じんこうちのう(AI)のきゅうそくなはってんは、しゃかいにおおきなぎろんをよびおこしている。',
            romaji: 'kinnen, jinkou chinou (AI) no kyuusoku na hatten wa, shakai ni ookina giron o yobiokoshite iru.',
            cn: '近年来，人工智能（AI）的迅猛发展，在社会引发了重大的讨论。',
          },
          {
            jp: '<ruby>本稿<rt>ほんこう</rt></ruby>では、AIが<ruby>人間<rt>にんげん</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>を<ruby>奪<rt>うば</rt></ruby>うのではなく、むしろ<ruby>協働<rt>きょうどう</rt></ruby>のパートナーとなりうるという<ruby>立場<rt>たちば</rt></ruby>を<ruby>主張<rt>しゅちょう</rt></ruby>したい。',
            plain: 'ほんこうでは、AIがにんげんのしごとをうばうのではなく、むしろきょうどうのパートナーとなりうるというたちばをしゅちょうしたい。',
            romaji: 'honkou de wa, AI ga ningen no shigoto o ubau no de wa naku, mushiro kyoudou no paatonaa to nariuru to iu tachiba o shuchou shitai.',
            cn: '本文想主张这样的立场：AI 并非夺走人类的工作，反而能够成为协作的伙伴。',
          },
          {
            jp: 'まず、AIが<ruby>得意<rt>とくい</rt></ruby>とする<ruby>分野<rt>ぶんや</rt></ruby>と、<ruby>人間<rt>にんげん</rt></ruby>が<ruby>得意<rt>とくい</rt></ruby>とする<ruby>分野<rt>ぶんや</rt></ruby>は<ruby>本質的<rt>ほんしつてき</rt></ruby>に<ruby>異<rt>こと</rt></ruby>なる。',
            plain: 'まず、AIがとくいとするぶんやと、にんげんがとくいとするぶんやはほんしつてきにことなる。',
            romaji: 'mazu, AI ga tokui to suru bunya to, ningen ga tokui to suru bunya wa honshitsuteki ni kotonaru.',
            cn: '首先，AI 擅长的领域与人类擅长的领域，本质上是不同的。',
          },
          {
            jp: '<ruby>例<rt>たと</rt></ruby>えば、<ruby>大量<rt>たいりょう</rt></ruby>のデータ<ruby>処理<rt>しょり</rt></ruby>や<ruby>反復<rt>はんぷく</rt></ruby><ruby>計算<rt>けいさん</rt></ruby>はAIの<ruby>得意<rt>とくい</rt></ruby><ruby>分野<rt>ぶんや</rt></ruby>であり、<ruby>創造性<rt>そうぞうせい</rt></ruby>や<ruby>共感<rt>きょうかん</rt></ruby>は<ruby>人間<rt>にんげん</rt></ruby>の<ruby>独壇場<rt>どくだんじょう</rt></ruby>である。',
            plain: 'たとえば、たいりょうのデータしょりやはんぷくけいさんはAIのとくいぶんやであり、そうぞうせいやきょうかんはにんげんのどくだんじょうである。',
            romaji: 'tatoeba, tairyou no deeta shori ya hanpuku keisan wa AI no tokui bunya de ari, souzousei ya kyoukan wa ningen no dokudanjou de aru.',
            cn: '例如，大量数据处理与重复计算是 AI 的擅长领域，而创造性与共情则是人类独占的舞台。',
          },
          {
            jp: 'つまり、<ruby>両者<rt>りょうしゃ</rt></ruby>が<ruby>競合<rt>きょうごう</rt></ruby>するのではなく、<ruby>補完<rt>ほかん</rt></ruby>し<ruby>合<rt>あ</rt></ruby>う<ruby>関係<rt>かんけい</rt></ruby>にあるということだ。',
            plain: 'つまり、りょうしゃがきょうごうするのではなく、ほかんしあうかんけいにあるということだ。',
            romaji: 'tsumari, ryousha ga kyougou suru no de wa naku, hokan shi-au kankei ni aru to iu koto da.',
            cn: '也就是说，两者并非竞争关系，而是互补关系。',
          },
          {
            jp: '<ruby>次<rt>つぎ</rt></ruby>に、<ruby>歴史的<rt>れきしてき</rt></ruby>に<ruby>見<rt>み</rt></ruby>ても、<ruby>新<rt>あたら</rt></ruby>しい<ruby>技術<rt>ぎじゅつ</rt></ruby>は<ruby>常<rt>つね</rt></ruby>に<ruby>新<rt>あたら</rt></ruby>しい<ruby>仕事<rt>しごと</rt></ruby>を<ruby>生<rt>う</rt></ruby>み<ruby>出<rt>だ</rt></ruby>してきた。',
            plain: 'つぎに、れきしてきにみても、あたらしいぎじゅつはつねにあたらしいしごとをうみだしてきた。',
            romaji: 'tsugi ni, rekishi-teki ni mite mo, atarashii gijutsu wa tsune ni atarashii shigoto o umidashite kita.',
            cn: '其次，从历史上看，新技术总是不断创造出新的职业。',
          },
          {
            jp: '<ruby>産業<rt>さんぎょう</rt></ruby><ruby>革命<rt>かくめい</rt></ruby>の<ruby>際<rt>さい</rt></ruby>にも、<ruby>機械<rt>きかい</rt></ruby>が<ruby>仕事<rt>しごと</rt></ruby>を<ruby>奪<rt>うば</rt></ruby>うと<ruby>恐<rt>おそ</rt></ruby>れられたが、<ruby>結果<rt>けっか</rt></ruby>として<ruby>多<rt>おお</rt></ruby>くの<ruby>新<rt>あたら</rt></ruby>しい<ruby>職業<rt>しょくぎょう</rt></ruby>が<ruby>生<rt>う</rt></ruby>まれたのである。',
            plain: 'さんぎょうかくめいのさいにも、きかいがしごとをうばうとおそれられたが、けっかとしておおくのあたらしいしょくぎょうがうまれたのである。',
            romaji: 'sangyou kakumei no sai ni mo, kikai ga shigoto o ubau to osorerareta ga, kekka to shite ooku no atarashii shokugyou ga umareta no de aru.',
            cn: '产业革命之际，人们也曾担忧机器会夺走工作，但结果却诞生了许多新的职业。',
          },
          {
            jp: '<ruby>言<rt>い</rt></ruby>い<ruby>換<rt>か</rt></ruby>えれば、<ruby>技術<rt>ぎじゅつ</rt></ruby>の<ruby>進歩<rt>しんぽ</rt></ruby>は<ruby>労働<rt>ろうどう</rt></ruby>の<ruby>形<rt>かたち</rt></ruby>を<ruby>変<rt>か</rt></ruby>えるが、<ruby>労働<rt>ろうどう</rt></ruby>そのものを<ruby>消滅<rt>しょうめつ</rt></ruby>させることはない。',
            plain: 'いいかえれば、ぎじゅつのしんぽはろうどうのかたちをかえるが、ろうどうそのものをしょうめつさせることはない。',
            romaji: 'iikaereba, gijutsu no shinpo wa roudou no katachi o kaeru ga, roudou sono mono o shoumetsu saseru koto wa nai.',
            cn: '换言之，技术进步会改变劳动的形态，却不会让劳动本身消亡。',
          },
          {
            jp: 'もちろん、<ruby>移行期<rt>いこうき</rt></ruby>には<ruby>痛<rt>いた</rt></ruby>みが<ruby>伴<rt>ともな</rt></ruby>うことは<ruby>否<rt>いな</rt></ruby>めない。',
            plain: 'もちろん、いこうきにはいたみがともなうことはいなめない。',
            romaji: 'mochiron, ikouki ni wa itami ga tomonau koto wa inamenai.',
            cn: '当然，过渡期伴随着阵痛是不可否认的。',
          },
          {
            jp: 'だからこそ、<ruby>政府<rt>せいふ</rt></ruby>や<ruby>企業<rt>きぎょう</rt></ruby>には、<ruby>労働者<rt>ろうどうしゃ</rt></ruby>の<ruby>再<rt>さい</rt></ruby><ruby>教育<rt>きょういく</rt></ruby>と<ruby>社会<rt>しゃかい</rt></ruby><ruby>保障<rt>ほしょう</rt></ruby>の<ruby>充実<rt>じゅうじつ</rt></ruby>が<ruby>求<rt>もと</rt></ruby>められる。',
            plain: 'だからこそ、せいふやきぎょうには、ろうどうしゃのさいきょういくとしゃかいほしょうのじゅうじつがもとめられる。',
            romaji: 'da kara koso, seifu ya kigyou ni wa, roudousha no saikyouiku to shakai hoshou no juujitsu ga motomerareru.',
            cn: '正因如此，政府与企业被要求充实劳动者的再教育和社会保障。',
          },
          {
            jp: '<ruby>要<rt>よう</rt></ruby>するに、AIを<ruby>恐<rt>おそ</rt></ruby>れる<ruby>必要<rt>ひつよう</rt></ruby>はないが、<ruby>無策<rt>むさく</rt></ruby>であってはならないということである。',
            plain: 'ようするに、AIをおそれるひつようはないが、むさくであってはならないということである。',
            romaji: 'you suru ni, AI o osoreru hitsuyou wa nai ga, musaku de atte wa naranai to iu koto de aru.',
            cn: '总之，无需畏惧 AI，但也不能毫无对策。',
          },
          {
            jp: '<ruby>結論<rt>けつろん</rt></ruby>として、AI<ruby>時代<rt>じだい</rt></ruby>を<ruby>生<rt>い</rt></ruby>き<ruby>抜<rt>ぬ</rt></ruby>くためには、<ruby>機械<rt>きかい</rt></ruby>と<ruby>人間<rt>にんげん</rt></ruby>の<ruby>違<rt>ちが</rt></ruby>いを<ruby>正<rt>ただ</rt></ruby>しく<ruby>理解<rt>りかい</rt></ruby>し、<ruby>共存<rt>きょうぞん</rt></ruby>する<ruby>道<rt>みち</rt></ruby>を<ruby>探<rt>さぐ</rt></ruby>ることが<ruby>不可欠<rt>ふかけつ</rt></ruby>である。',
            plain: 'けつろんとして、AIじだいをいきぬくためには、きかいとにんげんのちがいをただしくりかいし、きょうぞんするみちをさぐることがふかけつである。',
            romaji: 'ketsuron to shite, AI jidai o ikinuku tame ni wa, kikai to ningen no chigai o tadashiku rikai shi, kyouzon suru michi o saguru koto ga fukaketsu de aru.',
            cn: '作为结论，要在 AI 时代存活下来，正确理解机器与人类的差异、寻求共存之路是不可或缺的。',
          },
          {
            jp: '<ruby>未来<rt>みらい</rt></ruby>は<ruby>恐<rt>おそ</rt></ruby>れるべき<ruby>対象<rt>たいしょう</rt></ruby>ではなく、<ruby>共<rt>とも</rt></ruby>に<ruby>築<rt>きず</rt></ruby>くべき<ruby>世界<rt>せかい</rt></ruby>なのである。',
            plain: 'みらいはおそれるべきたいしょうではなく、ともにきずくべきせかいなのである。',
            romaji: 'mirai wa osoreru beki taishou de wa naku, tomo ni kizuku beki sekai na no de aru.',
            cn: '未来并非应当畏惧的对象，而是应当共同构筑的世界。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '読書の意義',
          romaji: 'dokusho no igi',
          cn: '阅读的意义',
        },
        sentences: [
          {
            jp: 'デジタル<ruby>時代<rt>じだい</rt></ruby>において、<ruby>読書<rt>どくしょ</rt></ruby>の<ruby>意義<rt>いぎ</rt></ruby>はますます<ruby>大<rt>おお</rt></ruby>きいと<ruby>言<rt>い</rt></ruby>えよう。',
            plain: 'デジタルじだいにおいて、どくしょのいぎはますますおおきいといえよう。',
            romaji: 'dejitaru jidai ni oite, dokusho no igi wa masumasu ookii to ieyou.',
            cn: '在数字时代，阅读的意义可谓愈发重大。',
          },
          {
            jp: '<ruby>第一<rt>だいいち</rt></ruby>に、<ruby>読書<rt>どくしょ</rt></ruby>は<ruby>深<rt>ふか</rt></ruby>い<ruby>思考<rt>しこう</rt></ruby>を<ruby>育<rt>はぐく</rt></ruby>む。',
            plain: 'だいいちに、どくしょはふかいしこうをはぐくむ。',
            romaji: 'daiichi ni, dokusho wa fukai shikou o hagukumu.',
            cn: '第一，阅读培养深度思考。',
          },
          {
            jp: 'ネット<ruby>記事<rt>きじ</rt></ruby>が<ruby>断片的<rt>だんぺんてき</rt></ruby>な<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>提供<rt>ていきょう</rt></ruby>するのに<ruby>対<rt>たい</rt></ruby>し、<ruby>本<rt>ほん</rt></ruby>は<ruby>体系的<rt>たいけいてき</rt></ruby>な<ruby>知識<rt>ちしき</rt></ruby>と<ruby>論理<rt>ろんり</rt></ruby>を<ruby>提示<rt>ていじ</rt></ruby>する。',
            plain: 'ネットきじがだんぺんてきなじょうほうをていきょうするのにたいし、ほんはたいけいてきなちしきとろんりをていじする。',
            romaji: 'netto kiji ga danpenteki na jouhou o teikyou suru no ni taishi, hon wa taikei-teki na chishiki to ronri o teiji suru.',
            cn: '相对于网络文章提供碎片信息，书籍则呈现体系化的知识与逻辑。',
          },
          {
            jp: '<ruby>第二<rt>だいに</rt></ruby>に、<ruby>読書<rt>どくしょ</rt></ruby>は<ruby>共感力<rt>きょうかんりょく</rt></ruby>を<ruby>養<rt>やしな</rt></ruby>う。',
            plain: 'だいにに、どくしょはきょうかんりょくをやしなう。',
            romaji: 'daini ni, dokusho wa kyoukan-ryoku o yashinau.',
            cn: '第二，阅读培养共情能力。',
          },
          {
            jp: '<ruby>例<rt>たと</rt></ruby>えば、<ruby>小説<rt>しょうせつ</rt></ruby>を<ruby>読<rt>よ</rt></ruby>むことで、<ruby>登場<rt>とうじょう</rt></ruby><ruby>人物<rt>じんぶつ</rt></ruby>の<ruby>感情<rt>かんじょう</rt></ruby>を<ruby>追<rt>お</rt></ruby><ruby>体験<rt>たいけん</rt></ruby>することができる。',
            plain: 'たとえば、しょうせつをよむことで、とうじょうじんぶつのかんじょうをおたいけんすることができる。',
            romaji: 'tatoeba, shousetsu o yomu koto de, toujou jinbutsu no kanjou o oitaiken suru koto ga dekiru.',
            cn: '例如，通过阅读小说，可以追体验登场人物的情感。',
          },
          {
            jp: 'これは<ruby>他者<rt>たしゃ</rt></ruby>を<ruby>理解<rt>りかい</rt></ruby>する<ruby>力<rt>ちから</rt></ruby>そのものに<ruby>他<rt>ほか</rt></ruby>ならない。',
            plain: 'これはたしゃをりかいするちからそのものにほかならない。',
            romaji: 'kore wa tasha o rikai suru chikara sono mono ni hokanaranai.',
            cn: '这无非就是理解他者的能力本身。',
          },
          {
            jp: '<ruby>第三<rt>だいさん</rt></ruby>に、<ruby>読書<rt>どくしょ</rt></ruby>は<ruby>孤独<rt>こどく</rt></ruby>な<ruby>時間<rt>じかん</rt></ruby>を<ruby>豊<rt>ゆた</rt></ruby>かにする。',
            plain: 'だいさんに、どくしょはこどくなじかんをゆたかにする。',
            romaji: 'daisan ni, dokusho wa kodoku na jikan o yutaka ni suru.',
            cn: '第三，阅读丰富孤独的时间。',
          },
          {
            jp: '<ruby>本<rt>ほん</rt></ruby>を<ruby>開<rt>ひら</rt></ruby>けば、<ruby>時代<rt>じだい</rt></ruby>を<ruby>越<rt>こ</rt></ruby>えた<ruby>賢人<rt>けんじん</rt></ruby>たちと<ruby>対話<rt>たいわ</rt></ruby>することができる。',
            plain: 'ほんをひらけば、じだいをこえたけんじんたちとたいわすることができる。',
            romaji: 'hon o hirakeba, jidai o koeta kenjin-tachi to taiwa suru koto ga dekiru.',
            cn: '翻开书本，便可与跨越时代的贤人对话。',
          },
          {
            jp: '<ruby>結論<rt>けつろん</rt></ruby>として、<ruby>読書<rt>どくしょ</rt></ruby>はもはや<ruby>趣味<rt>しゅみ</rt></ruby>ではなく、<ruby>現代<rt>げんだい</rt></ruby><ruby>人<rt>じん</rt></ruby>に<ruby>必要<rt>ひつよう</rt></ruby>不可欠<ruby>ふかけつ</rt></ruby>な<ruby>営<rt>いとな</rt></ruby>みであると<ruby>言<rt>い</rt></ruby>えよう。',
            plain: 'けつろんとして、どくしょはもはやしゅみではなく、げんだいじんにひつようふかけつないとなみであるといえよう。',
            romaji: 'ketsuron to shite, dokusho wa mohaya shumi de wa naku, gendaijin ni hitsuyou fukaketsu na itonami de aru to ieyou.',
            cn: '作为结论，阅读已不再是兴趣，而可以说是现代人不可或缺的活动。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '大学のディベート授業で、学生二人がAIをめぐって議論する。',
        cn: '大学的辩论课上，两位学生就 AI 展开讨论。',
      },
      lines: [
        {
          speaker: '学生A',
          jp: '<ruby>私<rt>わたし</rt></ruby>は、AIの<ruby>発展<rt>はってん</rt></ruby>が<ruby>多<rt>おお</rt></ruby>くの<ruby>仕事<rt>しごと</rt></ruby>を<ruby>奪<rt>うば</rt></ruby>うと<ruby>主張<rt>しゅちょう</rt></ruby>します。',
          plain: 'わたしは、AIのはってんがおおくのしごとをうばうとしゅちょうします。',
          romaji: 'watashi wa, AI no hatten ga ooku no shigoto o ubau to shuchou shimasu.',
          cn: '我主张，AI 的发展会夺走许多工作。',
        },
        {
          speaker: '学生B',
          jp: 'その<ruby>根拠<rt>こんきょ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>でしょうか。',
          plain: 'そのこんきょはなんでしょうか。',
          romaji: 'sono konkyo wa nan deshou ka.',
          cn: '其根据是什么？',
        },
        {
          speaker: '学生A',
          jp: '<ruby>例<rt>たと</rt></ruby>えば、<ruby>運転手<rt>うんてんしゅ</rt></ruby>や<ruby>翻訳者<rt>ほんやくしゃ</rt></ruby>などは、すでにAIに<ruby>置<rt>お</rt></ruby>き<ruby>換<rt>か</rt></ruby>えられつつあります。',
          plain: 'たとえば、うんてんしゅやほんやくしゃなどは、すでにAIにおきかえられつつあります。',
          romaji: 'tatoeba, untenshu ya honyakusha nado wa, sude ni AI ni okikaerare tsutsu arimasu.',
          cn: '例如司机和翻译，已经正在被 AI 取代。',
        },
        {
          speaker: '学生B',
          jp: 'しかし、<ruby>歴史的<rt>れきしてき</rt></ruby>に<ruby>見<rt>み</rt></ruby>れば、<ruby>新<rt>あたら</rt></ruby>しい<ruby>技術<rt>ぎじゅつ</rt></ruby>は<ruby>常<rt>つね</rt></ruby>に<ruby>新<rt>あたら</rt></ruby>しい<ruby>仕事<rt>しごと</rt></ruby>を<ruby>生<rt>う</rt></ruby>んできたのではないでしょうか。',
          plain: 'しかし、れきしてきにみれば、あたらしいぎじゅつはつねにあたらしいしごとをうんできたのではないでしょうか。',
          romaji: 'shikashi, rekishi-teki ni mireba, atarashii gijutsu wa tsune ni atarashii shigoto o unde kita no de wa nai deshou ka.',
          cn: '但是，从历史上看，新技术不是总在创造新工作吗？',
        },
        {
          speaker: '学生A',
          jp: '<ruby>確<rt>たし</rt></ruby>かにそうですが、AIの<ruby>進化<rt>しんか</rt></ruby><ruby>速度<rt>そくど</rt></ruby>はこれまでとは<ruby>比較<rt>ひかく</rt></ruby>にならないほど<ruby>速<rt>はや</rt></ruby>いのです。',
          plain: 'たしかにそうですが、AIのしんかそくどはこれまでとはひかくにならないほどはやいのです。',
          romaji: 'tashika ni sou desu ga, AI no shinka sokudo wa kore made to wa hikaku ni naranai hodo hayai no desu.',
          cn: '的确如此，但 AI 的进化速度比以往要快得无法比较。',
        },
        {
          speaker: '学生B',
          jp: '<ruby>要<rt>よう</rt></ruby>するに、<ruby>速度<rt>そくど</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>であって、<ruby>方向性<rt>ほうこうせい</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>ではないということですね。',
          plain: 'ようするに、そくどのもんだいであって、ほうこうせいのもんだいではないということですね。',
          romaji: 'you suru ni, sokudo no mondai de atte, houkousei no mondai de wa nai to iu koto desu ne.',
          cn: '总之，是速度的问题，而非方向性的问题，对吧？',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>本稿<rt>ほんこう</rt></ruby>の<ruby>主張<rt>しゅちょう</rt></ruby>は<ruby>何<rt>なに</rt></ruby>か。',
          plain: 'ほんこうのしゅちょうはなにか。',
          romaji: 'honkou no shuchou wa nani ka.',
          cn: '本文的主张是什么？',
        },
        a: {
          jp: 'AIが<ruby>人間<rt>にんげん</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>を<ruby>奪<rt>うば</rt></ruby>うのではなく、<ruby>協働<rt>きょうどう</rt></ruby>のパートナーになりうるという<ruby>主張<rt>しゅちょう</rt></ruby>である。',
          plain: 'AIがにんげんのしごとをうばうのではなく、きょうどうのパートナーになりうるというしゅちょうである。',
          romaji: 'AI ga ningen no shigoto o ubau no de wa naku, kyoudou no paatonaa ni nariuru to iu shuchou de aru.',
          cn: 'AI 不是夺走人类的工作，而是能够成为协作伙伴。',
        },
      },
      {
        q: {
          jp: '<ruby>筆者<rt>ひっしゃ</rt></ruby>はAIと<ruby>人間<rt>にんげん</rt></ruby>の<ruby>関係<rt>かんけい</rt></ruby>をどう<ruby>捉<rt>とら</rt></ruby>えているか。',
          plain: 'ひっしゃはAIとにんげんのかんけいをどうとらえているか。',
          romaji: 'hissha wa AI to ningen no kankei o dou toraete iru ka.',
          cn: '作者如何看待 AI 与人类的关系？',
        },
        a: {
          jp: '<ruby>競合<rt>きょうごう</rt></ruby>ではなく、<ruby>補完<rt>ほかん</rt></ruby>し<ruby>合<rt>あ</rt></ruby>う<ruby>関係<rt>かんけい</rt></ruby>として<ruby>捉<rt>とら</rt></ruby>えている。',
          plain: 'きょうごうではなく、ほかんしあうかんけいとしてとらえている。',
          romaji: 'kyougou de wa naku, hokan shi-au kankei to shite toraete iru.',
          cn: '视为不是竞争而是互补的关系。',
        },
      },
      {
        q: {
          jp: '<ruby>読書<rt>どくしょ</rt></ruby>の<ruby>三<rt>みっ</rt></ruby>つの<ruby>意義<rt>いぎ</rt></ruby>とは<ruby>何<rt>なに</rt></ruby>か。',
          plain: 'どくしょのみっついぎとはなにか。',
          romaji: 'dokusho no mittsu no igi to wa nani ka.',
          cn: '阅读的三个意义是什么？',
        },
        a: {
          jp: '<ruby>深<rt>ふか</rt></ruby>い<ruby>思考<rt>しこう</rt></ruby>を<ruby>育<rt>はぐく</rt></ruby>む、<ruby>共感力<rt>きょうかんりょく</rt></ruby>を<ruby>養<rt>やしな</rt></ruby>う、<ruby>孤独<rt>こどく</rt></ruby>な<ruby>時間<rt>じかん</rt></ruby>を<ruby>豊<rt>ゆた</rt></ruby>かにする、の<ruby>三<rt>みっ</rt></ruby>つである。',
          plain: 'ふかいしこうをはぐくむ、きょうかんりょくをやしなう、こどくなじかんをゆたかにする、のみっつである。',
          romaji: 'fukai shikou o hagukumu, kyoukan-ryoku o yashinau, kodoku na jikan o yutaka ni suru, no mittsu de aru.',
          cn: '培养深度思考、培养共情能力、丰富孤独时光，这三点。',
        },
      },
      {
        q: {
          jp: '<ruby>議論文<rt>ぎろんぶん</rt></ruby>の<ruby>典型的<rt>てんけいてき</rt></ruby>な<ruby>構造<rt>こうぞう</rt></ruby>は<ruby>何<rt>なに</rt></ruby>か。',
          plain: 'ぎろんぶんのてんけいてきなこうぞうはなにか。',
          romaji: 'gironbun no tenkei-teki na kouzou wa nani ka.',
          cn: '议论文的典型结构是什么？',
        },
        a: {
          jp: '<ruby>論点<rt>ろんてん</rt></ruby>→<ruby>論拠<rt>ろんきょ</rt></ruby>→<ruby>例<rt>れい</rt></ruby>→<ruby>結論<rt>けつろん</rt></ruby>という<ruby>構造<rt>こうぞう</rt></ruby>である。',
          plain: 'ろんてん→ろんきょ→れい→けつろんというこうぞうである。',
          romaji: 'ronten -> ronkyo -> rei -> ketsuron to iu kouzou de aru.',
          cn: '是"论点→论据→举例→结论"的结构。',
        },
      },
    ],
    vocabulary: [
      { jp: '人工知能', kana: 'じんこうちのう', romaji: 'jinkou-chinou', meaning: '人工智能', pos: '名詞' },
      { jp: '急速', kana: 'きゅうそく', romaji: 'kyuusoku', meaning: '迅速', pos: 'な形容詞' },
      { jp: '議論', kana: 'ぎろん', romaji: 'giron', meaning: '议论', pos: '名詞' },
      { jp: '本稿', kana: 'ほんこう', romaji: 'honkou', meaning: '本文', pos: '名詞' },
      { jp: '奪う', kana: 'うばう', romaji: 'ubau', meaning: '夺走', pos: '動詞I' },
      { jp: '協働', kana: 'きょうどう', romaji: 'kyoudou', meaning: '协作', pos: '名詞' },
      { jp: '主張', kana: 'しゅちょう', romaji: 'shuchou', meaning: '主张', pos: '名詞' },
      { jp: '分野', kana: 'ぶんや', romaji: 'bunya', meaning: '领域', pos: '名詞' },
      { jp: '異なる', kana: 'ことなる', romaji: 'kotonaru', meaning: '不同', pos: '動詞I' },
      { jp: '反復', kana: 'はんぷく', romaji: 'hanpuku', meaning: '反复', pos: '名詞' },
      { jp: '創造性', kana: 'そうぞうせい', romaji: 'souzousei', meaning: '创造性', pos: '名詞' },
      { jp: '共感', kana: 'きょうかん', romaji: 'kyoukan', meaning: '共情', pos: '名詞' },
      { jp: '独壇場', kana: 'どくだんじょう', romaji: 'dokudanjou', meaning: '独占舞台', pos: '名詞' },
      { jp: '競合', kana: 'きょうごう', romaji: 'kyougou', meaning: '竞争', pos: '名詞' },
      { jp: '補完', kana: 'ほかん', romaji: 'hokan', meaning: '互补', pos: '名詞' },
      { jp: '産業革命', kana: 'さんぎょうかくめい', romaji: 'sangyou-kakumei', meaning: '产业革命', pos: '名詞' },
      { jp: '恐れる', kana: 'おそれる', romaji: 'osoreru', meaning: '畏惧', pos: '動詞II' },
      { jp: '労働', kana: 'ろうどう', romaji: 'roudou', meaning: '劳动', pos: '名詞' },
      { jp: '消滅', kana: 'しょうめつ', romaji: 'shoumetsu', meaning: '消亡', pos: '名詞' },
      { jp: '移行期', kana: 'いこうき', romaji: 'ikouki', meaning: '过渡期', pos: '名詞' },
      { jp: '伴う', kana: 'ともなう', romaji: 'tomonau', meaning: '伴随', pos: '動詞I' },
      { jp: '否めない', kana: 'いなめない', romaji: 'inamenai', meaning: '不可否认', pos: '慣用句' },
      { jp: '社会保障', kana: 'しゃかいほしょう', romaji: 'shakai-hoshou', meaning: '社会保障', pos: '名詞' },
      { jp: '充実', kana: 'じゅうじつ', romaji: 'juujitsu', meaning: '充实', pos: '名詞' },
      { jp: '無策', kana: 'むさく', romaji: 'musaku', meaning: '无对策', pos: '名詞' },
      { jp: '共存', kana: 'きょうぞん', romaji: 'kyouzon', meaning: '共存', pos: '名詞' },
      { jp: '築く', kana: 'きずく', romaji: 'kizuku', meaning: '构筑', pos: '動詞I' },
      { jp: '断片的', kana: 'だんぺんてき', romaji: 'danpenteki', meaning: '碎片的', pos: 'な形容詞' },
      { jp: '体系的', kana: 'たいけいてき', romaji: 'taikeiteki', meaning: '体系化的', pos: 'な形容詞' },
      { jp: '提示', kana: 'ていじ', romaji: 'teiji', meaning: '呈现', pos: '名詞' },
      { jp: '養う', kana: 'やしなう', romaji: 'yashinau', meaning: '培养', pos: '動詞I' },
      { jp: '追体験', kana: 'おたいけん', romaji: 'oitaiken', meaning: '追体验', pos: '名詞' },
      { jp: '孤独', kana: 'こどく', romaji: 'kodoku', meaning: '孤独', pos: 'な形容詞' },
      { jp: '賢人', kana: 'けんじん', romaji: 'kenjin', meaning: '贤人', pos: '名詞' },
      { jp: '根拠', kana: 'こんきょ', romaji: 'konkyo', meaning: '根据', pos: '名詞' },
      { jp: '置き換える', kana: 'おきかえる', romaji: 'okikaeru', meaning: '替换', pos: '動詞II' },
    ],
    grammar: [
      {
        pattern: '例えば〜／たとえば〜',
        name: '举例（"例如"）',
        explain: '议论文中引出具体例子的接续词，作用是把抽象论述落到具体实例上。书面文章常写为汉字「例えば」，更正式。可以独立成句首，后接完整句子。',
        examples: [
          {
            jp: '<ruby>例<rt>たと</rt></ruby>えば、<ruby>運転手<rt>うんてんしゅ</rt></ruby>や<ruby>翻訳者<rt>ほんやくしゃ</rt></ruby>がそうである。',
            plain: 'たとえば、うんてんしゅやほんやくしゃがそうである。',
            cn: '例如，司机和翻译就是这样。',
          },
        ],
      },
      {
        pattern: 'つまり〜',
        name: '换言之／也就是说',
        explain: '把刚刚说的内容用更简洁、更核心的表达再说一次。议论文中作为"提炼论点"的标志词。与「すなわち」类似但更口语化，「すなわち」更书面。',
        examples: [
          {
            jp: 'つまり、<ruby>両者<rt>りょうしゃ</rt></ruby>は<ruby>補完<rt>ほかん</rt></ruby>し<ruby>合<rt>あ</rt></ruby>う<ruby>関係<rt>かんけい</rt></ruby>にある。',
            plain: 'つまり、りょうしゃはほかんしあうかんけいにある。',
            cn: '也就是说，两者是互补的关系。',
          },
        ],
      },
      {
        pattern: '要するに〜',
        name: '总之／归根到底',
        explain: '把多个论点浓缩为一句话，用于全文或某一段的总结。比「つまり」语气更"抓重点"，强调"撇开细节看本质"。常出现在议论文倒数第二段、结论之前。',
        examples: [
          {
            jp: '<ruby>要<rt>よう</rt></ruby>するに、<ruby>恐<rt>おそ</rt></ruby>れる<ruby>必要<rt>ひつよう</rt></ruby>はないということだ。',
            plain: 'ようするに、おそれるひつようはないということだ。',
            cn: '总之，无需畏惧。',
          },
        ],
      },
      {
        pattern: '言い換えれば〜',
        name: '换言之',
        explain: '用不同方式重新表述前面的内容。比「つまり」更强调"换一个角度看"。书面文章常用，议论文中用于补充说明或换角度阐述。',
        examples: [
          {
            jp: '<ruby>言<rt>い</rt></ruby>い<ruby>換<rt>か</rt></ruby>えれば、<ruby>形<rt>かたち</rt></ruby>は<ruby>変<rt>か</rt></ruby>わるが<ruby>本質<rt>ほんしつ</rt></ruby>は<ruby>残<rt>のこ</rt></ruby>る。',
            plain: 'いいかえれば、かたちはかわるがほんしつはのこる。',
            cn: '换言之，形态会改变，本质会留下。',
          },
        ],
      },
      {
        pattern: '結論として〜',
        name: '作为结论',
        explain: '议论文最后一段的标志词，引出全文的最终结论。「結論として」更正式，「結論として言えば」更慎重。后续句多以「である／〜と言えよう」结尾，符合议论文文风。',
        examples: [
          {
            jp: '<ruby>結論<rt>けつろん</rt></ruby>として、<ruby>共存<rt>きょうぞん</rt></ruby>の<ruby>道<rt>みち</rt></ruby>を<ruby>探<rt>さぐ</rt></ruby>るべきである。',
            plain: 'けつろんとして、きょうぞんのみちをさぐるべきである。',
            cn: '作为结论，应当探索共存之路。',
          },
        ],
      },
      {
        pattern: '〜うる／〜得る',
        name: '可能...',
        explain: '表示"可能...". 接动词ます形词干，写作「うる」或「える」，读作「うる」或「える」。常用于书面议论："考えうる"（可以想象）、"なりうる"（能够成为）。否定形「〜えない」（不可能）。比「〜できる」更书面。',
        examples: [
          {
            jp: 'AIは<ruby>協働<rt>きょうどう</rt></ruby>のパートナーとなりうる。',
            plain: 'AIはきょうどうのパートナーとなりうる。',
            cn: 'AI 能够成为协作的伙伴。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 50 課 — 私の日本語学習の道（最終課）
  // ========================================================
  {
    id: 50,
    level: 'N2',
    title: {
      jp: '私の日本語学習の道',
      romaji: 'watashi no nihongo gakushuu no michi',
      cn: '我的日语学习之路',
      en: 'My Path of Japanese Learning',
    },
    goals: [
      '完成 50 课的学习，回顾并整合所学语法',
      '能阅读和写作 N2 水平的散文与议论文',
      '对自己的日语学习历程拥有自信',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '私の日本語学習の道',
          romaji: 'watashi no nihongo gakushuu no michi',
          cn: '我的日语学习之路',
        },
        sentences: [
          {
            jp: '<ruby>振<rt>ふ</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>れば、<ruby>初<rt>はじ</rt></ruby>めて<ruby>日本語<rt>にほんご</rt></ruby>に<ruby>触<rt>ふ</rt></ruby>れたあの<ruby>日<rt>ひ</rt></ruby>から、<ruby>長<rt>なが</rt></ruby>い<ruby>道<rt>みち</rt></ruby>を<ruby>歩<rt>ある</rt></ruby>いてきたものだ。',
            plain: 'ふりかえれば、はじめてにほんごにふれたあのひから、ながいみちをあるいてきたものだ。',
            romaji: 'furikaereba, hajimete nihongo ni fureta ano hi kara, nagai michi o aruite kita mono da.',
            cn: '回头看，自从第一次接触日语那一天起，已经走过了漫长的道路。',
          },
          {
            jp: '<ruby>最初<rt>さいしょ</rt></ruby>の<ruby>一文<rt>いちぶん</rt></ruby>は「<ruby>私<rt>わたし</rt></ruby>は<ruby>田中<rt>たなか</rt></ruby>です」だった。',
            plain: 'さいしょのいちぶんは「わたしはたなかです」だった。',
            romaji: 'saisho no ichibun wa "watashi wa Tanaka desu" datta.',
            cn: '最初的一句话是"我是田中"。',
          },
          {
            jp: 'たった<ruby>七<rt>なな</rt></ruby><ruby>文字<rt>もじ</rt></ruby>のあの<ruby>句<rt>く</rt></ruby>に、<ruby>当時<rt>とうじ</rt></ruby>の<ruby>私<rt>わたし</rt></ruby>はどれほど<ruby>苦労<rt>くろう</rt></ruby>したことか。',
            plain: 'たったななもじのあのくに、とうじのわたしはどれほどくろうしたことか。',
            romaji: 'tatta nana-moji no ano ku ni, touji no watashi wa dorehodo kurou shita koto ka.',
            cn: '仅仅七个字的那句话，当时的我吃了多少苦头啊。',
          },
          {
            jp: 'ひらがなを<ruby>覚<rt>おぼ</rt></ruby>えるだけでも<ruby>大変<rt>たいへん</rt></ruby>で、<ruby>毎日<rt>まいにち</rt></ruby><ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>を<ruby>何度<rt>なんど</rt></ruby>も<ruby>書<rt>か</rt></ruby>いたものだ。',
            plain: 'ひらがなをおぼえるだけでもたいへんで、まいにちおなじもじをなんどもかいたものだ。',
            romaji: 'hiragana o oboeru dake de mo taihen de, mainichi onaji moji o nan-do mo kaita mono da.',
            cn: '光是记假名就很费劲，每天反复写同样的字。',
          },
          {
            jp: 'やがて、<ruby>動詞<rt>どうし</rt></ruby>の<ruby>活用<rt>かつよう</rt></ruby>に<ruby>悩<rt>なや</rt></ruby>み、て<ruby>形<rt>けい</rt></ruby>に<ruby>苦<rt>くる</rt></ruby>しみ、<ruby>敬語<rt>けいご</rt></ruby>に<ruby>戸惑<rt>とまど</rt></ruby>った<ruby>日々<rt>ひび</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>いた。',
            plain: 'やがて、どうしのかつようになやみ、てけいにくるしみ、けいごにとまどったひびがつづいた。',
            romaji: 'yagate, doushi no katsuyou ni nayami, te-kei ni kurushimi, keigo ni tomadotta hibi ga tsuzuita.',
            cn: '不久，为动词活用而烦恼、被て形折磨、被敬语困惑的日子持续着。',
          },
          {
            jp: '<ruby>三<rt>さん</rt></ruby><ruby>度<rt>ど</rt></ruby>も<ruby>挫<rt>くじ</rt></ruby>けそうになったが、その<ruby>都度<rt>つど</rt></ruby>、<ruby>言葉<rt>ことば</rt></ruby>の<ruby>奥<rt>おく</rt></ruby>にある<ruby>文化<rt>ぶんか</rt></ruby>の<ruby>魅力<rt>みりょく</rt></ruby>に<ruby>引<rt>ひ</rt></ruby>き<ruby>戻<rt>もど</rt></ruby>された。',
            plain: 'さんども くじけそうになったが、そのつど、ことばのおくにあるぶんかのみりょくにひきもどされた。',
            romaji: 'san-do mo kujikesou ni natta ga, sono tsudo, kotoba no oku ni aru bunka no miryoku ni hikimodosareta.',
            cn: '虽然三度几乎要放弃，但每一次，都被语言深处的文化魅力拉了回来。',
          },
          {
            jp: 'N4 の<ruby>頃<rt>ころ</rt></ruby>、<ruby>初<rt>はじ</rt></ruby>めて<ruby>日本語<rt>にほんご</rt></ruby>で<ruby>道<rt>みち</rt></ruby>を<ruby>聞<rt>き</rt></ruby>くことができた<ruby>瞬間<rt>しゅんかん</rt></ruby>の<ruby>喜<rt>よろこ</rt></ruby>びは、<ruby>今<rt>いま</rt></ruby>も<ruby>忘<rt>わす</rt></ruby>れがたい。',
            plain: 'N4のころ、はじめてにほんごでみちをきくことができたしゅんかんのよろこびは、いまもわすれがたい。',
            romaji: 'N4 no koro, hajimete nihongo de michi o kiku koto ga dekita shunkan no yorokobi wa, ima mo wasuregatai.',
            cn: '在 N4 阶段，第一次能用日语问路的那一刻的喜悦，至今难以忘怀。',
          },
          {
            jp: 'N3 になると、<ruby>新聞<rt>しんぶん</rt></ruby>記事<rt>きじ</rt></ruby>を<ruby>辞書<rt>じしょ</rt></ruby>なしで<ruby>読<rt>よ</rt></ruby>めるようになり、<ruby>世界<rt>せかい</rt></ruby>が<ruby>一気<rt>いっき</rt></ruby>に<ruby>広<rt>ひろ</rt></ruby>がった。',
            plain: 'N3になると、しんぶんきじをじしょなしでよめるようになり、せかいがいっきにひろがった。',
            romaji: 'N3 ni naru to, shinbun kiji o jisho nashi de yomeru you ni nari, sekai ga ikki ni hirogatta.',
            cn: '到了 N3，能够无需查词典阅读新闻报道了，世界一下子拓宽了。',
          },
          {
            jp: 'そして<ruby>今<rt>いま</rt></ruby>、N2 まで<ruby>進<rt>すす</rt></ruby>み、こうして<ruby>書<rt>か</rt></ruby>き<ruby>言葉<rt>ことば</rt></ruby>で<ruby>自分<rt>じぶん</rt></ruby>の<ruby>歩<rt>あゆ</rt></ruby>みを<ruby>振<rt>ふ</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>ることができている。',
            plain: 'そしていま、N2まですすみ、こうしてかきことばでじぶんのあゆみをふりかえることができている。',
            romaji: 'soshite ima, N2 made susumi, kou shite kakikotoba de jibun no ayumi o furikaeru koto ga dekite iru.',
            cn: '而如今，已进至 N2，可以这样以书面语回顾自己的旅程。',
          },
          {
            jp: '<ruby>四季<rt>しき</rt></ruby>の<ruby>美<rt>うつく</rt></ruby>しさを<ruby>感<rt>かん</rt></ruby>じる<ruby>感性<rt>かんせい</rt></ruby>、<ruby>俳句<rt>はいく</rt></ruby>の<ruby>静寂<rt>せいじゃく</rt></ruby>を<ruby>味<rt>あじ</rt></ruby>わう<ruby>耳<rt>みみ</rt></ruby>、<ruby>議論文<rt>ぎろんぶん</rt></ruby>を<ruby>組<rt>く</rt></ruby>み<ruby>立<rt>た</rt></ruby>てる<ruby>力<rt>ちから</rt></ruby>——いずれも<ruby>努力<rt>どりょく</rt></ruby>の<ruby>賜物<rt>たまもの</rt></ruby>に<ruby>他<rt>ほか</rt></ruby>ならない。',
            plain: 'しきのうつくしさをかんじるかんせい、はいくのせいじゃくをあじわうみみ、ぎろんぶんをくみたてるちから——いずれもどりょくのたまものにほかならない。',
            romaji: 'shiki no utsukushisa o kanjiru kansei, haiku no seijaku o ajiwau mimi, gironbun o kumitateru chikara—izure mo doryoku no tamamono ni hokanaranai.',
            cn: '感受四季之美的感性、品味俳句寂静的耳朵、构筑议论文的能力——无非都是努力的成果。',
          },
          {
            jp: 'もちろん、<ruby>道<rt>みち</rt></ruby>はここで<ruby>終<rt>お</rt></ruby>わるわけではない。',
            plain: 'もちろん、みちはここでおわるわけではない。',
            romaji: 'mochiron, michi wa koko de owaru wake de wa nai.',
            cn: '当然，道路并不会在此终结。',
          },
          {
            jp: '<ruby>言葉<rt>ことば</rt></ruby>を<ruby>学<rt>まな</rt></ruby>ぶことは、<ruby>世界<rt>せかい</rt></ruby>を<ruby>新<rt>あたら</rt></ruby>しい<ruby>目<rt>め</rt></ruby>で<ruby>見<rt>み</rt></ruby><ruby>続<rt>つづ</rt></ruby>けるための、<ruby>終<rt>お</rt></ruby>わりなき<ruby>営<rt>いとな</rt></ruby>みである。',
            plain: 'ことばをまなぶことは、せかいをあたらしいめでみつづけるための、おわりなきいとなみである。',
            romaji: 'kotoba o manabu koto wa, sekai o atarashii me de mitsuzukeru tame no, owari naki itonami de aru.',
            cn: '学习语言，是为了用新的眼光持续看世界，是无尽的活动。',
          },
          {
            jp: '<ruby>学<rt>まな</rt></ruby>びは<ruby>苦<rt>くる</rt></ruby>しいものだが、<ruby>苦<rt>くる</rt></ruby>しさの<ruby>先<rt>さき</rt></ruby>にこそ<ruby>本当<rt>ほんとう</rt></ruby>の<ruby>喜<rt>よろこ</rt></ruby>びがあるものだ。',
            plain: 'まなびはくるしいものだが、くるしさのさきにこそほんとうのよろこびがあるものだ。',
            romaji: 'manabi wa kurushii mono da ga, kurushisa no saki ni koso hontou no yorokobi ga aru mono da.',
            cn: '学习是辛苦的，但唯有辛苦的尽头才有真正的喜悦。',
          },
          {
            jp: 'これまで<ruby>支<rt>ささ</rt></ruby>えてくれた<ruby>先生<rt>せんせい</rt></ruby>、<ruby>友人<rt>ゆうじん</rt></ruby>、そして<ruby>家族<rt>かぞく</rt></ruby>に、<ruby>心<rt>こころ</rt></ruby>からの<ruby>感謝<rt>かんしゃ</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えたい。',
            plain: 'これまでささえてくれたせんせい、ゆうじん、そしてかぞくに、こころからのかんしゃをつたえたい。',
            romaji: 'kore made sasaete kureta sensei, yuujin, soshite kazoku ni, kokoro kara no kansha o tsutaetai.',
            cn: '想向至今支持我的老师、朋友以及家人，致以由衷的感谢。',
          },
          {
            jp: 'これからも、<ruby>静<rt>しず</rt></ruby>かに、しかし<ruby>止<rt>と</rt></ruby>まることなく、<ruby>言葉<rt>ことば</rt></ruby>とともに<ruby>歩<rt>ある</rt></ruby>いていきたい。',
            plain: 'これからも、しずかに、しかしとまることなく、ことばとともにあるいていきたい。',
            romaji: 'kore kara mo, shizuka ni, shikashi tomaru koto naku, kotoba to tomo ni aruite ikitai.',
            cn: '今后也愿安静地、却不停步地，与语言一同前行。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: 'これからの目標',
          romaji: 'korekara no mokuhyou',
          cn: '今后的目标',
        },
        sentences: [
          {
            jp: 'N2 を<ruby>終<rt>お</rt></ruby>えた<ruby>今<rt>いま</rt></ruby>、<ruby>新<rt>あたら</rt></ruby>たな<ruby>目標<rt>もくひょう</rt></ruby>を<ruby>立<rt>た</rt></ruby>てたい。',
            plain: 'N2をおえたいま、あらたなもくひょうをたてたい。',
            romaji: 'N2 o oeta ima, arata na mokuhyou o tatetai.',
            cn: '完成 N2 之后，想立下新的目标。',
          },
          {
            jp: '<ruby>第一<rt>だいいち</rt></ruby>に、<ruby>原文<rt>げんぶん</rt></ruby>で<ruby>日本<rt>にほん</rt></ruby><ruby>文学<rt>ぶんがく</rt></ruby>を<ruby>読<rt>よ</rt></ruby>むことだ。',
            plain: 'だいいちに、げんぶんでにほんぶんがくをよむことだ。',
            romaji: 'daiichi ni, genbun de Nihon bungaku o yomu koto da.',
            cn: '第一，用原文阅读日本文学。',
          },
          {
            jp: '<ruby>夏目漱石<rt>なつめそうせき</rt></ruby>や<ruby>川端康成<rt>かわばたやすなり</rt></ruby>の<ruby>世界<rt>せかい</rt></ruby>を、<ruby>翻訳<rt>ほんやく</rt></ruby>を<ruby>通<rt>とお</rt></ruby>さずに<ruby>味<rt>あじ</rt></ruby>わいたい。',
            plain: 'なつめそうせきやかわばたやすなりのせかいを、ほんやくをとおさずにあじわいたい。',
            romaji: 'Natsume Souseki ya Kawabata Yasunari no sekai o, honyaku o toosazu ni ajiwaitai.',
            cn: '想不通过翻译，直接品味夏目漱石和川端康成的世界。',
          },
          {
            jp: '<ruby>第二<rt>だいに</rt></ruby>に、<ruby>日本人<rt>にほんじん</rt></ruby>と<ruby>深<rt>ふか</rt></ruby>い<ruby>議論<rt>ぎろん</rt></ruby>ができるようになりたい。',
            plain: 'だいにに、にほんじんとふかいぎろんができるようになりたい。',
            romaji: 'daini ni, nihonjin to fukai giron ga dekiru you ni naritai.',
            cn: '第二，希望能与日本人进行深入的讨论。',
          },
          {
            jp: '<ruby>表面<rt>ひょうめん</rt></ruby>的な<ruby>会話<rt>かいわ</rt></ruby>ではなく、<ruby>互<rt>たが</rt></ruby>いの<ruby>価値観<rt>かちかん</rt></ruby>を<ruby>交<rt>か</rt></ruby>わすような<ruby>対話<rt>たいわ</rt></ruby>を<ruby>目指<rt>めざ</rt></ruby>す。',
            plain: 'ひょうめんてきなかいわではなく、たがいのかちかんをかわすようなたいわをめざす。',
            romaji: 'hyoumen-teki na kaiwa de wa naku, tagai no kachikan o kawasu you na taiwa o mezasu.',
            cn: '不是表面的会话，而是以交换彼此价值观的对话为目标。',
          },
          {
            jp: '<ruby>第三<rt>だいさん</rt></ruby>に、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>言葉<rt>ことば</rt></ruby>で<ruby>日本語<rt>にほんご</rt></ruby>のエッセイを<ruby>書<rt>か</rt></ruby>き<ruby>続<rt>つづ</rt></ruby>けることだ。',
            plain: 'だいさんに、じぶんのことばでにほんごのエッセイをかきつづけることだ。',
            romaji: 'daisan ni, jibun no kotoba de nihongo no essei o kakitsuzukeru koto da.',
            cn: '第三，用自己的语言持续写日语随笔。',
          },
          {
            jp: '<ruby>書<rt>か</rt></ruby>くことは<ruby>考<rt>かんが</rt></ruby>えること、<ruby>考<rt>かんが</rt></ruby>えることは<ruby>生<rt>い</rt></ruby>きることに<ruby>他<rt>ほか</rt></ruby>ならない。',
            plain: 'かくことはかんがえること、かんがえることはいきることにほかならない。',
            romaji: 'kaku koto wa kangaeru koto, kangaeru koto wa ikiru koto ni hokanaranai.',
            cn: '写作即思考，思考无非即生活。',
          },
          {
            jp: 'こうした<ruby>目標<rt>もくひょう</rt></ruby>こそが、これからの<ruby>道<rt>みち</rt></ruby>を<ruby>照<rt>て</rt></ruby>らす<ruby>灯<rt>ひ</rt></ruby>となるであろう。',
            plain: 'こうしたもくひょうこそが、これからのみちをてらすひとなるであろう。',
            romaji: 'koushita mokuhyou koso ga, korekara no michi o terasu hi to naru de arou.',
            cn: '这些目标，恐怕将成为照亮今后道路的灯。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '50 課を終えた最後の授業で、学生と先生が振り返る。',
        cn: '完成 50 课的最后一堂课上，学生与老师一同回顾。',
      },
      lines: [
        {
          speaker: '先生',
          jp: 'ついに 50 <ruby>課<rt>か</rt></ruby>まで<ruby>来<rt>き</rt></ruby>ましたね。<ruby>長<rt>なが</rt></ruby>い<ruby>道<rt>みち</rt></ruby>のりでしたね。',
          plain: 'ついに50かまできましたね。ながいみちのりでしたね。',
          romaji: 'tsui ni gojuk-ka made kimashita ne. nagai michinori deshita ne.',
          cn: '终于走到了第 50 课呢。是漫长的旅程啊。',
        },
        {
          speaker: '学生',
          jp: 'はい、<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>長<rt>なが</rt></ruby>かったです。<ruby>最初<rt>さいしょ</rt></ruby>はひらがなも<ruby>書<rt>か</rt></ruby>けなかったのに、<ruby>今<rt>いま</rt></ruby>は<ruby>議論文<rt>ぎろんぶん</rt></ruby>まで<ruby>書<rt>か</rt></ruby>けるようになりました。',
          plain: 'はい、ほんとうにながかったです。さいしょはひらがなもかけなかったのに、いまはぎろんぶんまでかけるようになりました。',
          romaji: 'hai, hontou ni nagakatta desu. saisho wa hiragana mo kakenakatta no ni, ima wa gironbun made kakeru you ni narimashita.',
          cn: '是的，真的很漫长。最初连假名都不会写，现在竟然能写议论文了。',
        },
        {
          speaker: '先生',
          jp: '<ruby>第一課<rt>だいいっか</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>えていますか。「<ruby>私<rt>わたし</rt></ruby>は<ruby>田中<rt>たなか</rt></ruby>です」から<ruby>始<rt>はじ</rt></ruby>まりましたよね。',
          plain: 'だいいっかをおぼえていますか。「わたしはたなかです」からはじまりましたよね。',
          romaji: 'daiikka o oboete imasu ka. "watashi wa Tanaka desu" kara hajimarimashita yo ne.',
          cn: '还记得第一课吗？是从"我是田中"开始的呢。',
        },
        {
          speaker: '学生',
          jp: 'もちろんです。あの<ruby>頃<rt>ころ</rt></ruby>は、たった<ruby>一文<rt>いちぶん</rt></ruby>を<ruby>言<rt>い</rt></ruby>うのにも<ruby>緊張<rt>きんちょう</rt></ruby>したものです。',
          plain: 'もちろんです。あのころは、たったいちぶんをいうのにもきんちょうしたものです。',
          romaji: 'mochiron desu. ano koro wa, tatta ichibun o iu no ni mo kinchou shita mono desu.',
          cn: '当然记得。那时候，连说一句话都会紧张。',
        },
        {
          speaker: '先生',
          jp: 'これからもぜひ<ruby>続<rt>つづ</rt></ruby>けてくださいね。<ruby>言葉<rt>ことば</rt></ruby>は<ruby>使<rt>つか</rt></ruby>わなければ<ruby>錆<rt>さ</rt></ruby>びてしまいますから。',
          plain: 'これからもぜひつづけてくださいね。ことばはつかわなければさびてしまいますから。',
          romaji: 'kore kara mo zehi tsuzukete kudasai ne. kotoba wa tsukawanakereba sabite shimaimasu kara.',
          cn: '今后也务必继续下去。语言不用就会生锈。',
        },
        {
          speaker: '学生',
          jp: 'はい、これからも<ruby>毎日<rt>まいにち</rt></ruby>少しずつ<ruby>続<rt>つづ</rt></ruby>けます。<ruby>長<rt>なが</rt></ruby>い<ruby>間<rt>あいだ</rt></ruby>、<ruby>本当<rt>ほんとう</rt></ruby>にありがとうございました。',
          plain: 'はい、これからもまいにちすこしずつつづけます。ながいあいだ、ほんとうにありがとうございました。',
          romaji: 'hai, kore kara mo mainichi sukoshi zutsu tsuzukemasu. nagai aida, hontou ni arigatou gozaimashita.',
          cn: '好的，今后也每天一点点坚持下去。长久以来，真的非常感谢。',
        },
        {
          speaker: '先生',
          jp: 'こちらこそ。あなたの<ruby>歩<rt>あゆ</rt></ruby>みを<ruby>見<rt>み</rt></ruby>守<rt>まも</rt></ruby>ることができて、<ruby>嬉<rt>うれ</rt></ruby>しく<ruby>思<rt>おも</rt></ruby>います。これからの<ruby>道<rt>みち</rt></ruby>に、<ruby>光<rt>ひかり</rt></ruby>あれ。',
          plain: 'こちらこそ。あなたのあゆみをみまもることができて、うれしくおもいます。これからのみちに、ひかりあれ。',
          romaji: 'kochira koso. anata no ayumi o mimamoru koto ga dekite, ureshiku omoimasu. kore kara no michi ni, hikari are.',
          cn: '我才是。能见证你的脚步，我感到非常高兴。愿你今后之路，有光相伴。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>筆者<rt>ひっしゃ</rt></ruby>が<ruby>最初<rt>さいしょ</rt></ruby>に<ruby>覚<rt>おぼ</rt></ruby>えた<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>一文<rt>いちぶん</rt></ruby>は<ruby>何<rt>なに</rt></ruby>か。',
          plain: 'ひっしゃがさいしょにおぼえたにほんごのいちぶんはなにか。',
          romaji: 'hissha ga saisho ni oboeta nihongo no ichibun wa nani ka.',
          cn: '作者最初学到的日语句子是什么？',
        },
        a: {
          jp: '「<ruby>私<rt>わたし</rt></ruby>は<ruby>田中<rt>たなか</rt></ruby>です」である。',
          plain: '「わたしはたなかです」である。',
          romaji: '"watashi wa Tanaka desu" de aru.',
          cn: '是"我是田中"。',
        },
      },
      {
        q: {
          jp: 'N3 になって、<ruby>筆者<rt>ひっしゃ</rt></ruby>には<ruby>何<rt>なに</rt></ruby>ができるようになったか。',
          plain: 'N3になって、ひっしゃにはなにができるようになったか。',
          romaji: 'N3 ni natte, hissha ni wa nani ga dekiru you ni natta ka.',
          cn: '到了 N3，作者变得能做什么？',
        },
        a: {
          jp: '<ruby>新聞<rt>しんぶん</rt></ruby>記事<rt>きじ</rt></ruby>を<ruby>辞書<rt>じしょ</rt></ruby>なしで<ruby>読<rt>よ</rt></ruby>めるようになった。',
          plain: 'しんぶんきじをじしょなしでよめるようになった。',
          romaji: 'shinbun kiji o jisho nashi de yomeru you ni natta.',
          cn: '变得能够无需查词典阅读新闻。',
        },
      },
      {
        q: {
          jp: '<ruby>筆者<rt>ひっしゃ</rt></ruby>はこれからの<ruby>三<rt>みっ</rt></ruby>つの<ruby>目標<rt>もくひょう</rt></ruby>として<ruby>何<rt>なに</rt></ruby>を<ruby>挙<rt>あ</rt></ruby>げているか。',
          plain: 'ひっしゃはこれからのみっつのもくひょうとしてなにをあげているか。',
          romaji: 'hissha wa korekara no mittsu no mokuhyou to shite nani o agete iru ka.',
          cn: '作者列出今后的三个目标是什么？',
        },
        a: {
          jp: '<ruby>原文<rt>げんぶん</rt></ruby>で<ruby>日本<rt>にほん</rt></ruby><ruby>文学<rt>ぶんがく</rt></ruby>を<ruby>読<rt>よ</rt></ruby>む、<ruby>日本人<rt>にほんじん</rt></ruby>と<ruby>深<rt>ふか</rt></ruby>い<ruby>議論<rt>ぎろん</rt></ruby>をする、エッセイを<ruby>書<rt>か</rt></ruby>き<ruby>続<rt>つづ</rt></ruby>ける、の<ruby>三<rt>みっ</rt></ruby>つである。',
          plain: 'げんぶんでにほんぶんがくをよむ、にほんじんとふかいぎろんをする、エッセイをかきつづける、のみっつである。',
          romaji: 'genbun de Nihon bungaku o yomu, nihonjin to fukai giron o suru, essei o kakitsuzukeru, no mittsu de aru.',
          cn: '原文阅读日本文学、与日本人深入讨论、坚持写随笔，这三点。',
        },
      },
      {
        q: {
          jp: '<ruby>先生<rt>せんせい</rt></ruby>は<ruby>最後<rt>さいご</rt></ruby>に<ruby>学生<rt>がくせい</rt></ruby>に<ruby>何<rt>なに</rt></ruby>と<ruby>言<rt>い</rt></ruby>ったか。',
          plain: 'せんせいはさいごにがくせいになにといったか。',
          romaji: 'sensei wa saigo ni gakusei ni nani to itta ka.',
          cn: '老师最后对学生说了什么？',
        },
        a: {
          jp: '「これからの<ruby>道<rt>みち</rt></ruby>に、<ruby>光<rt>ひかり</rt></ruby>あれ」と<ruby>言<rt>い</rt></ruby>った。',
          plain: '「これからのみちに、ひかりあれ」といった。',
          romaji: '"korekara no michi ni, hikari are" to itta.',
          cn: '说了"愿你今后之路，有光相伴"。',
        },
      },
      {
        q: {
          jp: '<ruby>筆者<rt>ひっしゃ</rt></ruby>にとって、<ruby>言葉<rt>ことば</rt></ruby>を<ruby>学<rt>まな</rt></ruby>ぶこととは<ruby>何<rt>なに</rt></ruby>か。',
          plain: 'ひっしゃにとって、ことばをまなぶこととはなにか。',
          romaji: 'hissha ni totte, kotoba o manabu koto to wa nani ka.',
          cn: '对作者而言，学习语言是什么？',
        },
        a: {
          jp: '<ruby>世界<rt>せかい</rt></ruby>を<ruby>新<rt>あたら</rt></ruby>しい<ruby>目<rt>め</rt></ruby>で<ruby>見<rt>み</rt></ruby><ruby>続<rt>つづ</rt></ruby>けるための、<ruby>終<rt>お</rt></ruby>わりなき<ruby>営<rt>いとな</rt></ruby>みである。',
          plain: 'せかいをあたらしいめでみつづけるための、おわりなきいとなみである。',
          romaji: 'sekai o atarashii me de mitsuzukeru tame no, owari naki itonami de aru.',
          cn: '是为了用新的眼光持续看世界、无尽的活动。',
        },
      },
    ],
    vocabulary: [
      { jp: '振り返る', kana: 'ふりかえる', romaji: 'furikaeru', meaning: '回顾', pos: '動詞I' },
      { jp: '触れる', kana: 'ふれる', romaji: 'fureru', meaning: '接触', pos: '動詞II' },
      { jp: '歩み', kana: 'あゆみ', romaji: 'ayumi', meaning: '步伐', pos: '名詞' },
      { jp: '当時', kana: 'とうじ', romaji: 'touji', meaning: '当时', pos: '名詞' },
      { jp: '苦労', kana: 'くろう', romaji: 'kurou', meaning: '辛苦', pos: '名詞' },
      { jp: '活用', kana: 'かつよう', romaji: 'katsuyou', meaning: '活用', pos: '名詞' },
      { jp: '悩む', kana: 'なやむ', romaji: 'nayamu', meaning: '烦恼', pos: '動詞I' },
      { jp: '戸惑う', kana: 'とまどう', romaji: 'tomadou', meaning: '困惑', pos: '動詞I' },
      { jp: '挫ける', kana: 'くじける', romaji: 'kujikeru', meaning: '气馁', pos: '動詞II' },
      { jp: '都度', kana: 'つど', romaji: 'tsudo', meaning: '每次', pos: '名詞' },
      { jp: '魅力', kana: 'みりょく', romaji: 'miryoku', meaning: '魅力', pos: '名詞' },
      { jp: '引き戻す', kana: 'ひきもどす', romaji: 'hikimodosu', meaning: '拉回', pos: '動詞I' },
      { jp: '一気に', kana: 'いっきに', romaji: 'ikki ni', meaning: '一下子', pos: '副詞' },
      { jp: '広がる', kana: 'ひろがる', romaji: 'hirogaru', meaning: '拓宽', pos: '動詞I' },
      { jp: '書き言葉', kana: 'かきことば', romaji: 'kakikotoba', meaning: '书面语', pos: '名詞' },
      { jp: '味わう', kana: 'あじわう', romaji: 'ajiwau', meaning: '品味', pos: '動詞I' },
      { jp: '組み立てる', kana: 'くみたてる', romaji: 'kumitateru', meaning: '构筑', pos: '動詞II' },
      { jp: '表現力', kana: 'ひょうげんりょく', romaji: 'hyougen-ryoku', meaning: '表达力', pos: '名詞' },
      { jp: '自信', kana: 'じしん', romaji: 'jishin', meaning: '自信', pos: '名詞' },
      { jp: '営み', kana: 'いとなみ', romaji: 'itonami', meaning: '活动', pos: '名詞' },
      { jp: '錆びる', kana: 'さびる', romaji: 'sabiru', meaning: '生锈', pos: '動詞II' },
      { jp: '見守る', kana: 'みまもる', romaji: 'mimamoru', meaning: '守望', pos: '動詞I' },
      { jp: '光', kana: 'ひかり', romaji: 'hikari', meaning: '光', pos: '名詞' },
      { jp: '原文', kana: 'げんぶん', romaji: 'genbun', meaning: '原文', pos: '名詞' },
      { jp: '価値観', kana: 'かちかん', romaji: 'kachikan', meaning: '价值观', pos: '名詞' },
      { jp: '対話', kana: 'たいわ', romaji: 'taiwa', meaning: '对话', pos: '名詞' },
      { jp: '目指す', kana: 'めざす', romaji: 'mezasu', meaning: '以...为目标', pos: '動詞I' },
      { jp: 'エッセイ', kana: 'エッセイ', romaji: 'essei', meaning: '随笔', pos: '名詞' },
      { jp: '照らす', kana: 'てらす', romaji: 'terasu', meaning: '照亮', pos: '動詞I' },
      { jp: '灯', kana: 'ひ', romaji: 'hi', meaning: '灯', pos: '名詞' },
      { jp: '道のり', kana: 'みちのり', romaji: 'michinori', meaning: '路程', pos: '名詞' },
      { jp: '緊張', kana: 'きんちょう', romaji: 'kinchou', meaning: '紧张', pos: '名詞' },
    ],
    grammar: [
      {
        pattern: '総括：N5-N2 で学んだ主要表現',
        name: '回顾：50 课主要语法表达',
        explain: '本课不学新语法，而是回顾整个 50 课的语法体系。N5 阶段：「N は N です／〜ます／〜たい／〜が好き／〜から〜まで」奠定基础。N4 阶段：「て形・普通形・可能形・条件・授受动词」让句子能连接、能转弯。N3 阶段：「敬語・受身・使役・〜ようになる／〜ことになる」进入社会化表达。N2 阶段：「だ・である书面体・〜にもかかわらず・〜ものの・〜にあたって・〜次第・〜こそ・〜うる」是议论文与文学散文的工具。语法是骨架，而活用是血肉。',
        examples: [
          {
            jp: '<ruby>私<rt>わたし</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>です。（N5）',
            plain: 'わたしはがくせいです。',
            cn: '我是学生。（N5：判断句）',
          },
          {
            jp: '<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んでから、<ruby>寝<rt>ね</rt></ruby>ます。（N4）',
            plain: 'ほんをよんでから、ねます。',
            cn: '读完书后，再睡觉。（N4：て形连接）',
          },
          {
            jp: '<ruby>先生<rt>せんせい</rt></ruby>に<ruby>褒<rt>ほ</rt></ruby>められた。（N3）',
            plain: 'せんせいにほめられた。',
            cn: '被老师表扬了。（N3：被动）',
          },
          {
            jp: '<ruby>努力<rt>どりょく</rt></ruby>こそが<ruby>道<rt>みち</rt></ruby>を<ruby>切<rt>き</rt></ruby>り<ruby>開<rt>ひら</rt></ruby>くものである。（N2）',
            plain: 'どりょくこそがみちをきりひらくものである。',
            cn: '正是努力，方才开辟道路。（N2：書面体）',
          },
        ],
      },
      {
        pattern: '〜てきた／〜ていく',
        name: '过去到现在 / 现在到未来',
        explain: '「〜てきた」表示从过去持续到现在的变化或积累；「〜ていく」表示从现在开始向未来持续。本课中「<ruby>歩<rt>ある</rt></ruby>いてきた」（一路走过来）、「<ruby>歩<rt>ある</rt></ruby>いていきたい」（想继续走下去）正是这一对对照式表达，用于回顾与展望。',
        examples: [
          {
            jp: '<ruby>長<rt>なが</rt></ruby>い<ruby>道<rt>みち</rt></ruby>を<ruby>歩<rt>ある</rt></ruby>いてきた。',
            plain: 'ながいみちをあるいてきた。',
            cn: '走过了漫长的道路。',
          },
          {
            jp: 'これからも<ruby>歩<rt>ある</rt></ruby>いていきたい。',
            plain: 'これからもあるいていきたい。',
            cn: '今后也想继续走下去。',
          },
        ],
      },
      {
        pattern: '〜ものだ（怀念）',
        name: '回忆式感叹',
        explain: '回忆过去时使用，加强感慨语气。本课"<ruby>毎日<rt>まいにち</rt></ruby><ruby>同<rt>おな</rt></ruby>じ<ruby>文字<rt>もじ</rt></ruby>を<ruby>何度<rt>なんど</rt></ruby>も<ruby>書<rt>か</rt></ruby>いたものだ"是典型用法，回顾学习初期反复练习的日子。常与「〜ものだ」（普遍真理）形式相同，靠上下文区分。',
        examples: [
          {
            jp: '<ruby>子供<rt>こども</rt></ruby>の<ruby>頃<rt>ころ</rt></ruby>、よく<ruby>図書館<rt>としょかん</rt></ruby>に<ruby>通<rt>かよ</rt></ruby>ったものだ。',
            plain: 'こどものころ、よくとしょかんにかよったものだ。',
            cn: '小时候，常常去图书馆。',
          },
        ],
      },
      {
        pattern: '〜わけではない',
        name: '并非...',
        explain: '部分否定，表"并不是...". 与全否定「〜ない」不同，留有余地。本课"<ruby>道<rt>みち</rt></ruby>はここで<ruby>終<rt>お</rt></ruby>わるわけではない"是典型用法，强调"还要继续"。',
        examples: [
          {
            jp: '<ruby>全<rt>すべ</rt></ruby>てを<ruby>理解<rt>りかい</rt></ruby>しているわけではない。',
            plain: 'すべてをりかいしているわけではない。',
            cn: '并非全部都理解。',
          },
        ],
      },
      {
        pattern: '〜に他ならない',
        name: '无非是...',
        explain: '强调"正是...而不是别的". 在第 45 课已学习，此课作为收尾再次出现，串联整个 N2 阶段的强调表达。本课"<ruby>努力<rt>どりょく</rt></ruby>の<ruby>賜物<rt>たまもの</rt></ruby>に<ruby>他<rt>ほか</rt></ruby>ならない"是回顾性论断的核心句式。',
        examples: [
          {
            jp: '<ruby>成功<rt>せいこう</rt></ruby>は<ruby>努力<rt>どりょく</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>に<ruby>他<rt>ほか</rt></ruby>ならない。',
            plain: 'せいこうはどりょくのけっかにほかならない。',
            cn: '成功无非就是努力的结果。',
          },
        ],
      },
    ],
  },

];
