/* replayLab — lo común a las dos páginas: idiomas, carga de datos y ayudas.
   Regla heredada de fcrec: ningún texto se escribe a pelo en el HTML, todo pasa por
   el diccionario. Así añadir un idioma es añadir un bloque, no repasar el sitio. */
"use strict";

const I18N = {
  es: {
    "s_set": "El set", "s_peleas": "Peleas", "s_dano": "Daño", "s_combos": "Combos", "s_supers": "Súpers", "s_mareos": "Mareos", "s_tiempo": "Tiempo", "s_pers": "Personajes", "s_emu": "Emulador", "s_def": "Defensa", "st_winpct": "Porcentaje", "st_peleapida": "Su pelea más rápida", "st_vidaperd": "Vida perdida por ronda", "st_duravg": "Duración de ronda", "st_meterfull": "Veces que llenó la barra", "st_supernom": "Su súper", "st_stuntime": "Tiempo mareado", "st_stunpeor": "Su mareo más largo", "st_dizzies": "Mareos que provocó", "st_mareado": "Veces que lo marearon", "st_swaps": "Cambios de personaje", "st_conect": "Golpes que conectaron", "st_bloq": "Golpes que le bloquearon", "st_bloqueo": "Golpes que bloqueó", "st_defensa": "Bloqueó el", "st_primero": "Pegó primero", "emu_nota": "Datos que reporta el propio emulador, no calculados por replayLab", "dur_rondas": "Duración de cada ronda", "nada_aqui": "Sin datos en esta grabación",
    "cambios": "Cambios", "t_cambios": "Lo que fuimos haciendo", "sub_cambios": "Resumen por día de los cambios y de lo que fuimos descubriendo del juego", "c_hallazgo": "Hallazgo", "c_añadido": "Nuevo", "c_cambiado": "Cambio", "c_arreglado": "Arreglo", "donar": "Invítame un café", "ap_titulo": "¿Te gusta Replay Lab? Invítame un café", "ap_p1": "Replay Lab es un proyecto independiente creado para analizar, conservar y presentar partidas de videojuegos de una manera diferente. Procesar cada replay implica tiempo, almacenamiento, internet y recursos para mantener el proyecto funcionando.", "ap_p2": "Si Replay Lab te resulta útil o simplemente disfrutas viendo tus partidas con estadísticas, puedes apoyar el proyecto invitándome un café. ☕🎮", "ap_p3": "Tu apoyo ayuda a mantener Replay Lab funcionando y a seguir agregando nuevas funciones, juegos y estadísticas.", "ap_nota": "Gracias por apoyar el proyecto. Cada café ayuda a mantener la máquina encendida. ❤️", "canal": "Canal",
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
    s_resumen: "Resumen", s_analisis: "Análisis", s_tecnico: "Detalle técnico", r_destacados: "Momentos destacados",
    r_dif: "%s de diferencia", r_igual: "Igualados", r_vidafin: "Vida al final de cada ronda", r_remontada: "%s % abajo → victoria",
    r_seguidas: "%s rondas seguidas", r_gana_set: "gana el set", r_cero: "a 0 % y en pie", r_cero_ayuda: "En Super Turbo quedarse a cero de vida no es KO: sigue en pie.",
    u_partida: "partida", u_pelea: "pelea", u_peleas: "peleas", ap_procesada: "partida procesada",
    n_inicio: "Inicio", n_partidas: "Partidas", n_juegos: "Juegos", n_canal: "Canal",
    n_cambios: "Changelog", n_apoya: "Apoya el proyecto", n_github: "GitHub", n_menu: "Menú",
    pie_indep: "Proyecto independiente", h_titulo: "Análisis de partidas de juegos de pelea", h_texto: "Replays de Fightcade grabados, con cada ronda, combo y súper leídos directamente del juego.", h_ver: "Ver partidas",
    h_juegos: "Juegos que analizamos", h_ultimas: "Últimas partidas", h_todas: "Ver todas", j_sub: "Replay Lab analiza juegos de pelea. Cada juego tiene su propio espacio.",
    j_pelea: "Juegos de pelea", j_disp: "Disponible", j_prox: "Próximamente", j_entrar: "Entrar",
    u_partidas: "partidas", g_jugadores: "Jugadores", g_stats: "Estadísticas", g_analisis: "Ver análisis",
    g_jugadas: "Partidas jugadas", g_ganadas: "Peleas ganadas", g_tiempo: "Tiempo de juego", g_njug: "Jugadores distintos",
    g_npers: "Personajes usados", g_apar: "Apariciones", g_sin: "Todavía no hay partidas de este juego.", g_noexiste: "Ese juego no está en Replay Lab.",
    p_todos: "Todos los juegos", ap_intro: "Replay Lab es un proyecto independiente. Cada partida que ves aquí se grabó, se procesó y se publicó en un equipo propio.", ap_cuesta: "Lo que cuesta mantenerlo", ap_c1: "Procesamiento: grabar y analizar cada replay",
    ap_c2: "Almacenamiento: vídeos y datos de cada partida", ap_c3: "Internet: subir los vídeos y servir la web", ap_c4: "Electricidad: horas de grabación y de proceso", ap_c5: "Mantenimiento: que todo siga funcionando",
    ap_c6: "Desarrollo: nuevas estadísticas y funciones", ap_c7: "Nuevos juegos: descifrar cómo guarda cada juego sus datos", ap_progreso: "Progreso de Replay Lab", ap_procesadas: "partidas procesadas",
    ap_siguiente: "Siguiente hito", ap_proximo: "Próximo objetivo del proyecto", ap_incorporar: "Incorporar %s", ap_logros: "Logros de Replay Lab",
    ap_logros_sub: "Los logros son del proyecto, no de quien lo apoya. Se desbloquean solos, con los datos reales del sitio.", ap_ok: "Conseguido", ap_no: "Por conseguir", ap_compacto: "Replay Lab es independiente. Si te sirve, puedes apoyarlo.",
    ap_como: "Cómo ayuda", l_primero: "Primer replay procesado", l_n: "%s partidas analizadas", l_rondas: "%s rondas analizadas",
    l_juego1: "Primer juego incorporado", l_juego2: "Segundo juego incorporado",
  },
  en: {
    "s_set": "The set", "s_peleas": "Matches", "s_dano": "Damage", "s_combos": "Combos", "s_supers": "Supers", "s_mareos": "Dizzies", "s_tiempo": "Time", "s_pers": "Characters", "s_emu": "Emulator", "s_def": "Defence", "st_winpct": "Win rate", "st_peleapida": "Fastest match", "st_vidaperd": "Health lost per round", "st_duravg": "Round length", "st_meterfull": "Times the meter filled", "st_supernom": "Their super", "st_stuntime": "Time dizzy", "st_stunpeor": "Longest dizzy", "st_dizzies": "Dizzies they caused", "st_mareado": "Times they were dizzied", "st_swaps": "Character switches", "st_conect": "Hits that landed", "st_bloq": "Hits that got blocked", "st_bloqueo": "Hits they blocked", "st_defensa": "Blocked", "st_primero": "First hit", "emu_nota": "Figures reported by the emulator itself, not computed by replayLab", "dur_rondas": "Length of each round", "nada_aqui": "No data in this recording",
    "cambios": "Changes", "t_cambios": "What we've been doing", "sub_cambios": "A day-by-day summary of the changes and of what we kept finding out about the game", "c_hallazgo": "Finding", "c_añadido": "New", "c_cambiado": "Change", "c_arreglado": "Fix", "donar": "Buy me a coffee", "ap_titulo": "Enjoying Replay Lab? Buy me a coffee", "ap_p1": "Replay Lab is an independent project built to analyse, preserve and present game matches in a different way. Processing every replay takes time, storage, bandwidth and the machines that keep it running.", "ap_p2": "If Replay Lab is useful to you, or you simply enjoy watching your own matches with stats, you can support the project by buying me a coffee. ☕🎮", "ap_p3": "Your support keeps Replay Lab running and helps add new features, games and stats.", "ap_nota": "Thanks for supporting the project. Every coffee helps keep the machine on. ❤️", "canal": "Channel",
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
    s_resumen: "Summary", s_analisis: "Analysis", s_tecnico: "Technical detail", r_destacados: "Highlights",
    r_dif: "%s ahead", r_igual: "Level", r_vidafin: "Health at the end of each round", r_remontada: "%s% down → win",
    r_seguidas: "%s rounds in a row", r_gana_set: "wins the set", r_cero: "0% and standing", r_cero_ayuda: "In Super Turbo, hitting zero health is not a KO: they are still standing.",
    u_partida: "match", u_pelea: "game", u_peleas: "games", ap_procesada: "match processed",
    n_inicio: "Home", n_partidas: "Matches", n_juegos: "Games", n_canal: "Channel",
    n_cambios: "Changelog", n_apoya: "Support the project", n_github: "GitHub", n_menu: "Menu",
    pie_indep: "Independent project", h_titulo: "Fighting game match analysis", h_texto: "Fightcade replays, recorded, with every round, combo and super read straight from the game.", h_ver: "Browse matches",
    h_juegos: "Games we analyse", h_ultimas: "Latest matches", h_todas: "See all", j_sub: "Replay Lab analyses fighting games. Each game has its own space.",
    j_pelea: "Fighting games", j_disp: "Available", j_prox: "Coming soon", j_entrar: "Open",
    u_partidas: "matches", g_jugadores: "Players", g_stats: "Stats", g_analisis: "View analysis",
    g_jugadas: "Matches played", g_ganadas: "Fights won", g_tiempo: "Time played", g_njug: "Different players",
    g_npers: "Characters used", g_apar: "Appearances", g_sin: "No matches for this game yet.", g_noexiste: "That game is not on Replay Lab.",
    p_todos: "All games", ap_intro: "Replay Lab is an independent project. Every match you see here was recorded, processed and published on our own machine.", ap_cuesta: "What it takes to keep it running", ap_c1: "Processing: recording and analysing every replay",
    ap_c2: "Storage: videos and data for every match", ap_c3: "Bandwidth: uploading videos and serving the site", ap_c4: "Power: hours of recording and processing", ap_c5: "Maintenance: keeping everything working",
    ap_c6: "Development: new stats and features", ap_c7: "New games: working out how each game stores its data", ap_progreso: "Replay Lab progress", ap_procesadas: "matches processed",
    ap_siguiente: "Next milestone", ap_proximo: "Next project goal", ap_incorporar: "Add %s", ap_logros: "Replay Lab milestones",
    ap_logros_sub: "These milestones belong to the project, not to its supporters. They unlock on their own, from the site's real data.", ap_ok: "Unlocked", ap_no: "Locked", ap_compacto: "Replay Lab is independent. If it's useful to you, you can support it.",
    ap_como: "How it helps", l_primero: "First replay processed", l_n: "%s matches analysed", l_rondas: "%s rounds analysed",
    l_juego1: "First game added", l_juego2: "Second game added",
  },
  pt: {
    "s_set": "O set", "s_peleas": "Lutas", "s_dano": "Dano", "s_combos": "Combos", "s_supers": "Súpers", "s_mareos": "Atordoamentos", "s_tiempo": "Tempo", "s_pers": "Personagens", "s_emu": "Emulador", "s_def": "Defesa", "st_winpct": "Porcentagem", "st_peleapida": "Luta mais rápida", "st_vidaperd": "Vida perdida por round", "st_duravg": "Duração do round", "st_meterfull": "Vezes que encheu a barra", "st_supernom": "Seu súper", "st_stuntime": "Tempo atordoado", "st_stunpeor": "Atordoamento mais longo", "st_dizzies": "Atordoamentos que causou", "st_mareado": "Vezes que foi atordoado", "st_swaps": "Trocas de personagem", "st_conect": "Golpes acertados", "st_bloq": "Golpes bloqueados pelo rival", "st_bloqueo": "Golpes que bloqueou", "st_defensa": "Bloqueou", "st_primero": "Acertou primeiro", "emu_nota": "Dados do próprio emulador, não calculados pelo replayLab", "dur_rondas": "Duração de cada round", "nada_aqui": "Sem dados nesta gravação",
    "cambios": "Mudanças", "t_cambios": "O que fomos fazendo", "sub_cambios": "Resumo por dia das mudanças e do que fomos descobrindo do jogo", "c_hallazgo": "Descoberta", "c_añadido": "Novo", "c_cambiado": "Mudança", "c_arreglado": "Correção", "donar": "Me pague um café", "ap_titulo": "Gosta do Replay Lab? Me pague um café", "ap_p1": "O Replay Lab é um projeto independente criado para analisar, preservar e apresentar partidas de videogame de um jeito diferente. Processar cada replay exige tempo, armazenamento, internet e recursos para manter o projeto no ar.", "ap_p2": "Se o Replay Lab te é útil ou você simplesmente gosta de ver suas partidas com estatísticas, pode apoiar o projeto me pagando um café. ☕🎮", "ap_p3": "Seu apoio ajuda a manter o Replay Lab funcionando e a seguir adicionando novos recursos, jogos e estatísticas.", "ap_nota": "Obrigado por apoiar o projeto. Cada café ajuda a manter a máquina ligada. ❤️", "canal": "Canal",
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
    s_resumen: "Resumo", s_analisis: "Análise", s_tecnico: "Detalhe técnico", r_destacados: "Destaques",
    r_dif: "%s de diferença", r_igual: "Empatados", r_vidafin: "Vida no fim de cada round", r_remontada: "%s% atrás → vitória",
    r_seguidas: "%s rounds seguidos", r_gana_set: "vence o set", r_cero: "a 0% e de pé", r_cero_ayuda: "No Super Turbo, ficar com zero de vida não é KO: continua de pé.",
    u_partida: "partida", u_pelea: "luta", u_peleas: "lutas", ap_procesada: "partida processada",
    n_inicio: "Início", n_partidas: "Partidas", n_juegos: "Jogos", n_canal: "Canal",
    n_cambios: "Changelog", n_apoya: "Apoie o projeto", n_github: "GitHub", n_menu: "Menu",
    pie_indep: "Projeto independente", h_titulo: "Análise de partidas de jogos de luta", h_texto: "Replays do Fightcade gravados, com cada round, combo e súper lidos direto do jogo.", h_ver: "Ver partidas",
    h_juegos: "Jogos que analisamos", h_ultimas: "Últimas partidas", h_todas: "Ver todas", j_sub: "O Replay Lab analisa jogos de luta. Cada jogo tem seu próprio espaço.",
    j_pelea: "Jogos de luta", j_disp: "Disponível", j_prox: "Em breve", j_entrar: "Entrar",
    u_partidas: "partidas", g_jugadores: "Jogadores", g_stats: "Estatísticas", g_analisis: "Ver análise",
    g_jugadas: "Partidas jogadas", g_ganadas: "Lutas vencidas", g_tiempo: "Tempo de jogo", g_njug: "Jogadores diferentes",
    g_npers: "Personagens usados", g_apar: "Aparições", g_sin: "Ainda não há partidas deste jogo.", g_noexiste: "Esse jogo não está no Replay Lab.",
    p_todos: "Todos os jogos", ap_intro: "O Replay Lab é um projeto independente. Cada partida que você vê aqui foi gravada, processada e publicada numa máquina própria.", ap_cuesta: "O que custa mantê-lo", ap_c1: "Processamento: gravar e analisar cada replay",
    ap_c2: "Armazenamento: vídeos e dados de cada partida", ap_c3: "Internet: enviar os vídeos e manter o site", ap_c4: "Eletricidade: horas de gravação e processamento", ap_c5: "Manutenção: manter tudo funcionando",
    ap_c6: "Desenvolvimento: novas estatísticas e funções", ap_c7: "Novos jogos: descobrir como cada jogo guarda seus dados", ap_progreso: "Progresso do Replay Lab", ap_procesadas: "partidas processadas",
    ap_siguiente: "Próximo marco", ap_proximo: "Próximo objetivo do projeto", ap_incorporar: "Incorporar %s", ap_logros: "Conquistas do Replay Lab",
    ap_logros_sub: "As conquistas são do projeto, não de quem o apoia. Desbloqueiam sozinhas, com os dados reais do site.", ap_ok: "Conquistado", ap_no: "A conquistar", ap_compacto: "O Replay Lab é independente. Se te é útil, você pode apoiá-lo.",
    ap_como: "Como ajuda", l_primero: "Primeiro replay processado", l_n: "%s partidas analisadas", l_rondas: "%s rounds analisados",
    l_juego1: "Primeiro jogo incorporado", l_juego2: "Segundo jogo incorporado",
  },
  fr: {
    "s_set": "Le set", "s_peleas": "Matchs", "s_dano": "Dégâts", "s_combos": "Combos", "s_supers": "Supers", "s_mareos": "Étourdissements", "s_tiempo": "Temps", "s_pers": "Personnages", "s_emu": "Émulateur", "s_def": "Défense", "st_winpct": "Pourcentage", "st_peleapida": "Match le plus rapide", "st_vidaperd": "Vie perdue par manche", "st_duravg": "Durée de manche", "st_meterfull": "Fois où la jauge s'est remplie", "st_supernom": "Son super", "st_stuntime": "Temps étourdi", "st_stunpeor": "Plus long étourdissement", "st_dizzies": "Étourdissements provoqués", "st_mareado": "Fois où il a été étourdi", "st_swaps": "Changements de personnage", "st_conect": "Coups qui ont touché", "st_bloq": "Coups bloqués par l'adversaire", "st_bloqueo": "Coups qu'il a bloqués", "st_defensa": "A bloqué", "st_primero": "A touché en premier", "emu_nota": "Chiffres rapportés par l'émulateur, non calculés par replayLab", "dur_rondas": "Durée de chaque manche", "nada_aqui": "Pas de données dans cet enregistrement",
    "cambios": "Changements", "t_cambios": "Ce qu'on a fait", "sub_cambios": "Résumé au jour le jour des changements et de ce qu'on a découvert du jeu", "c_hallazgo": "Découverte", "c_añadido": "Nouveau", "c_cambiado": "Changement", "c_arreglado": "Correction", "donar": "Offrez-moi un café", "ap_titulo": "Replay Lab vous plaît ? Offrez-moi un café", "ap_p1": "Replay Lab est un projet indépendant créé pour analyser, conserver et présenter des parties de jeux vidéo autrement. Traiter chaque replay demande du temps, du stockage, de la bande passante et des ressources pour faire tourner le projet.", "ap_p2": "Si Replay Lab vous est utile, ou si vous aimez simplement revoir vos parties avec des statistiques, vous pouvez soutenir le projet en m'offrant un café. ☕🎮", "ap_p3": "Votre soutien permet de garder Replay Lab en ligne et d'ajouter de nouvelles fonctions, de nouveaux jeux et de nouvelles statistiques.", "ap_nota": "Merci de soutenir le projet. Chaque café aide à garder la machine allumée. ❤️", "canal": "Chaîne",
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
    s_resumen: "Résumé", s_analisis: "Analyse", s_tecnico: "Détail technique", r_destacados: "Temps forts",
    r_dif: "%s d'écart", r_igual: "À égalité", r_vidafin: "Vie en fin de chaque manche", r_remontada: "%s % de retard → victoire",
    r_seguidas: "%s manches d'affilée", r_gana_set: "remporte le set", r_cero: "à 0 % et debout", r_cero_ayuda: "Dans Super Turbo, tomber à zéro n'est pas un KO : le joueur reste debout.",
    u_partida: "match", u_pelea: "combat", u_peleas: "combats", ap_procesada: "match traité",
    n_inicio: "Accueil", n_partidas: "Matchs", n_juegos: "Jeux", n_canal: "Chaîne",
    n_cambios: "Changelog", n_apoya: "Soutenir le projet", n_github: "GitHub", n_menu: "Menu",
    pie_indep: "Projet indépendant", h_titulo: "Analyse de matchs de jeux de combat", h_texto: "Des replays Fightcade enregistrés, chaque manche, combo et super lus directement dans le jeu.", h_ver: "Voir les matchs",
    h_juegos: "Jeux analysés", h_ultimas: "Derniers matchs", h_todas: "Tout voir", j_sub: "Replay Lab analyse des jeux de combat. Chaque jeu a son propre espace.",
    j_pelea: "Jeux de combat", j_disp: "Disponible", j_prox: "Bientôt", j_entrar: "Ouvrir",
    u_partidas: "matchs", g_jugadores: "Joueurs", g_stats: "Statistiques", g_analisis: "Voir l'analyse",
    g_jugadas: "Matchs joués", g_ganadas: "Combats gagnés", g_tiempo: "Temps de jeu", g_njug: "Joueurs différents",
    g_npers: "Personnages utilisés", g_apar: "Apparitions", g_sin: "Pas encore de matchs pour ce jeu.", g_noexiste: "Ce jeu n'est pas sur Replay Lab.",
    p_todos: "Tous les jeux", ap_intro: "Replay Lab est un projet indépendant. Chaque match ici a été enregistré, traité et publié sur notre propre machine.", ap_cuesta: "Ce que demande le projet", ap_c1: "Traitement : enregistrer et analyser chaque replay",
    ap_c2: "Stockage : vidéos et données de chaque match", ap_c3: "Internet : envoyer les vidéos et servir le site", ap_c4: "Électricité : des heures d'enregistrement et de traitement", ap_c5: "Maintenance : que tout continue de fonctionner",
    ap_c6: "Développement : nouvelles statistiques et fonctions", ap_c7: "Nouveaux jeux : comprendre comment chaque jeu stocke ses données", ap_progreso: "Progression de Replay Lab", ap_procesadas: "matchs traités",
    ap_siguiente: "Prochain palier", ap_proximo: "Prochain objectif du projet", ap_incorporar: "Intégrer %s", ap_logros: "Succès de Replay Lab",
    ap_logros_sub: "Ces succès appartiennent au projet, pas à ceux qui le soutiennent. Ils se débloquent seuls, à partir des données réelles du site.", ap_ok: "Débloqué", ap_no: "À débloquer", ap_compacto: "Replay Lab est indépendant. S'il vous est utile, vous pouvez le soutenir.",
    ap_como: "À quoi ça sert", l_primero: "Premier replay traité", l_n: "%s matchs analysés", l_rondas: "%s manches analysées",
    l_juego1: "Premier jeu intégré", l_juego2: "Deuxième jeu intégré",
  },
  ja: {
    "s_set": "セット", "s_peleas": "試合", "s_dano": "ダメージ", "s_combos": "コンボ", "s_supers": "スーパー", "s_mareos": "スタン", "s_tiempo": "時間", "s_pers": "キャラクター", "s_emu": "エミュレーター", "s_def": "防御", "st_winpct": "勝率", "st_peleapida": "最速の試合", "st_vidaperd": "1ラウンドの被ダメージ", "st_duravg": "ラウンド時間", "st_meterfull": "ゲージ満タン回数", "st_supernom": "スーパー技", "st_stuntime": "スタン時間", "st_stunpeor": "最長のスタン", "st_dizzies": "スタンさせた回数", "st_mareado": "スタンされた回数", "st_swaps": "キャラ変更", "st_conect": "命中した攻撃", "st_bloq": "ガードされた攻撃", "st_bloqueo": "ガードした回数", "st_defensa": "ガード率", "st_primero": "先制攻撃", "emu_nota": "エミュレーター自身が報告する数値（replayLab の計算ではありません）", "dur_rondas": "各ラウンドの長さ", "nada_aqui": "この録画にはデータがありません",
    "cambios": "更新履歴", "t_cambios": "これまでにやったこと", "sub_cambios": "日ごとの変更と、ゲームについて分かったことのまとめ", "c_hallazgo": "発見", "c_añadido": "追加", "c_cambiado": "変更", "c_arreglado": "修正", "donar": "コーヒーを一杯", "ap_titulo": "Replay Lab が気に入りましたか？コーヒーを一杯", "ap_p1": "Replay Lab は、対戦を別の角度から分析し、保存し、見せるために作った個人プロジェクトです。リプレイを1本処理するたびに、時間・保存容量・回線・機材がかかります。", "ap_p2": "Replay Lab が役に立っている、あるいは自分の対戦を数字付きで見るのが楽しいと思ってもらえたら、コーヒー一杯で応援できます。☕🎮", "ap_p3": "その支援が Replay Lab を動かし続け、新しい機能・ゲーム・統計を増やす力になります。", "ap_nota": "応援ありがとうございます。コーヒー一杯が、この機械の電源を入れ続けます。❤️", "canal": "チャンネル",
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
    s_resumen: "サマリー", s_analisis: "分析", s_tecnico: "技術データ", r_destacados: "ハイライト",
    r_dif: "%s の差", r_igual: "互角", r_vidafin: "各ラウンド終了時の体力", r_remontada: "%s%劣勢から勝利",
    r_seguidas: "%sラウンド連続", r_gana_set: "セット勝利", r_cero: "体力0で生存", r_cero_ayuda: "スーパーターボでは体力0はKOではなく、まだ立っています。",
    u_partida: "試合", u_pelea: "戦", u_peleas: "戦", ap_procesada: "試合を処理済み",
    n_inicio: "ホーム", n_partidas: "試合", n_juegos: "ゲーム", n_canal: "チャンネル",
    n_cambios: "更新履歴", n_apoya: "プロジェクトを支援", n_github: "GitHub", n_menu: "メニュー",
    pie_indep: "個人プロジェクト", h_titulo: "格闘ゲームの対戦分析", h_texto: "Fightcadeのリプレイを録画し、ラウンド・コンボ・スーパーをゲームから直接読み取って分析します。", h_ver: "試合を見る",
    h_juegos: "分析対象のゲーム", h_ultimas: "最新の試合", h_todas: "すべて見る", j_sub: "Replay Labは格闘ゲームを分析します。ゲームごとに専用のページがあります。",
    j_pelea: "格闘ゲーム", j_disp: "対応中", j_prox: "近日対応", j_entrar: "開く",
    u_partidas: "試合", g_jugadores: "プレイヤー", g_stats: "統計", g_analisis: "分析を見る",
    g_jugadas: "試合数", g_ganadas: "勝利数", g_tiempo: "プレイ時間", g_njug: "プレイヤー数",
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
    "s_set": "整场", "s_peleas": "对局", "s_dano": "伤害", "s_combos": "连段", "s_supers": "超必杀", "s_mareos": "眩晕", "s_tiempo": "时间", "s_pers": "角色", "s_emu": "模拟器", "s_def": "防御", "st_winpct": "胜率", "st_peleapida": "最快的一场", "st_vidaperd": "每回合失血", "st_duravg": "回合时长", "st_meterfull": "气槽集满次数", "st_supernom": "超必杀", "st_stuntime": "眩晕时间", "st_stunpeor": "最长眩晕", "st_dizzies": "打晕对手次数", "st_mareado": "被打晕次数", "st_swaps": "更换角色", "st_conect": "命中的攻击", "st_bloq": "被防住的攻击", "st_bloqueo": "防住的攻击", "st_defensa": "防御率", "st_primero": "先手命中", "emu_nota": "由模拟器自身报告的数据，非 replayLab 计算", "dur_rondas": "每回合时长", "nada_aqui": "本次录制没有数据",
    "cambios": "更新日志", "t_cambios": "我们做了什么", "sub_cambios": "按日期整理的改动，以及我们对游戏的发现", "c_hallazgo": "发现", "c_añadido": "新增", "c_cambiado": "改动", "c_arreglado": "修复", "donar": "请我喝杯咖啡", "ap_titulo": "喜欢 Replay Lab 吗？请我喝杯咖啡", "ap_p1": "Replay Lab 是一个独立项目，用另一种方式分析、保存和呈现对战记录。处理每一场回放都要花时间、存储、带宽和维持项目运转的资源。", "ap_p2": "如果 Replay Lab 对你有用，或者你只是喜欢看带数据的自己的对战，可以请我喝杯咖啡来支持这个项目。☕🎮", "ap_p3": "你的支持让 Replay Lab 继续运转，也让新功能、新游戏和新统计得以不断加入。", "ap_nota": "谢谢你支持这个项目。每一杯咖啡都让这台机器继续开着。❤️", "canal": "频道",
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
    s_resumen: "概要", s_analisis: "详细分析", s_tecnico: "技术细节", r_destacados: "精彩时刻",
    r_dif: "领先 %s", r_igual: "持平", r_vidafin: "每回合结束时血量", r_remontada: "落后 %s% → 获胜",
    r_seguidas: "连胜 %s 回合", r_gana_set: "赢得整场", r_cero: "0% 血量仍站着", r_cero_ayuda: "在 Super Turbo 中血量为 0 并不算 KO，角色仍然站着。",
    u_partida: "场对局", u_pelea: "局", u_peleas: "局", ap_procesada: "场对局已处理",
    n_inicio: "首页", n_partidas: "对局", n_juegos: "游戏", n_canal: "频道",
    n_cambios: "更新日志", n_apoya: "支持项目", n_github: "GitHub", n_menu: "菜单",
    pie_indep: "独立项目", h_titulo: "格斗游戏对局分析", h_texto: "录制 Fightcade 回放，每个回合、连段和超必杀都直接从游戏中读取。", h_ver: "浏览对局",
    h_juegos: "我们分析的游戏", h_ultimas: "最新对局", h_todas: "查看全部", j_sub: "Replay Lab 专注于格斗游戏，每个游戏都有自己的页面。",
    j_pelea: "格斗游戏", j_disp: "已支持", j_prox: "即将支持", j_entrar: "进入",
    u_partidas: "场对局", g_jugadores: "玩家", g_stats: "统计", g_analisis: "查看分析",
    g_jugadas: "对局数", g_ganadas: "胜场", g_tiempo: "对战时长", g_njug: "不同玩家",
    g_npers: "使用角色数", g_apar: "出场次数", g_sin: "该游戏暂无对局。", g_noexiste: "Replay Lab 暂无该游戏。",
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
    s.canal ? item("canal", s.canal, esc(T("n_canal")) + flecha, ext) : "",
    item("cambios", "cambios.html", esc(T("n_cambios"))),
    item("apoyo", "apoyo.html", "☕ " + esc(T("n_apoya")), 'class="apoya"'),
    item("github", s.github || "https://github.com/demonioDeb/replayLab", esc(T("n_github")) + flecha, ext),
  ].join("");
  document.getElementById("menu-txt").textContent = T("n_menu");
}

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
