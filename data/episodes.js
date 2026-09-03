/* 動画（エピソード）データ
   ※ 実際に公開した回だけを追加してください。得票数などの数字は
      本当に集計した値だけを書きます（透明性のため、盛らない・作らない）。

   id         : EP001 など
   no         : 話数
   youtubeId  : YouTubeの動画ID（https://www.youtube.com/watch?v=★ここ★）
   date       : 公開日 YYYY-MM-DD
   summary    : あらすじ
   voteType   : "name"(モンスターの名前) / "battle"(次に戦う相手) /
                "breed"(配合の組み合わせ) / "skill"(継承するスキル) / "none"
   voteTypes  : 1本で2つ以上募集するときの配列。例 ["name","battle"]
                ※ voteTypes があれば voteType より優先します（app.js の voteTypesOf）
   voteNotes  : 種類ごとの一言。例 { name:"…", battle:"…" }。無ければ voteNote を使います
                ※ name と battle は<動画のコメント欄>で受け付けます
                   （battle は固定コメント1件＋返信6件へのいいね）
                ※ breed と skill は<このサイトに貼った応募フォーム>で受け付けます
                   （概要欄からフォームへは直接飛ばしません）
   voteStatus : "受付中" / "締切" / "結果発表"
   voteDeadline: 締切 YYYY-MM-DD
   voteNote   : 参加のしかたの一言
   result     : 決まった結果（決まったら記入。最終判断は制作者）
   monsters   : 登場モンスターID
   tags       : おすすめ表示に使うタグ

   ---- 1本ぶんの書き方 ----
   {
     id: "EP001", no: 1, title: "",
     youtubeId: "", date: "2026-09-01",
     summary: "",
     voteType: "name", voteStatus: "受付中", voteDeadline: "",
     voteNote: "", result: "",
     monsters: [], tags: []
   }
*/
window.DB_EPISODES = [
  {
    id: "EP001", no: 1, title: "テリーの物語 1話 #aiアニメ #westory #ドラクエ",
    youtubeId: "qcU-tA-6v7c", date: "2026-09-03",
    summary: "見知らぬ大樹の国に放り出されたテリー。あらくれに笑われ、タイジュ王にも笑われ、それでもモンスターマスターへの第一歩がはじまります。",
    voteTypes: ["name", "battle"], voteStatus: "受付中", voteDeadline: "",
    voteNotes: {
      name: "スライムの名前を、この回のコメント欄で募集しています。ひらがな・カタカナで6文字まで。締切は未定で、都合により前後します。",
      battle: "次に戦う相手を、この回の固定コメントにぶら下げた返信6件（3体 × たたかう／スカウト）へのいいねで受け付けています。締切は未定で、都合により前後します。"
    },
    voteNote: "スライムの名前と、次に戦う相手を募集しています。",
    result: "",
    monsters: [], tags: ["テリー", "わたぼう", "タイジュの国", "タイジュ王", "紹介"]
  },
  {
    id: "EP000", no: 0, title: "テリー０ 告知版",
    youtubeId: "Q-Dl_mnKI-U", date: "2026-09-02",
    summary: "はじまりの回。テリーとわたぼうがごあいさつをします。これから旅をともにするスライムの名前を募集します。",
    voteType: "name", voteStatus: "受付中", voteDeadline: "",
    voteNote: "これから登場するスライムの名前を、動画のコメント欄で募集しています。ひらがな・カタカナで6文字まで。締切は未定で、都合により前後します。",
    result: "",
    monsters: [], tags: ["テリー", "わたぼう", "スライム", "紹介"]
  }
];
