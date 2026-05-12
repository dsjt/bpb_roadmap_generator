// ============================================================
// Item definitions (518 predefined items)
// ============================================================
const PREDEFINED_ITEMS = [
  {id:'i1',name:'石'},{id:'i2',name:'欠けたルビー'},{id:'i3',name:'欠けたサファイア'},
  {id:'i4',name:'欠けたトパーズ'},{id:'i5',name:'欠けたエメラルド'},{id:'i6',name:'欠けたアメシスト'},
  {id:'i7',name:'勇気の星'},{id:'i8',name:'ニンニク'},{id:'i9',name:'石炭のかたまり'},
  {id:'i10',name:'ひとつかみの砂'},{id:'i11',name:'輝く殻'},{id:'i12',name:'チビバート'},
  {id:'i13',name:'ブルーベリー'},{id:'i14',name:'燃える石炭'},{id:'i15',name:'傷物のルビー'},
  {id:'i16',name:'傷物のサファイア'},{id:'i17',name:'傷物のトパーズ'},{id:'i18',name:'傷物のエメラルド'},
  {id:'i19',name:'傷物のアメシスト'},{id:'i20',name:'守護のハンドバッグ'},{id:'i21',name:'木の剣'},
  {id:'i22',name:'バナナ'},{id:'i23',name:'ブタちゃん貯金箱'},{id:'i24',name:'石入り袋'},
  {id:'i25',name:'ウエストポーチ'},{id:'i26',name:'未知のスキル'},{id:'i27',name:'癒やしのハーブ'},
  {id:'i28',name:'フライパン'},{id:'i29',name:'ホウキ'},{id:'i30',name:'木の盾'},
  {id:'i31',name:'セイウチの牙'},{id:'i32',name:'砥石'},{id:'i33',name:'ゴーストダガー'},
  {id:'i34',name:'革のカバン'},{id:'i35',name:'ダガー'},{id:'i36',name:'迅速のグローブ'},
  {id:'i37',name:'ヘルスポーション'},{id:'i38',name:'ショップ会員カード'},{id:'i39',name:'雪玉'},
  {id:'i40',name:'普通のルビー'},{id:'i41',name:'普通のサファイア'},{id:'i42',name:'普通のトパーズ'},
  {id:'i43',name:'普通のエメラルド'},{id:'i44',name:'普通のアメシスト'},{id:'i45',name:'富の宝箱'},
  {id:'i46',name:'たいまつ'},{id:'i47',name:'殻のトーテム'},{id:'i48',name:'燃えるたいまつ'},
  {id:'i49',name:'サンドバッグ卿'},{id:'i50',name:'スタミナバッグ'},{id:'i51',name:'財宝の箱'},
  {id:'i52',name:'ポーションベルト'},{id:'i53',name:'スパイシーバナナ'},{id:'i54',name:'臭い立つ防壁'},
  {id:'i55',name:'ブタちゃんピニャータ'},{id:'i56',name:'投資機会'},{id:'i57',name:'大容量'},
  {id:'i58',name:'イッツ・スライムタイム！'},{id:'i59',name:'サルでもわかる鍛冶'},{id:'i60',name:'ちょっと力を！'},
  {id:'i61',name:'ユニークなユニーク'},{id:'i62',name:'深堀り'},{id:'i63',name:'ナイフ・トゥ・ミーチュー'},
  {id:'i64',name:'庇護'},{id:'i65',name:'石塁'},{id:'i66',name:'魔法熟達'},
  {id:'i67',name:'月の力'},{id:'i68',name:'ガブ飲み'},{id:'i69',name:'ガールパワー'},
  {id:'i70',name:'血操術'},{id:'i71',name:'爆ぜる荊棘'},{id:'i72',name:'こだまする雄叫び'},
  {id:'i73',name:'武器エンチャント'},{id:'i74',name:'急かさないで！'},{id:'i75',name:'ダブルレインボー'},
  {id:'i76',name:'偽りの命'},{id:'i77',name:'フォルトゥナのキス'},{id:'i78',name:'堅木'},
  {id:'i79',name:'神の光も金次第'},{id:'i80',name:'バッグり仰天'},{id:'i81',name:'もっと力を！'},
  {id:'i82',name:'時間融解'},{id:'i83',name:'全身防備'},{id:'i84',name:'リーフバッジ'},
  {id:'i85',name:'スカルバッジ'},{id:'i86',name:'ウルフバッジ'},{id:'i87',name:'フレイムバッジ'},
  {id:'i88',name:'レインボーバッジ'},{id:'i89',name:'ストーンバッジ'},{id:'i90',name:'マジックバッジ'},
  {id:'i91',name:'パズルバッジ'},{id:'i92',name:'結び糸バッジ'},{id:'i93',name:'スピア'},
  {id:'i94',name:'未鑑定のアミュレット'},{id:'i95',name:'生命のアミュレット'},{id:'i96',name:'鋼鉄のアミュレット'},
  {id:'i97',name:'大食のアミュレット'},{id:'i98',name:'暗黒のアミュレット'},{id:'i99',name:'活力のアミュレット'},
  {id:'i100',name:'野生のアミュレット'},{id:'i101',name:'秘術のアミュレット'},{id:'i102',name:'幸福のアミュレット'},
  {id:'i103',name:'スラバート'},{id:'i104',name:'シェリー'},{id:'i105',name:'革のブーツ'},
  {id:'i106',name:'硬肌のポーション'},{id:'i107',name:'フルート'},{id:'i108',name:'マナオーブ'},
  {id:'i109',name:'不安定な再構築器'},{id:'i110',name:'マナポーション'},{id:'i111',name:'ヒーローポーション'},
  {id:'i112',name:'パイナップル'},{id:'i113',name:'幸運泥棒のアリスイ'},{id:'i114',name:'ポポ'},
  {id:'i115',name:'スノーケーキ'},{id:'i116',name:'安定した再構築器'},{id:'i117',name:'チェストナット君'},
    {id:'i118',name:'革の鎧'},{id:'i119',name:'飢えたる剣'},{id:'i120',name:'疫毒のフラスコ'},
  {id:'i121',name:'不屈のヘルム'},{id:'i122',name:'堕落のクリスタル'},{id:'i123',name:'オイルランプ'},
  {id:'i124',name:'英雄の剣'},{id:'i125',name:'旅行カバン'},{id:'i126',name:'聖なるポーション'},
  {id:'i127',name:'ラッパ'},{id:'i128',name:'ハッピーボム'},{id:'i129',name:'血の大鎌'},
  {id:'i130',name:'悪党の剣'},{id:'i131',name:'吸血のポーション'},{id:'i132',name:'ハンマー'},
  {id:'i133',name:'時間膨張時計'},{id:'i134',name:'シャベル'},{id:'i135',name:'トゲの盾'},
  {id:'i136',name:'パンプキン'},{id:'i137',name:'羊飼いの杖'},{id:'i138',name:'キューバート'},
  {id:'i139',name:'イバラのムチ'},{id:'i140',name:'無傷のルビー'},{id:'i141',name:'無傷のサファイア'},
  {id:'i142',name:'無傷のトパーズ'},{id:'i143',name:'無傷のエメラルド'},{id:'i144',name:'無傷のアメシスト'},
  {id:'i145',name:'グラグラ雪ダルマ'},{id:'i146',name:'アタッククロー'},{id:'i147',name:'ハイヘルスポーション'},
  {id:'i148',name:'クトゥルフ'},{id:'i149',name:'プラチナ会員カード'},{id:'i150',name:'古代の石：デス'},
  {id:'i151',name:'反復機'},{id:'i152',name:'凍てつく盾'},{id:'i153',name:'血のアミュレット'},
  {id:'i154',name:'ジンジャーブレッド・ジェリー'},{id:'i155',name:'雪の棒'},{id:'i156',name:'極硬肌のポーション'},
  {id:'i157',name:'コインの山'},{id:'i158',name:'ノコ刃の剣'},{id:'i159',name:'ハイヒーローポーション'},
  {id:'i160',name:'古代の石：フレイム'},{id:'i161',name:'ダンシングドラゴン'},{id:'i162',name:'魔法の杖'},
  {id:'i163',name:'ルビーエッグ'},{id:'i164',name:'招きネコ'},{id:'i165',name:'古代の石：フリーズ'},
  {id:'i166',name:'エッグスカリバー'},{id:'i167',name:'剛力のグローブ'},{id:'i168',name:'ライトセイバー'},
  {id:'i169',name:'ルビーの幼竜'},{id:'i170',name:'ティム'},{id:'i171',name:'不気味な存在'},
  {id:'i172',name:'プレゼント'},{id:'i173',name:'びっくりサック'},{id:'i174',name:'ポイズンダガー'},
  {id:'i175',name:'氷の鎧'},{id:'i176',name:'パンダモニウム'},{id:'i177',name:'魔法のたいまつ'},
  {id:'i178',name:'フロストバイト'},{id:'i179',name:'魔神のランプ'},{id:'i180',name:'勇気の盾'},
  {id:'i181',name:'聖なる鎧'},{id:'i182',name:'ブラッディダガー'},{id:'i183',name:'石のブーツ'},
  {id:'i184',name:'優美なるレイピア'},{id:'i185',name:'輝ける王冠'},{id:'i186',name:'ヴォルパーティンガー'},
  {id:'i187',name:'ハートの容器'},{id:'i188',name:'吸血のグローブ'},{id:'i189',name:'マナ喰らいの剣'},
  {id:'i190',name:'ポイズンスピア'},{id:'i191',name:'石の鎧'},{id:'i192',name:'スチール・スラバート'},
  {id:'i193',name:'石のヘルム'},{id:'i194',name:'カタナ'},{id:'i195',name:'ウイングブーツ'},
  {id:'i196',name:'ブラッディ・スラバート'},{id:'i197',name:'苦痛のヘルム'},{id:'i198',name:'あまりにも大きすぎるグレートソード'},
  {id:'i199',name:'プリズムオーブ'},{id:'i200',name:'ローズウィップ'},{id:'i201',name:'英雄のロングソード'},
  {id:'i202',name:'ハヤブサのつるぎ'},{id:'i203',name:'吸血鬼の鎧'},{id:'i204',name:'ブラッドソーン'},
  {id:'i205',name:'ストーンゴーレム'},{id:'i206',name:'ライト・スラバート'},{id:'i207',name:'完璧なルビー'},
  {id:'i208',name:'完璧なサファイア'},{id:'i209',name:'完璧なトパーズ'},{id:'i210',name:'完璧なエメラルド'},
  {id:'i211',name:'完璧なアメシスト'},{id:'i212',name:'毒蛇の杖'},{id:'i213',name:'ダークセイバー'},
  {id:'i214',name:'プリズムソード'},{id:'i215',name:'王の冠'},{id:'i216',name:'ホーリースピア'},
  {id:'i217',name:'月の盾'},{id:'i218',name:'月の鎧'},{id:'i219',name:'堕落せし鎧'},
  {id:'i220',name:'暗黒のハート'},{id:'i221',name:'極楽チュン'},{id:'i222',name:'キング・スラバート'},
  {id:'i223',name:'クロスブレード'},{id:'i224',name:'ショートボウ'},{id:'i225',name:'突きキバの短弓'},
  {id:'i226',name:'弓矢'},{id:'i227',name:'フォルトゥナの願い弓'},{id:'i228',name:'リス・アーチャー'},
  {id:'i229',name:'クリティカルの杖'},{id:'i230',name:'つらぬきキバの弓矢'},{id:'i231',name:'フォルトゥナの加護弓'},
  {id:'i232',name:'ささやきベラドンナの毒弓'},{id:'i233',name:'ベラドンナの影毒弓'},{id:'i234',name:'幸運のクローバー'},
  {id:'i235',name:'ドングリの首飾り'},{id:'i236',name:'幸運のブタちゃん'},{id:'i237',name:'赤ランの首飾り'},
  {id:'i238',name:'青セージの首飾り'},{id:'i239',name:'白ユリの首飾り'},{id:'i240',name:'つらぬきの矢'},
  {id:'i241',name:'ユグドラシルの葉'},{id:'i242',name:'ドクウルシ'},{id:'i243',name:'メガ・クローバー'},
  {id:'i244',name:'レンジャーのカバン'},{id:'i245',name:'つる織りバスケット'},{id:'i246',name:'ネズミ'},
  {id:'i247',name:'リス'},{id:'i248',name:'ネズミ・シェフ'},{id:'i249',name:'ハリネズミ'},
  {id:'i250',name:'ニンジン・スラバート'},{id:'i251',name:'スノーマスター'},{id:'i252',name:'レインボー・スラバート・マッド・アルファ'},
  {id:'i253',name:'ハイパー・ハリネズミ'},{id:'i254',name:'ニンジン'},{id:'i255',name:'エサの盛り合わせ'},
  {id:'i256',name:'マークスウーマン'},{id:'i257',name:'ドングリ・エース'},{id:'i258',name:'死神の鎌'},
  {id:'i259',name:'呪われしダガー'},{id:'i260',name:'ルビーの火トカゲ'},{id:'i261',name:'癒さずの杖'},
  {id:'i262',name:'アイスドラゴン'},{id:'i263',name:'カードデッキ'},{id:'i264',name:'ミス・フォーチュン'},
  {id:'i265',name:'ミセス・ストラグルズ'},{id:'i266',name:'夜闇のヘアコーム'},{id:'i267',name:'ミスター・ストラグルズ'},
  {id:'i268',name:'大ナベ'},{id:'i269',name:'棺型バッグ'},{id:'i270',name:'レリックケース'},
  {id:'i271',name:'カエル'},{id:'i272',name:'ポイズン・スラバート'},{id:'i273',name:'ドクガエル'},
  {id:'i274',name:'レインボー・スラバート・プライム・オメガ'},{id:'i275',name:'カラス'},{id:'i276',name:'ヘビ'},
  {id:'i277',name:'恋人のカード'},{id:'i278',name:'スペードのエース'},{id:'i279',name:'リバース！'},
  {id:'i280',name:'白眼の青龍'},{id:'i281',name:'愚者のカード'},{id:'i282',name:'炎トカゲのホロカード'},
  {id:'i283',name:'ダーク・ロータス'},{id:'i284',name:'ジョーカー'},{id:'i285',name:'デス・ロータス'},
  {id:'i286',name:'強疫毒のフラスコ'},{id:'i287',name:'ハイマナポーション'},{id:'i288',name:'悪鬼のフラスコ'},
  {id:'i289',name:'凶悪鬼のフラスコ'},{id:'i290',name:'極吸血のポーション'},{id:'i291',name:'神聖なるポーション'},
  {id:'i292',name:'ベニテングダケ'},{id:'i293',name:'ハメツダケ'},{id:'i294',name:'キノコ農園'},
  {id:'i295',name:'カードの心臓'},{id:'i296',name:'闇の儀式'},{id:'i297',name:'フレイム'},
  {id:'i298',name:'トウガラシ'},{id:'i299',name:'呪文の巻物：霜撃'},{id:'i300',name:'ドラゴンオーブ'},
  {id:'i301',name:'ヒートダガー'},{id:'i302',name:'ヒートスピア'},{id:'i303',name:'炎の剣'},
  {id:'i304',name:'トウガラシ・スラバート'},{id:'i305',name:'ターボ・シェリー'},{id:'i306',name:'フェニックス'},
  {id:'i307',name:'エメラルドエッグ'},{id:'i308',name:'サファイアエッグ'},{id:'i309',name:'アメシストエッグ'},
  {id:'i310',name:'灼炎の剣'},{id:'i311',name:'フレイムウィップ'},{id:'i312',name:'炎の杖'},
  {id:'i313',name:'エメラルドの幼竜'},{id:'i314',name:'サファイアの幼竜'},{id:'i315',name:'アメシストの幼竜'},
  {id:'i316',name:'ヒートグレートソード'},{id:'i317',name:'黒曜のドラゴン'},{id:'i318',name:'太陽の盾'},
  {id:'i319',name:'太陽の鎧'},{id:'i320',name:'レインボー・スラバート・エピック・ウーバー'},{id:'i321',name:'常炎'},
  {id:'i322',name:'ソラリス'},{id:'i323',name:'フレンドリーな火'},{id:'i324',name:'燃えさかる旗印'},
  {id:'i325',name:'闇のランタン'},{id:'i326',name:'フローズンフレイム'},{id:'i327',name:'ドラゴンの寝床'},
  {id:'i328',name:'たき火台'},{id:'i329',name:'供物皿'},{id:'i330',name:'オノ'},
  {id:'i331',name:'ダブルアックス'},{id:'i332',name:'勇敢な子狼'},{id:'i333',name:'チェーンウィップ'},
  {id:'i334',name:'トゲの杖'},{id:'i335',name:'破滅のグレートソード'},{id:'i336',name:'武装した勇敢な子狼'},
  {id:'i337',name:'鍛冶屋のハンマー'},{id:'i338',name:'ブラスナックル'},{id:'i339',name:'トゲつきチョーカー'},
  {id:'i340',name:'狼の紋章'},{id:'i341',name:'かなとこ'},{id:'i342',name:'シカ神のトーテム'},
  {id:'i343',name:'シャーマンの仮面'},{id:'i344',name:'ダッフルバッグ'},{id:'i345',name:'便利ポーチ'},
  {id:'i346',name:'アナグマのルーン'},{id:'i347',name:'ゾウのルーン'},{id:'i348',name:'タカのルーン'},
  {id:'i349',name:'トラのルーン'},{id:'i350',name:'聡明な子狼'},{id:'i351',name:'力持ちの子狼'},
  {id:'i352',name:'チーズ・スラバート'},{id:'i353',name:'レインボー・スラバート・デス・マンイーター'},{id:'i354',name:'武装した聡明な子狼'},
  {id:'i355',name:'武装した力持ちの子狼'},{id:'i356',name:'チーズ'},{id:'i357',name:'トゲの壁'},
  {id:'i358',name:'竜鱗の鎧'},{id:'i359',name:'ドラゴン革のブーツ'},{id:'i360',name:'ドラゴンクロー'},
  {id:'i361',name:'さらなる怒り'},{id:'i362',name:'ドラゴンセット'},{id:'i363',name:'無の剣'},
  {id:'i364',name:'カップケーキの杖'},{id:'i365',name:'水のエレメンタル'},{id:'i366',name:'均衡のワンド'},
  {id:'i367',name:'チェスボード'},{id:'i368',name:'プリズムワンド'},{id:'i369',name:'精霊のベル'},
  {id:'i370',name:'愛情のパズルバッグ'},{id:'i371',name:'改善のパズルバッグ'},{id:'i372',name:'破滅のパズルバッグ'},
  {id:'i373',name:'活力のパズルバッグ'},{id:'i374',name:'持続のパズルバッグ'},{id:'i375',name:'学者のカバン'},
  {id:'i376',name:'パズルボックス'},{id:'i377',name:'ネコの精霊'},{id:'i378',name:'フクロウの精霊'},
  {id:'i379',name:'アナグマの精霊'},{id:'i380',name:'カップケーキ・スラバート'},{id:'i381',name:'レインボー・スラバート・オムニ・シュガー'},
  {id:'i382',name:'憎たらしい帽子・ハロルド'},{id:'i383',name:'ゼロから学ぶ魔法'},{id:'i384',name:'氷結魔法の手引き'},
  {id:'i385',name:'自然の年代記：木々'},{id:'i386',name:'暗黒の百科事典'},{id:'i387',name:'神聖なる経典'},
  {id:'i388',name:'呪文の巻物：再生'},{id:'i389',name:'呪文の巻物：清らかなる祝福'},{id:'i390',name:'呪文の巻物：氷の障壁'},
  {id:'i391',name:'ランタンベリー'},{id:'i392',name:'コールドミラー'},{id:'i393',name:'アイスフラワー'},
  {id:'i394',name:'貪食のスフィア'},{id:'i396',name:'呪文の巻物：闇の狂乱'},
  {id:'i397',name:'白のポーン'},{id:'i398',name:'黒のポーン'},{id:'i399',name:'白のナイト'},
  {id:'i400',name:'黒のナイト'},{id:'i401',name:'白のビショップ'},{id:'i402',name:'黒のビショップ'},
  {id:'i403',name:'白のルーク'},{id:'i404',name:'黒のルーク'},{id:'i405',name:'白のクイーン'},
  {id:'i406',name:'黒のクイーン'},{id:'i407',name:'白のキング'},{id:'i408',name:'黒のキング'},
  {id:'i409',name:'レインボーポーション'},{id:'i410',name:'カップケーキ'},{id:'i411',name:'輝く外套'},
  {id:'i412',name:'メイジの帽子'},{id:'i413',name:'魔眼'},{id:'i414',name:'超覚醒'},
  {id:'i415',name:'結び糸'},{id:'i416',name:'ブロッコリー'},{id:'i417',name:'レベルアップ'},
  {id:'i418',name:'ブーメラン'},{id:'i419',name:'英雄の盾'},{id:'i420',name:'ロープ'},
  {id:'i421',name:'宝箱'},{id:'i422',name:'ベリーロングスピア'},{id:'i423',name:'二刀流'},
  {id:'i424',name:'ダガーラン'},{id:'i425',name:'従業員の制服'},{id:'i426',name:'ブロッコリー・スラバート'},
  {id:'i427',name:'富のブタちゃん'},{id:'i428',name:'アリスイの杖'},{id:'i429',name:'ドラゴンナイト'},
  {id:'i430',name:'ハートの盾'},{id:'i431',name:'レインボー・スラバート・ギガ・ロマネスコ'},{id:'i432',name:'あまりにも大きすぎるブラッドソーン'},
  {id:'i433',name:'水銀のエレメンタル'},{id:'i434',name:'フェドーラ帽'},{id:'i435',name:'カメ'},
  {id:'i436',name:'シザーソード'},{id:'i437',name:'天秤'},{id:'i438',name:'裁縫セット'},
  {id:'i439',name:'ウクレレ'},{id:'i440',name:'施し袋'},{id:'i441',name:'バッテリー'},
  {id:'i442',name:'光輝のアミュレット'},{id:'i443',name:'煮え立つ鍋'},{id:'i444',name:'仕上砥石'},
  {id:'i445',name:'食パン'},{id:'i446',name:'トースト'},{id:'i447',name:'歯車'},
  {id:'i448',name:'マナナ'},{id:'i449',name:'鋼の核'},{id:'i450',name:'発電機'},
  {id:'i451',name:'コイル'},{id:'i452',name:'分電器'},{id:'i453',name:'レンチ'},
  {id:'i454',name:'トールハンマー'},{id:'i456',name:'電動たいまつ'},
  {id:'i457',name:'スタンクスの爪楊枝'},{id:'i458',name:'ハルバード'},{id:'i459',name:'ブレイズスピア'},
  {id:'i460',name:'魔法の指輪'},{id:'i461',name:'チェーンソー'},{id:'i462',name:'雷の杖'},
  {id:'i463',name:'メカバット'},{id:'i464',name:'才気のヘルム'},{id:'i465',name:'神秘のブーツ'},
  {id:'i466',name:'ポイズングレネード'},{id:'i467',name:'トースト・スラバート'},{id:'i468',name:'ウィスプ'},
  {id:'i469',name:'シャベルB01-3000'},{id:'i470',name:'バネ式加速器'},{id:'i471',name:'至極の指輪'},
  {id:'i472',name:'パインの盾'},{id:'i473',name:'不協和のワンド'},{id:'i474',name:'動物との対話'},
  {id:'i475',name:'交渉成立'},{id:'i476',name:'キンキラキング'},{id:'i477',name:'金の鎧'},
  {id:'i478',name:'カエル王子'},{id:'i479',name:'フォレストドラゴン'},{id:'i480',name:'パンツァードラゴン'},
  {id:'i481',name:'致死毒'},{id:'i482',name:'戦鎌'},{id:'i483',name:'カップドレイク'},
  {id:'i484',name:'内なる力'},{id:'i485',name:'怒れるフェニックス'},{id:'i486',name:'灼熱の棘'},
  {id:'i487',name:'チェスマスター'},{id:'i488',name:'呪術'},{id:'i489',name:'ブロッコツリー'},
  {id:'i490',name:'アブラガダブラ'},{id:'i491',name:'オートマナトン'},{id:'i492',name:'サンダードレイク'},
  {id:'i493',name:'ギガワット'},{id:'i494',name:'エネルギー変換'},{id:'i495',name:'ブッパナシネーター'},
  {id:'i496',name:'ルーレット'},{id:'i497',name:'魔導の鎧'},{id:'i498',name:'レインボー・スラバート・フラッフィー・プリズム'},
  {id:'i499',name:'コン・トラップ・トロン'},{id:'i500',name:'イート・オ・マティック'},{id:'i501',name:'永久運動'},
  {id:'i502',name:'トゲのエレメンタル'},{id:'i503',name:'瓶詰の雷'},{id:'i504',name:'サブスク高級プラン'},
  {id:'i505',name:'天使のクリスタル'},{id:'i506',name:'ナマケモノ'},{id:'i507',name:'歯車バッジ'},
  {id:'i508',name:'テスラコイル'},{id:'i509',name:'マナクリスタル'},{id:'i510',name:'実験所'},
  {id:'i511',name:'メカアーマー'},{id:'i512',name:'ハイパーキューブ'},{id:'i513',name:'ゴールドキューブ'},
  {id:'i514',name:'ビスマスキューブ'},{id:'i515',name:'クロムキューブ'},{id:'i516',name:'プラスチックキューブ'},
  {id:'i517',name:'ポート・オ・チャージャー'},{id:'i518',name:'歯車仕掛けの箱'},
];

