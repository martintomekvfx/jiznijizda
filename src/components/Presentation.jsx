import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    type: 'title',
    title: 'JIŽNÍ JÍZDA',
    subtitle: 'Občanská výchova — prezentace o nás',
    footer: 'KOLOBĚŽKA × MOTORKA × KOLO',
  },
  {
    type: 'content',
    label: '01',
    title: 'KDO JSME?',
    content: 'Jsme parta kamarádů z jižní Moravy, které spojuje vášeň pro jízdu — na koloběžkách, motorkách i kolech. Nejsme oficiální spolek ani závodní tým. Jsme komunita.',
    aside: '3 města\n3 typy strojů\n1 crew',
  },
  {
    type: 'content',
    label: '02',
    title: 'ODKUD JSME?',
    content: 'Pocházíme ze tří měst jižní Moravy — z Bílovic, z Moravské a z Hodonína. Každé město má svůj charakter a svůj styl jízdy.',
    points: [
      'BÍLOVICE — koloběžky v ulicích',
      'MORAVSKÁ — kolo na výlety, kopce a vinice',
      'HODONÍN — motorka na rovných silnicích',
    ],
  },
  {
    type: 'big-text',
    label: '03',
    title: 'CO NÁS SPOJUJE?',
    bigText: 'SVOBODA POHYBU',
    content: 'Milujeme pohyb, čerstvý vzduch a adrenalin. Jízda pro nás není sport — je to způsob života a způsob, jak trávit čas s přáteli.',
  },
  {
    type: 'content',
    label: '04',
    title: 'NAŠE HODNOTY',
    points: [
      'KAMARÁDSTVÍ — držíme spolu, pomáháme si',
      'RESPEKT — k ostatním jezdcům i k okolí',
      'BEZPEČNOST — helma, ochranné prvky, pravidla provozu',
      'EKOLOGIE — koloběžka a kolo = nulové emise',
      'KOMUNITA — otevřeni novým členům',
    ],
  },
  {
    type: 'two-col',
    label: '05',
    title: 'CO DĚLÁME?',
    left: {
      heading: 'PRAVIDELNĚ',
      points: [
        'Společné jízdy po jižní Moravě',
        'Víkendové výlety a srazy',
        'Údržba a úpravy strojů',
        'Sdílení tras a spotů',
      ],
    },
    right: {
      heading: 'PŘÍLEŽITOSTNĚ',
      points: [
        'Účast na lokálních akcích',
        'Poznávání nových míst',
        'Noční jízdy městem',
        'Dokumentace — foto a video',
      ],
    },
  },
  {
    type: 'content',
    label: '06',
    title: 'BEZPEČNOST',
    content: 'Bezpečnost je pro nás priorita. I když jsme volná parta, dodržujeme základní pravidla:',
    points: [
      'Vždy nosíme helmu',
      'Dodržujeme pravidla silničního provozu',
      'Jezdíme s ohledem na ostatní',
      'Kontrolujeme stav strojů před jízdou',
      'Nikdy nejezdíme pod vlivem alkoholu',
    ],
  },
  {
    type: 'content',
    label: '07',
    title: 'PŘÍNOS PRO KOMUNITU',
    content: 'Naše crew není jen o jízdě. Spojujeme lidi z různých měst a vytváříme přátelství napříč regionem.',
    points: [
      'Propojujeme mládež z Bílovic, Moravské a Hodonína',
      'Motivujeme k aktivnímu trávení volného času',
      'Ukazujeme alternativu k sedění u počítače',
      'Podporujeme ekologickou dopravu (kolo, koloběžka)',
    ],
  },
  {
    type: 'big-text',
    label: '08',
    title: 'NAŠE MOTTO',
    bigText: 'ŽÁDNÝ PRAVIDLA, ŽÁDNÝ HRANICE. JEN JÍZDA.',
    content: 'Ale s respektem k sobě i k ostatním.',
  },
  {
    type: 'content',
    label: '09',
    title: 'JAK SE PŘIDAT?',
    content: 'Máš koloběžku, kolo nebo motorku? Jsi z jižní Moravy? Chceš jezdit s partou kamarádů?',
    points: [
      'Napiš nám na sociální sítě',
      'Přijď na některý ze srazů',
      'Stačí chuť jezdit a dobrá nálada',
    ],
  },
  {
    type: 'title',
    title: 'DÍKY ZA POZORNOST',
    subtitle: 'JIŽNÍ JÍZDA — Bílovice × Moravská × Hodonín',
    footer: '→ martintomekvfx.github.io/jiznijizda',
  },
];

