// ============================================================
// lessons-n3-part3.ts
// JLPT N3 — 第 33 課 ～ 第 38 課
// ============================================================

import type { Lesson } from './types';

export const lessonsN3Part3: Lesson[] = [

  // ========================================================
  // 第 33 課 — 目的
  // ========================================================
  {
    id: 33,
    level: 'N3',
    title: {
      jp: '目的の表現',
      romaji: 'mokuteki no hyougen',
      cn: '目的的表达',
      en: 'Expressing Purpose',
    },
    goals: [
      '区分「ために」（意志动词）与「ように」（非意志/可能形）',
      '能用目的表达描述自己的行动动机',
      '掌握「ように」常与否定、可能形搭配的用法',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '健康のために',
          romaji: 'kenkou no tame ni',
          cn: '为了健康',
        },
        sentences: [
          {
            jp: '<ruby>最近<rt>さいきん</rt></ruby>、<ruby>健康<rt>けんこう</rt></ruby>のためにいろいろな<ruby>習慣<rt>しゅうかん</rt></ruby>を<ruby>変<rt>か</rt></ruby>えました。',
            plain: 'さいきん、けんこうのためにいろいろなしゅうかんをかえました。',
            romaji: 'saikin, kenkou no tame ni iroiro na shuukan o kaemashita.',
            cn: '最近，为了健康改变了许多习惯。',
          },
          {
            jp: '<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>三十分<rt>さんじゅっぷん</rt></ruby><ruby>歩<rt>ある</rt></ruby>くために、<ruby>一<rt>いち</rt></ruby><ruby>時間<rt>じかん</rt></ruby><ruby>早<rt>はや</rt></ruby>く<ruby>起<rt>お</rt></ruby>きるようにしています。',
            plain: 'まいあささんじゅっぷんあるくために、いちじかんはやくおきるようにしています。',
            romaji: 'maiasa sanjuppun aruku tame ni, ichi-jikan hayaku okiru you ni shiteimasu.',
            cn: '为了每天早上走三十分钟，努力提早一小时起床。',
          },
          {
            jp: '<ruby>体<rt>からだ</rt></ruby>に<ruby>悪<rt>わる</rt></ruby>いものを<ruby>食<rt>た</rt></ruby>べないように<ruby>気<rt>き</rt></ruby>をつけています。',
            plain: 'からだにわるいものをたべないようにきをつけています。',
            romaji: 'karada ni warui mono o tabenai you ni ki o tsuketeimasu.',
            cn: '为了不吃对身体不好的东西而注意着。',
          },
          {
            jp: '<ruby>痩<rt>や</rt></ruby>せるために<ruby>夕食<rt>ゆうしょく</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>を<ruby>減<rt>へ</rt></ruby>らしました。',
            plain: 'やせるためにゆうしょくのりょうをへらしました。',
            romaji: 'yaseru tame ni yuushoku no ryou o herashimashita.',
            cn: '为了减肥，减少了晚饭的量。',
          },
          {
            jp: 'お<ruby>酒<rt>さけ</rt></ruby>はストレスがたまらないように、<ruby>少<rt>すこ</rt></ruby>しだけ<ruby>飲<rt>の</rt></ruby>みます。',
            plain: 'おさけはストレスがたまらないように、すこしだけのみます。',
            romaji: 'o-sake wa sutoresu ga tamaranai you ni, sukoshi dake nomimasu.',
            cn: '酒为了不让压力堆积，只喝一点。',
          },
          {
            jp: 'よく<ruby>眠<rt>ねむ</rt></ruby>れるように、<ruby>夜<rt>よる</rt></ruby>はスマホを<ruby>見<rt>み</rt></ruby>すぎないようにしています。',
            plain: 'よくねむれるように、よるはスマホをみすぎないようにしています。',
            romaji: 'yoku nemureru you ni, yoru wa sumaho o misuginai you ni shiteimasu.',
            cn: '为了能睡好觉，晚上注意不过度看手机。',
          },
          {
            jp: '<ruby>家族<rt>かぞく</rt></ruby>のために、<ruby>毎日<rt>まいにち</rt></ruby><ruby>野菜<rt>やさい</rt></ruby>がたっぷりの<ruby>料理<rt>りょうり</rt></ruby>を<ruby>作<rt>つく</rt></ruby>るようにしています。',
            plain: 'かぞくのために、まいにちやさいがたっぷりのりょうりをつくるようにしています。',
            romaji: 'kazoku no tame ni, mainichi yasai ga tappuri no ryouri o tsukuru you ni shiteimasu.',
            cn: '为了家人，每天努力做蔬菜丰富的饭菜。',
          },
          {
            jp: '<ruby>水<rt>みず</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れないように、いつも<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>置<rt>お</rt></ruby>いてあります。',
            plain: 'みずをわすれないように、いつもつくえのうえにおいてあります。',
            romaji: 'mizu o wasurenai you ni, itsumo tsukue no ue ni oite arimasu.',
            cn: '为了不忘记喝水，总是放在桌上。',
          },
          {
            jp: '<ruby>変化<rt>へんか</rt></ruby>はゆっくりですが、<ruby>体調<rt>たいちょう</rt></ruby>がだんだん<ruby>良<rt>よ</rt></ruby>くなっているのを<ruby>感<rt>かん</rt></ruby>じます。',
            plain: 'へんかはゆっくりですが、たいちょうがだんだんよくなっているのをかんじます。',
            romaji: 'henka wa yukkuri desu ga, taichou ga dandan yoku natteiru no o kanjimasu.',
            cn: '变化虽慢，但能感到身体状况渐渐变好。',
          },
          {
            jp: '<ruby>長<rt>なが</rt></ruby>く<ruby>続<rt>つづ</rt></ruby>けるためには、<ruby>無理<rt>むり</rt></ruby>をしないことが<ruby>大切<rt>たいせつ</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'ながくつづけるためには、むりをしないことがたいせつだとおもいます。',
            romaji: 'nagaku tsuzukeru tame ni wa, muri o shinai koto ga taisetsu da to omoimasu.',
            cn: '为了长久坚持，我觉得不勉强很重要。',
          },
          {
            jp: '<ruby>健康<rt>けんこう</rt></ruby>は<ruby>未来<rt>みらい</rt></ruby>の<ruby>自分<rt>じぶん</rt></ruby>へのプレゼントです。',
            plain: 'けんこうはみらいのじぶんへのプレゼントです。',
            romaji: 'kenkou wa mirai no jibun e no purezento desu.',
            cn: '健康是给未来自己的礼物。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '忘れないように',
          romaji: 'wasurenai you ni',
          cn: '为了不忘记',
        },
        sentences: [
          {
            jp: '<ruby>大事<rt>だいじ</rt></ruby>な<ruby>予定<rt>よてい</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れないように、いくつかの<ruby>工夫<rt>くふう</rt></ruby>をしています。',
            plain: 'だいじなよていをわすれないように、いくつかのくふうをしています。',
            romaji: 'daiji na yotei o wasurenai you ni, ikutsuka no kufuu o shiteimasu.',
            cn: '为了不忘记重要的安排，做了几个小技巧。',
          },
          {
            jp: 'スマホのカレンダーに<ruby>必<rt>かなら</rt></ruby>ず<ruby>登録<rt>とうろく</rt></ruby>するようにしています。',
            plain: 'スマホのカレンダーにかならずとうろくするようにしています。',
            romaji: 'sumaho no karendaa ni kanarazu touroku suru you ni shiteimasu.',
            cn: '坚持一定登录到手机日历里。',
          },
          {
            jp: '<ruby>朝<rt>あさ</rt></ruby><ruby>気<rt>き</rt></ruby>づけるように、<ruby>前<rt>まえ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>に<ruby>準備<rt>じゅんび</rt></ruby>します。',
            plain: 'あさきづけるように、まえのひのよるにじゅんびします。',
            romaji: 'asa kizukeru you ni, mae no hi no yoru ni junbi shimasu.',
            cn: '为了早上能注意到，前一天晚上做好准备。',
          },
          {
            jp: '<ruby>鍵<rt>かぎ</rt></ruby>はなくさないように、<ruby>玄関<rt>げんかん</rt></ruby>の<ruby>同<rt>おな</rt></ruby>じ<ruby>場所<rt>ばしょ</rt></ruby>に<ruby>置<rt>お</rt></ruby>きます。',
            plain: 'かぎはなくさないように、げんかんのおなじばしょにおきます。',
            romaji: 'kagi wa nakusanai you ni, genkan no onaji basho ni okimasu.',
            cn: '为了不弄丢钥匙，放在玄关固定位置。',
          },
          {
            jp: '<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>言葉<rt>ことば</rt></ruby>は<ruby>覚<rt>おぼ</rt></ruby>えられるように、<ruby>何度<rt>なんど</rt></ruby>も<ruby>声<rt>こえ</rt></ruby>に<ruby>出<rt>だ</rt></ruby>します。',
            plain: 'たいせつなことばはおぼえられるように、なんどもこえにだします。',
            romaji: 'taisetsu na kotoba wa oboerareru you ni, nando mo koe ni dashimasu.',
            cn: '重要的话为了能记住，反复读出声。',
          },
          {
            jp: '<ruby>後<rt>うし</rt></ruby>ろの<ruby>人<rt>ひと</rt></ruby>にも<ruby>聞<rt>き</rt></ruby>こえるように、<ruby>大<rt>おお</rt></ruby>きな<ruby>声<rt>こえ</rt></ruby>で<ruby>話<rt>はな</rt></ruby>します。',
            plain: 'うしろのひとにもきこえるように、おおきなこえではなします。',
            romaji: 'ushiro no hito ni mo kikoeru you ni, ookii koe de hanashimasu.',
            cn: '为了让后面的人也能听见，用大声说话。',
          },
          {
            jp: '<ruby>遅<rt>おく</rt></ruby>れないように、<ruby>普段<rt>ふだん</rt></ruby>より<ruby>早<rt>はや</rt></ruby>めに<ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>ます。',
            plain: 'おくれないように、ふだんよりはやめにいえをでます。',
            romaji: 'okurenai you ni, fudan yori hayame ni ie o demasu.',
            cn: '为了不迟到，比平时早一点出门。',
          },
          {
            jp: '<ruby>小<rt>ちい</rt></ruby>さな<ruby>習慣<rt>しゅうかん</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きな<ruby>安心<rt>あんしん</rt></ruby>を<ruby>生<rt>う</rt></ruby>みます。',
            plain: 'ちいさなしゅうかんがおおきなあんしんをうみます。',
            romaji: 'chiisa na shuukan ga ooki na anshin o umimasu.',
            cn: '小习惯能带来大安心。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '友達と外国語の勉強方法について話している。',
        cn: '和朋友讨论外语学习方法。',
      },
      lines: [
        {
          speaker: '田中',
          jp: '<ruby>最近<rt>さいきん</rt></ruby>、<ruby>英語<rt>えいご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>するために<ruby>毎日<rt>まいにち</rt></ruby><ruby>動画<rt>どうが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ているんだ。',
          plain: 'さいきん、えいごをべんきょうするためにまいにちどうがをみているんだ。',
          romaji: 'saikin, eigo o benkyou suru tame ni mainichi douga o miteiru n da.',
          cn: '最近为了学英语，每天都在看视频。',
        },
        {
          speaker: '鈴木',
          jp: 'いいね。<ruby>聞<rt>き</rt></ruby>き<ruby>取<rt>と</rt></ruby>れるようになった。',
          plain: 'いいね。ききとれるようになった。',
          romaji: 'ii ne. kikitoreru you ni natta.',
          cn: '不错啊。能听懂了吗？',
        },
        {
          speaker: '田中',
          jp: '<ruby>少<rt>すこ</rt></ruby>しずつね。<ruby>分<rt>わ</rt></ruby>からない<ruby>言葉<rt>ことば</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れないように、ノートに<ruby>書<rt>か</rt></ruby>いている。',
          plain: 'すこしずつね。わからないことばをわすれないように、ノートにかいている。',
          romaji: 'sukoshi zutsu ne. wakaranai kotoba o wasurenai you ni, nooto ni kaiteiru.',
          cn: '一点点吧。为了不忘记不懂的词，记在笔记本上。',
        },
        {
          speaker: '鈴木',
          jp: '<ruby>私<rt>わたし</rt></ruby>も<ruby>話<rt>はな</rt></ruby>せるようになりたいから、<ruby>毎日<rt>まいにち</rt></ruby><ruby>声<rt>こえ</rt></ruby>に<ruby>出<rt>だ</rt></ruby>すようにしている。',
          plain: 'わたしもはなせるようになりたいから、まいにちこえにだすようにしている。',
          romaji: 'watashi mo hanaseru you ni naritai kara, mainichi koe ni dasu you ni shiteiru.',
          cn: '我也想能开口说，所以每天读出声。',
        },
        {
          speaker: '田中',
          jp: '<ruby>続<rt>つづ</rt></ruby>けるためには、<ruby>楽<rt>たの</rt></ruby>しいと<ruby>思<rt>おも</rt></ruby>える<ruby>方法<rt>ほうほう</rt></ruby>を<ruby>選<rt>えら</rt></ruby>ぶのが<ruby>大切<rt>たいせつ</rt></ruby>だね。',
          plain: 'つづけるためには、たのしいとおもえるほうほうをえらぶのがたいせつだね。',
          romaji: 'tsuzukeru tame ni wa, tanoshii to omoeru houhou o erabu no ga taisetsu da ne.',
          cn: '为了能坚持下去，选觉得有趣的方法很重要。',
        },
        {
          speaker: '鈴木',
          jp: '<ruby>本当<rt>ほんとう</rt></ruby>にそうだね。<ruby>無理<rt>むり</rt></ruby>しないように<ruby>頑張<rt>がんば</rt></ruby>ろう。',
          plain: 'ほんとうにそうだね。むりしないようにがんばろう。',
          romaji: 'hontou ni sou da ne. muri shinai you ni ganbarou.',
          cn: '真的是。我们不勉强地一起加油吧。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>主人公<rt>しゅじんこう</rt></ruby>は<ruby>何<rt>なに</rt></ruby>のために<ruby>習慣<rt>しゅうかん</rt></ruby>を<ruby>変<rt>か</rt></ruby>えましたか。',
          plain: 'しゅじんこうはなにのためにしゅうかんをかえましたか。',
          romaji: 'shujinkou wa nani no tame ni shuukan o kaemashita ka.',
          cn: '主人公为了什么改变了习惯？',
        },
        a: {
          jp: '<ruby>健康<rt>けんこう</rt></ruby>のために<ruby>習慣<rt>しゅうかん</rt></ruby>を<ruby>変<rt>か</rt></ruby>えました。',
          plain: 'けんこうのためにしゅうかんをかえました。',
          romaji: 'kenkou no tame ni shuukan o kaemashita.',
          cn: '为了健康改变了习惯。',
        },
      },
      {
        q: {
          jp: 'よく<ruby>眠<rt>ねむ</rt></ruby>れるようにどんな<ruby>工夫<rt>くふう</rt></ruby>をしていますか。',
          plain: 'よくねむれるようにどんなくふうをしていますか。',
          romaji: 'yoku nemureru you ni donna kufuu o shiteimasu ka.',
          cn: '为了能睡好觉做了什么努力？',
        },
        a: {
          jp: '<ruby>夜<rt>よる</rt></ruby>はスマホを<ruby>見<rt>み</rt></ruby>すぎないようにしています。',
          plain: 'よるはスマホをみすぎないようにしています。',
          romaji: 'yoru wa sumaho o misuginai you ni shiteimasu.',
          cn: '注意晚上不过度看手机。',
        },
        hint: '「ように」前接非意志动词或否定形。',
      },
      {
        q: {
          jp: '<ruby>田中<rt>たなか</rt></ruby>さんはなぜノートに<ruby>書<rt>か</rt></ruby>いていますか。',
          plain: 'たなかさんはなぜノートにかいていますか。',
          romaji: 'Tanaka-san wa naze nooto ni kaiteimasu ka.',
          cn: '田中为什么写在笔记本上？',
        },
        a: {
          jp: '<ruby>分<rt>わ</rt></ruby>からない<ruby>言葉<rt>ことば</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れないようにするためです。',
          plain: 'わからないことばをわすれないようにするためです。',
          romaji: 'wakaranai kotoba o wasurenai you ni suru tame desu.',
          cn: '为了不忘记不懂的词。',
        },
      },
      {
        q: {
          jp: '<ruby>長<rt>なが</rt></ruby>く<ruby>続<rt>つづ</rt></ruby>けるために<ruby>何<rt>なに</rt></ruby>が<ruby>大切<rt>たいせつ</rt></ruby>ですか。',
          plain: 'ながくつづけるためになにがたいせつですか。',
          romaji: 'nagaku tsuzukeru tame ni nani ga taisetsu desu ka.',
          cn: '为了长久坚持，什么很重要？',
        },
        a: {
          jp: '<ruby>無理<rt>むり</rt></ruby>をしないことが<ruby>大切<rt>たいせつ</rt></ruby>です。',
          plain: 'むりをしないことがたいせつです。',
          romaji: 'muri o shinai koto ga taisetsu desu.',
          cn: '不勉强很重要。',
        },
      },
    ],
    vocabulary: [
      { jp: '健康', kana: 'けんこう', romaji: 'kenkou', meaning: '健康', pos: '名詞' },
      { jp: '習慣', kana: 'しゅうかん', romaji: 'shuukan', meaning: '习惯', pos: '名詞' },
      { jp: '変えます', kana: 'かえます', romaji: 'kaemasu', meaning: '改变', pos: '動詞II' },
      { jp: '痩せます', kana: 'やせます', romaji: 'yasemasu', meaning: '变瘦', pos: '動詞II' },
      { jp: '量', kana: 'りょう', romaji: 'ryou', meaning: '量', pos: '名詞' },
      { jp: '減らします', kana: 'へらします', romaji: 'herashimasu', meaning: '减少', pos: '動詞I' },
      { jp: 'ストレス', kana: 'ストレス', romaji: 'sutoresu', meaning: '压力', pos: '名詞' },
      { jp: 'たまります', kana: 'たまります', romaji: 'tamarimasu', meaning: '堆积', pos: '動詞I' },
      { jp: '眠れます', kana: 'ねむれます', romaji: 'nemuremasu', meaning: '能睡着', pos: '動詞II' },
      { jp: 'スマホ', kana: 'スマホ', romaji: 'sumaho', meaning: '智能手机', pos: '名詞' },
      { jp: '野菜', kana: 'やさい', romaji: 'yasai', meaning: '蔬菜', pos: '名詞' },
      { jp: 'たっぷり', kana: 'たっぷり', romaji: 'tappuri', meaning: '充足', pos: '副詞' },
      { jp: '変化', kana: 'へんか', romaji: 'henka', meaning: '变化', pos: '名詞' },
      { jp: '体調', kana: 'たいちょう', romaji: 'taichou', meaning: '身体状况', pos: '名詞' },
      { jp: 'だんだん', kana: 'だんだん', romaji: 'dandan', meaning: '渐渐', pos: '副詞' },
      { jp: '感じます', kana: 'かんじます', romaji: 'kanjimasu', meaning: '感觉', pos: '動詞II' },
      { jp: '続けます', kana: 'つづけます', romaji: 'tsuzukemasu', meaning: '继续', pos: '動詞II' },
      { jp: '無理', kana: 'むり', romaji: 'muri', meaning: '勉强', pos: 'な形容詞' },
      { jp: '未来', kana: 'みらい', romaji: 'mirai', meaning: '未来', pos: '名詞' },
      { jp: '自分', kana: 'じぶん', romaji: 'jibun', meaning: '自己', pos: '名詞' },
      { jp: '工夫', kana: 'くふう', romaji: 'kufuu', meaning: '巧思；窍门', pos: '名詞' },
      { jp: 'カレンダー', kana: 'カレンダー', romaji: 'karendaa', meaning: '日历', pos: '名詞' },
      { jp: '登録します', kana: 'とうろくします', romaji: 'touroku shimasu', meaning: '登记', pos: '動詞III' },
      { jp: '気づきます', kana: 'きづきます', romaji: 'kizukimasu', meaning: '注意到', pos: '動詞I' },
      { jp: '鍵', kana: 'かぎ', romaji: 'kagi', meaning: '钥匙', pos: '名詞' },
      { jp: 'なくします', kana: 'なくします', romaji: 'nakushimasu', meaning: '弄丢', pos: '動詞I' },
      { jp: '玄関', kana: 'げんかん', romaji: 'genkan', meaning: '玄关', pos: '名詞' },
      { jp: '声に出します', kana: 'こえにだします', romaji: 'koe ni dashimasu', meaning: '读出声', pos: '慣用句' },
      { jp: '聞こえます', kana: 'きこえます', romaji: 'kikoemasu', meaning: '听得见', pos: '動詞II' },
      { jp: '早めに', kana: 'はやめに', romaji: 'hayame ni', meaning: '早点', pos: '副詞' },
      { jp: '安心', kana: 'あんしん', romaji: 'anshin', meaning: '安心', pos: '名詞' },
      { jp: '動画', kana: 'どうが', romaji: 'douga', meaning: '视频', pos: '名詞' },
      { jp: '聞き取れます', kana: 'ききとれます', romaji: 'kikitoremasu', meaning: '能听懂', pos: '動詞II' },
      { jp: '方法', kana: 'ほうほう', romaji: 'houhou', meaning: '方法', pos: '名詞' },
      { jp: '選びます', kana: 'えらびます', romaji: 'erabimasu', meaning: '选择', pos: '動詞I' },
    ],
    grammar: [
      {
        pattern: 'V（意志） + ために、〜',
        name: '〜ために（目的）',
        explain: '前接意志动词的辞书形或名词+の，表示为了达成某个目的而做某事。前后句的主语必须一致。多用于自己有意识、能控制的目标。N + の + ために 也可表示「为了某人/某事」。注意与「ために（原因）」的语境区分，但N3阶段以目的用法为主。',
        examples: [
          {
            jp: '<ruby>留学<rt>りゅうがく</rt></ruby>するためにお<ruby>金<rt>かね</rt></ruby>をためています。',
            plain: 'りゅうがくするためにおかねをためています。',
            cn: '为了留学在存钱。',
          },
          {
            jp: '<ruby>家族<rt>かぞく</rt></ruby>のために<ruby>働<rt>はたら</rt></ruby>いています。',
            plain: 'かぞくのためにはたらいています。',
            cn: '为了家人而工作。',
          },
        ],
      },
      {
        pattern: 'V（非意志/可能/否定） + ように、〜',
        name: '〜ように（目的）',
        explain: '前接非意志动词、可能形、或否定形，表示「为了能.../为了不...」。和「ために」最大的区别是动词性质：「ために」前是说话人能主动做的动作（留学する、勉強する），「ように」前是无法主动控制的状态（聞こえる、忘れない、できる）。前后主语不必一致。',
        examples: [
          {
            jp: '<ruby>忘<rt>わす</rt></ruby>れないようにメモします。',
            plain: 'わすれないようにメモします。',
            cn: '为了不忘记记笔记。',
          },
          {
            jp: '<ruby>後<rt>うし</rt></ruby>ろの<ruby>席<rt>せき</rt></ruby>でも<ruby>聞<rt>き</rt></ruby>こえるように<ruby>大<rt>おお</rt></ruby>きな<ruby>声<rt>こえ</rt></ruby>で<ruby>話<rt>はな</rt></ruby>します。',
            plain: 'うしろのせきでもきこえるようにおおきなこえではなします。',
            cn: '为了后排也听得见用大声说。',
          },
        ],
      },
      {
        pattern: 'V る/V ない + ようにする',
        name: '〜ようにする（努力做）',
        explain: '表示说话人有意识地做某事或避免做某事，是一种「自我努力的习惯」。和单纯的「〜ます」相比，强调主观决心。常用否定形「〜ないようにする」表示「努力不...」。注意它和下一课的「ようになる」（自然变化）不同。',
        examples: [
          {
            jp: '<ruby>毎日<rt>まいにち</rt></ruby><ruby>運動<rt>うんどう</rt></ruby>するようにしています。',
            plain: 'まいにちうんどうするようにしています。',
            cn: '坚持每天运动。',
          },
          {
            jp: '<ruby>遅<rt>おく</rt></ruby>れないようにしてください。',
            plain: 'おくれないようにしてください。',
            cn: '请努力别迟到。',
          },
        ],
      },
      {
        pattern: 'N + のために',
        name: '为了某人/某事',
        explain: '名词后加「のために」表示「为了...的利益/目的」。受益者多为人，也可以是抽象目标（健康・将来等）。语气比「に」更明确地表示「为了对方着想」。',
        examples: [
          {
            jp: '<ruby>子供<rt>こども</rt></ruby>のために<ruby>頑張<rt>がんば</rt></ruby>ります。',
            plain: 'こどものためにがんばります。',
            cn: '为了孩子加油。',
          },
        ],
      },
      {
        pattern: 'V る + ためには、〜',
        name: '为了...的话',
        explain: '在「ために」后加「は」表示强调或对比，常用于书面或郑重表达，引出实现目标所需的条件。「〜ためには〜が必要だ／大切だ」是常见搭配。',
        examples: [
          {
            jp: '<ruby>夢<rt>ゆめ</rt></ruby>を<ruby>叶<rt>かな</rt></ruby>えるためには<ruby>努力<rt>どりょく</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>です。',
            plain: 'ゆめをかなえるためにはどりょくがひつようです。',
            cn: '为了实现梦想，需要努力。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 34 課 — 結果と変化
  // ========================================================
  {
    id: 34,
    level: 'N3',
    title: {
      jp: '結果と変化',
      romaji: 'kekka to henka',
      cn: '结果与变化',
      en: 'Results and Changes',
    },
    goals: [
      '区分「ようになる」（自然变化）与「ようにする」（自我决定）',
      '区分「ことにする」（主动决定）与「ことになる」（被决定）',
      '能讲述自己的能力变化或重大决定',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '日本語が話せるようになりました',
          romaji: 'nihongo ga hanaseru you ni narimashita',
          cn: '我学会说日语了',
        },
        sentences: [
          {
            jp: '<ruby>日本<rt>にほん</rt></ruby>に<ruby>来<rt>き</rt></ruby>てから<ruby>三年<rt>さんねん</rt></ruby>が<ruby>過<rt>す</rt></ruby>ぎました。',
            plain: 'にほんにきてからさんねんがすぎました。',
            romaji: 'nihon ni kite kara san-nen ga sugimashita.',
            cn: '来日本已经过了三年。',
          },
          {
            jp: '<ruby>最初<rt>さいしょ</rt></ruby>は<ruby>挨拶<rt>あいさつ</rt></ruby>もうまくできませんでした。',
            plain: 'さいしょはあいさつもうまくできませんでした。',
            romaji: 'saisho wa aisatsu mo umaku dekimasen deshita.',
            cn: '最初连寒暄都说不好。',
          },
          {
            jp: 'でも、<ruby>最近<rt>さいきん</rt></ruby>は<ruby>友達<rt>ともだち</rt></ruby>と<ruby>自然<rt>しぜん</rt></ruby>に<ruby>話<rt>はな</rt></ruby>せるようになりました。',
            plain: 'でも、さいきんはともだちとしぜんにはなせるようになりました。',
            romaji: 'demo, saikin wa tomodachi to shizen ni hanaseru you ni narimashita.',
            cn: '但是，最近能和朋友自然地说话了。',
          },
          {
            jp: '<ruby>毎日<rt>まいにち</rt></ruby><ruby>少<rt>すこ</rt></ruby>しでも<ruby>勉強<rt>べんきょう</rt></ruby>するようにしています。',
            plain: 'まいにちすこしでもべんきょうするようにしています。',
            romaji: 'mainichi sukoshi demo benkyou suru you ni shiteimasu.',
            cn: '坚持每天哪怕一点也要学习。',
          },
          {
            jp: 'ニュースもだいたい<ruby>分<rt>わ</rt></ruby>かるようになってきました。',
            plain: 'ニュースもだいたいわかるようになってきました。',
            romaji: 'nyuusu mo daitai wakaru you ni natte kimashita.',
            cn: '新闻也大致能看懂了。',
          },
          {
            jp: '<ruby>来年<rt>らいねん</rt></ruby>、<ruby>大学院<rt>だいがくいん</rt></ruby>に<ruby>進<rt>すす</rt></ruby>むことにしました。',
            plain: 'らいねん、だいがくいんにすすむことにしました。',
            romaji: 'rainen, daigakuin ni susumu koto ni shimashita.',
            cn: '决定明年读研究生。',
          },
          {
            jp: '<ruby>専攻<rt>せんこう</rt></ruby>は<ruby>日本<rt>にほん</rt></ruby>の<ruby>文化<rt>ぶんか</rt></ruby><ruby>研究<rt>けんきゅう</rt></ruby>です。',
            plain: 'せんこうはにほんのぶんかけんきゅうです。',
            romaji: 'senkou wa nihon no bunka kenkyuu desu.',
            cn: '专业是日本文化研究。',
          },
          {
            jp: '<ruby>面接<rt>めんせつ</rt></ruby>は<ruby>来月<rt>らいげつ</rt></ruby>の<ruby>初<rt>はじ</rt></ruby>めに<ruby>行<rt>おこな</rt></ruby>われることになっています。',
            plain: 'めんせつはらいげつのはじめにおこなわれることになっています。',
            romaji: 'mensetsu wa raigetsu no hajime ni okonawareru koto ni natteimasu.',
            cn: '面试已定在下月初举行。',
          },
          {
            jp: '<ruby>緊張<rt>きんちょう</rt></ruby>しないように、<ruby>毎日<rt>まいにち</rt></ruby><ruby>練習<rt>れんしゅう</rt></ruby>しています。',
            plain: 'きんちょうしないように、まいにちれんしゅうしています。',
            romaji: 'kinchou shinai you ni, mainichi renshuu shiteimasu.',
            cn: '为了不紧张，每天练习。',
          },
          {
            jp: '<ruby>努力<rt>どりょく</rt></ruby>は<ruby>必<rt>かなら</rt></ruby>ず<ruby>結果<rt>けっか</rt></ruby>に<ruby>繋<rt>つな</rt></ruby>がると<ruby>信<rt>しん</rt></ruby>じています。',
            plain: 'どりょくはかならずけっかにつながるとしんじています。',
            romaji: 'doryoku wa kanarazu kekka ni tsunagaru to shinjiteimasu.',
            cn: '相信努力一定会有结果。',
          },
          {
            jp: '<ruby>三年前<rt>さんねんまえ</rt></ruby>の<ruby>自分<rt>じぶん</rt></ruby>と<ruby>比<rt>くら</rt></ruby>べると、<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>変<rt>か</rt></ruby>わったと<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'さんねんまえのじぶんとくらべると、ほんとうにかわったとおもいます。',
            romaji: 'san-nen mae no jibun to kuraberu to, hontou ni kawatta to omoimasu.',
            cn: '和三年前的自己相比，真的变了。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '会社を辞めることにしました',
          romaji: 'kaisha o yameru koto ni shimashita',
          cn: '我决定辞职',
        },
        sentences: [
          {
            jp: '<ruby>長<rt>なが</rt></ruby>い<ruby>間<rt>あいだ</rt></ruby><ruby>悩<rt>なや</rt></ruby>みましたが、<ruby>会社<rt>かいしゃ</rt></ruby>を<ruby>辞<rt>や</rt></ruby>めることにしました。',
            plain: 'ながいあいだなやみましたが、かいしゃをやめることにしました。',
            romaji: 'nagai aida nayamimashita ga, kaisha o yameru koto ni shimashita.',
            cn: '苦恼了很久，决定辞掉公司。',
          },
          {
            jp: '<ruby>毎日<rt>まいにち</rt></ruby><ruby>残業<rt>ざんぎょう</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>いて、<ruby>体<rt>からだ</rt></ruby>が<ruby>持<rt>も</rt></ruby>たなくなりました。',
            plain: 'まいにちざんぎょうがつづいて、からだがもたなくなりました。',
            romaji: 'mainichi zangyou ga tsuzuite, karada ga motanaku narimashita.',
            cn: '每天连着加班，身体撑不住了。',
          },
          {
            jp: '<ruby>家族<rt>かぞく</rt></ruby>と<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>って、<ruby>新<rt>あたら</rt></ruby>しい<ruby>道<rt>みち</rt></ruby>を<ruby>探<rt>さが</rt></ruby>すことにしました。',
            plain: 'かぞくとはなしあって、あたらしいみちをさがすことにしました。',
            romaji: 'kazoku to hanashiatte, atarashii michi o sagasu koto ni shimashita.',
            cn: '和家人商量后决定寻找新的道路。',
          },
          {
            jp: '<ruby>来月<rt>らいげつ</rt></ruby>から<ruby>新<rt>あたら</rt></ruby>しい<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>くことになりました。',
            plain: 'らいげつからあたらしいかいしゃではたらくことになりました。',
            romaji: 'raigetsu kara atarashii kaisha de hataraku koto ni narimashita.',
            cn: '决定下个月开始在新公司工作。',
          },
          {
            jp: '<ruby>給料<rt>きゅうりょう</rt></ruby>は<ruby>少<rt>すく</rt></ruby>し<ruby>下<rt>さ</rt></ruby>がりますが、<ruby>時間<rt>じかん</rt></ruby>に<ruby>余裕<rt>よゆう</rt></ruby>ができます。',
            plain: 'きゅうりょうはすこしさがりますが、じかんによゆうができます。',
            romaji: 'kyuuryou wa sukoshi sagarimasu ga, jikan ni yoyuu ga dekimasu.',
            cn: '工资稍微下降，但时间宽裕了。',
          },
          {
            jp: '<ruby>趣味<rt>しゅみ</rt></ruby>のピアノもまた<ruby>始<rt>はじ</rt></ruby>められるようになります。',
            plain: 'しゅみのピアノもまたはじめられるようになります。',
            romaji: 'shumi no piano mo mata hajimerareru you ni narimasu.',
            cn: '兴趣的钢琴也能重新开始了。',
          },
          {
            jp: '<ruby>不安<rt>ふあん</rt></ruby>もありますが、<ruby>後悔<rt>こうかい</rt></ruby>しないように<ruby>選<rt>えら</rt></ruby>びました。',
            plain: 'ふあんもありますが、こうかいしないようにえらびました。',
            romaji: 'fuan mo arimasu ga, koukai shinai you ni erabimashita.',
            cn: '虽然也有不安，但为了不后悔做了选择。',
          },
          {
            jp: '<ruby>変化<rt>へんか</rt></ruby>を<ruby>恐<rt>おそ</rt></ruby>れず、<ruby>前<rt>まえ</rt></ruby>へ<ruby>進<rt>すす</rt></ruby>みたいです。',
            plain: 'へんかをおそれず、まえへすすみたいです。',
            romaji: 'henka o osorezu, mae e susumitai desu.',
            cn: '不畏惧变化，想向前迈进。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '友達同士が人生の大事な決定について話している。',
        cn: '朋友间讨论人生的重大决定。',
      },
      lines: [
        {
          speaker: '山田',
          jp: '<ruby>実<rt>じつ</rt></ruby>は、<ruby>来年<rt>らいねん</rt></ruby><ruby>結婚<rt>けっこん</rt></ruby>することになったんだ。',
          plain: 'じつは、らいねんけっこんすることになったんだ。',
          romaji: 'jitsu wa, rainen kekkon suru koto ni natta n da.',
          cn: '其实，明年要结婚了。',
        },
        {
          speaker: '鈴木',
          jp: 'えっ、<ruby>本当<rt>ほんとう</rt></ruby>。おめでとう。',
          plain: 'えっ、ほんとう。おめでとう。',
          romaji: 'e, hontou. omedetou.',
          cn: '欸，真的吗？恭喜！',
        },
        {
          speaker: '山田',
          jp: '<ruby>式<rt>しき</rt></ruby>は<ruby>京都<rt>きょうと</rt></ruby>で<ruby>挙<rt>あ</rt></ruby>げることにしたよ。',
          plain: 'しきはきょうとであげることにしたよ。',
          romaji: 'shiki wa Kyouto de ageru koto ni shita yo.',
          cn: '婚礼决定在京都办。',
        },
        {
          speaker: '鈴木',
          jp: 'いいね。<ruby>京都<rt>きょうと</rt></ruby>はずっと<ruby>好<rt>す</rt></ruby>きだったよね。',
          plain: 'いいね。きょうとはずっとすきだったよね。',
          romaji: 'ii ne. Kyouto wa zutto suki datta yo ne.',
          cn: '不错啊。你一直喜欢京都吧。',
        },
        {
          speaker: '山田',
          jp: 'うん。<ruby>新生活<rt>しんせいかつ</rt></ruby>のために、<ruby>家<rt>いえ</rt></ruby>も<ruby>探<rt>さが</rt></ruby>すことになっている。',
          plain: 'うん。しんせいかつのために、いえもさがすことになっている。',
          romaji: 'un. shinseikatsu no tame ni, ie mo sagasu koto ni natteiru.',
          cn: '嗯。为了新生活，房子也要找。',
        },
        {
          speaker: '鈴木',
          jp: '<ruby>忙<rt>いそが</rt></ruby>しくなりそうだね。<ruby>無理<rt>むり</rt></ruby>しないようにね。',
          plain: 'いそがしくなりそうだね。むりしないようにね。',
          romaji: 'isogashiku narisou da ne. muri shinai you ni ne.',
          cn: '看来要变忙了。别太勉强。',
        },
        {
          speaker: '山田',
          jp: 'ありがとう。<ruby>君<rt>きみ</rt></ruby>にも<ruby>必<rt>かなら</rt></ruby>ず<ruby>来<rt>き</rt></ruby>てもらえるようにする。',
          plain: 'ありがとう。きみにもかならずきてもらえるようにする。',
          romaji: 'arigatou. kimi ni mo kanarazu kite moraeru you ni suru.',
          cn: '谢谢。一定让你也来。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>主人公<rt>しゅじんこう</rt></ruby>は<ruby>三年<rt>さんねん</rt></ruby>でどう<ruby>変<rt>か</rt></ruby>わりましたか。',
          plain: 'しゅじんこうはさんねんでどうかわりましたか。',
          romaji: 'shujinkou wa san-nen de dou kawarimashita ka.',
          cn: '主人公三年内有了什么变化？',
        },
        a: {
          jp: '<ruby>友達<rt>ともだち</rt></ruby>と<ruby>自然<rt>しぜん</rt></ruby>に<ruby>話<rt>はな</rt></ruby>せるようになりました。',
          plain: 'ともだちとしぜんにはなせるようになりました。',
          romaji: 'tomodachi to shizen ni hanaseru you ni narimashita.',
          cn: '能和朋友自然地说话了。',
        },
      },
      {
        q: {
          jp: 'なぜ<ruby>会社<rt>かいしゃ</rt></ruby>を<ruby>辞<rt>や</rt></ruby>めることにしましたか。',
          plain: 'なぜかいしゃをやめることにしましたか。',
          romaji: 'naze kaisha o yameru koto ni shimashita ka.',
          cn: '为什么决定辞职？',
        },
        a: {
          jp: '<ruby>残業<rt>ざんぎょう</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>いて、<ruby>体<rt>からだ</rt></ruby>が<ruby>持<rt>も</rt></ruby>たなくなったからです。',
          plain: 'ざんぎょうがつづいて、からだがもたなくなったからです。',
          romaji: 'zangyou ga tsuzuite, karada ga motanaku natta kara desu.',
          cn: '因为加班一直持续，身体撑不住了。',
        },
        hint: '「ことにする」是主动决定。',
      },
      {
        q: {
          jp: '<ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>結婚式<rt>けっこんしき</rt></ruby>をどこで<ruby>挙<rt>あ</rt></ruby>げますか。',
          plain: 'やまださんはけっこんしきをどこであげますか。',
          romaji: 'Yamada-san wa kekkonshiki o doko de agemasu ka.',
          cn: '山田在哪里举行婚礼？',
        },
        a: {
          jp: '<ruby>京都<rt>きょうと</rt></ruby>で<ruby>挙<rt>あ</rt></ruby>げることにしました。',
          plain: 'きょうとであげることにしました。',
          romaji: 'Kyouto de ageru koto ni shimashita.',
          cn: '决定在京都举行。',
        },
      },
      {
        q: {
          jp: '<ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>来年<rt>らいねん</rt></ruby>どうなりますか。',
          plain: 'やまださんはらいねんどうなりますか。',
          romaji: 'Yamada-san wa rainen dou narimasu ka.',
          cn: '山田明年会怎样？',
        },
        a: {
          jp: '<ruby>結婚<rt>けっこん</rt></ruby>することになりました。',
          plain: 'けっこんすることになりました。',
          romaji: 'kekkon suru koto ni narimashita.',
          cn: '决定要结婚。',
        },
      },
    ],
    vocabulary: [
      { jp: '過ぎます', kana: 'すぎます', romaji: 'sugimasu', meaning: '过去；超过', pos: '動詞II' },
      { jp: '最初', kana: 'さいしょ', romaji: 'saisho', meaning: '最初', pos: '名詞' },
      { jp: '挨拶', kana: 'あいさつ', romaji: 'aisatsu', meaning: '寒暄', pos: '名詞' },
      { jp: 'うまく', kana: 'うまく', romaji: 'umaku', meaning: '巧妙地', pos: '副詞' },
      { jp: '自然に', kana: 'しぜんに', romaji: 'shizen ni', meaning: '自然地', pos: '副詞' },
      { jp: 'ニュース', kana: 'ニュース', romaji: 'nyuusu', meaning: '新闻', pos: '名詞' },
      { jp: 'だいたい', kana: 'だいたい', romaji: 'daitai', meaning: '大致', pos: '副詞' },
      { jp: '大学院', kana: 'だいがくいん', romaji: 'daigakuin', meaning: '研究生院', pos: '名詞' },
      { jp: '進みます', kana: 'すすみます', romaji: 'susumimasu', meaning: '前进；升入', pos: '動詞I' },
      { jp: '専攻', kana: 'せんこう', romaji: 'senkou', meaning: '专业', pos: '名詞' },
      { jp: '研究', kana: 'けんきゅう', romaji: 'kenkyuu', meaning: '研究', pos: '名詞' },
      { jp: '面接', kana: 'めんせつ', romaji: 'mensetsu', meaning: '面试', pos: '名詞' },
      { jp: '行われます', kana: 'おこなわれます', romaji: 'okonawaremasu', meaning: '被举行', pos: '動詞II' },
      { jp: '緊張します', kana: 'きんちょうします', romaji: 'kinchou shimasu', meaning: '紧张', pos: '動詞III' },
      { jp: '練習します', kana: 'れんしゅうします', romaji: 'renshuu shimasu', meaning: '练习', pos: '動詞III' },
      { jp: '努力', kana: 'どりょく', romaji: 'doryoku', meaning: '努力', pos: '名詞' },
      { jp: '結果', kana: 'けっか', romaji: 'kekka', meaning: '结果', pos: '名詞' },
      { jp: '繋がります', kana: 'つながります', romaji: 'tsunagarimasu', meaning: '联系；通向', pos: '動詞I' },
      { jp: '信じます', kana: 'しんじます', romaji: 'shinjimasu', meaning: '相信', pos: '動詞II' },
      { jp: '比べます', kana: 'くらべます', romaji: 'kurabemasu', meaning: '比较', pos: '動詞II' },
      { jp: '悩みます', kana: 'なやみます', romaji: 'nayamimasu', meaning: '苦恼', pos: '動詞I' },
      { jp: '辞めます', kana: 'やめます', romaji: 'yamemasu', meaning: '辞职', pos: '動詞II' },
      { jp: '残業', kana: 'ざんぎょう', romaji: 'zangyou', meaning: '加班', pos: '名詞' },
      { jp: '持ちます', kana: 'もちます', romaji: 'mochimasu', meaning: '撑住；持有', pos: '動詞I' },
      { jp: '話し合います', kana: 'はなしあいます', romaji: 'hanashiaimasu', meaning: '商量', pos: '動詞I' },
      { jp: '道', kana: 'みち', romaji: 'michi', meaning: '路；道路', pos: '名詞' },
      { jp: '探します', kana: 'さがします', romaji: 'sagashimasu', meaning: '寻找', pos: '動詞I' },
      { jp: '給料', kana: 'きゅうりょう', romaji: 'kyuuryou', meaning: '工资', pos: '名詞' },
      { jp: '余裕', kana: 'よゆう', romaji: 'yoyuu', meaning: '余裕', pos: '名詞' },
      { jp: 'ピアノ', kana: 'ピアノ', romaji: 'piano', meaning: '钢琴', pos: '名詞' },
      { jp: '不安', kana: 'ふあん', romaji: 'fuan', meaning: '不安', pos: 'な形容詞' },
      { jp: '後悔します', kana: 'こうかいします', romaji: 'koukai shimasu', meaning: '后悔', pos: '動詞III' },
      { jp: '恐れます', kana: 'おそれます', romaji: 'osoremasu', meaning: '害怕', pos: '動詞II' },
      { jp: '式', kana: 'しき', romaji: 'shiki', meaning: '仪式', pos: '名詞' },
      { jp: '挙げます', kana: 'あげます', romaji: 'agemasu', meaning: '举办', pos: '動詞II' },
      { jp: '新生活', kana: 'しんせいかつ', romaji: 'shinseikatsu', meaning: '新生活', pos: '名詞' },
    ],
    grammar: [
      {
        pattern: 'V る/V ない + ようになる',
        name: '〜ようになる（自然变化）',
        explain: '表示能力、状态、习惯随着时间自然发生变化。多用于「以前不能/不会，现在能/会」。前接可能形（話せる、食べられる）或非意志动词（分かる、聞こえる）。否定形「〜なくなる」表示「变得不再...」。强调过程或结果，主语未必有意识做出这个变化。',
        examples: [
          {
            jp: '<ruby>子供<rt>こども</rt></ruby>が<ruby>一人<rt>ひとり</rt></ruby>で<ruby>歩<rt>ある</rt></ruby>けるようになりました。',
            plain: 'こどもがひとりであるけるようになりました。',
            cn: '孩子能一个人走路了。',
          },
          {
            jp: '<ruby>魚<rt>さかな</rt></ruby>が<ruby>食<rt>た</rt></ruby>べられるようになりました。',
            plain: 'さかながたべられるようになりました。',
            cn: '能吃鱼了。',
          },
        ],
      },
      {
        pattern: 'V る/V ない + ようにする',
        name: '〜ようにする（自我决定/努力）',
        explain: '表示说话人有意识地、主动地去做或不做某事，强调持续的努力。和「ようになる」的区别在于：「なる」是自然变化的结果，「する」是主观选择的行动。「〜ようにしている」表示这个努力正在持续中。',
        examples: [
          {
            jp: '<ruby>毎日<rt>まいにち</rt></ruby><ruby>野菜<rt>やさい</rt></ruby>を<ruby>食<rt>た</rt></ruby>べるようにしています。',
            plain: 'まいにちやさいをたべるようにしています。',
            cn: '坚持每天吃蔬菜。',
          },
        ],
      },
      {
        pattern: 'V る/V ない + ことにする',
        name: '〜ことにする（主动决定）',
        explain: '表示说话人自己做出的某个决定，主体明确是自己。常用于人生选择、改变习惯等场合。「ことにしました」表示决定已经做出，「ことにしている」表示这个决定一直执行着。',
        examples: [
          {
            jp: '<ruby>来月<rt>らいげつ</rt></ruby>から<ruby>朝<rt>あさ</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べることにしました。',
            plain: 'らいげつからあさごはんをたべることにしました。',
            cn: '决定下月开始吃早饭。',
          },
          {
            jp: 'タバコは<ruby>吸<rt>す</rt></ruby>わないことにしています。',
            plain: 'タバコはすわないことにしています。',
            cn: '坚持不抽烟。',
          },
        ],
      },
      {
        pattern: 'V る/V ない + ことになる',
        name: '〜ことになる（被决定/结果）',
        explain: '表示某件事不是说话人主动决定，而是因外部安排、自然趋势、或多人协商导致的结果。常用于通知重大事项。和「ことにする」最大的区别：主体不在自己。即使实际是自己决定，用「ことになる」也能让语气显得更客观、谦和。',
        examples: [
          {
            jp: '<ruby>来月<rt>らいげつ</rt></ruby>、<ruby>大阪<rt>おおさか</rt></ruby>へ<ruby>転勤<rt>てんきん</rt></ruby>することになりました。',
            plain: 'らいげつ、おおさかへてんきんすることになりました。',
            cn: '下月被调到大阪了。',
          },
          {
            jp: '<ruby>会議<rt>かいぎ</rt></ruby>は<ruby>三時<rt>さんじ</rt></ruby>から<ruby>始<rt>はじ</rt></ruby>まることになっています。',
            plain: 'かいぎはさんじからはじまることになっています。',
            cn: '会议定于三点开始。',
          },
        ],
      },
      {
        pattern: 'V て + くる',
        name: '〜てくる（变化的累积）',
        explain: '表示某种变化或状态从过去持续到现在，强调"逐渐变成现在的样子"。常与「だんだん」「少しずつ」搭配。「〜ていく」是相反方向，从现在向未来发展。',
        examples: [
          {
            jp: '<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>分<rt>わ</rt></ruby>かってきました。',
            plain: 'にほんごがわかってきました。',
            cn: '日语渐渐能懂了。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 35 課 — 程度と限定
  // ========================================================
  {
    id: 35,
    level: 'N3',
    title: {
      jp: '程度と限定',
      romaji: 'teido to gentei',
      cn: '程度与限定',
      en: 'Degree and Limitation',
    },
    goals: [
      '掌握「ほど」表示程度的用法',
      '区分「だけ」「しか〜ない」「ばかり」三种限定的语感',
      '能用恰当的限定表达描述生活习惯',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '泣くほど嬉しかった',
          romaji: 'naku hodo ureshikatta',
          cn: '高兴得想哭',
        },
        sentences: [
          {
            jp: '<ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>長<rt>なが</rt></ruby>く<ruby>挑戦<rt>ちょうせん</rt></ruby>していた<ruby>試験<rt>しけん</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>しました。',
            plain: 'せんしゅう、ながくちょうせんしていたしけんにごうかくしました。',
            romaji: 'senshuu, nagaku chousen shiteita shiken ni goukaku shimashita.',
            cn: '上周通过了挑战已久的考试。',
          },
          {
            jp: '<ruby>結果<rt>けっか</rt></ruby>を<ruby>見<rt>み</rt></ruby>た<ruby>瞬間<rt>しゅんかん</rt></ruby>、<ruby>泣<rt>な</rt></ruby>くほど<ruby>嬉<rt>うれ</rt></ruby>しかったです。',
            plain: 'けっかをみたしゅんかん、なくほどうれしかったです。',
            romaji: 'kekka o mita shunkan, naku hodo ureshikatta desu.',
            cn: '看到结果的瞬间，高兴得想哭。',
          },
          {
            jp: 'これほど<ruby>努力<rt>どりょく</rt></ruby>した<ruby>試験<rt>しけん</rt></ruby>は<ruby>初<rt>はじ</rt></ruby>めてでした。',
            plain: 'これほどどりょくしたしけんははじめてでした。',
            romaji: 'kore hodo doryoku shita shiken wa hajimete deshita.',
            cn: '这种程度上努力过的考试是头一次。',
          },
          {
            jp: '<ruby>毎日<rt>まいにち</rt></ruby><ruby>三<rt>さん</rt></ruby><ruby>時間<rt>じかん</rt></ruby>しか<ruby>寝<rt>ね</rt></ruby>られない<ruby>日<rt>ひ</rt></ruby>もありました。',
            plain: 'まいにちさんじかんしかねられないひもありました。',
            romaji: 'mainichi san-jikan shika nerarenai hi mo arimashita.',
            cn: '甚至有过每天只能睡三小时的日子。',
          },
          {
            jp: '<ruby>家族<rt>かぞく</rt></ruby>には<ruby>感謝<rt>かんしゃ</rt></ruby>の<ruby>言葉<rt>ことば</rt></ruby>しかありません。',
            plain: 'かぞくにはかんしゃのことばしかありません。',
            romaji: 'kazoku ni wa kansha no kotoba shika arimasen.',
            cn: '对家人除了感谢没有别的话。',
          },
          {
            jp: '<ruby>合格<rt>ごうかく</rt></ruby>した<ruby>後<rt>あと</rt></ruby>、<ruby>三日<rt>みっか</rt></ruby>だけゆっくり<ruby>休<rt>やす</rt></ruby>みました。',
            plain: 'ごうかくしたあと、みっかだけゆっくりやすみました。',
            romaji: 'goukaku shita ato, mikka dake yukkuri yasumimashita.',
            cn: '考过之后，只悠闲休息了三天。',
          },
          {
            jp: '<ruby>友達<rt>ともだち</rt></ruby>はみんな<ruby>自分<rt>じぶん</rt></ruby>のことのように<ruby>喜<rt>よろこ</rt></ruby>んでくれました。',
            plain: 'ともだちはみんなじぶんのことのようによろこんでくれました。',
            romaji: 'tomodachi wa minna jibun no koto no you ni yorokonde kuremashita.',
            cn: '朋友们都像自己的事一样为我高兴。',
          },
          {
            jp: '<ruby>努力<rt>どりょく</rt></ruby>はうそをつかないというのは、<ruby>本当<rt>ほんとう</rt></ruby>だったと<ruby>感<rt>かん</rt></ruby>じます。',
            plain: 'どりょくはうそをつかないというのは、ほんとうだったとかんじます。',
            romaji: 'doryoku wa uso o tsukanai to iu no wa, hontou datta to kanjimasu.',
            cn: '努力不会撒谎，这话真的不假。',
          },
          {
            jp: '<ruby>今<rt>いま</rt></ruby>はこの<ruby>気持<rt>きも</rt></ruby>ちを<ruby>言葉<rt>ことば</rt></ruby>では<ruby>表<rt>あらわ</rt></ruby>せないほど<ruby>幸<rt>しあわ</rt></ruby>せです。',
            plain: 'いまはこのきもちをことばではあらわせないほどしあわせです。',
            romaji: 'ima wa kono kimochi o kotoba de wa arawasenai hodo shiawase desu.',
            cn: '现在幸福得无法用言语表达。',
          },
          {
            jp: '<ruby>次<rt>つぎ</rt></ruby>はこれで<ruby>満足<rt>まんぞく</rt></ruby>するのではなく、<ruby>次<rt>つぎ</rt></ruby>の<ruby>目標<rt>もくひょう</rt></ruby>に<ruby>向<rt>む</rt></ruby>かいます。',
            plain: 'つぎはこれでまんぞくするのではなく、つぎのもくひょうにむかいます。',
            romaji: 'tsugi wa kore de manzoku suru no de wa naku, tsugi no mokuhyou ni mukaimasu.',
            cn: '下一步不止步于此，要朝下一个目标前进。',
          },
          {
            jp: 'この<ruby>経験<rt>けいけん</rt></ruby>は<ruby>一生<rt>いっしょう</rt></ruby><ruby>忘<rt>わす</rt></ruby>れません。',
            plain: 'このけいけんはいっしょうわすれません。',
            romaji: 'kono keiken wa isshou wasuremasen.',
            cn: '这个经历一辈子忘不了。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '甘いものばかり食べる',
          romaji: 'amai mono bakari taberu',
          cn: '光吃甜食',
        },
        sentences: [
          {
            jp: '<ruby>最近<rt>さいきん</rt></ruby>、<ruby>甘<rt>あま</rt></ruby>いものばかり<ruby>食<rt>た</rt></ruby>べてしまいます。',
            plain: 'さいきん、あまいものばかりたべてしまいます。',
            romaji: 'saikin, amai mono bakari tabete shimaimasu.',
            cn: '最近光吃甜食。',
          },
          {
            jp: '<ruby>仕事<rt>しごと</rt></ruby>のストレスでチョコレートしか<ruby>食<rt>た</rt></ruby>べたくない<ruby>時<rt>とき</rt></ruby>もあります。',
            plain: 'しごとのストレスでチョコレートしかたべたくないときもあります。',
            romaji: 'shigoto no sutoresu de chokoreeto shika tabetakunai toki mo arimasu.',
            cn: '因工作压力，有时只想吃巧克力。',
          },
          {
            jp: '<ruby>野菜<rt>やさい</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>しだけ<ruby>食<rt>た</rt></ruby>べていますが、<ruby>足<rt>た</rt></ruby>りないほどです。',
            plain: 'やさいはすこしだけたべていますが、たりないほどです。',
            romaji: 'yasai wa sukoshi dake tabeteimasu ga, tarinai hodo desu.',
            cn: '蔬菜只吃一点点，但是不够。',
          },
          {
            jp: '<ruby>体重<rt>たいじゅう</rt></ruby>がびっくりするほど<ruby>増<rt>ふ</rt></ruby>えてしまいました。',
            plain: 'たいじゅうがびっくりするほどふえてしまいました。',
            romaji: 'taijuu ga bikkuri suru hodo fuete shimaimashita.',
            cn: '体重增加到让人吃惊的程度。',
          },
          {
            jp: '<ruby>母<rt>はは</rt></ruby>に「お<ruby>菓子<rt>かし</rt></ruby>ばかり<ruby>食<rt>た</rt></ruby>べないで」とよく<ruby>注意<rt>ちゅうい</rt></ruby>されます。',
            plain: 'ははに「おかしばかりたべないで」とよくちゅういされます。',
            romaji: 'haha ni "okashi bakari tabenai de" to yoku chuui saremasu.',
            cn: '常被妈妈提醒「别光吃零食」。',
          },
          {
            jp: '<ruby>明日<rt>あした</rt></ruby>からは<ruby>果物<rt>くだもの</rt></ruby>とお<ruby>茶<rt>ちゃ</rt></ruby>だけにしようと<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'あしたからはくだものとおちゃだけにしようとおもいます。',
            romaji: 'ashita kara wa kudamono to ocha dake ni shiyou to omoimasu.',
            cn: '打算从明天起只吃水果和茶。',
          },
          {
            jp: '<ruby>習慣<rt>しゅうかん</rt></ruby>を<ruby>変<rt>か</rt></ruby>えるのは<ruby>思<rt>おも</rt></ruby>っていたほど<ruby>簡単<rt>かんたん</rt></ruby>ではありません。',
            plain: 'しゅうかんをかえるのはおもっていたほどかんたんではありません。',
            romaji: 'shuukan o kaeru no wa omotteita hodo kantan de wa arimasen.',
            cn: '改变习惯没有想象中那么简单。',
          },
          {
            jp: 'でも、<ruby>少<rt>すこ</rt></ruby>しずつ<ruby>変<rt>か</rt></ruby>えていくしかないと<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'でも、すこしずつかえていくしかないとおもいます。',
            romaji: 'demo, sukoshi zutsu kaete iku shika nai to omoimasu.',
            cn: '但是只能慢慢改变。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '友達同士が互いの生活習慣を吐露している。',
        cn: '朋友间互相吐槽生活习惯。',
      },
      lines: [
        {
          speaker: '佐藤',
          jp: '<ruby>最近<rt>さいきん</rt></ruby>、<ruby>夜<rt>よる</rt></ruby><ruby>中<rt>じゅう</rt></ruby>ゲームばかりしてる。',
          plain: 'さいきん、よるじゅうゲームばかりしてる。',
          romaji: 'saikin, yoru-juu geemu bakari shiteru.',
          cn: '最近整晚都在打游戏。',
        },
        {
          speaker: '田中',
          jp: 'えっ、<ruby>三時間<rt>さんじかん</rt></ruby>しか<ruby>寝<rt>ね</rt></ruby>てない<ruby>日<rt>ひ</rt></ruby>もあるって<ruby>聞<rt>き</rt></ruby>いたよ。',
          plain: 'えっ、さんじかんしかねてないひもあるってきいたよ。',
          romaji: 'e, san-jikan shika netenai hi mo aru tte kiita yo.',
          cn: '欸，听说有时只睡三小时。',
        },
        {
          speaker: '佐藤',
          jp: 'うん、これはまずいほど<ruby>体調<rt>たいちょう</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>くなってる。',
          plain: 'うん、これはまずいほどたいちょうがわるくなってる。',
          romaji: 'un, kore wa mazui hodo taichou ga waruku natteru.',
          cn: '嗯，糟糕到身体状况变差。',
        },
        {
          speaker: '田中',
          jp: '<ruby>私<rt>わたし</rt></ruby>もコーヒーばかり<ruby>飲<rt>の</rt></ruby>んでる。<ruby>水<rt>みず</rt></ruby>はほとんど<ruby>飲<rt>の</rt></ruby>んでない。',
          plain: 'わたしもコーヒーばかりのんでる。みずはほとんどのんでない。',
          romaji: 'watashi mo koohii bakari nonderu. mizu wa hotondo nondenai.',
          cn: '我也是光喝咖啡。水几乎没喝。',
        },
        {
          speaker: '佐藤',
          jp: '<ruby>二人<rt>ふたり</rt></ruby>とも<ruby>反省<rt>はんせい</rt></ruby>するしかないね。',
          plain: 'ふたりともはんせいするしかないね。',
          romaji: 'futari tomo hansei suru shika nai ne.',
          cn: '我们俩只能反省了。',
        },
        {
          speaker: '田中',
          jp: '<ruby>明日<rt>あした</rt></ruby>から<ruby>一日<rt>いちにち</rt></ruby><ruby>一<rt>いち</rt></ruby>リットルだけ<ruby>水<rt>みず</rt></ruby>を<ruby>飲<rt>の</rt></ruby>むようにしよう。',
          plain: 'あしたからいちにちいちリットルだけみずをのむようにしよう。',
          romaji: 'ashita kara ichinichi ichi-rittoru dake mizu o nomu you ni shiyou.',
          cn: '明天起每天至少喝一升水吧。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>主人公<rt>しゅじんこう</rt></ruby>は<ruby>合格<rt>ごうかく</rt></ruby>した<ruby>時<rt>とき</rt></ruby>、どれぐらい<ruby>嬉<rt>うれ</rt></ruby>しかったですか。',
          plain: 'しゅじんこうはごうかくしたとき、どれぐらいうれしかったですか。',
          romaji: 'shujinkou wa goukaku shita toki, doregurai ureshikatta desu ka.',
          cn: '主人公考过时有多高兴？',
        },
        a: {
          jp: '<ruby>泣<rt>な</rt></ruby>くほど<ruby>嬉<rt>うれ</rt></ruby>しかったです。',
          plain: 'なくほどうれしかったです。',
          romaji: 'naku hodo ureshikatta desu.',
          cn: '高兴得想哭。',
        },
        hint: '「ほど」表程度。',
      },
      {
        q: {
          jp: '<ruby>主人公<rt>しゅじんこう</rt></ruby>は<ruby>休<rt>やす</rt></ruby>みを<ruby>何日<rt>なんにち</rt></ruby><ruby>取<rt>と</rt></ruby>りましたか。',
          plain: 'しゅじんこうはやすみをなんにちとりましたか。',
          romaji: 'shujinkou wa yasumi o nan-nichi torimashita ka.',
          cn: '主人公休息了几天？',
        },
        a: {
          jp: '<ruby>三日<rt>みっか</rt></ruby>だけ<ruby>休<rt>やす</rt></ruby>みました。',
          plain: 'みっかだけやすみました。',
          romaji: 'mikka dake yasumimashita.',
          cn: '只休息了三天。',
        },
      },
      {
        q: {
          jp: '<ruby>佐藤<rt>さとう</rt></ruby>さんは<ruby>最近<rt>さいきん</rt></ruby>どうしていますか。',
          plain: 'さとうさんはさいきんどうしていますか。',
          romaji: 'Satou-san wa saikin dou shiteimasu ka.',
          cn: '佐藤最近怎么样？',
        },
        a: {
          jp: '<ruby>夜<rt>よる</rt></ruby><ruby>中<rt>じゅう</rt></ruby>ゲームばかりしています。',
          plain: 'よるじゅうゲームばかりしています。',
          romaji: 'yoru-juu geemu bakari shiteimasu.',
          cn: '整晚光打游戏。',
        },
      },
      {
        q: {
          jp: '<ruby>習慣<rt>しゅうかん</rt></ruby>を<ruby>変<rt>か</rt></ruby>えるのはどうですか。',
          plain: 'しゅうかんをかえるのはどうですか。',
          romaji: 'shuukan o kaeru no wa dou desu ka.',
          cn: '改变习惯怎么样？',
        },
        a: {
          jp: '<ruby>思<rt>おも</rt></ruby>っていたほど<ruby>簡単<rt>かんたん</rt></ruby>ではありません。',
          plain: 'おもっていたほどかんたんではありません。',
          romaji: 'omotteita hodo kantan de wa arimasen.',
          cn: '没有想象中那么简单。',
        },
      },
    ],
    vocabulary: [
      { jp: '挑戦します', kana: 'ちょうせんします', romaji: 'chousen shimasu', meaning: '挑战', pos: '動詞III' },
      { jp: '試験', kana: 'しけん', romaji: 'shiken', meaning: '考试', pos: '名詞' },
      { jp: '合格します', kana: 'ごうかくします', romaji: 'goukaku shimasu', meaning: '及格', pos: '動詞III' },
      { jp: '瞬間', kana: 'しゅんかん', romaji: 'shunkan', meaning: '瞬间', pos: '名詞' },
      { jp: '泣きます', kana: 'なきます', romaji: 'nakimasu', meaning: '哭', pos: '動詞I' },
      { jp: '嬉しい', kana: 'うれしい', romaji: 'ureshii', meaning: '高兴', pos: 'い形容詞' },
      { jp: '寝ます', kana: 'ねます', romaji: 'nemasu', meaning: '睡觉', pos: '動詞II' },
      { jp: '感謝', kana: 'かんしゃ', romaji: 'kansha', meaning: '感谢', pos: '名詞' },
      { jp: '言葉', kana: 'ことば', romaji: 'kotoba', meaning: '语言；话', pos: '名詞' },
      { jp: '喜びます', kana: 'よろこびます', romaji: 'yorokobimasu', meaning: '高兴', pos: '動詞I' },
      { jp: '表します', kana: 'あらわします', romaji: 'arawashimasu', meaning: '表达', pos: '動詞I' },
      { jp: '満足します', kana: 'まんぞくします', romaji: 'manzoku shimasu', meaning: '满足', pos: '動詞III' },
      { jp: '目標', kana: 'もくひょう', romaji: 'mokuhyou', meaning: '目标', pos: '名詞' },
      { jp: '向かいます', kana: 'むかいます', romaji: 'mukaimasu', meaning: '面向；前往', pos: '動詞I' },
      { jp: '経験', kana: 'けいけん', romaji: 'keiken', meaning: '经验', pos: '名詞' },
      { jp: '一生', kana: 'いっしょう', romaji: 'isshou', meaning: '一辈子', pos: '名詞' },
      { jp: '甘い', kana: 'あまい', romaji: 'amai', meaning: '甜', pos: 'い形容詞' },
      { jp: 'チョコレート', kana: 'チョコレート', romaji: 'chokoreeto', meaning: '巧克力', pos: '名詞' },
      { jp: '足ります', kana: 'たります', romaji: 'tarimasu', meaning: '足够', pos: '動詞I' },
      { jp: '体重', kana: 'たいじゅう', romaji: 'taijuu', meaning: '体重', pos: '名詞' },
      { jp: 'びっくりします', kana: 'びっくりします', romaji: 'bikkuri shimasu', meaning: '吃惊', pos: '動詞III' },
      { jp: '増えます', kana: 'ふえます', romaji: 'fuemasu', meaning: '增加', pos: '動詞II' },
      { jp: 'お菓子', kana: 'おかし', romaji: 'okashi', meaning: '点心', pos: '名詞' },
      { jp: '注意します', kana: 'ちゅういします', romaji: 'chuui shimasu', meaning: '提醒；注意', pos: '動詞III' },
      { jp: '果物', kana: 'くだもの', romaji: 'kudamono', meaning: '水果', pos: '名詞' },
      { jp: 'お茶', kana: 'おちゃ', romaji: 'ocha', meaning: '茶', pos: '名詞' },
      { jp: 'ゲーム', kana: 'ゲーム', romaji: 'geemu', meaning: '游戏', pos: '名詞' },
      { jp: 'まずい', kana: 'まずい', romaji: 'mazui', meaning: '糟糕；难吃', pos: 'い形容詞' },
      { jp: '反省します', kana: 'はんせいします', romaji: 'hansei shimasu', meaning: '反省', pos: '動詞III' },
      { jp: 'リットル', kana: 'リットル', romaji: 'rittoru', meaning: '升', pos: '名詞' },
      { jp: '夜中', kana: 'よるじゅう', romaji: 'yoru-juu', meaning: '整晚', pos: '名詞' },
    ],
    grammar: [
      {
        pattern: 'V る/N + ほど〜',
        name: '〜ほど（程度）',
        explain: '表示某事达到的程度。前接动词或名词，表示「...的程度」。常用搭配「〜ほど〜ない」表示「没有...那么...」（比较）。「思っていたほど〜ない」=「没有想象中那么...」。还能用「これほど」「どれほど」等指示性表达。',
        examples: [
          {
            jp: '<ruby>歩<rt>ある</rt></ruby>けないほど<ruby>疲<rt>つか</rt></ruby>れました。',
            plain: 'あるけないほどつかれました。',
            cn: '累得走不动。',
          },
          {
            jp: '<ruby>東京<rt>とうきょう</rt></ruby>ほど<ruby>大<rt>おお</rt></ruby>きい<ruby>町<rt>まち</rt></ruby>はありません。',
            plain: 'とうきょうほどおおきいまちはありません。',
            cn: '没有像东京那么大的城市。',
          },
        ],
      },
      {
        pattern: 'N + だけ',
        name: '〜だけ（中性限定）',
        explain: '表示「只...」的中性表达，没有特别的语感倾向。可以接名词、动词原形、形容词等。和「しか〜ない」相比，「だけ」可与肯定句搭配，单纯描述数量或范围。',
        examples: [
          {
            jp: '<ruby>少<rt>すこ</rt></ruby>しだけください。',
            plain: 'すこしだけください。',
            cn: '请给我一点点就好。',
          },
        ],
      },
      {
        pattern: 'N + しか〜ない',
        name: '〜しか〜ない（消极限定）',
        explain: '表示「只...（不够，遗憾）」的消极语感，必须与否定形搭配。说话人觉得数量少、不够、令人遗憾。和「だけ」的最大区别：「だけ」中性，「しか〜ない」带消极感。「三人だけ来た」=「来了三人」（中性）；「三人しか来なかった」=「只来了三人」（嫌少）。',
        examples: [
          {
            jp: '<ruby>千円<rt>せんえん</rt></ruby>しかありません。',
            plain: 'せんえんしかありません。',
            cn: '只有一千日元（不够）。',
          },
        ],
      },
      {
        pattern: 'N + ばかり / V て + ばかりいる',
        name: '〜ばかり（光是，过多）',
        explain: '表示「光是...，老是...」，带有说话人觉得「过多/偏颇」的负面评价。和「だけ」「しか〜ない」的客观限定不同，「ばかり」强调主观判断「这种行为偏多了」。「テレビばかり見ている」=「光看电视」（暗含批评）。',
        examples: [
          {
            jp: '<ruby>遊<rt>あそ</rt></ruby>んでばかりいないで、<ruby>勉強<rt>べんきょう</rt></ruby>しなさい。',
            plain: 'あそんでばかりいないで、べんきょうしなさい。',
            cn: '别光玩了，去学习。',
          },
        ],
      },
      {
        pattern: 'V る + しかない',
        name: '〜しかない（只能...）',
        explain: '动词原形 + 「しかない」表示「除了...别无他法」，是「しか〜ない」的延伸用法。常用于无奈、不情愿但必须做的语境。',
        examples: [
          {
            jp: '<ruby>頑張<rt>がんば</rt></ruby>るしかない。',
            plain: 'がんばるしかない。',
            cn: '只能加油。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 36 課 — 列挙と対比
  // ========================================================
  {
    id: 36,
    level: 'N3',
    title: {
      jp: '列挙と対比',
      romaji: 'rekkyo to taihi',
      cn: '列举与对比',
      en: 'Listing and Contrast',
    },
    goals: [
      '掌握「たり〜たり」「とか〜とか」两种列举的语感差异',
      '能用「一方で」「に対して」做对比表达',
      '能描述休假活动并比较都市与乡村',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '休みの日は',
          romaji: 'yasumi no hi wa',
          cn: '休息日的时候',
        },
        sentences: [
          {
            jp: '<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>は<ruby>家<rt>いえ</rt></ruby>でゆっくりすることが<ruby>多<rt>おお</rt></ruby>いです。',
            plain: 'やすみのひはいえでゆっくりすることがおおいです。',
            romaji: 'yasumi no hi wa ie de yukkuri suru koto ga ooi desu.',
            cn: '休息日大多在家悠闲度过。',
          },
          {
            jp: '<ruby>朝<rt>あさ</rt></ruby>はコーヒーを<ruby>飲<rt>の</rt></ruby>んだり、<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んだりしています。',
            plain: 'あさはコーヒーをのんだり、ほんをよんだりしています。',
            romaji: 'asa wa koohii o nondari, hon o yondari shiteimasu.',
            cn: '早上喝咖啡或读书等。',
          },
          {
            jp: '<ruby>午後<rt>ごご</rt></ruby>は<ruby>散歩<rt>さんぽ</rt></ruby>に<ruby>行<rt>い</rt></ruby>ったり、<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>たりします。',
            plain: 'ごごはさんぽにいったり、えいがをみたりします。',
            romaji: 'gogo wa sanpo ni ittari, eiga o mitari shimasu.',
            cn: '下午会散步、看电影等。',
          },
          {
            jp: '<ruby>友達<rt>ともだち</rt></ruby>と<ruby>会<rt>あ</rt></ruby>う<ruby>時<rt>とき</rt></ruby>はカフェとかレストランとかで<ruby>話<rt>はな</rt></ruby>します。',
            plain: 'ともだちとあうときはカフェとかレストランとかではなします。',
            romaji: 'tomodachi to au toki wa kafe toka resutoran toka de hanashimasu.',
            cn: '和朋友见面时在咖啡店或餐厅聊天。',
          },
          {
            jp: '<ruby>一人<rt>ひとり</rt></ruby>で<ruby>過<rt>す</rt></ruby>ごす<ruby>時間<rt>じかん</rt></ruby>も<ruby>大切<rt>たいせつ</rt></ruby>にしています。',
            plain: 'ひとりですごすじかんもたいせつにしています。',
            romaji: 'hitori de sugosu jikan mo taisetsu ni shiteimasu.',
            cn: '也很珍惜一个人度过的时间。',
          },
          {
            jp: '<ruby>平日<rt>へいじつ</rt></ruby>はとても<ruby>忙<rt>いそが</rt></ruby>しい<ruby>一方<rt>いっぽう</rt></ruby>で、<ruby>週末<rt>しゅうまつ</rt></ruby>はゆっくり<ruby>休<rt>やす</rt></ruby>みたいです。',
            plain: 'へいじつはとてもいそがしいいっぽうで、しゅうまつはゆっくりやすみたいです。',
            romaji: 'heijitsu wa totemo isogashii ippou de, shuumatsu wa yukkuri yasumitai desu.',
            cn: '平日很忙，另一方面周末想好好休息。',
          },
          {
            jp: '<ruby>仕事<rt>しごと</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<ruby>休<rt>やす</rt></ruby>みは<ruby>心<rt>こころ</rt></ruby>を<ruby>整<rt>ととの</rt></ruby>える<ruby>時間<rt>じかん</rt></ruby>です。',
            plain: 'しごとにたいしてやすみはこころをととのえるじかんです。',
            romaji: 'shigoto ni taishite yasumi wa kokoro o totonoeru jikan desu.',
            cn: '相对于工作，休息是整理心情的时间。',
          },
          {
            jp: '<ruby>時<rt>とき</rt></ruby>には<ruby>遠<rt>とお</rt></ruby>くへ<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>ったりもします。',
            plain: 'ときにはとおくへりょこうにいったりもします。',
            romaji: 'toki ni wa tooku e ryokou ni ittari mo shimasu.',
            cn: '有时也会去远方旅行。',
          },
          {
            jp: '<ruby>新<rt>あたら</rt></ruby>しい<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>見<rt>み</rt></ruby>ると、<ruby>気持<rt>きも</rt></ruby>ちがリフレッシュされます。',
            plain: 'あたらしいばしょをみると、きもちがリフレッシュされます。',
            romaji: 'atarashii basho o miru to, kimochi ga rifuresshu saremasu.',
            cn: '看到新地方，心情得到放松。',
          },
          {
            jp: '<ruby>都会<rt>とかい</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>に<ruby>疲<rt>つか</rt></ruby>れた<ruby>時<rt>とき</rt></ruby>は<ruby>田舎<rt>いなか</rt></ruby>へ<ruby>逃<rt>に</rt></ruby>げたくなります。',
            plain: 'とかいのせいかつにつかれたときはいなかへにげたくなります。',
            romaji: 'tokai no seikatsu ni tsukareta toki wa inaka e nigetaku narimasu.',
            cn: '厌倦都市生活时，想逃到乡下。',
          },
          {
            jp: '<ruby>休<rt>やす</rt></ruby>みの<ruby>過<rt>す</rt></ruby>ごし<ruby>方<rt>かた</rt></ruby>は<ruby>人<rt>ひと</rt></ruby>それぞれですが、<ruby>大切<rt>たいせつ</rt></ruby>なのは<ruby>自分<rt>じぶん</rt></ruby>に<ruby>合<rt>あ</rt></ruby>うやり<ruby>方<rt>かた</rt></ruby>を<ruby>見<rt>み</rt></ruby>つけることです。',
            plain: 'やすみのすごしかたはひとそれぞれですが、たいせつなのはじぶんにあうやりかたをみつけることです。',
            romaji: 'yasumi no sugoshi-kata wa hito sorezore desu ga, taisetsu na no wa jibun ni au yari-kata o mitsukeru koto desu.',
            cn: '休息方式因人而异，重要的是找到适合自己的方式。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '都会と田舎',
          romaji: 'tokai to inaka',
          cn: '都市与乡村',
        },
        sentences: [
          {
            jp: '<ruby>都会<rt>とかい</rt></ruby>と<ruby>田舎<rt>いなか</rt></ruby>はそれぞれ<ruby>違<rt>ちが</rt></ruby>った<ruby>魅力<rt>みりょく</rt></ruby>があります。',
            plain: 'とかいといなかはそれぞれちがったみりょくがあります。',
            romaji: 'tokai to inaka wa sorezore chigatta miryoku ga arimasu.',
            cn: '都市和乡村各有不同的魅力。',
          },
          {
            jp: '<ruby>都会<rt>とかい</rt></ruby>は<ruby>便利<rt>べんり</rt></ruby>な<ruby>一方<rt>いっぽう</rt></ruby>で、<ruby>人<rt>ひと</rt></ruby>が<ruby>多<rt>おお</rt></ruby>くて<ruby>疲<rt>つか</rt></ruby>れます。',
            plain: 'とかいはべんりないっぽうで、ひとがおおくてつかれます。',
            romaji: 'tokai wa benri na ippou de, hito ga ookute tsukaremasu.',
            cn: '都市方便的一方面，人多让人疲倦。',
          },
          {
            jp: '<ruby>田舎<rt>いなか</rt></ruby>は<ruby>静<rt>しず</rt></ruby>かに<ruby>対<rt>たい</rt></ruby>して、<ruby>店<rt>みせ</rt></ruby>や<ruby>交通<rt>こうつう</rt></ruby>が<ruby>少<rt>すく</rt></ruby>ない<ruby>不便<rt>ふべん</rt></ruby>さもあります。',
            plain: 'いなかはしずかにたいして、みせやこうつうがすくないふべんさもあります。',
            romaji: 'inaka wa shizuka ni taishite, mise ya koutsuu ga sukunai fuben-sa mo arimasu.',
            cn: '相对于乡村的安静，店铺和交通少的不便也存在。',
          },
          {
            jp: '<ruby>都会<rt>とかい</rt></ruby>では<ruby>地下鉄<rt>ちかてつ</rt></ruby>とかバスとかで<ruby>移動<rt>いどう</rt></ruby>します。',
            plain: 'とかいではちかてつとかバスとかでいどうします。',
            romaji: 'tokai de wa chikatetsu toka basu toka de idou shimasu.',
            cn: '都市里用地铁或巴士等交通。',
          },
          {
            jp: '<ruby>田舎<rt>いなか</rt></ruby>では<ruby>車<rt>くるま</rt></ruby>がないと<ruby>生活<rt>せいかつ</rt></ruby>できないほどです。',
            plain: 'いなかではくるまがないとせいかつできないほどです。',
            romaji: 'inaka de wa kuruma ga nai to seikatsu dekinai hodo desu.',
            cn: '乡下到没有车就生活不下去的程度。',
          },
          {
            jp: '<ruby>都会<rt>とかい</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>は<ruby>明<rt>あか</rt></ruby>るく、<ruby>田舎<rt>いなか</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>は<ruby>星<rt>ほし</rt></ruby>がきれいです。',
            plain: 'とかいのよるはあかるく、いなかのよるはほしがきれいです。',
            romaji: 'tokai no yoru wa akaruku, inaka no yoru wa hoshi ga kirei desu.',
            cn: '都市的夜晚明亮，乡下的夜晚星星美丽。',
          },
          {
            jp: '<ruby>都会<rt>とかい</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<ruby>田舎<rt>いなか</rt></ruby>は<ruby>人<rt>ひと</rt></ruby>と<ruby>人<rt>ひと</rt></ruby>の<ruby>距離<rt>きょり</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>いです。',
            plain: 'とかいにたいしていなかはひととひとのきょりがちかいです。',
            romaji: 'tokai ni taishite inaka wa hito to hito no kyori ga chikai desu.',
            cn: '相对于都市，乡下人与人的距离近。',
          },
          {
            jp: '<ruby>結局<rt>けっきょく</rt></ruby>、どちらが<ruby>良<rt>い</rt></ruby>いかは<ruby>自分<rt>じぶん</rt></ruby>の<ruby>価値観<rt>かちかん</rt></ruby>によります。',
            plain: 'けっきょく、どちらがいいかはじぶんのかちかんによります。',
            romaji: 'kekkyoku, dochira ga ii ka wa jibun no kachikan ni yorimasu.',
            cn: '归根结底，哪个好取决于自己的价值观。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '友達が週末の予定について話している。',
        cn: '朋友讨论周末的安排。',
      },
      lines: [
        {
          speaker: '高橋',
          jp: '<ruby>今週<rt>こんしゅう</rt></ruby>の<ruby>週末<rt>しゅうまつ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をする。',
          plain: 'こんしゅうのしゅうまつはなにをする。',
          romaji: 'konshuu no shuumatsu wa nani o suru.',
          cn: '这周末做什么？',
        },
        {
          speaker: '中村',
          jp: '<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>たり、<ruby>友達<rt>ともだち</rt></ruby>と<ruby>食事<rt>しょくじ</rt></ruby>したりするつもり。',
          plain: 'えいがをみたり、ともだちとしょくじしたりするつもり。',
          romaji: 'eiga o mitari, tomodachi to shokuji shitari suru tsumori.',
          cn: '打算看电影、和朋友吃饭等。',
        },
        {
          speaker: '高橋',
          jp: '<ruby>私<rt>わたし</rt></ruby>は<ruby>山<rt>やま</rt></ruby>に<ruby>行<rt>い</rt></ruby>くか、<ruby>海<rt>うみ</rt></ruby>に<ruby>行<rt>い</rt></ruby>くか<ruby>迷<rt>まよ</rt></ruby>っている。',
          plain: 'わたしはやまにいくか、うみにいくかまよっている。',
          romaji: 'watashi wa yama ni iku ka, umi ni iku ka mayotteiru.',
          cn: '我在犹豫去山里还是去海边。',
        },
        {
          speaker: '中村',
          jp: '<ruby>山<rt>やま</rt></ruby>は<ruby>静<rt>しず</rt></ruby>かなのに<ruby>対<rt>たい</rt></ruby>して、<ruby>海<rt>うみ</rt></ruby>はにぎやかだよね。',
          plain: 'やまはしずかなのにたいして、うみはにぎやかだよね。',
          romaji: 'yama wa shizuka na no ni taishite, umi wa nigiyaka da yo ne.',
          cn: '山安静，相对地海边热闹呢。',
        },
        {
          speaker: '高橋',
          jp: '<ruby>気分転換<rt>きぶんてんかん</rt></ruby>したいから、にぎやかな<ruby>方<rt>ほう</rt></ruby>がいいかも。',
          plain: 'きぶんてんかんしたいから、にぎやかなほうがいいかも。',
          romaji: 'kibun-tenkan shitai kara, nigiyaka na hou ga ii kamo.',
          cn: '想换个心情，所以热闹的更好吧。',
        },
        {
          speaker: '中村',
          jp: 'じゃあ、<ruby>海<rt>うみ</rt></ruby>で<ruby>泳<rt>およ</rt></ruby>いだり、シーフードを<ruby>食<rt>た</rt></ruby>べたりするのは。',
          plain: 'じゃあ、うみでおよいだり、シーフードをたべたりするのは。',
          romaji: 'jaa, umi de oyoidari, shiifuudo o tabetari suru no wa.',
          cn: '那海边游泳、吃海鲜怎么样？',
        },
        {
          speaker: '高橋',
          jp: 'いいね。それにする。',
          plain: 'いいね。それにする。',
          romaji: 'ii ne. sore ni suru.',
          cn: '不错。就这么定了。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>主人公<rt>しゅじんこう</rt></ruby>は<ruby>朝<rt>あさ</rt></ruby><ruby>何<rt>なに</rt></ruby>をしますか。',
          plain: 'しゅじんこうはあさなにをしますか。',
          romaji: 'shujinkou wa asa nani o shimasu ka.',
          cn: '主人公早上做什么？',
        },
        a: {
          jp: 'コーヒーを<ruby>飲<rt>の</rt></ruby>んだり、<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んだりします。',
          plain: 'コーヒーをのんだり、ほんをよんだりします。',
          romaji: 'koohii o nondari, hon o yondari shimasu.',
          cn: '喝咖啡或读书等。',
        },
      },
      {
        q: {
          jp: '<ruby>都会<rt>とかい</rt></ruby>と<ruby>田舎<rt>いなか</rt></ruby>の<ruby>違<rt>ちが</rt></ruby>いは<ruby>何<rt>なん</rt></ruby>ですか。',
          plain: 'とかいといなかのちがいはなんですか。',
          romaji: 'tokai to inaka no chigai wa nan desu ka.',
          cn: '都市和乡村的区别是什么？',
        },
        a: {
          jp: '<ruby>都会<rt>とかい</rt></ruby>は<ruby>便利<rt>べんり</rt></ruby>ですが、<ruby>田舎<rt>いなか</rt></ruby>は<ruby>静<rt>しず</rt></ruby>かです。',
          plain: 'とかいはべんりですが、いなかはしずかです。',
          romaji: 'tokai wa benri desu ga, inaka wa shizuka desu.',
          cn: '都市方便，乡下安静。',
        },
      },
      {
        q: {
          jp: '<ruby>高橋<rt>たかはし</rt></ruby>さんは<ruby>週末<rt>しゅうまつ</rt></ruby>どこへ<ruby>行<rt>い</rt></ruby>くことにしましたか。',
          plain: 'たかはしさんはしゅうまつどこへいくことにしましたか。',
          romaji: 'Takahashi-san wa shuumatsu doko e iku koto ni shimashita ka.',
          cn: '高桥决定周末去哪里？',
        },
        a: {
          jp: '<ruby>海<rt>うみ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くことにしました。',
          plain: 'うみへいくことにしました。',
          romaji: 'umi e iku koto ni shimashita.',
          cn: '决定去海边。',
        },
      },
      {
        q: {
          jp: '<ruby>都会<rt>とかい</rt></ruby>では<ruby>何<rt>なに</rt></ruby>で<ruby>移動<rt>いどう</rt></ruby>しますか。',
          plain: 'とかいではなにでいどうしますか。',
          romaji: 'tokai de wa nani de idou shimasu ka.',
          cn: '都市里用什么交通？',
        },
        a: {
          jp: '<ruby>地下鉄<rt>ちかてつ</rt></ruby>とかバスとかで<ruby>移動<rt>いどう</rt></ruby>します。',
          plain: 'ちかてつとかバスとかでいどうします。',
          romaji: 'chikatetsu toka basu toka de idou shimasu.',
          cn: '用地铁或巴士等。',
        },
      },
    ],
    vocabulary: [
      { jp: '散歩', kana: 'さんぽ', romaji: 'sanpo', meaning: '散步', pos: '名詞' },
      { jp: '映画', kana: 'えいが', romaji: 'eiga', meaning: '电影', pos: '名詞' },
      { jp: 'レストラン', kana: 'レストラン', romaji: 'resutoran', meaning: '餐厅', pos: '名詞' },
      { jp: '過ごします', kana: 'すごします', romaji: 'sugoshimasu', meaning: '度过', pos: '動詞I' },
      { jp: '平日', kana: 'へいじつ', romaji: 'heijitsu', meaning: '工作日', pos: '名詞' },
      { jp: '週末', kana: 'しゅうまつ', romaji: 'shuumatsu', meaning: '周末', pos: '名詞' },
      { jp: '整えます', kana: 'ととのえます', romaji: 'totonoemasu', meaning: '整理', pos: '動詞II' },
      { jp: '旅行', kana: 'りょこう', romaji: 'ryokou', meaning: '旅行', pos: '名詞' },
      { jp: 'リフレッシュ', kana: 'リフレッシュ', romaji: 'rifuresshu', meaning: '焕新；放松', pos: '名詞' },
      { jp: '都会', kana: 'とかい', romaji: 'tokai', meaning: '都市', pos: '名詞' },
      { jp: '田舎', kana: 'いなか', romaji: 'inaka', meaning: '乡下', pos: '名詞' },
      { jp: '逃げます', kana: 'にげます', romaji: 'nigemasu', meaning: '逃跑', pos: '動詞II' },
      { jp: 'それぞれ', kana: 'それぞれ', romaji: 'sorezore', meaning: '各自', pos: '副詞' },
      { jp: 'やり方', kana: 'やりかた', romaji: 'yari-kata', meaning: '做法', pos: '名詞' },
      { jp: '見つけます', kana: 'みつけます', romaji: 'mitsukemasu', meaning: '找到', pos: '動詞II' },
      { jp: '魅力', kana: 'みりょく', romaji: 'miryoku', meaning: '魅力', pos: '名詞' },
      { jp: '便利', kana: 'べんり', romaji: 'benri', meaning: '方便', pos: 'な形容詞' },
      { jp: '不便', kana: 'ふべん', romaji: 'fuben', meaning: '不便', pos: 'な形容詞' },
      { jp: '地下鉄', kana: 'ちかてつ', romaji: 'chikatetsu', meaning: '地铁', pos: '名詞' },
      { jp: 'バス', kana: 'バス', romaji: 'basu', meaning: '巴士', pos: '名詞' },
      { jp: '移動します', kana: 'いどうします', romaji: 'idou shimasu', meaning: '移动', pos: '動詞III' },
      { jp: '車', kana: 'くるま', romaji: 'kuruma', meaning: '车', pos: '名詞' },
      { jp: '生活', kana: 'せいかつ', romaji: 'seikatsu', meaning: '生活', pos: '名詞' },
      { jp: '星', kana: 'ほし', romaji: 'hoshi', meaning: '星星', pos: '名詞' },
      { jp: '距離', kana: 'きょり', romaji: 'kyori', meaning: '距离', pos: '名詞' },
      { jp: '結局', kana: 'けっきょく', romaji: 'kekkyoku', meaning: '结果；归根到底', pos: '副詞' },
      { jp: '価値観', kana: 'かちかん', romaji: 'kachikan', meaning: '价值观', pos: '名詞' },
      { jp: '迷います', kana: 'まよいます', romaji: 'mayoimasu', meaning: '犹豫；迷路', pos: '動詞I' },
      { jp: 'にぎやか', kana: 'にぎやか', romaji: 'nigiyaka', meaning: '热闹', pos: 'な形容詞' },
      { jp: '気分転換', kana: 'きぶんてんかん', romaji: 'kibun-tenkan', meaning: '换心情', pos: '名詞' },
      { jp: '泳ぎます', kana: 'およぎます', romaji: 'oyogimasu', meaning: '游泳', pos: '動詞I' },
      { jp: 'シーフード', kana: 'シーフード', romaji: 'shiifuudo', meaning: '海鲜', pos: '名詞' },
    ],
    grammar: [
      {
        pattern: 'V たり、V たり + する',
        name: '〜たり〜たり（举例列举）',
        explain: '动词た形 + り，列举两个或几个代表性动作，暗示「还有其他类似活动」。和单纯的「て形并列」不同：「て形」是按顺序的所有动作，「たり」只是举其中几例。形容词、名词也可用：「忙しかったり、暇だったり」。',
        examples: [
          {
            jp: '<ruby>休<rt>やす</rt></ruby>みは<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んだり、<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>たりします。',
            plain: 'やすみはほんをよんだり、えいがをみたりします。',
            cn: '休息时读书、看电影等。',
          },
        ],
      },
      {
        pattern: 'N + とか + N + とか',
        name: '〜とか〜とか（口语列举）',
        explain: '口语中常用的列举方式，举几个例子，暗示「还有别的」。和「や」类似但更口语。可接名词、动词原形等。',
        examples: [
          {
            jp: 'りんごとかバナナとかが<ruby>好<rt>す</rt></ruby>きです。',
            plain: 'りんごとかバナナとかがすきです。',
            cn: '喜欢苹果、香蕉之类的。',
          },
        ],
      },
      {
        pattern: 'N/A + 一方で、〜',
        name: '〜一方で（对比）',
        explain: '表示「一方面...另一方面...」，用于书面或郑重场合，对比两个事实或两个面向。前后内容形成鲜明对比。和单纯「が」相比更有结构性。',
        examples: [
          {
            jp: '<ruby>都会<rt>とかい</rt></ruby>は<ruby>便利<rt>べんり</rt></ruby>な<ruby>一方<rt>いっぽう</rt></ruby>で、<ruby>家賃<rt>やちん</rt></ruby>が<ruby>高<rt>たか</rt></ruby>いです。',
            plain: 'とかいはべんりないっぽうで、やちんがたかいです。',
            cn: '都市方便，但房租贵。',
          },
        ],
      },
      {
        pattern: 'N + に対して',
        name: '〜に対して（对...；对比）',
        explain: '表示「对...」或对比关系。对比时是中性的、客观的，不带情绪色彩。例：「Aに対してBは...」表示「相对于A，B...」。也可表示对某对象的态度：「先生に対して失礼な態度」。',
        examples: [
          {
            jp: '<ruby>兄<rt>あに</rt></ruby>に<ruby>対<rt>たい</rt></ruby>して<ruby>弟<rt>おとうと</rt></ruby>はおとなしいです。',
            plain: 'あににたいしておとうとはおとなしいです。',
            cn: '相对于哥哥，弟弟很文静。',
          },
        ],
      },
      {
        pattern: 'N + それぞれ',
        name: 'それぞれ（各自）',
        explain: '表示「各自」「各有不同」。常和「人それぞれ」「それぞれの〜」搭配，强调个体差异。',
        examples: [
          {
            jp: '<ruby>人<rt>ひと</rt></ruby>それぞれ<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>が<ruby>違<rt>ちが</rt></ruby>います。',
            plain: 'ひとそれぞれかんがえかたがちがいます。',
            cn: '每个人想法都不同。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 37 課 — 慣用表現（推測の確信度）
  // ========================================================
  {
    id: 37,
    level: 'N3',
    title: {
      jp: '推測の確信度',
      romaji: 'suisoku no kakushindo',
      cn: '推测的把握度',
      en: 'Degrees of Inference',
    },
    goals: [
      '掌握「わけだ」表达事理推论的用法',
      '区分「わけがない」与「はずがない」的语感差异',
      '能用「はず」表达预期与判断',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '彼が来ないわけ',
          romaji: 'kare ga konai wake',
          cn: '他不来的原因',
        },
        sentences: [
          {
            jp: '<ruby>今日<rt>きょう</rt></ruby>のパーティーに<ruby>田中<rt>たなか</rt></ruby>さんが<ruby>来<rt>き</rt></ruby>ていません。',
            plain: 'きょうのパーティーにたなかさんがきていません。',
            romaji: 'kyou no paatii ni Tanaka-san ga kiteimasen.',
            cn: '今天的派对田中没来。',
          },
          {
            jp: '<ruby>彼<rt>かれ</rt></ruby>は<ruby>必<rt>かなら</rt></ruby>ず<ruby>来<rt>く</rt></ruby>ると<ruby>言<rt>い</rt></ruby>っていたはずです。',
            plain: 'かれはかならずくるといっていたはずです。',
            romaji: 'kare wa kanarazu kuru to itteita hazu desu.',
            cn: '他应该说过一定来。',
          },
          {
            jp: '<ruby>後<rt>あと</rt></ruby>から<ruby>聞<rt>き</rt></ruby>くと、<ruby>仕事<rt>しごと</rt></ruby>が<ruby>急<rt>きゅう</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ったそうです。',
            plain: 'あとからきくと、しごとがきゅうにはいったそうです。',
            romaji: 'ato kara kiku to, shigoto ga kyuu ni haitta sou desu.',
            cn: '后来听说，临时有了工作。',
          },
          {
            jp: 'なるほど、<ruby>来<rt>こ</rt></ruby>られなかったわけです。',
            plain: 'なるほど、こられなかったわけです。',
            romaji: 'naruhodo, korarenakatta wake desu.',
            cn: '原来如此，所以没能来。',
          },
          {
            jp: 'でも、<ruby>連絡<rt>れんらく</rt></ruby>がないわけがないと<ruby>思<rt>おも</rt></ruby>っていました。',
            plain: 'でも、れんらくがないわけがないとおもっていました。',
            romaji: 'demo, renraku ga nai wake ga nai to omotteimashita.',
            cn: '不过，原以为不可能没联系。',
          },
          {
            jp: '<ruby>彼<rt>かれ</rt></ruby>はメールを<ruby>送<rt>おく</rt></ruby>ったそうですが、<ruby>私<rt>わたし</rt></ruby>のスマホが<ruby>受信<rt>じゅしん</rt></ruby>できないわけだったのです。',
            plain: 'かれはメールをおくったそうですが、わたしのスマホがじゅしんできないわけだったのです。',
            romaji: 'kare wa meeru o okutta sou desu ga, watashi no sumaho ga jushin dekinai wake datta no desu.',
            cn: '他说发了邮件，原来是我的手机收不到。',
          },
          {
            jp: '<ruby>連絡<rt>れんらく</rt></ruby>が<ruby>取<rt>と</rt></ruby>れないわけではなく、ただ<ruby>遅<rt>おく</rt></ruby>れていただけでした。',
            plain: 'れんらくがとれないわけではなく、ただおくれていただけでした。',
            romaji: 'renraku ga torenai wake de wa naku, tada okurete ita dake deshita.',
            cn: '并不是联系不上，只是延迟了。',
          },
          {
            jp: '<ruby>彼<rt>かれ</rt></ruby>のことだから、<ruby>誤解<rt>ごかい</rt></ruby>を<ruby>放<rt>ほう</rt></ruby>っておくはずがありません。',
            plain: 'かれのことだから、ごかいをほうっておくはずがありません。',
            romaji: 'kare no koto da kara, gokai o houtte oku hazu ga arimasen.',
            cn: '以他的为人，不可能放任误解不管。',
          },
          {
            jp: '<ruby>翌日<rt>よくじつ</rt></ruby>、<ruby>彼<rt>かれ</rt></ruby>から<ruby>長<rt>なが</rt></ruby>い<ruby>謝罪<rt>しゃざい</rt></ruby>のメッセージが<ruby>届<rt>とど</rt></ruby>きました。',
            plain: 'よくじつ、かれからながいしゃざいのメッセージがとどきました。',
            romaji: 'yokujitsu, kare kara nagai shazai no messeeji ga todokimashita.',
            cn: '第二天，收到了他长长的道歉信息。',
          },
          {
            jp: 'やっぱり、<ruby>誠実<rt>せいじつ</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>だと<ruby>改<rt>あらた</rt></ruby>めて<ruby>感<rt>かん</rt></ruby>じました。',
            plain: 'やっぱり、せいじつなひとだとあらためてかんじました。',
            romaji: 'yappari, seijitsu na hito da to aratamete kanjimashita.',
            cn: '果然是个诚实的人，再次感受到了。',
          },
          {
            jp: '<ruby>誤解<rt>ごかい</rt></ruby>はすぐに<ruby>解<rt>と</rt></ruby>けるものだと<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'ごかいはすぐにとけるものだとおもいます。',
            romaji: 'gokai wa sugu ni tokeru mono da to omoimasu.',
            cn: '我觉得误解是会很快化解的。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: 'そんなはずはない',
          romaji: 'sonna hazu wa nai',
          cn: '不可能这样',
        },
        sentences: [
          {
            jp: '<ruby>朝<rt>あさ</rt></ruby>、<ruby>財布<rt>さいふ</rt></ruby>がないことに<ruby>気<rt>き</rt></ruby>づきました。',
            plain: 'あさ、さいふがないことにきづきました。',
            romaji: 'asa, saifu ga nai koto ni kizukimashita.',
            cn: '早上发现钱包不见了。',
          },
          {
            jp: 'そんなはずはありません。<ruby>昨日<rt>きのう</rt></ruby><ruby>確<rt>たし</rt></ruby>かにかばんに<ruby>入<rt>い</rt></ruby>れたはずです。',
            plain: 'そんなはずはありません。きのうたしかにかばんにいれたはずです。',
            romaji: 'sonna hazu wa arimasen. kinou tashika ni kaban ni ireta hazu desu.',
            cn: '不可能。昨天确实放进包里了。',
          },
          {
            jp: '<ruby>家<rt>いえ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>のあちこちを<ruby>探<rt>さが</rt></ruby>しましたが、<ruby>見<rt>み</rt></ruby>つかりません。',
            plain: 'いえのなかのあちこちをさがしましたが、みつかりません。',
            romaji: 'ie no naka no achikochi o sagashimashita ga, mitsukarimasen.',
            cn: '在家里到处找，没找到。',
          },
          {
            jp: '<ruby>誰<rt>だれ</rt></ruby>かが<ruby>持<rt>も</rt></ruby>って<ruby>行<rt>い</rt></ruby>くわけがないので、<ruby>家<rt>いえ</rt></ruby>のどこかにあるはずです。',
            plain: 'だれかがもっていくわけがないので、いえのどこかにあるはずです。',
            romaji: 'dareka ga motte iku wake ga nai node, ie no doko ka ni aru hazu desu.',
            cn: '不可能有人拿走，应该在家里某处。',
          },
          {
            jp: '<ruby>結局<rt>けっきょく</rt></ruby>、ソファーの<ruby>下<rt>した</rt></ruby>から<ruby>出<rt>で</rt></ruby>てきました。',
            plain: 'けっきょく、ソファーのしたからでてきました。',
            romaji: 'kekkyoku, sofaa no shita kara dete kimashita.',
            cn: '结果从沙发下面出来了。',
          },
          {
            jp: 'なるほど、ここに<ruby>落<rt>お</rt></ruby>ちたわけですね。',
            plain: 'なるほど、ここにおちたわけですね。',
            romaji: 'naruhodo, koko ni ochita wake desu ne.',
            cn: '原来如此，掉到这里了。',
          },
          {
            jp: '<ruby>記憶<rt>きおく</rt></ruby>はあてにならないこともあるわけです。',
            plain: 'きおくはあてにならないこともあるわけです。',
            romaji: 'kioku wa ate ni naranai koto mo aru wake desu.',
            cn: '看来记忆有时是靠不住的。',
          },
          {
            jp: 'これからは<ruby>同<rt>おな</rt></ruby>じ<ruby>場所<rt>ばしょ</rt></ruby>に<ruby>必<rt>かなら</rt></ruby>ず<ruby>置<rt>お</rt></ruby>くようにします。',
            plain: 'これからはおなじばしょにかならずおくようにします。',
            romaji: 'kore kara wa onaji basho ni kanarazu oku you ni shimasu.',
            cn: '今后一定要放在同一个地方。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '友達が状況の原因を分析している。',
        cn: '朋友分析状况的原因。',
      },
      lines: [
        {
          speaker: '木村',
          jp: '<ruby>佐々木<rt>ささき</rt></ruby>さんが<ruby>最近<rt>さいきん</rt></ruby><ruby>元気<rt>げんき</rt></ruby>がないみたい。',
          plain: 'ささきさんがさいきんげんきがないみたい。',
          romaji: 'Sasaki-san ga saikin genki ga nai mitai.',
          cn: '佐佐木最近好像没精神。',
        },
        {
          speaker: '林',
          jp: '<ruby>仕事<rt>しごと</rt></ruby>が<ruby>大変<rt>たいへん</rt></ruby>なはずだから、<ruby>疲<rt>つか</rt></ruby>れているわけだ。',
          plain: 'しごとがたいへんなはずだから、つかれているわけだ。',
          romaji: 'shigoto ga taihen na hazu da kara, tsukareteiru wake da.',
          cn: '工作肯定很累，所以才疲倦。',
        },
        {
          speaker: '木村',
          jp: 'でも、<ruby>誰<rt>だれ</rt></ruby>にも<ruby>相談<rt>そうだん</rt></ruby>しないはずがないよね。',
          plain: 'でも、だれにもそうだんしないはずがないよね。',
          romaji: 'demo, dare ni mo soudan shinai hazu ga nai yo ne.',
          cn: '不过，他不可能不找人商量吧。',
        },
        {
          speaker: '林',
          jp: '<ruby>性格<rt>せいかく</rt></ruby><ruby>的<rt>てき</rt></ruby>に、<ruby>一人<rt>ひとり</rt></ruby>で<ruby>悩<rt>なや</rt></ruby>みを<ruby>抱<rt>かか</rt></ruby>えるわけではないと<ruby>思<rt>おも</rt></ruby>う。',
          plain: 'せいかくてきに、ひとりでなやみをかかえるわけではないとおもう。',
          romaji: 'seikaku-teki ni, hitori de nayami o kakaeru wake de wa nai to omou.',
          cn: '从性格看，不会一个人扛烦恼。',
        },
        {
          speaker: '木村',
          jp: 'じゃあ、<ruby>今度<rt>こんど</rt></ruby><ruby>食事<rt>しょくじ</rt></ruby>に<ruby>誘<rt>さそ</rt></ruby>って、<ruby>話<rt>はな</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてみよう。',
          plain: 'じゃあ、こんどしょくじにさそって、はなしをきいてみよう。',
          romaji: 'jaa, kondo shokuji ni sasotte, hanashi o kiite miyou.',
          cn: '那下次约他吃饭，听听他说什么吧。',
        },
        {
          speaker: '林',
          jp: 'うん、<ruby>友達<rt>ともだち</rt></ruby>に<ruby>頼<rt>たよ</rt></ruby>られないわけがないからね。',
          plain: 'うん、ともだちにたよられないわけがないからね。',
          romaji: 'un, tomodachi ni tayorarenai wake ga nai kara ne.',
          cn: '嗯，朋友不可能不依靠的。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>田中<rt>たなか</rt></ruby>さんはなぜ<ruby>来<rt>こ</rt></ruby>られませんでしたか。',
          plain: 'たなかさんはなぜこられませんでしたか。',
          romaji: 'Tanaka-san wa naze koraremasen deshita ka.',
          cn: '田中为什么没能来？',
        },
        a: {
          jp: '<ruby>仕事<rt>しごと</rt></ruby>が<ruby>急<rt>きゅう</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ったわけです。',
          plain: 'しごとがきゅうにはいったわけです。',
          romaji: 'shigoto ga kyuu ni haitta wake desu.',
          cn: '原来是临时有了工作。',
        },
      },
      {
        q: {
          jp: '<ruby>連絡<rt>れんらく</rt></ruby>がなかったのはなぜですか。',
          plain: 'れんらくがなかったのはなぜですか。',
          romaji: 'renraku ga nakatta no wa naze desu ka.',
          cn: '为什么没收到联系？',
        },
        a: {
          jp: '<ruby>私<rt>わたし</rt></ruby>のスマホが<ruby>受信<rt>じゅしん</rt></ruby>できないわけだったのです。',
          plain: 'わたしのスマホがじゅしんできないわけだったのです。',
          romaji: 'watashi no sumaho ga jushin dekinai wake datta no desu.',
          cn: '原来是我的手机收不到。',
        },
        hint: '「わけ」表事理推论。',
      },
      {
        q: {
          jp: '<ruby>財布<rt>さいふ</rt></ruby>はどこにありましたか。',
          plain: 'さいふはどこにありましたか。',
          romaji: 'saifu wa doko ni arimashita ka.',
          cn: '钱包在哪里？',
        },
        a: {
          jp: 'ソファーの<ruby>下<rt>した</rt></ruby>にありました。',
          plain: 'ソファーのしたにありました。',
          romaji: 'sofaa no shita ni arimashita.',
          cn: '在沙发下面。',
        },
      },
      {
        q: {
          jp: '<ruby>佐々木<rt>ささき</rt></ruby>さんはなぜ<ruby>元気<rt>げんき</rt></ruby>がありませんか。',
          plain: 'ささきさんはなぜげんきがありませんか。',
          romaji: 'Sasaki-san wa naze genki ga arimasen ka.',
          cn: '佐佐木为什么没精神？',
        },
        a: {
          jp: '<ruby>仕事<rt>しごと</rt></ruby>が<ruby>大変<rt>たいへん</rt></ruby>で<ruby>疲<rt>つか</rt></ruby>れているわけです。',
          plain: 'しごとがたいへんでつかれているわけです。',
          romaji: 'shigoto ga taihen de tsukareteiru wake desu.',
          cn: '是因为工作累所以疲倦。',
        },
      },
    ],
    vocabulary: [
      { jp: 'パーティー', kana: 'パーティー', romaji: 'paatii', meaning: '派对', pos: '名詞' },
      { jp: '必ず', kana: 'かならず', romaji: 'kanarazu', meaning: '一定', pos: '副詞' },
      { jp: '急に', kana: 'きゅうに', romaji: 'kyuu ni', meaning: '突然', pos: '副詞' },
      { jp: 'なるほど', kana: 'なるほど', romaji: 'naruhodo', meaning: '原来如此', pos: '感動詞' },
      { jp: '連絡', kana: 'れんらく', romaji: 'renraku', meaning: '联系', pos: '名詞' },
      { jp: 'メール', kana: 'メール', romaji: 'meeru', meaning: '邮件', pos: '名詞' },
      { jp: '送ります', kana: 'おくります', romaji: 'okurimasu', meaning: '发送', pos: '動詞I' },
      { jp: '受信します', kana: 'じゅしんします', romaji: 'jushin shimasu', meaning: '接收', pos: '動詞III' },
      { jp: 'ただ', kana: 'ただ', romaji: 'tada', meaning: '只是', pos: '副詞' },
      { jp: '遅れます', kana: 'おくれます', romaji: 'okuremasu', meaning: '迟到；延迟', pos: '動詞II' },
      { jp: '誤解', kana: 'ごかい', romaji: 'gokai', meaning: '误解', pos: '名詞' },
      { jp: '放っておきます', kana: 'ほうっておきます', romaji: 'houtte okimasu', meaning: '放任不管', pos: '動詞I' },
      { jp: '翌日', kana: 'よくじつ', romaji: 'yokujitsu', meaning: '次日', pos: '名詞' },
      { jp: '謝罪', kana: 'しゃざい', romaji: 'shazai', meaning: '道歉', pos: '名詞' },
      { jp: 'メッセージ', kana: 'メッセージ', romaji: 'messeeji', meaning: '消息', pos: '名詞' },
      { jp: '届きます', kana: 'とどきます', romaji: 'todokimasu', meaning: '送达', pos: '動詞I' },
      { jp: 'やっぱり', kana: 'やっぱり', romaji: 'yappari', meaning: '果然', pos: '副詞' },
      { jp: '誠実', kana: 'せいじつ', romaji: 'seijitsu', meaning: '诚实', pos: 'な形容詞' },
      { jp: '改めて', kana: 'あらためて', romaji: 'aratamete', meaning: '重新；再次', pos: '副詞' },
      { jp: '解けます', kana: 'とけます', romaji: 'tokemasu', meaning: '化解；解开', pos: '動詞II' },
      { jp: '財布', kana: 'さいふ', romaji: 'saifu', meaning: '钱包', pos: '名詞' },
      { jp: '確かに', kana: 'たしかに', romaji: 'tashika ni', meaning: '确实', pos: '副詞' },
      { jp: 'かばん', kana: 'かばん', romaji: 'kaban', meaning: '包', pos: '名詞' },
      { jp: 'あちこち', kana: 'あちこち', romaji: 'achikochi', meaning: '到处', pos: '名詞' },
      { jp: '見つかります', kana: 'みつかります', romaji: 'mitsukarimasu', meaning: '被找到', pos: '動詞I' },
      { jp: '落ちます', kana: 'おちます', romaji: 'ochimasu', meaning: '掉落', pos: '動詞II' },
      { jp: '記憶', kana: 'きおく', romaji: 'kioku', meaning: '记忆', pos: '名詞' },
      { jp: '相談します', kana: 'そうだんします', romaji: 'soudan shimasu', meaning: '商量', pos: '動詞III' },
      { jp: '性格', kana: 'せいかく', romaji: 'seikaku', meaning: '性格', pos: '名詞' },
      { jp: '抱えます', kana: 'かかえます', romaji: 'kakaemasu', meaning: '抱；承担', pos: '動詞II' },
      { jp: '誘います', kana: 'さそいます', romaji: 'sasoimasu', meaning: '邀请', pos: '動詞I' },
      { jp: '頼ります', kana: 'たよります', romaji: 'tayorimasu', meaning: '依靠', pos: '動詞I' },
    ],
    grammar: [
      {
        pattern: '〜わけだ',
        name: '〜わけだ（事理推论）',
        explain: '表示「（从前文事实）逻辑上得出...的结论」，相当于中文「原来如此/也就是说/难怪」。多用于得知原因后恍然大悟的语境，如「電車が止まっていた。それで遅れたわけだ」（电车停了，所以才迟到）。强调「事实之间的逻辑关系」。',
        examples: [
          {
            jp: '<ruby>彼<rt>かれ</rt></ruby>はアメリカに<ruby>十年<rt>じゅうねん</rt></ruby>いた。<ruby>道理<rt>どうり</rt></ruby>で<ruby>英語<rt>えいご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>なわけだ。',
            plain: 'かれはアメリカにじゅうねんいた。どうりでえいごがじょうずなわけだ。',
            cn: '他在美国待了十年。难怪英语好。',
          },
        ],
      },
      {
        pattern: '〜わけではない',
        name: '〜わけではない（部分否定）',
        explain: '表示「并不是说...」「并非完全...」，是部分否定，常用于澄清误解。前文的看似结论被柔和否定。和「〜ない」直接否定不同，「わけではない」语气委婉。',
        examples: [
          {
            jp: '<ruby>嫌<rt>きら</rt></ruby>いなわけではないが、あまり<ruby>食<rt>た</rt></ruby>べません。',
            plain: 'きらいなわけではないが、あまりたべません。',
            cn: '并不是讨厌，只是不太吃。',
          },
        ],
      },
      {
        pattern: '〜はずだ',
        name: '〜はずだ（理应/预期）',
        explain: '表示说话人基于已知信息推断「应该...」「按理说...」。语感是「我有把握这样」。前接动词原形、形容词、名词+の。注意它是预期，不是事实，所以可能落空。和「わけだ」区别：「はず」是「事前的预测」，「わけ」是「事后的恍然」。',
        examples: [
          {
            jp: '<ruby>彼<rt>かれ</rt></ruby>は<ruby>三時<rt>さんじ</rt></ruby>に<ruby>来<rt>く</rt></ruby>るはずです。',
            plain: 'かれはさんじにくるはずです。',
            cn: '他三点应该来。',
          },
        ],
      },
      {
        pattern: '〜はずがない',
        name: '〜はずがない（不可能）',
        explain: '表示「按理说不可能...」，强烈否定可能性。说话人基于常识或已知信息认为这件事绝不会发生。和「わけがない」语感非常接近，但「はずがない」更强调「与预期相违」，「わけがない」更强调「逻辑上根本不成立」。',
        examples: [
          {
            jp: '<ruby>彼<rt>かれ</rt></ruby>がそんなことを<ruby>言<rt>い</rt></ruby>うはずがありません。',
            plain: 'かれがそんなことをいうはずがありません。',
            cn: '他不可能说那种话。',
          },
        ],
      },
      {
        pattern: '〜わけがない',
        name: '〜わけがない（绝对不可能）',
        explain: '比「はずがない」语气更强，表示「逻辑上根本不可能」。多用于反驳对方观点或强调判断。「彼が泣くわけがない」（他绝不可能哭）比「泣くはずがない」更斩钉截铁。',
        examples: [
          {
            jp: 'こんな<ruby>簡単<rt>かんたん</rt></ruby>な<ruby>問題<rt>もんだい</rt></ruby>が<ruby>分<rt>わ</rt></ruby>からないわけがない。',
            plain: 'こんなかんたんなもんだいがわからないわけがない。',
            cn: '这么简单的问题不可能不会。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 38 課 — 感情と評価
  // ========================================================
  {
    id: 38,
    level: 'N3',
    title: {
      jp: '感情と評価',
      romaji: 'kanjou to hyouka',
      cn: '情感与评价',
      en: 'Feelings and Evaluation',
    },
    goals: [
      '掌握「てしまう」的两种语感（完成/遗憾）',
      '能用「ておく」表示事先准备',
      '熟悉口语缩约「ちゃう/じゃう」的使用',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '忘れてしまった',
          romaji: 'wasurete shimatta',
          cn: '忘掉了',
        },
        sentences: [
          {
            jp: '<ruby>今日<rt>きょう</rt></ruby>は<ruby>朝<rt>あさ</rt></ruby>から<ruby>失敗<rt>しっぱい</rt></ruby>ばかりの<ruby>一日<rt>いちにち</rt></ruby>でした。',
            plain: 'きょうはあさからしっぱいばかりのいちにちでした。',
            romaji: 'kyou wa asa kara shippai bakari no ichinichi deshita.',
            cn: '今天从早上起就尽是失败的一天。',
          },
          {
            jp: '<ruby>大事<rt>だいじ</rt></ruby>な<ruby>会議<rt>かいぎ</rt></ruby>の<ruby>資料<rt>しりょう</rt></ruby>を<ruby>家<rt>いえ</rt></ruby>に<ruby>忘<rt>わす</rt></ruby>れてしまいました。',
            plain: 'だいじなかいぎのしりょうをいえにわすれてしまいました。',
            romaji: 'daiji na kaigi no shiryou o ie ni wasurete shimaimashita.',
            cn: '把重要会议的资料忘在家里了。',
          },
          {
            jp: '<ruby>急<rt>いそ</rt></ruby>いで<ruby>家<rt>いえ</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>ったので、<ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>遅<rt>おく</rt></ruby>れてしまいました。',
            plain: 'いそいでいえにもどったので、でんしゃにおくれてしまいました。',
            romaji: 'isoide ie ni modotta node, densha ni okurete shimaimashita.',
            cn: '急忙回家结果赶不上电车了。',
          },
          {
            jp: '<ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>着<rt>つ</rt></ruby>くと、<ruby>会議<rt>かいぎ</rt></ruby>はもう<ruby>始<rt>はじ</rt></ruby>まってしまっていました。',
            plain: 'かいしゃにつくと、かいぎはもうはじまってしまっていました。',
            romaji: 'kaisha ni tsuku to, kaigi wa mou hajimatte shimatte imashita.',
            cn: '到公司时，会议已经开始了。',
          },
          {
            jp: '<ruby>昼<rt>ひる</rt></ruby><ruby>休<rt>やす</rt></ruby>みにコーヒーをこぼしてしまって、シャツが<ruby>汚<rt>よご</rt></ruby>れてしまいました。',
            plain: 'ひるやすみにコーヒーをこぼしてしまって、シャツがよごれてしまいました。',
            romaji: 'hiruyasumi ni koohii o koboshite shimatte, shatsu ga yogorete shimaimashita.',
            cn: '午休时把咖啡洒了，衬衫弄脏了。',
          },
          {
            jp: '<ruby>夕方<rt>ゆうがた</rt></ruby>には<ruby>頭痛<rt>ずつう</rt></ruby>がして、<ruby>仕事<rt>しごと</rt></ruby>が<ruby>進<rt>すす</rt></ruby>みませんでした。',
            plain: 'ゆうがたにはずつうがして、しごとがすすみませんでした。',
            romaji: 'yuugata ni wa zutsuu ga shite, shigoto ga susumimasen deshita.',
            cn: '傍晚头痛了，工作没进展。',
          },
          {
            jp: '<ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>る<ruby>途中<rt>とちゅう</rt></ruby>、<ruby>傘<rt>かさ</rt></ruby>を<ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>置<rt>お</rt></ruby>き<ruby>忘<rt>わす</rt></ruby>れてしまいました。',
            plain: 'いえにかえるとちゅう、かさをでんしゃにおきわすれてしまいました。',
            romaji: 'ie ni kaeru tochuu, kasa o densha ni okiwasurete shimaimashita.',
            cn: '回家路上把伞落在电车上了。',
          },
          {
            jp: '<ruby>夜<rt>よる</rt></ruby>には<ruby>残<rt>のこ</rt></ruby>っていたケーキを<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>食<rt>た</rt></ruby>べてしまいました。',
            plain: 'よるにはのこっていたケーキをぜんぶたべてしまいました。',
            romaji: 'yoru ni wa nokotte ita keeki o zenbu tabete shimaimashita.',
            cn: '晚上把剩下的蛋糕全吃光了。',
          },
          {
            jp: 'これは<ruby>遺憾<rt>いかん</rt></ruby>ではなく、ストレス<ruby>解消<rt>かいしょう</rt></ruby>のためです。',
            plain: 'これはいかんではなく、ストレスかいしょうのためです。',
            romaji: 'kore wa ikan de wa naku, sutoresu kaishou no tame desu.',
            cn: '这不是遗憾，是为了消除压力。',
          },
          {
            jp: '<ruby>明日<rt>あした</rt></ruby>は<ruby>必要<rt>ひつよう</rt></ruby>なものをかばんに<ruby>入<rt>い</rt></ruby>れておこうと<ruby>思<rt>おも</rt></ruby>います。',
            plain: 'あしたはひつようなものをかばんにいれておこうとおもいます。',
            romaji: 'ashita wa hitsuyou na mono o kaban ni irete okou to omoimasu.',
            cn: '明天打算把必要的东西先放进包里。',
          },
          {
            jp: 'こんな<ruby>日<rt>ひ</rt></ruby>もあるさ、と<ruby>自分<rt>じぶん</rt></ruby>に<ruby>言<rt>い</rt></ruby>い<ruby>聞<rt>き</rt></ruby>かせて<ruby>寝<rt>ね</rt></ruby>ます。',
            plain: 'こんなひもあるさ、とじぶんにいいきかせてねます。',
            romaji: 'konna hi mo aru sa, to jibun ni iikikasete nemasu.',
            cn: '告诉自己「也有这样的日子吧」，然后睡觉。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '準備しておこう',
          romaji: 'junbi shite okou',
          cn: '事先准备好吧',
        },
        sentences: [
          {
            jp: '<ruby>来週<rt>らいしゅう</rt></ruby>から<ruby>家族<rt>かぞく</rt></ruby>と<ruby>北海道<rt>ほっかいどう</rt></ruby>へ<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます。',
            plain: 'らいしゅうからかぞくとほっかいどうへりょこうにいきます。',
            romaji: 'raishuu kara kazoku to Hokkaidou e ryokou ni ikimasu.',
            cn: '下周和家人去北海道旅行。',
          },
          {
            jp: '<ruby>必要<rt>ひつよう</rt></ruby>なものを<ruby>早<rt>はや</rt></ruby>めに<ruby>用意<rt>ようい</rt></ruby>しておきます。',
            plain: 'ひつようなものをはやめによういしておきます。',
            romaji: 'hitsuyou na mono o hayame ni youi shite okimasu.',
            cn: '把需要的东西提早准备好。',
          },
          {
            jp: '<ruby>飛行機<rt>ひこうき</rt></ruby>のチケットは<ruby>三<rt>さん</rt></ruby>か<ruby>月前<rt>げつまえ</rt></ruby>に<ruby>予約<rt>よやく</rt></ruby>しておきました。',
            plain: 'ひこうきのチケットはさんかげつまえによやくしておきました。',
            romaji: 'hikouki no chiketto wa san-kagetsu mae ni yoyaku shite okimashita.',
            cn: '机票三个月前就预订好了。',
          },
          {
            jp: '<ruby>寒<rt>さむ</rt></ruby>いそうなので、<ruby>厚<rt>あつ</rt></ruby>いコートを<ruby>出<rt>だ</rt></ruby>しておきます。',
            plain: 'さむいそうなので、あついコートをだしておきます。',
            romaji: 'samui sou na node, atsui kooto o dashite okimasu.',
            cn: '听说会冷，把厚外套先拿出来。',
          },
          {
            jp: '<ruby>子供<rt>こども</rt></ruby>のおやつもバッグに<ruby>入<rt>い</rt></ruby>れておきました。',
            plain: 'こどものおやつもバッグにいれておきました。',
            romaji: 'kodomo no oyatsu mo baggu ni irete okimashita.',
            cn: '孩子的零食也放进包里了。',
          },
          {
            jp: '<ruby>当日<rt>とうじつ</rt></ruby><ruby>慌<rt>あわ</rt></ruby>てないように、リストを<ruby>作<rt>つく</rt></ruby>っておきます。',
            plain: 'とうじつあわてないように、リストをつくっておきます。',
            romaji: 'toujitsu awatenai you ni, risuto o tsukutte okimasu.',
            cn: '为了当天不慌乱，提前列好清单。',
          },
          {
            jp: '<ruby>準備<rt>じゅんび</rt></ruby>がしっかりしていれば、<ruby>旅行<rt>りょこう</rt></ruby>はもっと<ruby>楽<rt>たの</rt></ruby>しめます。',
            plain: 'じゅんびがしっかりしていれば、りょこうはもっとたのしめます。',
            romaji: 'junbi ga shikkari shite ireba, ryokou wa motto tanoshimemasu.',
            cn: '准备充分的话，旅行能更享受。',
          },
          {
            jp: '<ruby>初<rt>はじ</rt></ruby>めての<ruby>北海道<rt>ほっかいどう</rt></ruby>がとても<ruby>楽<rt>たの</rt></ruby>しみです。',
            plain: 'はじめてのほっかいどうがとてもたのしみです。',
            romaji: 'hajimete no Hokkaidou ga totemo tanoshimi desu.',
            cn: '第一次去北海道，非常期待。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '友達同士が一日の出来事を話している。',
        cn: '朋友间聊一天的事。',
      },
      lines: [
        {
          speaker: '小林',
          jp: '<ruby>今日<rt>きょう</rt></ruby>、<ruby>大事<rt>だいじ</rt></ruby>なメールを<ruby>消<rt>け</rt></ruby>しちゃった。',
          plain: 'きょう、だいじなメールをけしちゃった。',
          romaji: 'kyou, daiji na meeru o keshichatta.',
          cn: '今天把重要的邮件删掉了。',
        },
        {
          speaker: '伊藤',
          jp: 'えっ、それは<ruby>大変<rt>たいへん</rt></ruby>。バックアップは<ruby>取<rt>と</rt></ruby>っておかなかったの。',
          plain: 'えっ、それはたいへん。バックアップはとっておかなかったの。',
          romaji: 'e, sore wa taihen. bakkuappu wa totte okanakatta no.',
          cn: '欸，那糟糕了。没事先备份吗？',
        },
        {
          speaker: '小林',
          jp: '<ruby>忘<rt>わす</rt></ruby>れちゃってた。<ruby>本当<rt>ほんとう</rt></ruby>にショック。',
          plain: 'わすれちゃってた。ほんとうにショック。',
          romaji: 'wasurechatteta. hontou ni shokku.',
          cn: '忘了。真的很受打击。',
        },
        {
          speaker: '伊藤',
          jp: '<ruby>送信<rt>そうしん</rt></ruby><ruby>済<rt>ず</rt></ruby>みフォルダーは<ruby>確認<rt>かくにん</rt></ruby>してみた。',
          plain: 'そうしんずみフォルダーはかくにんしてみた。',
          romaji: 'soushin-zumi forudaa wa kakunin shite mita.',
          cn: '发件箱看了吗？',
        },
        {
          speaker: '小林',
          jp: 'あっ、それは<ruby>見<rt>み</rt></ruby>てなかった。<ruby>後<rt>あと</rt></ruby>で<ruby>探<rt>さが</rt></ruby>してみる。',
          plain: 'あっ、それはみてなかった。あとでさがしてみる。',
          romaji: 'a, sore wa mitenakatta. ato de sagashite miru.',
          cn: '啊，没看那里。等会找找看。',
        },
        {
          speaker: '伊藤',
          jp: '<ruby>次<rt>つぎ</rt></ruby>からは<ruby>大事<rt>だいじ</rt></ruby>なものはコピーしておいたほうがいいよ。',
          plain: 'つぎからはだいじなものはコピーしておいたほうがいいよ。',
          romaji: 'tsugi kara wa daiji na mono wa kopii shite oita hou ga ii yo.',
          cn: '下次重要的东西最好先复制好。',
        },
        {
          speaker: '小林',
          jp: 'うん、これからは<ruby>気<rt>き</rt></ruby>をつけるよ。<ruby>教<rt>おし</rt></ruby>えてくれてありがとう。',
          plain: 'うん、これからはきをつけるよ。おしえてくれてありがとう。',
          romaji: 'un, kore kara wa ki o tsukeru yo. oshiete kurete arigatou.',
          cn: '嗯，今后会注意。谢谢提醒。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>主人公<rt>しゅじんこう</rt></ruby>は<ruby>朝<rt>あさ</rt></ruby><ruby>何<rt>なに</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れましたか。',
          plain: 'しゅじんこうはあさなにをわすれましたか。',
          romaji: 'shujinkou wa asa nani o wasuremashita ka.',
          cn: '主人公早上忘了什么？',
        },
        a: {
          jp: '<ruby>会議<rt>かいぎ</rt></ruby>の<ruby>資料<rt>しりょう</rt></ruby>を<ruby>家<rt>いえ</rt></ruby>に<ruby>忘<rt>わす</rt></ruby>れてしまいました。',
          plain: 'かいぎのしりょうをいえにわすれてしまいました。',
          romaji: 'kaigi no shiryou o ie ni wasurete shimaimashita.',
          cn: '把会议资料忘在家里了。',
        },
      },
      {
        q: {
          jp: '<ruby>夜<rt>よる</rt></ruby>、<ruby>主人公<rt>しゅじんこう</rt></ruby>は<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べましたか。',
          plain: 'よる、しゅじんこうはなにをたべましたか。',
          romaji: 'yoru, shujinkou wa nani o tabemashita ka.',
          cn: '晚上主人公吃了什么？',
        },
        a: {
          jp: '<ruby>残<rt>のこ</rt></ruby>っていたケーキを<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>食<rt>た</rt></ruby>べてしまいました。',
          plain: 'のこっていたケーキをぜんぶたべてしまいました。',
          romaji: 'nokotte ita keeki o zenbu tabete shimaimashita.',
          cn: '把剩下的蛋糕全吃光了。',
        },
        hint: '「てしまう」也表示「完成/做完」。',
      },
      {
        q: {
          jp: '<ruby>北海道<rt>ほっかいどう</rt></ruby>のチケットはいつ<ruby>予約<rt>よやく</rt></ruby>しましたか。',
          plain: 'ほっかいどうのチケットはいつよやくしましたか。',
          romaji: 'Hokkaidou no chiketto wa itsu yoyaku shimashita ka.',
          cn: '北海道的票什么时候预订的？',
        },
        a: {
          jp: '<ruby>三<rt>さん</rt></ruby>か<ruby>月前<rt>げつまえ</rt></ruby>に<ruby>予約<rt>よやく</rt></ruby>しておきました。',
          plain: 'さんかげつまえによやくしておきました。',
          romaji: 'san-kagetsu mae ni yoyaku shite okimashita.',
          cn: '三个月前预订好了。',
        },
      },
      {
        q: {
          jp: '<ruby>小林<rt>こばやし</rt></ruby>さんは<ruby>何<rt>なに</rt></ruby>をしてしまいましたか。',
          plain: 'こばやしさんはなにをしてしまいましたか。',
          romaji: 'Kobayashi-san wa nani o shite shimaimashita ka.',
          cn: '小林做了什么？',
        },
        a: {
          jp: '<ruby>大事<rt>だいじ</rt></ruby>なメールを<ruby>消<rt>け</rt></ruby>してしまいました。',
          plain: 'だいじなメールをけしてしまいました。',
          romaji: 'daiji na meeru o keshite shimaimashita.',
          cn: '把重要的邮件删掉了。',
        },
      },
    ],
    vocabulary: [
      { jp: '失敗', kana: 'しっぱい', romaji: 'shippai', meaning: '失败', pos: '名詞' },
      { jp: '会議', kana: 'かいぎ', romaji: 'kaigi', meaning: '会议', pos: '名詞' },
      { jp: '資料', kana: 'しりょう', romaji: 'shiryou', meaning: '资料', pos: '名詞' },
      { jp: '急ぎます', kana: 'いそぎます', romaji: 'isogimasu', meaning: '赶紧', pos: '動詞I' },
      { jp: '戻ります', kana: 'もどります', romaji: 'modorimasu', meaning: '返回', pos: '動詞I' },
      { jp: '電車', kana: 'でんしゃ', romaji: 'densha', meaning: '电车', pos: '名詞' },
      { jp: '着きます', kana: 'つきます', romaji: 'tsukimasu', meaning: '到达', pos: '動詞I' },
      { jp: '昼休み', kana: 'ひるやすみ', romaji: 'hiruyasumi', meaning: '午休', pos: '名詞' },
      { jp: 'こぼします', kana: 'こぼします', romaji: 'koboshimasu', meaning: '洒；溢出', pos: '動詞I' },
      { jp: 'シャツ', kana: 'シャツ', romaji: 'shatsu', meaning: '衬衫', pos: '名詞' },
      { jp: '汚れます', kana: 'よごれます', romaji: 'yogoremasu', meaning: '弄脏', pos: '動詞II' },
      { jp: '夕方', kana: 'ゆうがた', romaji: 'yuugata', meaning: '傍晚', pos: '名詞' },
      { jp: '頭痛', kana: 'ずつう', romaji: 'zutsuu', meaning: '头痛', pos: '名詞' },
      { jp: '途中', kana: 'とちゅう', romaji: 'tochuu', meaning: '途中', pos: '名詞' },
      { jp: '傘', kana: 'かさ', romaji: 'kasa', meaning: '伞', pos: '名詞' },
      { jp: '置き忘れます', kana: 'おきわすれます', romaji: 'okiwasuremasu', meaning: '遗落', pos: '動詞II' },
      { jp: 'ケーキ', kana: 'ケーキ', romaji: 'keeki', meaning: '蛋糕', pos: '名詞' },
      { jp: '全部', kana: 'ぜんぶ', romaji: 'zenbu', meaning: '全部', pos: '名詞' },
      { jp: '解消', kana: 'かいしょう', romaji: 'kaishou', meaning: '消除', pos: '名詞' },
      { jp: '言い聞かせます', kana: 'いいきかせます', romaji: 'iikikasemasu', meaning: '说服自己', pos: '動詞II' },
      { jp: '北海道', kana: 'ほっかいどう', romaji: 'Hokkaidou', meaning: '北海道', pos: '名詞' },
      { jp: '用意します', kana: 'よういします', romaji: 'youi shimasu', meaning: '准备', pos: '動詞III' },
      { jp: '飛行機', kana: 'ひこうき', romaji: 'hikouki', meaning: '飞机', pos: '名詞' },
      { jp: 'チケット', kana: 'チケット', romaji: 'chiketto', meaning: '票', pos: '名詞' },
      { jp: '予約します', kana: 'よやくします', romaji: 'yoyaku shimasu', meaning: '预订', pos: '動詞III' },
      { jp: 'コート', kana: 'コート', romaji: 'kooto', meaning: '外套', pos: '名詞' },
      { jp: 'おやつ', kana: 'おやつ', romaji: 'oyatsu', meaning: '零食', pos: '名詞' },
      { jp: 'バッグ', kana: 'バッグ', romaji: 'baggu', meaning: '包', pos: '名詞' },
      { jp: '当日', kana: 'とうじつ', romaji: 'toujitsu', meaning: '当天', pos: '名詞' },
      { jp: '慌てます', kana: 'あわてます', romaji: 'awatemasu', meaning: '慌张', pos: '動詞II' },
      { jp: 'リスト', kana: 'リスト', romaji: 'risuto', meaning: '清单', pos: '名詞' },
      { jp: 'しっかり', kana: 'しっかり', romaji: 'shikkari', meaning: '充分；好好地', pos: '副詞' },
      { jp: '消します', kana: 'けします', romaji: 'keshimasu', meaning: '删除；消去', pos: '動詞I' },
      { jp: 'バックアップ', kana: 'バックアップ', romaji: 'bakkuappu', meaning: '备份', pos: '名詞' },
      { jp: 'ショック', kana: 'ショック', romaji: 'shokku', meaning: '打击', pos: '名詞' },
      { jp: 'コピーします', kana: 'コピーします', romaji: 'kopii shimasu', meaning: '复制', pos: '動詞III' },
    ],
    grammar: [
      {
        pattern: 'V て + しまう',
        name: '〜てしまう（完成/遗憾）',
        explain: '「てしまう」有两种语感：① 完成、彻底做完，强调动作的完结。例：「読んでしまった」=「读完了」。② 遗憾、无奈、不小心做了不该做的事。例：「忘れてしまった」=「不小心忘了」。同一句子可能两种解释都通，需要看上下文判断。说话人对结果有惋惜或后悔的情绪时，多是后者。',
        examples: [
          {
            jp: '<ruby>本<rt>ほん</rt></ruby>を<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>読<rt>よ</rt></ruby>んでしまいました。',
            plain: 'ほんをぜんぶよんでしまいました。',
            cn: '把书全部读完了。（完成）',
          },
          {
            jp: '<ruby>大事<rt>だいじ</rt></ruby>な<ruby>約束<rt>やくそく</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れてしまいました。',
            plain: 'だいじなやくそくをわすれてしまいました。',
            cn: '不小心忘了重要的约定。（遗憾）',
          },
        ],
      },
      {
        pattern: 'V て + おく',
        name: '〜ておく（事先准备）',
        explain: '表示「事先做好...以备将来」或「让某状态保持着」。常见两种用法：① 事先准备：「予約しておく」（事先预订）。② 维持现状：「ここに置いておく」（就放在这里）。是一种「为了之后方便」的预备性动作。',
        examples: [
          {
            jp: '<ruby>明日<rt>あした</rt></ruby>のために<ruby>資料<rt>しりょう</rt></ruby>を<ruby>準備<rt>じゅんび</rt></ruby>しておきます。',
            plain: 'あしたのためにしりょうをじゅんびしておきます。',
            cn: '为了明天先准备好资料。',
          },
        ],
      },
      {
        pattern: 'V ちゃう / V じゃう',
        name: '〜ちゃう/じゃう（口语缩约）',
        explain: '「てしまう→ちゃう」「でしまう→じゃう」是口语缩约形，朋友间或非正式场合常用。意思和「てしまう」完全相同，但更轻松随意。例：「忘れちゃった」=「忘れてしまった」。「読んじゃった」=「読んでしまった」。书面或正式场合不用。',
        examples: [
          {
            jp: '<ruby>食<rt>た</rt></ruby>べちゃった。',
            plain: 'たべちゃった。',
            cn: '吃光了/吃掉了。',
          },
          {
            jp: '<ruby>飲<rt>の</rt></ruby>んじゃった。',
            plain: 'のんじゃった。',
            cn: '喝完了/喝光了。',
          },
        ],
      },
      {
        pattern: 'V とく（口语：ておく缩约）',
        name: '〜とく（口语缩约）',
        explain: '「ておく→とく」「でおく→どく」是口语缩约形。意思和「ておく」完全一样。「やっとく」=「やっておく」。常出现在朋友间或日常对话。',
        examples: [
          {
            jp: '<ruby>言<rt>い</rt></ruby>っとくね。',
            plain: 'いっとくね。',
            cn: '我先说一声。',
          },
        ],
      },
      {
        pattern: 'V て + みる',
        name: '〜てみる（试着做）',
        explain: '表示「试试看，尝试一下」。常带有「不知道结果，先试一试」的语感。「行ってみる」（去看看）、「食べてみる」（尝尝看）。和单纯的「〜する」相比强调试探性。',
        examples: [
          {
            jp: 'この<ruby>料理<rt>りょうり</rt></ruby>を<ruby>食<rt>た</rt></ruby>べてみてください。',
            plain: 'このりょうりをたべてみてください。',
            cn: '请尝尝这个菜。',
          },
        ],
      },
    ],
  },

];