// ============================================================
// State
// ============================================================
let state = {
  roadmaps: [],            // [{ id, label, placements: [{ instanceId, itemId, col }] }]
  selectedRoadmapIds: [], // 選択中（エクスポート対象）のロードマップID一覧
  customItems: [],
  roundCount: 10,
};

function defaultRoadmap() {
  return { id: 'r_' + uid(), label: 'ロードマップ', placements: [] };
}

function getSelectedRoadmaps() {
  return state.roadmaps.filter(r => state.selectedRoadmapIds.includes(r.id));
}

// ============================================================
// Persistence – localStorage
// ============================================================
const STORAGE_KEY = 'bpb_roadmap_v1';

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      roadmaps: state.roadmaps,
      selectedRoadmapIds: state.selectedRoadmapIds,
      customItems: state.customItems,
      roundCount: state.roundCount,
    }));
  } catch (_) {}
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    // 旧フォーマット（placements がトップレベル）からの移行
    if (saved.placements) {
      state.roadmaps = [{ id: 'r_' + uid(), label: 'ロードマップ', placements: saved.placements }];
    } else {
      state.roadmaps = saved.roadmaps || [defaultRoadmap()];
    }
    // selectedRoadmapId（旧単一）→ selectedRoadmapIds（新複数）へ移行
    if (saved.selectedRoadmapIds) {
      state.selectedRoadmapIds = saved.selectedRoadmapIds;
    } else if (saved.selectedRoadmapId) {
      state.selectedRoadmapIds = [saved.selectedRoadmapId];
    } else {
      state.selectedRoadmapIds = state.roadmaps.map(r => r.id);
    }
    state.customItems = saved.customItems || [];
    state.roundCount = saved.roundCount || 10;
  } catch (_) {}
}

