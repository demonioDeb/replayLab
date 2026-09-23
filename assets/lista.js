/* replayLab — el listado de partidas. Lo usan la página de Partidas, la de cada juego y
   la portada, así que las cinco vistas se escriben una sola vez aquí.
   Necesita app.js cargado antes (T, esc, bandera, retrato, rango, mmss, juegoDe). */
"use strict";

/* Las cinco vistas del explorador de Windows, con su icono en SVG dentro del propio
   archivo: nada que descargar y se tiñe con el color del botón. */
const VISTAS = [
  ["iconos",     "v_iconos",     "M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z"],
  ["miniaturas", "v_miniaturas", "M3 4h18v12H3zm2 14h6v2H5zm8 0h6v2h-6z"],
  ["mosaico",    "v_mosaico",    "M3 4h8v7H3zm10 0h8v7h-8zM3 13h8v7H3zm10 0h8v7h-8z"],
  ["lista",      "v_lista",      "M3 5h4v4H3zm6 1h12v2H9zM3 11h4v4H3zm6 1h12v2H9zM3 17h4v4H3zm6 1h12v2H9z"],
  ["detalles",   "v_detalles",   "M3 5h18v2H3zm0 5h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"],
];
const ORDENES = [["fecha","o_fecha"],["duracion","o_duracion"],["jugador","o_jugador"],["peleas","o_peleas"]];

// Con un solo juego en el sitio la chapa del juego sobra en cada tarjeta; en cuanto haya
// dos, cada partida dice de qué juego es. Lo decide quien pinta, con variosJuegos().
let CHAPA_JUEGO = false;
const variosJuegos = lista => new Set(lista.map(v => (juegoDe(v) || {}).id || v.juego)).size > 1;

const nom = v => v.jugadores.map(j => j.nombre);
const caras = v => `<span class="caras">
  ${retrato(v.jugadores[0].clave, v.jugadores[0].personaje)}
  ${retrato(v.jugadores[1].clave, v.jugadores[1].personaje)}</span>`;
const duo = v => {
  const [a, b] = v.jugadores, m = v.marcador || [0, 0];
  const g = m[0] === m[1] ? 0 : (m[0] > m[1] ? 1 : 2);
  return `<span class="duo">
    ${bandera(a.pais)}${rango(a.rango_letra)}<span class="n n1">${esc(a.nombre)}</span>
    <span class="marcador"><span class="${g === 1 ? "g" : ""}">${m[0]}</span>–<span class="${g === 2 ? "g" : ""}">${m[1]}</span></span>
    <span class="n n2">${esc(b.nombre)}</span>${rango(b.rango_letra)}${bandera(b.pais)}</span>`;
};
const mini = v => v.youtube
  ? `<div class="mini"><img loading="lazy" src="https://i.ytimg.com/vi/${esc(v.youtube)}/hqdefault.jpg" alt=""></div>`
  : `<div class="mini sin">${caras(v)}</div>`;
const chipJuego = v => {
  if (!CHAPA_JUEGO) return "";
  const j = juegoDe(v);
  return `<span class="chip-juego">${esc(j ? j.corto : (v.juego_corto || v.juego))}</span>`;
};
const chapa = v => (v.duracion ? `<span class="dur">${mmss(v.duracion)}</span>` : "")
  + (v.youtube ? "" : `<span class="sinvid">${esc(T("no_publicado"))}</span>`);
const chars = v => v.jugadores.map(j => esc(j.personaje || "?")).join(" vs ");
const hrefPartida = v => `video.html?q=${encodeURIComponent(v.quark)}`;

const PINTA = {
  // En iconos grandes los nombres van en dos líneas: puestos en una sola con el
  // marcador en medio se cortaban a la mitad ("canguro… 2-0 Duckwi…").
  iconos: v => {
    const m = v.marcador || [0, 0];
    const g = m[0] === m[1] ? 0 : (m[0] > m[1] ? 1 : 2);
    const linea = (j, n) => `<span class="nombres">${bandera(j.pais)}${rango(j.rango_letra)}
      <span class="n n${n}" style="${g === n ? "" : "opacity:.72"}">${esc(j.nombre)}</span></span>`;
    return `<a class="tarj" href="${hrefPartida(v)}">${chapa(v)}
      <span class="caras">${retrato(v.jugadores[0].clave, v.jugadores[0].personaje)}
        <span class="vs">VS</span>${retrato(v.jugadores[1].clave, v.jugadores[1].personaje)}</span>
      <span class="marcador"><span class="${g === 1 ? "g" : ""}">${m[0]}</span> – <span class="${g === 2 ? "g" : ""}">${m[1]}</span></span>
      ${linea(v.jugadores[0], 1)}${linea(v.jugadores[1], 2)}
      <span class="meta">${chars(v)}</span>
      <span class="meta">${chipJuego(v)}${esc(v.fecha || "")} · ${v.peleas} ${esc(pl(v.peleas, "u_pelea", "u_peleas"))}</span></a>`;
  },
  miniaturas: v => `<a class="tarj" href="${hrefPartida(v)}">${mini(v)}${chapa(v)}
    <span class="cuerpo">
      <span class="fila">${duo(v)}</span>
      <span class="meta" style="color:var(--dim);font-size:14px">${chars(v)}</span>
      <span class="pie">${chipJuego(v) || `<span>${esc((juegoDe(v) || {}).corto || v.juego_corto || v.juego)}</span>`}
        <span>${v.peleas} ${esc(pl(v.peleas, "u_pelea", "u_peleas"))}</span>
        <span style="margin-left:auto">${esc(v.fecha || "")}</span></span>
    </span></a>`,
  mosaico: v => `<a class="tarj" href="${hrefPartida(v)}">${caras(v)}
    <span class="cuerpo"><span class="fila">${duo(v)}</span>
      <span class="meta">${chipJuego(v)}${chars(v)} · ${v.peleas} ${esc(pl(v.peleas, "u_pelea", "u_peleas"))} · ${esc(v.fecha || "")}</span></span>
    ${chapa(v)}</a>`,
  lista: v => `<a class="tarj" href="${hrefPartida(v)}">${caras(v)}${duo(v)}
    <span class="meta">${chipJuego(v)}${chars(v)}</span>
    <span class="meta">${esc(v.fecha || "")}</span>
    <span class="meta dur">${v.duracion ? mmss(v.duracion) : "—"}</span></a>`,
};

