const CITIES = [
  {
    name: 'Bílovice',
    vehicle: '🛴',
    vehicleName: 'Koloběžka',
    desc: 'Tam, kde to všechno začalo. Malý město, velký ambice. Koloběžky v ulicích, asphalt pod kolama.',
    code: '48.53°N 16.89°E',
  },
  {
    name: 'Moravská',
    vehicle: '🚲',
    vehicleName: 'Kolo',
    desc: 'Moravská krajina jako stvořená pro kolo. Kopce, vinice, cesty, co nikam nevedou — a přitom všude.',
    code: '49.20°N 16.65°E',
  },
  {
    name: 'Hodonín',
    vehicle: '🏍️',
    vehicleName: 'Motorka',
    desc: 'Roviny jižní Moravy. Motorka, rovná silnice, slunce. Víc nepotřebuješ.',
    code: '48.85°N 17.13°E',
  },
];

export default function CrewGrid() {
  return (
    <section className="section" id="crew" style={{ padding: 0 }}>
      <div style={{ padding: 'clamp(2rem, 4vw, 4rem) clamp(1rem, 4vw, 4rem) 1rem' }}>
        <div className="text-sub" style={{ opacity: 0.4, marginBottom: '0.5rem' }}>
          [002] — CREW
        </div>
        <h2 className="text-section">TŘI MĚSTA</h2>
      </div>

      <div className="grid-3 border-top">
        {CITIES.map((city) => (
          <div className="crew-col" key={city.name}>
            <div>
              <div className="text-mono" style={{ marginBottom: '1rem', opacity: 0.5 }}>
                {city.code}
              </div>
              <div className="crew-city">{city.name}</div>
              <div className="crew-vehicle">{city.vehicle}</div>
              <div className="text-sub" style={{ marginBottom: '1rem' }}>
                {city.vehicleName}
              </div>
            </div>
            <div className="crew-desc">
              {city.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