// ============================================================
// Image storage – localStorage (keyed by itemId)
// ============================================================
function saveImage(itemId, dataUrl) {
  try { localStorage.setItem('bpb_img_' + itemId, dataUrl); } catch (_) {}
}
function getImage(itemId) {
  return localStorage.getItem('bpb_img_' + itemId);
}

// ============================================================
// URL encode / decode
// ============================================================
function encodeStateToUrl() {
  const selected = getSelectedRoadmaps();
  const data = {
    roadmaps: selected.map(rm => ({
      p: rm.placements.map(pl => [pl.itemId, pl.col]),
      l: rm.label,
    })),
    c: state.customItems.map(ci => [ci.id, ci.name]),
    r: state.roundCount,
  };
  return btoa(encodeURIComponent(JSON.stringify(data)));
}

function decodeStateFromUrl(encoded) {
  try {
    const data = JSON.parse(decodeURIComponent(atob(encoded)));
    state.customItems = (data.c || []).map(([id, name]) => ({ id, name }));
    state.roundCount = data.r || 10;
    if (data.roadmaps) {
      // 新フォーマット（複数ロードマップ）
      state.roadmaps = data.roadmaps.map(rm => ({
        id: 'r_' + uid(),
        label: rm.l || 'ロードマップ',
        placements: (rm.p || []).map(([itemId, col]) => ({ instanceId: uid(), itemId, col })),
      }));
    } else {
      // 旧フォーマット（単一ロードマップ）
      state.roadmaps = [{
        id: 'r_' + uid(),
        label: data.l || 'ロードマップ',
        placements: (data.p || []).map(([itemId, col]) => ({ instanceId: uid(), itemId, col })),
      }];
    }
    state.selectedRoadmapIds = state.roadmaps.map(r => r.id);
  } catch (_) {}
}

