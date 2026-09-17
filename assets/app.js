/* replayLab — lo común a las dos páginas: idiomas, carga de datos y ayudas.
   Regla heredada de fcrec: ningún texto se escribe a pelo en el HTML, todo pasa por
   el diccionario. Así añadir un idioma es añadir un bloque, no repasar el sitio. */
"use strict";

const I18N = {
  es: {
    al_limite: "Al límite", sin_cierre: "Sin cierre", sin_cierre_ayuda: "El juego no cerró esta ronda: sus tiempos son aproximados", dano: "Daño",
   vista: "Vista", v_iconos: "Iconos grandes", v_miniaturas: "Miniaturas", v_mosaico: "Mosaico", v_lista: "Lista", v_detalles: "Detalles", orden: "Ordenar", o_fecha: "Fecha", o_duracion: "Duración", o_jugador: "Jugador", o_peleas: "Peleas", videos: "vídeos", rango: "Rango", sin_rango: "Sin rango", rondas_t: "Rondas", resumen_rondas: "Ronda a ronda", gana: "gana", empate: "empate", por_ko: "KO", por_tiempo: "Tiempo", doble: "Doble KO", dano_ronda: "Daño de la ronda", vida_restante: "le quedó", todo: "Todo", nada: "Nada", filtrar: "Filtrar", st_golpes: "Golpes conectados", st_danomedio: "Daño medio por golpe", st_agarres: "Agarres", st_racha: "Mejor racha de rondas", st_rondas_jug: "Rondas jugadas", pie_datos: "Datos leídos de la propia partida", cargando: "Cargando…",
    lema: "Replays de Fightcade, grabados y contados",
    buscar: "Buscar jugador o personaje…",
    sin_videos: "Todavía no hay vídeos.",
    sin_resultados: "Nada que coincida con esa búsqueda.",
    no_publicado: "Vídeo sin publicar",
    no_publicado_sub: "Las estadísticas de abajo salen igual del registro de la partida.",
    volver: "Volver",
    peleas: "peleas", pelea: "Pelea", ronda: "Ronda",
    linea: "Línea de tiempo", saltos: "Saltar a",
    resumen: "El set", combate: "Combate", rondas_t: "Rondas",
    combo: "Combo", super: "Súper", mareo: "Mareo", ko: "Remate",
    perfect: "Perfect", remontada: "Remontada", doble_ko: "Doble KO",
    golpes: "golpes", barras: "barras", seg: "s",
    st_peleas: "Peleas ganadas", st_rondas: "Rondas ganadas",
    st_kotiempo: "Por KO / por tiempo", st_perfects: "Perfects",
    st_dano: "Daño hecho", st_recibido: "Daño recibido",
    st_combos: "Combos", st_combomax: "Combo más largo", st_combodano: "Mejor combo",
    st_supers: "Súpers lanzados", st_mareos: "Mareos que provocó",
    st_rapida: "Su ronda más rápida", st_vida: "Vida al ganar (prom.)",
    st_limite: "Ganadas al límite", st_remontada: "Mayor remontada",
    pie_hecho: "Hecho con fcrec", pie_fuente: "Código",
    cargando: "Cargando…", no_existe: "No encuentro ese vídeo.",
  },
  en: {
    al_limite: "On the edge", sin_cierre: "Never closed", sin_cierre_ayuda: "The game never closed this round: its times are approximate", dano: "Damage",
   vista: "View", v_iconos: "Large icons", v_miniaturas: "Thumbnails", v_mosaico: "Tiles", v_lista: "List", v_detalles: "Details", orden: "Sort", o_fecha: "Date", o_duracion: "Length", o_jugador: "Player", o_peleas: "Matches", videos: "videos", rango: "Rank", sin_rango: "Unranked", rondas_t: "Rounds", resumen_rondas: "Round by round", gana: "wins", empate: "draw", por_ko: "KO", por_tiempo: "Time", doble: "Double KO", dano_ronda: "Round damage", vida_restante: "left", todo: "All", nada: "None", filtrar: "Filter", st_golpes: "Hits landed", st_danomedio: "Average damage per hit", st_agarres: "Throws", st_racha: "Best round streak", st_rondas_jug: "Rounds played", pie_datos: "Data read from the match itself", cargando: "Loading…",
    lema: "Fightcade replays, recorded and explained",
    buscar: "Search player or character…",
    sin_videos: "No videos yet.",
    sin_resultados: "Nothing matches that search.",
    no_publicado: "Video not published",
    no_publicado_sub: "The stats below still come from the match log.",
    volver: "Back",
    peleas: "matches", pelea: "Match", ronda: "Round",
    linea: "Timeline", saltos: "Jump to",
    resumen: "The set", combate: "Combat", rondas_t: "Rounds",
    combo: "Combo", super: "Super", mareo: "Dizzy", ko: "Finish",
    perfect: "Perfect", remontada: "Comeback", doble_ko: "Double KO",
    golpes: "hits", barras: "bars", seg: "s",
    st_peleas: "Matches won", st_rondas: "Rounds won",
    st_kotiempo: "By KO / by time", st_perfects: "Perfects",
    st_dano: "Damage dealt", st_recibido: "Damage taken",
    st_combos: "Combos", st_combomax: "Longest combo", st_combodano: "Best combo",
    st_supers: "Supers thrown", st_mareos: "Dizzies caused",
    st_rapida: "Fastest round", st_vida: "Health on win (avg.)",
    st_limite: "Won on the edge", st_remontada: "Biggest comeback",
    pie_hecho: "Made with fcrec", pie_fuente: "Source",
    cargando: "Loading…", no_existe: "I can't find that video.",
  },
  pt: {
    al_limite: "No limite", sin_cierre: "Sem fecho", sin_cierre_ayuda: "O jogo não fechou este round: os tempos são aproximados", dano: "Dano",
   vista: "Exibição", v_iconos: "Ícones grandes", v_miniaturas: "Miniaturas", v_mosaico: "Blocos", v_lista: "Lista", v_detalles: "Detalhes", orden: "Ordenar", o_fecha: "Data", o_duracion: "Duração", o_jugador: "Jogador", o_peleas: "Lutas", videos: "vídeos", rango: "Rank", sin_rango: "Sem rank", rondas_t: "Rounds", resumen_rondas: "Round a round", gana: "vence", empate: "empate", por_ko: "KO", por_tiempo: "Tempo", doble: "Duplo KO", dano_ronda: "Dano do round", vida_restante: "sobrou", todo: "Tudo", nada: "Nada", filtrar: "Filtrar", st_golpes: "Golpes acertados", st_danomedio: "Dano médio por golpe", st_agarres: "Agarrões", st_racha: "Melhor sequência", st_rondas_jug: "Rounds jogados", pie_datos: "Dados lidos da própria partida", cargando: "Carregando…",
    lema: "Replays do Fightcade, gravados e explicados",
    buscar: "Buscar jogador ou personagem…",
    sin_videos: "Ainda não há vídeos.",
    sin_resultados: "Nada corresponde a essa busca.",
    no_publicado: "Vídeo não publicado",
    no_publicado_sub: "As estatísticas abaixo saem do registro da partida.",
    volver: "Voltar",
    peleas: "lutas", pelea: "Luta", ronda: "Round",
    linea: "Linha do tempo", saltos: "Ir para",
    resumen: "O set", combate: "Combate", rondas_t: "Rounds",
    combo: "Combo", super: "Súper", mareo: "Atordoamento", ko: "Finalização",
    perfect: "Perfect", remontada: "Virada", doble_ko: "Duplo KO",
    golpes: "golpes", barras: "barras", seg: "s",
    st_peleas: "Lutas vencidas", st_rondas: "Rounds vencidos",
    st_kotiempo: "Por KO / por tempo", st_perfects: "Perfects",
    st_dano: "Dano causado", st_recibido: "Dano recebido",
    st_combos: "Combos", st_combomax: "Combo mais longo", st_combodano: "Melhor combo",
    st_supers: "Súpers usados", st_mareos: "Atordoamentos causados",
    st_rapida: "Round mais rápido", st_vida: "Vida ao vencer (méd.)",
    st_limite: "Vencidos no limite", st_remontada: "Maior virada",
    pie_hecho: "Feito com fcrec", pie_fuente: "Código",
    cargando: "Carregando…", no_existe: "Não encontro esse vídeo.",
  },
  fr: {
    al_limite: "De justesse", sin_cierre: "Non close", sin_cierre_ayuda: "Le jeu n'a pas clos cette manche : ses temps sont approximatifs", dano: "Dégâts",
   vista: "Affichage", v_iconos: "Grandes icônes", v_miniaturas: "Miniatures", v_mosaico: "Tuiles", v_lista: "Liste", v_detalles: "Détails", orden: "Trier", o_fecha: "Date", o_duracion: "Durée", o_jugador: "Joueur", o_peleas: "Matchs", videos: "vidéos", rango: "Rang", sin_rango: "Sans rang", rondas_t: "Manches", resumen_rondas: "Manche par manche", gana: "gagne", empate: "égalité", por_ko: "KO", por_tiempo: "Temps", doble: "Double KO", dano_ronda: "Dégâts de la manche", vida_restante: "restant", todo: "Tout", nada: "Aucun", filtrar: "Filtrer", st_golpes: "Coups portés", st_danomedio: "Dégâts moyens par coup", st_agarres: "Projections", st_racha: "Meilleure série", st_rondas_jug: "Manches jouées", pie_datos: "Données lues du match lui-même", cargando: "Chargement…",
    lema: "Replays Fightcade, enregistrés et racontés",
    buscar: "Chercher un joueur ou un personnage…",
    sin_videos: "Pas encore de vidéos.",
    sin_resultados: "Rien ne correspond à cette recherche.",
    no_publicado: "Vidéo non publiée",
    no_publicado_sub: "Les stats ci-dessous viennent quand même du relevé du match.",
    volver: "Retour",
    peleas: "matchs", pelea: "Match", ronda: "Manche",
    linea: "Chronologie", saltos: "Aller à",
    resumen: "Le set", combate: "Combat", rondas_t: "Manches",
    combo: "Combo", super: "Super", mareo: "Étourdissement", ko: "Finition",
    perfect: "Perfect", remontada: "Remontée", doble_ko: "Double KO",
    golpes: "coups", barras: "barres", seg: "s",
    st_peleas: "Matchs gagnés", st_rondas: "Manches gagnées",
    st_kotiempo: "Par KO / au temps", st_perfects: "Perfects",
    st_dano: "Dégâts infligés", st_recibido: "Dégâts subis",
    st_combos: "Combos", st_combomax: "Plus long combo", st_combodano: "Meilleur combo",
    st_supers: "Supers lancés", st_mareos: "Étourdissements provoqués",
    st_rapida: "Manche la plus rapide", st_vida: "Vie à la victoire (moy.)",
    st_limite: "Gagnées de justesse", st_remontada: "Plus grande remontée",
    pie_hecho: "Fait avec fcrec", pie_fuente: "Code",
    cargando: "Chargement…", no_existe: "Je ne trouve pas cette vidéo.",
  },
  ja: {
    al_limite: "ぎりぎり", sin_cierre: "未確定", sin_cierre_ayuda: "ゲームがこのラウンドを閉じていません。時間は目安です", dano: "ダメージ",
   vista: "表示", v_iconos: "大アイコン", v_miniaturas: "サムネイル", v_mosaico: "タイル", v_lista: "一覧", v_detalles: "詳細", orden: "並べ替え", o_fecha: "日付", o_duracion: "長さ", o_jugador: "プレイヤー", o_peleas: "試合数", videos: "本", rango: "ランク", sin_rango: "ランクなし", rondas_t: "ラウンド", resumen_rondas: "ラウンドごと", gana: "の勝ち", empate: "引き分け", por_ko: "KO", por_tiempo: "時間切れ", doble: "ダブルKO", dano_ronda: "ラウンドの与ダメージ", vida_restante: "残り", todo: "すべて", nada: "なし", filtrar: "絞り込み", st_golpes: "命中数", st_danomedio: "1発あたりの平均ダメージ", st_agarres: "投げ", st_racha: "最多連取", st_rondas_jug: "ラウンド数", pie_datos: "試合そのものから読み取ったデータ", cargando: "読み込み中…",
    lema: "Fightcade のリプレイを記録して読み解く",
    buscar: "プレイヤーやキャラクターを検索…",
    sin_videos: "まだ動画がありません。",
    sin_resultados: "該当するものがありません。",
    no_publicado: "未公開の動画",
    no_publicado_sub: "下の記録は試合のログから出しています。",
    volver: "戻る",
    peleas: "試合", pelea: "試合", ronda: "ラウンド",
    linea: "タイムライン", saltos: "ジャンプ",
    resumen: "セット", combate: "戦績", rondas_t: "ラウンド",
    combo: "コンボ", super: "スーパー", mareo: "スタン", ko: "決着",
    perfect: "パーフェクト", remontada: "逆転", doble_ko: "ダブルKO",
    golpes: "ヒット", barras: "本", seg: "秒",
    st_peleas: "試合勝利", st_rondas: "ラウンド勝利",
    st_kotiempo: "KO勝ち / 時間切れ勝ち", st_perfects: "パーフェクト",
    st_dano: "与ダメージ", st_recibido: "被ダメージ",
    st_combos: "コンボ", st_combomax: "最長コンボ", st_combodano: "最大コンボダメージ",
    st_supers: "スーパー使用", st_mareos: "スタンを奪った回数",
    st_rapida: "最速ラウンド", st_vida: "勝利時の体力（平均）",
    st_limite: "ぎりぎりの勝利", st_remontada: "最大の逆転",
    pie_hecho: "fcrec で作成", pie_fuente: "ソース",
    cargando: "読み込み中…", no_existe: "その動画が見つかりません。",
  },
  zh: {
    al_limite: "险胜", sin_cierre: "未结束", sin_cierre_ayuda: "游戏没有结束这一回合，时间为近似值", dano: "伤害",
   vista: "视图", v_iconos: "大图标", v_miniaturas: "缩略图", v_mosaico: "平铺", v_lista: "列表", v_detalles: "详细信息", orden: "排序", o_fecha: "日期", o_duracion: "时长", o_jugador: "选手", o_peleas: "对局数", videos: "个视频", rango: "段位", sin_rango: "无段位", rondas_t: "回合", resumen_rondas: "逐回合", gana: "获胜", empate: "平局", por_ko: "KO", por_tiempo: "时间到", doble: "双方KO", dano_ronda: "本回合伤害", vida_restante: "剩余", todo: "全部", nada: "无", filtrar: "筛选", st_golpes: "命中次数", st_danomedio: "每击平均伤害", st_agarres: "投技", st_racha: "最佳连胜", st_rondas_jug: "回合数", pie_datos: "数据来自对局本身", cargando: "加载中…",
    lema: "Fightcade 录像，录下来并讲清楚",
    buscar: "搜索选手或角色…",
    sin_videos: "还没有视频。",
    sin_resultados: "没有匹配的结果。",
    no_publicado: "视频未发布",
    no_publicado_sub: "下面的数据仍然来自对局记录。",
    volver: "返回",
    peleas: "对局", pelea: "对局", ronda: "回合",
    linea: "时间轴", saltos: "跳转到",
    resumen: "整场", combate: "战斗", rondas_t: "回合",
    combo: "连段", super: "超必杀", mareo: "眩晕", ko: "终结",
    perfect: "完美胜利", remontada: "逆转", doble_ko: "双方KO",
    golpes: "段", barras: "格", seg: "秒",
    st_peleas: "获胜场次", st_rondas: "获胜回合",
    st_kotiempo: "KO获胜 / 时间获胜", st_perfects: "完美胜利",
    st_dano: "造成伤害", st_recibido: "承受伤害",
    st_combos: "连段", st_combomax: "最长连段", st_combodano: "最强连段",
    st_supers: "超必杀发动", st_mareos: "打晕对手次数",
    st_rapida: "最快回合", st_vida: "获胜时血量（平均）",
    st_limite: "险胜", st_remontada: "最大逆转",
    pie_hecho: "由 fcrec 制作", pie_fuente: "源码",
    cargando: "加载中…", no_existe: "找不到这个视频。",
  },
};
const NOMBRE_IDIOMA = { es:"Español", en:"English", pt:"Português", fr:"Français", ja:"日本語", zh:"中文" };

