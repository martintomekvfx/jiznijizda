const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Noční jízda Hodonín',
    date: '2025.03',
    type: 'MOTORKA',
  },
  {
    id: 2,
    title: 'Bílovice spot',
    date: '2025.02',
    type: 'KOLOBĚŽKA',
  },
  {
    id: 3,
    title: 'Moravská trasa',
    date: '2025.01',
    type: 'KOLO',
  },
  {
    id: 4,
    title: 'Crew sraz',
    date: '2024.12',
    type: 'MIX',
  },
  {
    id: 5,
    title: 'Zimní ride',
    date: '2024.11',
    type: 'MOTORKA',
  },
  {
    id: 6,
    title: 'Sunset session',
    date: '2024.10',
    type: 'KOLO',
  },
];

// Generate SVG placeholder patterns for gallery items
function PlaceholderImage(index, title) {
  const patterns = [
    // Diagonal lines
    `<defs><pattern id="p${index}" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M0,20 L20,0" stroke="white" stroke-width="2"/></pattern></defs><rect width="400" height="400" fill="black"/><rect width="400" height="400" fill="url(#p${index})"/>`,
    // Dots
    `<rect width="400" height="400" fill="black"/><g fill="white">${Array.from({length: 100}, (_, i) => `<circle cx="${(i % 10) * 40 + 20}" cy="${Math.floor(i / 10) * 40 + 20}" r="4"/>`).join('')}</g>`,
    // Grid
    `<rect width="400" height="400" fill="white"/><g stroke="black" stroke-width="1">${Array.from({length: 20}, (_, i) => `<line x1="${i * 20}" y1="0" x2="${i * 20}" y2="400"/><line x1="0" y1="${i * 20}" x2="400" y2="${i * 20}"/>`).join('')}</g>`,
    // Circles
    `<rect width="400" height="400" fill="black"/><circle cx="200" cy="200" r="150" fill="none" stroke="white" stroke-width="3"/><circle cx="200" cy="200" r="100" fill="none" stroke="white" stroke-width="2"/><circle cx="200" cy="200" r="50" fill="none" stroke="white" stroke-width="1"/>`,
    // Vertical bars
    `<rect width="400" height="400" fill="white"/>${Array.from({length: 20}, (_, i) => `<rect x="${i * 20}" y="0" width="10" height="400" fill="black"/>`).join('')}`,
    // Cross
    `<rect width="400" height="400" fill="black"/><line x1="0" y1="0" x2="400" y2="400" stroke="white" stroke-width="4"/><line x1="400" y1="0" x2="0" y2="400" stroke="white" stroke-width="4"/>`,
  ];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">${patterns[index % patterns.length]}<text x="200" y="200" text-anchor="middle" dominant-baseline="middle" fill="${index % 2 === 0 ? 'white' : 'black'}" font-family="Helvetica,Arial,sans-serif" font-size="18" font-weight="bold">${title.toUpperCase()}</text></svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export default function Gallery() {
  return (
    <section className="section section--inverted" id="galerie" style={{ padding: 0 }}>
      <div style={{ padding: 'clamp(2rem, 4vw, 4rem) clamp(1rem, 4vw, 4rem) 1rem' }}>
        <div className="text-sub" style={{ opacity: 0.4, marginBottom: '0.5rem' }}>
          [004] — GALERIE
        </div>
        <h2 className="text-section">AKCE</h2>
      </div>

      <div className="gallery-grid" style={{ borderTop: '2px solid var(--white)' }}>
        {GALLERY_ITEMS.map((item, i) => (
          <div className="gallery-item" key={item.id} style={{ borderColor: 'var(--white)' }}>
            <img
              src={PlaceholderImage(i, item.title)}
              alt={item.title}
            />
            <div className="gallery-caption">
              <div>{item.title}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem', opacity: 0.6 }}>
                <span>{item.date}</span>
                <span>{item.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
