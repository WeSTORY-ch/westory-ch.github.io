/* モンスター牧場データ（いま持っているモンスター）
   種族・系統・ランク・位階・スキル・特性は「テリーのワンダーランド3D」の実データを使います
   （data/teri.js に全609体分あります）。name（呼び名）だけが視聴者の応募で決まる部分。
   admin.html から編集・書き出しできます。

   ※ ダミーの個体は置かないでください。実際に仲間になった子だけを追加します。

   ---- 項目の意味 ----
   id       : 一意のID（M001 など）。家系図はこのIDで繋がります。変更すると親子リンクが切れます。
   name     : 呼び名（names.html の応募から運営が決定）
   species  : 種族（実在するモンスター名）
   family   : 系統（スライム系 / ドラゴン系 / 自然系 / 魔獣系 / 物質系 / 悪魔系 / ゾンビ系 / ？？？系）
   rank     : ランク F〜SS
   idx      : 位階（1〜609）。配合結果の計算に使います
   size     : サイズ S / M / G
   level    : 現在レベル（動画1本 +4。負けた回は増えません。上がるのはパーティ3体だけ）
   img      : assets/mon/種族名.png（正面アイコン）
   性別      : ありません。全員が両性（オスにもメスにもなれる）なので、どの子とも配合できます。
              配合は「親①×親②」の組み合わせで行います（father=親①, mother=親② のキー名は互換のため残しています）
   parents  : { father: "M001", mother: "M002" } ＝ 親①と親②。配合が確定で実行された個体のみ。スカウトは null
   breed    : 配合の種類（"特殊配合" / "位階配合"）。parents があるときだけ
   世代      : parents から自動計算（配合を重ねるほど世代が進む）
   skills   : [{ name, desc }] 実際の特技データ
   traits   : 特性
   status   : "現役" / "配合済み"（親は配合で消費されるため） / "入院中"（バトルに敗北し
              モンスター病院に引き継がれた個体。以後の動画には出場しない）
   party    : 1〜3 = 現在のパーティ枠。出ていない子は null。毎回アンケートで決めます
   hospital : { ep, ep名で敗北した相手, date } 入院中のときだけ

   ---- 1体ぶんの書き方 ----
   {
     id: "M001", name: "", species: "スライム", family: "スライム系", rank: "F",
     idx: 1, size: "S", level: 0, emoji: "🔵", img: "assets/mon/スライム.png",
     parents: null, breed: null, birthEp: "EP001",
     skills: [{ name: "メラ", desc: "敵単体にメラ系のダメージ（小）を与える。" }],
     traits: ["スモールボディ"], skillLine: "スラフォース",
     episodes: ["EP001"], tags: ["スライム"],
     party: 1, status: "現役", note: ""
   }
*/
window.DB_MONSTERS = [
  {
    id: "M001", name: "スラぼう", species: "スライム", family: "スライム系", rank: "F",
    idx: 1, size: "S", level: 5, emoji: "🔵", img: "assets/mon/スライム.png",
    parents: null, breed: null, birthEp: "EP001",
    skills: [{ name: "メラ", desc: "敵1体にメラ系の呪文ダメージ（小）を与える" }],
    traits: ["スモールボディ"], skillLine: "スラフォース",
    episodes: ["EP001"], tags: ["スライム", "最初の仲間"],
    party: 1, status: "現役",
    note: "最初の仲間モンスター。名前は1話コメント欄の応募から「スラぼう」に決定。"
  },
  {
    id: "M002", name: "", species: "アントベア", family: "魔獣系", rank: "F",
    idx: 18, size: "S", level: 1, emoji: "🐻", img: "assets/mon/アントベア.png",
    parents: null, breed: null, birthEp: "EP001",
    skills: [{ name: "ハートブレイク", desc: "敵1体を攻撃し、たまにマインド効果で1ターン行動を封じる斬撃" }],
    traits: ["スタンダードボディ"], skillLine: "けもの道",
    episodes: [], tags: ["アントベア", "スカウト"],
    party: 2, status: "現役",
    note: "1話の6択の結果スカウトに決定し、抽選1回目（乱数0.4176）で成功。名前は未定（募集予定）。"
  }
];