const Q = new URLSearchParams(location.search);
// El idioma se recuerda en el navegador de quien mira; si no hay nada guardado se
// prueba con el del sistema y, si tampoco, español. Nunca revienta si no hay storage.
function guardado(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
function guarda(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
let LANG = Q.get("idioma") || guardado("replaylab.idioma")
        || (navigator.language || "es").slice(0, 2).toLowerCase();
if (!I18N[LANG]) LANG = "es";
const T = k => (I18N[LANG] || {})[k] ?? I18N.es[k] ?? k;

function montaIdiomas(sel, alCambiar) {
  sel.innerHTML = Object.keys(I18N)
    .map(k => `<option value="${k}"${k === LANG ? " selected" : ""}>${NOMBRE_IDIOMA[k]}</option>`).join("");
  sel.onchange = () => { LANG = sel.value; guarda("replaylab.idioma", LANG); alCambiar(); };
}

// ------------------------------------------------------------------ ayudas
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));
const mmss = s => {
  s = Math.max(0, Math.round(s || 0));
  return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
};
/* Banderas y retratos como IMAGEN, no como emoji: Windows no trae tipografía de
   banderas y los emojis salían como dos letras sueltas o como cajitas. Los dos juegos
   de imágenes vienen de lo que ya usa el sistema: las banderas del propio Fightcade y
   los retratos del overlay. */
