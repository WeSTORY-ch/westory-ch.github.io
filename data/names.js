/* 名前の応募ボードのデータ（names.html が読み込みます）
 *
 * open    : いま募集している名前。1件ずつ増やします。
 * history : 決まった名前の記録（透明性のため消さずに残します）
 *
 * ▼ 募集を1件はじめるときは open に追加します
 *   {
 *     id:      "N001",                 // 募集の通し番号
 *     target:  "配合で生まれた子",       // 誰の名前を募集しているか（表示用）
 *     species: "もりもりベス",           // 種族名（わかっていれば）
 *     monId:   "",                      // すでに data/monsters.js に登録済みなら ID（アイコン表示に使います）
 *     ep:      "",                      // 関連する動画の ID（data/episodes.js）
 *     deadline:"2026-09-05",            // 締切
 *     status:  "受付中",                 // 受付中 / 締切
 *     entries: []                       // 応募（先着30件まで）
 *   }
 *
 * ▼ entries の1件
 *   { id:"E001", name:"スラっち", by:"みかん", hearts:0, date:"2026-08-30", picked:false }
 *   name   … ひらがな・カタカナのみ／全角6文字（半角12文字）まで
 *   by     … 投稿者のお名前（任意）
 *   hearts … ハートの数。names.html で押された数を運営がここに書き戻します
 *   picked … 採用したものだけ true
 *
 * 応募は names.html のフォームから受け付け、運営が「応募を書き出し」で
 * このファイルを更新して確定させます（scout.js と同じ運用）。
 */
window.DB_NAMES = {
  open: [],
  history: []
};
