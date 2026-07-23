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
    text: "Backlinks wirken wie Empfehlungen von außen. Entscheidend sind Relevanz, Qualität und ein natürliches Linkprofil statt möglichst vieler schwacher Verweise.",
  },
  {
    Icon: PenLine,
    title: "Content-Qualität",
    text: "Gute Inhalte beantworten echte Fragen, erklären ein Thema vollständig und sind klar gegliedert. So verstehen Nutzer, Suchmaschinen und KI-Systeme den Mehrwert schneller.",
  },
  {
    Icon: Zap,
    title: "Technische Basis",
    text: "Ladezeit, mobile Darstellung, Sicherheit, Crawlbarkeit und saubere Statuscodes bilden das Fundament. Technische Fehler bremsen Rankings oft, bevor Content wirken kann.",
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
  { Icon: Lock, label: "HTTPS & Sicherheit" },
  { Icon: Target, label: "Suchintention" },
  { Icon: Clock, label: "UX & Verweildauer" },
  { Icon: Layers, label: "Saubere Seitenstruktur" },
  { Icon: RefreshCw, label: "Regelmäßige Updates" },
];

const ONPAGE = [
  { n: "01", title: "Title Tag", text: "50 bis 60 Zeichen, klares Hauptthema und ein Nutzenversprechen." },
  { n: "02", title: "Meta-Description", text: "120 bis 160 Zeichen, verständlicher Mehrwert und ein konkreter Klickanreiz." },
  { n: "03", title: "Überschriften", text: "Eine klare H1, logisch gegliederte H2/H3 und natürliche Begriffe rund um das Thema." },
  { n: "04", title: "Interne Links", text: "Wichtige Seiten werden logisch verbunden, damit Nutzer und Crawler schnell zum nächsten relevanten Inhalt finden." },
  { n: "05", title: "Bilder & Medien", text: "Komprimierte Medien, sprechende Dateinamen und beschreibende Alternativtexte verbessern Geschwindigkeit und Verständlichkeit." },
];

const OFFPAGE = [
  { Icon: Trophy, title: "Linkaufbau", text: "Relevante Backlinks zeigen Suchmaschinen, dass andere Quellen deine Inhalte als vertrauenswürdig einstufen." },
  { Icon: Megaphone, title: "Markenerwähnungen", text: "Auch Erwähnungen ohne direkten Link können Autorität stärken, wenn sie thematisch passend und glaubwürdig sind." },
  { Icon: Star, title: "Lokale Signale", text: "Bewertungen, ein gepflegtes Google Business Profile, Öffnungszeiten und Standortinformationen sind für lokale Rankings zentral." },
];

const PRACTICE = [
  { Icon: ShieldCheck, title: "SEO-Audit", text: "Ein Audit prüft Technik, Inhalte, Struktur, Wettbewerb und schnelle Hebel. Daraus entsteht eine klare Reihenfolge der nächsten Maßnahmen." },
  { Icon: Globe, title: "Local SEO", text: "Für regionale Anbieter zählen lokale Suchbegriffe, Karten-Ergebnisse, Bewertungen und konsistente Standortdaten besonders stark." },
  { Icon: Search, title: "Google + KI-Suchen", text: "Moderne Inhalte sollten nicht nur ranken, sondern auch von KI-Systemen verstanden, zusammengefasst und als Quelle erkannt werden können." },
  { Icon: BarChart2, title: "Reporting & KPIs", text: "Klicks, Impressionen, Rankings, technische Fehler und Anfragen müssen regelmäßig sichtbar sein, damit SEO steuerbar bleibt." },
];

const ERRORS = [
  { Icon: Search, title: "Suchintention ignorieren", text: "Ein Keyword reicht nicht, wenn die Seite die eigentliche Nutzerfrage verfehlt." },
  { Icon: PenLine, title: "Zu wenig Tiefe", text: "Oberflächliche Texte verlieren gegen Seiten, die ein Thema vollständig erklären." },
  { Icon: Globe, title: "Technik unterschätzen", text: "Langsame Seiten, fehlerhafte Weiterleitungen oder blockierte Inhalte verhindern, dass Suchmaschinen deine Seite sauber erfassen." },
  { Icon: BarChart2, title: "Black-Box-SEO akzeptieren", text: "Ohne transparente Daten, klare Aufgaben und regelmäßige Auswertung bleiben Fortschritte unsichtbar und Prioritäten geraten durcheinander." },
];

const PROCESS = [
  { n: "01", title: "Analyse", text: "Keywords, Wettbewerb, Technik, bestehende Inhalte und lokale Chancen werden zuerst bewertet." },
  { n: "02", title: "Technik & Struktur", text: "Crawlbarkeit, Ladezeit, interne Links und Seitenarchitektur schaffen die Basis für bessere Auffindbarkeit." },
  { n: "03", title: "Content", text: "Texte, Landingpages und Ratgeber werden so aufgebaut, dass sie Nutzerfragen beantworten und semantisch klar sind." },
  { n: "04", title: "Autorität & Messung", text: "Backlinks, Erwähnungen, Bewertungen und KPI-Tracking zeigen, ob die Maßnahmen tatsächlich Wirkung erzeugen." },
];

