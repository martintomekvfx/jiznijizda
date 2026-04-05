export default function Footer() {
  const ascii = `
     __  ___  ___   __    __   ___       __   ___  ___       
    |  ||   ||   | |  |  |  | |   |     |  | |   ||   |  _   
    |  ||   ||___| |__|  |__| |   |     |  | |   ||   | | |  
 ___|  ||   |       __    __  |   | ___ |  | |___||   | |_|  
|      ||   |      |  |  |  | |   ||   ||  |      |   |  _   
|______||___|      |__|  |__| |___||___||__|      |___| |_|  
                                                              
     JIŽNÍ  JÍZDA  ×  KOLOBĚŽKA  ×  MOTORKA  ×  KOLO        
`;

  return (
    <footer className="footer" id="kontakt">
      <div className="footer-ascii" aria-hidden="true">
        {ascii}
      </div>

      <div className="footer-grid">
        <div className="footer-col">
          <h4>Kontakt</h4>
          <a href="mailto:jiznijizda@email.cz">jiznijizda@email.cz</a>
          <p>Bílovice — Moravská — Hodonín</p>
          <p>Jižní Morava, CZ</p>
        </div>

        <div className="footer-col">
          <h4>Sociální sítě</h4>
          <a href="#" target="_blank" rel="noopener noreferrer">→ Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer">→ Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">→ TikTok</a>
        </div>

        <div className="footer-col">
          <h4>Info</h4>
          <p>Crew založena 2024</p>
          <p>Koloběžky, motorky, kola</p>
          <p>Žádný pravidla</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 JIŽNÍ JÍZDA</span>
        <span>BÍLOVICE × MORAVSKÁ × HODONÍN</span>
      </div>
    </footer>
  );
}
