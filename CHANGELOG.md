# Changelog

Los cambios de replayLab, de lo más nuevo a lo más viejo. Las fechas son las del día en
que se hizo el cambio, no las de publicación.

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