// ============================================================
// Helpers
// ============================================================
function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function getAllItems() {
  return [...state.customItems, ...PREDEFINED_ITEMS];
}

function getItemById(id) {
  return getAllItems().find(item => item.id === id) || null;
}

// ============================================================
// Folder image
// ============================================================
function folderImageUrl(itemName) {
  return `images/${encodeURIComponent(itemName)}.png`;
}

// img要素を生成し、フォルダ画像の読み込みを試みる。
// 成功すればonLoad()、失敗しても何もしない（呼び出し側でフォールバックを用意すること）
function tryFolderImage(itemName, imgClass, onLoad) {
  const img = document.createElement('img');
  img.className = imgClass;
  img.alt = '';
  img.style.display = 'none';
  img.onload = () => onLoad(img);
  img.src = folderImageUrl(itemName);
  return img;
}

// ============================================================
// Drag source tracker
// ============================================================
let dragSource = null; // { type: 'palette', itemId } | { type: 'cell', instanceId }

// ============================================================
// Palette rendering
// ============================================================
let searchQuery = '';

function renderPalette() {
  const list = document.getElementById('palette-list');
  const q = searchQuery.trim();
  const items = getAllItems().filter(item =>
    q === '' || item.name.includes(q)
  );

  list.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'palette-item' + (item.id.startsWith('c_') ? ' is-custom' : '');
    li.draggable = true;
    li.dataset.itemId = item.id;

    const imgSrc = getImage(item.id);
    const thumb = imgSrc
      ? `<div class="palette-thumb-wrap"><img class="palette-thumb" src="${imgSrc}" alt=""><button class="palette-img-remove" title="画像を削除" tabindex="-1">×</button></div>`
      : `<div class="palette-thumb-wrap"><div class="palette-avatar">${item.name.charAt(0)}</div></div>`;

    li.innerHTML = `
      ${thumb}
      <span class="palette-name" title="${item.name}">${item.name}</span>
      <button class="palette-upload-btn" title="画像を設定" tabindex="-1">📷</button>
    `;

    // localStorage画像がなければフォルダ画像を試みる
    if (!imgSrc) {
      const wrap = li.querySelector('.palette-thumb-wrap');
      const avatar = wrap.querySelector('.palette-avatar');
      wrap.appendChild(tryFolderImage(item.name, 'palette-thumb', img => {
        avatar.style.display = 'none';
        img.style.display = 'block';
      }));
    }

    li.addEventListener('dragstart', e => {
      dragSource = { type: 'palette', itemId: item.id };
      e.dataTransfer.setData('text/plain', item.id);
      e.dataTransfer.effectAllowed = 'copy';
      li.classList.add('dragging');
    });
    li.addEventListener('dragend', () => {
      dragSource = null;
      li.classList.remove('dragging');
    });

    li.querySelector('.palette-upload-btn').addEventListener('click', e => {
      e.stopPropagation();
      triggerImageUpload(item.id);
    });

    const removeBtn = li.querySelector('.palette-img-remove');
    if (removeBtn) {
      removeBtn.addEventListener('click', e => {
        e.stopPropagation();
        localStorage.removeItem('bpb_img_' + item.id);
        renderPalette();
        renderGrid();
      });
    }

    list.appendChild(li);
  });
}

