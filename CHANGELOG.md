# Changelog

La versión que se ve en el sitio está en `datos/cambios.json` y se lee en
[cambios.html](cambios.html), con un resumen por día en español e inglés.

Los cambios de replayLab, de lo más nuevo a lo más viejo. Las fechas son las del día en
que se hizo el cambio, no las de publicación.

## 2026-09-24

### Cambiado
- **Ficha, 2.ª pasada.** Orden: cabecera (más baja) → barra → resumen en dos filas
  horizontales (`.kfila`, momentos en fila) → **línea de tiempo del set** (`lineaSet()`: tramos
  de pelea + todos los momentos; clic = `salta(t − 2 s)` y el vídeo se trae a la vista) →
  vídeo → peleas → análisis. Fuera `listaPeleas()`: la tira lleva número y marcador. Título
  de la pelea en una línea. Los filtros de momentos valen en las dos líneas de tiempo.
- **Ficha: jerarquía y densidad** (`video.html`). Cabecera → barra de secciones que se
  queda fija y enseña jugadores y marcador (`vigilaNav()`, `marcaSeccion()`) → vídeo con el
  resumen al lado en pantalla ancha (`.arriba`; sin vídeo, una columna) → peleas → análisis.
  Resumen: daño grande con la diferencia, combos/súpers/perfects en pequeño, hasta cuatro
  momentos. Baldosas de pelea de una línea. Detalle: resultado (con cómo iba el set) →
  resumen → línea de tiempo → rondas. Análisis del set a dos columnas (≥1000 px).
  Color: rojo/azul = jugadores, dorado = excepcional; en la línea de tiempo forma = tipo y
  color = jugador. Página de 3133 a 2307 px de alto (1280 px de ancho).
- **Overlay en tres tarjetas: Combate, Rondas y Promedios**, mismo orden en todos los juegos.
  Promedios sólo lleva medias. Salen del overlay (siguen en la web) las cifras deducidas,
  al límite, remontada y rondas ganadas.
- **Análisis de la ficha con las mismas pestañas que el overlay** (`video.html`, `analisis()`):
  Combate · Rondas · Promedios · Personajes. Lo que el overlay no enseña va debajo de «Más
  detalle». `TEMA_VIEJO` lleva los enlaces viejos (`tema=dano`…) a su pestaña nueva.
- **Changelog por juego** (`cambios.html`): Todo · Web · una pestaña por juego
  (`?juego=<id>`). `juego` en `cambios.json` puede ser una lista.
- **«Lo que viene»** conserva los juegos desbloqueados (`desbloqueado` en `juegos.json`) con
  su sello. La portada enseña dos juegos por venir y «ver todos».

### Añadido
- Media «lo que tarda en ganar una pelea» (overlay y web: `peleaMedia()`).
- Animaciones del overlay: récord, cifras que cuentan, combo en vivo (ST), retrato que
  reacciona, reloj en apuros, cambio de líder, primer golpe.
- The King of Fighters '94–2002 en «Próximamente».
- Favicon (`favicon.svg`, `.ico`, `apple-touch-icon.png`, manifiesto) y vista previa para
  redes (`assets/og.png`, Open Graph y Twitter).

### Arreglado
- **Saltos al pulsar pestañas y botones.** `fijaAltos()` (ficha: la caja del análisis y la
  del detalle de pelea miden el alto de la más alta) y `sinSalto()` en `app.js` (juego,
  partidas, changelog: la página no encoge bajo lo que estás viendo).

## 2026-09-22

### Hallazgo
- **La barra de aturdimiento delata el golpe.** Sube exactamente 1 frame después de un
  golpe que conecta, no se mueve con uno bloqueado y se queda quieta en los agarres
  (verificado 7 de 7 contra lo que dibuja el juego). Es la señal que faltaba para separar
  golpe conectado de golpe bloqueado sin adivinar. La sonda se emite en el Lua
  (`stun_up`) y la clasificación se hace luego en `web.py`, así que se puede rehacer
  sobre cualquier grabación que la lleve.

