import { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Crew', href: '#crew' },
  { label: 'Mapa', href: '#mapa' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="nav" id="nav-main">
        <a href="#" className="nav-brand glitch">
          JIŽNÍ JÍZDA
        </a>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Otevřít menu"
        >
          ☰
        </button>
      </nav>

      <div className={`nav-mobile ${mobileOpen ? 'open' : ''}`}>
        <button
          className="nav-mobile-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Zavřít menu"
        >
          ✕
        </button>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-mobile-link glitch"
            onClick={(e) => handleClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