// ============================================================
// Grid rendering
// ============================================================
function renderGrid() {
  const container = document.getElementById('roadmap-blocks');
  container.innerHTML = '';
  state.roadmaps.forEach(roadmap => container.appendChild(createRoadmapBlock(roadmap)));
}

function createRoadmapBlock(roadmap) {
  const isSelected = state.selectedRoadmapIds.includes(roadmap.id);
  const block = document.createElement('div');
  block.className = 'roadmap-block' + (isSelected ? ' selected' : '');
  block.dataset.roadmapId = roadmap.id;

  // Header
  const header = document.createElement('div');
  header.className = 'roadmap-block-header';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'roadmap-select-check';
  checkbox.checked = isSelected;
  checkbox.title = 'エクスポート対象に含める';
  checkbox.addEventListener('click', e => e.stopPropagation());
  checkbox.addEventListener('change', () => toggleRoadmapSelection(roadmap.id));

  const titleSpan = document.createElement('span');
  titleSpan.className = 'roadmap-block-title';
  titleSpan.contentEditable = 'true';
  titleSpan.spellcheck = false;
  titleSpan.textContent = roadmap.label;
  titleSpan.addEventListener('input', () => { roadmap.label = titleSpan.textContent; saveState(); });
  titleSpan.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); titleSpan.blur(); } });

  const idx = state.roadmaps.indexOf(roadmap);

  const upBtn = document.createElement('button');
  upBtn.className = 'roadmap-move-btn';
  upBtn.textContent = '↑';
  upBtn.title = '上に移動';
  upBtn.disabled = idx === 0;
  upBtn.addEventListener('click', e => { e.stopPropagation(); moveRoadmap(roadmap.id, -1); });

  const downBtn = document.createElement('button');
  downBtn.className = 'roadmap-move-btn';
  downBtn.textContent = '↓';
  downBtn.title = '下に移動';
  downBtn.disabled = idx === state.roadmaps.length - 1;
  downBtn.addEventListener('click', e => { e.stopPropagation(); moveRoadmap(roadmap.id, 1); });

  const delBtn = document.createElement('button');
  delBtn.className = 'roadmap-delete-btn';
  delBtn.textContent = '削除';
  delBtn.disabled = state.roadmaps.length <= 1;
  delBtn.addEventListener('click', e => { e.stopPropagation(); deleteRoadmap(roadmap.id); });

  const btnGroup = document.createElement('div');
  btnGroup.style.cssText = 'display:flex;gap:4px;flex-shrink:0;';
  btnGroup.appendChild(upBtn);
  btnGroup.appendChild(downBtn);
  btnGroup.appendChild(delBtn);

  header.appendChild(checkbox);
  header.appendChild(titleSpan);
  header.appendChild(btnGroup);
  block.appendChild(header);

  // Grid
  const grid = document.createElement('div');
  grid.className = 'roadmap-grid';
  grid.style.gridTemplateColumns = `repeat(${state.roundCount}, var(--cell-w))`;
  grid.style.gridTemplateRows = `var(--header-h) minmax(var(--cell-h), auto)`;

  for (let col = 0; col < state.roundCount; col++) {
    const h = document.createElement('div');
    h.className = 'grid-col-header';
    h.textContent = `R${col + 1}`;
    grid.appendChild(h);
  }

  for (let col = 0; col < state.roundCount; col++) {
    const cell = document.createElement('div');
    cell.className = 'grid-cell';
    cell.dataset.col = col;
    cell.dataset.roadmapId = roadmap.id;

    cell.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = (dragSource && dragSource.type === 'cell') ? 'move' : 'copy';
      cell.classList.add('drag-over');
    });
    cell.addEventListener('dragleave', e => {
      if (!cell.contains(e.relatedTarget)) cell.classList.remove('drag-over');
    });
    cell.addEventListener('drop', e => {
      e.preventDefault();
      cell.classList.remove('drag-over');
      if (dragSource && dragSource.type === 'cell') {
        movePlacement(dragSource.instanceId, roadmap.id, col);
      } else if (dragSource && dragSource.type === 'palette') {
        addPlacement(dragSource.itemId, roadmap.id, col);
      }
    });

    roadmap.placements
      .filter(p => p.col === col)
      .forEach(pl => cell.appendChild(createItemChip(pl)));

    grid.appendChild(cell);
  }

  block.appendChild(grid);
  return block;
}