### Añadido
- **Sección «Invítame un café»** (`bloqueApoyo()` en `app.js`, `.apoyo` en el CSS): el
  enlace estaba sólo en el pie y no lo veía nadie. Ahora es una sección con su texto,
  su botón y su nota de gracias, en la portada y al final de cada ficha —después de las
  estadísticas, nunca en medio. Sale sólo si `datos/sitio.json` trae la donación activa,
  así que se apaga desde ahí sin tocar HTML. Texto en los seis idiomas.
- **Sección de defensa** en la ficha: golpes que conectaron, golpes que le bloquearon,
  golpes que bloqueó, porcentaje de bloqueo y quién pegó primero. Sólo se pinta si
  `stats[0].verificado`; en las grabaciones anteriores a la sonda no aparece, ni vacía.
- **La línea de tiempo como navegador**: cada ronda es un botón que salta a ese punto del
  vídeo, y debajo una barra por ronda con su duración.
- **Diccionario**: `st_dizzies` (mareos que provocó) en los seis idiomas; faltaba y salía
  la clave en crudo.
- **Página de cambios** (`cambios.html`): resumen por día de lo que se hizo y de lo que
  se fue descubriendo del juego, con el texto en `datos/cambios.json`.
- **Ajustes del sitio** en `datos/sitio.json`: enlace al canal y enlace de donación, que
  sale en el pie en cuanto se pone `activo: true`.

### Cambiado
- **Título y descripción de YouTube salen de una plantilla**, en `config.toml`
  (`[youtube] titulo` y `descripcion`), no de código. Variables: `PLAYER1/2`, `CHAR1/2`,
  `SCORE1/2`, `ROUNDS1/2`, `DAMAGE1/2`, `COMBOS1/2`, `SUPERS1/2`, `PERFECTS1/2`,
  `DIZZY1/2`, `DURATION`, `GAME`, `GAME_SHORT`, `GAME_FULL`, `DATE`, `FLAG1/2`,
  `COUNTRY1/2`, `CAPITULOS`, `WEB`. Una línea cuyo dato no se sabe **no se escribe**, y
  un apartado que se queda sin ninguna línea se va entero con su titulillo: nada de
  ceros que se leen como si fueran un dato.
- **`grabar` publica el sitio una sola vez.** La ficha se escribía al terminar el
  post-proceso (sin el id de YouTube todavía) y otra vez después de subir: dos commits
  por grabación. Ahora la primera sólo escribe y la segunda publica.
- Vuelven al sitio las siete grabaciones que se habían apartado.
- **La ficha se reorganiza en diez secciones** con un navegador fijo: el set, peleas,
  daño, combos, súpers, mareos, tiempo, defensa, personajes y datos del emulador. Lo que
  reporta el emulador va aparte y etiquetado, para no confundirlo con lo que calcula
  replayLab. Principio: el overlay lleva lo importante durante el combate, la web lleva
  el análisis completo.
- **Overlay**: dos fichas de seis campos cada una (combate y rondas) y el historial de
  inputs con sitio garantizado, 12 líneas a la vista. Si falta espacio se quitan
  estadísticas antes que historial.

### Arreglado
- **El daño del jugador 1 salía vacío en todas las fichas.** En `web.py`, el bucle que
  calcula las barras reutilizaba la `s` del bucle anterior, que había quedado apuntando
  al jugador 2: `dano_barras`, `recibido_barras` y `combo_dano_barras` se escribían dos
  veces en el 2 y nunca en el 1. Ahora `s = st[i]`.
- **El daño de una ronda podía pasar del 100 %** (145 de 144): el golpe que remata
  restaba uno de más, porque la vida pasa de 0 a -1 y eso no es daño.
- **Un doble KO dejaba la ronda sin cerrar**, y eso arrastraba súpers fantasma a la
  ronda siguiente.
