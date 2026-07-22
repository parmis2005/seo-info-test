import {
  ArrowRight,
  BarChart2,
  Check,
  Clock,
  Coins,
  Globe,
  Layers,
  Link2,
  Lock,
  Megaphone,
  PenLine,
  Plus,
  RefreshCw,
  Search,
  ShieldCheck,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react";

const NAV = ["Grundlagen", "Faktoren", "Optimierung", "Prozess", "Tools", "FAQ"];

const FACTORS = [
  {
    Icon: Link2,
    title: "Backlinks",
    text: "Links von relevanten Webseiten sind starke Vertrauenssignale. Qualität, Kontext und Glaubwürdigkeit zählen mehr als Masse.",
  },
  {
    Icon: PenLine,
    title: "Content-Qualität",
    text: "Inhalte müssen Suchintention, Tiefe und klare Struktur verbinden, damit Nutzer und Suchmaschinen den Wert sofort erkennen.",
  },
  {
    Icon: Zap,
    title: "Core Web Vitals",
    text: "Ladezeit, Interaktivität und visuelle Stabilität entscheiden mit darüber, ob eine Seite professionell wirkt und sauber ranken kann.",
  },
];

const BASICS = [
  { Icon: TrendingUp, title: "Nachhaltiger Traffic", text: "Sichtbarkeit wächst langfristig, ohne dass jeder Klick bezahlt werden muss." },
  { Icon: Target, title: "Suchintention treffen", text: "Gute SEO beantwortet exakt die Frage, mit der Nutzer auf Google starten." },
  { Icon: Trophy, title: "Vertrauen aufbauen", text: "Klare Inhalte, Technik und Signale machen aus Rankings echte Autorität." },
  { Icon: Coins, title: "Besserer ROI", text: "Organischer Traffic kann über Monate und Jahre wirtschaftlich arbeiten." },
];

const SECONDARY_FACTORS = [
  { Icon: Smartphone, label: "Mobile-First" },
  { Icon: Lock, label: "HTTPS / Sicherheit" },
  { Icon: Target, label: "Keyword-Relevanz" },
  { Icon: Clock, label: "UX & Verweildauer" },
  { Icon: Layers, label: "Strukturierte Daten" },
  { Icon: RefreshCw, label: "Aktualität" },
];

const ONPAGE = [
  { n: "01", title: "Title Tag", text: "50 bis 60 Zeichen, klares Hauptthema und ein Nutzenversprechen." },
  { n: "02", title: "Meta-Description", text: "120 bis 160 Zeichen, verständlicher Mehrwert und ein konkreter Klickanreiz." },
  { n: "03", title: "Überschriften", text: "Eine klare H1, logisch gegliederte H2/H3 und natürliche Keyword-Abdeckung." },
  { n: "04", title: "Interne Links", text: "Wichtige Seiten werden logisch verbunden und Nutzer werden gezielt weitergeführt." },
  { n: "05", title: "Bilder & Alt-Texte", text: "Komprimierte Medien, sprechende Dateinamen und beschreibende Alternativtexte." },
];

const OFFPAGE = [
  { Icon: Trophy, title: "Linkbuilding", text: "Natürliche Empfehlungen entstehen durch starke Inhalte, Kooperationen und relevante Erwähnungen." },
  { Icon: Megaphone, title: "Brand Mentions", text: "Nennungen deiner Marke schaffen Vertrauen, auch wenn nicht jede Erwähnung direkt verlinkt." },
  { Icon: Star, title: "Google Business Profile", text: "Für lokale Suche sind Bewertungen, Öffnungszeiten, Leistungen und Beiträge entscheidend." },
];

const PRACTICE = [
  { Icon: ShieldCheck, title: "SEO-Audit", text: "Technik, Inhalte, Struktur und Wettbewerb werden priorisiert statt isoliert betrachtet." },
  { Icon: Globe, title: "Lokale Sichtbarkeit", text: "Regionale Suchbegriffe, Karten-Ergebnisse und Standortsignale werden gezielt aufgebaut." },
  { Icon: Search, title: "Google + KI-Suchen", text: "Inhalte bleiben klar, modular und verständlich für klassische Suche und KI-Antwortsysteme." },
  { Icon: BarChart2, title: "Tracking", text: "Rankings, Klicks und Anfragen werden messbar, damit Optimierung nicht auf Bauchgefühl basiert." },
];

const ERRORS = [
  { Icon: Search, title: "Suchintention ignorieren", text: "Ein Keyword reicht nicht, wenn die Seite die eigentliche Nutzerfrage verfehlt." },
  { Icon: PenLine, title: "Zu wenig Tiefe", text: "Oberflächliche Texte verlieren gegen Seiten, die ein Thema vollständig erklären." },
  { Icon: Globe, title: "Lokale Signale vergessen", text: "Adresse, Bewertungen und lokale Inhalte entscheiden oft über regionale Sichtbarkeit." },
  { Icon: BarChart2, title: "Nicht messen", text: "Ohne Daten bleiben Fortschritte unsichtbar und Prioritäten geraten durcheinander." },
];

const PROCESS = [
  { n: "01", title: "Analyse", text: "Keywords, Wettbewerb, Technik und vorhandene Inhalte werden sauber bewertet." },
  { n: "02", title: "Struktur", text: "Seitenarchitektur, interne Links und Suchintentionen werden geordnet." },
  { n: "03", title: "Content", text: "Inhalte werden erweitert, geschärft und für Nutzerführung optimiert." },
  { n: "04", title: "Autorität", text: "Relevante Signale, Backlinks und lokale Faktoren werden kontinuierlich aufgebaut." },
];

const TOOLS = [
  { Icon: Search, name: "Google Search Console", tag: "Kostenlos", text: "Direkte Daten zu Klicks, Impressionen, Rankings und technischen Problemen." },
  { Icon: BarChart2, name: "Ahrefs", tag: "Profi-Tool", text: "Backlinks, Content-Gaps und Wettbewerber lassen sich damit präzise analysieren." },
  { Icon: Globe, name: "PageSpeed Insights", tag: "Kostenlos", text: "Core Web Vitals und konkrete Performance-Probleme werden sichtbar." },
];

const FAQ = [
  { q: "Wie lange dauert es, bis SEO wirkt?", a: "Erste Signale sind oft nach 3 bis 6 Monaten sichtbar. Spürbare Verbesserungen hängen von Wettbewerb, Technik, Content und Domain-Stärke ab." },
  { q: "Was ist der Unterschied zwischen SEO und SEA?", a: "SEO baut organische Sichtbarkeit auf. SEA sind bezahlte Anzeigen, die sofort sichtbar sein können, aber pro Klick Budget verbrauchen." },
  { q: "Wie viele Keywords braucht eine Seite?", a: "Eine Seite sollte ein klares Hauptthema haben und mehrere semantisch passende Begriffe natürlich abdecken." },
  { q: "Sind Backlinks wirklich wichtig?", a: "Für wettbewerbsstarke Begriffe ja. Für Long-Tail- und lokale Suchen können Struktur, Inhalte und lokale Signale bereits viel bewegen." },
  { q: "Wie oft sollte man Inhalte aktualisieren?", a: "Wichtige Seiten sollten regelmäßig geprüft werden, besonders wenn sich Angebote, Wettbewerb oder Suchintention verändern." },
  { q: "Was ist wichtiger: Technik, Content oder Links?", a: "Die Basis ist saubere Technik. Danach folgen starke Inhalte und anschließend Autorität durch Links, Erwähnungen und Vertrauen." },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <Search size={20} strokeWidth={2.2} />
    </span>
  );
}

