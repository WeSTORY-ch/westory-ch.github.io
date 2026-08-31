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
window.DB_EPISODES = [];
