/* ============================================================
   モンスター冒険録 - 共通スクリプト
   ・ヘッダー/フッターの生成
   ・アフィリエイトリンクの組み立て
   ・閲覧履歴にもとづくおすすめ（localStorage / サーバー不要）
   ============================================================ */
(function () {
  'use strict';

  // ---------- データ ----------
  const SITE = window.DB_SITE || {};
  const MONSTERS = window.DB_MONSTERS || [];
  const EPISODES = window.DB_EPISODES || [];
  const GOODS = window.DB_GOODS || [];
  const NEWS = window.DB_NEWS || [];
  const STORY = window.DB_STORY || { arcs: [], enemies: [], beats: [], scripts: {} };
  const TERI = window.DB_TERI || { alias: {}, kei: {}, mons: [], sp: [] };
  const SCOUT = window.DB_SCOUT || { items: {}, history: [] };
  const NAMES = window.DB_NAMES || { open: [], history: [] };

  // ---------- ユーティリティ ----------
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  const qs = (k) => new URLSearchParams(location.search).get(k) || '';
  const fmtDate = (d) => {
    if (!d) return '';
    const p = String(d).split('-');
    return p.length === 3 ? `${p[0]}.${p[1]}.${p[2]}` : d;
  };

  /* ---------- アイコン ----------
     絵文字は端末ごとに絵柄も大きさも変わって揃わないので使いません。
     ここにある線画（24x24・線幅1.7・角丸）だけを使います。
     色は currentColor＝置いた場所の文字色をそのまま継ぐので、CSS 側で色を決められます。 */
  const ICONS = {
    play:    '<path d="M8.5 5.5 19 12 8.5 18.5Z" fill="currentColor" stroke="none"/>',
    battle:  '<path d="M4 4h3l11 11M20 4h-3L6 15"/><path d="M6 15l-2 2 3 3 2-2M18 15l2 2-3 3-2-2"/>',
    pen:     '<path d="M4 20l.9-3.6L16 5.3a2 2 0 0 1 2.8 2.8L7.6 19.1Z"/><path d="M14.4 6.9l2.7 2.7"/>',
    breed:   '<path d="M7 3c0 5.5 10 7.5 10 13M17 3c0 5.5-10 7.5-10 13"/><path d="M8.4 7h7.2M7.2 11h9.6M8.4 15h7.2"/><path d="M7 19v2M17 19v2"/>',
    skill:   '<path d="M12 3.2 13.7 9 19.5 10.7 13.7 12.4 12 18.2 10.3 12.4 4.5 10.7 10.3 9Z"/><path d="M18.5 16.3l.7 2.2 2.2.7-2.2.7-.7 2.2-.7-2.2-2.2-.7 2.2-.7Z"/>',
    leaf:    '<path d="M20 4c0 9-6.6 15.5-15 15.5C5 10.5 11.6 4 20 4Z"/><path d="M4 20 13 11"/>',
    meat:    '<path d="M14.6 4.2a4.4 4.4 0 0 1 5.2 5.2L11 18.2a4 4 0 1 1-5.2-5.2Z"/><path d="m5.8 13 5.2 5.2"/>',
    medal:   '<circle cx="12" cy="14.5" r="5"/><path d="M8.6 9.8 6 3h12l-2.6 6.8"/><path d="M12 12.4l.9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2L9.1 14.6l2-.3Z"/>',
    box:     '<path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5Z"/><path d="M4 8.5 12 13l8-4.5M12 13v7"/>',
    check:   '<path d="m5 12.6 4.6 4.6L19 6.8"/>',
    level:   '<path d="M4 19h16"/><path d="m5 15 4.5-5 3.5 3L20 5"/><path d="M15.5 5H20v4.5"/>',
    flask:   '<path d="M10 3v6.2L4.9 17a2 2 0 0 0 1.7 3h10.8a2 2 0 0 0 1.7-3L14 9.2V3"/><path d="M8.6 3h6.8M7.3 14h9.4"/>',
    down:    '<path d="m6 9.5 6 6 6-6"/>',
    right:   '<path d="M4.5 12h15"/><path d="m13.5 6 6 6-6 6"/>',
    star:    '<path d="m12 3.5 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z"/>',
    egg:     '<path d="M12 3.2c3.8 0 6.8 5.6 6.8 10.1a6.8 6.8 0 0 1-13.6 0C5.2 8.8 8.2 3.2 12 3.2Z"/>',
    crest:   '<path d="M12 3 20 6v6.2c0 4.4-3.2 7.5-8 8.8-4.8-1.3-8-4.4-8-8.8V6Z"/><path d="M12 8.2 13.4 11l2.9.4-2.1 2 .5 2.9-2.7-1.4-2.7 1.4.5-2.9-2.1-2 2.9-.4Z"/>',
    crown:   '<path d="M4 17h16"/><path d="m4 17-1.2-8L8 12l4-6.5L16 12l5.2-3-1.2 8Z"/>',
    eye:     '<path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3.1"/>',
    like:    '<path d="M7 21V9.6l4.6-6.4a2 2 0 0 1 3.4 1.9L14 9.6h5a2 2 0 0 1 2 2.4l-1.5 7A2 2 0 0 1 17.5 21Z"/><path d="M7 9.6H3.5V21H7"/>',
    youtube: '<rect x="2.5" y="5" width="19" height="14" rx="4.2"/><path d="M10.3 9.2 15.4 12l-5.1 2.8Z" fill="currentColor" stroke="none"/>',
    cross:   '<path d="M9.5 3.5h5v6h6v5h-6v6h-5v-6h-6v-5h6Z"/>',
    party:   '<circle cx="8" cy="9" r="3"/><circle cx="17" cy="10" r="2.4"/><path d="M2.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5"/><path d="M15.5 20c0-2.6 1.4-4.4 3-4.4s3 1.4 3 4.4"/>',
    book:    '<path d="M4 4.5h5.5A2.5 2.5 0 0 1 12 7v13a2.2 2.2 0 0 0-2.2-2.2H4Z"/><path d="M20 4.5h-5.5A2.5 2.5 0 0 0 12 7v13a2.2 2.2 0 0 1 2.2-2.2H20Z"/>',
    tree:    '<path d="M9 4.5h6v4H9Z"/><path d="M2.5 15.5h6v4h-6ZM15.5 15.5h6v4h-6Z"/><path d="M12 8.5v3.5M5.5 15.5V12h13v3.5"/>',
    search:  '<circle cx="10.8" cy="10.8" r="6.3"/><path d="m15.4 15.4 5 5"/>',
    question:'<circle cx="12" cy="12" r="8.5"/><path d="M9.6 9.6a2.5 2.5 0 1 1 3.3 2.4c-.6.2-.9.8-.9 1.5v.4"/><path d="M12 17.2h.01"/>',
    gift:    '<path d="M3.5 9.5h17v3.2h-17ZM5 12.7h14V20H5Z"/><path d="M12 9.5V20"/><path d="M12 9.5C10 6 8.6 4 7.2 4a2.2 2.2 0 0 0 0 4.4h9.6a2.2 2.2 0 0 0 0-4.4C15.4 4 14 6 12 9.5Z"/>',
    target:  '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.6"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>',
    hands:   '<path d="M3 12.5 7.5 8l3.4 3.4a2 2 0 0 0 2.8 0L17 8l4 4.5"/><path d="M7.5 8 4 11.5 8.5 16l2-2M17 8l3.5 3.5L16 16l-2-2"/>',
    auto:    '<rect x="4" y="8" width="16" height="11" rx="3"/><path d="M12 4.2v3.8M9.5 12.5h.01M14.5 12.5h.01M9.5 16h5"/>'
  };
  // 使い方: icon('battle') / icon('leaf','use') → <svg class="ic use">…</svg>
  function svgFor(name, cls) {
    const d = ICONS[name];
    if (!d) return '';
    return '<svg' + (cls ? ' class="' + cls + '"' : '') + ' viewBox="0 0 24 24" aria-hidden="true" ' +
      'fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' +
      d + '</svg>';
  }
  function icon(name, cls) {
    return svgFor(name, 'ic' + (cls ? ' ' + cls : ''));
  }
  // data-ic="名前" が付いた要素に線画を流し込む（HTML に直接書けるようにするため）
  // 中の svg には ic を付けない。付けると外側の .ic のサイズ指定と二重にかかってはみ出す
  function hydrateIcons(root) {
    (root || document).querySelectorAll('[data-ic]').forEach(el => {
      el.innerHTML = svgFor(el.getAttribute('data-ic'));
    });
  }

  // ---------- YouTube ----------
  const ytWatch = (ep) => ep && ep.youtubeId
    ? `https://www.youtube.com/watch?v=${encodeURIComponent(ep.youtubeId)}`
    : (SITE.channelUrl || '#');
  const ytThumb = (ep) => ep && ep.youtubeId
    ? `https://i.ytimg.com/vi/${encodeURIComponent(ep.youtubeId)}/hqdefault.jpg` : '';
  const ytEmbed = (ep) => ep && ep.youtubeId
    ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(ep.youtubeId)}` : '';

  // ---------- アフィリエイトリンク ----------
  // 付け方はファッションサイト(shops.ts)の実測済みルールに合わせています。
  // 全リンクに付ける属性。付け忘れを防ぐためここ一箇所に閉じる。
  const AFFILIATE_REL = 'nofollow sponsored noopener noreferrer';

  // Amazon: PA-API 未承認のため ASIN 直リンク・価格・画像は出さず、検索リンクにタグを付けるだけ。
  function amazonLink(g) {
    const tag = (SITE.affiliate && SITE.affiliate.amazonTag) || '';
    const q = g.keyword || g.name;
    const url = `https://www.amazon.co.jp/s?k=${encodeURIComponent(q)}`;
    return tag ? `${url}&tag=${encodeURIComponent(tag)}` : url;
  }
  // 楽天: 素のURLを hb.afl で丸ごと包む。商品ページでも検索結果でも同じ形で効く。
  function rakutenLink(g) {
    const raw = g.rakutenUrl ||
      `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(g.keyword || g.name)}/`;
    const id = (SITE.affiliate && SITE.affiliate.rakutenId) || '';
    return id
      ? `https://hb.afl.rakuten.co.jp/hgc/${id}/?pc=${encodeURIComponent(raw)}&link_type=hybrid_url`
      : raw;
  }
  // Yahoo!: LYPアフィリエイト。商品URLからアフィリンクは組み立てられないので、
  // 管理画面で作った短縮URL(yahoo.jp/xxxxx)を goods.js の yahooUrl に貼った商品だけ出す。
  function yahooLink(g) {
    if (g.yahooUrl) return g.yahooUrl;
    if (SITE.affiliate && SITE.affiliate.yahooManualOnly) return '';
    return `https://shopping.yahoo.co.jp/search?p=${encodeURIComponent(g.keyword || g.name)}`;
  }
  function shopLinksHtml(g) {
    const btn = (cls, shop, href, label) => href
      ? `<a class="${cls}" href="${esc(href)}" target="_blank" rel="${AFFILIATE_REL}"
           onclick="App.track.click('goods','${esc(g.id)}','${shop}')">${label}</a>` : '';
    return `<div class="shop-links">
      ${btn('sl-amazon', 'amazon', amazonLink(g), 'Amazonで探す')}
      ${btn('sl-rakuten', 'rakuten', rakutenLink(g), '楽天で見る')}
      ${btn('sl-yahoo', 'yahoo', yahooLink(g), 'Yahoo!で見る')}
    </div>`;
  }

  // ---------- 閲覧履歴（おすすめの元データ） ----------
  const PREF_KEY = 'dqfan_prefs_v1';
  function loadPrefs() {
    try {
      const o = JSON.parse(localStorage.getItem(PREF_KEY) || '{}');
      return {
        tags: o.tags || {},
        seenMon: o.seenMon || [],
        seenGoods: o.seenGoods || [],
        clicks: o.clicks || {},
        optOut: !!o.optOut
      };
    } catch (e) {
      return { tags: {}, seenMon: [], seenGoods: [], clicks: {}, optOut: false };
    }
  }
  function savePrefs(p) {
    try { localStorage.setItem(PREF_KEY, JSON.stringify(p)); } catch (e) { /* 保存不可でも動作継続 */ }
  }
  function addTags(tags, w) {
    const p = loadPrefs();
    if (p.optOut) return;
    (tags || []).forEach(t => { p.tags[t] = (p.tags[t] || 0) + (w || 1); });
    // 上限をかけて古い偏りが固定化しないようにする
    Object.keys(p.tags).forEach(k => { if (p.tags[k] > 40) p.tags[k] = 40; });
    savePrefs(p);
  }
  const track = {
    viewMonster(m) {
      if (!m) return;
      const p = loadPrefs();
      if (p.optOut) return;
      p.seenMon = [m.id].concat(p.seenMon.filter(x => x !== m.id)).slice(0, 30);
      savePrefs(p);
      addTags((m.tags || []).concat([m.family]), 2);
    },
    viewGoods(g) {
      if (!g) return;
      const p = loadPrefs();
      if (p.optOut) return;
      p.seenGoods = [g.id].concat(p.seenGoods.filter(x => x !== g.id)).slice(0, 30);
      savePrefs(p);
      addTags(g.tags, 1);
    },
    viewEpisode(ep) { if (ep) addTags(ep.tags, 1); },
    click(type, id, shop) {
      const p = loadPrefs();
      if (p.optOut) return;
      p.clicks[id] = (p.clicks[id] || 0) + 1;
      savePrefs(p);
      const g = GOODS.find(x => x.id === id);
      if (g) addTags(g.tags, 4); // 実際にクリックした関心は強めに反映
    },
    reset() { localStorage.removeItem(PREF_KEY); },
    setOptOut(v) { const p = loadPrefs(); p.optOut = !!v; if (v) { p.tags = {}; p.clicks = {}; } savePrefs(p); },
    get: loadPrefs
  };

  // ---------- おすすめエンジン ----------
  // スコア = タグ一致 + クリック実績 + 基本人気度
  function scoreGoods(g, prefs, boostTags) {
    const w = prefs.tags || {};
    let s = 0;
    (g.tags || []).forEach(t => { s += (w[t] || 0) * 3; });
    (boostTags || []).forEach(t => { if ((g.tags || []).indexOf(t) >= 0) s += 25; });
    s += (prefs.clicks[g.id] || 0) * 12;
    s += (g.popularity || 50) * 0.25;
    if ((prefs.seenGoods || []).indexOf(g.id) >= 0) s -= 8; // 見たものは少し下げる
    return s;
  }
  function recommendGoods(n, boostTags) {
    const prefs = loadPrefs();
    const list = GOODS.map(g => ({ g, s: scoreGoods(g, prefs, boostTags) }))
      .sort((a, b) => b.s - a.s).map(x => x.g);
    return list.slice(0, n || 4);
  }
  function hasHistory() {
    const p = loadPrefs();
    return !p.optOut && (Object.keys(p.tags).length > 0);
  }
  function topInterests(n) {
    const p = loadPrefs();
    return Object.keys(p.tags).sort((a, b) => p.tags[b] - p.tags[a]).slice(0, n || 3);
  }

  // ---------- モンスター関連 ----------
  const getMon = (id) => MONSTERS.find(m => m.id === id) || null;
  const getEp = (id) => EPISODES.find(e => e.id === id) || null;
  const getGoods = (id) => GOODS.find(g => g.id === id) || null;
  const childrenOf = (id) => MONSTERS.filter(m => m.parents && (m.parents.father === id || m.parents.mother === id));

  // ---------- 牧場（いま持っている仲間の内訳） ----------
  const partySize = () => (SITE.rules && SITE.rules.partySize) || 3;
  // 動画に出る3体。party の番号順に並べる
  const partyMons = () => MONSTERS.filter(m => m.party && m.status === '現役')
    .sort((a, b) => a.party - b.party).slice(0, partySize());
  // 牧場にいるが今回は出番がない子
  const benchMons = () => MONSTERS.filter(m => m.status === '現役' && !m.party);
  // 敗北して運営に引き継がれた子。以後の動画には出ない
  const hospitalMons = () => MONSTERS.filter(m => m.status === '入院中');
  // 配合で消費された子（家系図には残る）
  const retiredMons = () => MONSTERS.filter(m => m.status === '配合済み');
  const inHospital = (m) => !!m && m.status === '入院中';

  // ---------- 名前の募集（受付は YouTube のコメント欄） ----------
  const naming = () => SITE.naming || { maxChars: 6 };
  const openNameCalls = () => (NAMES.open || []).filter(c => c.status !== '締切');

  // ---------- 応募フォーム（配合先・継承スキル） ----------
  const forms = () => SITE.forms || {};
  const formUrl = (key) => (forms()[key + 'Url'] || '').trim();

  // ---------- どこで投票するか（site.js の polls が唯一の正解） ----------
  const polls = () => SITE.polls || [];
  const pollOf = (key) => polls().find(p => p.key === key) || null;
  // keys を渡すとその項目だけ、省略すると全部を並べる
  function voteMapHtml(keys) {
    const list = (keys && keys.length ? keys.map(pollOf) : polls()).filter(Boolean);
    const where = SITE.pollWhere || {};
    return `<div class="votemap">${list.map(p => {
      const w = where[p.where] || { label: p.where };
      const body = `<span class="vmic">${icon(p.icon || 'question')}</span><span>
        <span class="nm">${esc(p.what)}</span>
        <span class="wh">${p.where === 'youtube' ? icon('youtube') : ''}${esc(w.label)}</span>
        <span class="cap">${esc(p.note || '')}</span></span>`;
      if (p.where === 'youtube') {
        return `<a class="vm yt" href="${esc(SITE.channelUrl || '#')}" target="_blank" rel="noopener">${body}</a>`;
      }
      return p.url ? `<a class="vm web" href="${esc(p.url)}">${body}</a>` : `<div class="vm web">${body}</div>`;
    }).join('')}</div>`;
  }

  // ---------- 次に戦う相手（動画の最後の6択／固定コメントの返信にいいね） ----------
  const scoutCfg = () => SITE.scout || { levels: [], meat: [] };
  const scoutNow = () => SCOUT.current || { choices: [] };
  // 弱い順（上乗せの小さい順）に並べた肉。手持ち個数つき
  const meatList = () => (scoutCfg().meat || []).slice()
    .sort((a, b) => a.add - b.add)
    .map(mt => Object.assign({}, mt, { have: (SCOUT.items || {})[mt.item] || 0 }));
  const scoutHistory = () => (SCOUT.history || []).slice().reverse();
  const pct = (x) => Math.round(Number(x || 0) * 1000) / 10 + '%';
  // 種族名 → 正面アイコン。牧場に居る子は名鑑の img を優先する
  const monImg = (name) => {
    if (!name) return '';
    const m = MONSTERS.find(x => x.species === name || x.name === name);
    return (m && m.img) || ('assets/mon/' + name + '.png');
  };

  // ---------- アイテム（ショート動画の合計再生数でもらえる） ----------
  const viewItems = () => SITE.viewItems || { tiers: [], useNotes: {} };
  const totalViews = () => Number(SCOUT.totalViews || 0);
  // 基準の低い順。got = 合計再生数がその基準に届いているか
  function itemTiers() {
    const v = totalViews();
    return (viewItems().tiers || []).slice()
      .sort((a, b) => a.views - b.views)
      .map(t => Object.assign({}, t, { got: v >= t.views }));
  }
  const nextItemTier = () => itemTiers().find(t => !t.got) || null;
  // 手持ちアイテム。0個の枠も残す（何が存在するか分かるように）
  const itemBag = () => Object.keys(SCOUT.items || {})
    .map(k => ({ name: k, count: (SCOUT.items || {})[k] || 0 }));
  const itemTotal = () => itemBag().reduce((n, x) => n + x.count, 0);
  // 12345678 → "1234.5万"
  const fmtViews = (n) => {
    n = Number(n || 0);
    if (n >= 10000) return (Math.round(n / 1000) / 10) + '万';
    return n.toLocaleString('ja-JP');
  };
  // 用途ごとの見た目（色分けの根拠を1か所にまとめる）
  const USE_FACE = {
    '回復': { cls: 'heal',   ic: 'flask' },
    'スカウト': { cls: 'scout', ic: 'meat' },
    '復帰': { cls: 'revive', ic: 'leaf' },
    '交換': { cls: 'trade',  ic: 'medal' }
  };
  // 合計再生数の達成度を「上から順に登っていくはしご」で見せる。
  // got = 到達済み / now = 次の目標（ここだけ進み具合のバーを出す）/ far = まだ先
  function tierLadderHtml() {
    const v = totalViews();
    const list = itemTiers();
    const next = nextItemTier();
    if (!list.length) return '<div class="empty">基準はまだ設定されていません。</div>';
    return '<div class="ladder">' + list.map((t, i) => {
      const face = USE_FACE[t.use] || { cls: 'etc', ic: 'box' };
      const isNext = !!next && t.views === next.views;
      const state = t.got ? 'got' : (isNext ? 'now' : 'far');
      const prev = i ? list[i - 1].views : 0;
      const p = Math.max(0, Math.min(100, Math.round((v - prev) / (t.views - prev) * 100)));
      const right = t.got
        ? '<span class="st ok">入手済み</span>'
        : '<span class="st">あと ' + fmtViews(t.views - v) + '回</span>' +
          (isNext ? '<span class="tbar"><i style="width:' + p + '%"></i></span>' : '');
      return '<div class="tier ' + state + '">' +
        '<span class="dot">' + (t.got ? icon('check') : (isNext ? icon('play') : '')) + '</span>' +
        '<span class="goal">' + fmtViews(t.views) + '<small>再生</small></span>' +
        '<span class="what"><b>' + esc(t.item) + '</b>' +
          '<span class="use ' + face.cls + '">' + icon(face.ic) + esc(t.use) + '</span></span>' +
        '<span class="right">' + right + '</span>' +
        '</div>';
    }).join('') + '</div>';
  }

  // ---------- 配合エンジン（テリーのワンダーランド3D の実データに基づく） ----------
  const TERI_IX = {};
  TERI.mons.forEach(t => { TERI_IX[t.n] = t; });
  // 名鑑の1体 → 配合マスタの種族データ
  const teriOf = (m) => (m && (TERI_IX[m.species] || TERI_IX[m.name])) || null;
  const teriByName = (n) => TERI_IX[n] || null;

  // ---------- 種族図鑑とスキル表（攻略広場の全607種ぶん） ----------
  //  DEX  = 種族名 → 枠/スカウト可否/装備武器/特性/耐性/出現場所/限界値/所持スキル
  //  SKILL= スキル名 → 覚える特技（名前・必要SP・効果）と、そのスキルを持つ種族
  const DEX = window.DB_MONDEX || {};
  const SKILL = window.DB_SKILLS || {};
  const dexOf = (m) => (m && (DEX[m.species] || DEX[m.name] || DEX[m.n])) || null;
  const dexByName = (n) => DEX[n] || null;
  const skillInfo = (n) => SKILL[n] || null;
  // 種族の1体 → その子が覚えるスキル（今のところ1体1スキル）
  const skillsOf = (m) => ((dexOf(m) || {}).skills || [])
    .map(n => Object.assign({ name: n }, SKILL[n] || { techs: [], mons: [] }));
  const allSkills = () => Object.keys(SKILL)
    .map(n => Object.assign({ name: n }, SKILL[n]))
    .sort((a, b) => b.mons.length - a.mons.length || a.name.localeCompare(b.name, 'ja'));

  // 特殊配合の組み合わせは「モンスター名」だけでなく「スライム系」のような系統指定もある
  function teriTermHit(term, t) {
    if (!t) return false;
    if (term === t.n) return true;
    return (TERI.alias[term] || '') === t.f;
  }
  // 特殊配合（決まった組み合わせ。Sランク以上もここから生まれる）
  function teriSpecial(a, b) {
    const out = [];
    (TERI.sp || []).forEach(r => {
      const hit = (teriTermHit(r[0], a) && teriTermHit(r[1], b)) ||
        (teriTermHit(r[0], b) && teriTermHit(r[1], a));
      const c = hit ? teriByName(r[2]) : null;
      if (c && out.indexOf(c) < 0) out.push(c);
    });
    return out;
  }
  // 4体配合（父と母それぞれの親まで指定される配合。祖父母4体で1体が決まる）
  //  データは [親1, 親2, 親3, 親4, 子]。親1×親2 で片方の親、親3×親4 でもう片方の親を作る。
  const parentSpecies = (m) => {
    if (!m || !m.parents) return null;
    const f = getMon(m.parents.father), o = getMon(m.parents.mother);
    if (!f || !o) return null;
    return [teriOf(f), teriOf(o)];
  };
  function pairHit(pair, term1, term2) {
    if (!pair || !pair[0] || !pair[1]) return false;
    return (teriTermHit(term1, pair[0]) && teriTermHit(term2, pair[1])) ||
      (teriTermHit(term1, pair[1]) && teriTermHit(term2, pair[0]));
  }
  function teriSpecial4(a, b) {
    const pa = parentSpecies(a), pb = parentSpecies(b);
    if (!pa || !pb) return [];
    const out = [];
    (TERI.sp4 || []).forEach(r => {
      const hit = (pairHit(pa, r[0], r[1]) && pairHit(pb, r[2], r[3])) ||
        (pairHit(pa, r[2], r[3]) && pairHit(pb, r[0], r[1]));
      const c = hit ? teriByName(r[4]) : null;
      if (c && out.indexOf(c) < 0) out.push(c);
    });
    return out;
  }
  // 4体配合の材料になれるか（＝その子の祖父母がデータどおりか）を調べるための一覧
  const teri4Recipes = () => (TERI.sp4 || []).slice();
  // 一般配合（位階配合）
  //  1. 両親が別の種族 … 両親と同じ系統で位階が1つ上のモンスター ＋ 系統配合表で決まるもう1体
  //  2. 両親が同じ種族 … 位階の高い方の1つ上の位階のモンスター
  //  Sランク以上は一般配合では生まれない
  //  候補は「どの枠から出たか」が分かるよう via を付けて返す。
  //  同じ系統どうしの配合では3枠が同じ系統に潰れて候補が1体になる（これは仕様どおり）。
  function nextInFamily(fam, base) {
    let best = null;
    TERI.mons.forEach(t => {
      if (t.f !== fam || t.i <= base || t.r === 'S' || t.r === 'SS') return;
      if (!best || t.i < best.i) best = t;
    });
    return best;
  }
  function teriGeneral(a, b) {
    if (!a || !b) return [];
    const base = Math.max(a.i, b.i);
    const slots = a.n === b.n
      ? [['両親と同じ系統', a.f]]
      : [['父の系統', a.f], ['母の系統', b.f], ['系統配合表', (TERI.kei[a.f] || {})[b.f]]];
    const out = [];
    slots.forEach(([via, fam]) => {
      if (!fam || fam === '？？？系') return;
      const best = nextInFamily(fam, base);
      if (!best) return;
      const hit = out.find(o => o.n === best.n);
      if (hit) { if (hit.via.indexOf(via) < 0) hit.via.push(via); return; }
      out.push(Object.assign({}, best, { via: [via] }));
    });
    return out;
  }
  // 父×母 → 生まれる候補。4体配合＞特殊配合＞一般配合の順に強い。
  function breedResult(a, b) {
    const ta = (a && a.i) ? a : teriOf(a), tb = (b && b.i) ? b : teriOf(b);
    if (!ta || !tb) return { ok: false, special4: [], special: [], general: [] };
    return {
      ok: true, a: ta, b: tb,
      special4: teriSpecial4(a, b),
      special: teriSpecial(ta, tb),
      general: teriGeneral(ta, tb)
    };
  }

  // ---------- 世代（配合を1回重ねるごとに1つ進む） ----------
  function generationOf(m, guard) {
    if (!m || !m.parents) return 1;
    guard = (guard || 0) + 1;
    if (guard > 30) return 1;
    const f = getMon(m.parents.father), o = getMon(m.parents.mother);
    return Math.max(f ? generationOf(f, guard) : 0, o ? generationOf(o, guard) : 0) + 1;
  }
  const maxGeneration = () => MONSTERS.reduce((n, m) => Math.max(n, generationOf(m)), 1);
  // 確定で実行された配合だけを、実行された順に返す
  const breedRecords = () => MONSTERS.filter(m => m.parents)
    .map(m => ({
      child: m, father: getMon(m.parents.father), mother: getMon(m.parents.mother),
      type: m.breed || '配合', ep: m.birthEp || '', gen: generationOf(m)
    }))
    .sort((x, y) => String(x.ep).localeCompare(String(y.ep)));
  // ---------- 物語 ----------
  const getArc = (id) => (STORY.arcs || []).find(a => a.id === id) || null;
  const getEnemy = (id) => (STORY.enemies || []).find(e => e.id === id) || null;
  const getScript = (epId) => (STORY.scripts || {})[epId] || null;
  const canBreed = (m) => (m.level || 0) >= (SITE.rules ? SITE.rules.breedMinLevel : 10);
  // 配合できるレベルまで、あと何回「勝つ」必要があるか。動画の本数ではなく戦闘の回数で数える
  const winsToBreed = (m) => {
    const need = (SITE.rules ? SITE.rules.breedMinLevel : 10) - (m.level || 0);
    const per = (SITE.rules ? SITE.rules.levelPerWin : 4) || 4;
    return need <= 0 ? 0 : Math.ceil(need / per);
  };
  // 画像が無いときは線画のシルエットを出す。絵文字は端末ごとに絵柄が変わるので使わない
  const monFace = (m) => m && m.img
    ? `<img src="${esc(m.img)}" alt="${esc(m.name)}">` : `<span class="ph">${icon('egg')}</span>`;
  const goodsFace = (g) => g && g.img
    ? `<img src="${esc(g.img)}" alt="${esc(g.name)}">` : `<span class="ph">${icon('gift')}</span>`;

  // ---------- カード ----------
  function monsterCardHtml(m) {
    // 配合で生まれた子は「かけ合わせ」、最初からいる子/スカウトは「星」
    const kid = m.parents ? icon('breed') : icon('star');
    return `<a class="card mcard" href="monster.html?id=${encodeURIComponent(m.id)}">
      <div class="face">${monFace(m)}<span class="lv">Lv.${esc(m.level || 0)}</span><span class="gen" title="${m.parents ? '配合で誕生' : '初期メンバー/スカウト'}">${kid}</span></div>
      <div class="body">
        <p class="title">${esc(m.name)}</p>
        <div class="row small">
          <span class="fam ${esc(m.family)}">${esc(m.family)}</span>
          <span class="rank ${esc(m.rank)}">${esc(m.rank)}</span>
          <span class="muted">${esc(m.gender || '-')}</span>
        </div>
        <div class="foot small muted">${esc(m.species)}</div>
      </div>
    </a>`;
  }
  function goodsCardHtml(g) {
    return `<div class="card gcard">
      <div class="face">${goodsFace(g)}</div>
      <div class="body">
        <p class="title">${esc(g.name)}</p>
        <div class="row small"><span class="badge">${esc(g.category)}</span><span class="badge ad">PR</span></div>
        <p class="small muted" style="margin:0">${esc(g.desc || '')}</p>
        <div class="foot"><span class="price">${esc(g.price || '')}</span></div>
        ${shopLinksHtml(g)}
      </div>
    </div>`;
  }
  function episodeCardHtml(ep) {
    const th = ytThumb(ep);
    const st = ep.voteStatus === '受付中' ? '<span class="badge live">投票受付中</span>'
      : ep.voteStatus === '結果発表' ? '<span class="badge green">結果発表</span>'
        : ep.voteStatus ? `<span class="badge">${esc(ep.voteStatus)}</span>` : '';
    return `<a class="card" href="${esc(ytWatch(ep))}" target="_blank" rel="noopener"
        onclick="App.track.viewEpisode(App.getEp('${esc(ep.id)}'))">
      <div class="thumb">${th ? `<img src="${esc(th)}" alt="">` : `<span class="ph">${icon('play')}</span>`}<div class="play">${icon('play')}</div></div>
      <div class="body">
        <div class="row small"><span class="badge gold">#${esc(ep.no)}</span>${st}</div>
        <p class="title">${esc(ep.title)}</p>
        ${(() => { const s = getScript(ep.id); return s && s.summary ? `<p class="small muted" style="margin:0">${esc(s.summary)}</p>` : ''; })()}
        <div class="foot small muted">${fmtDate(ep.date)}</div>
      </div>
    </a>`;
  }

  // ---------- ヘッダー / フッター ----------
  const NAV = [
    ['index.html', 'ホーム'],
    ['story.html', 'ぼうけんの記録'],
    ['monsters.html', 'モンスター牧場'],
    ['skills.html', 'スキル'],
    ['tree.html', '家系図'],
    ['breed.html', '配合表と応募'],
    ['names.html', '名前の募集'],
    ['scout.html', '次に戦う相手'],
    ['items.html', 'アイテム'],
    ['goods.html', 'グッズ'],
    ['rules.html', 'ルール']
  ];
  // ---------- 広告枠 ----------
  //  data/site.js の ads に情報を入れたときだけ出る。空のあいだは枠ごと出さない。
  const ADS = SITE.ads || {};
  function adsOn() {
    if (!ADS.enabled) return false;
    if (ADS.provider === 'adsense') return !!(ADS.adsenseClient && ADS.adsenseSlot);
    if (ADS.provider === 'custom') return !!ADS.customHtml;
    return false;
  }
  // AdSense の読み込みスクリプトは1ページに1回だけ入れる
  function adsenseLoader() {
    if (document.getElementById('adsense-loader')) return;
    const s = document.createElement('script');
    s.id = 'adsense-loader';
    s.async = true;
    s.crossOrigin = 'anonymous';
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' +
            encodeURIComponent(ADS.adsenseClient);
    document.head.appendChild(s);
  }
  function adSlotEl() {
    const box = document.createElement('div');
    box.className = 'ad-wrap';
    box.innerHTML = `<span class="ad-label">${esc(ADS.label || '広告')}</span>`;
    const inner = document.createElement('div');
    inner.className = 'ad-body';
    box.appendChild(inner);

    if (ADS.provider === 'adsense') {
      adsenseLoader();
      const ins = document.createElement('ins');
      ins.className = 'adsbygoogle';
      ins.style.display = 'block';
      ins.setAttribute('data-ad-client', ADS.adsenseClient);
      ins.setAttribute('data-ad-slot', ADS.adsenseSlot);
      ins.setAttribute('data-ad-format', 'auto');
      ins.setAttribute('data-full-width-responsive', 'true');
      inner.appendChild(ins);
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
    } else {
      // 他社の貼り付けコード。innerHTML では <script> が動かないので入れ直す。
      inner.innerHTML = ADS.customHtml;
      inner.querySelectorAll('script').forEach(function (old) {
        const s = document.createElement('script');
        for (const a of old.attributes) s.setAttribute(a.name, a.value);
        s.textContent = old.textContent;
        old.replaceWith(s);
      });
    }
    return box;
  }
  function renderAds() {
    if (!adsOn()) return;
    const pos = ADS.positions || ['top', 'bottom'];
    const wrap = document.querySelector('.wrap');
    if (!wrap) return;
    if (pos.indexOf('top') >= 0) wrap.insertBefore(adSlotEl(), wrap.firstChild);
    if (pos.indexOf('bottom') >= 0) wrap.appendChild(adSlotEl());
  }

  function renderChrome() {
    const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const active = here === 'monster.html' ? 'monsters.html' : here;
    const head = document.createElement('header');
    head.className = 'site';
    head.innerHTML = `<div class="hd">
      <a class="logo" href="index.html"><img src="assets/brand/logo_header.png" alt="${esc(SITE.siteName || 'WeSTORY')}"><b>${esc(SITE.siteName || 'WeSTORY')}</b></a>
      <nav class="main">
        ${NAV.map(([h, t]) => `<a href="${h}" class="${h === active ? 'on' : ''}">${t}</a>`).join('')}
      </nav>
      <a class="yt-btn" href="${esc(SITE.channelUrl || '#')}" target="_blank" rel="noopener">${icon('youtube')}YouTubeで投票</a>
    </div>`;
    document.body.insertBefore(head, document.body.firstChild);

    const foot = document.createElement('footer');
    foot.className = 'site';
    foot.innerHTML = `<div class="wrap">
      <div class="cols">
        <div>
          <h4>${esc(SITE.siteName || '')}</h4>
          <p class="small muted" style="margin:0">${esc(SITE.tagline || '')}</p>
          <p style="margin:12px 0 0"><a class="yt-btn" href="${esc(SITE.channelUrl || '#')}" target="_blank" rel="noopener">${icon('youtube')}チャンネルを見る</a></p>
        </div>
        <div><h4>コンテンツ</h4><ul>${NAV.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul></div>
        <div><h4>このサイトについて</h4><ul>
          <li><a href="rules.html#transparency">透明性について</a></li>
          <li><a href="rules.html#ai">生成AIの利用</a></li>
          <li><a href="rules.html#ad">広告・アフィリエイト</a></li>
          <li><a href="rules.html#privacy">おすすめ表示と履歴</a></li>
          <li><a href="rules.html#cookie">広告とCookie</a></li>
        </ul></div>
      </div>
      <div class="legal">
        <p style="margin:0 0 6px">${esc(SITE.disclaimer || '')}</p>
        <p style="margin:0 0 6px">${esc(SITE.aiNotice || '')}</p>
        <p style="margin:0">${esc(SITE.adNotice || '')}</p>
      </div>
    </div>`;
    document.body.appendChild(foot);
    renderAds();
  }

  // ---------- 公開 ----------
  window.App = {
    SITE, MONSTERS, EPISODES, GOODS, NEWS, STORY, TERI, SCOUT, NAMES,
    $, $$, esc, qs, fmtDate, icon, hydrateIcons,
    ytWatch, ytThumb, ytEmbed,
    amazonLink, rakutenLink, yahooLink, shopLinksHtml, AFFILIATE_REL,
    track, recommendGoods, hasHistory, topInterests,
    getMon, getEp, getGoods, childrenOf, canBreed, winsToBreed, monFace, goodsFace,
    partySize, partyMons, benchMons, hospitalMons, retiredMons, inHospital,
    naming, openNameCalls, forms, formUrl,
    polls, pollOf, voteMapHtml,
    scoutCfg, scoutNow, meatList, scoutHistory, pct, monImg,
    viewItems, totalViews, itemTiers, nextItemTier, itemBag, itemTotal, fmtViews, tierLadderHtml,
    teriOf, teriByName, teriSpecial, teriSpecial4, teri4Recipes, teriGeneral, breedResult,
    dexOf, dexByName, skillInfo, skillsOf, allSkills,
    generationOf, maxGeneration, breedRecords,
    getArc, getEnemy, getScript,
    monsterCardHtml, goodsCardHtml, episodeCardHtml,
    renderChrome, adsOn, adSlotEl
  };

  document.addEventListener('DOMContentLoaded', function () {
    // タイトルは各ページの <title> に「ページ名｜サイト名」で入れてある（seo.py が付ける）
    renderChrome();
    if (typeof window.pageInit === 'function') window.pageInit();
    // HTML 側に <span class="ic" data-ic="level"></span> と書いておけば線画が入る
    hydrateIcons();
  });
})();
