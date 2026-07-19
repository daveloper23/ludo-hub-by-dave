/**
 * ============================================
 *  CONFIGURAZIONE GIOCHI
 * ============================================
 * Modifica solo questo file per aggiungere, rimuovere
 * o cambiare i tuoi giochi. Non serve toccare altro.
 *
 * Ogni gioco ha questa forma:
 * {
 *   title:   "Nome del gioco",       -> obbligatorio
 *   tagline: "Breve descrizione",    -> facoltativo (puoi omettere la riga)
 *   accent:  "magenta" | "cyan" | "amber",  -> colore marquee (facoltativo, default a rotazione)
 *   links: [
 *     { label: "Gioca ora", url: "https://..." },
 *     { label: "Codice sorgente", url: "https://..." }
 *   ]
 * }
 *
 * Puoi mettere quanti pulsanti vuoi in "links".
 * Tutti si apriranno in una nuova scheda (target _blank) automaticamente.
 */

window.GAMES = [
  {
    title: "Pixel Runner",
    tagline: "Corsa infinita a scorrimento laterale, schiva gli ostacoli.",
    accent: "magenta",
    links: [
      { label: "Gioca ora", url: "https://example.com/pixel-runner" },
      { label: "Codice sorgente", url: "https://github.com/tuo-utente/pixel-runner" }
    ]
  },
  {
    title: "Quiz Master",
    tagline: "Sfida la tua cultura generale contro il tempo.",
    accent: "cyan",
    links: [
      { label: "Gioca ora", url: "https://example.com/quiz-master" }
    ]
  },
  {
    title: "Space Blocks",
    tagline: "Tetris in salsa spaziale, con power-up e boss finali.",
    accent: "amber",
    links: [
      { label: "Gioca ora", url: "https://example.com/space-blocks" },
      { label: "Guarda il trailer", url: "https://example.com/space-blocks/trailer" },
      { label: "Codice sorgente", url: "https://github.com/tuo-utente/space-blocks" }
    ]
  },
  {
    title: "Maze Escape",
    tagline: "Trova l'uscita prima che il labirinto cambi ancora.",
    accent: "magenta",
    links: [
      { label: "Gioca ora", url: "https://example.com/maze-escape" }
    ]
  }
];
