/* 動画（エピソード）データ
   ※ 実際に公開した回だけを追加してください。得票数などの数字は
      本当に集計した値だけを書きます（透明性のため、盛らない・作らない）。

   id         : EP001 など
   no         : 話数
   youtubeId  : YouTubeの動画ID（https://www.youtube.com/watch?v=★ここ★）
   date       : 公開日 YYYY-MM-DD
   summary    : あらすじ
   voteType   : "name"(名前) / "skill"(スキル) / "breed"(配合) / "scout"(スカウト) / "none"
                ※ 名前は names.html の応募ボード、スキルと配合はYouTubeコメントで受け付けます
   voteStatus : "受付中" / "締切" / "結果発表"
   voteDeadline: 締切 YYYY-MM-DD
   voteNote   : 投票のやり方の一言
   result     : 投票結果（決まったら記入）
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
