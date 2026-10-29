/* replayLab · código del diseño «Transmisión» (29 oct).
   Lo usan la portada, partidas, pedir replay, apoyo, redes y los
   textos legales. Cada página sólo declara <body data-p="...">; aquí está lo común (idiomas,
   cabecera, pie, datos) y lo de cada página.
   Los textos salen de datos/textos.json (el mismo diccionario de siempre, extraído de app.js
   con tools/textos_json.py) y de las pocas claves nuevas de abajo.
   Las páginas de estadísticas de una partida (video.html, partida.html) y la guía no pasan por aquí. */
"use strict";
(() => {
const IDIOMAS = ["es", "en", "pt", "fr", "ja", "zh"];
const NOMBRE_IDIOMA = { es: "Español", en: "English", pt: "Português", fr: "Français", ja: "日本語", zh: "中文" };

/* Claves nuevas de este diseño. Lo demás ya existía en el diccionario. */
const NUEVO = {
  es: { x_ejemplo: "Ejemplo", x_pegar: "Pegar", x_stats: "Estadísticas", x_hero_a: "Cada set,", x_hero_b: "con su marcador", x_apoyo: "Apoyo", x_menu: "Menú",
        x_buscar: "Buscar jugador o personaje", x_todos: "Todos", x_juego: "Juego", x_orden: "Ordenar",
        x_n_sets: "%s sets", x_n_set: "%s set", x_ir_partidas: "Ver partidas" },
  en: { x_ejemplo: "Example", x_pegar: "Paste", x_stats: "Stats", x_hero_a: "Every set,", x_hero_b: "with its score", x_apoyo: "Support", x_menu: "Menu",
        x_buscar: "Search player or character", x_todos: "All", x_juego: "Game", x_orden: "Sort",
        x_n_sets: "%s sets", x_n_set: "%s set", x_ir_partidas: "See matches" },
  pt: { x_ejemplo: "Exemplo", x_pegar: "Colar", x_stats: "Estatísticas", x_hero_a: "Cada set,", x_hero_b: "com o seu placar", x_apoyo: "Apoio", x_menu: "Menu",
        x_buscar: "Buscar jogador ou personagem", x_todos: "Todos", x_juego: "Jogo", x_orden: "Ordenar",
        x_n_sets: "%s sets", x_n_set: "%s set", x_ir_partidas: "Ver partidas" },
  fr: { x_ejemplo: "Exemple", x_pegar: "Coller", x_stats: "Statistiques", x_hero_a: "Chaque set,", x_hero_b: "avec son score", x_apoyo: "Soutien", x_menu: "Menu",
        x_buscar: "Chercher un joueur ou un personnage", x_todos: "Tous", x_juego: "Jeu", x_orden: "Trier",
        x_n_sets: "%s sets", x_n_set: "%s set", x_ir_partidas: "Voir les parties" },
  ja: { x_ejemplo: "例", x_pegar: "貼り付け", x_stats: "統計", x_hero_a: "すべてのセットを、", x_hero_b: "スコア付きで", x_apoyo: "サポート", x_menu: "メニュー",
        x_buscar: "プレイヤーまたはキャラを検索", x_todos: "すべて", x_juego: "ゲーム", x_orden: "並べ替え",
        x_n_sets: "%s セット", x_n_set: "%s セット", x_ir_partidas: "試合を見る" },
  zh: { x_ejemplo: "示例", x_pegar: "粘贴", x_stats: "统计", x_hero_a: "每一场对战，", x_hero_b: "附带比分", x_apoyo: "支持", x_menu: "菜单",
        x_buscar: "搜索玩家或角色", x_todos: "全部", x_juego: "游戏", x_orden: "排序",
        x_n_sets: "%s 场", x_n_set: "%s 场", x_ir_partidas: "查看对战" },
};

const Q = new URLSearchParams(location.search);
const sg = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
const ss = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
let LANG = Q.get("idioma") || sg("replaylab.idioma") || (navigator.language || "es").slice(0, 2).toLowerCase();
if (!IDIOMAS.includes(LANG)) LANG = "es";
let TX = {};
const T = k => (NUEVO[LANG] || {})[k] ?? (TX[LANG] || {})[k] ?? NUEVO.es[k] ?? (TX.es || {})[k] ?? k;
const F = (k, x) => T(k).replace("%s", x);
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => [...(r || document).querySelectorAll(s)];
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const miles = n => (n ?? 0).toLocaleString(LANG);
const pl = (n, uno, varios) => T(n === 1 ? uno : varios);
const mmss = s => { s = Math.max(0, Math.round(s || 0)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };
const json = async u => { const r = await fetch(u, { cache: "no-cache" }); if (!r.ok) throw new Error(u + " " + r.status); return r.json(); };
const fechaCorta = iso => { try { return new Date(iso).toLocaleDateString(LANG, { year: "numeric", month: "short", day: "numeric" }); } catch (e) { return iso || ""; } };

/* ---------------------------------------------------------------- datos */
const D = { sitio: {}, juegos: [], indice: [], canal: null, fb: null, dc: null, cambios: null };
const FUENTES = {
  indice: () => json("datos/indice.json").then(d => { D.indice = (d.videos || []).slice().sort(ordenFecha); }),
  canal: () => json("datos/canal.json").then(d => { D.canal = d; }),
  fb: () => json("datos/facebook.json").then(d => { D.fb = d; }),
  dc: () => json("datos/discord.json").then(d => { D.dc = d; }),
  cambios: () => json("datos/cambios.json").then(d => { D.cambios = d; }),
};
const NECESITA = { index: ["indice", "dc"], partidas: ["indice"], enviar: ["indice", "dc"],
                   apoyo: ["indice"], canal: ["canal", "fb", "dc"], legal: [] };
const quarkN = v => parseInt(String(v.quark || "0").split("-")[0], 10) || 0;
function ordenFecha(a, b) { return (b.fecha || "").localeCompare(a.fecha || "") || quarkN(b) - quarkN(a); }

const COLORES = ["#ffc83d", "#3fd0ff", "#ff6b8b", "#6ee7a8", "#c79bff", "#ff9f43", "#4fd8c4", "#f58bd0", "#b5e36b", "#ffe066"];
const colorDe = j => COLORES[Math.max(0, D.juegos.findIndex(x => j && x.id === j.id)) % COLORES.length];
const juegoDe = v => D.juegos.find(j => (j.gameids || []).includes(v.juego)) || null;
const juegoPorId = id => D.juegos.find(j => j.id === id) || null;
const activos = () => D.juegos.filter(j => j.estado === "activo");
const hrefJuego = j => `partidas.html?juego=${encodeURIComponent(j.id)}`;
const hrefSet = v => `video.html?q=${encodeURIComponent(v.quark)}`;

const frescoDe = o => !!(o && o.actualizado && (Date.now() - new Date(String(o.actualizado).replace(" ", "T")).getTime()) < 30 * 864e5);
const urlCanal = () => D.sitio.canal || (D.canal && D.canal.handle ? `https://www.youtube.com/@${D.canal.handle}` : "");
const urlSuscribir = () => { const u = urlCanal(); return u ? u + (u.includes("?") ? "&" : "?") + "sub_confirmation=1" : ""; };
const urlFacebook = () => D.sitio.facebook || (D.fb && D.fb.url) || "";
const urlDiscord = () => D.sitio.discord || (D.dc && D.dc.url) || "";
const urlTelegram = () => D.sitio.telegram || "";

/* ---------------------------------------------------------------- piezas */
const bandera = c => c ? `<img class="bandera" src="assets/flags/${esc(c)}.png" alt="${esc(c.toUpperCase())}" title="${esc(c.toUpperCase())}" loading="lazy">` : "";
const retrato = (clave, alt) => `<img class="retrato" src="assets/chars/${esc(clave || "ryu")}.png" alt="${esc(alt || "")}" title="${esc(alt || "")}" loading="lazy" onerror="this.style.visibility='hidden'">`;
const rango = l => l ? `<span class="rango" title="${esc(T("rango"))} ${esc(l)}">${esc(l)}</span>` : `<span class="rango vacio">–</span>`;

/* El gancho de la partida: la frase del título de YouTube sin jugadores ni juego. Vale para los
   dos formatos: «A vs B | Juego | gancho» y el viejo «gancho | A vs B | Juego». */
function ganchoDe(v) {
  let t = (v && v.titulo) || "";
  if (!t) return "";
  /* algunos nombres llevan « | » dentro («FRS | Biridin»): se protegen antes de partir el título */
  const nombres = (v.jugadores || []).map(j => j.nombre || "").filter(Boolean);
  nombres.filter(n => n.includes(" | ")).forEach(n => { t = t.split(n).join(n.split(" | ").join("\u0001")); });
  const nl = nombres.map(n => n.toLowerCase().split(" | ").join("\u0001"));
  const esVs = s => { const l = s.toLowerCase(); return / vs\.? /.test(l) && nl.every(n => l.includes(n)); };
  const juegos = [v.juego_nombre, v.juego_corto].filter(Boolean).map(x => x.toLowerCase());
  const corto = (v.juego_corto || "").toLowerCase();
  const esJuego = s => { const l = s.toLowerCase().replace(/\s*\(.*\)\s*$/, ""); return l.length >= 3 && juegos.some(j => j === l || j.startsWith(l) || l.startsWith(j)); };
  const partes = t.split(" | ").map(x => x.trim()).filter(Boolean)
    .map(x => corto && x.toLowerCase().startsWith(corto + ": ") ? x.slice(corto.length + 2) : x);
  return (partes.filter(x => x.length > 2 && !esVs(x) && !esJuego(x))[0] || "").split("\u0001").join(" | ");
}
const ganador = v => { const m = v.marcador || [0, 0]; return m[0] === m[1] ? 0 : (m[0] > m[1] ? 1 : 2); };
const ftDe = v => { const m = v.marcador || [0, 0]; const n = Math.max(m[0], m[1]); return n ? "FT" + n : ""; };
const personajes = v => v.jugadores.map(j => esc(j.personaje || "?")).join(" vs ");

function cardSet(v) {
  const [a, b] = v.jugadores, m = v.marcador || [0, 0], g = ganador(v), j = juegoDe(v), gancho = ganchoDe(v), ft = ftDe(v);
  const lado = (x, n) => `<span class="lado n${n}${g && g !== n ? " pierde" : ""}">${bandera(x.pais)}${rango(x.rango_letra)}<span class="n">${esc(x.nombre)}</span></span>`;
  return `<a class="set" href="${hrefSet(v)}" style="--g:${colorDe(j)}">
    <span class="cab"><span class="jg">🎮 ${esc(j ? j.corto : (v.juego_corto || v.juego))}</span>
      <span class="dur">${v.youtube ? "" : `<span class="sinvid">🚫 ${esc(T("no_publicado"))}</span> `}${v.duracion ? "⏱️ " + mmss(v.duracion) : ""}</span></span>
    <span class="med">${retrato(a.clave, a.personaje)}
      <span class="res"><span class="marc"><span class="${g === 1 ? "g" : ""}">${m[0]}</span><i>–</i><span class="${g === 2 ? "g" : ""}">${m[1]}</span></span>${ft ? `<span class="ft">${ft}</span>` : ""}</span>
      ${retrato(b.clave, b.personaje)}</span>
    <span class="noms">${lado(a, 1)}${lado(b, 2)}</span>
    <span class="pj">🥋 ${personajes(v)}</span>
    ${gancho ? `<span class="gancho">💬 ${esc(gancho)}</span>` : ""}
    <span class="pie"><span>📅 ${esc(v.fecha || "")} · ⚔️ ${v.peleas} ${esc(pl(v.peleas, "u_pelea", "u_peleas"))}</span><b>▶️ ${esc(T("ver_ficha"))} →</b></span></a>`;
}
const bandaPedir = () => {
  const tg = urlTelegram(), dc = urlDiscord();
  return `<section class="banda"><div class="txt"><h2>📨 ${esc(T("pide_t"))}</h2><p>${esc(T("pide_d"))}</p></div>
    <div class="bt"><a class="bn" href="enviar.html">📨 ${esc(T("n_enviar"))}</a>
      ${dc ? `<a class="bn" href="${esc(dc)}" target="_blank" rel="noopener">💬 Discord ↗</a>` : ""}
      ${tg ? `<a class="bn" href="${esc(tg)}" target="_blank" rel="noopener">✈️ Telegram ↗</a>` : ""}</div></section>`;
};
const franjaApoyo = () => {
  const d = D.sitio.donacion || {};
  if (!d.activo || !d.url) return "";
  return `<section class="banda" style="background:var(--panel);color:var(--ink);clip-path:none;border-left:5px solid var(--oro)">
    <div class="txt"><h2>☕ ${esc(T("donar"))}</h2><p style="color:var(--soft)">${esc(T("ap_compacto"))}</p></div>
    <div class="bt"><a class="bn" style="background:var(--oro);color:#0b0e14" href="${esc(d.url)}" target="_blank" rel="noopener">☕ ${esc(T("donar"))}</a>
      <a class="bn" style="background:var(--panel2);color:var(--ink)" href="apoyo.html">${esc(T("ap_como"))}</a></div></section>`;
};

/* ---------------------------------------------------------------- cabecera y pie */
const NAV = [["index", "n_inicio", "./", "🏠"], ["partidas", "n_partidas", "partidas.html", "🥊"], ["canal", "n_redes", "canal.html", "🌐"], ["apoyo", "x_apoyo", "apoyo.html", "☕"]];
const PAG = document.body.dataset.p;
const ACTIVA = { enviar: "", legal: "" }[PAG] ?? PAG;

function montaShell() {
  const cab = $("#cab");
  cab.innerHTML = `<div class="wrap cab-in"><a class="logo" href="./">REPLAY<b>LAB</b></a>
    <nav class="nav" id="nav"></nav>
    <div class="cab-der"><a class="pedir cab-cta" id="cta" href="enviar.html"></a>
      <select id="idioma" aria-label="Idioma"></select>
      <button class="mbtn" id="mbtn" type="button" aria-expanded="false" aria-controls="nav"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg><span class="sr" id="mtx"></span></button></div></div>`;
  document.body.insertAdjacentHTML("beforeend", `<dialog id="dlg" class="dlg"><button class="dlg-x" type="button" aria-label="×">✕</button><h2 id="dlg-t"></h2><p id="dlg-p"></p><div id="dlg-c"></div></dialog>`);
  $("#dlg .dlg-x").onclick = () => $("#dlg").close();
  $("#dlg").addEventListener("click", e => { if (e.target === $("#dlg")) $("#dlg").close(); });
  $("#cta").onclick = abrePedido;
  $("#nav").addEventListener("click", e => { if (e.target.closest(".solo-m")) { cab.classList.remove("abierto"); abrePedido(e); } });
  $("#mbtn").onclick = () => { const a = !cab.classList.contains("abierto"); cab.classList.toggle("abierto", a); $("#mbtn").setAttribute("aria-expanded", String(a)); };
  document.addEventListener("click", e => { if (!e.target.closest("#cab")) cab.classList.remove("abierto"); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") cab.classList.remove("abierto"); });
  const sel = $("#idioma");
  sel.innerHTML = IDIOMAS.map(k => `<option value="${k}">${NOMBRE_IDIOMA[k]}</option>`).join("");
  sel.onchange = () => { LANG = sel.value; ss("replaylab.idioma", LANG); const d = $("#dlg"); if (d && d.open) d.close(); pinta(); };
}
function pintaShell() {
  document.documentElement.lang = LANG;
  $("#nav").innerHTML = NAV.map(([k, t, h, ic]) => `<a href="${h}"${ACTIVA === k ? ' aria-current="page"' : ""}><span aria-hidden="true">${ic}</span> ${esc(T(t))}</a>`).join("")
    + `<a class="solo-m" href="enviar.html">📨 ${esc(T("n_enviar"))}</a>`;
  $("#cta").textContent = "📨 " + T("n_enviar");
  $("#mtx").textContent = T("x_menu");
  $("#idioma").value = LANG;
  $("#pie").innerHTML = `<div class="wrap in"><span>© ${new Date().getFullYear()} Replay Lab</span><span>·</span><span>🕹️ ${esc(T("pie_indep"))}</span><span>·</span>
    <span>📊 ${esc(T("pie_datos"))}</span><span>·</span><a href="apoyo.html">☕ ${esc(T("x_apoyo"))}</a><span>·</span>
    <a href="privacidad.html">🔒 ${esc(T("pie_privacidad"))}</a><span>·</span><a href="terminos.html">📜 ${esc(T("pie_terminos"))}</a>
    <span class="sp"></span><span>🛠️ ${esc(T("pie_hecho"))}</span></div>`;
}
const titulo = t => { document.title = (t ? t + " · " : "") + "replayLab"; };

/* ---------------------------------------------------------------- portada */
const ST = { filtro: "", cuantos: 6, p: { juego: Q.get("juego") || "", q: Q.get("q") || "", orden: "fecha", n: 24 }, tab: "" };

function filtroChips(lista, actual, attr) {
  const cuenta = j => lista.filter(v => juegoDe(v) === j).length;
  const hay = activos().filter(j => cuenta(j));
  return `<div class="chips" role="group">
    <button class="chip" type="button" ${attr}="" aria-pressed="${actual === ""}">🌟 ${esc(T("x_todos"))} <small>${lista.length}</small></button>
    ${hay.map(j => `<button class="chip" type="button" ${attr}="${esc(j.id)}" aria-pressed="${actual === j.id}">${esc(j.corto)} <small>${cuenta(j)}</small></button>`).join("")}</div>`;
}
function portadaPinta() {
  titulo("");
  const todas = D.indice, n = todas.length;
  const peleas = todas.reduce((a, v) => a + (v.peleas || 0), 0), rondas = todas.reduce((a, v) => a + (v.rondas || 0), 0);
  const cifras = [["🥊", n, T("u_partidas")], ["⚔️", peleas, T("u_peleas")], ["🔁", rondas, T("rondas_t")], ["🎮", activos().length, T("n_juegos")]];
  $("#m").innerHTML = `<div class="wrap">
    <section class="hero"><div><h1>${esc(T("x_hero_a"))} <em>${esc(T("x_hero_b"))}</em></h1>
      <p>${esc(T("h_texto2"))}</p>
      <div class="acc"><a class="btn oro" href="#sets">🔥 ${esc(T("h_sets_t"))}</a><a class="btn" href="#pedir">📨 ${esc(T("n_enviar"))}</a></div></div>
      <div class="cifras">${cifras.map(([e, x, t]) => `<div class="cifra"><b>${miles(x)}</b><span>${e} ${esc(t)}</span></div>`).join("")}</div></section>
    <section class="sec" id="sets"><div class="sec-cab"><h2>🔥 ${esc(T("h_sets_t"))}</h2><a class="mas" href="partidas.html">${esc(T("h_ver_todas"))} →</a></div>
      <div id="chips"></div><div class="sets" id="rejilla"></div></section>
    <section class="banda-pd" id="pedir"><h2>📨 ${esc(T("pide_t"))}</h2><p>${esc(T("pide_d"))}</p><div id="pd-index"></div></section>
    <section class="sec"><div class="sec-cab"><h2>⚙️ ${esc(T("h_como_t"))}</h2></div>
      <div class="pasos">${["1", "2", "3", "4"].map(i => `<div class="paso"><b>${["📼", "🔎", "📺", "🎬"][i - 1]} ${esc(T("h_c" + i + "_t"))}</b><span>${esc(T("h_c" + i + "_d"))}</span></div>`).join("")}</div></section>
    ${franjaApoyo()}</div>`;
  montaPedido($("#pd-index"), "");
  portadaRejilla();
}
function portadaRejilla() {
  $("#chips").innerHTML = filtroChips(D.indice, ST.filtro, "data-f");
  $$("#chips .chip").forEach(b => b.onclick = () => { ST.filtro = b.dataset.f; portadaRejilla(); });
  const lista = D.indice.filter(v => !ST.filtro || (juegoDe(v) || {}).id === ST.filtro).slice(0, 6);
  $("#rejilla").innerHTML = lista.length ? lista.map(cardSet).join("") : `<p class="vacio">${esc(T("g_sin"))}</p>`;
}

/* ---------------------------------------------------------------- partidas */
const ORDENES = { fecha: (a, b) => ordenFecha(a, b), duracion: (a, b) => (b.duracion || 0) - (a.duracion || 0),
                  peleas: (a, b) => (b.peleas || 0) - (a.peleas || 0),
                  jugador: (a, b) => a.jugadores[0].nombre.localeCompare(b.jugadores[0].nombre) };
function buscaTexto(v, q) {
  q = q.toLowerCase();
  const hay = [v.titulo, v.juego_nombre, v.juego_corto, ...v.jugadores.flatMap(j => [j.nombre, ...(j.personajes || [j.personaje])])];
  return hay.filter(Boolean).some(x => String(x).toLowerCase().includes(q));
}
function partidasPinta() {
  titulo(T("n_partidas"));
  const p = ST.p;
  $("#m").innerHTML = `<div class="wrap"><div class="pag-cab"><h1>🥊 ${esc(T("n_partidas"))}</h1><p>${esc(T("h_texto2"))}</p></div>
    <div class="barra"><input id="q" type="search" autocomplete="off" placeholder="🔍 ${esc(T("x_buscar"))}" aria-label="${esc(T("x_buscar"))}" value="${esc(p.q)}">
      <select id="ord" aria-label="${esc(T("x_orden"))}">${[["fecha", "o_fecha"], ["duracion", "o_duracion"], ["peleas", "o_peleas"], ["jugador", "o_jugador"]]
        .map(([k, t]) => `<option value="${k}"${p.orden === k ? " selected" : ""}>↕️ ${esc(T("x_orden"))}: ${esc(T(t))}</option>`).join("")}</select></div>
    <div id="chips"></div><p class="cuenta" id="cuenta"></p><div class="sets" id="rejilla"></div><div class="mas-fila" id="mas"></div></div>`;
  $("#q").oninput = e => { p.q = e.target.value; p.n = 24; partidasLista(); };
  $("#ord").onchange = e => { p.orden = e.target.value; p.n = 24; partidasLista(); };
  partidasLista();
}
function partidasLista() {
  const p = ST.p;
  $("#chips").innerHTML = filtroChips(D.indice, p.juego, "data-j");
  $$("#chips .chip").forEach(b => b.onclick = () => { p.juego = b.dataset.j; p.n = 24; partidasLista(); });
  let lista = D.indice.filter(v => (!p.juego || (juegoDe(v) || {}).id === p.juego) && (!p.q || buscaTexto(v, p.q)));
  lista = lista.slice().sort(ORDENES[p.orden] || ORDENES.fecha);
  $("#cuenta").textContent = `📊 ${miles(lista.length)} ${T(lista.length === 1 ? "u_partida" : "u_partidas")}`;
  $("#rejilla").innerHTML = lista.length ? lista.slice(0, p.n).map(cardSet).join("") : `<p class="vacio">${esc(T("g_sin"))}</p>`;
  const quedan = lista.length - p.n;
  $("#mas").innerHTML = quedan > 0 ? `<button class="btn" type="button" id="vm">⬇️ ${esc(T("ver_mas"))} · ${esc(F("quedan", miles(quedan)))}</button>` : "";
  if (quedan > 0) $("#vm").onclick = () => { p.n += 24; partidasLista(); };
}

/* ---------------------------------------------------------------- pedir replay
   Una sola pantalla: se pega el enlace, un «billete» dice al momento qué pasa con él (listo, ya
   publicado, en cola, juego no disponible o enlace no válido) y los dos botones grandes lo
   piden por Telegram o por Discord. A la derecha, la cola en vivo. */
let COLA = null, PEDIDO = null;
const RE_ENLACE = /(?:replay\/(?:fbneo\/|flycast\/|[a-z0-9]+\/)?)?([a-z0-9_]+)\/(\d{10,}-\d+)(?:\.\d+)?/i;
const EJEMPLO = "https://replay.fightcade.com/fbneo/sfa3/1761000000000-12345";
const RE_QUARK = /^\d{10,}-\d+$/;
function leeEnlace(txt) {
  txt = (txt || "").trim();
  if (!txt) return null;
  if (RE_QUARK.test(txt)) return { url: txt, quark: txt, gameid: "" };
  const m = txt.match(RE_ENLACE);
  return m ? { url: txt, quark: m[2], gameid: m[1].toLowerCase() } : { mal: true };
}
const juegoDeId = gid => D.juegos.find(j => (j.gameids || []).includes(gid)) || null;
const botNube = () => String(D.sitio.bot_nube || "").replace(/\/$/, "");
/* El pedido: un solo componente que se usa en la portada, en la página de pedir replay y en la ventana
   del botón de arriba. Se pega el enlace; el «billete» dice qué pasa con él; los dos botones lo mandan
   a Telegram (con el pedido ya escrito) o a Discord (copia el enlace y abre el servidor). */
function montaPedido(root, previo) {
  const tg = urlTelegram(), dc = urlDiscord();
  const panel = (cls, ic, nombre, key) => `<a class="vs-p ${cls}" data-b="${cls}" target="_blank" rel="noopener"><span class="vs-ic" aria-hidden="true">${ic}</span><h2>${nombre}</h2><span class="vs-go">${esc(T(key))} ↗</span></a>`;
  root.classList.add("pd");
  root.innerHTML = `<div class="vsbar"><input type="url" inputmode="url" autocomplete="off" spellcheck="false" aria-label="${esc(T("e_campo"))}" placeholder="${esc(EJEMPLO)}" value="${esc(previo || "")}">
      <button class="btn" type="button" data-pegar>📋 ${esc(T("x_pegar"))}</button></div>
    <div class="ticket" aria-live="polite"></div>
    <div class="vs">${tg ? panel("tg", "✈️", "Telegram", "e_tg_btn") : ""}${dc ? panel("dc", "💬", "Discord", "e_dc_btn") : ""}</div>`;
  const inp = $("input", root), tk = $(".ticket", root), bt = $('[data-b="tg"]', root), bd = $('[data-b="dc"]', root);
  let ped = null;
  const caja = (cls, ic, msg, sub) => { tk.className = "ticket " + cls; tk.innerHTML = `<span class="tk-i">${ic}</span><div><div class="tk-m">${esc(msg)}</div>${sub ? `<div class="tk-s">${sub}</div>` : ""}</div>`; };
  function revisa() {
    const r = leeEnlace(inp.value);
    ped = null;
    if (!r) { tk.className = "ticket vacio"; tk.innerHTML = ""; }
    else if (r.mal) caja("mal", "✖", T("e_mal"), "");
    else {
      const ya = D.indice.find(v => v.quark === r.quark), enCola = (COLA || []).findIndex(c => c.q === r.quark), j = r.gameid ? juegoDeId(r.gameid) : null;
      let sub = `<span>${esc(r.quark)}</span>`;
      if (j) sub = `<span class="tk-j" style="--g:${colorDe(j)}">${esc(j.corto)}</span> ` + sub;
      if (ya) caja("ya", "✅", T("e_ya"), sub + ` <a href="video.html?q=${encodeURIComponent(r.quark)}">${esc(T("e_ver"))} →</a>`);
      else if (enCola >= 0) caja("cola", "⏳", `${T("e_en_cola")} · #${enCola + 1}`, sub);
      else if (r.gameid && !j) caja("mal", "✖", T("e_nojuego"), sub);
      else if (j && j.estado !== "activo") caja("mal", "🔒", F("e_prox", j.nombre_completo || j.nombre), sub);
      else { caja("ok", "✔", j ? F("e_ok", j.nombre_completo || j.nombre) : T("e_ok_sin"), sub); ped = r; }
    }
    if (bt) { bt.href = tg && ped && ped.gameid ? `${tg}?start=${encodeURIComponent(`p_${ped.gameid}_${ped.quark}`)}` : tg; bt.classList.toggle("listo", !!ped); }
    if (bd) { bd.href = dc; bd.classList.toggle("listo", !!ped); }
  }
  inp.oninput = revisa;
  $("[data-pegar]", root).onclick = async () => {
    try { inp.value = await navigator.clipboard.readText(); } catch (e) { inp.focus(); return; }
    revisa();
  };
  if (bd) bd.addEventListener("click", () => {
    if (!ped) return;
    try { navigator.clipboard.writeText(ped.url).catch(() => {}); } catch (e) {}
    caja("cola", "📋", T("e_copiado"), "");
  });
  root._revisa = revisa;
  revisa();
}
const revisaTodos = () => $$(".pd").forEach(r => r._revisa && r._revisa());

function enviarPinta() {
  titulo(T("e_titulo"));
  const previo = Q.get("replay") || ($("#pd-env input") ? $("#pd-env input").value : "");
  $("#m").innerHTML = `<div class="wrap"><div class="pag-cab"><h1>📨 ${esc(T("e_titulo"))}</h1><p>${esc(T("e_sub"))}</p></div>
    <div id="pd-env" style="margin-top:22px"></div>
    <section class="sec" id="b-cola" hidden><div class="sec-cab"><h2>⏳ ${esc(T("e_cola"))}</h2></div><ul class="cola" id="cola"></ul></section></div>`;
  montaPedido($("#pd-env"), previo);
  pintaCola();
}

/* La ventana del botón de arriba: lo mismo que la portada, desde cualquier página. */
async function abrePedido(e) {
  if (e) e.preventDefault();
  if (PAG === "enviar") { const i = $("#pd-env input"); if (i) i.focus(); return; }
  const d = $("#dlg");
  if (!d || !d.showModal) { location.href = "enviar.html"; return; }
  $("#dlg-t").textContent = "📨 " + T("pide_t");
  $("#dlg-p").textContent = T("pide_d");
  if (!D.indice.length) await FUENTES.indice().catch(() => {});
  if (!D.dc && !D.sitio.discord) await FUENTES.dc().catch(() => {});
  montaPedido($("#dlg-c"), "");
  if (COLA === null) cargaCola();
  if (!d.open) d.showModal();
  const i = $("#dlg-c input"); if (i) i.focus();
}
function pintaCola() {
  const ul = $("#cola"), sec = $("#b-cola");
  if (!ul) return;
  sec.hidden = !COLA || !COLA.length;
  if (sec.hidden) return;
  ul.innerHTML = COLA.slice(0, 8).map((c, i) => { const j = c.g ? juegoDeId(c.g) : null;
    return `<li><span class="n">${i + 1}</span><span class="j" style="--g:${colorDe(j)}">${esc(j ? j.corto : (c.g || "?"))}</span><span class="q">${esc(c.p || c.q || "—")}</span>${c.pedido ? `<span class="p">📩</span>` : ""}</li>`; }).join("");
}
async function cargaCola() {
  const b = botNube();
  if (!b) return;
  try { const r = await fetch(b + "/cola"); if (!r.ok) throw 0; COLA = (await r.json()).cola || []; } catch (e) { COLA = null; }
  pintaCola(); revisaTodos();
}

/* ---------------------------------------------------------------- apoyo */
const HITOS = [1, 10, 100, 500, 1000], HITOS_RONDAS = [100, 1000];
const COSTES = [["⚙️", "ap_c1"], ["💾", "ap_c2"], ["🌐", "ap_c3"], ["⚡", "ap_c4"], ["🛠️", "ap_c5"], ["🧪", "ap_c6"], ["🎮", "ap_c7"]];
function apoyoPinta() {
  titulo(T("x_apoyo"));
  const d = D.sitio.donacion || {}, todas = D.indice, n = todas.length;
  const sig = HITOS.find(h => h > n), pct = sig ? Math.min(100, Math.round(n * 100 / sig)) : 100;
  $("#m").innerHTML = `<div class="wrap estrecho"><div class="pag-cab"><h1>☕ ${esc(T("ap_titulo"))}</h1></div>
    <div class="prosa"><p>${esc(T("ap_p2"))}</p></div>
    ${d.activo && d.url ? `<a class="cafe" href="${esc(d.url)}" target="_blank" rel="noopener">☕ ${esc(T("donar"))}</a>` : ""}
    <section class="sec"><div class="sec-cab"><h2>🔧 ${esc(T("ap_cuesta"))}</h2></div><ul class="costes">${COSTES.map(([ic, k]) => `<li><span class="ic">${ic}</span><b>${esc(T(k).split(":")[0])}</b></li>`).join("")}</ul>
      <p class="cuenta" style="margin-top:14px">❤️ ${esc(T("ap_nota"))}</p></section>
    <section class="sec prog"><div class="pg-n">${miles(n)}<small>${esc(pl(n, "ap_procesada", "ap_procesadas"))}</small></div>
      ${sig ? `<div class="barra-pg" role="progressbar" aria-valuemin="0" aria-valuemax="${sig}" aria-valuenow="${n}"><i style="width:${pct}%"></i></div>
        <div class="lin"><span>🎯 ${esc(T("ap_siguiente"))}: ${esc(F("l_n", miles(sig)))}</span><span>${miles(n)} / ${miles(sig)}</span></div>` : ""}</section></div>`;
}

/* ---------------------------------------------------------------- redes
   Una barra por red, como el rótulo inferior de una transmisión: icono de color, nombre, cifras y botón. */
const EMO = { yt_suscriptores: "👥", yt_videos: "🎬", yt_vistas: "👀", fb_seguidores: "👥", dc_miembros: "👥", dc_en_linea: "🟢" };
function barraRed(o) {
  const ic = o.foto ? `<img src="${esc(o.foto)}" alt="" referrerpolicy="no-referrer">` : `<span>${o.letra}</span>`;
  return `<article class="rb ${o.clase}"><div class="rb-ic">${ic}</div>
    <div class="rb-id"><span class="rn">${esc(o.red)}</span><h2>${esc(o.nombre)}</h2>${o.sub ? `<span class="hd">${esc(o.sub)}</span>` : ""}</div>
    <div class="rb-n">${o.cifras || ""}</div>
    <div class="rb-bt">${o.seguir ? `<a class="btn oro" href="${esc(o.seguir)}" target="_blank" rel="noopener">${o.icono} ${esc(o.tSeguir)}</a>` : ""}</div>
    ${o.fuente ? `<p class="rb-f">${esc(o.fuente)}</p>` : ""}</article>`;
}
function canalPinta() {
  titulo(T("n_redes"));
  const t = [], c = D.canal || {}, f = D.fb || {}, dc = D.dc || {}, yt = frescoDe(D.canal), fb = frescoDe(D.fb), dk = frescoDe(D.dc);
  const cifra = (x, k) => x == null ? "" : `<div><b>${miles(x)}</b><span>${EMO[k] || ""} ${esc(T(k))}</span></div>`;
  if (urlCanal()) t.push(barraRed({ clase: "yt", red: "YouTube", letra: "▶", icono: "🔔", foto: yt ? c.avatar : "", nombre: (yt && c.nombre) || "replayLab",
    sub: yt && c.handle ? "@" + c.handle : "", cifras: yt ? cifra(c.suscriptores, "yt_suscriptores") + cifra(c.videos, "yt_videos") + cifra(c.vistas, "yt_vistas") : "",
    seguir: urlSuscribir(), tSeguir: T("yt_suscribete"), fuente: yt ? "🔄 " + F("yt_datos", fechaCorta(c.actualizado)) : "" }));
  if (urlFacebook()) t.push(barraRed({ clase: "fb", red: "Facebook", letra: "f", icono: "👍", foto: fb ? f.foto : "", nombre: (fb && f.nombre) || "replayLab",
    cifras: fb ? cifra(f.seguidores, "fb_seguidores") : "", seguir: urlFacebook(), tSeguir: T("fb_seguir"), fuente: fb ? "🔄 " + F("fb_datos", fechaCorta(f.actualizado)) : "" }));
  if (urlDiscord()) t.push(barraRed({ clase: "dc", red: "Discord", letra: "💬", icono: "💬", foto: dk ? dc.icono : "", nombre: (dk && dc.nombre) || "replayLab",
    cifras: dk ? cifra(dc.miembros, "dc_miembros") + cifra(dc.en_linea, "dc_en_linea") : "", seguir: urlDiscord(), tSeguir: T("dc_unirse"), fuente: dk ? "🔄 " + F("dc_datos", fechaCorta(dc.actualizado)) : "" }));
  const tg = urlTelegram();
  if (tg) t.push(barraRed({ clase: "tg", red: "Telegram", letra: "✈️", icono: "✈️", nombre: "replayLab Bot", cifras: "", seguir: tg, tSeguir: T("e_tg_btn") }));
  $("#m").innerHTML = `<div class="wrap"><div class="pag-cab"><h1>🌐 ${esc(T("rd_titulo"))}</h1><p>${esc(T("rd_sub"))}</p></div><div class="rbs">${t.join("")}</div>${franjaApoyo()}</div>`;
}

/* ---------------------------------------------------------------- efectos
   Fondo vivo: una rejilla de puntos que se acerca al ratón como un imán y se enciende en oro; al irse
   vuelve a su sitio con un muelle. Sólo se anima mientras algo se mueve. Sin ratón (móvil) o con
   «menos movimiento» en el sistema se queda la rejilla quieta de CSS.
   Aparición al bajar: lo que entra en pantalla sale poco a poco, en cascada. */
const SIN_MOVIMIENTO = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
(function fondoVivo() {
  if (SIN_MOVIMIENTO || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const PASO = 26, RADIO = 190, TIRON = 17, MUELLE = 0.15;
  const cv = document.createElement("canvas");
  cv.id = "fondo"; cv.setAttribute("aria-hidden", "true");
  let ctx, w = 0, h = 0, cols = 0, filas = 0, dx, dy, luz, mx = -9999, my = -9999, activo = false, raf = 0, brillo = 0;
  const pide = () => { if (!raf && !document.hidden) raf = requestAnimationFrame(paso); };
  function mide() {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    w = innerWidth; h = innerHeight;
    cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    ctx = cv.getContext("2d"); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(w / PASO) + 1; filas = Math.ceil(h / PASO) + 1;
    dx = new Float32Array(cols * filas); dy = new Float32Array(cols * filas); luz = new Float32Array(cols * filas);
    pide();
  }
  function paso() {
    raf = 0;
    ctx.clearRect(0, 0, w, h);
    brillo += ((activo ? 1 : 0) - brillo) * 0.12;
    let vivo = Math.abs((activo ? 1 : 0) - brillo) > 0.01;
    if (brillo > 0.01) {                                 // resplandor suave bajo el cursor
      const g = ctx.createRadialGradient(mx, my, 0, mx, my, 300);
      g.addColorStop(0, `rgba(255,200,61,${0.09 * brillo})`); g.addColorStop(1, "rgba(255,200,61,0)");
      ctx.fillStyle = g; ctx.fillRect(mx - 300, my - 300, 600, 600);
    }
    for (let j = 0; j < filas; j++) {
      const y0 = PASO / 2 + j * PASO;
      for (let i = 0; i < cols; i++) {
        const k = j * cols + i, x0 = PASO / 2 + i * PASO;
        let tx = 0, ty = 0, tl = 0;
        if (activo) {
          const ex = mx - x0, ey = my - y0, d = Math.hypot(ex, ey);
          if (d < RADIO && d > 0.01) { const f = (1 - d / RADIO) ** 2; tx = ex / d * f * TIRON; ty = ey / d * f * TIRON; tl = f; }
        }
        dx[k] += (tx - dx[k]) * MUELLE; dy[k] += (ty - dy[k]) * MUELLE; luz[k] += (tl - luz[k]) * MUELLE;
        if (Math.abs(tx - dx[k]) > 0.05 || Math.abs(ty - dy[k]) > 0.05 || Math.abs(tl - luz[k]) > 0.01) vivo = true;
        const l = luz[k];
        ctx.fillStyle = l > 0.02 ? `rgba(${141 + 114 * l | 0},${151 + 49 * l | 0},${171 - 110 * l | 0},${0.16 + 0.74 * l})` : "rgba(141,151,171,.16)";
        const r = 1 + l * 1.7;
        ctx.fillRect(x0 + dx[k] - r, y0 + dy[k] - r, r * 2, r * 2);
      }
    }
    if (vivo) pide();
  }
  addEventListener("pointermove", e => { if (e.pointerType === "mouse") { mx = e.clientX; my = e.clientY; activo = true; pide(); } }, { passive: true });
  document.addEventListener("pointerleave", () => { activo = false; pide(); });
  addEventListener("blur", () => { activo = false; pide(); });
  addEventListener("resize", mide);
  document.addEventListener("visibilitychange", pide);
  const arranca = () => { document.body.prepend(cv); document.documentElement.classList.add("fondo-vivo"); mide(); };
  document.body ? arranca() : document.addEventListener("DOMContentLoaded", arranca);
})();

const REVELA = ".hero>div>*, .sec-cab, .pag-cab>*, .set, .paso, .rb, .banda-pd, .banda, .vs-p, .costes li, .logros li, .prog>*, .prosa p, .cafe, .legal h2";
let IO = null;
function revela() {
  if (SIN_MOVIMIENTO || !("IntersectionObserver" in window)) return;
  if (!IO) IO = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    el.classList.add("vis"); IO.unobserve(el);
    // al terminar la entrada se quita la clase: así el hover de las tarjetas vuelve a ser rápido
    setTimeout(() => { el.classList.remove("rv", "vis"); el.style.removeProperty("--d"); }, 1100);
  }), { threshold: 0.06, rootMargin: "0px 0px -5% 0px" });
  let n = 0, ultimo = null;
  $$(REVELA, $("#m")).forEach(el => {
    if (el.dataset.rv) return;
    el.dataset.rv = "1";
    if (el.parentElement !== ultimo) { ultimo = el.parentElement; n = 0; }
    el.style.setProperty("--d", (n++ % 4) * 90 + "ms");
    el.classList.add("rv"); IO.observe(el);
  });
}
{
  let t = 0;
  const m = $("#m");
  if (m && !SIN_MOVIMIENTO) new MutationObserver(() => { cancelAnimationFrame(t); t = requestAnimationFrame(revela); }).observe(m, { childList: true, subtree: true });
}

/* ---------------------------------------------------------------- arranque */
const PINTORES = { index: portadaPinta, partidas: partidasPinta, enviar: enviarPinta, apoyo: apoyoPinta, canal: canalPinta, legal: () => titulo(document.body.dataset.t || "") };
let LISTO = false;
function pinta() { pintaShell(); if (LISTO || PAG === "legal") PINTORES[PAG] && PINTORES[PAG](); }
(async () => {
  montaShell();
  await Promise.all([
    json("datos/textos.json").then(d => { TX = d; }).catch(() => {}),
    json("datos/sitio.json").then(d => { D.sitio = d; }).catch(() => {}),
    json("datos/juegos.json").then(d => { D.juegos = d.juegos || []; }).catch(() => {}),
    ...(NECESITA[PAG] || []).map(k => FUENTES[k]().catch(() => {})),
  ]);
  LISTO = true;
  pinta();
  if (PAG === "enviar" || PAG === "index") cargaCola();
})();
})();