function createItemChip(placement) {
  const item = getItemById(placement.itemId);
  const chip = document.createElement('div');
  chip.className = 'cell-item';
  chip.dataset.instanceId = placement.instanceId;
  chip.title = item ? item.name : '不明なアイテム';

  const imgSrc = item ? getImage(item.id) : null;
  if (imgSrc) {
    const img = document.createElement('img');
    img.className = 'cell-item-img';
    img.src = imgSrc;
    img.alt = item.name;
    chip.appendChild(img);
  } else {
    const text = document.createElement('div');
    text.className = 'cell-item-text';
    text.textContent = item ? item.name : '?';
    chip.appendChild(text);
    if (item) {
      chip.appendChild(tryFolderImage(item.name, 'cell-item-img', img => {
        text.remove();
        img.style.display = '';
      }));
    }
  }

  chip.draggable = true;
  chip.addEventListener('dragstart', e => {
    dragSource = { type: 'cell', instanceId: placement.instanceId };
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', placement.itemId);
    chip.classList.add('dragging');
    e.stopPropagation();
  });
  chip.addEventListener('dragend', () => { dragSource = null; chip.classList.remove('dragging'); });
  chip.addEventListener('click', () => removePlacement(placement.instanceId));
  return chip;
}

// ============================================================
// State mutations
// ============================================================
function addPlacement(itemId, roadmapId, col) {
  if (!getItemById(itemId)) return;
  const roadmap = state.roadmaps.find(r => r.id === roadmapId);
  if (!roadmap) return;
  const placement = { instanceId: uid(), itemId, col };
  roadmap.placements.push(placement);
  saveState();
  const cell = document.querySelector(`.grid-cell[data-roadmap-id="${roadmapId}"][data-col="${col}"]`);
  if (cell) cell.appendChild(createItemChip(placement));
}