const bandera = (c, grande) => c
  ? `<img class="bandera${grande ? " g" : ""}" src="assets/flags/${esc(c)}.png" alt="${esc(c.toUpperCase())}" title="${esc(c.toUpperCase())}" loading="lazy">`
  : "";
const retrato = (clave, alt) => `<img class="retrato" src="assets/chars/${esc(clave || "ryu")}.png" alt="${esc(alt || "")}" title="${esc(alt || "")}" loading="lazy"
     onerror="this.style.visibility='hidden'">`;
const rango = letra => letra
  ? `<span class="rango" title="${esc(T("rango"))} ${esc(letra)}">${esc(letra)}</span>`
  : `<span class="rango vacio" title="${esc(T("sin_rango"))}">–</span>`;
const milesDe = n => (n ?? 0).toLocaleString(LANG);
async function json(url) {
  const r = await fetch(url, { cache: "no-cache" });
  if (!r.ok) throw new Error(url + " → " + r.status);
  return r.json();
}
function pintaPie(el) {
  el.innerHTML = `<span>${esc(T("pie_hecho"))}</span><span>·</span>
    <span>${esc(T("pie_datos"))}</span>
    <a style="margin-left:auto" href="https://github.com/demonioDeb/replayLab" target="_blank" rel="noopener">${esc(T("pie_fuente"))}</a>`;
}

/* El idioma y la vista se recuerdan por navegador. Envuelto en try porque en modo
   privado leer localStorage puede lanzar, y eso no debe tirar la página. */
function recuerda(clave, valor) { guarda("replaylab." + clave, valor); }
function recordado(clave, porDefecto) { return guardado("replaylab." + clave) || porDefecto; }