function Eyebrow({ children }: { children: string }) {
  return <p className="eyebrow">{children}</p>;
}

function SectionHeading({
  eyebrow,
  title,
  text,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  compact?: boolean;
}) {
  return (
    <div className={`section-heading${compact ? " compact" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <div className="ambient-grid" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="SEO Guide Startseite">
          <BrandMark />
          <span className="brand-copy">SEOGUIDE</span>
        </a>

        <nav className="desktop-nav" aria-label="Hauptnavigation">
          {NAV.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>

        <a className="header-cta" href="#prozess">
          Fahrplan starten
          <ArrowRight size={17} />
        </a>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <div className="hero-branding">
            <span className="hero-wordmark">SEO GUIDE</span>
            <span className="hero-tagline">Google Ranking · Struktur · Sichtbarkeit</span>
          </div>

          <div className="hero-statement">
            <Eyebrow>Webdesign · SEO · Ranking-Systeme</Eyebrow>
            <h1>
              <span>SEO, das gefunden wird.</span>
              <span>Strukturen, die Vertrauen schaffen.</span>
            </h1>
            <p>
              Der kompakte Leitfaden für bessere Google-Rankings, klare Inhalte und
              eine Website, die Nutzer zielgerichtet zur Anfrage führt.
            </p>
          </div>

          <div className="hero-actions">
            <a className="primary-button" href="#grundlagen">
              Grundlagen ansehen
              <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#faktoren">Ranking-Faktoren</a>
          </div>

          <p className="hero-note">Klarer Aufbau. Messbare Prioritäten. Kein SEO-Chaos.</p>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="signal-stage">
            <div className="seo-console">
              <div className="console-topbar">
                <span />
                <span />
                <span />
                <strong>SEO Fahrplan</strong>
              </div>

              <div className="search-card">
                <div className="search-pill">
                  <Search size={16} />
                  <span>bessere google rankings lokal</span>
                </div>
                <div className="search-score">
                  <span>SEO Score</span>
                  <strong>94</strong>
                </div>
              </div>

              <div className="serp-list">
                <div className="serp-row active">
                  <span>01</span>
                  <div>
                    <strong>Suchintention treffen</strong>
                    <small>Inhalte beantworten die echte Nutzerfrage</small>
                  </div>
                </div>
                <div className="serp-row">
                  <span>02</span>
                  <div>
                    <strong>Interne Links ordnen</strong>
                    <small>Wichtige Seiten gezielt weiterführen</small>
                  </div>
                </div>
                <div className="serp-row">
                  <span>03</span>
                  <div>
                    <strong>Core Web Vitals stärken</strong>
                    <small>Schnell, stabil und mobil nutzbar</small>
                  </div>
                </div>
              </div>

              <div className="growth-panel">
                <div>
                  <span>Sichtbarkeit</span>
                  <strong>+48%</strong>
                </div>
                <svg viewBox="0 0 220 88" role="presentation" focusable="false">
                  <path className="growth-grid-line" d="M0 64H220" />
                  <path className="growth-grid-line" d="M0 34H220" />
                  <path className="growth-area" d="M4 74 C42 72 52 54 86 56 C124 58 130 28 164 30 C190 31 198 18 216 14 V88 H4 Z" />
                  <path className="growth-line" d="M4 74 C42 72 52 54 86 56 C124 58 130 28 164 30 C190 31 198 18 216 14" />
                </svg>
              </div>
            </div>

            <div className="floating-kpi kpi-one">
              <span>Keywords</span>
              <strong>+37</strong>
            </div>
            <div className="floating-kpi kpi-two">
              <span>Anfragen</span>
              <strong>+31%</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="metric-strip" aria-label="SEO Kennzahlen">
        {[
          ["5+ Bio.", "Google-Suchanfragen pro Jahr"],
          ["Seite 1", "bekommt die entscheidenden Klicks"],
          ["Organisch", "arbeitet langfristig weiter"],
          ["Lokal", "macht Anfragen messbar"],
        ].map(([value, label]) => (
          <div className="metric" key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="grundlagen" className="section split-section">
        <div className="split-copy">
          <Eyebrow>Was ist SEO?</Eyebrow>
          <h2>Organisch sichtbar werden, ohne jeden Klick zu bezahlen.</h2>
          <p>
            Suchmaschinenoptimierung verbindet technische Basis, klare Inhalte und Vertrauen.
            So entsteht Sichtbarkeit, die Nutzer nicht nur erreicht, sondern in Anfragen verwandelt.
          </p>
        </div>
        <div className="feature-list">
          {BASICS.map(({ Icon, title, text }) => (
            <article className="feature-item" key={title}>
              <Icon size={20} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="faktoren" className="section">
        <SectionHeading
          eyebrow="Ranking-Signale"
          title="Die Faktoren hinter guten Google-Positionen."
          text="Google bewertet viele Signale. Diese Bereiche entscheiden besonders oft darüber, ob eine Seite sichtbar wird."
        />
        <div className="service-grid">
          {FACTORS.map(({ Icon, title, text }) => (
            <article className="service-card" key={title}>
              <Icon size={27} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="signal-list">
          {SECONDARY_FACTORS.map(({ Icon, label }) => (
            <div className="signal-item" key={label}>
              <Icon size={17} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="optimierung" className="section split-section optimization-section">
        <div className="split-copy sticky-copy">
          <Eyebrow>On-Page SEO</Eyebrow>
          <h2>Alles, was du direkt auf deiner Website steuern kannst.</h2>
          <p>
            On-Page SEO ordnet Texte, Meta-Daten, interne Links und Medien so, dass Nutzer
            und Suchmaschinen schnell verstehen, warum deine Seite relevant ist.
          </p>
        </div>
        <div className="timeline-list">
          {ONPAGE.map((item) => (
            <article className="timeline-item" key={item.n}>
              <span>{item.n}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-band">
        <SectionHeading
          eyebrow="Off-Page SEO"
          title="Autorität, die außerhalb deiner Website entsteht."
          text="Vertrauen entsteht durch Empfehlungen, Erwähnungen und lokale Signale, die zu deinem Angebot passen."
        />
        <div className="service-grid">
          {OFFPAGE.map(({ Icon, title, text }) => (
            <article className="service-card" key={title}>
              <Icon size={27} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="SEO in der Praxis"
          title="Ein System aus Analyse, Struktur und messbarer Umsetzung."
          text="Professionelle SEO funktioniert nicht als Einmalmaßnahme, sondern als wiederholbarer Prozess."
        />
        <div className="service-grid four">
          {PRACTICE.map(({ Icon, title, text }) => (
            <article className="service-card compact-card" key={title}>
              <Icon size={25} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-band">
        <SectionHeading
          eyebrow="Häufige Fehler"
          title="Was gute Rankings unnötig ausbremst."
          text="Viele SEO-Probleme entstehen nicht durch fehlende Tools, sondern durch unklare Prioritäten."
        />
        <div className="service-grid four">
          {ERRORS.map(({ Icon, title, text }) => (
            <article className="service-card compact-card" key={title}>
              <Icon size={25} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="prozess" className="section process-section">
        <SectionHeading eyebrow="Prozess" title="Vier Schritte bis zur sichtbaren SEO-Struktur." compact />
        <div className="process-grid">
          {PROCESS.map((step) => (
            <article className="process-step" key={step.n}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="tools" className="section packages-section">
        <SectionHeading eyebrow="Tools" title="Software, die Entscheidungen messbar macht." compact />
        <div className="package-grid">
          {TOOLS.map(({ Icon, name, tag, text }) => (
            <article className="package-card" key={name}>
              <Icon size={25} />
              <h3>{name}</h3>
              <p className="price">{tag}</p>
              <p>{text}</p>
              <a href="#faq">
                Details
                <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="section faq-section">
        <SectionHeading eyebrow="FAQ" title="Antworten auf die wichtigsten SEO-Fragen." compact />
        <div className="faq-list">
          {FAQ.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>
                <span>{item.q}</span>
                <span className="faq-plus"><Plus size={15} /></span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div>
          <Eyebrow>Projekt anfragen</Eyebrow>
          <h2>Bereit für mehr Sichtbarkeit und klare SEO-Prioritäten?</h2>
          <p>
            Starte mit einer sauberen Analyse, einer verständlichen Seitenstruktur und Inhalten,
            die Ranking, Vertrauen und Anfragefokus verbinden.
          </p>
        </div>
        <div className="contact-card">
          {["SEO-Audit", "Content-Struktur", "Lokale Sichtbarkeit"].map((item) => (
            <div className="contact-choice" key={item}>
              <Check size={17} />
              <span>{item}</span>
            </div>
          ))}
          <a className="primary-button" href="#grundlagen">
            Zum Anfang
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-branding">
            <span className="brand">
              <BrandMark />
              <span className="brand-copy">SEOGUIDE</span>
            </span>
            <span>SEO, Google-Ranking und klare Website-Strukturen im DigitalVision-Look.</span>
          </div>
          <a className="footer-back-to-top" href="#top">
            <Search size={16} />
            Nach oben
          </a>
        </div>
      </footer>
    </main>
  );
}