function movePlacement(instanceId, newRoadmapId, newCol) {
  for (const roadmap of state.roadmaps) {
    const idx = roadmap.placements.findIndex(p => p.instanceId === instanceId);
    if (idx === -1) continue;
    const [pl] = roadmap.placements.splice(idx, 1);
    pl.col = newCol;
    const target = state.roadmaps.find(r => r.id === newRoadmapId);
    if (target) target.placements.push(pl);
    saveState();
    const chip = document.querySelector(`.cell-item[data-instance-id="${instanceId}"]`);
    const newCell = document.querySelector(`.grid-cell[data-roadmap-id="${newRoadmapId}"][data-col="${newCol}"]`);
    if (chip && newCell) newCell.appendChild(chip);
    return;
  }
}

function removePlacement(instanceId) {
  for (const roadmap of state.roadmaps) {
    const idx = roadmap.placements.findIndex(p => p.instanceId === instanceId);
    if (idx !== -1) {
      roadmap.placements.splice(idx, 1);
      saveState();
      const chip = document.querySelector(`.cell-item[data-instance-id="${instanceId}"]`);
      if (chip) chip.remove();
      return;
    }
  }
}

function toggleRoadmapSelection(id) {
  const idx = state.selectedRoadmapIds.indexOf(id);
  if (idx === -1) {
    state.selectedRoadmapIds.push(id);
  } else {
    state.selectedRoadmapIds.splice(idx, 1);
  }
  saveState();
  const isSelected = state.selectedRoadmapIds.includes(id);
  const block = document.querySelector(`.roadmap-block[data-roadmap-id="${id}"]`);
  if (block) {
    block.classList.toggle('selected', isSelected);
    const check = block.querySelector('.roadmap-select-check');
    if (check) check.checked = isSelected;
  }
}

function addRoadmap() {
  const roadmap = { id: 'r_' + uid(), label: `ロードマップ${state.roadmaps.length + 1}`, placements: [] };
  state.roadmaps.push(roadmap);
  state.selectedRoadmapIds.push(roadmap.id);
  saveState();
  renderGrid();
}

function moveRoadmap(id, direction) {
  const idx = state.roadmaps.findIndex(r => r.id === id);
  const newIdx = idx + direction;
  if (newIdx < 0 || newIdx >= state.roadmaps.length) return;
  const [rm] = state.roadmaps.splice(idx, 1);
  state.roadmaps.splice(newIdx, 0, rm);
  saveState();
  renderGrid();
}

function deleteRoadmap(id) {
  if (state.roadmaps.length <= 1) return;
  const idx = state.roadmaps.findIndex(r => r.id === id);
  if (idx === -1) return;
  state.roadmaps.splice(idx, 1);
  state.selectedRoadmapIds = state.selectedRoadmapIds.filter(sid => sid !== id);
  saveState();
  renderGrid();
}

// ============================================================
// Image upload
// ============================================================

