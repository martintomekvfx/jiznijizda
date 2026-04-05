export default function Manifesto() {
  return (
    <section className="section section--inverted" id="manifesto">
      <div className="text-sub" style={{ marginBottom: '2rem', opacity: 0.5 }}>
        [001] — MANIFESTO
      </div>

      <div className="manifesto-text" style={{ marginBottom: '4rem' }}>
        Jsme parta z jižní Moravy. Jezdíme na čemkoliv, co má kola — koloběžky, motorky, kola. 
        Z Bílovic přes Moravskou až do Hodonína. Asfalt, prach, vítr. 
        Žádný pravidla, žádný hranice. Jen jízda.
      </div>

      <div className="manifesto-columns text-body" style={{ borderTop: '2px solid var(--white)', paddingTop: '2rem' }}>
        <p style={{ marginBottom: '1rem' }}>
          Vznikli jsme spontánně — pár lidí, co se potkali na silnici a zjistili, 
          že jedou stejným směrem. Dnes jsme crew, co spojuje tři města a tři způsoby jízdy.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Koloběžka pro město, kolo na výlety, motorka na dálky. 
          Každej stroj má svůj charakter, každý město svůj spot. 
          Potkáváme se, jezdíme spolu, sdílíme cestu.
        </p>
        <p>
          Nejsme závodníci, nejsme klub s pravidlama. 
          Jsme lidi, co milujou pohyb a svobodu na dvou (nebo třech) kolech.
        </p>
      </div>
    </section>
  );
}
