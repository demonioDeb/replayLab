/* replayLab — lo común a las dos páginas: idiomas, carga de datos y ayudas.
   Regla heredada de fcrec: ningún texto se escribe a pelo en el HTML, todo pasa por
   el diccionario. Así añadir un idioma es añadir un bloque, no repasar el sitio. */
"use strict";

const I18N = {
  es: {
    "est_titulo": "Estadísticas", "est_set": "Todo el set", "est_total": "Total", "est_media": "Por ronda", "est_ceros": "En cero para los dos", "est_puntos": "puntos", "est_dano": "Daño hecho (barras)", "est_dano_r": "Daño por ronda (barras)", "est_golpes": "Golpes que quitaron vida", "est_golpes_r": "Golpes por ronda", "est_golpe_max": "Golpe más fuerte (barras)", "est_por_golpe": "Daño por golpe (barras)", "est_combos_r": "Combos por ronda", "est_combo_max": "Combo más largo (golpes)", "est_combo_dano": "Combo más dañino (barras)", "est_cargado": "Súper cargado", "est_supers": "Súpers lanzados", "est_supers_r": "Súpers por ronda", "est_mareo": "Mareó al rival", "est_mareo_t": "Tuvo al rival mareado", "est_mareo_max": "Mareo más largo", "est_rondas": "Rondas ganadas", "est_tiempo": "Rondas por tiempo", "est_perfects": "Perfects", "est_primero": "Pegó primero (rondas)", "est_racha": "Racha más larga (rondas)", "est_remontada": "Mayor remontada", "est_vida": "Vida al ganar", "est_vida_m": "Vida al ganar (media)", "est_limite": "Rondas al límite", "est_pelea_corta": "Pelea más corta que ganó", "est_ronda_rapida": "Ronda más rápida (reloj)", "est_dur_media": "Tiempo por ronda ganada", "est_pelea_media": "Tiempo por pelea ganada",
    "p_set": "Set", "p_set_ayuda": "Cómo iba el set después de esta pelea", "car_izq": "Mover a la izquierda", "car_der": "Mover a la derecha", "s_analisis_set": "Análisis del set", "s_combate": "Combate", "s_promedios": "Promedios", "st_dmgronda": "Daño por ronda (media)", "st_gameavg": "Lo que tarda en ganar una pelea (media)", "mas_detalle": "Más detalle", "ap_desbloqueado": "Desbloqueado", "j_ver_todos": "Ver todos los juegos", "c_varios": "Todos los juegos", "s_set": "El set", "s_peleas": "Peleas", "s_dano": "Daño", "s_combos": "Combos", "s_supers": "Súpers", "s_mareos": "Mareos", "s_tiempo": "Tiempo", "s_pers": "Personajes", "st_winpct": "% de rondas ganadas", "st_peleapida": "Pelea más corta que ganó", "st_vidaperd": "Vida que pierde por ronda (media)", "st_duravg": "Lo que tarda en ganar una ronda (media)", "st_meterfull": "Veces que tuvo el súper cargado", "st_supernom": "Nombre de su súper", "st_stuntime": "Tiempo que pasó mareado", "st_stunpeor": "Mareo más largo que sufrió", "st_dizzies": "Veces que mareó al rival", "st_mareado": "Veces que lo marearon", "st_swaps": "Cambios de personaje", "dur_rondas": "Cuánto duró cada ronda", "nada_aqui": "Sin datos en esta grabación",
    "cambios": "Cambios", "t_cambios": "Lo que fuimos haciendo", "sub_cambios": "Resumen por día de los cambios y de lo que fuimos descubriendo del juego", "c_hallazgo": "Hallazgo", "c_añadido": "Nuevo", "c_cambiado": "Cambio", "c_arreglado": "Arreglo", "donar": "Invítame un café", "ap_titulo": "¿Te gusta Replay Lab? Invítame un café", "ap_p1": "Replay Lab es un proyecto independiente creado para analizar, conservar y presentar partidas de videojuegos de una manera diferente. Procesar cada replay implica tiempo, almacenamiento, internet y recursos para mantener el proyecto funcionando.", "ap_p2": "Si Replay Lab te resulta útil o simplemente disfrutas viendo tus partidas con estadísticas, puedes apoyar el proyecto invitándome un café. ☕🎮", "ap_p3": "Tu apoyo ayuda a mantener Replay Lab funcionando y a seguir agregando nuevas funciones, juegos y estadísticas.", "ap_nota": "Gracias por apoyar el proyecto. Cada café ayuda a mantener la máquina encendida. ❤️", "canal": "Canal",
    al_limite: "Casi sin vida", sin_cierre: "Ronda incompleta", sin_cierre_ayuda: "El juego no cerró esta ronda: sus tiempos son aproximados", dano: "Daño",
   vista: "Vista", v_iconos: "Iconos grandes", v_miniaturas: "Miniaturas", v_mosaico: "Mosaico", v_lista: "Lista", v_detalles: "Detalles", orden: "Ordenar", o_fecha: "Fecha", o_duracion: "Duración", o_jugador: "Jugador", o_peleas: "Peleas", videos: "vídeos", rango: "Rango", sin_rango: "Sin rango", rondas_t: "Rondas", resumen_rondas: "Ronda a ronda", gana: "gana", empate: "empate", por_ko: "KO", por_tiempo: "Tiempo", doble: "Doble KO", dano_ronda: "Daño de la ronda", vida_restante: "le quedó", todo: "Todo", nada: "Nada", filtrar: "Filtrar", st_golpes: "Veces que quitó vida", st_danomedio: "Daño por golpe (media)", st_golpemax: "Su golpe más fuerte", st_primero: "Rondas en que pegó primero", st_racha: "Más rondas ganadas seguidas", st_rondas_jug: "Rondas jugadas", pie_datos: "Datos leídos de la propia partida", cargando: "Cargando…",
    lema: "Replays de Fightcade, grabados y contados",
    buscar: "Buscar jugador o personaje…",
    sin_videos: "Todavía no hay vídeos.",
    sin_resultados: "Nada que coincida con esa búsqueda.",
    no_publicado: "Vídeo sin publicar",
    no_publicado_sub: "Las estadísticas de abajo salen igual del registro de la partida.",
    volver: "Volver",
    peleas: "peleas", pelea: "Pelea", ronda: "Ronda",
    linea: "Línea de tiempo", saltos: "Saltar a",
    resumen: "El set", combate: "Combate",     combo: "Combo", super: "Súper", mareo: "Mareo", ko: "Remate",
    perfect: "Perfect", remontada: "Remontada", doble_ko: "Doble KO",
    golpes: "golpes", barras: "barras de vida", seg: "s", seg_reloj: "s de reloj",
    st_peleas: "Peleas ganadas", st_rondas: "Rondas ganadas",
    st_kotiempo: "Ganadas por KO / por tiempo", st_perfects: "Perfects",
    st_dano: "Daño hecho", st_recibido: "Daño recibido",
    st_combos: "Combos", st_combomax: "Combo más largo (golpes)", st_combodano: "Combo que más quitó",
    st_supers: "Súpers lanzados", st_mareos: "Mareos que provocó",
    st_rapida: "Ronda más corta que ganó", st_vida: "Vida que le quedaba al ganar (media)",
    st_limite: "Rondas ganadas casi sin vida", st_remontada: "Mayor remontada (vida en contra)",
    pie_hecho: "Hecho con fcrec", pie_fuente: "Código",
    no_existe: "No encuentro ese vídeo.",
    s_resumen: "Resumen", s_analisis: "Análisis", r_destacados: "Momentos destacados",
    r_dif: "%s de diferencia", r_igual: "Igualados", r_vidafin: "Vida al final de cada ronda", r_remontada: "Remontó %s % de vida en contra",
    r_seguidas: "%s rondas seguidas", r_gana_set: "gana el set", r_cero: "ganó con 0 % de vida", r_cero_ayuda: "En Super Turbo quedarse a cero de vida no es KO: sigue en pie.",
    p_de: "Pelea %s de %s", p_ant: "Pelea anterior", p_sig: "Pelea siguiente",
    p_video: "Ver en el vídeo", p_set_tl: "El set completo", p_ley: "Color: quién ganó · en medio: rondas de esa pelea · abajo: cómo iba el set. Pulsa una para ver su detalle.",
    u_partida: "partida", u_pelea: "pelea", u_peleas: "peleas", ap_procesada: "partida procesada",
    n_enviar: "Enviar replay", n_pronto: "Pronto", e_titulo: "Envía tu replay",
    e_sub: "Pega el enlace de un replay de Fightcade y Replay Lab lo grabará, lo analizará y lo publicará con todas sus estadísticas.", e_aviso: "Todavía no funciona. La estamos preparando y aquí verás cuándo se abre.", e_campo: "Enlace del replay",
    e_boton: "Enviar replay", e_como: "Cómo funcionará", e_p1: "Pegas el enlace del replay de Fightcade.",
    e_p2: "Se comprueba que el juego esté en Replay Lab y que la partida no esté ya publicada.", e_p3: "La partida entra en la cola.", e_p4: "Se graba con el overlay y se calculan sus estadísticas.",
    e_p5: "Aparece en Partidas y en el canal de YouTube.", e_juegos: "Juegos que se podrán enviar", ap_viene: "Lo que viene",
    ap_enviar: "Que la comunidad pueda enviar sus replays", ap_en_curso: "En preparación",
    c_todo: "Todo", c_web: "Web", c_juegos: "Juegos",
    c_web_d: "Lo que ves en replayLab: páginas, estadísticas, navegación.", c_juego_d: "Lo de cada juego: overlay, grabación, lo que descubrimos de la partida y los vídeos.",
    n_inicio: "Inicio", n_partidas: "Partidas", n_juegos: "Juegos", n_canal: "Canal",
    n_cambios: "Changelog", n_apoya: "Apoya el proyecto", n_github: "GitHub", n_menu: "Menú",
    pie_indep: "Proyecto independiente", h_titulo: "Análisis de partidas de juegos de pelea", h_texto: "Replays de Fightcade grabados, con cada ronda, combo y súper leídos directamente del juego.", h_ver: "Ver partidas",
    h_juegos: "Juegos que analizamos", h_ultimas: "Últimas partidas", h_todas: "Ver todas", j_sub: "Replay Lab analiza juegos de pelea. Cada juego tiene su propio espacio.",
    j_pelea: "Juegos de pelea", j_disp: "Disponible", j_prox: "Próximamente", j_entrar: "Entrar",
    u_partidas: "partidas", g_jugadores: "Jugadores", g_stats: "Estadísticas", g_analisis: "Ver análisis",
    g_jugadas: "Partidas jugadas", g_ganadas: "Peleas ganadas", g_tiempo: "Tiempo de juego", g_njug: "Jugadores distintos",
    g_npers: "Personajes usados", g_apar: "Veces elegido", g_sin: "Todavía no hay partidas de este juego.", g_noexiste: "Ese juego no está en Replay Lab.",
    p_todos: "Todos los juegos", ap_intro: "Replay Lab es un proyecto independiente. Cada partida que ves aquí se grabó, se procesó y se publicó en un equipo propio.", ap_cuesta: "Lo que cuesta mantenerlo", ap_c1: "Procesamiento: grabar y analizar cada replay",
    ap_c2: "Almacenamiento: vídeos y datos de cada partida", ap_c3: "Internet: subir los vídeos y servir la web", ap_c4: "Electricidad: horas de grabación y de proceso", ap_c5: "Mantenimiento: que todo siga funcionando",
    ap_c6: "Desarrollo: nuevas estadísticas y funciones", ap_c7: "Nuevos juegos: descifrar cómo guarda cada juego sus datos", ap_progreso: "Progreso de Replay Lab", ap_procesadas: "partidas procesadas",
    ap_siguiente: "Siguiente hito", ap_proximo: "Próximo objetivo del proyecto", ap_incorporar: "Incorporar %s", ap_logros: "Logros de Replay Lab",
    ap_logros_sub: "Los logros son del proyecto, no de quien lo apoya. Se desbloquean solos, con los datos reales del sitio.", ap_ok: "Conseguido", ap_no: "Por conseguir", ap_compacto: "Replay Lab es independiente. Si te sirve, puedes apoyarlo.",
    ap_como: "Cómo ayuda", l_primero: "Primer replay procesado", l_n: "%s partidas analizadas", l_rondas: "%s rondas analizadas",
    l_juego1: "Primer juego incorporado", l_juego2: "Segundo juego incorporado",
  },
  en: {
    "est_titulo": "Stats", "est_set": "Whole set", "est_total": "Total", "est_media": "Per round", "est_ceros": "Zero for both", "est_puntos": "points", "est_dano": "Damage dealt (bars)", "est_dano_r": "Damage per round (bars)", "est_golpes": "Hits that took health", "est_golpes_r": "Hits per round", "est_golpe_max": "Hardest hit (bars)", "est_por_golpe": "Damage per hit (bars)", "est_combos_r": "Combos per round", "est_combo_max": "Longest combo (hits)", "est_combo_dano": "Best combo damage (bars)", "est_cargado": "Super charged", "est_supers": "Supers used", "est_supers_r": "Supers per round", "est_mareo": "Dizzied opponent", "est_mareo_t": "Opponent dizzy time", "est_mareo_max": "Longest dizzy", "est_rondas": "Rounds won", "est_tiempo": "Rounds won on time", "est_perfects": "Perfects", "est_primero": "Hit first (rounds)", "est_racha": "Longest streak (rounds)", "est_remontada": "Biggest comeback", "est_vida": "Health left on win", "est_vida_m": "Health left (avg.)", "est_limite": "Clutch rounds", "est_pelea_corta": "Shortest game won", "est_ronda_rapida": "Fastest round (clock)", "est_dur_media": "Time per round won", "est_pelea_media": "Time per game won",
    "p_set": "Set", "p_set_ayuda": "The set score after this game", "car_izq": "Scroll left", "car_der": "Scroll right", "s_analisis_set": "Set analysis", "s_combate": "Combat", "s_promedios": "Averages", "st_dmgronda": "Damage per round (avg.)", "st_gameavg": "Time to win a game (avg.)", "mas_detalle": "More detail", "ap_desbloqueado": "Unlocked", "j_ver_todos": "See all games", "c_varios": "All games", "s_set": "The set", "s_peleas": "Games", "s_dano": "Damage", "s_combos": "Combos", "s_supers": "Supers", "s_mareos": "Dizzies", "s_tiempo": "Time", "s_pers": "Characters", "st_winpct": "% of rounds won", "st_peleapida": "Shortest game won", "st_vidaperd": "Health lost per round (avg.)", "st_duravg": "Time to win a round (avg.)", "st_meterfull": "Times the super was charged", "st_supernom": "Their super's name", "st_stuntime": "Time spent dizzy", "st_stunpeor": "Longest time dizzy", "st_dizzies": "Times they dizzied the opponent", "st_mareado": "Times they got dizzied", "st_swaps": "Character switches", "dur_rondas": "How long each round lasted", "nada_aqui": "No data in this recording",
    "cambios": "Changes", "t_cambios": "What we've been doing", "sub_cambios": "A day-by-day summary of the changes and of what we kept finding out about the game", "c_hallazgo": "Finding", "c_añadido": "New", "c_cambiado": "Change", "c_arreglado": "Fix", "donar": "Buy me a coffee", "ap_titulo": "Enjoying Replay Lab? Buy me a coffee", "ap_p1": "Replay Lab is an independent project built to analyse, preserve and present game matches in a different way. Processing every replay takes time, storage, bandwidth and the machines that keep it running.", "ap_p2": "If Replay Lab is useful to you, or you simply enjoy watching your own matches with stats, you can support the project by buying me a coffee. ☕🎮", "ap_p3": "Your support keeps Replay Lab running and helps add new features, games and stats.", "ap_nota": "Thanks for supporting the project. Every coffee helps keep the machine on. ❤️", "canal": "Channel",
    al_limite: "Almost no health", sin_cierre: "Unfinished round", sin_cierre_ayuda: "The game never closed this round: its times are approximate", dano: "Damage",
   vista: "View", v_iconos: "Large icons", v_miniaturas: "Thumbnails", v_mosaico: "Tiles", v_lista: "List", v_detalles: "Details", orden: "Sort", o_fecha: "Date", o_duracion: "Length", o_jugador: "Player", o_peleas: "Matches", videos: "videos", rango: "Rank", sin_rango: "Unranked", rondas_t: "Rounds", resumen_rondas: "Round by round", gana: "wins", empate: "draw", por_ko: "KO", por_tiempo: "Time", doble: "Double KO", dano_ronda: "Round damage", vida_restante: "left", todo: "All", nada: "None", filtrar: "Filter", st_golpes: "Times they took health", st_danomedio: "Damage per hit (avg.)", st_golpemax: "Hardest hit", st_primero: "Rounds where they hit first", st_racha: "Most rounds won in a row", st_rondas_jug: "Rounds played", pie_datos: "Data read from the match itself", cargando: "Loading…",
    lema: "Fightcade replays, recorded and explained",
    buscar: "Search player or character…",
    sin_videos: "No videos yet.",
    sin_resultados: "Nothing matches that search.",
    no_publicado: "Video not published",
    no_publicado_sub: "The stats below still come from the match log.",
    volver: "Back",
    peleas: "matches", pelea: "Match", ronda: "Round",
    linea: "Timeline", saltos: "Jump to",
    resumen: "The set", combate: "Combat",     combo: "Combo", super: "Super", mareo: "Dizzy", ko: "Finish",
    perfect: "Perfect", remontada: "Comeback", doble_ko: "Double KO",
    golpes: "hits", barras: "health bars", seg: "s", seg_reloj: "s on the clock",
    st_peleas: "Games won", st_rondas: "Rounds won",
    st_kotiempo: "Won by KO / on time", st_perfects: "Perfects",
    st_dano: "Damage dealt", st_recibido: "Damage taken",
    st_combos: "Combos", st_combomax: "Longest combo (hits)", st_combodano: "Most damaging combo",
    st_supers: "Supers thrown", st_mareos: "Dizzies caused",
    st_rapida: "Shortest round won", st_vida: "Health left when winning (avg.)",
    st_limite: "Rounds won on almost no health", st_remontada: "Biggest comeback (health behind)",
    pie_hecho: "Made with fcrec", pie_fuente: "Source",
    no_existe: "I can't find that video.",
    s_resumen: "Summary", s_analisis: "Analysis", r_destacados: "Highlights",
    r_dif: "%s ahead", r_igual: "Level", r_vidafin: "Health at the end of each round", r_remontada: "Came back from %s% health behind",
    r_seguidas: "%s rounds in a row", r_gana_set: "wins the set", r_cero: "won on 0% health", r_cero_ayuda: "In Super Turbo, hitting zero health is not a KO: they are still standing.",
    p_de: "Game %s of %s", p_ant: "Previous game", p_sig: "Next game",
    p_video: "Watch in the video", p_set_tl: "The whole set", p_ley: "Colour: who won · middle: rounds in that game · bottom: set score after it. Tap one to see its detail.",
    u_partida: "match", u_pelea: "game", u_peleas: "games", ap_procesada: "match processed",
    n_enviar: "Send a replay", n_pronto: "Soon", e_titulo: "Send us your replay",
    e_sub: "Paste a Fightcade replay link and Replay Lab will record it, analyse it and publish it with all its stats.", e_aviso: "It doesn't work yet. We're getting it ready — you'll see here when it opens.", e_campo: "Replay link",
    e_boton: "Send replay", e_como: "How it will work", e_p1: "You paste the Fightcade replay link.",
    e_p2: "We check the game is on Replay Lab and the match isn't already published.", e_p3: "The match joins the queue.", e_p4: "It gets recorded with the overlay and its stats are worked out.",
    e_p5: "It shows up in Matches and on the YouTube channel.", e_juegos: "Games you'll be able to send", ap_viene: "What's next",
    ap_enviar: "Let the community send in their replays", ap_en_curso: "In progress",
    c_todo: "All", c_web: "Website", c_juegos: "Games",
    c_web_d: "What you see on replayLab: pages, stats, navigation.", c_juego_d: "Each game's side: overlay, recording, what we found out about the match, and the videos.",
    n_inicio: "Home", n_partidas: "Matches", n_juegos: "Games", n_canal: "Channel",
    n_cambios: "Changelog", n_apoya: "Support the project", n_github: "GitHub", n_menu: "Menu",
    pie_indep: "Independent project", h_titulo: "Fighting game match analysis", h_texto: "Fightcade replays, recorded, with every round, combo and super read straight from the game.", h_ver: "Browse matches",
    h_juegos: "Games we analyse", h_ultimas: "Latest matches", h_todas: "See all", j_sub: "Replay Lab analyses fighting games. Each game has its own space.",
    j_pelea: "Fighting games", j_disp: "Available", j_prox: "Coming soon", j_entrar: "Open",
    u_partidas: "matches", g_jugadores: "Players", g_stats: "Stats", g_analisis: "View analysis",
    g_jugadas: "Matches played", g_ganadas: "Games won", g_tiempo: "Time played", g_njug: "Different players",
    g_npers: "Characters used", g_apar: "Times picked", g_sin: "No matches for this game yet.", g_noexiste: "That game is not on Replay Lab.",
    p_todos: "All games", ap_intro: "Replay Lab is an independent project. Every match you see here was recorded, processed and published on our own machine.", ap_cuesta: "What it takes to keep it running", ap_c1: "Processing: recording and analysing every replay",
    ap_c2: "Storage: videos and data for every match", ap_c3: "Bandwidth: uploading videos and serving the site", ap_c4: "Power: hours of recording and processing", ap_c5: "Maintenance: keeping everything working",
    ap_c6: "Development: new stats and features", ap_c7: "New games: working out how each game stores its data", ap_progreso: "Replay Lab progress", ap_procesadas: "matches processed",
    ap_siguiente: "Next milestone", ap_proximo: "Next project goal", ap_incorporar: "Add %s", ap_logros: "Replay Lab milestones",
    ap_logros_sub: "These milestones belong to the project, not to its supporters. They unlock on their own, from the site's real data.", ap_ok: "Unlocked", ap_no: "Locked", ap_compacto: "Replay Lab is independent. If it's useful to you, you can support it.",
    ap_como: "How it helps", l_primero: "First replay processed", l_n: "%s matches analysed", l_rondas: "%s rounds analysed",
    l_juego1: "First game added", l_juego2: "Second game added",
  },
  pt: {
    "est_titulo": "Estatísticas", "est_set": "Set inteiro", "est_total": "Total", "est_media": "Por round", "est_ceros": "Zero para os dois", "est_puntos": "pontos", "est_dano": "Dano causado (barras)", "est_dano_r": "Dano por round (barras)", "est_golpes": "Golpes que tiraram vida", "est_golpes_r": "Golpes por round", "est_golpe_max": "Golpe mais forte (barras)", "est_por_golpe": "Dano por golpe (barras)", "est_combos_r": "Combos por round", "est_combo_max": "Combo mais longo (golpes)", "est_combo_dano": "Combo mais forte (barras)", "est_cargado": "Súper carregado", "est_supers": "Súpers usados", "est_supers_r": "Súpers por round", "est_mareo": "Atordoou o rival", "est_mareo_t": "Tempo do rival atordoado", "est_mareo_max": "Maior atordoamento", "est_rondas": "Rounds vencidos", "est_tiempo": "Rounds por tempo", "est_perfects": "Perfects", "est_primero": "Acertou primeiro (rounds)", "est_racha": "Maior sequência (rounds)", "est_remontada": "Maior virada", "est_vida": "Vida ao vencer", "est_vida_m": "Vida ao vencer (média)", "est_limite": "Rounds no limite", "est_pelea_corta": "Luta mais curta vencida", "est_ronda_rapida": "Round mais rápido (relógio)", "est_dur_media": "Tempo por round vencido", "est_pelea_media": "Tempo por luta vencida",
    "p_set": "Set", "p_set_ayuda": "Como ficou o set depois desta luta", "car_izq": "Mover para a esquerda", "car_der": "Mover para a direita", "s_analisis_set": "Análise do set", "s_combate": "Combate", "s_promedios": "Médias", "st_dmgronda": "Dano por round (média)", "st_gameavg": "Tempo para vencer uma luta (média)", "mas_detalle": "Mais detalhes", "ap_desbloqueado": "Desbloqueado", "j_ver_todos": "Ver todos os jogos", "c_varios": "Todos os jogos", "s_set": "O set", "s_peleas": "Lutas", "s_dano": "Dano", "s_combos": "Combos", "s_supers": "Súpers", "s_mareos": "Atordoamentos", "s_tiempo": "Tempo", "s_pers": "Personagens", "st_winpct": "% de rounds vencidos", "st_peleapida": "Luta mais curta que venceu", "st_vidaperd": "Vida perdida por round (média)", "st_duravg": "Tempo para vencer um round (média)", "st_meterfull": "Vezes com o súper carregado", "st_supernom": "Nome do seu súper", "st_stuntime": "Tempo que passou atordoado", "st_stunpeor": "Atordoamento mais longo que sofreu", "st_dizzies": "Vezes que atordoou o rival", "st_mareado": "Vezes que foi atordoado", "st_swaps": "Trocas de personagem", "dur_rondas": "Quanto durou cada round", "nada_aqui": "Sem dados nesta gravação",
    "cambios": "Mudanças", "t_cambios": "O que fomos fazendo", "sub_cambios": "Resumo por dia das mudanças e do que fomos descobrindo do jogo", "c_hallazgo": "Descoberta", "c_añadido": "Novo", "c_cambiado": "Mudança", "c_arreglado": "Correção", "donar": "Me pague um café", "ap_titulo": "Gosta do Replay Lab? Me pague um café", "ap_p1": "O Replay Lab é um projeto independente criado para analisar, preservar e apresentar partidas de videogame de um jeito diferente. Processar cada replay exige tempo, armazenamento, internet e recursos para manter o projeto no ar.", "ap_p2": "Se o Replay Lab te é útil ou você simplesmente gosta de ver suas partidas com estatísticas, pode apoiar o projeto me pagando um café. ☕🎮", "ap_p3": "Seu apoio ajuda a manter o Replay Lab funcionando e a seguir adicionando novos recursos, jogos e estatísticas.", "ap_nota": "Obrigado por apoiar o projeto. Cada café ajuda a manter a máquina ligada. ❤️", "canal": "Canal",
    al_limite: "Quase sem vida", sin_cierre: "Round incompleto", sin_cierre_ayuda: "O jogo não fechou este round: os tempos são aproximados", dano: "Dano",
   vista: "Exibição", v_iconos: "Ícones grandes", v_miniaturas: "Miniaturas", v_mosaico: "Blocos", v_lista: "Lista", v_detalles: "Detalhes", orden: "Ordenar", o_fecha: "Data", o_duracion: "Duração", o_jugador: "Jogador", o_peleas: "Lutas", videos: "vídeos", rango: "Rank", sin_rango: "Sem rank", rondas_t: "Rounds", resumen_rondas: "Round a round", gana: "vence", empate: "empate", por_ko: "KO", por_tiempo: "Tempo", doble: "Duplo KO", dano_ronda: "Dano do round", vida_restante: "sobrou", todo: "Tudo", nada: "Nada", filtrar: "Filtrar", st_golpes: "Vezes que tirou vida", st_danomedio: "Dano por golpe (média)", st_golpemax: "Golpe mais forte", st_primero: "Rounds em que acertou primeiro", st_racha: "Mais rounds vencidos seguidos", st_rondas_jug: "Rounds jogados", pie_datos: "Dados lidos da própria partida", cargando: "Carregando…",
    lema: "Replays do Fightcade, gravados e explicados",
    buscar: "Buscar jogador ou personagem…",
    sin_videos: "Ainda não há vídeos.",
    sin_resultados: "Nada corresponde a essa busca.",
    no_publicado: "Vídeo não publicado",
    no_publicado_sub: "As estatísticas abaixo saem do registro da partida.",
    volver: "Voltar",
    peleas: "lutas", pelea: "Luta", ronda: "Round",
    linea: "Linha do tempo", saltos: "Ir para",
    resumen: "O set", combate: "Combate",     combo: "Combo", super: "Súper", mareo: "Atordoamento", ko: "Finalização",
    perfect: "Perfect", remontada: "Virada", doble_ko: "Duplo KO",
    golpes: "golpes", barras: "barras de vida", seg: "s", seg_reloj: "s de relógio",
    st_peleas: "Lutas vencidas", st_rondas: "Rounds vencidos",
    st_kotiempo: "Vencidos por KO / por tempo", st_perfects: "Perfects",
    st_dano: "Dano causado", st_recibido: "Dano recebido",
    st_combos: "Combos", st_combomax: "Combo mais longo (golpes)", st_combodano: "Combo que mais tirou",
    st_supers: "Súpers usados", st_mareos: "Atordoamentos causados",
    st_rapida: "Round mais curto que venceu", st_vida: "Vida restante ao vencer (média)",
    st_limite: "Rounds vencidos quase sem vida", st_remontada: "Maior virada (vida atrás)",
    pie_hecho: "Feito com fcrec", pie_fuente: "Código",
    no_existe: "Não encontro esse vídeo.",
    s_resumen: "Resumo", s_analisis: "Análise", r_destacados: "Destaques",
    r_dif: "%s de diferença", r_igual: "Empatados", r_vidafin: "Vida no fim de cada round", r_remontada: "Virou com %s% de vida atrás",
    r_seguidas: "%s rounds seguidos", r_gana_set: "vence o set", r_cero: "venceu com 0% de vida", r_cero_ayuda: "No Super Turbo, ficar com zero de vida não é KO: continua de pé.",
    p_de: "Luta %s de %s", p_ant: "Luta anterior", p_sig: "Próxima luta",
    p_video: "Ver no vídeo", p_set_tl: "O set completo", p_ley: "Cor: quem venceu · no meio: rounds dessa luta · embaixo: placar do set. Toque em uma para ver o detalhe.",
    u_partida: "partida", u_pelea: "luta", u_peleas: "lutas", ap_procesada: "partida processada",
    n_enviar: "Enviar replay", n_pronto: "Em breve", e_titulo: "Envie seu replay",
    e_sub: "Cole o link de um replay do Fightcade e o Replay Lab vai gravá-lo, analisá-lo e publicá-lo com todas as estatísticas.", e_aviso: "Ainda não funciona. Estamos preparando e aqui você verá quando abrir.", e_campo: "Link do replay",
    e_boton: "Enviar replay", e_como: "Como vai funcionar", e_p1: "Você cola o link do replay do Fightcade.",
    e_p2: "Verificamos se o jogo está no Replay Lab e se a partida ainda não foi publicada.", e_p3: "A partida entra na fila.", e_p4: "É gravada com o overlay e as estatísticas são calculadas.",
    e_p5: "Aparece em Partidas e no canal do YouTube.", e_juegos: "Jogos que poderão ser enviados", ap_viene: "O que vem aí",
    ap_enviar: "Que a comunidade possa enviar seus replays", ap_en_curso: "Em preparação",
    c_todo: "Tudo", c_web: "Site", c_juegos: "Jogos",
    c_web_d: "O que você vê no replayLab: páginas, estatísticas, navegação.", c_juego_d: "O de cada jogo: overlay, gravação, o que descobrimos da partida e os vídeos.",
    n_inicio: "Início", n_partidas: "Partidas", n_juegos: "Jogos", n_canal: "Canal",
    n_cambios: "Changelog", n_apoya: "Apoie o projeto", n_github: "GitHub", n_menu: "Menu",
    pie_indep: "Projeto independente", h_titulo: "Análise de partidas de jogos de luta", h_texto: "Replays do Fightcade gravados, com cada round, combo e súper lidos direto do jogo.", h_ver: "Ver partidas",
    h_juegos: "Jogos que analisamos", h_ultimas: "Últimas partidas", h_todas: "Ver todas", j_sub: "O Replay Lab analisa jogos de luta. Cada jogo tem seu próprio espaço.",
    j_pelea: "Jogos de luta", j_disp: "Disponível", j_prox: "Em breve", j_entrar: "Entrar",
    u_partidas: "partidas", g_jugadores: "Jogadores", g_stats: "Estatísticas", g_analisis: "Ver análise",
    g_jugadas: "Partidas jogadas", g_ganadas: "Lutas vencidas", g_tiempo: "Tempo de jogo", g_njug: "Jogadores diferentes",
    g_npers: "Personagens usados", g_apar: "Vezes escolhido", g_sin: "Ainda não há partidas deste jogo.", g_noexiste: "Esse jogo não está no Replay Lab.",
    p_todos: "Todos os jogos", ap_intro: "O Replay Lab é um projeto independente. Cada partida que você vê aqui foi gravada, processada e publicada numa máquina própria.", ap_cuesta: "O que custa mantê-lo", ap_c1: "Processamento: gravar e analisar cada replay",
    ap_c2: "Armazenamento: vídeos e dados de cada partida", ap_c3: "Internet: enviar os vídeos e manter o site", ap_c4: "Eletricidade: horas de gravação e processamento", ap_c5: "Manutenção: manter tudo funcionando",
    ap_c6: "Desenvolvimento: novas estatísticas e funções", ap_c7: "Novos jogos: descobrir como cada jogo guarda seus dados", ap_progreso: "Progresso do Replay Lab", ap_procesadas: "partidas processadas",
    ap_siguiente: "Próximo marco", ap_proximo: "Próximo objetivo do projeto", ap_incorporar: "Incorporar %s", ap_logros: "Conquistas do Replay Lab",
    ap_logros_sub: "As conquistas são do projeto, não de quem o apoia. Desbloqueiam sozinhas, com os dados reais do site.", ap_ok: "Conquistado", ap_no: "A conquistar", ap_compacto: "O Replay Lab é independente. Se te é útil, você pode apoiá-lo.",
    ap_como: "Como ajuda", l_primero: "Primeiro replay processado", l_n: "%s partidas analisadas", l_rondas: "%s rounds analisados",
    l_juego1: "Primeiro jogo incorporado", l_juego2: "Segundo jogo incorporado",
  },
  fr: {
    "est_titulo": "Statistiques", "est_set": "Tout le set", "est_total": "Total", "est_media": "Par manche", "est_ceros": "À zéro pour les deux", "est_puntos": "points", "est_dano": "Dégâts infligés (barres)", "est_dano_r": "Dégâts par manche (barres)", "est_golpes": "Coups qui ont touché", "est_golpes_r": "Coups par manche", "est_golpe_max": "Coup le plus fort (barres)", "est_por_golpe": "Dégâts par coup (barres)", "est_combos_r": "Combos par manche", "est_combo_max": "Plus long combo (coups)", "est_combo_dano": "Combo le plus fort (barres)", "est_cargado": "Super chargé", "est_supers": "Supers lancés", "est_supers_r": "Supers par manche", "est_mareo": "Étourdissements infligés", "est_mareo_t": "Adversaire étourdi", "est_mareo_max": "Plus long étourdissement", "est_rondas": "Manches gagnées", "est_tiempo": "Manches au temps", "est_perfects": "Perfects", "est_primero": "Premier coup (manches)", "est_racha": "Meilleure série (manches)", "est_remontada": "Plus grande remontée", "est_vida": "Vie restante", "est_vida_m": "Vie restante (moy.)", "est_limite": "Manches sur le fil", "est_pelea_corta": "Victoire la plus rapide", "est_ronda_rapida": "Manche éclair (chrono)", "est_dur_media": "Temps par manche gagnée", "est_pelea_media": "Temps par combat gagné",
    "p_set": "Set", "p_set_ayuda": "Le score du set après ce combat", "car_izq": "Défiler vers la gauche", "car_der": "Défiler vers la droite", "s_analisis_set": "Analyse du set", "s_combate": "Combat", "s_promedios": "Moyennes", "st_dmgronda": "Dégâts par manche (moy.)", "st_gameavg": "Temps pour gagner un combat (moy.)", "mas_detalle": "Plus de détails", "ap_desbloqueado": "Débloqué", "j_ver_todos": "Voir tous les jeux", "c_varios": "Tous les jeux", "s_set": "Le set", "s_peleas": "Combats", "s_dano": "Dégâts", "s_combos": "Combos", "s_supers": "Supers", "s_mareos": "Étourdissements", "s_tiempo": "Temps", "s_pers": "Personnages", "st_winpct": "% de manches gagnées", "st_peleapida": "Combat le plus court gagné", "st_vidaperd": "Vie perdue par manche (moy.)", "st_duravg": "Temps pour gagner une manche (moy.)", "st_meterfull": "Fois où le super était chargé", "st_supernom": "Nom de son super", "st_stuntime": "Temps passé étourdi", "st_stunpeor": "Plus long étourdissement subi", "st_dizzies": "Fois où il a étourdi l'adversaire", "st_mareado": "Fois où il a été étourdi", "st_swaps": "Changements de personnage", "dur_rondas": "Durée de chaque manche", "nada_aqui": "Pas de données dans cet enregistrement",
    "cambios": "Changements", "t_cambios": "Ce qu'on a fait", "sub_cambios": "Résumé au jour le jour des changements et de ce qu'on a découvert du jeu", "c_hallazgo": "Découverte", "c_añadido": "Nouveau", "c_cambiado": "Changement", "c_arreglado": "Correction", "donar": "Offrez-moi un café", "ap_titulo": "Replay Lab vous plaît ? Offrez-moi un café", "ap_p1": "Replay Lab est un projet indépendant créé pour analyser, conserver et présenter des parties de jeux vidéo autrement. Traiter chaque replay demande du temps, du stockage, de la bande passante et des ressources pour faire tourner le projet.", "ap_p2": "Si Replay Lab vous est utile, ou si vous aimez simplement revoir vos parties avec des statistiques, vous pouvez soutenir le projet en m'offrant un café. ☕🎮", "ap_p3": "Votre soutien permet de garder Replay Lab en ligne et d'ajouter de nouvelles fonctions, de nouveaux jeux et de nouvelles statistiques.", "ap_nota": "Merci de soutenir le projet. Chaque café aide à garder la machine allumée. ❤️", "canal": "Chaîne",
    al_limite: "Presque sans vie", sin_cierre: "Manche incomplète", sin_cierre_ayuda: "Le jeu n'a pas clos cette manche : ses temps sont approximatifs", dano: "Dégâts",
   vista: "Affichage", v_iconos: "Grandes icônes", v_miniaturas: "Miniatures", v_mosaico: "Tuiles", v_lista: "Liste", v_detalles: "Détails", orden: "Trier", o_fecha: "Date", o_duracion: "Durée", o_jugador: "Joueur", o_peleas: "Matchs", videos: "vidéos", rango: "Rang", sin_rango: "Sans rang", rondas_t: "Manches", resumen_rondas: "Manche par manche", gana: "gagne", empate: "égalité", por_ko: "KO", por_tiempo: "Temps", doble: "Double KO", dano_ronda: "Dégâts de la manche", vida_restante: "restant", todo: "Tout", nada: "Aucun", filtrar: "Filtrer", st_golpes: "Fois où il a retiré de la vie", st_danomedio: "Dégâts par coup (moy.)", st_golpemax: "Coup le plus fort", st_primero: "Manches où il a touché en premier", st_racha: "Plus de manches gagnées d'affilée", st_rondas_jug: "Manches jouées", pie_datos: "Données lues du match lui-même", cargando: "Chargement…",
    lema: "Replays Fightcade, enregistrés et racontés",
    buscar: "Chercher un joueur ou un personnage…",
    sin_videos: "Pas encore de vidéos.",
    sin_resultados: "Rien ne correspond à cette recherche.",
    no_publicado: "Vidéo non publiée",
    no_publicado_sub: "Les stats ci-dessous viennent quand même du relevé du match.",
    volver: "Retour",
    peleas: "matchs", pelea: "Match", ronda: "Manche",
    linea: "Chronologie", saltos: "Aller à",
    resumen: "Le set", combate: "Combat",     combo: "Combo", super: "Super", mareo: "Étourdissement", ko: "Finition",
    perfect: "Perfect", remontada: "Remontée", doble_ko: "Double KO",
    golpes: "coups", barras: "barres de vie", seg: "s", seg_reloj: "s au chrono",
    st_peleas: "Combats gagnés", st_rondas: "Manches gagnées",
    st_kotiempo: "Gagnées par KO / au temps", st_perfects: "Perfects",
    st_dano: "Dégâts infligés", st_recibido: "Dégâts subis",
    st_combos: "Combos", st_combomax: "Plus long combo (coups)", st_combodano: "Combo le plus dévastateur",
    st_supers: "Supers lancés", st_mareos: "Étourdissements provoqués",
    st_rapida: "Manche la plus courte gagnée", st_vida: "Vie restante en gagnant (moy.)",
    st_limite: "Manches gagnées presque sans vie", st_remontada: "Plus grosse remontée (vie de retard)",
    pie_hecho: "Fait avec fcrec", pie_fuente: "Code",
    no_existe: "Je ne trouve pas cette vidéo.",
    s_resumen: "Résumé", s_analisis: "Analyse", r_destacados: "Temps forts",
    r_dif: "%s d'écart", r_igual: "À égalité", r_vidafin: "Vie en fin de chaque manche", r_remontada: "A remonté %s % de vie de retard",
    r_seguidas: "%s manches d'affilée", r_gana_set: "remporte le set", r_cero: "gagné à 0 % de vie", r_cero_ayuda: "Dans Super Turbo, tomber à zéro n'est pas un KO : le joueur reste debout.",
    p_de: "Combat %s sur %s", p_ant: "Combat précédent", p_sig: "Combat suivant",
    p_video: "Voir dans la vidéo", p_set_tl: "Le set complet", p_ley: "Couleur : le vainqueur · au centre : manches de ce combat · en bas : score du set. Touchez-en un pour le détail.",
    u_partida: "match", u_pelea: "combat", u_peleas: "combats", ap_procesada: "match traité",
    n_enviar: "Envoyer un replay", n_pronto: "Bientôt", e_titulo: "Envoyez votre replay",
    e_sub: "Collez le lien d'un replay Fightcade : Replay Lab l'enregistrera, l'analysera et le publiera avec toutes ses statistiques.", e_aviso: "Ça ne fonctionne pas encore. Nous la préparons : vous verrez ici quand elle ouvrira.", e_campo: "Lien du replay",
    e_boton: "Envoyer le replay", e_como: "Comment ça marchera", e_p1: "Vous collez le lien du replay Fightcade.",
    e_p2: "On vérifie que le jeu est sur Replay Lab et que le match n'est pas déjà publié.", e_p3: "Le match rejoint la file d'attente.", e_p4: "Il est enregistré avec l'overlay et ses statistiques sont calculées.",
    e_p5: "Il apparaît dans Matchs et sur la chaîne YouTube.", e_juegos: "Jeux que l'on pourra envoyer", ap_viene: "À venir",
    ap_enviar: "Permettre à la communauté d'envoyer ses replays", ap_en_curso: "En préparation",
    c_todo: "Tout", c_web: "Site web", c_juegos: "Jeux",
    c_web_d: "Ce que vous voyez sur replayLab : pages, statistiques, navigation.", c_juego_d: "Côté jeu : overlay, enregistrement, ce qu'on a découvert du match et les vidéos.",
    n_inicio: "Accueil", n_partidas: "Matchs", n_juegos: "Jeux", n_canal: "Chaîne",
    n_cambios: "Changelog", n_apoya: "Soutenir le projet", n_github: "GitHub", n_menu: "Menu",
    pie_indep: "Projet indépendant", h_titulo: "Analyse de matchs de jeux de combat", h_texto: "Des replays Fightcade enregistrés, chaque manche, combo et super lus directement dans le jeu.", h_ver: "Voir les matchs",
    h_juegos: "Jeux analysés", h_ultimas: "Derniers matchs", h_todas: "Tout voir", j_sub: "Replay Lab analyse des jeux de combat. Chaque jeu a son propre espace.",
    j_pelea: "Jeux de combat", j_disp: "Disponible", j_prox: "Bientôt", j_entrar: "Ouvrir",
    u_partidas: "matchs", g_jugadores: "Joueurs", g_stats: "Statistiques", g_analisis: "Voir l'analyse",
    g_jugadas: "Matchs joués", g_ganadas: "Combats gagnés", g_tiempo: "Temps de jeu", g_njug: "Joueurs différents",
    g_npers: "Personnages utilisés", g_apar: "Fois choisi", g_sin: "Pas encore de matchs pour ce jeu.", g_noexiste: "Ce jeu n'est pas sur Replay Lab.",
    p_todos: "Tous les jeux", ap_intro: "Replay Lab est un projet indépendant. Chaque match ici a été enregistré, traité et publié sur notre propre machine.", ap_cuesta: "Ce que demande le projet", ap_c1: "Traitement : enregistrer et analyser chaque replay",
    ap_c2: "Stockage : vidéos et données de chaque match", ap_c3: "Internet : envoyer les vidéos et servir le site", ap_c4: "Électricité : des heures d'enregistrement et de traitement", ap_c5: "Maintenance : que tout continue de fonctionner",
    ap_c6: "Développement : nouvelles statistiques et fonctions", ap_c7: "Nouveaux jeux : comprendre comment chaque jeu stocke ses données", ap_progreso: "Progression de Replay Lab", ap_procesadas: "matchs traités",
    ap_siguiente: "Prochain palier", ap_proximo: "Prochain objectif du projet", ap_incorporar: "Intégrer %s", ap_logros: "Succès de Replay Lab",
    ap_logros_sub: "Ces succès appartiennent au projet, pas à ceux qui le soutiennent. Ils se débloquent seuls, à partir des données réelles du site.", ap_ok: "Débloqué", ap_no: "À débloquer", ap_compacto: "Replay Lab est indépendant. S'il vous est utile, vous pouvez le soutenir.",
    ap_como: "À quoi ça sert", l_primero: "Premier replay traité", l_n: "%s matchs analysés", l_rondas: "%s manches analysées",
    l_juego1: "Premier jeu intégré", l_juego2: "Deuxième jeu intégré",
  },
  ja: {
    "est_titulo": "スタッツ", "est_set": "セット全体", "est_total": "合計", "est_media": "1ラウンドあたり", "est_ceros": "両者ゼロ", "est_puntos": "ポイント", "est_dano": "与ダメージ（本）", "est_dano_r": "1Rの与ダメージ（本）", "est_golpes": "体力を削った回数", "est_golpes_r": "1Rのヒット数", "est_golpe_max": "最大の一撃（本）", "est_por_golpe": "1ヒットのダメージ（本）", "est_combos_r": "1Rのコンボ数", "est_combo_max": "最長コンボ（ヒット）", "est_combo_dano": "最大コンボダメージ（本）", "est_cargado": "スーパー満タン", "est_supers": "スーパー使用", "est_supers_r": "1Rのスーパー", "est_mareo": "相手をスタン", "est_mareo_t": "相手のスタン時間", "est_mareo_max": "最長スタン", "est_rondas": "勝ったラウンド", "est_tiempo": "時間切れ勝ち", "est_perfects": "パーフェクト", "est_primero": "先制ヒット（R）", "est_racha": "最長連勝（R）", "est_remontada": "最大の逆転", "est_vida": "勝利時の残り体力", "est_vida_m": "勝利時の残り体力（平均）", "est_limite": "ギリギリ勝ち", "est_pelea_corta": "最短の勝ち試合", "est_ronda_rapida": "最速ラウンド（タイマー）", "est_dur_media": "勝ちラウンドの平均時間", "est_pelea_media": "勝ち試合の平均時間",
    "p_set": "セット", "p_set_ayuda": "この試合の後のセットの状況", "car_izq": "左へ", "car_der": "右へ", "s_analisis_set": "セットの分析", "s_combate": "戦績", "s_promedios": "平均", "st_dmgronda": "1ラウンドの与ダメージ（平均）", "st_gameavg": "1戦勝利までの時間（平均）", "mas_detalle": "詳しく", "ap_desbloqueado": "解放済み", "j_ver_todos": "すべてのゲームを見る", "c_varios": "全ゲーム共通", "s_set": "セット", "s_peleas": "試合", "s_dano": "ダメージ", "s_combos": "コンボ", "s_supers": "スーパー", "s_mareos": "スタン", "s_tiempo": "時間", "s_pers": "キャラクター", "st_winpct": "ラウンド勝率", "st_peleapida": "最短で勝った試合", "st_vidaperd": "1ラウンドで失う体力（平均）", "st_duravg": "ラウンド勝利までの時間（平均）", "st_meterfull": "スーパーゲージが満タンになった回数", "st_supernom": "スーパー技の名前", "st_stuntime": "スタンしていた時間", "st_stunpeor": "最長のスタン時間", "st_dizzies": "相手をスタンさせた回数", "st_mareado": "スタンされた回数", "st_swaps": "キャラ変更", "dur_rondas": "各ラウンドの長さ", "nada_aqui": "この録画にはデータがありません",
    "cambios": "更新履歴", "t_cambios": "これまでにやったこと", "sub_cambios": "日ごとの変更と、ゲームについて分かったことのまとめ", "c_hallazgo": "発見", "c_añadido": "追加", "c_cambiado": "変更", "c_arreglado": "修正", "donar": "コーヒーを一杯", "ap_titulo": "Replay Lab が気に入りましたか？コーヒーを一杯", "ap_p1": "Replay Lab は、対戦を別の角度から分析し、保存し、見せるために作った個人プロジェクトです。リプレイを1本処理するたびに、時間・保存容量・回線・機材がかかります。", "ap_p2": "Replay Lab が役に立っている、あるいは自分の対戦を数字付きで見るのが楽しいと思ってもらえたら、コーヒー一杯で応援できます。☕🎮", "ap_p3": "その支援が Replay Lab を動かし続け、新しい機能・ゲーム・統計を増やす力になります。", "ap_nota": "応援ありがとうございます。コーヒー一杯が、この機械の電源を入れ続けます。❤️", "canal": "チャンネル",
    al_limite: "残り体力わずか", sin_cierre: "未完了のラウンド", sin_cierre_ayuda: "ゲームがこのラウンドを閉じていません。時間は目安です", dano: "ダメージ",
   vista: "表示", v_iconos: "大アイコン", v_miniaturas: "サムネイル", v_mosaico: "タイル", v_lista: "一覧", v_detalles: "詳細", orden: "並べ替え", o_fecha: "日付", o_duracion: "長さ", o_jugador: "プレイヤー", o_peleas: "試合数", videos: "本", rango: "ランク", sin_rango: "ランクなし", rondas_t: "ラウンド", resumen_rondas: "ラウンドごと", gana: "の勝ち", empate: "引き分け", por_ko: "KO", por_tiempo: "時間切れ", doble: "ダブルKO", dano_ronda: "ラウンドの与ダメージ", vida_restante: "残り", todo: "すべて", nada: "なし", filtrar: "絞り込み", st_golpes: "体力を削った回数", st_danomedio: "1回あたりのダメージ（平均）", st_golpemax: "最大の一撃", st_primero: "先に当てたラウンド", st_racha: "最多連続ラウンド勝利", st_rondas_jug: "ラウンド数", pie_datos: "試合そのものから読み取ったデータ", cargando: "読み込み中…",
    lema: "Fightcade のリプレイを記録して読み解く",
    buscar: "プレイヤーやキャラクターを検索…",
    sin_videos: "まだ動画がありません。",
    sin_resultados: "該当するものがありません。",
    no_publicado: "未公開の動画",
    no_publicado_sub: "下の記録は試合のログから出しています。",
    volver: "戻る",
    peleas: "試合", pelea: "試合", ronda: "ラウンド",
    linea: "タイムライン", saltos: "ジャンプ",
    resumen: "セット", combate: "戦績",     combo: "コンボ", super: "スーパー", mareo: "スタン", ko: "決着",
    perfect: "パーフェクト", remontada: "逆転", doble_ko: "ダブルKO",
    golpes: "ヒット", barras: "本（体力ゲージ）", seg: "秒", seg_reloj: "秒（ゲーム内タイマー）",
    st_peleas: "勝った試合", st_rondas: "ラウンド勝利",
    st_kotiempo: "KO勝ち / 時間切れ勝ち", st_perfects: "パーフェクト",
    st_dano: "与ダメージ", st_recibido: "被ダメージ",
    st_combos: "コンボ", st_combomax: "最長コンボ（ヒット数）", st_combodano: "最大ダメージのコンボ",
    st_supers: "スーパー使用", st_mareos: "スタンを奪った回数",
    st_rapida: "最短で勝ったラウンド", st_vida: "勝利時の残り体力（平均）",
    st_limite: "残り体力わずかで勝ったラウンド", st_remontada: "最大の逆転（体力差）",
    pie_hecho: "fcrec で作成", pie_fuente: "ソース",
    no_existe: "その動画が見つかりません。",
    s_resumen: "サマリー", s_analisis: "分析", r_destacados: "ハイライト",
    r_dif: "%s の差", r_igual: "互角", r_vidafin: "各ラウンド終了時の体力", r_remontada: "体力%s%差から逆転",
    r_seguidas: "%sラウンド連続", r_gana_set: "セット勝利", r_cero: "体力0で勝利", r_cero_ayuda: "スーパーターボでは体力0はKOではなく、まだ立っています。",
    p_de: "第%s戦 / 全%s戦", p_ant: "前の試合", p_sig: "次の試合",
    p_video: "動画で見る", p_set_tl: "セット全体", p_ley: "色：勝者 ・ 中央：その試合のラウンド ・ 下：セットのスコア。タップで詳細。",
    u_partida: "試合", u_pelea: "戦", u_peleas: "戦", ap_procesada: "試合を処理済み",
    n_enviar: "リプレイを送る", n_pronto: "近日", e_titulo: "リプレイを送ろう",
    e_sub: "FightcadeのリプレイのリンクをはるとReplay Labが録画・分析し、統計つきで公開します。", e_aviso: "まだ使えません。準備中で、公開されたらここでお知らせします。", e_campo: "リプレイのリンク",
    e_boton: "送信", e_como: "使い方", e_p1: "Fightcadeのリプレイのリンクをはる。",
    e_p2: "ゲームが対応しているか、すでに公開済みでないかを確認。", e_p3: "試合が順番待ちに入る。", e_p4: "オーバーレイつきで録画し、統計を計算。",
    e_p5: "「試合」とYouTubeチャンネルに公開。", e_juegos: "送れるゲーム", ap_viene: "今後の予定",
    ap_enviar: "コミュニティからリプレイを受け付ける", ap_en_curso: "準備中",
    c_todo: "すべて", c_web: "ウェブ", c_juegos: "ゲーム",
    c_web_d: "replayLabで見えるもの：ページ・統計・ナビゲーション。", c_juego_d: "各ゲーム側：オーバーレイ・録画・試合から分かったこと・動画。",
    n_inicio: "ホーム", n_partidas: "試合", n_juegos: "ゲーム", n_canal: "チャンネル",
    n_cambios: "更新履歴", n_apoya: "プロジェクトを支援", n_github: "GitHub", n_menu: "メニュー",
    pie_indep: "個人プロジェクト", h_titulo: "格闘ゲームの対戦分析", h_texto: "Fightcadeのリプレイを録画し、ラウンド・コンボ・スーパーをゲームから直接読み取って分析します。", h_ver: "試合を見る",
    h_juegos: "分析対象のゲーム", h_ultimas: "最新の試合", h_todas: "すべて見る", j_sub: "Replay Labは格闘ゲームを分析します。ゲームごとに専用のページがあります。",
    j_pelea: "格闘ゲーム", j_disp: "対応中", j_prox: "近日対応", j_entrar: "開く",
    u_partidas: "試合", g_jugadores: "プレイヤー", g_stats: "統計", g_analisis: "分析を見る",
    g_jugadas: "試合数", g_ganadas: "勝った試合", g_tiempo: "プレイ時間", g_njug: "プレイヤー数",
    g_npers: "使用キャラクター数", g_apar: "使用回数", g_sin: "このゲームの試合はまだありません。", g_noexiste: "そのゲームはReplay Labにありません。",
    p_todos: "すべてのゲーム", ap_intro: "Replay Labは個人で運営しているプロジェクトです。ここにある試合はすべて自前の機材で録画・処理・公開しています。", ap_cuesta: "運営に必要なもの", ap_c1: "処理：リプレイの録画と分析",
    ap_c2: "保存：各試合の動画とデータ", ap_c3: "回線：動画のアップロードとサイトの配信", ap_c4: "電気代：録画と処理にかかる時間", ap_c5: "保守：すべてを動かし続けること",
    ap_c6: "開発：新しい統計と機能", ap_c7: "新しいゲーム：各ゲームのデータの仕組みを解析すること", ap_progreso: "Replay Labの進捗", ap_procesadas: "試合を処理済み",
    ap_siguiente: "次の目標", ap_proximo: "次のプロジェクト目標", ap_incorporar: "%sに対応", ap_logros: "Replay Labの実績",
    ap_logros_sub: "実績は支援者ではなくプロジェクトのものです。サイトの実際のデータから自動で解除されます。", ap_ok: "達成", ap_no: "未達成", ap_compacto: "Replay Labは個人プロジェクトです。役に立ったら応援してください。",
    ap_como: "支援の使い道", l_primero: "最初のリプレイを処理", l_n: "%s試合を分析", l_rondas: "%sラウンドを分析",
    l_juego1: "最初のゲームに対応", l_juego2: "2つ目のゲームに対応",
  },
  zh: {
    "est_titulo": "数据统计", "est_set": "整场对局", "est_total": "合计", "est_media": "每回合", "est_ceros": "双方均为零", "est_puntos": "点", "est_dano": "造成伤害（条血）", "est_dano_r": "每回合伤害（条血）", "est_golpes": "掉血命中次数", "est_golpes_r": "每回合命中", "est_golpe_max": "最重一击（条血）", "est_por_golpe": "每击伤害（条血）", "est_combos_r": "每回合连招", "est_combo_max": "最长连招（击）", "est_combo_dano": "最强连招（条血）", "est_cargado": "超必满槽", "est_supers": "超必释放", "est_supers_r": "每回合超必", "est_mareo": "使对手眩晕", "est_mareo_t": "对手眩晕时长", "est_mareo_max": "最长眩晕", "est_rondas": "赢下回合", "est_tiempo": "超时获胜回合", "est_perfects": "完美胜利", "est_primero": "先手命中（回合）", "est_racha": "最长连胜（回合）", "est_remontada": "最大逆转", "est_vida": "获胜时剩余血量", "est_vida_m": "获胜剩余血量（平均）", "est_limite": "残血获胜回合", "est_pelea_corta": "最短获胜对局", "est_ronda_rapida": "最快回合（游戏计时）", "est_dur_media": "每赢一回合用时", "est_pelea_media": "每赢一局用时",
    "p_set": "整场", "p_set_ayuda": "这一局之后的整场比分", "car_izq": "向左", "car_der": "向右", "s_analisis_set": "整场分析", "s_combate": "战斗", "s_promedios": "平均", "st_dmgronda": "每回合伤害（平均）", "st_gameavg": "赢下一局的用时（平均）", "mas_detalle": "更多细节", "ap_desbloqueado": "已解锁", "j_ver_todos": "查看全部游戏", "c_varios": "所有游戏", "s_set": "整场", "s_peleas": "对局", "s_dano": "伤害", "s_combos": "连段", "s_supers": "超必杀", "s_mareos": "眩晕", "s_tiempo": "时间", "s_pers": "角色", "st_winpct": "回合胜率", "st_peleapida": "最短获胜局", "st_vidaperd": "每回合损失血量（平均）", "st_duravg": "赢下一回合的用时（平均）", "st_meterfull": "超必杀槽集满次数", "st_supernom": "超必杀名称", "st_stuntime": "被晕时长", "st_stunpeor": "最长被晕时间", "st_dizzies": "打晕对手次数", "st_mareado": "被打晕次数", "st_swaps": "更换角色", "dur_rondas": "每回合时长", "nada_aqui": "本次录制没有数据",
    "cambios": "更新日志", "t_cambios": "我们做了什么", "sub_cambios": "按日期整理的改动，以及我们对游戏的发现", "c_hallazgo": "发现", "c_añadido": "新增", "c_cambiado": "改动", "c_arreglado": "修复", "donar": "请我喝杯咖啡", "ap_titulo": "喜欢 Replay Lab 吗？请我喝杯咖啡", "ap_p1": "Replay Lab 是一个独立项目，用另一种方式分析、保存和呈现对战记录。处理每一场回放都要花时间、存储、带宽和维持项目运转的资源。", "ap_p2": "如果 Replay Lab 对你有用，或者你只是喜欢看带数据的自己的对战，可以请我喝杯咖啡来支持这个项目。☕🎮", "ap_p3": "你的支持让 Replay Lab 继续运转，也让新功能、新游戏和新统计得以不断加入。", "ap_nota": "谢谢你支持这个项目。每一杯咖啡都让这台机器继续开着。❤️", "canal": "频道",
    al_limite: "残血", sin_cierre: "未完成回合", sin_cierre_ayuda: "游戏没有结束这一回合，时间为近似值", dano: "伤害",
   vista: "视图", v_iconos: "大图标", v_miniaturas: "缩略图", v_mosaico: "平铺", v_lista: "列表", v_detalles: "详细信息", orden: "排序", o_fecha: "日期", o_duracion: "时长", o_jugador: "选手", o_peleas: "对局数", videos: "个视频", rango: "段位", sin_rango: "无段位", rondas_t: "回合", resumen_rondas: "逐回合", gana: "获胜", empate: "平局", por_ko: "KO", por_tiempo: "时间到", doble: "双方KO", dano_ronda: "本回合伤害", vida_restante: "剩余", todo: "全部", nada: "无", filtrar: "筛选", st_golpes: "造成伤害次数", st_danomedio: "每次伤害（平均）", st_golpemax: "最重的一击", st_primero: "先命中的回合", st_racha: "最多连胜回合", st_rondas_jug: "回合数", pie_datos: "数据来自对局本身", cargando: "加载中…",
    lema: "Fightcade 录像，录下来并讲清楚",
    buscar: "搜索选手或角色…",
    sin_videos: "还没有视频。",
    sin_resultados: "没有匹配的结果。",
    no_publicado: "视频未发布",
    no_publicado_sub: "下面的数据仍然来自对局记录。",
    volver: "返回",
    peleas: "对局", pelea: "对局", ronda: "回合",
    linea: "时间轴", saltos: "跳转到",
    resumen: "整场", combate: "战斗",     combo: "连段", super: "超必杀", mareo: "眩晕", ko: "终结",
    perfect: "完美胜利", remontada: "逆转", doble_ko: "双方KO",
    golpes: "段", barras: "条血", seg: "秒", seg_reloj: "秒（游戏计时）",
    st_peleas: "获胜局数", st_rondas: "获胜回合",
    st_kotiempo: "KO 胜 / 时间胜", st_perfects: "完美胜利",
    st_dano: "造成伤害", st_recibido: "承受伤害",
    st_combos: "连段", st_combomax: "最长连段（击数）", st_combodano: "伤害最高的连段",
    st_supers: "超必杀发动", st_mareos: "打晕对手次数",
    st_rapida: "最短获胜回合", st_vida: "获胜时剩余血量（平均）",
    st_limite: "残血获胜回合", st_remontada: "最大逆转（血量落后）",
    pie_hecho: "由 fcrec 制作", pie_fuente: "源码",
    no_existe: "找不到这个视频。",
    s_resumen: "概要", s_analisis: "详细分析", r_destacados: "精彩时刻",
    r_dif: "领先 %s", r_igual: "持平", r_vidafin: "每回合结束时血量", r_remontada: "逆转 %s% 血量劣势",
    r_seguidas: "连胜 %s 回合", r_gana_set: "赢得整场", r_cero: "0% 血量获胜", r_cero_ayuda: "在 Super Turbo 中血量为 0 并不算 KO，角色仍然站着。",
    p_de: "第 %s 局 / 共 %s 局", p_ant: "上一局", p_sig: "下一局",
    p_video: "在视频中观看", p_set_tl: "整场对局", p_ley: "颜色：胜者 · 中间：该局回合比分 · 下方：整场比分。点击查看详情。",
    u_partida: "场对局", u_pelea: "局", u_peleas: "局", ap_procesada: "场对局已处理",
    n_enviar: "提交回放", n_pronto: "即将", e_titulo: "提交你的回放",
    e_sub: "粘贴 Fightcade 回放链接，Replay Lab 会录制、分析并连同全部统计一起发布。", e_aviso: "暂时还不能使用。我们正在准备，开放时会在这里通知。", e_campo: "回放链接",
    e_boton: "提交", e_como: "使用方法", e_p1: "粘贴 Fightcade 回放链接。",
    e_p2: "检查游戏是否受支持、对局是否已发布。", e_p3: "对局进入队列。", e_p4: "带叠加层录制并计算统计。",
    e_p5: "出现在「对局」和 YouTube 频道。", e_juegos: "可提交的游戏", ap_viene: "接下来",
    ap_enviar: "让社区可以提交回放", ap_en_curso: "筹备中",
    c_todo: "全部", c_web: "网站", c_juegos: "游戏",
    c_web_d: "replayLab 上能看到的：页面、统计、导航。", c_juego_d: "各游戏相关：叠加层、录制、对局中的发现以及视频。",
    n_inicio: "首页", n_partidas: "对局", n_juegos: "游戏", n_canal: "频道",
    n_cambios: "更新日志", n_apoya: "支持项目", n_github: "GitHub", n_menu: "菜单",
    pie_indep: "独立项目", h_titulo: "格斗游戏对局分析", h_texto: "录制 Fightcade 回放，每个回合、连段和超必杀都直接从游戏中读取。", h_ver: "浏览对局",
    h_juegos: "我们分析的游戏", h_ultimas: "最新对局", h_todas: "查看全部", j_sub: "Replay Lab 专注于格斗游戏，每个游戏都有自己的页面。",
    j_pelea: "格斗游戏", j_disp: "已支持", j_prox: "即将支持", j_entrar: "进入",
    u_partidas: "场对局", g_jugadores: "玩家", g_stats: "统计", g_analisis: "查看分析",
    g_jugadas: "对局数", g_ganadas: "获胜局数", g_tiempo: "对战时长", g_njug: "不同玩家",
    g_npers: "使用角色数", g_apar: "被选次数", g_sin: "该游戏暂无对局。", g_noexiste: "Replay Lab 暂无该游戏。",
    p_todos: "全部游戏", ap_intro: "Replay Lab 是一个独立项目。你在这里看到的每场对局都是在自己的机器上录制、处理并发布的。", ap_cuesta: "维持项目需要什么", ap_c1: "处理：录制并分析每个回放",
    ap_c2: "存储：每场对局的视频和数据", ap_c3: "网络：上传视频并提供网站服务", ap_c4: "电费：录制和处理所需的时长", ap_c5: "维护：让一切持续运转",
    ap_c6: "开发：新的统计和功能", ap_c7: "新游戏：弄清每个游戏如何存储数据", ap_progreso: "Replay Lab 进度", ap_procesadas: "场对局已处理",
    ap_siguiente: "下一个里程碑", ap_proximo: "项目的下一个目标", ap_incorporar: "支持 %s", ap_logros: "Replay Lab 成就",
    ap_logros_sub: "成就属于项目本身，而不是支持者。它们根据网站的真实数据自动解锁。", ap_ok: "已达成", ap_no: "未达成", ap_compacto: "Replay Lab 是独立项目。如果对你有帮助，欢迎支持。",
    ap_como: "如何帮助", l_primero: "处理第一个回放", l_n: "分析 %s 场对局", l_rondas: "分析 %s 个回合",
    l_juego1: "支持第一个游戏", l_juego2: "支持第二个游戏",
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
// singular o plural según el número: "1 partida", "8 peleas"
const pl = (n, uno, varios) => T(n === 1 ? uno : varios);
async function json(url) {
  const r = await fetch(url, { cache: "no-cache" });
  if (!r.ok) throw new Error(url + " → " + r.status);
  return r.json();
}
let SITIO = null;
let JUEGOS = [];

/* ---------------------------------------------------------------- juegos
   El registro vive en datos/juegos.json. Una partida pertenece al juego cuyo lista de
   gameids incluye el suyo: así SSF2X y SSF2T son el mismo juego, y añadir 3rd Strike es
   añadir una entrada al JSON, no tocar código. */
const juegoPorId = id => JUEGOS.find(j => j.id === id) || null;
const juegoDe = v => JUEGOS.find(j => (j.gameids || []).includes(v.juego)) || null;
const juegosActivos = () => JUEGOS.filter(j => j.estado === "activo");
const hrefJuego = j => `juego.html?id=${encodeURIComponent(j.id)}`;

/* ---------------------------------------------------------------- cabecera
   Se monta UNA vez (así el selector de idioma no pierde su evento) y los textos se
   repintan en cada cambio de idioma con textosCabecera(). */
let PAGINA = "";
function montaCabecera(activa, alCambiarIdioma) {
  PAGINA = activa;
  const cab = document.getElementById("cabsitio");
  cab.innerHTML = `<div class="wrap hrow">
      <a class="logo" href="./">🎮 replay<b>Lab</b></a>
      <button class="menu-btn" id="menu-btn" aria-expanded="false" aria-controls="nav">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>
        <span id="menu-txt"></span></button>
      <nav class="nav" id="nav"></nav>
      <select id="idioma" aria-label="idioma"></select>
    </div>`;
  const btn = document.getElementById("menu-btn");
  btn.onclick = () => {
    const abierto = cab.classList.toggle("abierto");
    btn.setAttribute("aria-expanded", abierto);
  };
  montaIdiomas(document.getElementById("idioma"), alCambiarIdioma);
  textosCabecera();
}
function textosCabecera() {
  const s = SITIO || {};
  const ext = `target="_blank" rel="noopener"`;
  const flecha = `<span class="ext" aria-hidden="true">↗</span>`;
  const item = (k, href, texto, extra = "") =>
    `<a href="${esc(href)}" data-k="${k}"${PAGINA === k ? ' aria-current="page"' : ""} ${extra}>${texto}</a>`;
  document.getElementById("nav").innerHTML = [
    item("inicio", "./", esc(T("n_inicio"))),
    item("partidas", "partidas.html", esc(T("n_partidas"))),
    item("juegos", "juegos.html", esc(T("n_juegos"))),
    item("enviar", "enviar.html", esc(T("n_enviar")) + `<span class="pronto">${esc(T("n_pronto"))}</span>`),
    s.canal ? item("canal", s.canal, esc(T("n_canal")) + flecha, ext) : "",
    item("cambios", "cambios.html", esc(T("n_cambios"))),
    item("apoyo", "apoyo.html", "☕ " + esc(T("n_apoya")), 'class="apoya"'),
    item("github", s.github || "https://github.com/demonioDeb/replayLab", esc(T("n_github")) + flecha, ext),
  ].join("");
  document.getElementById("menu-txt").textContent = T("n_menu");
  ajustaCabecera();
}
// ¿Caben los enlaces en una línea con este idioma y este ancho? Se mide, no se supone.
function ajustaCabecera() {
  const cab = document.getElementById("cabsitio");
  if (!cab) return;
  const fila = cab.querySelector(".hrow");
  cab.classList.remove("plegada");
  cab.classList.add("midiendo");
  const cabe = fila.scrollWidth <= fila.clientWidth + 1;
  cab.classList.remove("midiendo");
  cab.classList.toggle("plegada", !cabe);
  if (cabe) cab.classList.remove("abierto");
}
let _cabT = 0;
addEventListener("resize", () => { clearTimeout(_cabT); _cabT = setTimeout(ajustaCabecera, 80); });
// la tipografía puede llegar después del primer pintado y cambiar lo que ocupa
if (document.fonts) document.fonts.ready.then(() => ajustaCabecera());

/* ---------------------------------------------------------------- pie
   Sólo lo secundario. Los enlaces viven en la cabecera y no se repiten aquí. */
function pintaPie(el) {
  el = el || document.getElementById("pie");
  if (!el) return;
  el.innerHTML = `<span>© ${new Date().getFullYear()} Replay Lab</span><span>·</span>
    <span>${esc(T("pie_indep"))}</span><span>·</span><span>${esc(T("pie_datos"))}</span>
    <span class="sp"></span><span>${esc(T("pie_hecho"))}</span>`;
}

/* ---------------------------------------------------------------- apoyo
   La página entera está en apoyo.html. Aquí sólo hay una franja compacta para el final
   de la portada y de cada partida: una línea y dos botones, nada de banner. Sale sólo
   si datos/sitio.json trae la donación activa. */
function franjaApoyo() {
  const d = (SITIO || {}).donacion || {};
  if (!d.activo || !d.url) return "";
  return `<aside class="franja-apoyo">
      <span class="fa-txt">☕ ${esc(T("ap_compacto"))}</span>
      <a class="fa-mas" href="apoyo.html">${esc(T("ap_como"))}</a>
      <a class="cafe-btn chico" href="${esc(d.url)}" target="_blank" rel="noopener">☕ ${esc(T("donar"))}</a>
    </aside>`;
}
/* Repintar sin saltos. Al cambiar de pestaña o de vista el contenido cambia de alto; si
   encoge y estabas abajo, el navegador te subía de golpe. Antes de repintar, <main> se
   queda con el alto justo para que lo que ves no se mueva; si el contenido nuevo es más
   largo, manda el contenido. El botón pulsado (sel) se queda en el mismo sitio. */
function sinSalto(repinta, sel) {
  const main = document.querySelector("main");
  const ref = sel ? document.querySelector(sel) : null;
  const antes = ref ? ref.getBoundingClientRect().top : null;
  if (main) {
    const resto = document.documentElement.scrollHeight - main.getBoundingClientRect().height;
    main.style.minHeight = Math.max(0, scrollY + innerHeight - resto) + "px";
  }
  repinta();
  const ahora = sel ? document.querySelector(sel) : null;
  if (ahora && antes != null) {
    const d = ahora.getBoundingClientRect().top - antes;
    if (Math.abs(d) > 1) scrollBy(0, d);
  }
}
function pintaApoyo() {
  const el = document.getElementById("apoyo");
  if (el) el.innerHTML = franjaApoyo();
}

/* ---------------------------------------------------------------- datos comunes
   sitio.json (canal, donación, github) y juegos.json se leen una vez. Si falta alguno
   la página sale igual, sin esos enlaces o con la lista de juegos vacía. */
function cargaBase(alLlegar) {
  return Promise.all([
    json("datos/sitio.json").then(d => { SITIO = d; }).catch(() => {}),
    json("datos/juegos.json").then(d => { JUEGOS = d.juegos || []; }).catch(() => {}),
  ]).then(() => { alLlegar && alLlegar(); });
}
// compatibilidad con lo que ya llamaba a esto
const cargaSitio = cargaBase;

/* El idioma y la vista se recuerdan por navegador. Envuelto en try porque en modo
   privado leer localStorage puede lanzar, y eso no debe tirar la página. */
function recuerda(clave, valor) { guarda("replaylab." + clave, valor); }
function recordado(clave, porDefecto) { return guardado("replaylab." + clave) || porDefecto; }

/* ---------------------------------------------------------------- rejilla viva
   La rejilla de puntos del fondo reacciona al ratón como un imán: los puntos cercanos
   se acercan al cursor y se encienden, y al irse vuelven a su sitio con un muelle.
   Se dibuja en un <canvas> fijo detrás de todo, en las mismas posiciones que la
   rejilla de CSS, que se apaga en cuanto el canvas arranca (html.rejilla-viva).
   No arranca —y se queda la rejilla quieta de CSS— si:
   - la persona pidió menos movimiento en su sistema (prefers-reduced-motion);
   - no hay ratón (móviles y tabletas: no hay cursor que seguir).
   Sólo anima mientras algo se mueve: con el ratón quieto no gasta nada. */
(function rejillaViva() {
  if (!window.matchMedia) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const PASO = 24, RADIO = 180, TIRON = 16, MUELLE = 0.16;
  const cv = document.createElement("canvas");
  cv.id = "rejilla"; cv.setAttribute("aria-hidden", "true");
  let ctx, w = 0, h = 0, dpr = 1, cols = 0, filas = 0;
  let dx, dy, luz;                     // desplazamiento y brillo actuales de cada punto
  let mx = -9999, my = -9999, activo = false, raf = 0;

  function mide() {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    w = innerWidth; h = innerHeight;
    cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    ctx = cv.getContext("2d"); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(w / PASO) + 1; filas = Math.ceil(h / PASO) + 1;
    dx = new Float32Array(cols * filas); dy = new Float32Array(cols * filas);
    luz = new Float32Array(cols * filas);
    pide();
  }
  function paso() {
    raf = 0;
    ctx.clearRect(0, 0, w, h);
    let vivo = false;
    for (let j = 0; j < filas; j++) {
      const y0 = PASO / 2 + j * PASO;
      for (let i = 0; i < cols; i++) {
        const k = j * cols + i, x0 = PASO / 2 + i * PASO;
        let tx = 0, ty = 0, tl = 0;
        if (activo) {
          const ex = mx - x0, ey = my - y0, d = Math.hypot(ex, ey);
          if (d < RADIO && d > 0.01) {
            const f = (1 - d / RADIO) ** 2;
            tx = ex / d * f * TIRON; ty = ey / d * f * TIRON; tl = f;
          }
        }
        dx[k] += (tx - dx[k]) * MUELLE; dy[k] += (ty - dy[k]) * MUELLE; luz[k] += (tl - luz[k]) * MUELLE;
        if (Math.abs(tx - dx[k]) > 0.05 || Math.abs(ty - dy[k]) > 0.05 || Math.abs(tl - luz[k]) > 0.01) vivo = true;
        const l = luz[k];
        // el mismo gris-azulado de la rejilla de CSS; cerca del cursor, hacia el dorado
        ctx.fillStyle = l > 0.02
          ? `rgba(${148 + 107 * l | 0},${166 + 37 * l | 0},${204 - 135 * l | 0},${0.16 + 0.72 * l})`
          : "rgba(148,166,204,.16)";
        const r = 1 + l * 1.6;
        ctx.fillRect(x0 + dx[k] - r, y0 + dy[k] - r, r * 2, r * 2);
      }
    }
    if (vivo) pide();                  // con todo quieto, se para: no gasta nada
  }
  const pide = () => { if (!raf && !document.hidden) raf = requestAnimationFrame(paso); };

  addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse") return;
    mx = e.clientX; my = e.clientY; activo = true; pide();
  }, { passive: true });
  document.addEventListener("pointerleave", () => { activo = false; pide(); });
  addEventListener("blur", () => { activo = false; pide(); });
  addEventListener("resize", mide);
  document.addEventListener("visibilitychange", pide);

  const arranca = () => {
    document.body.prepend(cv);
    document.documentElement.classList.add("rejilla-viva");
    mide();
  };
  if (document.body) arranca(); else document.addEventListener("DOMContentLoaded", arranca);
})();
