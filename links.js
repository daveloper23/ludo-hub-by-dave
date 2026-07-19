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
    title: "Perudo",
    tagline: "Scommetti al rialzo, dubita, sfrutta i lama e calza per recuperare dadi.",
    accent: "orange",
    links: [
      { label: "Player", url: "https://perudo-by-dave.onrender.com" },
      { label: "Dashboard", url: "https://perudo-by-dave.onrender.com/dashboard.html" }
    ]
  },
  {
    title: "Nome in codice",
    tagline: "Collega tutte le parole della tua squadra, prima che ci riescano gli avversari. Attenzione alla parola killer!",
    accent: "magenta",
    links: [
      { label: "Gioca ora", url: "https://nome-in-codice-digital.web.app" }
    ]
  },
  {
    title: "Sudoku",
    tagline: "Risolvi gli schemi proposti e batti i tuoi record.",
    accent: "cyan",
    links: [
      { label: "Gioca ora", url: "https://sudoku-by-dave.web.app" }
    ]
  },
  {
    title: "Lupus",
    tagline: "Lupi vs Contadini, guardie, veggenti, puttane e medium. Chi sopravviverà nel villaggio?",
    accent: "red",
    links: [
      { label: "Gioca ora", url: "https://lupusbydave.firebaseapp.com" }
    ]
  },
  {
    title: "Tombola",
    tagline: "Vuoi giocare all'intramontabile Tombola ma non hai con te un tabellone o vuoi risparmiarti la classica verifica sulla presenza di tutti i numeri nel sacchetto? Sei nel posto giusto",
    accent: "green",
    links: [
      { label: "Gioca ora", url: "https://tombola-by-dave.web.app" }
    ]
  }
];