function TitleSlide({ slide }) {
  return (
    <div className="prez-slide prez-slide--title">
      <h1 className="prez-hero-text glitch">{slide.title}</h1>
      {slide.subtitle && <p className="prez-subtitle">{slide.subtitle}</p>}
      {slide.footer && <p className="prez-footer-text">{slide.footer}</p>}
    </div>
  );
}

function ContentSlide({ slide }) {
  return (
    <div className="prez-slide">
      <div className="prez-label">[{slide.label}]</div>
      <h2 className="prez-title">{slide.title}</h2>
      {slide.content && <p className="prez-content">{slide.content}</p>}
      {slide.aside && (
        <div className="prez-aside">{slide.aside}</div>
      )}
      {slide.points && (
        <ul className="prez-points">
          {slide.points.map((p, i) => (
            <li key={i} className="prez-point">
              <span className="prez-point-marker">→</span> {p}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function BigTextSlide({ slide }) {
  return (
    <div className="prez-slide prez-slide--inverted">
      <div className="prez-label" style={{ color: 'var(--white)', opacity: 0.4 }}>[{slide.label}]</div>
      <h2 className="prez-title" style={{ color: 'var(--white)' }}>{slide.title}</h2>
      <div className="prez-big-text">{slide.bigText}</div>
      {slide.content && <p className="prez-content" style={{ color: 'var(--white)', opacity: 0.7 }}>{slide.content}</p>}
    </div>
  );
}

function TwoColSlide({ slide }) {
  return (
    <div className="prez-slide">
      <div className="prez-label">[{slide.label}]</div>
      <h2 className="prez-title">{slide.title}</h2>
      <div className="prez-two-col">
        <div className="prez-col">
          <h3 className="prez-col-heading">{slide.left.heading}</h3>
          <ul className="prez-points">
            {slide.left.points.map((p, i) => (
              <li key={i} className="prez-point">
                <span className="prez-point-marker">→</span> {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="prez-col">
          <h3 className="prez-col-heading">{slide.right.heading}</h3>
          <ul className="prez-points">
            {slide.right.points.map((p, i) => (
              <li key={i} className="prez-point">
                <span className="prez-point-marker">→</span> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const total = SLIDES.length;

  const goNext = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, total - 1));
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 0));
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  const slide = SLIDES[current];

  const renderSlide = () => {
    switch (slide.type) {
      case 'title': return <TitleSlide slide={slide} />;
      case 'big-text': return <BigTextSlide slide={slide} />;
      case 'two-col': return <TwoColSlide slide={slide} />;
      default: return <ContentSlide slide={slide} />;
    }
  };

  return (
    <div className="prez-container">
      {/* Back link */}
      <Link to="/" className="prez-back" aria-label="Zpět na hlavní stránku">
        ← ZPĚT
      </Link>

      {/* Slide area */}
      <div className="prez-stage" onClick={goNext}>
        {renderSlide()}
      </div>

      {/* Bottom bar */}
      <div className="prez-bar">
        <button className="prez-btn" onClick={goPrev} disabled={current === 0}>
          ←
        </button>

        <div className="prez-progress">
          <div className="prez-progress-label">
            {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </div>
          <div className="prez-progress-track">
            <div
              className="prez-progress-fill"
              style={{ width: `${((current + 1) / total) * 100}%` }}
            />
          </div>
        </div>

        <button className="prez-btn" onClick={goNext} disabled={current === total - 1}>
          →
        </button>
      </div>
    </div>
  );
}
