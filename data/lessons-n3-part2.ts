// ============================================================
// lessons-n3-part2.ts
// JLPT N3 — 第 27 課 ～ 第 32 課
// ============================================================

import type { Lesson } from './types';

export const lessonsN3Part2: Lesson[] = [

  // ========================================================
  // 第 27 課 — 必要と義務
  // ========================================================
  {
    id: 27,
    level: 'N3',
    title: {
      jp: '必要と義務',
      romaji: 'hitsuyou to gimu',
      cn: '必要与义务',
      en: 'Necessity and Obligation',
    },
    goals: [
      '掌握「〜なければならない/〜なきゃいけない/〜ねばならない」三种语体',
      '区分「〜べき」（主观应当）与「〜ことになっている」（客观规定）',
      '能描述公司规则和社会常识',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '会社のルール',
          romaji: 'kaisha no ruuru',
          cn: '公司规定',
        },
        sentences: [
          {
            jp: '<ruby>新入社員<rt>しんにゅうしゃいん</rt></ruby>は<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>規則<rt>きそく</rt></ruby>を<ruby>守<rt>まも</rt></ruby>らなければならない。',
            plain: 'しんにゅうしゃいんはかいしゃのきそくをまもらなければならない。',
            romaji: 'shinnyuu-shain wa kaisha no kisoku o mamoranakereba naranai.',
            cn: '新员工必须遵守公司的规章制度。',
          },
          {
            jp: 'まず、<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>九時<rt>くじ</rt></ruby>までに<ruby>出勤<rt>しゅっきん</rt></ruby>することになっている。',
            plain: 'まず、まいあさくじまでにしゅっきんすることになっている。',
            romaji: 'mazu, maiasa kuji made ni shukkin suru koto ni natteiru.',
            cn: '首先，规定每天早上九点前到岗。',
          },
          {
            jp: '<ruby>遅刻<rt>ちこく</rt></ruby>する<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>必<rt>かなら</rt></ruby>ず<ruby>事前<rt>じぜん</rt></ruby>に<ruby>連絡<rt>れんらく</rt></ruby>しなければいけない。',
            plain: 'ちこくするばあいは、かならずじぜんにれんらくしなければいけない。',
            romaji: 'chikoku suru baai wa, kanarazu jizen ni renraku shinakereba ikenai.',
            cn: '迟到时必须提前联络。',
          },
          {
            jp: '<ruby>会議<rt>かいぎ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>には<ruby>資料<rt>しりょう</rt></ruby>を<ruby>準備<rt>じゅんび</rt></ruby>しておくべきだ。',
            plain: 'かいぎのまえにはしりょうをじゅんびしておくべきだ。',
            romaji: 'kaigi no mae ni wa shiryou o junbi shite oku beki da.',
            cn: '开会前应该把资料准备好。',
          },
          {
            jp: '<ruby>取引先<rt>とりひきさき</rt></ruby>へのメールは<ruby>丁寧<rt>ていねい</rt></ruby>な<ruby>言葉<rt>ことば</rt></ruby>を<ruby>使<rt>つか</rt></ruby>わなきゃいけない。',
            plain: 'とりひきさきへのメールはていねいなことばをつかわなきゃいけない。',
            romaji: 'torihiki-saki e no meeru wa teinei na kotoba o tsukawanakya ikenai.',
            cn: '发给客户的邮件必须用礼貌用语。',
          },
          {
            jp: '<ruby>名刺<rt>めいし</rt></ruby>は<ruby>両手<rt>りょうて</rt></ruby>で<ruby>受<rt>う</rt></ruby>け<ruby>取<rt>と</rt></ruby>ることになっている。',
            plain: 'めいしはりょうてでうけとることになっている。',
            romaji: 'meishi wa ryoute de uketoru koto ni natteiru.',
            cn: '名片要用双手接。',
          },
          {
            jp: '<ruby>残業<rt>ざんぎょう</rt></ruby>するときは<ruby>上司<rt>じょうし</rt></ruby>の<ruby>許可<rt>きょか</rt></ruby>を<ruby>得<rt>え</rt></ruby>ねばならない。',
            plain: 'ざんぎょうするときはじょうしのきょかをえねばならない。',
            romaji: 'zangyou suru toki wa joushi no kyoka o eneba naranai.',
            cn: '加班需取得上司许可。',
          },
          {
            jp: '<ruby>機密情報<rt>きみつじょうほう</rt></ruby>は<ruby>外部<rt>がいぶ</rt></ruby>に<ruby>漏<rt>も</rt></ruby>らすべきではない。',
            plain: 'きみつじょうほうはがいぶにもらすべきではない。',
            romaji: 'kimitsu-jouhou wa gaibu ni morasu beki de wa nai.',
            cn: '机密信息不应泄露给外部。',
          },
          {
            jp: '<ruby>休<rt>やす</rt></ruby>みを<ruby>取<rt>と</rt></ruby>る<ruby>場合<rt>ばあい</rt></ruby>は、<ruby>一週間前<rt>いっしゅうかんまえ</rt></ruby>までに<ruby>申請<rt>しんせい</rt></ruby>することになっている。',
            plain: 'やすみをとるばあいは、いっしゅうかんまえまでにしんせいすることになっている。',
            romaji: 'yasumi o toru baai wa, isshuukan-mae made ni shinsei suru koto ni natteiru.',
            cn: '请假规定要在一周前申请。',
          },
          {
            jp: 'これらのルールは<ruby>厳<rt>きび</rt></ruby>しいと<ruby>感<rt>かん</rt></ruby>じるかもしれないが、<ruby>組織<rt>そしき</rt></ruby>の<ruby>秩序<rt>ちつじょ</rt></ruby>を<ruby>保<rt>たも</rt></ruby>つために<ruby>必要<rt>ひつよう</rt></ruby>である。',
            plain: 'これらのルールはきびしいとかんじるかもしれないが、そしきのちつじょをたもつためにひつようである。',
            romaji: 'korera no ruuru wa kibishii to kanjiru kamoshirenai ga, soshiki no chitsujo o tamotsu tame ni hitsuyou de aru.',
            cn: '这些规则也许令人觉得严苛，但为了维持组织秩序是必要的。',
          },
          {
            jp: '<ruby>社員<rt>しゃいん</rt></ruby><ruby>一人一人<rt>ひとりひとり</rt></ruby>が<ruby>責任<rt>せきにん</rt></ruby>を<ruby>持<rt>も</rt></ruby>って<ruby>行動<rt>こうどう</rt></ruby>すべきだろう。',
            plain: 'しゃいんひとりひとりがせきにんをもってこうどうすべきだろう。',
            romaji: 'shain hitori-hitori ga sekinin o motte koudou suru beki darou.',
            cn: '每位员工都应有责任地行动吧。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '日本の常識',
          romaji: 'nihon no joushiki',
          cn: '日本的常识',
        },
        sentences: [
          {
            jp: '<ruby>日本<rt>にほん</rt></ruby>で<ruby>生活<rt>せいかつ</rt></ruby>するには、いくつかの<ruby>常識<rt>じょうしき</rt></ruby>を<ruby>知<rt>し</rt></ruby>っておかなければならない。',
            plain: 'にほんでせいかつするには、いくつかのじょうしきをしっておかなければならない。',
            romaji: 'nihon de seikatsu suru ni wa, ikutsu ka no joushiki o shitte okanakereba naranai.',
            cn: '在日本生活，必须了解一些常识。',
          },
          {
            jp: 'ゴミは<ruby>種類<rt>しゅるい</rt></ruby>ごとに<ruby>分<rt>わ</rt></ruby>けて<ruby>出<rt>だ</rt></ruby>すことになっている。',
            plain: 'ゴミはしゅるいごとにわけてだすことになっている。',
            romaji: 'gomi wa shurui-goto ni wakete dasu koto ni natteiru.',
            cn: '垃圾要按种类分开扔。',
          },
          {
            jp: '<ruby>燃<rt>も</rt></ruby>えるゴミと<ruby>燃<rt>も</rt></ruby>えないゴミの<ruby>日<rt>ひ</rt></ruby>は<ruby>違<rt>ちが</rt></ruby>うので、<ruby>注意<rt>ちゅうい</rt></ruby>すべきだ。',
            plain: 'もえるゴミともえないゴミのひはちがうので、ちゅういすべきだ。',
            romaji: 'moeru gomi to moenai gomi no hi wa chigau node, chuui suru beki da.',
            cn: '可燃垃圾和不可燃垃圾的日子不同，应该注意。',
          },
          {
            jp: '<ruby>電車<rt>でんしゃ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>では<ruby>大声<rt>おおごえ</rt></ruby>で<ruby>話<rt>はな</rt></ruby>してはいけない。',
            plain: 'でんしゃのなかではおおごえではなしてはいけない。',
            romaji: 'densha no naka de wa oogoe de hanashite wa ikenai.',
            cn: '在电车里不能大声说话。',
          },
          {
            jp: '<ruby>携帯電話<rt>けいたいでんわ</rt></ruby>はマナーモードにしなきゃいけない。',
            plain: 'けいたいでんわはマナーモードにしなきゃいけない。',
            romaji: 'keitai-denwa wa manaa-moodo ni shinakya ikenai.',
            cn: '手机必须调成静音模式。',
          },
          {
            jp: '<ruby>家<rt>いえ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>るときは<ruby>靴<rt>くつ</rt></ruby>を<ruby>脱<rt>ぬ</rt></ruby>がねばならない。',
            plain: 'いえにはいるときはくつをぬがねばならない。',
            romaji: 'ie ni hairu toki wa kutsu o nuganeba naranai.',
            cn: '进家门时必须脱鞋。',
          },
          {
            jp: '<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に「いただきます」と<ruby>言<rt>い</rt></ruby>うべきである。',
            plain: 'しょくじのまえに「いただきます」というべきである。',
            romaji: 'shokuji no mae ni "itadakimasu" to iu beki de aru.',
            cn: '吃饭前应该说「我开动了」。',
          },
          {
            jp: 'これらは<ruby>法律<rt>ほうりつ</rt></ruby>ではないが、<ruby>守<rt>まも</rt></ruby>らないと<ruby>周<rt>まわ</rt></ruby>りに<ruby>迷惑<rt>めいわく</rt></ruby>をかけることになる。',
            plain: 'これらはほうりつではないが、まもらないとまわりにめいわくをかけることになる。',
            romaji: 'korera wa houritsu de wa nai ga, mamoranai to mawari ni meiwaku o kakeru koto ni naru.',
            cn: '这些虽然不是法律，但不遵守会给周围添麻烦。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '入社したばかりの新人が先輩に会社の規則について聞いている。',
        cn: '刚入职的新员工向前辈询问公司规则。',
      },
      lines: [
        {
          speaker: '新人',
          jp: '<ruby>先輩<rt>せんぱい</rt></ruby>、<ruby>朝<rt>あさ</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>までに<ruby>来<rt>こ</rt></ruby>なきゃいけませんか。',
          plain: 'せんぱい、あさはなんじまでにこなきゃいけませんか。',
          romaji: 'senpai, asa wa nanji made ni konakya ikemasen ka.',
          cn: '前辈，早上必须几点之前到？',
        },
        {
          speaker: '先輩',
          jp: '<ruby>九時<rt>くじ</rt></ruby>までに<ruby>来<rt>く</rt></ruby>ることになっているよ。<ruby>遅<rt>おく</rt></ruby>れる<ruby>場合<rt>ばあい</rt></ruby>は<ruby>必<rt>かなら</rt></ruby>ず<ruby>連絡<rt>れんらく</rt></ruby>しなければならない。',
          plain: 'くじまでにくることになっているよ。おくれるばあいはかならずれんらくしなければならない。',
          romaji: 'kuji made ni kuru koto ni natteiru yo. okureru baai wa kanarazu renraku shinakereba naranai.',
          cn: '规定是九点前到。迟到的话必须联系。',
        },
        {
          speaker: '新人',
          jp: '<ruby>服装<rt>ふくそう</rt></ruby>はスーツを<ruby>着<rt>き</rt></ruby>るべきでしょうか。',
          plain: 'ふくそうはスーツをきるべきでしょうか。',
          romaji: 'fukusou wa suutsu o kiru beki deshou ka.',
          cn: '服装应该穿西装吗？',
        },
        {
          speaker: '先輩',
          jp: 'うちの<ruby>会社<rt>かいしゃ</rt></ruby>はビジネスカジュアルで<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>。でも、お<ruby>客<rt>きゃく</rt></ruby>さまに<ruby>会<rt>あ</rt></ruby>う<ruby>日<rt>ひ</rt></ruby>はスーツにすべきだね。',
          plain: 'うちのかいしゃはビジネスカジュアルでだいじょうぶ。でも、おきゃくさまにあうひはスーツにすべきだね。',
          romaji: 'uchi no kaisha wa bijinesu-kajuaru de daijoubu. demo, o-kyaku-sama ni au hi wa suutsu ni su beki da ne.',
          cn: '我们公司商务休闲就行。不过见客户的日子应该穿西装。',
        },
        {
          speaker: '新人',
          jp: '<ruby>残業<rt>ざんぎょう</rt></ruby>は<ruby>毎日<rt>まいにち</rt></ruby>しなければならないんですか。',
          plain: 'ざんぎょうはまいにちしなければならないんですか。',
          romaji: 'zangyou wa mainichi shinakereba naranai n desu ka.',
          cn: '每天都必须加班吗？',
        },
        {
          speaker: '先輩',
          jp: 'いや、<ruby>残業<rt>ざんぎょう</rt></ruby>は<ruby>必要<rt>ひつよう</rt></ruby>な<ruby>時<rt>とき</rt></ruby>だけだ。<ruby>無理<rt>むり</rt></ruby>はすべきじゃないよ。',
          plain: 'いや、ざんぎょうはひつようなときだけだ。むりはすべきじゃないよ。',
          romaji: 'iya, zangyou wa hitsuyou na toki dake da. muri wa su beki ja nai yo.',
          cn: '不，加班只在需要的时候。不应该勉强。',
        },
        {
          speaker: '新人',
          jp: 'よくわかりました。ありがとうございます。',
          plain: 'よくわかりました。ありがとうございます。',
          romaji: 'yoku wakarimashita. arigatou gozaimasu.',
          cn: '我明白了。谢谢。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>新入社員<rt>しんにゅうしゃいん</rt></ruby>は<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>までに<ruby>出勤<rt>しゅっきん</rt></ruby>することになっていますか。',
          plain: 'しんにゅうしゃいんはまいあさなんじまでにしゅっきんすることになっていますか。',
          romaji: 'shinnyuu-shain wa maiasa nanji made ni shukkin suru koto ni natteimasu ka.',
          cn: '新员工每天早上规定几点前到岗？',
        },
        a: {
          jp: '<ruby>九時<rt>くじ</rt></ruby>までに<ruby>出勤<rt>しゅっきん</rt></ruby>することになっています。',
          plain: 'くじまでにしゅっきんすることになっています。',
          romaji: 'kuji made ni shukkin suru koto ni natteimasu.',
          cn: '规定九点前到岗。',
        },
      },
      {
        q: {
          jp: '<ruby>残業<rt>ざんぎょう</rt></ruby>するときは<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。',
          plain: 'ざんぎょうするときはなにをしなければなりませんか。',
          romaji: 'zangyou suru toki wa nani o shinakereba narimasen ka.',
          cn: '加班时必须做什么？',
        },
        a: {
          jp: '<ruby>上司<rt>じょうし</rt></ruby>の<ruby>許可<rt>きょか</rt></ruby>を<ruby>得<rt>え</rt></ruby>なければなりません。',
          plain: 'じょうしのきょかをえなければなりません。',
          romaji: 'joushi no kyoka o enakereba narimasen.',
          cn: '必须取得上司的许可。',
        },
      },
      {
        q: {
          jp: '<ruby>日本<rt>にほん</rt></ruby>でゴミはどう<ruby>出<rt>だ</rt></ruby>すことになっていますか。',
          plain: 'にほんでゴミはどうだすことになっていますか。',
          romaji: 'nihon de gomi wa dou dasu koto ni natteimasu ka.',
          cn: '在日本垃圾规定怎么扔？',
        },
        a: {
          jp: '<ruby>種類<rt>しゅるい</rt></ruby>ごとに<ruby>分<rt>わ</rt></ruby>けて<ruby>出<rt>だ</rt></ruby>すことになっています。',
          plain: 'しゅるいごとにわけてだすことになっています。',
          romaji: 'shurui-goto ni wakete dasu koto ni natteimasu.',
          cn: '规定按种类分开扔。',
        },
        hint: '「〜ことになっている」表示客观规定。',
      },
      {
        q: {
          jp: '<ruby>機密情報<rt>きみつじょうほう</rt></ruby>はどうすべきですか。',
          plain: 'きみつじょうほうはどうすべきですか。',
          romaji: 'kimitsu-jouhou wa dou su beki desu ka.',
          cn: '机密信息应该怎么处理？',
        },
        a: {
          jp: '<ruby>外部<rt>がいぶ</rt></ruby>に<ruby>漏<rt>も</rt></ruby>らすべきではありません。',
          plain: 'がいぶにもらすべきではありません。',
          romaji: 'gaibu ni morasu beki de wa arimasen.',
          cn: '不应该泄露给外部。',
        },
      },
    ],
    vocabulary: [
      { jp: '新入社員', kana: 'しんにゅうしゃいん', romaji: 'shinnyuu-shain', meaning: '新员工', pos: '名詞' },
      { jp: '規則', kana: 'きそく', romaji: 'kisoku', meaning: '规则', pos: '名詞' },
      { jp: '守ります', kana: 'まもります', romaji: 'mamorimasu', meaning: '遵守', pos: '動詞I' },
      { jp: '出勤します', kana: 'しゅっきんします', romaji: 'shukkin shimasu', meaning: '上班', pos: '動詞III' },
      { jp: '遅刻します', kana: 'ちこくします', romaji: 'chikoku shimasu', meaning: '迟到', pos: '動詞III' },
      { jp: '必ず', kana: 'かならず', romaji: 'kanarazu', meaning: '一定', pos: '副詞' },
      { jp: '事前', kana: 'じぜん', romaji: 'jizen', meaning: '事前', pos: '名詞' },
      { jp: '連絡します', kana: 'れんらくします', romaji: 'renraku shimasu', meaning: '联络', pos: '動詞III' },
      { jp: '会議', kana: 'かいぎ', romaji: 'kaigi', meaning: '会议', pos: '名詞' },
      { jp: '資料', kana: 'しりょう', romaji: 'shiryou', meaning: '资料', pos: '名詞' },
      { jp: '準備します', kana: 'じゅんびします', romaji: 'junbi shimasu', meaning: '准备', pos: '動詞III' },
      { jp: '取引先', kana: 'とりひきさき', romaji: 'torihiki-saki', meaning: '客户；交易方', pos: '名詞' },
      { jp: '丁寧', kana: 'ていねい', romaji: 'teinei', meaning: '礼貌；郑重', pos: 'な形容詞' },
      { jp: '名刺', kana: 'めいし', romaji: 'meishi', meaning: '名片', pos: '名詞' },
      { jp: '両手', kana: 'りょうて', romaji: 'ryoute', meaning: '双手', pos: '名詞' },
      { jp: '受け取ります', kana: 'うけとります', romaji: 'uketorimasu', meaning: '接受', pos: '動詞I' },
      { jp: '残業', kana: 'ざんぎょう', romaji: 'zangyou', meaning: '加班', pos: '名詞' },
      { jp: '上司', kana: 'じょうし', romaji: 'joushi', meaning: '上司', pos: '名詞' },
      { jp: '許可', kana: 'きょか', romaji: 'kyoka', meaning: '许可', pos: '名詞' },
      { jp: '機密情報', kana: 'きみつじょうほう', romaji: 'kimitsu-jouhou', meaning: '机密信息', pos: '名詞' },
      { jp: '漏らします', kana: 'もらします', romaji: 'morashimasu', meaning: '泄露', pos: '動詞I' },
      { jp: '申請します', kana: 'しんせいします', romaji: 'shinsei shimasu', meaning: '申请', pos: '動詞III' },
      { jp: '厳しい', kana: 'きびしい', romaji: 'kibishii', meaning: '严格', pos: 'い形容詞' },
      { jp: '組織', kana: 'そしき', romaji: 'soshiki', meaning: '组织', pos: '名詞' },
      { jp: '秩序', kana: 'ちつじょ', romaji: 'chitsujo', meaning: '秩序', pos: '名詞' },
      { jp: '保ちます', kana: 'たもちます', romaji: 'tamochimasu', meaning: '保持', pos: '動詞I' },
      { jp: '責任', kana: 'せきにん', romaji: 'sekinin', meaning: '责任', pos: '名詞' },
      { jp: '常識', kana: 'じょうしき', romaji: 'joushiki', meaning: '常识', pos: '名詞' },
      { jp: 'ゴミ', kana: 'ゴミ', romaji: 'gomi', meaning: '垃圾', pos: '名詞' },
      { jp: '種類', kana: 'しゅるい', romaji: 'shurui', meaning: '种类', pos: '名詞' },
      { jp: '燃えます', kana: 'もえます', romaji: 'moemasu', meaning: '燃烧', pos: '動詞II' },
      { jp: 'マナーモード', kana: 'マナーモード', romaji: 'manaa-moodo', meaning: '静音模式', pos: '名詞' },
      { jp: '迷惑', kana: 'めいわく', romaji: 'meiwaku', meaning: '麻烦；困扰', pos: '名詞' },
      { jp: '法律', kana: 'ほうりつ', romaji: 'houritsu', meaning: '法律', pos: '名詞' },
      { jp: 'ビジネスカジュアル', kana: 'ビジネスカジュアル', romaji: 'bijinesu-kajuaru', meaning: '商务休闲', pos: '名詞' },
    ],
    grammar: [
      {
        pattern: 'V ない形 + なければならない / なければいけない',
        name: '必须；不得不',
        explain: '表示客观必要或义务。「ならない」偏书面、广义、社会规范；「いけない」偏口语、个人或具体情境。变化：动词ない形去「ない」+「なければならない」。「する→しなければならない」「行く→行かなければならない」。是N3最核心的义务表达，否定双层结构（不...不行＝必须...）。',
        examples: [
          {
            jp: '<ruby>明日<rt>あした</rt></ruby>までにレポートを<ruby>出<rt>だ</rt></ruby>さなければならない。',
            plain: 'あしたまでにレポートをださなければならない。',
            cn: '必须在明天之前交报告。',
          },
          {
            jp: '<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>まなければいけません。',
            plain: 'くすりをのまなければいけません。',
            cn: '必须吃药。',
          },
        ],
      },
      {
        pattern: 'V ない形 + なきゃいけない / なきゃならない',
        name: '必须（口语缩约）',
        explain: '「なければ」的口语缩约形「なきゃ」。日常会话中频繁出现，比「なければ」更随意。「なきゃいけない」最常见，「なきゃならない」次之。再口语化甚至省略后半部分：「もう行かなきゃ」(我得走了)。书面文章、正式场合不用。',
        examples: [
          {
            jp: 'もう<ruby>帰<rt>かえ</rt></ruby>らなきゃいけない。',
            plain: 'もうかえらなきゃいけない。',
            cn: '我得回去了。',
          },
          {
            jp: '<ruby>明日<rt>あした</rt></ruby><ruby>早<rt>はや</rt></ruby>く<ruby>起<rt>お</rt></ruby>きなきゃ。',
            plain: 'あしたはやくおきなきゃ。',
            cn: '明天得早起。',
          },
        ],
      },
      {
        pattern: 'V ない形 + ねばならない',
        name: '必须（书面体）',
        explain: '「なければ」的文语形式「ねば」。多见于正式文章、新闻、论说文、公司规章。「する」例外为「せねばならない」。语气最郑重、最书面化。日常会话几乎不用，但能听懂在阅读中很重要。三者强弱：会话「なきゃ」< 中性「なければ」< 书面「ねば」。',
        examples: [
          {
            jp: '<ruby>規則<rt>きそく</rt></ruby>を<ruby>守<rt>まも</rt></ruby>らねばならない。',
            plain: 'きそくをまもらねばならない。',
            cn: '必须遵守规则。',
          },
          {
            jp: 'この<ruby>問題<rt>もんだい</rt></ruby>を<ruby>解決<rt>かいけつ</rt></ruby>せねばならない。',
            plain: 'このもんだいをかいけつせねばならない。',
            cn: '必须解决这个问题。',
          },
        ],
      },
      {
        pattern: 'V 辞書形 + べきだ / べきではない',
        name: '应当；不应该',
        explain: '表示说话人主观判断的「应当、应该」，带道义色彩。比「なければならない」（客观必须）更强调价值判断。「する」可用「するべき」或「すべき」（更书面）。否定「〜べきではない」(不应该)。注意：不用于法律、自然规律等客观事实，仅限主观主张。',
        examples: [
          {
            jp: '<ruby>約束<rt>やくそく</rt></ruby>は<ruby>守<rt>まも</rt></ruby>るべきだ。',
            plain: 'やくそくはまもるべきだ。',
            cn: '应该遵守约定。',
          },
          {
            jp: '<ruby>嘘<rt>うそ</rt></ruby>をつくべきではない。',
            plain: 'うそをつくべきではない。',
            cn: '不应该撒谎。',
          },
        ],
      },
      {
        pattern: 'V 辞書形 + ことになっている',
        name: '规定；约定俗成',
        explain: '表示客观规定、规则、约定俗成的事项，强调"已经定好的"。说话人不是规则制定者，只是陈述。与「なければならない」区别：「なければ」侧重个人有义务做，「ことになっている」侧重制度本身已有规定。否定句用「〜ないことになっている」。',
        examples: [
          {
            jp: '<ruby>会議<rt>かいぎ</rt></ruby>は<ruby>毎週<rt>まいしゅう</rt></ruby><ruby>月曜日<rt>げつようび</rt></ruby>に<ruby>行<rt>おこな</rt></ruby>うことになっている。',
            plain: 'かいぎはまいしゅうげつようびにおこなうことになっている。',
            cn: '会议规定每周一举行。',
          },
          {
            jp: '<ruby>校内<rt>こうない</rt></ruby>では<ruby>携帯<rt>けいたい</rt></ruby>を<ruby>使<rt>つか</rt></ruby>わないことになっています。',
            plain: 'こうないではけいたいをつかわないことになっています。',
            cn: '校内规定不使用手机。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 28 課 — 許可と禁止
  // ========================================================
  {
    id: 28,
    level: 'N3',
    title: {
      jp: '許可と禁止',
      romaji: 'kyoka to kinshi',
      cn: '许可与禁止',
      en: 'Permission and Prohibition',
    },
    goals: [
      '掌握许可（〜てもいい/〜ても構わない）和禁止（〜てはいけない）',
      '区分「〜なくてもいい」（不必）和「〜てはいけない」（不可）',
      '能用礼貌程度不同的句式表达请求和劝阻',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '図書館で',
          romaji: 'toshokan de',
          cn: '在图书馆',
        },
        sentences: [
          {
            jp: '<ruby>図書館<rt>としょかん</rt></ruby>には、<ruby>守<rt>まも</rt></ruby>らなければならないルールがいくつかある。',
            plain: 'としょかんには、まもらなければならないルールがいくつかある。',
            romaji: 'toshokan ni wa, mamoranakereba naranai ruuru ga ikutsu ka aru.',
            cn: '图书馆里有几条必须遵守的规则。',
          },
          {
            jp: '<ruby>館内<rt>かんない</rt></ruby>では<ruby>大声<rt>おおごえ</rt></ruby>で<ruby>話<rt>はな</rt></ruby>してはいけない。',
            plain: 'かんないではおおごえではなしてはいけない。',
            romaji: 'kannai de wa oogoe de hanashite wa ikenai.',
            cn: '馆内不可以大声说话。',
          },
          {
            jp: '<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>はふた<ruby>付<rt>つ</rt></ruby>きの<ruby>容器<rt>ようき</rt></ruby>ならば<ruby>持<rt>も</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>んでも<ruby>構<rt>かま</rt></ruby>わない。',
            plain: 'のみものはふたつきのようきならばもちこんでもかまわない。',
            romaji: 'nomimono wa futa-tsuki no youki naraba mochikonde mo kamawanai.',
            cn: '饮料如果是带盖的容器，可以带入。',
          },
          {
            jp: 'しかし、<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>を<ruby>食<rt>た</rt></ruby>べることは<ruby>禁止<rt>きんし</rt></ruby>されている。',
            plain: 'しかし、たべものをたべることはきんしされている。',
            romaji: 'shikashi, tabemono o taberu koto wa kinshi sareteiru.',
            cn: '但是，吃东西是被禁止的。',
          },
          {
            jp: '<ruby>本<rt>ほん</rt></ruby>を<ruby>借<rt>か</rt></ruby>りたい<ruby>場合<rt>ばあい</rt></ruby>、<ruby>図書館<rt>としょかん</rt></ruby>カードを<ruby>作<rt>つく</rt></ruby>らなくてはいけない。',
            plain: 'ほんをかりたいばあい、としょかんカードをつくらなくてはいけない。',
            romaji: 'hon o karitai baai, toshokan-kaado o tsukuranakute wa ikenai.',
            cn: '想借书时，必须办图书馆卡。',
          },
          {
            jp: 'カードを<ruby>作<rt>つく</rt></ruby>るのに<ruby>料金<rt>りょうきん</rt></ruby>を<ruby>払<rt>はら</rt></ruby>わなくてもいい。<ruby>無料<rt>むりょう</rt></ruby>である。',
            plain: 'カードをつくるのにりょうきんをはらわなくてもいい。むりょうである。',
            romaji: 'kaado o tsukuru no ni ryoukin o harawanakute mo ii. muryou de aru.',
            cn: '办卡不必付费。是免费的。',
          },
          {
            jp: '<ruby>一度<rt>いちど</rt></ruby>に<ruby>十冊<rt>じゅっさつ</rt></ruby>まで<ruby>借<rt>か</rt></ruby>りてもいい。',
            plain: 'いちどにじゅっさつまでかりてもいい。',
            romaji: 'ichido ni jussatsu made karite mo ii.',
            cn: '一次最多可以借十本。',
          },
          {
            jp: '<ruby>貸<rt>か</rt></ruby>し<ruby>出<rt>だ</rt></ruby>し<ruby>期間<rt>きかん</rt></ruby>は<ruby>二週間<rt>にしゅうかん</rt></ruby>で、<ruby>期間内<rt>きかんない</rt></ruby>に<ruby>返<rt>かえ</rt></ruby>さなければならない。',
            plain: 'かしだしきかんはにしゅうかんで、きかんないにかえさなければならない。',
            romaji: 'kashidashi-kikan wa nishuukan de, kikan-nai ni kaesanakereba naranai.',
            cn: '借阅期为两周，必须在期限内归还。',
          },
          {
            jp: '<ruby>本<rt>ほん</rt></ruby>に<ruby>書<rt>か</rt></ruby>き<ruby>込<rt>こ</rt></ruby>みをしたり、ページを<ruby>折<rt>お</rt></ruby>ったりしないでください。',
            plain: 'ほんにかきこみをしたり、ページをおったりしないでください。',
            romaji: 'hon ni kakikomi o shitari, peeji o ottari shinai de kudasai.',
            cn: '请不要在书上写字或折页。',
          },
          {
            jp: '<ruby>静<rt>しず</rt></ruby>かな<ruby>環境<rt>かんきょう</rt></ruby>を<ruby>守<rt>まも</rt></ruby>るために、<ruby>皆<rt>みな</rt></ruby>さんの<ruby>協力<rt>きょうりょく</rt></ruby>をお<ruby>願<rt>ねが</rt></ruby>いいたします。',
            plain: 'しずかなかんきょうをまもるために、みなさんのきょうりょくをおねがいいたします。',
            romaji: 'shizuka na kankyou o mamoru tame ni, mina-san no kyouryoku o o-negai itashimasu.',
            cn: '为维护安静的环境，敬请各位配合。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: 'マンションのルール',
          romaji: 'manshon no ruuru',
          cn: '公寓的规则',
        },
        sentences: [
          {
            jp: '<ruby>新<rt>あたら</rt></ruby>しいマンションに<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>してきたとき、<ruby>管理人<rt>かんりにん</rt></ruby>からルールの<ruby>説明<rt>せつめい</rt></ruby>を<ruby>受<rt>う</rt></ruby>けた。',
            plain: 'あたらしいマンションにひっこしてきたとき、かんりにんからルールのせつめいをうけた。',
            romaji: 'atarashii manshon ni hikkoshite kita toki, kanrinin kara ruuru no setsumei o uketa.',
            cn: '搬到新公寓时，从管理员那里接受了规则说明。',
          },
          {
            jp: 'まず、<ruby>夜<rt>よる</rt></ruby><ruby>十時<rt>じゅうじ</rt></ruby><ruby>以降<rt>いこう</rt></ruby>は<ruby>洗濯機<rt>せんたくき</rt></ruby>を<ruby>使<rt>つか</rt></ruby>ってはいけない。',
            plain: 'まず、よるじゅうじいこうはせんたくきをつかってはいけない。',
            romaji: 'mazu, yoru juuji ikou wa sentakuki o tsukatte wa ikenai.',
            cn: '首先，晚上十点以后不能用洗衣机。',
          },
          {
            jp: 'ペットは<ruby>小型犬<rt>こがたけん</rt></ruby>と<ruby>猫<rt>ねこ</rt></ruby>なら<ruby>飼<rt>か</rt></ruby>っても<ruby>構<rt>かま</rt></ruby>わない。',
            plain: 'ペットはこがたけんとねこならかってもかまわない。',
            romaji: 'petto wa kogata-ken to neko nara katte mo kamawanai.',
            cn: '宠物如果是小型犬和猫的话可以养。',
          },
          {
            jp: '<ruby>大型犬<rt>おおがたけん</rt></ruby>は<ruby>飼<rt>か</rt></ruby>ってはいけないことになっている。',
            plain: 'おおがたけんはかってはいけないことになっている。',
            romaji: 'oogata-ken wa katte wa ikenai koto ni natteiru.',
            cn: '规定不能养大型犬。',
          },
          {
            jp: 'ベランダで<ruby>大声<rt>おおごえ</rt></ruby>で<ruby>話<rt>はな</rt></ruby>したり、タバコを<ruby>吸<rt>す</rt></ruby>ったりしないでください。',
            plain: 'ベランダでおおごえではなしたり、タバコをすったりしないでください。',
            romaji: 'beranda de oogoe de hanashitari, tabako o suttari shinai de kudasai.',
            cn: '请不要在阳台上大声说话或吸烟。',
          },
          {
            jp: '<ruby>共用部分<rt>きょうようぶぶん</rt></ruby>に<ruby>私物<rt>しぶつ</rt></ruby>を<ruby>置<rt>お</rt></ruby>いてはならない。',
            plain: 'きょうようぶぶんにしぶつをおいてはならない。',
            romaji: 'kyouyou-bubun ni shibutsu o oite wa naranai.',
            cn: '不可以在公共区域放私人物品。',
          },
          {
            jp: '<ruby>自転車<rt>じてんしゃ</rt></ruby>は<ruby>指定<rt>してい</rt></ruby>の<ruby>場所<rt>ばしょ</rt></ruby>に<ruby>置<rt>お</rt></ruby>かなくてはいけない。',
            plain: 'じてんしゃはしていのばしょにおかなくてはいけない。',
            romaji: 'jitensha wa shitei no basho ni okanakute wa ikenai.',
            cn: '自行车必须放在指定地点。',
          },
          {
            jp: '<ruby>家賃<rt>やちん</rt></ruby>は<ruby>毎月<rt>まいつき</rt></ruby><ruby>末日<rt>まつじつ</rt></ruby>までに<ruby>振<rt>ふ</rt></ruby>り<ruby>込<rt>こ</rt></ruby>むことになっている。',
            plain: 'やちんはまいつきまつじつまでにふりこむことになっている。',
            romaji: 'yachin wa maitsuki matsujitsu made ni furikomu koto ni natteiru.',
            cn: '房租规定每月底前转账。',
          },
          {
            jp: '<ruby>少<rt>すこ</rt></ruby>し<ruby>面倒<rt>めんどう</rt></ruby>だが、<ruby>住<rt>す</rt></ruby>みやすい<ruby>環境<rt>かんきょう</rt></ruby>のためには<ruby>仕方<rt>しかた</rt></ruby>がない。',
            plain: 'すこしめんどうだが、すみやすいかんきょうのためにはしかたがない。',
            romaji: 'sukoshi mendou da ga, sumiyasui kankyou no tame ni wa shikata ga nai.',
            cn: '虽然有点麻烦，但为了宜居环境也是没办法的事。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: 'お客さんが家を訪ね、何かをしてもいいか主人に尋ねている。',
        cn: '客人到家做客，询问主人某事是否可以。',
      },
      lines: [
        {
          speaker: '<ruby>客<rt>きゃく</rt></ruby>',
          jp: 'すみません、ここでタバコを<ruby>吸<rt>す</rt></ruby>ってもいいですか。',
          plain: 'すみません、ここでタバコをすってもいいですか。',
          romaji: 'sumimasen, koko de tabako o sutte mo ii desu ka.',
          cn: '不好意思，这里可以吸烟吗？',
        },
        {
          speaker: '<ruby>主人<rt>しゅじん</rt></ruby>',
          jp: 'すみません、<ruby>家<rt>いえ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>では<ruby>吸<rt>す</rt></ruby>ってはいけないことにしているんです。ベランダなら<ruby>構<rt>かま</rt></ruby>いません。',
          plain: 'すみません、いえのなかではすってはいけないことにしているんです。ベランダならかまいません。',
          romaji: 'sumimasen, ie no naka de wa sutte wa ikenai koto ni shiteiru n desu. beranda nara kamaimasen.',
          cn: '不好意思，家里规定不能吸烟。阳台的话没关系。',
        },
        {
          speaker: '<ruby>客<rt>きゃく</rt></ruby>',
          jp: 'わかりました。<ruby>靴<rt>くつ</rt></ruby>は<ruby>脱<rt>ぬ</rt></ruby>がなくてもいいですか。',
          plain: 'わかりました。くつはぬがなくてもいいですか。',
          romaji: 'wakarimashita. kutsu wa nuganakute mo ii desu ka.',
          cn: '明白了。鞋可以不脱吗？',
        },
        {
          speaker: '<ruby>主人<rt>しゅじん</rt></ruby>',
          jp: 'いえいえ、<ruby>玄関<rt>げんかん</rt></ruby>で<ruby>必<rt>かなら</rt></ruby>ず<ruby>脱<rt>ぬ</rt></ruby>いでください。<ruby>日本<rt>にほん</rt></ruby>では<ruby>家<rt>いえ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>るとき<ruby>靴<rt>くつ</rt></ruby>を<ruby>脱<rt>ぬ</rt></ruby>がなければなりません。',
          plain: 'いえいえ、げんかんでかならずぬいでください。にほんではいえにはいるときくつをぬがなければなりません。',
          romaji: 'ieie, genkan de kanarazu nuide kudasai. nihon de wa ie ni hairu toki kutsu o nuganakereba narimasen.',
          cn: '不不，请务必在玄关脱鞋。在日本进家门必须脱鞋。',
        },
        {
          speaker: '<ruby>客<rt>きゃく</rt></ruby>',
          jp: 'すみません、<ruby>知<rt>し</rt></ruby>りませんでした。スリッパを<ruby>履<rt>は</rt></ruby>いてもいいですか。',
          plain: 'すみません、しりませんでした。スリッパをはいてもいいですか。',
          romaji: 'sumimasen, shirimasen deshita. surippa o haite mo ii desu ka.',
          cn: '抱歉，我不知道。可以穿拖鞋吗？',
        },
        {
          speaker: '<ruby>主人<rt>しゅじん</rt></ruby>',
          jp: 'もちろんです。どうぞ、こちらのスリッパを<ruby>使<rt>つか</rt></ruby>ってください。',
          plain: 'もちろんです。どうぞ、こちらのスリッパをつかってください。',
          romaji: 'mochiron desu. douzo, kochira no surippa o tsukatte kudasai.',
          cn: '当然。请用这边的拖鞋。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>図書館<rt>としょかん</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>を<ruby>食<rt>た</rt></ruby>べてもいいですか。',
          plain: 'としょかんのなかでたべものをたべてもいいですか。',
          romaji: 'toshokan no naka de tabemono o tabete mo ii desu ka.',
          cn: '在图书馆里可以吃东西吗？',
        },
        a: {
          jp: 'いいえ、<ruby>食<rt>た</rt></ruby>べてはいけません。<ruby>禁止<rt>きんし</rt></ruby>されています。',
          plain: 'いいえ、たべてはいけません。きんしされています。',
          romaji: 'iie, tabete wa ikemasen. kinshi sareteimasu.',
          cn: '不，不能吃。是被禁止的。',
        },
      },
      {
        q: {
          jp: '<ruby>図書館<rt>としょかん</rt></ruby>カードを<ruby>作<rt>つく</rt></ruby>るのにお<ruby>金<rt>かね</rt></ruby>を<ruby>払<rt>はら</rt></ruby>わなければなりませんか。',
          plain: 'としょかんカードをつくるのにおかねをはらわなければなりませんか。',
          romaji: 'toshokan-kaado o tsukuru no ni o-kane o harawanakereba narimasen ka.',
          cn: '办图书馆卡必须付钱吗？',
        },
        a: {
          jp: 'いいえ、<ruby>払<rt>はら</rt></ruby>わなくてもいいです。<ruby>無料<rt>むりょう</rt></ruby>です。',
          plain: 'いいえ、はらわなくてもいいです。むりょうです。',
          romaji: 'iie, harawanakute mo ii desu. muryou desu.',
          cn: '不，不必付。是免费的。',
        },
        hint: '注意「〜なくてもいい」表示不必，与「〜てはいけない」（不可）的区别。',
      },
      {
        q: {
          jp: 'マンションでペットは<ruby>飼<rt>か</rt></ruby>えますか。',
          plain: 'マンションでペットはかえますか。',
          romaji: 'manshon de petto wa kaemasu ka.',
          cn: '公寓里能养宠物吗？',
        },
        a: {
          jp: '<ruby>小型犬<rt>こがたけん</rt></ruby>と<ruby>猫<rt>ねこ</rt></ruby>なら<ruby>飼<rt>か</rt></ruby>っても<ruby>構<rt>かま</rt></ruby>いませんが、<ruby>大型犬<rt>おおがたけん</rt></ruby>はだめです。',
          plain: 'こがたけんとねこならかってもかまいませんが、おおがたけんはだめです。',
          romaji: 'kogata-ken to neko nara katte mo kamaimasen ga, oogata-ken wa dame desu.',
          cn: '小型犬和猫可以养，但大型犬不行。',
        },
      },
      {
        q: {
          jp: '<ruby>客<rt>きゃく</rt></ruby>は<ruby>家<rt>いえ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>るとき<ruby>靴<rt>くつ</rt></ruby>を<ruby>脱<rt>ぬ</rt></ruby>がなくてもいいですか。',
          plain: 'きゃくはいえにはいるときくつをぬがなくてもいいですか。',
          romaji: 'kyaku wa ie ni hairu toki kutsu o nuganakute mo ii desu ka.',
          cn: '客人进家门可以不脱鞋吗？',
        },
        a: {
          jp: 'いいえ、<ruby>必<rt>かなら</rt></ruby>ず<ruby>脱<rt>ぬ</rt></ruby>がなければなりません。',
          plain: 'いいえ、かならずぬがなければなりません。',
          romaji: 'iie, kanarazu nuganakereba narimasen.',
          cn: '不，必须脱。',
        },
      },
    ],
    vocabulary: [
      { jp: '館内', kana: 'かんない', romaji: 'kannai', meaning: '馆内', pos: '名詞' },
      { jp: '大声', kana: 'おおごえ', romaji: 'oogoe', meaning: '大声', pos: '名詞' },
      { jp: '飲み物', kana: 'のみもの', romaji: 'nomimono', meaning: '饮料', pos: '名詞' },
      { jp: 'ふた', kana: 'ふた', romaji: 'futa', meaning: '盖子', pos: '名詞' },
      { jp: '容器', kana: 'ようき', romaji: 'youki', meaning: '容器', pos: '名詞' },
      { jp: '持ち込みます', kana: 'もちこみます', romaji: 'mochikomimasu', meaning: '带入', pos: '動詞I' },
      { jp: '食べ物', kana: 'たべもの', romaji: 'tabemono', meaning: '食物', pos: '名詞' },
      { jp: '禁止します', kana: 'きんしします', romaji: 'kinshi shimasu', meaning: '禁止', pos: '動詞III' },
      { jp: '借ります', kana: 'かります', romaji: 'karimasu', meaning: '借（入）', pos: '動詞II' },
      { jp: '料金', kana: 'りょうきん', romaji: 'ryoukin', meaning: '费用', pos: '名詞' },
      { jp: '払います', kana: 'はらいます', romaji: 'haraimasu', meaning: '支付', pos: '動詞I' },
      { jp: '無料', kana: 'むりょう', romaji: 'muryou', meaning: '免费', pos: '名詞' },
      { jp: '冊', kana: 'さつ', romaji: 'satsu', meaning: '本（量词）', pos: '名詞' },
      { jp: '貸し出し', kana: 'かしだし', romaji: 'kashidashi', meaning: '出借', pos: '名詞' },
      { jp: '期間', kana: 'きかん', romaji: 'kikan', meaning: '期间', pos: '名詞' },
      { jp: '返します', kana: 'かえします', romaji: 'kaeshimasu', meaning: '归还', pos: '動詞I' },
      { jp: '書き込み', kana: 'かきこみ', romaji: 'kakikomi', meaning: '写入；备注', pos: '名詞' },
      { jp: '折ります', kana: 'おります', romaji: 'orimasu', meaning: '折', pos: '動詞I' },
      { jp: '環境', kana: 'かんきょう', romaji: 'kankyou', meaning: '环境', pos: '名詞' },
      { jp: '協力', kana: 'きょうりょく', romaji: 'kyouryoku', meaning: '配合；合作', pos: '名詞' },
      { jp: '引っ越します', kana: 'ひっこします', romaji: 'hikkoshimasu', meaning: '搬家', pos: '動詞I' },
      { jp: '管理人', kana: 'かんりにん', romaji: 'kanrinin', meaning: '管理员', pos: '名詞' },
      { jp: '説明', kana: 'せつめい', romaji: 'setsumei', meaning: '说明', pos: '名詞' },
      { jp: '以降', kana: 'いこう', romaji: 'ikou', meaning: '以后', pos: '名詞' },
      { jp: '洗濯機', kana: 'せんたくき', romaji: 'sentakuki', meaning: '洗衣机', pos: '名詞' },
      { jp: 'ペット', kana: 'ペット', romaji: 'petto', meaning: '宠物', pos: '名詞' },
      { jp: '飼います', kana: 'かいます', romaji: 'kaimasu', meaning: '饲养', pos: '動詞I' },
      { jp: '小型犬', kana: 'こがたけん', romaji: 'kogata-ken', meaning: '小型犬', pos: '名詞' },
      { jp: '大型犬', kana: 'おおがたけん', romaji: 'oogata-ken', meaning: '大型犬', pos: '名詞' },
      { jp: 'ベランダ', kana: 'ベランダ', romaji: 'beranda', meaning: '阳台', pos: '名詞' },
      { jp: 'タバコ', kana: 'タバコ', romaji: 'tabako', meaning: '香烟', pos: '名詞' },
      { jp: '吸います', kana: 'すいます', romaji: 'suimasu', meaning: '吸（烟）', pos: '動詞I' },
      { jp: '共用', kana: 'きょうよう', romaji: 'kyouyou', meaning: '共用', pos: '名詞' },
      { jp: '私物', kana: 'しぶつ', romaji: 'shibutsu', meaning: '私人物品', pos: '名詞' },
      { jp: '指定', kana: 'してい', romaji: 'shitei', meaning: '指定', pos: '名詞' },
      { jp: '家賃', kana: 'やちん', romaji: 'yachin', meaning: '房租', pos: '名詞' },
      { jp: '振り込みます', kana: 'ふりこみます', romaji: 'furikomimasu', meaning: '汇款', pos: '動詞I' },
      { jp: '玄関', kana: 'げんかん', romaji: 'genkan', meaning: '玄关', pos: '名詞' },
      { jp: 'スリッパ', kana: 'スリッパ', romaji: 'surippa', meaning: '拖鞋', pos: '名詞' },
      { jp: '履きます', kana: 'はきます', romaji: 'hakimasu', meaning: '穿（鞋/裤）', pos: '動詞I' },
    ],
    grammar: [
      {
        pattern: 'V て + もいい / もいいですか',
        name: '许可：可以...',
        explain: '表示许可或征求许可。「〜てもいい」（可以...）、「〜てもいいですか」（可以...吗？）。回答许可：「はい、いいですよ」。变化是动词て形+「もいい」。比「〜ても構わない」更口语化。问对方时是基础的请求许可表达。',
        examples: [
          {
            jp: 'ここに<ruby>座<rt>すわ</rt></ruby>ってもいいですか。',
            plain: 'ここにすわってもいいですか。',
            cn: '可以坐这里吗？',
          },
          {
            jp: '<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ってもいいですよ。',
            plain: 'しゃしんをとってもいいですよ。',
            cn: '可以拍照哦。',
          },
        ],
      },
      {
        pattern: 'V て + も構わない',
        name: '也不介意；也无妨（书面）',
        explain: '比「〜てもいい」更书面、客气，表示"即使...也没关系"。常用于规则说明、正式场合。「構わない」是「介意しない」的意思。否定形「〜ても構わない」本身已包含说话者不介意的意思，不需再变。也常以「〜ても構いません」礼貌体出现。',
        examples: [
          {
            jp: '<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>っても<ruby>構<rt>かま</rt></ruby>いません。',
            plain: 'しゃしんをとってもかまいません。',
            cn: '拍照也无妨。',
          },
          {
            jp: '<ruby>遅<rt>おく</rt></ruby>れても<ruby>構<rt>かま</rt></ruby>わないが、<ruby>必<rt>かなら</rt></ruby>ず<ruby>連絡<rt>れんらく</rt></ruby>してください。',
            plain: 'おくれてもかまわないが、かならずれんらくしてください。',
            cn: '迟到也没关系，但请务必联系。',
          },
        ],
      },
      {
        pattern: 'V て + はいけない / はならない',
        name: '禁止：不可以...',
        explain: '表示强烈的禁止。「〜てはいけない」常用于个人或具体场景的禁止；「〜てはならない」更书面，多见于法律、规章。否定形态：「ない形+ては」。礼貌体「〜てはいけません」。注意区别：「〜てはいけない」（不可做某事，主动禁止）vs「〜なくてはいけない」（必须做某事，必要义务）。',
        examples: [
          {
            jp: 'ここで<ruby>泳<rt>およ</rt></ruby>いではいけません。',
            plain: 'ここでおよいではいけません。',
            cn: '这里不可以游泳。',
          },
          {
            jp: '<ruby>嘘<rt>うそ</rt></ruby>をついてはならない。',
            plain: 'うそをついてはならない。',
            cn: '不可以撒谎。',
          },
        ],
      },
      {
        pattern: 'V ない形 + でください',
        name: '请不要...',
        explain: '礼貌的劝阻表达。语气比「〜てはいけません」缓和，常用于请求他人不要做某事。变化：动词ない形+「でください」。如果用「お+连用形+にならないでください」则更敬体。',
        examples: [
          {
            jp: 'ここで<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>らないでください。',
            plain: 'ここでしゃしんをとらないでください。',
            cn: '请不要在这里拍照。',
          },
          {
            jp: '<ruby>大声<rt>おおごえ</rt></ruby>で<ruby>話<rt>はな</rt></ruby>さないでください。',
            plain: 'おおごえではなさないでください。',
            cn: '请不要大声说话。',
          },
        ],
      },
      {
        pattern: 'V ない形 + なくてもいい',
        name: '不必；可以不...',
        explain: '表示"不必做"，强调没有义务。变化：动词ない形去「い」+「くてもいい」。「行かない→行かなくてもいい」。重点区别：「〜なくてもいい」（不必，无义务，可做可不做）vs「〜てはいけない」（禁止，不可做）。两者意思相反，不要混淆。例：「払わなくてもいい」(不必付)≠「払ってはいけない」(不可以付)。',
        examples: [
          {
            jp: '<ruby>明日<rt>あした</rt></ruby>は<ruby>来<rt>こ</rt></ruby>なくてもいいです。',
            plain: 'あしたはこなくてもいいです。',
            cn: '明天不来也可以。',
          },
          {
            jp: '<ruby>急<rt>いそ</rt></ruby>がなくてもいいよ、ゆっくりして。',
            plain: 'いそがなくてもいいよ、ゆっくりして。',
            cn: '不用着急，慢慢来。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 29 課 — 推量
  // ========================================================
  {
    id: 29,
    level: 'N3',
    title: {
      jp: '推量',
      romaji: 'suiryou',
      cn: '推测',
      en: 'Conjecture',
    },
    goals: [
      '掌握四种推量表达：だろう / かもしれない / にちがいない / と思われる',
      '理解推量的确定度梯度（30%→90%）',
      '能在不同场景里恰当地表达推测',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '明日の天気',
          romaji: 'ashita no tenki',
          cn: '明天的天气',
        },
        sentences: [
          {
            jp: '<ruby>天気予報<rt>てんきよほう</rt></ruby>によると、<ruby>明日<rt>あした</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るだろう。',
            plain: 'てんきよほうによると、あしたはあめがふるだろう。',
            romaji: 'tenki-yohou ni yoru to, ashita wa ame ga furu darou.',
            cn: '据天气预报，明天可能会下雨。',
          },
          {
            jp: '<ruby>朝<rt>あさ</rt></ruby>から<ruby>曇<rt>くも</rt></ruby>り、<ruby>午後<rt>ごご</rt></ruby>から<ruby>本格的<rt>ほんかくてき</rt></ruby>に<ruby>降<rt>ふ</rt></ruby>り<ruby>始<rt>はじ</rt></ruby>めるかもしれない。',
            plain: 'あさからくもり、ごごからほんかくてきにふりはじめるかもしれない。',
            romaji: 'asa kara kumori, gogo kara honkaku-teki ni furihajimeru kamoshirenai.',
            cn: '早上多云，下午开始可能会下大雨。',
          },
          {
            jp: '<ruby>気温<rt>きおん</rt></ruby>も<ruby>下<rt>さ</rt></ruby>がるので、<ruby>上着<rt>うわぎ</rt></ruby>を<ruby>持<rt>も</rt></ruby>って<ruby>出<rt>で</rt></ruby>かけたほうがいいでしょう。',
            plain: 'きおんもさがるので、うわぎをもってでかけたほうがいいでしょう。',
            romaji: 'kion mo sagaru node, uwagi o motte dekaketa hou ga ii deshou.',
            cn: '气温也会下降，最好带件外套出门吧。',
          },
          {
            jp: '<ruby>専門家<rt>せんもんか</rt></ruby>によれば、<ruby>今年<rt>ことし</rt></ruby>の<ruby>梅雨<rt>つゆ</rt></ruby>は<ruby>例年<rt>れいねん</rt></ruby>より<ruby>長<rt>なが</rt></ruby>くなると<ruby>思<rt>おも</rt></ruby>われる。',
            plain: 'せんもんかによれば、ことしのつゆはれいねんよりながくなるとおもわれる。',
            romaji: 'senmonka ni yoreba, kotoshi no tsuyu wa reinen yori nagaku naru to omowareru.',
            cn: '据专家所言，今年的梅雨被认为会比往年更长。',
          },
          {
            jp: '<ruby>地球温暖化<rt>ちきゅうおんだんか</rt></ruby>の<ruby>影響<rt>えいきょう</rt></ruby>であるにちがいない。',
            plain: 'ちきゅうおんだんかのえいきょうであるにちがいない。',
            romaji: 'chikyuu-ondanka no eikyou de aru ni chigainai.',
            cn: '一定是地球暖化的影响。',
          },
          {
            jp: '<ruby>気象庁<rt>きしょうちょう</rt></ruby>のデータを<ruby>見<rt>み</rt></ruby>ると、<ruby>過去<rt>かこ</rt></ruby><ruby>十年間<rt>じゅうねんかん</rt></ruby>で<ruby>気温<rt>きおん</rt></ruby>が<ruby>明<rt>あき</rt></ruby>らかに<ruby>上昇<rt>じょうしょう</rt></ruby>している。',
            plain: 'きしょうちょうのデータをみると、かこじゅうねんかんできおんがあきらかにじょうしょうしている。',
            romaji: 'kishou-chou no deeta o miru to, kako juunenkan de kion ga akiraka ni joushou shiteiru.',
            cn: '看气象厅的数据，过去十年气温明显在上升。',
          },
          {
            jp: 'このまま<ruby>続<rt>つづ</rt></ruby>けば、<ruby>夏<rt>なつ</rt></ruby>はもっと<ruby>暑<rt>あつ</rt></ruby>くなるだろう。',
            plain: 'このままつづけば、なつはもっとあつくなるだろう。',
            romaji: 'kono mama tsuzukeba, natsu wa motto atsuku naru darou.',
            cn: '照这样下去，夏天会变得更热吧。',
          },
          {
            jp: '<ruby>農業<rt>のうぎょう</rt></ruby>や<ruby>漁業<rt>ぎょぎょう</rt></ruby>にも<ruby>大<rt>おお</rt></ruby>きな<ruby>影響<rt>えいきょう</rt></ruby>が<ruby>出<rt>で</rt></ruby>るかもしれない。',
            plain: 'のうぎょうやぎょぎょうにもおおきなえいきょうがでるかもしれない。',
            romaji: 'nougyou ya gyogyou ni mo ookina eikyou ga deru kamoshirenai.',
            cn: '对农业和渔业可能也会有很大影响。',
          },
          {
            jp: '<ruby>個人<rt>こじん</rt></ruby>でできることは<ruby>限<rt>かぎ</rt></ruby>られているが、<ruby>節電<rt>せつでん</rt></ruby>などの<ruby>努力<rt>どりょく</rt></ruby>はすべきだと<ruby>思<rt>おも</rt></ruby>われる。',
            plain: 'こじんでできることはかぎられているが、せつでんなどのどりょくはすべきだとおもわれる。',
            romaji: 'kojin de dekiru koto wa kagirareteiru ga, setsuden nado no doryoku wa su beki da to omowareru.',
            cn: '个人能做的有限，但节电等努力被认为是应该做的。',
          },
          {
            jp: '<ruby>未来<rt>みらい</rt></ruby>の<ruby>世代<rt>せだい</rt></ruby>のために、<ruby>今<rt>いま</rt></ruby>から<ruby>行動<rt>こうどう</rt></ruby>を<ruby>起<rt>お</rt></ruby>こさなければならないだろう。',
            plain: 'みらいのせだいのために、いまからこうどうをおこさなければならないだろう。',
            romaji: 'mirai no sedai no tame ni, ima kara koudou o okosanakereba naranai darou.',
            cn: '为了未来的世代，必须从现在开始行动吧。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: 'あの人は誰だろう',
          romaji: 'ano hito wa dare darou',
          cn: '那个人是谁呢',
        },
        sentences: [
          {
            jp: 'カフェの<ruby>窓際<rt>まどぎわ</rt></ruby>に<ruby>座<rt>すわ</rt></ruby>っている<ruby>女性<rt>じょせい</rt></ruby>は、<ruby>誰<rt>だれ</rt></ruby>だろう。',
            plain: 'カフェのまどぎわにすわっているじょせいは、だれだろう。',
            romaji: 'kafe no madogiwa ni suwatteiru josei wa, dare darou.',
            cn: '坐在咖啡店窗边的那位女性，是谁呢？',
          },
          {
            jp: '<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>女優<rt>じょゆう</rt></ruby>かもしれない。',
            plain: 'ゆうめいなじょゆうかもしれない。',
            romaji: 'yuumei na joyuu kamoshirenai.',
            cn: '说不定是有名的女演员。',
          },
          {
            jp: '<ruby>顔<rt>かお</rt></ruby>がよく<ruby>似<rt>に</rt></ruby>ているから、<ruby>絶対<rt>ぜったい</rt></ruby>そうにちがいない。',
            plain: 'かおがよくにているから、ぜったいそうにちがいない。',
            romaji: 'kao ga yoku niteiru kara, zettai sou ni chigainai.',
            cn: '脸长得很像，肯定就是。',
          },
          {
            jp: 'でも、サングラスをしていないから、<ruby>違<rt>ちが</rt></ruby>うかもしれない。',
            plain: 'でも、サングラスをしていないから、ちがうかもしれない。',
            romaji: 'demo, sangurasu o shiteinai kara, chigau kamoshirenai.',
            cn: '不过，没戴墨镜，可能不是。',
          },
          {
            jp: '<ruby>隣<rt>となり</rt></ruby>に<ruby>男性<rt>だんせい</rt></ruby>が<ruby>座<rt>すわ</rt></ruby>って、<ruby>楽<rt>たの</rt></ruby>しそうに<ruby>話<rt>はな</rt></ruby>している。',
            plain: 'となりにだんせいがすわって、たのしそうにはなしている。',
            romaji: 'tonari ni dansei ga suwatte, tanoshisou ni hanashiteiru.',
            cn: '旁边坐了位男士，看起来聊得很开心。',
          },
          {
            jp: '<ruby>恋人<rt>こいびと</rt></ruby>同士だろう。',
            plain: 'こいびとどうしだろう。',
            romaji: 'koibito-doushi darou.',
            cn: '应该是情侣吧。',
          },
          {
            jp: 'いや、<ruby>仕事<rt>しごと</rt></ruby>の<ruby>打<rt>う</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせかもしれない。',
            plain: 'いや、しごとのうちあわせかもしれない。',
            romaji: 'iya, shigoto no uchiawase kamoshirenai.',
            cn: '不，也可能是工作会面。',
          },
          {
            jp: '<ruby>他人<rt>たにん</rt></ruby>のことを<ruby>勝手<rt>かって</rt></ruby>に<ruby>想像<rt>そうぞう</rt></ruby>するのは<ruby>失礼<rt>しつれい</rt></ruby>かもしれないが、<ruby>少<rt>すこ</rt></ruby>し<ruby>気<rt>き</rt></ruby>になる。',
            plain: 'たにんのことをかってにそうぞうするのはしつれいかもしれないが、すこしきになる。',
            romaji: 'tanin no koto o katte ni souzou suru no wa shitsurei kamoshirenai ga, sukoshi ki ni naru.',
            cn: '擅自想象别人也许失礼，但有点在意。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '会社の同僚同士で、新人の背景について推測している。',
        cn: '公司同事间猜测新人的背景。',
      },
      lines: [
        {
          speaker: '田中',
          jp: '<ruby>新<rt>あたら</rt></ruby>しく<ruby>入<rt>はい</rt></ruby>った<ruby>佐藤<rt>さとう</rt></ruby>さん、どこの<ruby>大学<rt>だいがく</rt></ruby>を<ruby>出<rt>で</rt></ruby>たんだろう。',
          plain: 'あたらしくはいったさとうさん、どこのだいがくをでたんだろう。',
          romaji: 'atarashiku haitta Satou-san, doko no daigaku o deta n darou.',
          cn: '新来的佐藤是哪所大学毕业的呢？',
        },
        {
          speaker: '<ruby>鈴木<rt>すずき</rt></ruby>',
          jp: '<ruby>英語<rt>えいご</rt></ruby>がぺらぺらだから、<ruby>留学<rt>りゅうがく</rt></ruby><ruby>経験<rt>けいけん</rt></ruby>があるかもしれないね。',
          plain: 'えいごがぺらぺらだから、りゅうがくけいけんがあるかもしれないね。',
          romaji: 'eigo ga perapera da kara, ryuugaku-keiken ga aru kamoshirenai ne.',
          cn: '英语很流利，说不定有留学经历。',
        },
        {
          speaker: '田中',
          jp: 'ああ、それは<ruby>絶対<rt>ぜったい</rt></ruby>あるにちがいない。<ruby>発音<rt>はつおん</rt></ruby>がネイティブみたいだもの。',
          plain: 'ああ、それはぜったいあるにちがいない。はつおんがネイティブみたいだもの。',
          romaji: 'aa, sore wa zettai aru ni chigainai. hatsuon ga neitibu mitai da mono.',
          cn: '啊，那肯定有。发音简直像母语者。',
        },
        {
          speaker: '<ruby>鈴木<rt>すずき</rt></ruby>',
          jp: '<ruby>仕事<rt>しごと</rt></ruby>もできるし、<ruby>性格<rt>せいかく</rt></ruby>もいいし、いい<ruby>人<rt>ひと</rt></ruby>だろうね。',
          plain: 'しごともできるし、せいかくもいいし、いいひとだろうね。',
          romaji: 'shigoto mo dekiru shi, seikaku mo ii shi, ii hito darou ne.',
          cn: '工作能干，性格又好，应该是好人吧。',
        },
        {
          speaker: '田中',
          jp: 'でも、まだ<ruby>独身<rt>どくしん</rt></ruby>かどうかわからない。<ruby>指輪<rt>ゆびわ</rt></ruby>をしていないから、<ruby>独身<rt>どくしん</rt></ruby>と<ruby>思<rt>おも</rt></ruby>われる。',
          plain: 'でも、まだどくしんかどうかわからない。ゆびわをしていないから、どくしんとおもわれる。',
          romaji: 'demo, mada dokushin ka douka wakaranai. yubiwa o shiteinai kara, dokushin to omowareru.',
          cn: '不过还不知道是否单身。没戴戒指，应该被认为是单身吧。',
        },
        {
          speaker: '<ruby>鈴木<rt>すずき</rt></ruby>',
          jp: 'まあ、<ruby>勝手<rt>かって</rt></ruby>に<ruby>想像<rt>そうぞう</rt></ruby>するのはやめよう。<ruby>本人<rt>ほんにん</rt></ruby>に<ruby>聞<rt>き</rt></ruby>かないとわからないよ。',
          plain: 'まあ、かってにそうぞうするのはやめよう。ほんにんにきかないとわからないよ。',
          romaji: 'maa, katte ni souzou suru no wa yameyou. honnin ni kikanai to wakaranai yo.',
          cn: '哎，别擅自猜了。不问本人不会知道的。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>明日<rt>あした</rt></ruby>の<ruby>天気<rt>てんき</rt></ruby>はどうでしょうか。',
          plain: 'あしたのてんきはどうでしょうか。',
          romaji: 'ashita no tenki wa dou deshou ka.',
          cn: '明天的天气怎么样？',
        },
        a: {
          jp: '<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るだろうと<ruby>言<rt>い</rt></ruby>われています。',
          plain: 'あめがふるだろうといわれています。',
          romaji: 'ame ga furu darou to iwareteimasu.',
          cn: '据说会下雨吧。',
        },
      },
      {
        q: {
          jp: '<ruby>今年<rt>ことし</rt></ruby>の<ruby>梅雨<rt>つゆ</rt></ruby>はどうなると<ruby>思<rt>おも</rt></ruby>われていますか。',
          plain: 'ことしのつゆはどうなるとおもわれていますか。',
          romaji: 'kotoshi no tsuyu wa dou naru to omowareteimasu ka.',
          cn: '今年的梅雨被认为会怎样？',
        },
        a: {
          jp: '<ruby>例年<rt>れいねん</rt></ruby>より<ruby>長<rt>なが</rt></ruby>くなると<ruby>思<rt>おも</rt></ruby>われています。',
          plain: 'れいねんよりながくなるとおもわれています。',
          romaji: 'reinen yori nagaku naru to omowareteimasu.',
          cn: '被认为会比往年更长。',
        },
        hint: '「と思われる」是论说文常用的客观推测表达。',
      },
      {
        q: {
          jp: '<ruby>佐藤<rt>さとう</rt></ruby>さんはなぜ<ruby>留学<rt>りゅうがく</rt></ruby><ruby>経験<rt>けいけん</rt></ruby>があるとみなさんは<ruby>思<rt>おも</rt></ruby>っていますか。',
          plain: 'さとうさんはなぜりゅうがくけいけんがあるとみなさんはおもっていますか。',
          romaji: 'Satou-san wa naze ryuugaku-keiken ga aru to mina-san wa omotteimasu ka.',
          cn: '为什么大家觉得佐藤有留学经验？',
        },
        a: {
          jp: '<ruby>英語<rt>えいご</rt></ruby>の<ruby>発音<rt>はつおん</rt></ruby>がネイティブみたいだから、<ruby>留学<rt>りゅうがく</rt></ruby>したにちがいないと<ruby>思<rt>おも</rt></ruby>っています。',
          plain: 'えいごのはつおんがネイティブみたいだから、りゅうがくしたにちがいないとおもっています。',
          romaji: 'eigo no hatsuon ga neitibu mitai da kara, ryuugaku shita ni chigainai to omotteimasu.',
          cn: '因为英语发音像母语者，所以肯定留过学。',
        },
      },
      {
        q: {
          jp: 'カフェにいる<ruby>女性<rt>じょせい</rt></ruby>は<ruby>確実<rt>かくじつ</rt></ruby>に<ruby>女優<rt>じょゆう</rt></ruby>ですか。',
          plain: 'カフェにいるじょせいはかくじつにじょゆうですか。',
          romaji: 'kafe ni iru josei wa kakujitsu ni joyuu desu ka.',
          cn: '咖啡店里的女性确实是演员吗？',
        },
        a: {
          jp: 'いいえ、<ruby>女優<rt>じょゆう</rt></ruby>かもしれませんが、<ruby>違<rt>ちが</rt></ruby>うかもしれません。',
          plain: 'いいえ、じょゆうかもしれませんが、ちがうかもしれません。',
          romaji: 'iie, joyuu kamoshiremasen ga, chigau kamoshiremasen.',
          cn: '不，可能是演员，也可能不是。',
        },
      },
    ],
    vocabulary: [
      { jp: '天気予報', kana: 'てんきよほう', romaji: 'tenki-yohou', meaning: '天气预报', pos: '名詞' },
      { jp: '曇り', kana: 'くもり', romaji: 'kumori', meaning: '阴天', pos: '名詞' },
      { jp: '本格的', kana: 'ほんかくてき', romaji: 'honkaku-teki', meaning: '正式；真正地', pos: 'な形容詞' },
      { jp: '気温', kana: 'きおん', romaji: 'kion', meaning: '气温', pos: '名詞' },
      { jp: '下がります', kana: 'さがります', romaji: 'sagarimasu', meaning: '下降', pos: '動詞I' },
      { jp: '上着', kana: 'うわぎ', romaji: 'uwagi', meaning: '外套', pos: '名詞' },
      { jp: '専門家', kana: 'せんもんか', romaji: 'senmonka', meaning: '专家', pos: '名詞' },
      { jp: '梅雨', kana: 'つゆ', romaji: 'tsuyu', meaning: '梅雨', pos: '名詞' },
      { jp: '例年', kana: 'れいねん', romaji: 'reinen', meaning: '往年', pos: '名詞' },
      { jp: '地球温暖化', kana: 'ちきゅうおんだんか', romaji: 'chikyuu-ondanka', meaning: '地球暖化', pos: '名詞' },
      { jp: '影響', kana: 'えいきょう', romaji: 'eikyou', meaning: '影响', pos: '名詞' },
      { jp: '気象庁', kana: 'きしょうちょう', romaji: 'kishou-chou', meaning: '气象厅', pos: '名詞' },
      { jp: 'データ', kana: 'データ', romaji: 'deeta', meaning: '数据', pos: '名詞' },
      { jp: '過去', kana: 'かこ', romaji: 'kako', meaning: '过去', pos: '名詞' },
      { jp: '上昇します', kana: 'じょうしょうします', romaji: 'joushou shimasu', meaning: '上升', pos: '動詞III' },
      { jp: '農業', kana: 'のうぎょう', romaji: 'nougyou', meaning: '农业', pos: '名詞' },
      { jp: '漁業', kana: 'ぎょぎょう', romaji: 'gyogyou', meaning: '渔业', pos: '名詞' },
      { jp: '個人', kana: 'こじん', romaji: 'kojin', meaning: '个人', pos: '名詞' },
      { jp: '限ります', kana: 'かぎります', romaji: 'kagirimasu', meaning: '限定', pos: '動詞I' },
      { jp: '節電', kana: 'せつでん', romaji: 'setsuden', meaning: '节电', pos: '名詞' },
      { jp: '努力', kana: 'どりょく', romaji: 'doryoku', meaning: '努力', pos: '名詞' },
      { jp: '未来', kana: 'みらい', romaji: 'mirai', meaning: '未来', pos: '名詞' },
      { jp: '世代', kana: 'せだい', romaji: 'sedai', meaning: '世代', pos: '名詞' },
      { jp: '行動', kana: 'こうどう', romaji: 'koudou', meaning: '行动', pos: '名詞' },
      { jp: '窓際', kana: 'まどぎわ', romaji: 'madogiwa', meaning: '窗边', pos: '名詞' },
      { jp: '女性', kana: 'じょせい', romaji: 'josei', meaning: '女性', pos: '名詞' },
      { jp: '女優', kana: 'じょゆう', romaji: 'joyuu', meaning: '女演员', pos: '名詞' },
      { jp: '似ます', kana: 'にます', romaji: 'nimasu', meaning: '相似', pos: '動詞II' },
      { jp: 'サングラス', kana: 'サングラス', romaji: 'sangurasu', meaning: '墨镜', pos: '名詞' },
      { jp: '男性', kana: 'だんせい', romaji: 'dansei', meaning: '男性', pos: '名詞' },
      { jp: '恋人', kana: 'こいびと', romaji: 'koibito', meaning: '恋人', pos: '名詞' },
      { jp: '打ち合わせ', kana: 'うちあわせ', romaji: 'uchiawase', meaning: '事先商量；会面', pos: '名詞' },
      { jp: '他人', kana: 'たにん', romaji: 'tanin', meaning: '他人', pos: '名詞' },
      { jp: '勝手に', kana: 'かってに', romaji: 'katte ni', meaning: '擅自', pos: '副詞' },
      { jp: '想像します', kana: 'そうぞうします', romaji: 'souzou shimasu', meaning: '想象', pos: '動詞III' },
      { jp: '失礼', kana: 'しつれい', romaji: 'shitsurei', meaning: '失礼', pos: 'な形容詞' },
      { jp: 'ぺらぺら', kana: 'ぺらぺら', romaji: 'perapera', meaning: '流利', pos: '副詞' },
      { jp: 'ネイティブ', kana: 'ネイティブ', romaji: 'neitibu', meaning: '母语者', pos: '名詞' },
      { jp: '独身', kana: 'どくしん', romaji: 'dokushin', meaning: '单身', pos: '名詞' },
      { jp: '指輪', kana: 'ゆびわ', romaji: 'yubiwa', meaning: '戒指', pos: '名詞' },
    ],
    grammar: [
      {
        pattern: '普通形 + だろう / でしょう',
        name: '推量：...吧',
        explain: '最常用的推量表达，表示说话人基于一定根据的推测，确定度约60-70%。「だろう」常体，「でしょう」礼貌体。常和「たぶん」「きっと」搭配。形容动词、名词后用「N/Na+だろう」（不加「だ」）：「彼は学生だろう」「静かだろう」。注意天气预报、新闻常用「でしょう」。',
        examples: [
          {
            jp: '<ruby>明日<rt>あした</rt></ruby>はたぶん<ruby>晴<rt>は</rt></ruby>れるだろう。',
            plain: 'あしたはたぶんはれるだろう。',
            cn: '明天大概会放晴吧。',
          },
          {
            jp: '<ruby>彼<rt>かれ</rt></ruby>は<ruby>来<rt>こ</rt></ruby>ないでしょう。',
            plain: 'かれはこないでしょう。',
            cn: '他不会来吧。',
          },
        ],
      },
      {
        pattern: '普通形 + かもしれない',
        name: '也许；可能',
        explain: '表示可能性较低的推测，确定度约30-50%。比「だろう」更不确定。礼貌体「かもしれません」，会话缩约「かも」。形容动词、名词后直接接：「静かかもしれない」「学生かもしれない」（不加「だ」）。常和「もしかしたら」「ひょっとして」搭配。',
        examples: [
          {
            jp: '<ruby>彼<rt>かれ</rt></ruby>は<ruby>病気<rt>びょうき</rt></ruby>かもしれません。',
            plain: 'かれはびょうきかもしれません。',
            cn: '他可能生病了。',
          },
          {
            jp: 'もしかしたら<ruby>遅<rt>おく</rt></ruby>れるかも。',
            plain: 'もしかしたらおくれるかも。',
            cn: '说不定会迟到。',
          },
        ],
      },
      {
        pattern: '普通形 + にちがいない',
        name: '一定是；肯定',
        explain: '表示说话人有强烈把握的推测，确定度约90%以上。比「だろう」「かもしれない」更肯定，但仍是推测（非事实）。礼貌体「にちがいありません」。形容动词、名词后直接接（不加「だ」）：「彼は学生にちがいない」。常和「きっと」「絶対」「絶対に」搭配。',
        examples: [
          {
            jp: '<ruby>電気<rt>でんき</rt></ruby>がついているから、<ruby>家<rt>いえ</rt></ruby>にいるにちがいない。',
            plain: 'でんきがついているから、いえにいるにちがいない。',
            cn: '灯亮着，肯定在家。',
          },
          {
            jp: 'これは<ruby>本物<rt>ほんもの</rt></ruby>にちがいありません。',
            plain: 'これはほんものにちがいありません。',
            cn: '这肯定是真品。',
          },
        ],
      },
      {
        pattern: '普通形 + と思われる',
        name: '被认为；普遍认为',
        explain: '「思う」的被动形「思われる」，表示一般人或社会普遍的推测、客观的判断。常用于论说文、新闻、报告等书面语。比「と思う」（个人意见）更客观、不出现说话人立场。学术论文里几乎不用「と思う」，多用「と思われる」「と考えられる」。',
        examples: [
          {
            jp: 'この<ruby>事件<rt>じけん</rt></ruby>は<ruby>偶然<rt>ぐうぜん</rt></ruby>ではないと<ruby>思<rt>おも</rt></ruby>われる。',
            plain: 'このじけんはぐうぜんではないとおもわれる。',
            cn: '这起事件被认为不是偶然。',
          },
          {
            jp: '<ruby>原因<rt>げんいん</rt></ruby>は<ruby>過労<rt>かろう</rt></ruby>であると<ruby>思<rt>おも</rt></ruby>われます。',
            plain: 'げんいんはかろうであるとおもわれます。',
            cn: '原因被认为是过劳。',
          },
        ],
      },
      {
        pattern: 'N + によると / によれば',
        name: '依据：根据...',
        explain: '表示信息来源，通常和推量句尾「〜そうだ」「〜ということだ」「〜だろう」搭配使用。「によると」更常用，「によれば」更书面。「天気予報によると、明日は雨だそうだ」是典型用法。',
        examples: [
          {
            jp: 'ニュースによると、<ruby>事故<rt>じこ</rt></ruby>があったそうだ。',
            plain: 'ニュースによると、じこがあったそうだ。',
            cn: '据新闻说，发生了事故。',
          },
          {
            jp: '<ruby>専門家<rt>せんもんか</rt></ruby>によれば、<ruby>景気<rt>けいき</rt></ruby>は<ruby>回復<rt>かいふく</rt></ruby>するという。',
            plain: 'せんもんかによれば、けいきはかいふくするという。',
            cn: '据专家说，经济会回升。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 30 課 — 接続表現 ①（逆接）
  // ========================================================
  {
    id: 30,
    level: 'N3',
    title: {
      jp: '接続表現①（逆接）',
      romaji: 'setsuzoku-hyougen 1 (gyakusetsu)',
      cn: '接续表现①（逆接）',
      en: 'Connectives 1: Adversatives',
    },
    goals: [
      '掌握四种逆接：のに / ても / けれど / にもかかわらず',
      '理解「のに」带不满情绪，「ても」中性，「にもかかわらず」最正式',
      '能恰当表达"明明...却..."的转折语气',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '努力したのに',
          romaji: 'doryoku shita no ni',
          cn: '明明努力了',
        },
        sentences: [
          {
            jp: '<ruby>三<rt>さん</rt></ruby>か<ruby>月<rt>げつ</rt></ruby>もこの<ruby>試験<rt>しけん</rt></ruby>のために<ruby>毎日<rt>まいにち</rt></ruby>勉強したのに、<ruby>結果<rt>けっか</rt></ruby>は<ruby>不合格<rt>ふごうかく</rt></ruby>だった。',
            plain: 'さんかげつもこのしけんのためにまいにちべんきょうしたのに、けっかはふごうかくだった。',
            romaji: 'sankagetsu mo kono shiken no tame ni mainichi benkyou shita no ni, kekka wa fugoukaku datta.',
            cn: '为这次考试明明每天学习了三个月，结果却是不合格。',
          },
          {
            jp: 'こんなに<ruby>頑張<rt>がんば</rt></ruby>ったのに、どうして<ruby>合格<rt>ごうかく</rt></ruby>できなかったのだろう。',
            plain: 'こんなにがんばったのに、どうしてごうかくできなかったのだろう。',
            romaji: 'konna ni ganbatta no ni, doushite goukaku dekinakatta no darou.',
            cn: '明明这么努力，为什么没合格呢。',
          },
          {
            jp: '<ruby>友達<rt>ともだち</rt></ruby>はあまり<ruby>勉強<rt>べんきょう</rt></ruby>しなかったにもかかわらず、<ruby>合格<rt>ごうかく</rt></ruby>した。',
            plain: 'ともだちはあまりべんきょうしなかったにもかかわらず、ごうかくした。',
            romaji: 'tomodachi wa amari benkyou shinakatta ni mo kakawarazu, goukaku shita.',
            cn: '朋友尽管没怎么学习，却合格了。',
          },
          {
            jp: 'それを<ruby>聞<rt>き</rt></ruby>いて、ちょっと<ruby>悔<rt>くや</rt></ruby>しい<ruby>気持<rt>きも</rt></ruby>ちになった。',
            plain: 'それをきいて、ちょっとくやしいきもちになった。',
            romaji: 'sore o kiite, chotto kuyashii kimochi ni natta.',
            cn: '听到这个，心里有点不甘。',
          },
          {
            jp: 'でも、<ruby>失敗<rt>しっぱい</rt></ruby>しても、また<ruby>挑戦<rt>ちょうせん</rt></ruby>すればいい。',
            plain: 'でも、しっぱいしても、またちょうせんすればいい。',
            romaji: 'demo, shippai shite mo, mata chousen sureba ii.',
            cn: '不过，即使失败了，再挑战就行。',
          },
          {
            jp: '<ruby>母<rt>はは</rt></ruby>に<ruby>結果<rt>けっか</rt></ruby>を<ruby>伝<rt>つた</rt></ruby>えると、<ruby>叱<rt>しか</rt></ruby>られると<ruby>思<rt>おも</rt></ruby>ったけれど、<ruby>母<rt>はは</rt></ruby>は<ruby>優<rt>やさ</rt></ruby>しく<ruby>励<rt>はげ</rt></ruby>ましてくれた。',
            plain: 'ははにけっかをつたえると、しかられるとおもったけれど、はははやさしくはげましてくれた。',
            romaji: 'haha ni kekka o tsutaeru to, shikarareru to omotta keredo, haha wa yasashiku hagemashite kureta.',
            cn: '把结果告诉母亲，本以为会被骂，但母亲温柔地鼓励了我。',
          },
          {
            jp: '「<ruby>努力<rt>どりょく</rt></ruby>しても、すぐに<ruby>結果<rt>けっか</rt></ruby>が<ruby>出<rt>で</rt></ruby>ないこともあるのよ」と<ruby>言<rt>い</rt></ruby>った。',
            plain: '「どりょくしても、すぐにけっかがでないこともあるのよ」といった。',
            romaji: '"doryoku shite mo, sugu ni kekka ga denai koto mo aru no yo" to itta.',
            cn: '她说"即使努力了，也有不会马上出结果的时候"。',
          },
          {
            jp: '<ruby>確<rt>たし</rt></ruby>かに、<ruby>結果<rt>けっか</rt></ruby>はだめだったけれど、<ruby>勉強<rt>べんきょう</rt></ruby>した<ruby>時間<rt>じかん</rt></ruby>は<ruby>無駄<rt>むだ</rt></ruby>ではなかったはずだ。',
            plain: 'たしかに、けっかはだめだったけれど、べんきょうしたじかんはむだではなかったはずだ。',
            romaji: 'tashika ni, kekka wa dame datta keredo, benkyou shita jikan wa muda de wa nakatta hazu da.',
            cn: '的确，结果不行，但学习的时间不应该是白费的。',
          },
          {
            jp: '<ruby>失敗<rt>しっぱい</rt></ruby>したにもかかわらず、<ruby>得<rt>え</rt></ruby>たものはたくさんあると<ruby>気<rt>き</rt></ruby>がついた。',
            plain: 'しっぱいしたにもかかわらず、えたものはたくさんあるときがついた。',
            romaji: 'shippai shita ni mo kakawarazu, eta mono wa takusan aru to ki ga tsuita.',
            cn: '尽管失败了，我意识到得到的东西也很多。',
          },
          {
            jp: '<ruby>来年<rt>らいねん</rt></ruby>もう<ruby>一度<rt>いちど</rt></ruby><ruby>挑戦<rt>ちょうせん</rt></ruby>しようと<ruby>決<rt>き</rt></ruby>めた。',
            plain: 'らいねんもういちどちょうせんしようときめた。',
            romaji: 'rainen mou ichido chousen shiyou to kimeta.',
            cn: '决定明年再挑战一次。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '雨でも行きます',
          romaji: 'ame de mo ikimasu',
          cn: '即使下雨也去',
        },
        sentences: [
          {
            jp: '<ruby>明日<rt>あした</rt></ruby>は<ruby>友達<rt>ともだち</rt></ruby>と<ruby>登山<rt>とざん</rt></ruby>に<ruby>行<rt>い</rt></ruby>く<ruby>予定<rt>よてい</rt></ruby>だ。',
            plain: 'あしたはともだちととざんにいくよていだ。',
            romaji: 'ashita wa tomodachi to tozan ni iku yotei da.',
            cn: '明天打算和朋友去登山。',
          },
          {
            jp: '<ruby>天気予報<rt>てんきよほう</rt></ruby>では<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るかもしれないと<ruby>言<rt>い</rt></ruby>っている。',
            plain: 'てんきよほうではあめがふるかもしれないといっている。',
            romaji: 'tenki-yohou de wa ame ga furu kamoshirenai to itteiru.',
            cn: '天气预报说可能会下雨。',
          },
          {
            jp: 'でも、<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っても<ruby>行<rt>い</rt></ruby>きます。',
            plain: 'でも、あめがふってもいきます。',
            romaji: 'demo, ame ga futte mo ikimasu.',
            cn: '不过，即使下雨也去。',
          },
          {
            jp: '<ruby>友達<rt>ともだち</rt></ruby>とずっと<ruby>前<rt>まえ</rt></ruby>から<ruby>計画<rt>けいかく</rt></ruby>していたのに、<ruby>中止<rt>ちゅうし</rt></ruby>するのはもったいない。',
            plain: 'ともだちとずっとまえからけいかくしていたのに、ちゅうしするのはもったいない。',
            romaji: 'tomodachi to zutto mae kara keikaku shiteita no ni, chuushi suru no wa mottainai.',
            cn: '明明和朋友老早就计划好了，取消太可惜了。',
          },
          {
            jp: 'レインコートと<ruby>長靴<rt>ながぐつ</rt></ruby>を<ruby>用意<rt>ようい</rt></ruby>すれば、<ruby>雨<rt>あめ</rt></ruby>でも<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>だ。',
            plain: 'レインコートとながぐつをよういすれば、あめでもだいじょうぶだ。',
            romaji: 'reinkooto to nagagutsu o youi sureba, ame de mo daijoubu da.',
            cn: '准备好雨衣和雨靴，下雨也没关系。',
          },
          {
            jp: 'どんなに<ruby>大変<rt>たいへん</rt></ruby>でも、<ruby>頂上<rt>ちょうじょう</rt></ruby>まで<ruby>登<rt>のぼ</rt></ruby>りたい。',
            plain: 'どんなにたいへんでも、ちょうじょうまでのぼりたい。',
            romaji: 'donna ni taihen de mo, choujou made noboritai.',
            cn: '不管多辛苦，也想登到山顶。',
          },
          {
            jp: '<ruby>雨<rt>あめ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>の<ruby>山<rt>やま</rt></ruby>もきれいかもしれない。',
            plain: 'あめのなかのやまもきれいかもしれない。',
            romaji: 'ame no naka no yama mo kirei kamoshirenai.',
            cn: '雨中的山也许也很美。',
          },
          {
            jp: '<ruby>雷<rt>かみなり</rt></ruby>が<ruby>鳴<rt>な</rt></ruby>ったら<ruby>危<rt>あぶ</rt></ruby>ないので、その<ruby>場合<rt>ばあい</rt></ruby>は<ruby>諦<rt>あきら</rt></ruby>めるけれど。',
            plain: 'かみなりがなったらあぶないので、そのばあいはあきらめるけれど。',
            romaji: 'kaminari ga nattara abunai node, sono baai wa akirameru keredo.',
            cn: '不过打雷的话很危险，那种情况就放弃。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '同僚同士で意外な結果に対する不満を話している。',
        cn: '同事间抱怨意外的结果。',
      },
      lines: [
        {
          speaker: '田中',
          jp: '<ruby>昨日<rt>きのう</rt></ruby>のプレゼン、<ruby>一<rt>いっ</rt></ruby>か<ruby>月<rt>げつ</rt></ruby>も<ruby>準備<rt>じゅんび</rt></ruby>したのに、<ruby>評価<rt>ひょうか</rt></ruby>が<ruby>低<rt>ひく</rt></ruby>かったよ。',
          plain: 'きのうのプレゼン、いっかげつもじゅんびしたのに、ひょうかがひくかったよ。',
          romaji: 'kinou no purezen, ikkagetsu mo junbi shita no ni, hyouka ga hikukatta yo.',
          cn: '昨天的演讲，明明准备了一个月，评价却很低。',
        },
        {
          speaker: '<ruby>鈴木<rt>すずき</rt></ruby>',
          jp: '<ruby>本当<rt>ほんとう</rt></ruby>？あんなに<ruby>頑張<rt>がんば</rt></ruby>っていたのに、<ruby>残念<rt>ざんねん</rt></ruby>だね。',
          plain: 'ほんとう？あんなにがんばっていたのに、ざんねんだね。',
          romaji: 'hontou? anna ni ganbatteita no ni, zannen da ne.',
          cn: '真的？明明那么努力，太遗憾了。',
        },
        {
          speaker: '田中',
          jp: '<ruby>内容<rt>ないよう</rt></ruby>はよかったけれど、<ruby>緊張<rt>きんちょう</rt></ruby>して<ruby>声<rt>こえ</rt></ruby>が<ruby>震<rt>ふる</rt></ruby>えてしまった。',
          plain: 'ないようはよかったけれど、きんちょうしてこえがふるえてしまった。',
          romaji: 'naiyou wa yokatta keredo, kinchou shite koe ga furuete shimatta.',
          cn: '内容是不错，但太紧张声音都抖了。',
        },
        {
          speaker: '<ruby>鈴木<rt>すずき</rt></ruby>',
          jp: 'うーん、<ruby>練習<rt>れんしゅう</rt></ruby>してもなかなか<ruby>慣<rt>な</rt></ruby>れないよね。<ruby>経験<rt>けいけん</rt></ruby>がないにもかかわらず、よく<ruby>頑張<rt>がんば</rt></ruby>ったよ。',
          plain: 'うーん、れんしゅうしてもなかなかなれないよね。けいけんがないにもかかわらず、よくがんばったよ。',
          romaji: 'uun, renshuu shite mo nakanaka narenai yo ne. keiken ga nai ni mo kakawarazu, yoku ganbatta yo.',
          cn: '嗯，就算练习也很难习惯。尽管没经验，已经很努力了。',
        },
        {
          speaker: '田中',
          jp: 'ありがとう。<ruby>次回<rt>じかい</rt></ruby>はもっとうまくやりたい。',
          plain: 'ありがとう。じかいはもっとうまくやりたい。',
          romaji: 'arigatou. jikai wa motto umaku yaritai.',
          cn: '谢谢。下次想做得更好。',
        },
        {
          speaker: '<ruby>鈴木<rt>すずき</rt></ruby>',
          jp: '<ruby>失敗<rt>しっぱい</rt></ruby>しても、それは<ruby>成長<rt>せいちょう</rt></ruby>のためだよ。<ruby>気<rt>き</rt></ruby>にしないで。',
          plain: 'しっぱいしても、それはせいちょうのためだよ。きにしないで。',
          romaji: 'shippai shite mo, sore wa seichou no tame da yo. ki ni shinai de.',
          cn: '即使失败也是为了成长。别在意。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>主人公<rt>しゅじんこう</rt></ruby>は<ruby>試験<rt>しけん</rt></ruby>のためにどのぐらい<ruby>勉強<rt>べんきょう</rt></ruby>しましたか。',
          plain: 'しゅじんこうはしけんのためにどのぐらいべんきょうしましたか。',
          romaji: 'shujinkou wa shiken no tame ni dono gurai benkyou shimashita ka.',
          cn: '主人公为考试学习了多久？',
        },
        a: {
          jp: '<ruby>三<rt>さん</rt></ruby>か<ruby>月<rt>げつ</rt></ruby><ruby>毎日<rt>まいにち</rt></ruby><ruby>勉強<rt>べんきょう</rt></ruby>しました。',
          plain: 'さんかげつまいにちべんきょうしました。',
          romaji: 'sankagetsu mainichi benkyou shimashita.',
          cn: '三个月每天学习。',
        },
      },
      {
        q: {
          jp: 'どうして<ruby>主人公<rt>しゅじんこう</rt></ruby>は<ruby>悔<rt>くや</rt></ruby>しい<ruby>気持<rt>きも</rt></ruby>ちになりましたか。',
          plain: 'どうしてしゅじんこうはくやしいきもちになりましたか。',
          romaji: 'doushite shujinkou wa kuyashii kimochi ni narimashita ka.',
          cn: '为什么主人公感到不甘？',
        },
        a: {
          jp: '<ruby>努力<rt>どりょく</rt></ruby>したのに<ruby>不合格<rt>ふごうかく</rt></ruby>で、<ruby>友達<rt>ともだち</rt></ruby>はあまり<ruby>勉強<rt>べんきょう</rt></ruby>しなかったにもかかわらず<ruby>合格<rt>ごうかく</rt></ruby>したからです。',
          plain: 'どりょくしたのにふごうかくで、ともだちはあまりべんきょうしなかったにもかかわらずごうかくしたからです。',
          romaji: 'doryoku shita no ni fugoukaku de, tomodachi wa amari benkyou shinakatta ni mo kakawarazu goukaku shita kara desu.',
          cn: '因为自己明明努力却不合格，朋友尽管没怎么学却合格了。',
        },
        hint: '注意「のに」带不甘，「にもかかわらず」客观转折。',
      },
      {
        q: {
          jp: '<ruby>明日<rt>あした</rt></ruby><ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>ったら、<ruby>登山<rt>とざん</rt></ruby>を<ruby>中止<rt>ちゅうし</rt></ruby>しますか。',
          plain: 'あしたあめがふったら、とざんをちゅうししますか。',
          romaji: 'ashita ame ga futtara, tozan o chuushi shimasu ka.',
          cn: '明天下雨的话，会取消登山吗？',
        },
        a: {
          jp: 'いいえ、<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っても<ruby>行<rt>い</rt></ruby>きます。でも、<ruby>雷<rt>かみなり</rt></ruby>が<ruby>鳴<rt>な</rt></ruby>ったら<ruby>諦<rt>あきら</rt></ruby>めます。',
          plain: 'いいえ、あめがふってもいきます。でも、かみなりがなったらあきらめます。',
          romaji: 'iie, ame ga futte mo ikimasu. demo, kaminari ga nattara akiramemasu.',
          cn: '不，下雨也去。不过打雷就放弃。',
        },
      },
      {
        q: {
          jp: '田中さんはどうしてプレゼンの<ruby>評価<rt>ひょうか</rt></ruby>が<ruby>低<rt>ひく</rt></ruby>かったのですか。',
          plain: 'たなかさんはどうしてプレゼンのひょうかがひくかったのですか。',
          romaji: 'Tanaka-san wa doushite purezen no hyouka ga hikukatta no desu ka.',
          cn: '田中为什么演讲评价低？',
        },
        a: {
          jp: '<ruby>内容<rt>ないよう</rt></ruby>はよかったけれど、<ruby>緊張<rt>きんちょう</rt></ruby>して<ruby>声<rt>こえ</rt></ruby>が<ruby>震<rt>ふる</rt></ruby>えてしまったからです。',
          plain: 'ないようはよかったけれど、きんちょうしてこえがふるえてしまったからです。',
          romaji: 'naiyou wa yokatta keredo, kinchou shite koe ga furuete shimatta kara desu.',
          cn: '因为内容虽然好，但太紧张导致声音发抖。',
        },
      },
    ],
    vocabulary: [
      { jp: '試験', kana: 'しけん', romaji: 'shiken', meaning: '考试', pos: '名詞' },
      { jp: '結果', kana: 'けっか', romaji: 'kekka', meaning: '结果', pos: '名詞' },
      { jp: '不合格', kana: 'ふごうかく', romaji: 'fugoukaku', meaning: '不合格', pos: '名詞' },
      { jp: '合格', kana: 'ごうかく', romaji: 'goukaku', meaning: '合格', pos: '名詞' },
      { jp: '悔しい', kana: 'くやしい', romaji: 'kuyashii', meaning: '不甘心', pos: 'い形容詞' },
      { jp: '気持ち', kana: 'きもち', romaji: 'kimochi', meaning: '心情', pos: '名詞' },
      { jp: '失敗します', kana: 'しっぱいします', romaji: 'shippai shimasu', meaning: '失败', pos: '動詞III' },
      { jp: '挑戦します', kana: 'ちょうせんします', romaji: 'chousen shimasu', meaning: '挑战', pos: '動詞III' },
      { jp: '伝えます', kana: 'つたえます', romaji: 'tsutaemasu', meaning: '传达', pos: '動詞II' },
      { jp: '叱ります', kana: 'しかります', romaji: 'shikarimasu', meaning: '责骂', pos: '動詞I' },
      { jp: '励まします', kana: 'はげまします', romaji: 'hagemashimasu', meaning: '鼓励', pos: '動詞I' },
      { jp: '無駄', kana: 'むだ', romaji: 'muda', meaning: '徒劳；浪费', pos: 'な形容詞' },
      { jp: 'はず', kana: 'はず', romaji: 'hazu', meaning: '应该', pos: '名詞' },
      { jp: '気がつきます', kana: 'きがつきます', romaji: 'ki ga tsukimasu', meaning: '注意到', pos: '動詞I' },
      { jp: '決めます', kana: 'きめます', romaji: 'kimemasu', meaning: '决定', pos: '動詞II' },
      { jp: '登山', kana: 'とざん', romaji: 'tozan', meaning: '登山', pos: '名詞' },
      { jp: '予定', kana: 'よてい', romaji: 'yotei', meaning: '预定', pos: '名詞' },
      { jp: '中止します', kana: 'ちゅうしします', romaji: 'chuushi shimasu', meaning: '中止', pos: '動詞III' },
      { jp: 'もったいない', kana: 'もったいない', romaji: 'mottainai', meaning: '可惜', pos: 'い形容詞' },
      { jp: 'レインコート', kana: 'レインコート', romaji: 'reinkooto', meaning: '雨衣', pos: '名詞' },
      { jp: '長靴', kana: 'ながぐつ', romaji: 'nagagutsu', meaning: '雨靴', pos: '名詞' },
      { jp: '用意します', kana: 'よういします', romaji: 'youi shimasu', meaning: '准备', pos: '動詞III' },
      { jp: '頂上', kana: 'ちょうじょう', romaji: 'choujou', meaning: '山顶', pos: '名詞' },
      { jp: '登ります', kana: 'のぼります', romaji: 'noborimasu', meaning: '攀登', pos: '動詞I' },
      { jp: '雷', kana: 'かみなり', romaji: 'kaminari', meaning: '雷', pos: '名詞' },
      { jp: '鳴ります', kana: 'なります', romaji: 'narimasu', meaning: '响', pos: '動詞I' },
      { jp: '危ない', kana: 'あぶない', romaji: 'abunai', meaning: '危险', pos: 'い形容詞' },
      { jp: '諦めます', kana: 'あきらめます', romaji: 'akiramemasu', meaning: '放弃', pos: '動詞II' },
      { jp: 'プレゼン', kana: 'プレゼン', romaji: 'purezen', meaning: '演讲展示', pos: '名詞' },
      { jp: '評価', kana: 'ひょうか', romaji: 'hyouka', meaning: '评价', pos: '名詞' },
      { jp: '残念', kana: 'ざんねん', romaji: 'zannen', meaning: '遗憾', pos: 'な形容詞' },
      { jp: '内容', kana: 'ないよう', romaji: 'naiyou', meaning: '内容', pos: '名詞' },
      { jp: '緊張します', kana: 'きんちょうします', romaji: 'kinchou shimasu', meaning: '紧张', pos: '動詞III' },
      { jp: '震えます', kana: 'ふるえます', romaji: 'furuemasu', meaning: '颤抖', pos: '動詞II' },
      { jp: '慣れます', kana: 'なれます', romaji: 'naremasu', meaning: '习惯', pos: '動詞II' },
      { jp: '経験', kana: 'けいけん', romaji: 'keiken', meaning: '经验', pos: '名詞' },
      { jp: '次回', kana: 'じかい', romaji: 'jikai', meaning: '下次', pos: '名詞' },
      { jp: '成長', kana: 'せいちょう', romaji: 'seichou', meaning: '成长', pos: '名詞' },
    ],
    grammar: [
      {
        pattern: '普通形 + のに',
        name: '逆接（带不满情绪）',
        explain: '"明明...却..."。表示与预期相反的结果，且带有说话人的不满、惋惜、惊讶等强烈情绪色彩。这是与「ても」「けれど」最大的区别——「のに」是情感的、主观的。形容动词、名词后用「Na/N+なのに」：「静かなのに」「学生なのに」。不能用于客观陈述或自己有意识的让步。常带感叹语气结尾。',
        examples: [
          {
            jp: '<ruby>毎日<rt>まいにち</rt></ruby><ruby>練習<rt>れんしゅう</rt></ruby>したのに、<ruby>上手<rt>じょうず</rt></ruby>になれない。',
            plain: 'まいにちれんしゅうしたのに、じょうずになれない。',
            cn: '明明每天练习，却没变厉害。',
          },
          {
            jp: '<ruby>子供<rt>こども</rt></ruby>なのに、<ruby>大人<rt>おとな</rt></ruby>みたいに<ruby>話<rt>はな</rt></ruby>す。',
            plain: 'こどもなのに、おとなみたいにはなす。',
            cn: '明明是小孩，说话却像大人。',
          },
        ],
      },
      {
        pattern: 'V て形 + も / Aく + ても / Na・N + でも',
        name: '逆接（中性，可表假设）',
        explain: '"即使...也"。中性的逆接，没有情感色彩，可以表示既成事实或假设条件。变化：动词て形+も；い形容词去い+くても；な形容词、名词+でも。「雨が降っても行く」（即使下雨也去）。常和「どんなに〜ても」「いくら〜ても」搭配，强调"不论...都..."。',
        examples: [
          {
            jp: 'どんなに<ruby>高<rt>たか</rt></ruby>くても<ruby>買<rt>か</rt></ruby>います。',
            plain: 'どんなにたかくてもかいます。',
            cn: '不管多贵也要买。',
          },
          {
            jp: '<ruby>子供<rt>こども</rt></ruby>でもわかる<ruby>問題<rt>もんだい</rt></ruby>です。',
            plain: 'こどもでもわかるもんだいです。',
            cn: '即使是小孩也能懂的问题。',
          },
        ],
      },
      {
        pattern: '普通形 + けれど(も) / けど',
        name: '逆接（口语转折）',
        explain: '"但是..."。日常口语最常用的转折。「けれども」最郑重，「けれど」中性，「けど」最口语化。也可放句末作"留有余地"的客气表达：「ちょっと聞きたいんですけど…」。和「が」用法相近但更口语化。注意：句中用，前后两句构成对比。',
        examples: [
          {
            jp: 'この<ruby>店<rt>みせ</rt></ruby>は<ruby>高<rt>たか</rt></ruby>いけれど、<ruby>美味<rt>おい</rt></ruby>しい。',
            plain: 'このみせはたかいけれど、おいしい。',
            cn: '这家店贵但好吃。',
          },
          {
            jp: 'すみません、ちょっと<ruby>聞<rt>き</rt></ruby>きたいんですけど。',
            plain: 'すみません、ちょっとききたいんですけど。',
            cn: '不好意思，我想问一下…',
          },
        ],
      },
      {
        pattern: '普通形 + にもかかわらず',
        name: '逆接（书面，最正式）',
        explain: '"尽管...但是..."。最正式、最书面的逆接表达，多用于报告、新闻、论说文。意思接近「のに」但没有情感色彩，更客观。「Nにもかかわらず」（不需要「である」）也常见。和「ても」相比，「にもかかわらず」语气更强，强调"按理说不该...但还是..."。',
        examples: [
          {
            jp: '<ruby>悪天候<rt>あくてんこう</rt></ruby>にもかかわらず、<ruby>試合<rt>しあい</rt></ruby>は<ruby>行<rt>おこな</rt></ruby>われた。',
            plain: 'あくてんこうにもかかわらず、しあいはおこなわれた。',
            cn: '尽管天气恶劣，比赛仍举行了。',
          },
          {
            jp: '<ruby>努力<rt>どりょく</rt></ruby>したにもかかわらず、<ruby>結果<rt>けっか</rt></ruby>は<ruby>出<rt>で</rt></ruby>なかった。',
            plain: 'どりょくしたにもかかわらず、けっかはでなかった。',
            cn: '尽管努力了，没出结果。',
          },
        ],
      },
      {
        pattern: 'どんなに / いくら〜ても',
        name: '不论多么...也...',
        explain: '强调程度的让步。「どんなに高くても買う」（不管多贵也买）。和单纯的「ても」相比，加上「どんなに」「いくら」更强调极端程度。常和否定结尾搭配：「いくら言っても聞かない」（怎么说都不听）。',
        examples: [
          {
            jp: 'いくら<ruby>呼<rt>よ</rt></ruby>んでも<ruby>返事<rt>へんじ</rt></ruby>がない。',
            plain: 'いくらよんでもへんじがない。',
            cn: '怎么叫都没有回应。',
          },
          {
            jp: 'どんなに<ruby>疲<rt>つか</rt></ruby>れていても、<ruby>仕事<rt>しごと</rt></ruby>は<ruby>休<rt>やす</rt></ruby>めない。',
            plain: 'どんなにつかれていても、しごとはやすめない。',
            cn: '不管多累，工作都不能休。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 31 課 — 接続表現②（同时・状态）
  // ========================================================
  {
    id: 31,
    level: 'N3',
    title: {
      jp: '接続表現②（同時・状態）',
      romaji: 'setsuzoku-hyougen 2 (douji・joutai)',
      cn: '接续表现②（同时・状态）',
      en: 'Connectives 2: Simultaneous and States',
    },
    goals: [
      '掌握「〜ながら」（同时进行）、「〜たまま」（保持状态）、「〜ついでに」（顺便）',
      '理解「ながら」要求主语相同',
      '能描述多任务行为及附带行为',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '散歩しながら',
          romaji: 'sanpo shinagara',
          cn: '边散步边想',
        },
        sentences: [
          {
            jp: '<ruby>毎朝<rt>まいあさ</rt></ruby>、<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聴<rt>き</rt></ruby>きながら<ruby>公園<rt>こうえん</rt></ruby>を<ruby>散歩<rt>さんぽ</rt></ruby>するのが<ruby>習慣<rt>しゅうかん</rt></ruby>だ。',
            plain: 'まいあさ、おんがくをききながらこうえんをさんぽするのがしゅうかんだ。',
            romaji: 'maiasa, ongaku o kikinagara kouen o sanpo suru no ga shuukan da.',
            cn: '每天早晨边听音乐边在公园散步是我的习惯。',
          },
          {
            jp: '<ruby>歩<rt>ある</rt></ruby>きながら、<ruby>今日<rt>きょう</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>のことを<ruby>考<rt>かんが</rt></ruby>える。',
            plain: 'あるきながら、きょうのしごとのことをかんがえる。',
            romaji: 'arukinagara, kyou no shigoto no koto o kangaeru.',
            cn: '一边走，一边想今天的工作。',
          },
          {
            jp: '<ruby>新鮮<rt>しんせん</rt></ruby>な<ruby>空気<rt>くうき</rt></ruby>を<ruby>吸<rt>す</rt></ruby>いながら<ruby>頭<rt>あたま</rt></ruby>を<ruby>整理<rt>せいり</rt></ruby>すると、いいアイデアが<ruby>浮<rt>う</rt></ruby>かぶことが<ruby>多<rt>おお</rt></ruby>い。',
            plain: 'しんせんなくうきをすいながらあたまをせいりすると、いいアイデアがうかぶことがおおい。',
            romaji: 'shinsen na kuuki o suinagara atama o seiri suru to, ii aidea ga ukabu koto ga ooi.',
            cn: '一边吸新鲜空气一边整理思绪，常常会浮现好点子。',
          },
          {
            jp: '<ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>って、テレビをつけたまま<ruby>朝食<rt>ちょうしょく</rt></ruby>を<ruby>食<rt>た</rt></ruby>べる。',
            plain: 'いえにかえって、テレビをつけたままちょうしょくをたべる。',
            romaji: 'ie ni kaette, terebi o tsuketa mama choushoku o taberu.',
            cn: '回到家，电视开着吃早饭。',
          },
          {
            jp: 'ニュースを<ruby>見<rt>み</rt></ruby>ながらコーヒーを<ruby>飲<rt>の</rt></ruby>むのが<ruby>楽<rt>たの</rt></ruby>しみだ。',
            plain: 'ニュースをみながらコーヒーをのむのがたのしみだ。',
            romaji: 'nyuusu o minagara koohii o nomu no ga tanoshimi da.',
            cn: '边看新闻边喝咖啡是一种享受。',
          },
          {
            jp: '<ruby>会社<rt>かいしゃ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くついでに、<ruby>銀行<rt>ぎんこう</rt></ruby>に<ruby>寄<rt>よ</rt></ruby>って<ruby>振<rt>ふ</rt></ruby>り<ruby>込<rt>こ</rt></ruby>みをする。',
            plain: 'かいしゃへいくついでに、ぎんこうによってふりこみをする。',
            romaji: 'kaisha e iku tsuide ni, ginkou ni yotte furikomi o suru.',
            cn: '去公司顺便去银行办转账。',
          },
          {
            jp: '<ruby>仕事中<rt>しごとちゅう</rt></ruby>は、パソコンの<ruby>画面<rt>がめん</rt></ruby>を<ruby>見<rt>み</rt></ruby>ながら<ruby>電話<rt>でんわ</rt></ruby>することも<ruby>多<rt>おお</rt></ruby>い。',
            plain: 'しごとちゅうは、パソコンのがめんをみながらでんわすることもおおい。',
            romaji: 'shigoto-chuu wa, pasokon no gamen o minagara denwa suru koto mo ooi.',
            cn: '工作中也常常一边看电脑屏幕一边打电话。',
          },
          {
            jp: 'でも、メガネをかけたまま<ruby>居眠<rt>いねむ</rt></ruby>りしてしまうこともある。',
            plain: 'でも、メガネをかけたままいねむりしてしまうこともある。',
            romaji: 'demo, megane o kaketa mama inemuri shite shimau koto mo aru.',
            cn: '不过，也有戴着眼镜打瞌睡的时候。',
          },
          {
            jp: '<ruby>夜<rt>よる</rt></ruby>は<ruby>家事<rt>かじ</rt></ruby>をしながらラジオを<ruby>聴<rt>き</rt></ruby>くのが<ruby>好<rt>す</rt></ruby>きだ。',
            plain: 'よるはかじをしながらラジオをきくのがすきだ。',
            romaji: 'yoru wa kaji o shinagara rajio o kiku no ga suki da.',
            cn: '晚上喜欢边做家务边听广播。',
          },
          {
            jp: 'マルチタスクは<ruby>効率的<rt>こうりつてき</rt></ruby>に<ruby>見<rt>み</rt></ruby>えるが、<ruby>集中<rt>しゅうちゅう</rt></ruby>できないこともあるので、<ruby>注意<rt>ちゅうい</rt></ruby>すべきだろう。',
            plain: 'マルチタスクはこうりつてきにみえるが、しゅうちゅうできないこともあるので、ちゅういすべきだろう。',
            romaji: 'maruchi-tasuku wa kouritsu-teki ni mieru ga, shuuchuu dekinai koto mo aru node, chuui suru beki darou.',
            cn: '多任务看似高效，但有时无法集中，应该注意。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: '買い物のついでに',
          romaji: 'kaimono no tsuide ni',
          cn: '购物顺便',
        },
        sentences: [
          {
            jp: '<ruby>週末<rt>しゅうまつ</rt></ruby>、スーパーに<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>に<ruby>行<rt>い</rt></ruby>くついでに、<ruby>図書館<rt>としょかん</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>を<ruby>返<rt>かえ</rt></ruby>しに<ruby>行<rt>い</rt></ruby>った。',
            plain: 'しゅうまつ、スーパーにかいものにいくついでに、としょかんにほんをかえしにいった。',
            romaji: 'shuumatsu, suupaa ni kaimono ni iku tsuide ni, toshokan ni hon o kaeshi ni itta.',
            cn: '周末，去超市购物顺便去图书馆还书。',
          },
          {
            jp: '<ruby>図書館<rt>としょかん</rt></ruby>に<ruby>寄<rt>よ</rt></ruby>ったついでに、<ruby>新<rt>あたら</rt></ruby>しい<ruby>本<rt>ほん</rt></ruby>も<ruby>借<rt>か</rt></ruby>りた。',
            plain: 'としょかんによったついでに、あたらしいほんもかりた。',
            romaji: 'toshokan ni yotta tsuide ni, atarashii hon mo karita.',
            cn: '去图书馆顺便也借了新书。',
          },
          {
            jp: '<ruby>帰<rt>かえ</rt></ruby>り<ruby>道<rt>みち</rt></ruby>で、<ruby>歩<rt>ある</rt></ruby>きながら<ruby>友達<rt>ともだち</rt></ruby>に<ruby>電話<rt>でんわ</rt></ruby>をした。',
            plain: 'かえりみちで、あるきながらともだちにでんわをした。',
            romaji: 'kaerimichi de, arukinagara tomodachi ni denwa o shita.',
            cn: '回家路上，边走边给朋友打电话。',
          },
          {
            jp: '<ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>って、<ruby>靴<rt>くつ</rt></ruby>を<ruby>履<rt>は</rt></ruby>いたまま<ruby>玄関<rt>げんかん</rt></ruby>でメールを<ruby>確認<rt>かくにん</rt></ruby>してしまった。',
            plain: 'いえにかえって、くつをはいたままげんかんでメールをかくにんしてしまった。',
            romaji: 'ie ni kaette, kutsu o haita mama genkan de meeru o kakunin shite shimatta.',
            cn: '回到家，鞋穿着就在玄关确认邮件了。',
          },
          {
            jp: '<ruby>夫<rt>おっと</rt></ruby>に「<ruby>靴<rt>くつ</rt></ruby>を<ruby>脱<rt>ぬ</rt></ruby>いで」と<ruby>注意<rt>ちゅうい</rt></ruby>された。',
            plain: 'おっとに「くつをぬいで」とちゅういされた。',
            romaji: 'otto ni "kutsu o nuide" to chuui sareta.',
            cn: '被丈夫提醒"脱鞋"。',
          },
          {
            jp: '<ruby>夕食<rt>ゆうしょく</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>をしながら、<ruby>子供<rt>こども</rt></ruby>と<ruby>話<rt>はな</rt></ruby>すのが<ruby>毎日<rt>まいにち</rt></ruby>の<ruby>楽<rt>たの</rt></ruby>しみだ。',
            plain: 'ゆうしょくのじゅんびをしながら、こどもとはなすのがまいにちのたのしみだ。',
            romaji: 'yuushoku no junbi o shinagara, kodomo to hanasu no ga mainichi no tanoshimi da.',
            cn: '边准备晚饭边和孩子聊天，是每天的乐趣。',
          },
          {
            jp: '<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>後<rt>あと</rt></ruby>、テレビをつけたまま<ruby>寝<rt>ね</rt></ruby>てしまうことがある。',
            plain: 'しょくじのあと、テレビをつけたままねてしまうことがある。',
            romaji: 'shokuji no ato, terebi o tsuketa mama nete shimau koto ga aru.',
            cn: '吃完饭，有时电视开着就睡着了。',
          },
          {
            jp: '<ruby>朝<rt>あさ</rt></ruby><ruby>起<rt>お</rt></ruby>きてリモコンを<ruby>探<rt>さが</rt></ruby>すついでに、テレビを<ruby>消<rt>け</rt></ruby>す。',
            plain: 'あさおきてリモコンをさがすついでに、テレビをけす。',
            romaji: 'asa okite rimokon o sagasu tsuide ni, terebi o kesu.',
            cn: '早上起床找遥控器顺便把电视关掉。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '友達同士で自分の習慣について話している。',
        cn: '朋友间谈论自己的习惯。',
      },
      lines: [
        {
          speaker: '<ruby>美香<rt>みか</rt></ruby>',
          jp: '<ruby>朝<rt>あさ</rt></ruby>はいつも<ruby>何<rt>なに</rt></ruby>をしながら<ruby>準備<rt>じゅんび</rt></ruby>するの。',
          plain: 'あさはいつもなにをしながらじゅんびするの。',
          romaji: 'asa wa itsumo nani o shinagara junbi suru no.',
          cn: '早上一般边做什么边准备？',
        },
        {
          speaker: '<ruby>由美<rt>ゆみ</rt></ruby>',
          jp: 'ニュースを<ruby>聞<rt>き</rt></ruby>きながら<ruby>化粧<rt>けしょう</rt></ruby>するよ。<ruby>時間<rt>じかん</rt></ruby>がないから。',
          plain: 'ニュースをききながらけしょうするよ。じかんがないから。',
          romaji: 'nyuusu o kikinagara keshou suru yo. jikan ga nai kara.',
          cn: '边听新闻边化妆。因为没时间。',
        },
        {
          speaker: '<ruby>美香<rt>みか</rt></ruby>',
          jp: '<ruby>私<rt>わたし</rt></ruby>もそう。コーヒーを<ruby>飲<rt>の</rt></ruby>みながらメールチェックしている。',
          plain: 'わたしもそう。コーヒーをのみながらメールチェックしている。',
          romaji: 'watashi mo sou. koohii o nominagara meeru-chekku shiteiru.',
          cn: '我也是。边喝咖啡边查邮件。',
        },
        {
          speaker: '<ruby>由美<rt>ゆみ</rt></ruby>',
          jp: '<ruby>昨日<rt>きのう</rt></ruby>はメガネをかけたままお<ruby>風呂<rt>ふろ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>りそうになった。',
          plain: 'きのうはメガネをかけたままおふろにはいりそうになった。',
          romaji: 'kinou wa megane o kaketa mama o-furo ni hairi sou ni natta.',
          cn: '昨天差点戴着眼镜进浴缸了。',
        },
        {
          speaker: '<ruby>美香<rt>みか</rt></ruby>',
          jp: 'あはは、<ruby>疲<rt>つか</rt></ruby>れているね。<ruby>今度<rt>こんど</rt></ruby>カフェに<ruby>行<rt>い</rt></ruby>くついでに、<ruby>近<rt>ちか</rt></ruby>くのスパでリラックスしようか。',
          plain: 'あはは、つかれているね。こんどカフェにいくついでに、ちかくのスパでリラックスしようか。',
          romaji: 'ahaha, tsukareteiru ne. kondo kafe ni iku tsuide ni, chikaku no supa de rirakkusu shiyou ka.',
          cn: '哈哈，你太累了。下次去咖啡店顺便去附近的SPA放松一下吧？',
        },
        {
          speaker: '<ruby>由美<rt>ゆみ</rt></ruby>',
          jp: 'いいね、ぜひ<ruby>行<rt>い</rt></ruby>こう。',
          plain: 'いいね、ぜひいこう。',
          romaji: 'ii ne, zehi ikou.',
          cn: '好啊，一定去。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: '<ruby>主人公<rt>しゅじんこう</rt></ruby>は<ruby>朝<rt>あさ</rt></ruby>、<ruby>何<rt>なに</rt></ruby>をしながら<ruby>散歩<rt>さんぽ</rt></ruby>しますか。',
          plain: 'しゅじんこうはあさ、なにをしながらさんぽしますか。',
          romaji: 'shujinkou wa asa, nani o shinagara sanpo shimasu ka.',
          cn: '主人公早上边做什么边散步？',
        },
        a: {
          jp: '<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聴<rt>き</rt></ruby>きながら<ruby>散歩<rt>さんぽ</rt></ruby>します。',
          plain: 'おんがくをききながらさんぽします。',
          romaji: 'ongaku o kikinagara sanpo shimasu.',
          cn: '边听音乐边散步。',
        },
      },
      {
        q: {
          jp: 'スーパーに<ruby>行<rt>い</rt></ruby>くついでに、どこへ<ruby>行<rt>い</rt></ruby>きましたか。',
          plain: 'スーパーにいくついでに、どこへいきましたか。',
          romaji: 'suupaa ni iku tsuide ni, doko e ikimashita ka.',
          cn: '去超市顺便去了哪里？',
        },
        a: {
          jp: '<ruby>図書館<rt>としょかん</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>を<ruby>返<rt>かえ</rt></ruby>しに<ruby>行<rt>い</rt></ruby>きました。',
          plain: 'としょかんにほんをかえしにいきました。',
          romaji: 'toshokan ni hon o kaeshi ni ikimashita.',
          cn: '去图书馆还了书。',
        },
        hint: '「ついでに」表示顺便做附带行为。',
      },
      {
        q: {
          jp: '<ruby>玄関<rt>げんかん</rt></ruby>で<ruby>何<rt>なに</rt></ruby>をしてしまいましたか。',
          plain: 'げんかんでなにをしてしまいましたか。',
          romaji: 'genkan de nani o shite shimaimashita ka.',
          cn: '在玄关做了什么？',
        },
        a: {
          jp: '<ruby>靴<rt>くつ</rt></ruby>を<ruby>履<rt>は</rt></ruby>いたままメールを<ruby>確認<rt>かくにん</rt></ruby>してしまいました。',
          plain: 'くつをはいたままメールをかくにんしてしまいました。',
          romaji: 'kutsu o haita mama meeru o kakunin shite shimaimashita.',
          cn: '鞋穿着就确认了邮件。',
        },
      },
      {
        q: {
          jp: '<ruby>由美<rt>ゆみ</rt></ruby>さんは<ruby>朝<rt>あさ</rt></ruby><ruby>何<rt>なに</rt></ruby>をしながら<ruby>化粧<rt>けしょう</rt></ruby>しますか。',
          plain: 'ゆみさんはあさなにをしながらけしょうしますか。',
          romaji: 'Yumi-san wa asa nani o shinagara keshou shimasu ka.',
          cn: '由美早上边做什么边化妆？',
        },
        a: {
          jp: 'ニュースを<ruby>聞<rt>き</rt></ruby>きながら<ruby>化粧<rt>けしょう</rt></ruby>します。',
          plain: 'ニュースをききながらけしょうします。',
          romaji: 'nyuusu o kikinagara keshou shimasu.',
          cn: '边听新闻边化妆。',
        },
      },
    ],
    vocabulary: [
      { jp: '音楽', kana: 'おんがく', romaji: 'ongaku', meaning: '音乐', pos: '名詞' },
      { jp: '聴きます', kana: 'ききます', romaji: 'kikimasu', meaning: '听', pos: '動詞I' },
      { jp: '公園', kana: 'こうえん', romaji: 'kouen', meaning: '公园', pos: '名詞' },
      { jp: '散歩', kana: 'さんぽ', romaji: 'sanpo', meaning: '散步', pos: '名詞' },
      { jp: '習慣', kana: 'しゅうかん', romaji: 'shuukan', meaning: '习惯', pos: '名詞' },
      { jp: '考えます', kana: 'かんがえます', romaji: 'kangaemasu', meaning: '思考', pos: '動詞II' },
      { jp: '新鮮', kana: 'しんせん', romaji: 'shinsen', meaning: '新鲜', pos: 'な形容詞' },
      { jp: '空気', kana: 'くうき', romaji: 'kuuki', meaning: '空气', pos: '名詞' },
      { jp: '吸います', kana: 'すいます', romaji: 'suimasu', meaning: '吸（气）', pos: '動詞I' },
      { jp: '整理します', kana: 'せいりします', romaji: 'seiri shimasu', meaning: '整理', pos: '動詞III' },
      { jp: 'アイデア', kana: 'アイデア', romaji: 'aidea', meaning: '点子', pos: '名詞' },
      { jp: '浮かびます', kana: 'うかびます', romaji: 'ukabimasu', meaning: '浮现', pos: '動詞I' },
      { jp: 'つけます', kana: 'つけます', romaji: 'tsukemasu', meaning: '打开', pos: '動詞II' },
      { jp: '朝食', kana: 'ちょうしょく', romaji: 'choushoku', meaning: '早饭', pos: '名詞' },
      { jp: 'ニュース', kana: 'ニュース', romaji: 'nyuusu', meaning: '新闻', pos: '名詞' },
      { jp: '楽しみ', kana: 'たのしみ', romaji: 'tanoshimi', meaning: '乐趣', pos: '名詞' },
      { jp: '寄ります', kana: 'よります', romaji: 'yorimasu', meaning: '顺路去', pos: '動詞I' },
      { jp: 'パソコン', kana: 'パソコン', romaji: 'pasokon', meaning: '电脑', pos: '名詞' },
      { jp: '画面', kana: 'がめん', romaji: 'gamen', meaning: '画面；屏幕', pos: '名詞' },
      { jp: 'メガネ', kana: 'メガネ', romaji: 'megane', meaning: '眼镜', pos: '名詞' },
      { jp: 'かけます', kana: 'かけます', romaji: 'kakemasu', meaning: '戴（眼镜）', pos: '動詞II' },
      { jp: '居眠り', kana: 'いねむり', romaji: 'inemuri', meaning: '打瞌睡', pos: '名詞' },
      { jp: '家事', kana: 'かじ', romaji: 'kaji', meaning: '家务', pos: '名詞' },
      { jp: 'ラジオ', kana: 'ラジオ', romaji: 'rajio', meaning: '广播', pos: '名詞' },
      { jp: 'マルチタスク', kana: 'マルチタスク', romaji: 'maruchi-tasuku', meaning: '多任务', pos: '名詞' },
      { jp: '効率的', kana: 'こうりつてき', romaji: 'kouritsu-teki', meaning: '高效', pos: 'な形容詞' },
      { jp: '集中します', kana: 'しゅうちゅうします', romaji: 'shuuchuu shimasu', meaning: '集中', pos: '動詞III' },
      { jp: '週末', kana: 'しゅうまつ', romaji: 'shuumatsu', meaning: '周末', pos: '名詞' },
      { jp: 'スーパー', kana: 'スーパー', romaji: 'suupaa', meaning: '超市', pos: '名詞' },
      { jp: '帰り道', kana: 'かえりみち', romaji: 'kaerimichi', meaning: '回家路', pos: '名詞' },
      { jp: '確認します', kana: 'かくにんします', romaji: 'kakunin shimasu', meaning: '确认', pos: '動詞III' },
      { jp: '夫', kana: 'おっと', romaji: 'otto', meaning: '丈夫', pos: '名詞' },
      { jp: '注意します', kana: 'ちゅういします', romaji: 'chuui shimasu', meaning: '注意；提醒', pos: '動詞III' },
      { jp: '消します', kana: 'けします', romaji: 'keshimasu', meaning: '关掉；消除', pos: '動詞I' },
      { jp: 'リモコン', kana: 'リモコン', romaji: 'rimokon', meaning: '遥控器', pos: '名詞' },
      { jp: '探します', kana: 'さがします', romaji: 'sagashimasu', meaning: '寻找', pos: '動詞I' },
      { jp: '化粧', kana: 'けしょう', romaji: 'keshou', meaning: '化妆', pos: '名詞' },
      { jp: 'スパ', kana: 'スパ', romaji: 'supa', meaning: 'SPA', pos: '名詞' },
      { jp: 'リラックスします', kana: 'リラックスします', romaji: 'rirakkusu shimasu', meaning: '放松', pos: '動詞III' },
    ],
    grammar: [
      {
        pattern: 'V ます形（去ます）+ ながら',
        name: '同时进行：边...边...',
        explain: '表示同一主语同时做两件事。变化：动词ます形去掉「ます」+「ながら」。「食べる→食べながら」「聞く→聞きながら」。重要规则：前后两个动作必须是同一主语。如果两个动作主语不同（如"我做饭，他看电视"），则不能用「ながら」，要用「〜ている間に」。后接的动作通常是主要动作，前面是附带动作。',
        examples: [
          {
            jp: '<ruby>歌<rt>うた</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>いながらシャワーを<ruby>浴<rt>あ</rt></ruby>びる。',
            plain: 'うたをうたいながらシャワーをあびる。',
            cn: '一边唱歌一边洗澡。',
          },
          {
            jp: 'テレビを<ruby>見<rt>み</rt></ruby>ながら<ruby>食事<rt>しょくじ</rt></ruby>をする。',
            plain: 'テレビをみながらしょくじをする。',
            cn: '边看电视边吃饭。',
          },
        ],
      },
      {
        pattern: 'V た形 + まま',
        name: '保持状态：...着',
        explain: '表示某个动作完成后的状态没有改变，仍然延续。常带"应该改变却没改变"的负面意味。变化：动词た形+「まま」。「靴を履いたまま」（鞋穿着没脱）「電気をつけたまま」（灯开着没关）「窓を開けたまま」（窗开着没关）。也用「N+のまま」「Na+なまま」「A+いまま」表示保持某种状态：「昔のまま」（一如既往）。',
        examples: [
          {
            jp: 'メガネをかけたまま<ruby>寝<rt>ね</rt></ruby>てしまった。',
            plain: 'メガネをかけたままねてしまった。',
            cn: '戴着眼镜就睡着了。',
          },
          {
            jp: '<ruby>窓<rt>まど</rt></ruby>を<ruby>開<rt>あ</rt></ruby>けたまま<ruby>出<rt>で</rt></ruby>かけた。',
            plain: 'まどをあけたまま でかけた。',
            cn: '窗户开着就出门了。',
          },
        ],
      },
      {
        pattern: 'V 辞書形/た形 + ついでに',
        name: '顺便：趁...的机会',
        explain: '表示在做主要动作的同时附带做另一件事。「ついで」原意是"顺道"。注意：「ついでに」前的是主要目的，后面的是附带行为，与中文"顺便"语序相反。「銀行に行くついでに郵便局にも行く」=去银行（主要）顺便也去邮局（附带）。也可用「N+のついでに」：「散歩のついでに」（散步顺便）。',
        examples: [
          {
            jp: '<ruby>東京<rt>とうきょう</rt></ruby>に<ruby>行<rt>い</rt></ruby>くついでに、<ruby>友達<rt>ともだち</rt></ruby>に<ruby>会<rt>あ</rt></ruby>いに<ruby>行<rt>い</rt></ruby>く。',
            plain: 'とうきょうにいくついでに、ともだちにあいにいく。',
            cn: '去东京顺便去见朋友。',
          },
          {
            jp: '<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>のついでに<ruby>本屋<rt>ほんや</rt></ruby>に<ruby>寄<rt>よ</rt></ruby>った。',
            plain: 'かいもののついでにほんやによった。',
            cn: '购物顺便去了书店。',
          },
        ],
      },
      {
        pattern: 'V ている + 間に',
        name: '在...期间内',
        explain: '与「ながら」的区别：「ながら」要求两动作主语相同；「間に」前后主语可以不同。「子供が寝ている間に、母は本を読む」（孩子睡觉期间，妈妈看书）。常用于"某事发生的时间段内，发生了另一件事"。「間に」表示某段时间内的某瞬间，「間」（无に）表示整段时间。',
        examples: [
          {
            jp: '<ruby>母<rt>はは</rt></ruby>が<ruby>料理<rt>りょうり</rt></ruby>している<ruby>間<rt>あいだ</rt></ruby>に、<ruby>子供<rt>こども</rt></ruby>はゲームをしていた。',
            plain: 'はははりょうりしているあいだに、こどもはゲームをしていた。',
            cn: '妈妈做饭期间，孩子在打游戏。',
          },
          {
            jp: '<ruby>留守<rt>るす</rt></ruby>の<ruby>間<rt>あいだ</rt></ruby>に<ruby>泥棒<rt>どろぼう</rt></ruby>が<ruby>入<rt>はい</rt></ruby>った。',
            plain: 'るすのあいだにどろぼうがはいった。',
            cn: '不在家期间小偷进来了。',
          },
        ],
      },
      {
        pattern: 'N + のまま / Na + なまま / A + いまま',
        name: '保持原状',
        explain: '表示状态保持不变。「N+のまま」表"保持N的状态"，「昔のまま」（保持过去的样子）。「Naなまま」如「静かなまま」（保持安静），「Aいまま」如「若いまま」（保持年轻）。这是「〜たまま」的扩展用法。',
        examples: [
          {
            jp: 'この<ruby>町<rt>まち</rt></ruby>は<ruby>昔<rt>むかし</rt></ruby>のままだ。',
            plain: 'このまちはむかしのままだ。',
            cn: '这个城镇一如往昔。',
          },
          {
            jp: '<ruby>若<rt>わか</rt></ruby>いままでいたい。',
            plain: 'わかいままでいたい。',
            cn: '想保持年轻。',
          },
        ],
      },
    ],
  },

  // ========================================================
  // 第 32 課 — 時を表す表現
  // ========================================================
  {
    id: 32,
    level: 'N3',
    title: {
      jp: '時を表す表現',
      romaji: 'toki o arawasu hyougen',
      cn: '时间表达',
      en: 'Time Expressions',
    },
    goals: [
      '掌握「うちに」（趁...还在/还没）和「間に」（在...期间内）的区别',
      '掌握「ところ」三种时态：辞書形＝就要、ているところ＝正在、たところ＝刚刚',
      '能精确描述事件发生的时间点和阶段',
    ],
    articles: [
      {
        kind: 'main',
        title: {
          jp: '若いうちに',
          romaji: 'wakai uchi ni',
          cn: '趁年轻',
        },
        sentences: [
          {
            jp: '「<ruby>若<rt>わか</rt></ruby>いうちに、いろいろなことに<ruby>挑戦<rt>ちょうせん</rt></ruby>すべきだ」と<ruby>言<rt>い</rt></ruby>われている。',
            plain: 'わかいうちに、いろいろなことにちょうせんすべきだといわれている。',
            romaji: '"wakai uchi ni, iroiro na koto ni chousen su beki da" to iwareteiru.',
            cn: '常说"趁年轻应该挑战各种事情"。',
          },
          {
            jp: '<ruby>体<rt>からだ</rt></ruby>が<ruby>元気<rt>げんき</rt></ruby>なうちに、<ruby>世界<rt>せかい</rt></ruby><ruby>各地<rt>かくち</rt></ruby>を<ruby>旅<rt>たび</rt></ruby>しておきたい。',
            plain: 'からだがげんきなうちに、せかいかくちをたびしておきたい。',
            romaji: 'karada ga genki na uchi ni, sekai kakuchi o tabi shite okitai.',
            cn: '趁身体还健康时，想去世界各地旅行。',
          },
          {
            jp: '<ruby>記憶力<rt>きおくりょく</rt></ruby>が<ruby>衰<rt>おとろ</rt></ruby>えないうちに、<ruby>新<rt>あたら</rt></ruby>しい<ruby>言語<rt>げんご</rt></ruby>を<ruby>学<rt>まな</rt></ruby>んだほうがいい。',
            plain: 'きおくりょくがおとろえないうちに、あたらしいげんごをまなんだほうがいい。',
            romaji: 'kioku-ryoku ga otoroenai uchi ni, atarashii gengo o mananda hou ga ii.',
            cn: '趁记忆力还没衰退时，最好学新语言。',
          },
          {
            jp: '<ruby>学生<rt>がくせい</rt></ruby>のうちにたくさん<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>むことが<ruby>大切<rt>たいせつ</rt></ruby>だ。',
            plain: 'がくせいのうちにたくさんほんをよむことがたいせつだ。',
            romaji: 'gakusei no uchi ni takusan hon o yomu koto ga taisetsu da.',
            cn: '趁是学生时多读书很重要。',
          },
          {
            jp: '<ruby>働<rt>はたら</rt></ruby>き<ruby>始<rt>はじ</rt></ruby>めると、<ruby>自由<rt>じゆう</rt></ruby>な<ruby>時間<rt>じかん</rt></ruby>がなかなかとれないからだ。',
            plain: 'はたらきはじめると、じゆうなじかんがなかなかとれないからだ。',
            romaji: 'hatarakihajimeru to, jiyuu na jikan ga nakanaka torenai kara da.',
            cn: '因为开始工作后，很难有自由时间。',
          },
          {
            jp: '<ruby>大学<rt>だいがく</rt></ruby><ruby>時代<rt>じだい</rt></ruby>、<ruby>夏休<rt>なつやす</rt></ruby>みの<ruby>間<rt>あいだ</rt></ruby>にアルバイトをして、<ruby>旅行<rt>りょこう</rt></ruby>の<ruby>資金<rt>しきん</rt></ruby>を<ruby>貯<rt>た</rt></ruby>めた。',
            plain: 'だいがくじだい、なつやすみのあいだにアルバイトをして、りょこうのしきんをためた。',
            romaji: 'daigaku-jidai, natsu-yasumi no aida ni arubaito o shite, ryokou no shikin o tameta.',
            cn: '大学时代，暑假期间打工攒了旅游的资金。',
          },
          {
            jp: '<ruby>授業<rt>じゅぎょう</rt></ruby>のないときに<ruby>友達<rt>ともだち</rt></ruby>とよく<ruby>出<rt>で</rt></ruby>かけた。',
            plain: 'じゅぎょうのないときにともだちとよくでかけた。',
            romaji: 'jugyou no nai toki ni tomodachi to yoku dekaketa.',
            cn: '没课的时候经常和朋友外出。',
          },
          {
            jp: '<ruby>今<rt>いま</rt></ruby>は<ruby>仕事<rt>しごと</rt></ruby>をしているところで、<ruby>毎日<rt>まいにち</rt></ruby>がとても<ruby>忙<rt>いそが</rt></ruby>しい。',
            plain: 'いまはしごとをしているところで、まいにちがとてもいそがしい。',
            romaji: 'ima wa shigoto o shiteiru tokoro de, mainichi ga totemo isogashii.',
            cn: '现在正在工作，每天都很忙。',
          },
          {
            jp: 'それでも、<ruby>休<rt>やす</rt></ruby>みが<ruby>取<rt>と</rt></ruby>れたところで、<ruby>旅行<rt>りょこう</rt></ruby>の<ruby>計画<rt>けいかく</rt></ruby>を<ruby>立<rt>た</rt></ruby>てている。',
            plain: 'それでも、やすみがとれたところで、りょこうのけいかくをたてている。',
            romaji: 'soredemo, yasumi ga toreta tokoro de, ryokou no keikaku o tateteiru.',
            cn: '即便如此，刚拿到假期就在制定旅游计划。',
          },
          {
            jp: '<ruby>後悔<rt>こうかい</rt></ruby>しないうちに、できることはやっておくべきだと<ruby>思<rt>おも</rt></ruby>う。',
            plain: 'こうかいしないうちに、できることはやっておくべきだとおもう。',
            romaji: 'koukai shinai uchi ni, dekiru koto wa yatte oku beki da to omou.',
            cn: '趁还没后悔，能做的事应该提前去做。',
          },
        ],
      },
      {
        kind: 'companion',
        title: {
          jp: 'ちょうど食べているところ',
          romaji: 'choudo tabeteiru tokoro',
          cn: '正吃着饭',
        },
        sentences: [
          {
            jp: '<ruby>夕方<rt>ゆうがた</rt></ruby><ruby>七時<rt>しちじ</rt></ruby>、ちょうど<ruby>夕食<rt>ゆうしょく</rt></ruby>を<ruby>食<rt>た</rt></ruby>べているところに、<ruby>電話<rt>でんわ</rt></ruby>がかかってきた。',
            plain: 'ゆうがたしちじ、ちょうどゆうしょくをたべているところに、でんわがかかってきた。',
            romaji: 'yuugata shichi-ji, choudo yuushoku o tabeteiru tokoro ni, denwa ga kakatte kita.',
            cn: '傍晚七点，正吃晚饭时电话来了。',
          },
          {
            jp: '<ruby>母<rt>はは</rt></ruby>からだった。「<ruby>今<rt>いま</rt></ruby><ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>るところよ」と<ruby>言<rt>い</rt></ruby>った。',
            plain: 'はははからだった。「いまいえをでるところよ」といった。',
            romaji: 'haha kara datta. "ima ie o deru tokoro yo" to itta.',
            cn: '是母亲打来的。她说"我现在正要出门"。',
          },
          {
            jp: 'もうすぐ<ruby>着<rt>つ</rt></ruby>くから、<ruby>準備<rt>じゅんび</rt></ruby>しておいてと<ruby>頼<rt>たの</rt></ruby>まれた。',
            plain: 'もうすぐつくから、じゅんびしておいてとたのまれた。',
            romaji: 'mou sugu tsuku kara, junbi shite oite to tanomareta.',
            cn: '说快到了，让我先准备好。',
          },
          {
            jp: '<ruby>食事<rt>しょくじ</rt></ruby>が<ruby>終<rt>お</rt></ruby>わったところで、<ruby>母<rt>はは</rt></ruby>が<ruby>到着<rt>とうちゃく</rt></ruby>した。',
            plain: 'しょくじがおわったところで、はははとうちゃくした。',
            romaji: 'shokuji ga owatta tokoro de, haha ga touchaku shita.',
            cn: '刚吃完饭，母亲就到了。',
          },
          {
            jp: 'タイミングがちょうどよかった。',
            plain: 'タイミングがちょうどよかった。',
            romaji: 'taimingu ga choudo yokatta.',
            cn: '时机正好。',
          },
          {
            jp: '<ruby>母<rt>はは</rt></ruby>はお<ruby>土産<rt>みやげ</rt></ruby>を<ruby>持<rt>も</rt></ruby>ってきてくれた。<ruby>包<rt>つつ</rt></ruby>みを<ruby>開<rt>ひら</rt></ruby>けるところで、<ruby>子供<rt>こども</rt></ruby>たちが<ruby>飛<rt>と</rt></ruby>んできた。',
            plain: 'はははおみやげをもってきてくれた。つつみをひらけるところで、こどもたちがとんできた。',
            romaji: 'haha wa o-miyage o motte kite kureta. tsutsumi o akeru tokoro de, kodomo-tachi ga tonde kita.',
            cn: '母亲带了礼物来。正要打开包装时，孩子们冲过来了。',
          },
          {
            jp: '<ruby>家族<rt>かぞく</rt></ruby>みんなで<ruby>賑<rt>にぎ</rt></ruby>やかな<ruby>夜<rt>よる</rt></ruby>を<ruby>過<rt>す</rt></ruby>ごした。',
            plain: 'かぞくみんなでにぎやかなよるをすごした。',
            romaji: 'kazoku minna de nigiyaka na yoru o sugoshita.',
            cn: '全家人一起度过了热闹的夜晚。',
          },
          {
            jp: 'こういう<ruby>時間<rt>じかん</rt></ruby>はとても<ruby>貴重<rt>きちょう</rt></ruby>だ。',
            plain: 'こういうじかんはとてもきちょうだ。',
            romaji: 'kou iu jikan wa totemo kichou da.',
            cn: '这样的时光非常宝贵。',
          },
        ],
      },
    ],
    dialogue: {
      scene: {
        jp: '友達同士で電話で会う約束をしている。',
        cn: '朋友间用电话约见面。',
      },
      lines: [
        {
          speaker: '健太',
          jp: 'もしもし、<ruby>今<rt>いま</rt></ruby><ruby>何<rt>なに</rt></ruby>してる。',
          plain: 'もしもし、いまなにしてる。',
          romaji: 'moshimoshi, ima nani shiteru.',
          cn: '喂，现在在做什么？',
        },
        {
          speaker: '<ruby>智子<rt>ともこ</rt></ruby>',
          jp: 'ちょうど<ruby>仕事<rt>しごと</rt></ruby>が<ruby>終<rt>お</rt></ruby>わったところよ。これから<ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>るところ。',
          plain: 'ちょうどしごとがおわったところよ。これからいえにかえるところ。',
          romaji: 'choudo shigoto ga owatta tokoro yo. korekara ie ni kaeru tokoro.',
          cn: '刚下班。正要回家。',
        },
        {
          speaker: '健太',
          jp: 'よかった。<ruby>今晩<rt>こんばん</rt></ruby><ruby>食事<rt>しょくじ</rt></ruby>でもどう。<ruby>時間<rt>じかん</rt></ruby>のあるうちに<ruby>会<rt>あ</rt></ruby>いたい。',
          plain: 'よかった。こんばんしょくじでもどう。じかんのあるうちにあいたい。',
          romaji: 'yokatta. konban shokuji demo dou. jikan no aru uchi ni aitai.',
          cn: '太好了。今晚一起吃饭怎么样？想趁有时间见面。',
        },
        {
          speaker: '<ruby>智子<rt>ともこ</rt></ruby>',
          jp: 'いいね。<ruby>家<rt>いえ</rt></ruby>に<ruby>着<rt>つ</rt></ruby>いたら<ruby>連絡<rt>れんらく</rt></ruby>する。シャワーを<ruby>浴<rt>あ</rt></ruby>びているところに<ruby>電話<rt>でんわ</rt></ruby>をかけないでね。',
          plain: 'いいね。いえについたられんらくする。シャワーをあびているところにでんわをかけないでね。',
          romaji: 'ii ne. ie ni tsuitara renraku suru. shawaa o abiteiru tokoro ni denwa o kakenai de ne.',
          cn: '好啊。到家联络你。我洗澡的时候别打电话来。',
        },
        {
          speaker: '健太',
          jp: 'はは、わかった。じゃあ、<ruby>八時<rt>はちじ</rt></ruby>に<ruby>駅前<rt>えきまえ</rt></ruby>のレストランで。',
          plain: 'はは、わかった。じゃあ、はちじにえきまえのレストランで。',
          romaji: 'haha, wakatta. jaa, hachiji ni ekimae no resutoran de.',
          cn: '哈哈，知道了。那么八点在车站前的餐厅。',
        },
        {
          speaker: '<ruby>智子<rt>ともこ</rt></ruby>',
          jp: '<ruby>了解<rt>りょうかい</rt></ruby>。<ruby>遅<rt>おく</rt></ruby>れないうちに<ruby>着<rt>つ</rt></ruby>くようにする。',
          plain: 'りょうかい。おくれないうちにつくようにする。',
          romaji: 'ryoukai. okurenai uchi ni tsuku you ni suru.',
          cn: '了解。我会趁不迟到前到的。',
        },
      ],
    },
    questions: [
      {
        q: {
          jp: 'なぜ<ruby>若<rt>わか</rt></ruby>いうちに<ruby>挑戦<rt>ちょうせん</rt></ruby>すべきだと<ruby>言<rt>い</rt></ruby>われていますか。',
          plain: 'なぜわかいうちにちょうせんすべきだといわれていますか。',
          romaji: 'naze wakai uchi ni chousen su beki da to iwareteimasu ka.',
          cn: '为什么说应该趁年轻挑战？',
        },
        a: {
          jp: '<ruby>働<rt>はたら</rt></ruby>き<ruby>始<rt>はじ</rt></ruby>めると<ruby>自由<rt>じゆう</rt></ruby>な<ruby>時間<rt>じかん</rt></ruby>がなかなかとれないからです。',
          plain: 'はたらきはじめるとじゆうなじかんがなかなかとれないからです。',
          romaji: 'hatarakihajimeru to jiyuu na jikan ga nakanaka torenai kara desu.',
          cn: '因为开始工作后很难有自由时间。',
        },
      },
      {
        q: {
          jp: '<ruby>夏休<rt>なつやす</rt></ruby>みの<ruby>間<rt>あいだ</rt></ruby>に<ruby>何<rt>なに</rt></ruby>をしましたか。',
          plain: 'なつやすみのあいだになにをしましたか。',
          romaji: 'natsu-yasumi no aida ni nani o shimashita ka.',
          cn: '暑假期间做了什么？',
        },
        a: {
          jp: 'アルバイトをして、<ruby>旅行<rt>りょこう</rt></ruby>の<ruby>資金<rt>しきん</rt></ruby>を<ruby>貯<rt>た</rt></ruby>めました。',
          plain: 'アルバイトをして、りょこうのしきんをためました。',
          romaji: 'arubaito o shite, ryokou no shikin o tamemashita.',
          cn: '打工攒了旅游资金。',
        },
        hint: '注意「うちに」(主语主动趁机) vs「間に」(背景某事发生)。',
      },
      {
        q: {
          jp: '<ruby>母<rt>はは</rt></ruby>から<ruby>電話<rt>でんわ</rt></ruby>がかかってきたとき、<ruby>主人公<rt>しゅじんこう</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしていましたか。',
          plain: 'ははからでんわがかかってきたとき、しゅじんこうはなにをしていましたか。',
          romaji: 'haha kara denwa ga kakatte kita toki, shujinkou wa nani o shiteimashita ka.',
          cn: '母亲打电话来时，主人公在做什么？',
        },
        a: {
          jp: 'ちょうど<ruby>夕食<rt>ゆうしょく</rt></ruby>を<ruby>食<rt>た</rt></ruby>べているところでした。',
          plain: 'ちょうどゆうしょくをたべているところでした。',
          romaji: 'choudo yuushoku o tabeteiru tokoro deshita.',
          cn: '正在吃晚饭。',
        },
      },
      {
        q: {
          jp: '<ruby>智子<rt>ともこ</rt></ruby>さんは<ruby>電話<rt>でんわ</rt></ruby>のとき<ruby>何<rt>なに</rt></ruby>をしているところでしたか。',
          plain: 'ともこさんはでんわのときなにをしているところでしたか。',
          romaji: 'Tomoko-san wa denwa no toki nani o shiteiru tokoro deshita ka.',
          cn: '智子接电话时正在做什么？',
        },
        a: {
          jp: '<ruby>仕事<rt>しごと</rt></ruby>が<ruby>終<rt>お</rt></ruby>わったところで、<ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>るところでした。',
          plain: 'しごとがおわったところで、いえにかえるところでした。',
          romaji: 'shigoto ga owatta tokoro de, ie ni kaeru tokoro deshita.',
          cn: '刚下班，正要回家。',
        },
      },
    ],
    vocabulary: [
      { jp: '若い', kana: 'わかい', romaji: 'wakai', meaning: '年轻', pos: 'い形容詞' },
      { jp: '元気', kana: 'げんき', romaji: 'genki', meaning: '健康；有精神', pos: 'な形容詞' },
      { jp: '世界', kana: 'せかい', romaji: 'sekai', meaning: '世界', pos: '名詞' },
      { jp: '各地', kana: 'かくち', romaji: 'kakuchi', meaning: '各地', pos: '名詞' },
      { jp: '旅', kana: 'たび', romaji: 'tabi', meaning: '旅行', pos: '名詞' },
      { jp: '記憶力', kana: 'きおくりょく', romaji: 'kioku-ryoku', meaning: '记忆力', pos: '名詞' },
      { jp: '衰えます', kana: 'おとろえます', romaji: 'otoroemasu', meaning: '衰退', pos: '動詞II' },
      { jp: '言語', kana: 'げんご', romaji: 'gengo', meaning: '语言', pos: '名詞' },
      { jp: '学びます', kana: 'まなびます', romaji: 'manabimasu', meaning: '学习', pos: '動詞I' },
      { jp: '大切', kana: 'たいせつ', romaji: 'taisetsu', meaning: '重要', pos: 'な形容詞' },
      { jp: '働き始めます', kana: 'はたらきはじめます', romaji: 'hatarakihajimemasu', meaning: '开始工作', pos: '動詞II' },
      { jp: '自由', kana: 'じゆう', romaji: 'jiyuu', meaning: '自由', pos: 'な形容詞' },
      { jp: '時代', kana: 'じだい', romaji: 'jidai', meaning: '时代', pos: '名詞' },
      { jp: '夏休み', kana: 'なつやすみ', romaji: 'natsu-yasumi', meaning: '暑假', pos: '名詞' },
      { jp: 'アルバイト', kana: 'アルバイト', romaji: 'arubaito', meaning: '打工', pos: '名詞' },
      { jp: '旅行', kana: 'りょこう', romaji: 'ryokou', meaning: '旅行', pos: '名詞' },
      { jp: '資金', kana: 'しきん', romaji: 'shikin', meaning: '资金', pos: '名詞' },
      { jp: '貯めます', kana: 'ためます', romaji: 'tamemasu', meaning: '储蓄', pos: '動詞II' },
      { jp: '授業', kana: 'じゅぎょう', romaji: 'jugyou', meaning: '课程', pos: '名詞' },
      { jp: '計画', kana: 'けいかく', romaji: 'keikaku', meaning: '计划', pos: '名詞' },
      { jp: '立てます', kana: 'たてます', romaji: 'tatemasu', meaning: '制定；立', pos: '動詞II' },
      { jp: '後悔します', kana: 'こうかいします', romaji: 'koukai shimasu', meaning: '后悔', pos: '動詞III' },
      { jp: '夕方', kana: 'ゆうがた', romaji: 'yuugata', meaning: '傍晚', pos: '名詞' },
      { jp: 'かかります', kana: 'かかります', romaji: 'kakarimasu', meaning: '（电话）打来；花费', pos: '動詞I' },
      { jp: '頼みます', kana: 'たのみます', romaji: 'tanomimasu', meaning: '请求；委托', pos: '動詞I' },
      { jp: '到着します', kana: 'とうちゃくします', romaji: 'touchaku shimasu', meaning: '到达', pos: '動詞III' },
      { jp: 'タイミング', kana: 'タイミング', romaji: 'taimingu', meaning: '时机', pos: '名詞' },
      { jp: 'お土産', kana: 'おみやげ', romaji: 'o-miyage', meaning: '土特产；伴手礼', pos: '名詞' },
      { jp: '包み', kana: 'つつみ', romaji: 'tsutsumi', meaning: '包裹；包装', pos: '名詞' },
      { jp: '開けます', kana: 'あけます', romaji: 'akemasu', meaning: '打开', pos: '動詞II' },
      { jp: '飛びます', kana: 'とびます', romaji: 'tobimasu', meaning: '飞；冲', pos: '動詞I' },
      { jp: '賑やか', kana: 'にぎやか', romaji: 'nigiyaka', meaning: '热闹', pos: 'な形容詞' },
      { jp: '過ごします', kana: 'すごします', romaji: 'sugoshimasu', meaning: '度过', pos: '動詞I' },
      { jp: '貴重', kana: 'きちょう', romaji: 'kichou', meaning: '宝贵', pos: 'な形容詞' },
      { jp: 'シャワー', kana: 'シャワー', romaji: 'shawaa', meaning: '淋浴', pos: '名詞' },
      { jp: '浴びます', kana: 'あびます', romaji: 'abimasu', meaning: '淋（浴）', pos: '動詞II' },
      { jp: '駅前', kana: 'えきまえ', romaji: 'ekimae', meaning: '车站前', pos: '名詞' },
      { jp: 'レストラン', kana: 'レストラン', romaji: 'resutoran', meaning: '餐厅', pos: '名詞' },
      { jp: '了解', kana: 'りょうかい', romaji: 'ryoukai', meaning: '了解', pos: '名詞' },
    ],
    grammar: [
      {
        pattern: '辞書形/ない形/Aい/Naな/Nの + うちに',
        name: '趁...还（没）...',
        explain: '表示在某状态变化前，趁机做某事。强调说话人主动利用此时机。「Vている+うちに」表示在做某事过程中状态发生变化（雪が降っているうちに止んだ）。「Vないうちに」表示趁还没...就做（暗くならないうちに帰ろう）。「Aい/Naな/Nの+うちに」表示趁某状态时（若いうちに、元気なうちに、学生のうちに）。重点：「うちに」侧重主动趁机，主语通常是说话人。',
        examples: [
          {
            jp: '<ruby>暗<rt>くら</rt></ruby>くならないうちに<ruby>帰<rt>かえ</rt></ruby>ろう。',
            plain: 'くらくならないうちにかえろう。',
            cn: '趁还没黑回去吧。',
          },
          {
            jp: '<ruby>熱<rt>あつ</rt></ruby>いうちに<ruby>食<rt>た</rt></ruby>べてください。',
            plain: 'あついうちにたべてください。',
            cn: '请趁热吃。',
          },
        ],
      },
      {
        pattern: 'V ている / Nの + 間に',
        name: '在...期间内（背景某事发生）',
        explain: '表示在某段时间内某事发生。与「うちに」的核心区别：「間に」是客观时间段，背景某事自然发生，主语常不同；「うちに」侧重主动趁机会做事。「子供が寝ている間に掃除した」（孩子睡觉时打扫了）。「間」（无に）表整段时间，「間に」表段内某瞬间。N+の+間に：「夏休みの間に」「留守の間に」。',
        examples: [
          {
            jp: '<ruby>留守<rt>るす</rt></ruby>の<ruby>間<rt>あいだ</rt></ruby>に<ruby>泥棒<rt>どろぼう</rt></ruby>が<ruby>入<rt>はい</rt></ruby>った。',
            plain: 'るすのあいだにどろぼうがはいった。',
            cn: '不在家期间小偷进来了。',
          },
          {
            jp: '<ruby>夏休<rt>なつやす</rt></ruby>みの<ruby>間<rt>あいだ</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>を<ruby>十冊<rt>じゅっさつ</rt></ruby><ruby>読<rt>よ</rt></ruby>んだ。',
            plain: 'なつやすみのあいだにほんをじゅっさつよんだ。',
            cn: '暑假期间读了十本书。',
          },
        ],
      },
      {
        pattern: 'V 辞書形 + ところ',
        name: '正要...（即将做）',
        explain: '表示动作即将发生，"就要...". 「これから〜するところだ」是典型搭配。和「ようとしている」相近。例：「今出かけるところです」(现在正要出门)。注意是"还没开始做"。',
        examples: [
          {
            jp: '<ruby>今<rt>いま</rt></ruby><ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>るところです。',
            plain: 'いまいえをでるところです。',
            cn: '现在正要出门。',
          },
          {
            jp: 'ちょうど<ruby>始<rt>はじ</rt></ruby>めるところだ。',
            plain: 'ちょうどはじめるところだ。',
            cn: '正要开始。',
          },
        ],
      },
      {
        pattern: 'V ている + ところ',
        name: '正在...（动作进行中）',
        explain: '表示动作正在进行，强调"现在这一刻在做". 比单纯的「〜ている」更明确指当下时刻。例：「今、食べているところです」(我现在正在吃)。后接其他事件常用「ところに/ところへ+別の動作」：「食べているところに電話がかかってきた」(正吃饭时电话来了)。',
        examples: [
          {
            jp: '<ruby>今<rt>いま</rt></ruby>レポートを<ruby>書<rt>か</rt></ruby>いているところです。',
            plain: 'いまレポートをかいているところです。',
            cn: '现在正在写报告。',
          },
          {
            jp: '<ruby>会議<rt>かいぎ</rt></ruby>をしているところに<ruby>社長<rt>しゃちょう</rt></ruby>が<ruby>来<rt>き</rt></ruby>た。',
            plain: 'かいぎをしているところにしゃちょうがきた。',
            cn: '正开会时社长来了。',
          },
        ],
      },
      {
        pattern: 'V た形 + ところ',
        name: '刚刚...（动作刚完成）',
        explain: '表示动作刚刚完成，"刚...". 强调时间上的"刚刚". 和「〜たばかり」相近，但「ばかり」可指较长时间感觉上的"刚才"，「たところ」严格指时间紧接。「今帰ったところです」(我刚回来)。后接「で/に」表"在那个时间点上"：「食事が終わったところで電話が来た」(刚吃完饭电话来了)。',
        examples: [
          {
            jp: 'ちょうど<ruby>仕事<rt>しごと</rt></ruby>が<ruby>終<rt>お</rt></ruby>わったところです。',
            plain: 'ちょうどしごとがおわったところです。',
            cn: '刚下班。',
          },
          {
            jp: '<ruby>今<rt>いま</rt></ruby><ruby>着<rt>つ</rt></ruby>いたところだ。',
            plain: 'いまついたところだ。',
            cn: '刚到。',
          },
        ],
      },
    ],
  },

];
