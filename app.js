const { useMemo } = React;

const ACCENTS = ["magenta", "cyan", "orange", "red", "green"];

function GameCard({ game, index }) {
  const accent = ACCENTS.includes(game.accent) ? game.accent : ACCENTS[index % ACCENTS.length];

  return (
    <article className="cabinet">
      <div className={`cabinet-marquee ${accent}`} />
      <div className="cabinet-body">
        <h2 className="cabinet-title">{game.title}</h2>
        {game.tagline && <p className="cabinet-tagline">{game.tagline}</p>}
        <div className="cabinet-buttons">
          {(game.links || []).map((link, i) => (
            <a
              key={i}
              className={`arcade-button ${accent}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function GameHub() {
  const games = useMemo(() => window.GAMES || [], []);

  return (
    <div className="page">
      <header className="hero">
        <p className="hero-eyebrow">Ludoteca by Dave</p>
        <h1 className="hero-title">GAME · HUB</h1>
        <p className="hero-subtitle">
          Abbatti la noia. Buon divertimento.
        </p>
        <p className="insert-coin">▸ INSERT COIN TO CONTINUE</p>
      </header>

      <main className="grid">
        {games.map((game, index) => (
          <GameCard key={game.title + index} game={game} index={index} />
        ))}
      </main>

      <footer className="footer">© {new Date().getFullYear()} — GAME · HUB</footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<GameHub />);