const TOOLS = [
  { Icon: Search, name: "Google Search Console", tag: "Kostenlos", text: "Direkte Daten zu Klicks, Impressionen, Rankings und technischen Problemen." },
  { Icon: BarChart2, name: "SEO-Crawler", tag: "Audit", text: "Crawls zeigen defekte Links, Weiterleitungen, Statuscodes, Meta-Daten und technische Muster auf größeren Websites." },
  { Icon: Globe, name: "PageSpeed Insights", tag: "Performance", text: "Core Web Vitals und konkrete Ladezeitprobleme werden sichtbar, damit Technik gezielt verbessert werden kann." },
];

const FAQ = [
  { q: "Wie lange dauert es, bis SEO wirkt?", a: "Erste Signale sind oft nach 3 bis 6 Monaten sichtbar. Spürbare Verbesserungen hängen von Wettbewerb, Technik, Content und Domain-Stärke ab." },
  { q: "Was ist der Unterschied zwischen SEO und SEA?", a: "SEO baut organische Sichtbarkeit auf. SEA sind bezahlte Anzeigen, die sofort sichtbar sein können, aber pro Klick Budget verbrauchen." },
  { q: "Welche Bereiche gehören zu SEO?", a: "SEO besteht vor allem aus Technik, Content und Autorität. Dazu kommen lokale Signale, Nutzererfahrung, interne Verlinkung, Reporting und heute auch die Auffindbarkeit in KI-Suchen." },
  { q: "Sind Backlinks wirklich wichtig?", a: "Für wettbewerbsstarke Begriffe ja. Entscheidend ist aber Qualität: thematisch passende Empfehlungen sind wertvoller als viele schwache oder künstliche Links." },
  { q: "Wie oft sollte man Inhalte aktualisieren?", a: "Wichtige Seiten sollten regelmäßig geprüft werden, besonders wenn sich Angebote, Wettbewerb oder Suchintention verändern. Aktualität hilft, Inhalte relevant zu halten." },
  { q: "Wie wichtig sind KI-Suchen für SEO?", a: "KI-Suchen nutzen klare, gut strukturierte und vertrauenswürdige Inhalte. Wer Themen verständlich erklärt, Quellenlogik berücksichtigt und technische Hürden reduziert, verbessert auch dort seine Chancen." },
  { q: "Was kostet SEO?", a: "Die Kosten hängen von Wettbewerb, Website-Größe, technischem Zustand, Content-Bedarf und Ziel ab. Kleine Projekte brauchen weniger Aufwand, stark umkämpfte Märkte benötigen meist laufende Optimierung." },
  { q: "Was ist wichtiger: Technik, Content oder Links?", a: "Die Reihenfolge ist pragmatisch: erst technische Basis und Crawlbarkeit, dann hilfreiche Inhalte, danach Autorität durch Links, Erwähnungen, Bewertungen und Vertrauen." },
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
            <span className="hero-wordmark">SEO KOMPAKT</span>
            <span className="hero-tagline">Ranking, Content und Technik</span>
          </div>

          <div className="hero-statement">
            <h1>
              <span>Besser gefunden werden.</span>
            </h1>
            <p>
              Die wichtigsten SEO-Grundlagen auf den Punkt.
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
                    <strong>Nutzerfrage verstehen</strong>
                    <small>Inhalte passend zur Suche ausrichten</small>
                  </div>
                </div>
                <div className="serp-row">
                  <span>02</span>
                  <div>
                    <strong>Seitenstruktur verbessern</strong>
                    <small>Wichtige Inhalte sinnvoll verbinden</small>
                  </div>
                </div>
                <div className="serp-row">
                  <span>03</span>
                  <div>
                    <strong>Website schneller machen</strong>
                    <small>Mobil, stabil und technisch sauber</small>
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

      <section id="faktoren" className="section left-heading-section">
        <SectionHeading
          eyebrow="Ranking-Signale"
          title="Die Faktoren hinter guten Google-Positionen."
          text="Google bewertet technische Qualität, hilfreiche Inhalte, Nutzererfahrung und Vertrauen. Wenn diese Bereiche sauber zusammenspielen, steigt die Chance, dass eine Seite sichtbar wird und relevante Besucher erreicht."
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

      <section id="optimierung" className="section split-section optimization-section left-heading-section">
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

      <section className="section dark-band left-heading-section">
        <SectionHeading
          eyebrow="Off-Page SEO"
          title="Autorität, die außerhalb deiner Website entsteht."
          text="Vertrauen entsteht nicht nur auf deiner eigenen Website. Auch Empfehlungen, Erwähnungen, Bewertungen und lokale Signale zeigen Suchmaschinen, dass dein Angebot relevant und glaubwürdig ist."
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

      <section className="section left-heading-section">
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

      <section className="section dark-band left-heading-section">
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
