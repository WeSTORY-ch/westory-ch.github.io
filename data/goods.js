/* グッズ（アフィリエイト商品）データ
   keyword   : Amazon / 楽天の検索キーワード。Amazon は規約上ここからの検索リンクのみ使います
               （PA-API 未承認のため ASIN 直リンク・価格・画像は載せない）
   rakutenUrl: 楽天の「素の」商品URL。アフィIDは app.js が hb.afl 形式で自動で付けます
               空ならキーワード検索URLを自動生成
   img       : ★楽天の商品サムネイル（thumbnail.image.rakuten.co.jp）を直接読み込みます。
               楽天は商品画像の掲載が認められているのでここに貼ってOK（Amazonの画像は不可）。
               `?_ex=400x400` を付けるとサイズ指定でき、軽く読み込めます。
               商品が終売・入替になると画像が出なくなるので、そのときは差し替えてください。
   yahooUrl  : ★LYPアフィリエイトの管理画面で作った短縮URL（https://yahoo.jp/xxxxx）をそのまま貼る。
               商品URLからアフィリンクは作れないので、貼っていない商品は Yahoo! ボタンが出ません
   category  : フィギュア・ぬいぐるみ / アクセサリー・文具 / 雑貨・キッチン / ゲーム・本・音楽
   tags      : モンスターの tags と一致させると、閲覧履歴に応じたおすすめに出ます
   price     : 表示用の目安価格（変動するので「前後」表記。最終価格は各ショップで確認）
   pickup    : true にするとホームとグッズページのピックアップ枠に出ます

   ※ 掲載しているのはすべて楽天市場で実際に販売されている商品です（2026-08 時点で
     商品ページ・画像URLとも到達を確認済み）。中古品・予約商品は載せていません。
*/
window.DB_GOODS = [

  /* ============================== ぬいぐるみ ============================== */
  {
    id: "G001", name: "スマイルスライム ぬいぐるみ スライム M", category: "フィギュア・ぬいぐるみ", emoji: "🧸",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/pasokon/cabinet/05261423/suraimu-m2a.jpg?_ex=400x400",
    price: "2,400円前後", keyword: "ドラゴンクエスト スマイルスライム ぬいぐるみ スライム",
    rakutenUrl: "https://item.rakuten.co.jp/pasokon/ep2516/", yahooUrl: "",
    tags: ["スライム", "ぬいぐるみ", "かわいい", "定番"],
    desc: "定番中の定番。デスクに置くだけで冒険の空気になります。", pickup: true, popularity: 98
  },
  {
    id: "G013", name: "スマイルスライム ぬいぐるみ M だるまスライム 青", category: "フィギュア・ぬいぐるみ", emoji: "🔵",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5415/4988601275415.jpg?_ex=400x400",
    price: "2,500円前後", keyword: "スマイルスライム ぬいぐるみ だるまスライム",
    rakutenUrl: "https://item.rakuten.co.jp/book/18780721/", yahooUrl: "",
    tags: ["スライム", "ぬいぐるみ", "かわいい"],
    desc: "ころんと丸いだるまスライム。青と赤で並べても。", pickup: false, popularity: 74
  },
  {
    id: "G014", name: "スマイルスライム ぬいぐるみ M だるまスライム 赤", category: "フィギュア・ぬいぐるみ", emoji: "🔴",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5422/4988601275422.jpg?_ex=400x400",
    price: "2,500円前後", keyword: "スマイルスライム ぬいぐるみ だるまスライム 赤",
    rakutenUrl: "https://item.rakuten.co.jp/book/18780722/", yahooUrl: "",
    tags: ["スライム", "ぬいぐるみ", "かわいい"],
    desc: "赤いだるまスライム。青とペアで飾ると映えます。", pickup: false, popularity: 70
  },
  {
    id: "G015", name: "スマイルスライム ぬいぐるみ M わたぼう", category: "フィギュア・ぬいぐるみ", emoji: "☁️",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/6496/4988601296496.jpg?_ex=400x400",
    price: "3,000円前後", keyword: "スマイルスライム ぬいぐるみ わたぼう",
    rakutenUrl: "https://item.rakuten.co.jp/book/18779490/", yahooUrl: "",
    tags: ["ぬいぐるみ", "かわいい", "モンスターズ"],
    desc: "モンスターズでおなじみのわたぼう。ふわふわの手ざわり。", pickup: false, popularity: 78
  },
  {
    id: "G016", name: "スマイルスライム ぬいぐるみ スライムタワー M", category: "フィギュア・ぬいぐるみ", emoji: "🗼",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/pasokon/cabinet/05261423/4988601217095a00aaa.jpg?_ex=400x400",
    price: "2,900円前後", keyword: "スマイルスライム ぬいぐるみ スライムタワー",
    rakutenUrl: "https://item.rakuten.co.jp/pasokon/ep1709-0/", yahooUrl: "",
    tags: ["スライム", "ぬいぐるみ", "配合"],
    desc: "3体が積み上がった姿。配合で増える仲間の象徴みたいな一体。", pickup: false, popularity: 66
  },
  {
    id: "G017", name: "スマイルスライム ぬいぐるみクリーナー スライム", category: "フィギュア・ぬいぐるみ", emoji: "🧽",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/pasokon/cabinet/05261423/4988601238335a0a.jpg?_ex=400x400",
    price: "2,100円前後", keyword: "スマイルスライム ぬいぐるみクリーナー",
    rakutenUrl: "https://item.rakuten.co.jp/pasokon/ep3833/", yahooUrl: "",
    tags: ["スライム", "ぬいぐるみ", "雑貨"],
    desc: "画面をふけるぬいぐるみ。飾って使えるタイプ。", pickup: false, popularity: 58
  },
  {
    id: "G008", name: "手のひらマスコット キラーマシン", category: "フィギュア・ぬいぐるみ", emoji: "🐾",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/kobido/cabinet/08982934/09132704/imgrc0106195346.jpg?_ex=400x400",
    price: "2,980円前後", keyword: "ドラゴンクエスト 手のひらマスコット ぬいぐるみ",
    rakutenUrl: "https://item.rakuten.co.jp/kobido/102932/", yahooUrl: "",
    tags: ["魔獣", "ぬいぐるみ", "かわいい"],
    desc: "手のひらサイズのマスコット。スライム以外の推しがいる方に。", pickup: false, popularity: 60
  },
  {
    id: "G018", name: "スマイルスライム マスコット スライム", category: "フィギュア・ぬいぐるみ", emoji: "🫧",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/amiami/cabinet/images/2023/232/goods-04366804.jpg?_ex=400x400",
    price: "640円前後", keyword: "スマイルスライム マスコット スライム",
    rakutenUrl: "https://item.rakuten.co.jp/amiami/goods-04366804-s001/", yahooUrl: "",
    tags: ["スライム", "ぬいぐるみ", "かわいい"],
    desc: "いちばん手を出しやすい小さいマスコット。かばんに付けても。", pickup: false, popularity: 64
  },

  /* ============================== フィギュア ============================== */
  {
    id: "G002", name: "メタリックモンスターズギャラリー メタルスライム", category: "フィギュア・ぬいぐるみ", emoji: "⚪",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/tenten-store/cabinet/img32/13131929/dq-mmg-msl-n1.jpg?_ex=400x400",
    price: "5,600円前後", keyword: "ドラゴンクエスト メタリックモンスターズギャラリー メタルスライム",
    rakutenUrl: "https://item.rakuten.co.jp/tenten-store/drkmt-mtsr/", yahooUrl: "",
    tags: ["スライム", "レア", "フィギュア"],
    desc: "金属質の塗装が効いた立体。棚に一体あると映えます。", pickup: true, popularity: 88
  },
  {
    id: "G003", name: "メタリックモンスターズギャラリー ダースドラゴン", category: "フィギュア・ぬいぐるみ", emoji: "🐉",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/tenten-store/cabinet/img32/dq-mmg-ddrg-2.jpg?_ex=400x400",
    price: "6,200円前後", keyword: "ドラゴンクエスト メタリックモンスターズギャラリー ドラゴン",
    rakutenUrl: "https://item.rakuten.co.jp/tenten-store/dq-mmg-ddrg/", yahooUrl: "",
    tags: ["ドラゴン", "フィギュア", "人気"],
    desc: "迫力のある造形。ドラゴン系推しの方に。", pickup: false, popularity: 80
  },
  {
    id: "G019", name: "メタリックモンスターズギャラリー キラーマシン", category: "フィギュア・ぬいぐるみ", emoji: "🤖",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/6427/4988601296427_1_2.jpg?_ex=400x400",
    price: "5,500円前後", keyword: "メタリックモンスターズギャラリー キラーマシン",
    rakutenUrl: "https://item.rakuten.co.jp/book/18779362/", yahooUrl: "",
    tags: ["物質", "フィギュア", "人気"],
    desc: "無機質な質感が気持ちいい機械系。物質系推しに。", pickup: false, popularity: 72
  },
  {
    id: "G020", name: "メタリックモンスターズギャラリー ハートナイト", category: "フィギュア・ぬいぐるみ", emoji: "🛡️",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/kaden-sakura/cabinet/gazou36/h-4988601255035.jpg?_ex=400x400",
    price: "5,000円前後", keyword: "メタリックモンスターズギャラリー ハートナイト",
    rakutenUrl: "https://item.rakuten.co.jp/kaden-sakura/4988601255035/", yahooUrl: "",
    tags: ["スライム", "フィギュア", "配合"],
    desc: "スライムナイト系の立体。配合で生まれる騎士たちが好きな方に。", pickup: false, popularity: 62
  },
  {
    id: "G024", name: "ドラゴンクエスト AM 伝説の魔王フィギュア 竜王", category: "フィギュア・ぬいぐるみ", emoji: "👑",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/shizuya/cabinet/imgrc0111735219.jpg?_ex=400x400",
    price: "3,280円前後", keyword: "ドラゴンクエスト AM 伝説の魔王フィギュア 竜王",
    rakutenUrl: "https://item.rakuten.co.jp/shizuya/21593/", yahooUrl: "",
    tags: ["ドラゴン", "フィギュア", "レア", "ボス"],
    desc: "ラスボスの風格。ボス回のおともにどうぞ。", pickup: false, popularity: 68
  },
  {
    id: "G025", name: "AM フィギュアコレクション 仲間モンスター編 5種セット", category: "フィギュア・ぬいぐるみ", emoji: "🎎",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/mirakikaku/cabinet/item/202501/1708134_c0.jpg?_ex=400x400",
    price: "2,880円前後", keyword: "ドラゴンクエスト AM フィギュアコレクション 仲間モンスター",
    rakutenUrl: "https://item.rakuten.co.jp/mirakikaku/1708134/", yahooUrl: "",
    tags: ["フィギュア", "配合", "人気"],
    desc: "仲間モンスターがまとめて5体。パーティを並べて遊べます。", pickup: true, popularity: 76
  },
  {
    id: "G012", name: "立体モンスター図鑑フィギュア 大集合スペシャル（9個入りBOX）", category: "フィギュア・ぬいぐるみ", emoji: "🎁",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/amiami/cabinet/images/2026/293/goods-04841511.jpg?_ex=400x400",
    price: "11,800円前後", keyword: "ドラゴンクエスト 立体モンスター図鑑フィギュア",
    rakutenUrl: "https://item.rakuten.co.jp/amiami/goods-04841511/", yahooUrl: "",
    tags: ["フィギュア", "レア", "人気"],
    desc: "開封動画のネタにも。いろいろな系統がまとめて手に入ります。", pickup: false, popularity: 62
  },
  {
    id: "G021", name: "メタリックアイテムズギャラリー 宝箱", category: "フィギュア・ぬいぐるみ", emoji: "🧰",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8325/4988601268325_1_2.jpg?_ex=400x400",
    price: "4,300円前後", keyword: "ドラゴンクエスト メタリックアイテムズギャラリー 宝箱",
    rakutenUrl: "https://item.rakuten.co.jp/book/18141132/", yahooUrl: "",
    tags: ["物質", "フィギュア", "雑貨"],
    desc: "あの宝箱を立体で。小物入れにもなります。", pickup: false, popularity: 57
  },
  {
    id: "G022", name: "メタリックアイテムズギャラリー スペシャル ロトの鎧＆ロトの兜", category: "フィギュア・ぬいぐるみ", emoji: "⚔️",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7472/4988601267472_1_2.jpg?_ex=400x400",
    price: "8,000円前後", keyword: "メタリックアイテムズギャラリー ロトの鎧",
    rakutenUrl: "https://item.rakuten.co.jp/book/18141131/", yahooUrl: "",
    tags: ["武器", "フィギュア", "レア"],
    desc: "装備品を精密に立体化したシリーズ。飾りごたえがあります。", pickup: false, popularity: 61
  },
  {
    id: "G023", name: "メタリックアイテムズギャラリー スペシャル 天空の鎧＆天空の兜", category: "フィギュア・ぬいぐるみ", emoji: "🗡️",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/7524/4988601287524.jpg?_ex=400x400",
    price: "7,600円前後", keyword: "メタリックアイテムズギャラリー 天空の鎧",
    rakutenUrl: "https://item.rakuten.co.jp/book/18722759/", yahooUrl: "",
    tags: ["武器", "フィギュア", "レア"],
    desc: "天空シリーズの装備。ロトのものと並べたくなります。", pickup: false, popularity: 56
  },

  /* ============================== 食器 ============================== */
  {
    id: "G005", name: "スマイルスライム マグカップ スライム", category: "雑貨・キッチン", emoji: "☕",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/tenten-store/cabinet/img32/dq-ss-mc-s-1e.jpg?_ex=400x400",
    price: "1,980円前後", keyword: "ドラゴンクエスト スマイルスライム マグカップ",
    rakutenUrl: "https://item.rakuten.co.jp/tenten-store/dq-ss-mc-s/", yahooUrl: "",
    tags: ["スライム", "食器", "定番"],
    desc: "毎日使える実用グッズ。ギフトにも。", pickup: false, popularity: 76
  },
  {
    id: "G033", name: "スマイルスライム マグカップ キングスライム", category: "雑貨・キッチン", emoji: "👑",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/tenten-store/cabinet/img32/dq-ss-mc-ks-3.jpg?_ex=400x400",
    price: "1,980円前後", keyword: "スマイルスライム マグカップ キングスライム",
    rakutenUrl: "https://item.rakuten.co.jp/tenten-store/dq-ss-mc-ks/", yahooUrl: "",
    tags: ["スライム", "食器", "配合"],
    desc: "キングスライム柄。配合の先にいる王様です。", pickup: false, popularity: 63
  },
  {
    id: "G034", name: "スマイルスライム マグカップ スライムナイト", category: "雑貨・キッチン", emoji: "🐴",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/tenten-store/cabinet/img32/dq-ss-mc-sn-1.jpg?_ex=400x400",
    price: "1,980円前後", keyword: "スマイルスライム マグカップ スライムナイト",
    rakutenUrl: "https://item.rakuten.co.jp/tenten-store/dq-ss-mc-sn/", yahooUrl: "",
    tags: ["スライム", "食器", "人気"],
    desc: "人気者スライムナイトのマグ。", pickup: false, popularity: 61
  },
  {
    id: "G028", name: "ドラゴンクエスト 和シリーズ お箸＆箸置きセット ブルー", category: "雑貨・キッチン", emoji: "🥢",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/akito-mori/cabinet/img05/dq-hashi-bl-1a.jpg?_ex=400x400",
    price: "2,880円前後", keyword: "ドラゴンクエスト 和シリーズ 箸 箸置き",
    rakutenUrl: "https://item.rakuten.co.jp/akito-mori/dq-ss-hashi/", yahooUrl: "",
    tags: ["食器", "雑貨", "スライム"],
    desc: "和柄のお箸と箸置き。食卓にさりげなく置けます。", pickup: false, popularity: 54
  },
  {
    id: "G029", name: "スマイルスライム ソルト＆ペッパー", category: "雑貨・キッチン", emoji: "🧂",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/blue-post/cabinet/dq/04618792/13560263/26-07-271639-1.jpg?_ex=400x400",
    price: "3,520円前後", keyword: "スマイルスライム ソルト ペッパー",
    rakutenUrl: "https://item.rakuten.co.jp/blue-post/26-07-4988601271639/", yahooUrl: "",
    tags: ["スライム", "食器", "かわいい"],
    desc: "食卓に置くスライム。ふたりで並ぶ姿がかわいい。", pickup: false, popularity: 52
  },
  {
    id: "G035", name: "スマイルスライム アイスクリームスプーン メタルスライム", category: "雑貨・キッチン", emoji: "🍨",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/yamasakionline2/cabinet/10590896/imgrc0266208873.jpg?_ex=400x400",
    price: "1,650円前後", keyword: "スマイルスライム アイスクリームスプーン",
    rakutenUrl: "https://item.rakuten.co.jp/yamasakionline2/255295/", yahooUrl: "",
    tags: ["スライム", "レア", "食器"],
    desc: "熱伝導でアイスがすくえるスプーン。金属のメタスラらしい一品。", pickup: false, popularity: 59
  },

  /* ============================== 雑貨 ============================== */
  {
    id: "G011", name: "スマイルスライム たためる収納箱 ひとくいばこ", category: "雑貨・キッチン", emoji: "📦",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/1547/4988601271547.jpg?_ex=400x400",
    price: "3,100円前後", keyword: "ドラゴンクエスト たためる収納箱",
    rakutenUrl: "https://item.rakuten.co.jp/book/18221029/", yahooUrl: "",
    tags: ["雑貨", "物質", "かわいい"],
    desc: "見た目も実用性も両立。散らかりがちな机まわりに。", pickup: false, popularity: 55
  },
  {
    id: "G027", name: "スマイルスライム 陶器貯金箱 スライム", category: "雑貨・キッチン", emoji: "🏦",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/akito-mori/cabinet/img05/dq-ttb-sl-n1a.jpg?_ex=400x400",
    price: "3,600円前後", keyword: "ドラゴンクエスト スマイルスライム 貯金箱",
    rakutenUrl: "https://item.rakuten.co.jp/akito-mori/dq-ttb-sl/", yahooUrl: "",
    tags: ["スライム", "雑貨", "かわいい"],
    desc: "ゴールドを貯める貯金箱。旅の資金づくりに。", pickup: false, popularity: 57
  },
  {
    id: "G030", name: "ドラゴンクエスト スライム砂時計 メタルスライム", category: "雑貨・キッチン", emoji: "⏳",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/tenten-store/cabinet/img32/dq-sndk-msl-2.jpg?_ex=400x400",
    price: "5,200円前後", keyword: "ドラゴンクエスト スライム砂時計",
    rakutenUrl: "https://item.rakuten.co.jp/tenten-store/dq-sndk-msl/", yahooUrl: "",
    tags: ["スライム", "レア", "雑貨"],
    desc: "逃げる前に倒せるか。作業時間をはかるのにも。", pickup: false, popularity: 60
  },
  {
    id: "G031", name: "ドラゴンクエスト トラベル アイマスク はぐれメタル", category: "雑貨・キッチン", emoji: "😴",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/kkyamasakishop/cabinet/10616163/0816-1.jpg?_ex=400x400",
    price: "2,100円前後", keyword: "ドラゴンクエスト アイマスク はぐれメタル",
    rakutenUrl: "https://item.rakuten.co.jp/kkyamasakishop/245371/", yahooUrl: "",
    tags: ["スライム", "レア", "雑貨"],
    desc: "旅のおとも。はぐれメタルに眠りを守ってもらいましょう。", pickup: false, popularity: 50
  },
  {
    id: "G032", name: "スマイルスライム 和シリーズ てぬぐい そら", category: "雑貨・キッチン", emoji: "🧻",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/bestchoiceshop/cabinet/12372221/13797242/04858715.jpg?_ex=400x400",
    price: "1,280円前後", keyword: "スマイルスライム 和シリーズ てぬぐい",
    rakutenUrl: "https://item.rakuten.co.jp/bestchoiceshop/4988601297745/", yahooUrl: "",
    tags: ["スライム", "雑貨", "かわいい"],
    desc: "和柄のてぬぐい。飾ってもいいし普段使いにも。", pickup: false, popularity: 48
  },

  /* ============================== 文具 ============================== */
  {
    id: "G036", name: "DQ文具屋 デコレーションシール スライムデザイン", category: "アクセサリー・文具", emoji: "🩹",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/auc-bstarb/cabinet/12601355/imgrc0363743278.jpg?_ex=400x400",
    price: "660円前後", keyword: "ドラゴンクエスト デコレーションシール スライム",
    rakutenUrl: "https://item.rakuten.co.jp/auc-bstarb/dqsticker-ep8085-gg-a/", yahooUrl: "",
    tags: ["スライム", "文具", "かわいい"],
    desc: "手帳やノートに貼れるシール。いちばん気軽なドラクエ成分。", pickup: false, popularity: 53
  },
  {
    id: "G037", name: "ドラゴンクエスト 浸透印スタンプ ハーフ スライム", category: "アクセサリー・文具", emoji: "🖃",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/kaden-sakura/cabinet/gazou59/h-4988601266192.jpg?_ex=400x400",
    price: "600円前後", keyword: "ドラゴンクエスト 浸透印 スタンプ スライム",
    rakutenUrl: "https://item.rakuten.co.jp/kaden-sakura/4988601266192/", yahooUrl: "",
    tags: ["スライム", "文具", "かわいい"],
    desc: "ぽんと押せるスタンプ。メモやお手紙のワンポイントに。", pickup: false, popularity: 49
  },

  /* ============================== アクセサリー ============================== */
  {
    id: "G006", name: "キーホルダー ロトの鎧＆ロトの剣", category: "アクセサリー・文具", emoji: "🗡️",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/amiami/cabinet/images/2025/392/goods-04691399.jpg?_ex=400x400",
    price: "1,570円前後", keyword: "ドラゴンクエスト ロトのつるぎ キーホルダー",
    rakutenUrl: "https://item.rakuten.co.jp/amiami/goods-04691399/", yahooUrl: "",
    tags: ["武器", "アクセサリー", "定番"],
    desc: "装備品モチーフの小物。撮影の小道具にも使えます。", pickup: false, popularity: 65
  },
  {
    id: "G041", name: "キーホルダー ロトの兜＆ロトの盾", category: "アクセサリー・文具", emoji: "🛡️",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/amiami/cabinet/images/2025/392/goods-04691400.jpg?_ex=400x400",
    price: "1,810円前後", keyword: "ドラゴンクエスト ロトの盾 キーホルダー",
    rakutenUrl: "https://item.rakuten.co.jp/amiami/goods-04691400/", yahooUrl: "",
    tags: ["武器", "アクセサリー"],
    desc: "剣とセットで揃えたい防具側。", pickup: false, popularity: 55
  },
  {
    id: "G040", name: "ドラゴンクエスト キーホルダー ロトのしるし", category: "アクセサリー・文具", emoji: "🔰",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/amiami/cabinet/images/2025/222/goods-04635031.jpg?_ex=400x400",
    price: "1,480円前後", keyword: "ドラゴンクエスト ロトのしるし キーホルダー",
    rakutenUrl: "https://item.rakuten.co.jp/amiami/goods-04635031/", yahooUrl: "",
    tags: ["武器", "アクセサリー", "定番"],
    desc: "シリーズを象徴するしるし。さりげなく付けられます。", pickup: false, popularity: 58
  },
  {
    id: "G038", name: "ドラゴンクエスト フィギュアキーホルダー キングスライム", category: "アクセサリー・文具", emoji: "👑",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/kkyamasakishop/cabinet/08235682/imgrc0137189599.jpg?_ex=400x400",
    price: "1,800円前後", keyword: "ドラゴンクエスト フィギュアキーホルダー キングスライム",
    rakutenUrl: "https://item.rakuten.co.jp/kkyamasakishop/260541/", yahooUrl: "",
    tags: ["スライム", "アクセサリー", "配合"],
    desc: "立体のキーホルダー。バッグの上でも存在感があります。", pickup: false, popularity: 56
  },
  {
    id: "G039", name: "ドラゴンクエスト フィギュアキーホルダー スライム", category: "アクセサリー・文具", emoji: "🔵",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/kkyamasakishop/cabinet/08235682/imgrc0137189598.jpg?_ex=400x400",
    price: "1,720円前後", keyword: "ドラゴンクエスト フィギュアキーホルダー スライム",
    rakutenUrl: "https://item.rakuten.co.jp/kkyamasakishop/260534/", yahooUrl: "",
    tags: ["スライム", "アクセサリー", "定番"],
    desc: "いちばんベーシックなスライムのキーホルダー。", pickup: false, popularity: 62
  },
  {
    id: "G042", name: "スマイルスライム メタルキーリング スライム", category: "アクセサリー・文具", emoji: "🔗",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/1417/4988601271417_1_2.jpg?_ex=400x400",
    price: "1,460円前後", keyword: "スマイルスライム メタルキーリング",
    rakutenUrl: "https://item.rakuten.co.jp/book/18221030/", yahooUrl: "",
    tags: ["スライム", "アクセサリー"],
    desc: "金属製のキーリング。大人でも使いやすい落ち着いた質感。", pickup: false, popularity: 51
  },
  {
    id: "G043", name: "スマイルスライム ラメでキラキラ！キーホルダー マリンスライム", category: "アクセサリー・文具", emoji: "✨",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/amiami/cabinet/images/2026/181/goods-04799031.jpg?_ex=400x400",
    price: "1,150円前後", keyword: "スマイルスライム ラメ キーホルダー",
    rakutenUrl: "https://item.rakuten.co.jp/amiami/goods-04799031/", yahooUrl: "",
    tags: ["スライム", "アクセサリー", "かわいい"],
    desc: "中のラメが揺れるキーホルダー。光にかざすときれい。", pickup: false, popularity: 50
  },
  {
    id: "G044", name: "ドラゴンクエスト アクリルキーホルダー 40周年記念Ver.", category: "アクセサリー・文具", emoji: "🪧",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/neowing-r/cabinet/item_img_2241/neogds-1034002.jpg?_ex=400x400",
    price: "1,410円前後", keyword: "ドラゴンクエスト アクリルキーホルダー 40周年",
    rakutenUrl: "https://item.rakuten.co.jp/neowing-r/neogds-1034002/", yahooUrl: "",
    tags: ["アクセサリー", "レア"],
    desc: "40周年の記念デザイン。軽くて付けやすいアクリル製。", pickup: false, popularity: 52
  },
  {
    id: "G026", name: "ドラゴンクエスト 40周年記念ピンズ", category: "アクセサリー・文具", emoji: "📌",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0456/4988601290456.jpg?_ex=400x400",
    price: "1,300円前後", keyword: "ドラゴンクエスト 40周年 ピンズ",
    rakutenUrl: "https://item.rakuten.co.jp/book/18722757/", yahooUrl: "",
    tags: ["アクセサリー", "レア"],
    desc: "服やバッグに挿せる記念ピンズ。", pickup: false, popularity: 47
  },
  {
    id: "G010", name: "ドラゴンクエストモンスターズ3 アクリルスタンド", category: "アクセサリー・文具", emoji: "🖼️",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/biccamera/cabinet/product/9736/00000012641782_a01.jpg?_ex=400x400",
    price: "1,980円前後", keyword: "ドラゴンクエストモンスターズ3 アクリルスタンド",
    rakutenUrl: "https://item.rakuten.co.jp/biccamera/4988601258197/", yahooUrl: "",
    tags: ["アクセサリー", "雑貨", "人気"],
    desc: "省スペースで飾れるアクスタ。デスクの片隅にどうぞ。", pickup: false, popularity: 58
  },

  /* ============================== 書籍 ============================== */
  {
    id: "G004", name: "ドラゴンクエスト25thアニバーサリー モンスター大図鑑", category: "ゲーム・本・音楽", emoji: "📖",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5831/9784757535831.jpg?_ex=400x400",
    price: "2,640円前後", keyword: "ドラゴンクエスト25thアニバーサリー モンスター大図鑑",
    rakutenUrl: "https://item.rakuten.co.jp/book/11603597/", yahooUrl: "",
    tags: ["書籍", "図鑑", "配合"],
    desc: "系統やモンスターを調べるときの資料に。動画制作の参考にもしています。", pickup: true, popularity: 72
  },
  {
    id: "G045", name: "ドラゴンクエスト25thアニバーサリー 冒険の歴史書", category: "ゲーム・本・音楽", emoji: "📚",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/4070/9784757534070.jpg?_ex=400x400",
    price: "1,870円前後", keyword: "ドラゴンクエスト25thアニバーサリー 冒険の歴史書",
    rakutenUrl: "https://item.rakuten.co.jp/book/11355736/", yahooUrl: "",
    tags: ["書籍", "図鑑"],
    desc: "シリーズの歩みをまとめた一冊。読み物としても楽しい。", pickup: false, popularity: 55
  },
  {
    id: "G046", name: "ドラゴンクエストI＆II 公式ガイドブック【HD-2D版】", category: "ゲーム・本・音楽", emoji: "🗺️",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0846/9784301000846_1_5.jpg?_ex=400x400",
    price: "2,530円前後", keyword: "ドラゴンクエストI&II 公式ガイドブック HD-2D",
    rakutenUrl: "https://item.rakuten.co.jp/book/18329611/", yahooUrl: "",
    tags: ["書籍", "図鑑"],
    desc: "最新リメイクの公式ガイド。データを引くのに便利。", pickup: false, popularity: 60
  },
  {
    id: "G047", name: "ドラゴンクエスト1＆2 LEGENDARY GUIDEBOOK", category: "ゲーム・本・音楽", emoji: "📕",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/8302/9784087798302_1_6.jpg?_ex=400x400",
    price: "1,870円前後", keyword: "ドラゴンクエスト1&2 LEGENDARY GUIDEBOOK",
    rakutenUrl: "https://item.rakuten.co.jp/book/18320529/", yahooUrl: "",
    tags: ["書籍", "図鑑"],
    desc: "Vジャンプ版のガイド。イラストも多めです。", pickup: false, popularity: 52
  },

  /* ============================== ゲーム ============================== */
  {
    id: "G007", name: "ドラゴンクエストモンスターズ3 魔族の王子とエルフの旅（Switch）", category: "ゲーム・本・音楽", emoji: "🎮",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/1594/4988601011594_1_5.jpg?_ex=400x400",
    price: "6,900円前後", keyword: "ドラゴンクエストモンスターズ3 魔族の王子とエルフの旅",
    rakutenUrl: "https://item.rakuten.co.jp/book/17551486/", yahooUrl: "",
    tags: ["ゲーム", "配合", "人気"],
    desc: "配合の元ネタを自分の手で。動画で扱う要素の予習にどうぞ。", pickup: true, popularity: 95
  },
  {
    id: "G048", name: "ドラゴンクエストXI 過ぎ去りし時を求めて S（Switch）", category: "ゲーム・本・音楽", emoji: "🕹️",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0825/4988601010825.jpg?_ex=400x400",
    price: "4,900円前後", keyword: "ドラゴンクエストXI 過ぎ去りし時を求めて S",
    rakutenUrl: "https://item.rakuten.co.jp/book/16469660/", yahooUrl: "",
    tags: ["ゲーム", "人気"],
    desc: "シリーズ最新のナンバリング。ボリュームたっぷり。", pickup: false, popularity: 82
  },
  {
    id: "G049", name: "ドラゴンクエストIII そして伝説へ…（Switch）", category: "ゲーム・本・音楽", emoji: "🎲",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/1822/4988601011822.jpg?_ex=400x400",
    price: "6,900円前後", keyword: "ドラゴンクエストIII そして伝説へ Switch",
    rakutenUrl: "https://item.rakuten.co.jp/book/17915656/", yahooUrl: "",
    tags: ["ゲーム", "人気", "定番"],
    desc: "HD-2Dで生まれ変わった伝説の3作目。", pickup: false, popularity: 86
  },
  {
    id: "G050", name: "ドラゴンクエストI＆II（Switch）", category: "ゲーム・本・音楽", emoji: "🐲",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/1969/4988601011969_1_2.jpg?_ex=400x400",
    price: "6,900円前後", keyword: "ドラゴンクエストI&II Switch",
    rakutenUrl: "https://item.rakuten.co.jp/book/18253633/", yahooUrl: "",
    tags: ["ゲーム", "定番"],
    desc: "シリーズの原点をまとめて。ロト三部作の入口です。", pickup: false, popularity: 80
  },
  {
    id: "G051", name: "ドラゴンクエストビルダーズ2 破壊神シドーとからっぽの島（Switch）", category: "ゲーム・本・音楽", emoji: "🧱",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/0771/4988601010771.jpg?_ex=400x400",
    price: "4,900円前後", keyword: "ドラゴンクエストビルダーズ2",
    rakutenUrl: "https://item.rakuten.co.jp/book/16469659/", yahooUrl: "",
    tags: ["ゲーム", "人気"],
    desc: "作って遊ぶドラクエ。のんびり遊びたいときに。", pickup: false, popularity: 74
  },

  /* ============================== 音楽 ============================== */
  {
    id: "G009", name: "ドラゴンクエストVII エデンの戦士たち オリジナルサウンドトラック", category: "ゲーム・本・音楽", emoji: "🎵",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/2163/4988003372163.jpg?_ex=400x400",
    price: "1,900円前後", keyword: "ドラゴンクエスト オリジナルサウンドトラック",
    rakutenUrl: "https://item.rakuten.co.jp/book/6135139/", yahooUrl: "",
    tags: ["音楽", "定番"],
    desc: "作業用にも。冒険の気分が一気に高まります。", pickup: false, popularity: 70
  },
  {
    id: "G052", name: "ドラゴンクエストVIII 空と海と大地と呪われし姫君 サウンドトラック", category: "ゲーム・本・音楽", emoji: "🎼",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/2156/4988003372156.jpg?_ex=400x400",
    price: "3,000円前後", keyword: "ドラゴンクエスト8 オリジナルサウンドトラック",
    rakutenUrl: "https://item.rakuten.co.jp/book/6135138/", yahooUrl: "",
    tags: ["音楽"],
    desc: "広い世界を旅する気分になれる一枚。", pickup: false, popularity: 58
  },
  {
    id: "G053", name: "ドラゴンクエストIX 星空の守り人 シンセ版＆オリジナル版", category: "ゲーム・本・音楽", emoji: "🌌",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/2149/4988003372149.jpg?_ex=400x400",
    price: "2,900円前後", keyword: "ドラゴンクエスト9 オリジナルサウンドトラック",
    rakutenUrl: "https://item.rakuten.co.jp/book/6075929/", yahooUrl: "",
    tags: ["音楽"],
    desc: "2バージョン入り。聴き比べが楽しいセットです。", pickup: false, popularity: 54
  },
  {
    id: "G054", name: "ニンテンドー3DS ドラゴンクエストVIII オリジナルサウンドトラック", category: "ゲーム・本・音楽", emoji: "🎧",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/4453/4988003484453.jpg?_ex=400x400",
    price: "3,290円前後", keyword: "3DS ドラゴンクエスト8 オリジナルサウンドトラック",
    rakutenUrl: "https://item.rakuten.co.jp/book/13531745/", yahooUrl: "",
    tags: ["音楽"],
    desc: "3DS版の音源。オーケストラ調のアレンジが楽しめます。", pickup: false, popularity: 50
  }
];
