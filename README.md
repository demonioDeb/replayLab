# replayLab

Sitio estático con los replays de Fightcade que graba [fcrec](https://github.com/demonioDeb):
cada vídeo tiene su ficha con la línea de tiempo del set y las estadísticas leídas de la
propia partida (no estimadas).

- `index.html` — la lista de vídeos, con buscador.
- `video.html?q=<quark>` — la ficha: vídeo, línea de tiempo con los momentos, y la tabla.
- `datos/<quark>.json` — una ficha por grabación, la escribe fcrec.
- `datos/indice.json` — se rehace entero desde las fichas cada vez, nunca se parchea.

No hay compilación ni servidor: se publica tal cual con GitHub Pages.

## Idiomas
Español, inglés, portugués, francés, japonés y chino. Todo el texto pasa por el
diccionario de `assets/app.js`; añadir un idioma es añadir un bloque.
