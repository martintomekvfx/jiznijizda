export default function Hero() {
  const marqueeText = 'BÍLOVICE — MORAVSKÁ — HODONÍN — KOLOBĚŽKA — MOTORKA — KOLO — ';
  const repeats = 8;

  return (
    <section className="section" id="hero" style={{ padding: 0 }}>
      {/* Main title block */}
      <div style={{
        padding: 'clamp(4rem, 12vw, 12rem) clamp(1rem, 4vw, 4rem) clamp(2rem, 6vw, 4rem)',
      }}>
        <h1 className="text-hero glitch">
          JIŽNÍ<br />JÍZDA
        </h1>
        <div className="text-sub" style={{ marginTop: '2rem' }}>
          KOLOBĚŽKA × MOTORKA × KOLO
        </div>
      </div>

      {/* Marquee strip */}
      <div className="marquee-container">
        <div className="marquee-track">
          {Array.from({ length: repeats }).map((_, i) => (
            <span className="marquee-item" key={i}>
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="stats-row border-top">
        <div className="stat-item">
          <div className="stat-number">3</div>
          <div className="stat-label">Města</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">3</div>
          <div className="stat-label">Stroje</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">∞</div>
          <div className="stat-label">Kilometry</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">1</div>
          <div className="stat-label">Crew</div>
        </div>
      </div>
    </section>
  );
}