// 画像ファイルを64×64 PNGのdataURLに変換して返す
function resizeImageFile(file) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = ev => {
      const img = new Image();
      img.onload = () => {
        const SIZE = 64;
        const canvas = document.createElement('canvas');
        canvas.width = SIZE;
        canvas.height = SIZE;
        const ctx = canvas.getContext('2d');
        const scale = Math.min(SIZE / img.width, SIZE / img.height);
        const w = img.width * scale;
        const h = img.height * scale;
        ctx.drawImage(img, (SIZE - w) / 2, (SIZE - h) / 2, w, h);
        resolve(canvas.toDataURL('image/png'));
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function triggerImageUpload(itemId) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = async e => {
    const file = e.target.files[0];
    if (!file) return;
    saveImage(itemId, await resizeImageFile(file));
    renderPalette();
    renderGrid();
  };
  input.click();
}

// ============================================================
// Custom item
// ============================================================
function addCustomItem(name) {
  const id = 'c_' + uid();
  state.customItems.push({ id, name });
  saveState();
  renderPalette();
}

// ============================================================
// Export – PNG
// ============================================================
// rrect / wrapText — canvas helpers
function rrect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrapText(ctx, text, cx, y, maxW, lh) {
  let line = '';
  const lines = [];
  for (const ch of text) {
    const t = line + ch;
    if (ctx.measureText(t).width > maxW && line) { lines.push(line); line = ch; }
    else line = t;
  }
  if (line) lines.push(line);
  lines.slice(0, 3).forEach((l, i) => ctx.fillText(l, cx, y + i * lh));
}

async function exportPng() {
  const roadmaps = getSelectedRoadmaps();
  if (!roadmaps.length) { showToast('エクスポートするロードマップを選択してください'); return; }

  // 必要な画像を事前ロード
  const imgCache = new Map();
  const itemIds = [...new Set(roadmaps.flatMap(rm => rm.placements.map(pl => pl.itemId)))];
  await Promise.all(itemIds.map(itemId => {
    const item = getItemById(itemId);
    if (!item) return;
    const src = getImage(itemId) || folderImageUrl(item.name);
    const img = new Image();
    return new Promise(resolve => {
      img.onload = () => { imgCache.set(itemId, img); resolve(); };
      img.onerror = resolve;
      img.src = src;
    });
  }));

  // レイアウト定数（CSS変数に対応）
  const SCALE = 2;
  const N = state.roundCount;
  const CW = 72, CH = 88, HH = 36, CGAP = 2;
  const BPX = 12, BPTY = 10, BPBY = 12;
  const TH = 24, TM = 8;   // タイトル高さ・下マージン
  const BGAP = 12;          // ブロック間隔
  const CPAD = 16;          // キャンバス外周パディング
  const CPPAD = 4, CGAP2 = 3, CHIP = 46; // セル内チップ

  const blockW = BPX * 2 + N * CW + (N - 1) * CGAP;
  const blockH = BPTY + TH + TM + HH + CGAP + CH + BPBY;
  const totalW = CPAD * 2 + blockW;
  const totalH = CPAD * 2 + roadmaps.length * blockH + Math.max(0, roadmaps.length - 1) * BGAP;

  const canvas = document.createElement('canvas');
  canvas.width = totalW * SCALE;
  canvas.height = totalH * SCALE;
  const ctx = canvas.getContext('2d');
  ctx.scale(SCALE, SCALE);

  const C = {
    bg: '#f0f1f6', panel: '#ffffff',
    bgHeader: '#ecedf8', bgCell: '#f7f8fc',
    border: '#dde0ee', borderSel: '#4f46e5',
    accent: '#4f46e5', accentDim: 'rgba(79,70,229,0.1)',
    text: '#1e1a3a',
  };

  ctx.fillStyle = C.bg;
  ctx.fillRect(0, 0, totalW, totalH);

  for (let ri = 0; ri < roadmaps.length; ri++) {
    const rm = roadmaps[ri];
    const bx = CPAD;
    const by = CPAD + ri * (blockH + BGAP);

    // ブロック背景・枠
    rrect(ctx, bx, by, blockW, blockH, 8);
    ctx.fillStyle = C.accentDim; ctx.fill();
    ctx.strokeStyle = C.borderSel; ctx.lineWidth = 2; ctx.stroke();

    // タイトル
    ctx.fillStyle = C.accent;
    ctx.font = 'bold 14px "Segoe UI","Noto Sans JP",sans-serif';
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(rm.label, bx + BPX, by + BPTY + TH / 2);

    const gx = bx + BPX;
    const gy = by + BPTY + TH + TM;

    // 列ヘッダー
    for (let col = 0; col < N; col++) {
      const hx = gx + col * (CW + CGAP);
      rrect(ctx, hx, gy, CW, HH, 4);
      ctx.fillStyle = C.bgHeader; ctx.fill();
      ctx.strokeStyle = C.border; ctx.lineWidth = 1; ctx.stroke();
      ctx.fillStyle = C.accent;
      ctx.font = 'bold 11px "Segoe UI",sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(`R${col + 1}`, hx + CW / 2, gy + HH / 2);
    }

    // セル
    const cy = gy + HH + CGAP;
    for (let col = 0; col < N; col++) {
      const cx = gx + col * (CW + CGAP);
      rrect(ctx, cx, cy, CW, CH, 4);
      ctx.fillStyle = C.bgCell; ctx.fill();
      ctx.strokeStyle = C.border; ctx.lineWidth = 1; ctx.stroke();

      let ix = cx + CPPAD, iy = cy + CPPAD;
      for (const pl of rm.placements.filter(p => p.col === col)) {
        const item = getItemById(pl.itemId);
        if (!item) continue;
        const img = imgCache.get(pl.itemId);

        rrect(ctx, ix, iy, CHIP, CHIP, 4);
        ctx.fillStyle = C.panel; ctx.fill();
        ctx.strokeStyle = C.border; ctx.lineWidth = 1; ctx.stroke();

        if (img && img.naturalWidth > 0) {
          const IS = 44;
          const sc = Math.min(IS / img.naturalWidth, IS / img.naturalHeight);
          const iw = img.naturalWidth * sc, ih = img.naturalHeight * sc;
          ctx.drawImage(img, ix + (CHIP - iw) / 2, iy + (CHIP - ih) / 2, iw, ih);
        } else {
          ctx.fillStyle = C.text;
          ctx.font = '9px "Segoe UI","Noto Sans JP",sans-serif';
          ctx.textAlign = 'center'; ctx.textBaseline = 'top';
          wrapText(ctx, item.name, ix + CHIP / 2, iy + 4, CHIP - 6, 11);
        }

        ix += CHIP + CGAP2;
        if (ix + CHIP > cx + CW - CPPAD) { ix = cx + CPPAD; iy += CHIP + CGAP2; }
      }
    }
  }

  const fn = roadmaps.length === 1 ? `${roadmaps[0].label}_roadmap.png` : 'roadmap.png';
  const link = document.createElement('a');
  link.download = fn;
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast('PNG を保存しました');
}

// ============================================================
// Export – URL
// ============================================================
function copyShareUrl() {
  const encoded = encodeStateToUrl();
  const url = `${location.origin}${location.pathname}#s=${encoded}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url)
      .then(() => showToast('URLをクリップボードにコピーしました'))
      .catch(() => fallbackCopy(url));
  } else {
    fallbackCopy(url);
  }
}

function fallbackCopy(url) {
  const ta = document.createElement('textarea');
  ta.value = url;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  showToast('URLをクリップボードにコピーしました');
}

// ============================================================
// Toast
// ============================================================
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add('hidden'), 2500);
}

// ============================================================
// Init
// ============================================================
function init() {
  // Load from URL hash if present, otherwise from localStorage
  const match = location.hash.match(/[#&]s=([^&]*)/);
  if (match) {
    decodeStateFromUrl(match[1]);
  } else {
    loadState();
  }
  // 初回起動時のデフォルト
  if (!state.roadmaps.length) {
    const rm = defaultRoadmap();
    state.roadmaps = [rm];
    state.selectedRoadmapIds = [rm.id];
  }
  // 不整合の修正（削除済みIDの除去・未設定の場合は全選択）
  state.selectedRoadmapIds = state.selectedRoadmapIds.filter(id => state.roadmaps.some(r => r.id === id));
  if (!state.selectedRoadmapIds.length) {
    state.selectedRoadmapIds = state.roadmaps.map(r => r.id);
  }

  // Sync round count input
  const roundInput = document.getElementById('round-count-input');
  roundInput.value = state.roundCount;
  roundInput.addEventListener('change', e => {
    const val = Math.max(1, Math.min(18, parseInt(e.target.value) || 18));
    roundInput.value = val;
    state.roundCount = val;
    saveState();
    renderGrid();
  });

  renderGrid();
  renderPalette();

  // Search
  document.getElementById('palette-search').addEventListener('input', e => {
    searchQuery = e.target.value;
    renderPalette();
  });

  // Custom item
  document.getElementById('btn-add-custom').addEventListener('click', () => {
    const name = prompt('カスタムアイテム名を入力してください:');
    if (name && name.trim()) addCustomItem(name.trim());
  });

  document.getElementById('btn-add-roadmap').addEventListener('click', addRoadmap);

  // Export buttons
  document.getElementById('btn-export').addEventListener('click', exportPng);
  document.getElementById('btn-share').addEventListener('click', copyShareUrl);

}

document.addEventListener('DOMContentLoaded', init);