- **Quedarse a cero de vida no es KO en Super Turbo.** Pasó cuatro veces en las
  grabaciones y en una de ellas se siguió peleando 13 segundos; la lectura negativa de
  verdad llegaba hasta 144 frames más tarde. Ahora el KO sólo vale con la vida por
  debajo de cero.
- **Un combo contaba un golpe de más** cuando el que lo cerraba iba bloqueado. El golpe
  final sólo cuenta si el rival está encajándolo (estado `0x0E`).
- **Una ronda sin cierre se comía la siguiente** en la línea de tiempo. Ahora se cierra
  al empezar la siguiente y se marca `sin_cierre`.
- En móvil la tabla de estadísticas se salía unos píxeles por el lado.

## 2026-09-17

### Añadido
- **Cinco vistas en la portada**, al estilo del explorador de archivos: iconos grandes,
  miniaturas, mosaico, lista y detalles. La vista elegida se recuerda en el navegador.
- **Orden** por fecha, duración, jugador o número de peleas. En la vista de detalles los
  encabezados ordenan al pulsarlos, y la flecha dice en qué sentido.
- **Banderas de país y retratos de personaje** en las dos páginas. Vienen de lo que ya
  usa el sistema: las banderas del propio Fightcade y los retratos del overlay.
- **Letra de rango** (E a S) junto a cada jugador.
- **Ronda a ronda**: una tarjeta por pelea con el resultado de cada ronda, cómo acabó,
  cuánto duró, con cuánta vida se ganó y los sellos de perfect, remontada, doble KO y
  ronda ganada al límite. Cada fila salta a ese momento del vídeo.
- **Filtros en la línea de tiempo**: se enciende y apaga cada tipo de momento (remate,
  combo, súper, mareo, perfect, remontada, doble KO), con su cuenta al lado.
- **Estadísticas nuevas**: golpes conectados, daño medio por golpe, agarres, mejor racha
  de rondas y rondas jugadas. Cada fila lleva además una barra que compara a los dos.
- Marca **«sin cierre»** en las rondas que el juego no cerró, para no dar sus tiempos
  por buenos sin avisar.

### Cambiado
- **La línea de tiempo se separa por pelea.** Antes era una sola barra continua y no se
  veía dónde acababa una pelea y empezaba la siguiente. Ahora hay una pista por pelea,
  con sus rondas dentro teñidas del color de quien las ganó.
- **El daño de la ronda es una sola barra que sale del centro** hacia cada lado. Antes
  eran dos barras apiladas que se leían como una raya sola y no se sabía de quién era
  cada mitad.
- Las tarjetas sin vídeo ya no reservan un rectángulo negro de 16:9: enseñan el
  enfrentamiento.

### Arreglado
- **Las banderas no se veían.** Estaban puestas como emoji, y Windows no trae tipografía
  de banderas: salían dos letras sueltas o una cajita. Ahora son imágenes.
- **Una ronda sin cierre se comía a la siguiente** en la línea de tiempo: al no tener
  fin, se estiraba hasta el final de la pelea y se solapaba. Ahora acaba donde empieza
  la siguiente y queda marcada como aproximada.
- **El daño por ronda se pasaba del 100%.** El registro guarda la resta en crudo y el
  golpe de remate contaba uno de más (la vida pasa de 0 a -1, y eso no es daño). Una
  ronda salía con 145 de 144.

## 2026-09-16

### Añadido
- Primera versión del sitio: portada con buscador y ficha por vídeo con el reproductor
  de YouTube, línea de tiempo y tabla del set.
- Seis idiomas: español, inglés, portugués, francés, japonés y chino.
- `fcrec/web.py`: la ficha de cada grabación se calcula desde `eventos.json`, el registro
  crudo de la partida. Ninguna estadística se copia: si cambia el cálculo, se rehacen
  todas las fichas sin regrabar nada.
- Publicación automática: al terminar una subida, fcrec escribe la ficha, rehace el
  índice y hace el commit.
- `python -m fcrec web --ver` levanta el sitio en local, porque abriendo `index.html`
  con doble clic el navegador bloquea la lectura de los datos.