function pintaDetalles(lista, orden, desc) {
  const cols = [["", ""], ["jugador", "o_jugador"], ["peleas", "o_peleas"],
                ["", "rondas_t"], ["duracion", "o_duracion"], ["fecha", "o_fecha"]];
  const th = cols.map(([k, t]) =>
    `<th ${k ? `data-ord="${k}"` : ""}>${t ? esc(T(t)) : ""}${orden === k && k ? ` <span class="ord">${desc ? "▼" : "▲"}</span>` : ""}</th>`).join("");
  const filas = lista.map(v => `<tr onclick="location.href='${hrefPartida(v)}'" style="cursor:pointer">
      <td>${caras(v)}</td>
      <td>${duo(v)}${chipJuego(v)}</td>
      <td class="num">${v.peleas}</td>
      <td class="num">${v.rondas ?? "—"}</td>
      <td class="num">${v.duracion ? mmss(v.duracion) : "—"}</td>
      <td class="num">${esc(v.fecha || "")}</td></tr>`).join("");
  return `<div class="v-detalles"><table><thead><tr>${th}</tr></thead><tbody>${filas}</tbody></table></div>`;
}

function ordenaLista(lista, orden, desc) {
  const clave = {
    fecha: v => (v.fecha || "") + v.quark,
    duracion: v => v.duracion || 0,
    jugador: v => nom(v).join(" ").toLowerCase(),
    peleas: v => v.peleas || 0,
  }[orden] || (v => v.quark);
  const out = [...lista].sort((a, b) => {
    const x = clave(a), y = clave(b);
    return x < y ? -1 : x > y ? 1 : 0;
  });
  return desc ? out.reverse() : out;
}

// Pinta la lista en `cont` con la vista pedida. Devuelve cuántas pintó.
function pintaLista(cont, lista, vista, orden, desc) {
  cont.className = "lista v-" + vista;
  cont.innerHTML = vista === "detalles" ? pintaDetalles(lista, orden, desc)
                                         : lista.map(PINTA[vista]).join("");
  return lista.length;
}

// Búsqueda por jugador, personaje, juego o fecha.
function casaBusqueda(v, q) {
  if (!q) return true;
  const j = juegoDe(v) || {};
  return [...nom(v), ...v.jugadores.flatMap(x => x.personajes || [x.personaje]),
          j.nombre, j.corto, v.juego_nombre, v.fecha]
    .some(x => (x || "").toLowerCase().includes(q));
}

/* ---------------------------------------------------------------- tarjeta de juego
   La usan la portada y la página de Juegos. Un juego activo es un enlace a su página y
   dice cuántas partidas tiene; uno "próximamente" no se puede abrir: sólo se anuncia,
   y sólo si de verdad está en el plan (datos/juegos.json). */
function tarjetaJuego(j, todas) {
  const suyas = (todas || []).filter(v => juegoDe(v) === j);
  const peleas = suyas.reduce((a, v) => a + (v.peleas || 0), 0);
  const activo = j.estado === "activo";
  const cifras = activo
    ? `<span class="tj-cifras"><b>${suyas.length}</b> ${esc(pl(suyas.length, "u_partida", "u_partidas"))}
         ${peleas ? `<span class="sep">·</span><b>${peleas}</b> ${esc(pl(peleas, "u_pelea", "u_peleas"))}` : ""}</span>`
    : "";
  const cuerpo = `
    <span class="tj-arte">${j.retrato ? retrato(j.retrato, j.nombre) : `<span class="tj-mono">${esc(j.corto)}</span>`}</span>
    <span class="tj-txt">
      <span class="tj-estado ${activo ? "ok" : "prox"}">${esc(T(activo ? "j_disp" : "j_prox"))}</span>
      <span class="tj-nombre">${esc(j.nombre)}</span>
      <span class="tj-sub">${esc(j.subtitulo || "")}</span>
      <span class="tj-meta">${esc(j.compania || "")}${j.anio ? " · " + j.anio : ""}</span>
      ${cifras}
    </span>
    ${activo ? `<span class="tj-ir" aria-hidden="true">→</span>` : `<span class="tj-ir" aria-hidden="true">🔒</span>`}`;
  return activo
    ? `<a class="tarj-juego" href="${hrefJuego(j)}">${cuerpo}</a>`
    : `<div class="tarj-juego prox" aria-disabled="true">${cuerpo}</div>`;
}
