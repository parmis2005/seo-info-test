"use client";

import { useState } from "react";
import {
  Link2,
  PenLine,
  Zap,
  TrendingUp,
  Target,
  ShieldCheck,
  Coins,
  Smartphone,
  Lock,
  Clock,
  Layers,
  RefreshCw,
  Trophy,
  Megaphone,
  Star,
  Search,
  BarChart2,
  Globe,
  ArrowRight,
  Plus,
} from "lucide-react";

/* ─────────────────────────── design tokens ──────────────────────────────── */
const C = {
  bg:      "#09090f",
  surface: "#0e0e1a",
  border:  "rgba(255,255,255,0.07)",
  muted:   "rgba(255,255,255,0.38)",
  accent:  "#6366f1",
  accent2: "#8b5cf6",
  text:    "#e8e8f0",
};

/* ──────────────────────────────── data ─────────────────────────────────── */
const FACTORS = [
  {
    Icon: Link2,
    title: "Backlinks",
    text: "Links von anderen Webseiten sind Googles stärkstes Vertrauenssignal. Qualität schlägt Quantität.",
  },
  {
    Icon: PenLine,
    title: "Content-Qualität",
    text: "Einzigartiger, tiefgehender Content der die Suchabsicht des Nutzers vollständig erfüllt.",
  },
  {
    Icon: Zap,
    title: "Core Web Vitals",
    text: "Ladezeit, Interaktivität und visuelle Stabilität sind seit 2021 offizielle Google-Signale.",
  },
];

const BASICS = [
  { Icon: TrendingUp, title: "Nachhaltiger Traffic",  text: "Wächst langfristig ohne laufende Werbekosten." },
  { Icon: Target,     title: "Zielgerichtete Nutzer", text: "Du erreichst Menschen, die aktiv nach dir suchen." },
  { Icon: Trophy,     title: "Vertrauen & Autorität", text: "Hohe Rankings stärken Glaubwürdigkeit und Marke." },
  { Icon: Coins,      title: "Bester ROI",            text: "Langfristig der günstigste Marketingkanal." },
];

const SECONDARY_FACTORS = [
  { Icon: Smartphone, label: "Mobile-First" },
  { Icon: Lock,       label: "HTTPS / Sicherheit" },
  { Icon: Target,     label: "Keyword-Relevanz" },
  { Icon: Clock,      label: "Verweildauer / UX" },
  { Icon: Layers,     label: "Strukturierte Daten" },
  { Icon: RefreshCw,  label: "Aktualität des Contents" },
];

const ONPAGE = [
  { n: "01", title: "Title Tag",         text: "50–60 Zeichen, Haupt-Keyword an erster Stelle." },
  { n: "02", title: "Meta-Description",  text: "120–160 Zeichen, klarer Nutzen, überzeugender CTA." },
  { n: "03", title: "Überschriften",     text: "Nur ein H1. Keywords natürlich in H2/H3 einbauen." },
  { n: "04", title: "Interne Links",     text: "Verteile Link-Autorität und führe Nutzer logisch durch die Seite." },
  { n: "05", title: "Bilder & Alt-Texte", text: "WebP-Format, beschreibende Alt-Texte mit Keywords, sprechende Dateinamen." },
];

const OFFPAGE = [
  { Icon: Trophy,    title: "Linkbuilding",            text: "Gewinne natürliche Backlinks durch herausragenden Content, Gastbeiträge und strategische Partnerschaften." },
  { Icon: Megaphone, title: "Brand Mentions",          text: "Erwähnungen deiner Marke ohne direkten Link werden von Google als Autoritätssignal erkannt." },
  { Icon: Star,      title: "Google Business Profile", text: "Für lokale SEO essentiell. Bewertungen und regelmäßige Beiträge steigern lokale Rankings." },
];

const PROCESS = [
  { n: "01", title: "Analyse",   text: "Keywords, Wettbewerb und technischen Status deiner Domain prüfen." },
  { n: "02", title: "Technik",   text: "Schnelle Ladezeit, Mobile-Optimierung und saubere Crawlbarkeit sicherstellen." },
  { n: "03", title: "Content",   text: "Hochwertigen Content erstellen und bestehende Seiten optimieren." },
  { n: "04", title: "Autorität", text: "Hochwertige Backlinks aufbauen und Rankings kontinuierlich überwachen." },
];

const TOOLS = [
  { Icon: Search,   name: "Google Search Console", tag: "Kostenlos",       text: "Direkte Daten von Google – Rankings, Fehler, Impressionen." },
  { Icon: BarChart2, name: "Ahrefs",               tag: "Kostenpflichtig", text: "Backlink-Analyse und Keyword-Recherche auf Profi-Niveau." },
  { Icon: Globe,    name: "PageSpeed Insights",    tag: "Kostenlos",       text: "Core Web Vitals deiner Seite messen und verbessern." },
];

const FAQ = [
  { q: "Wie lange dauert es bis SEO wirkt?",            a: "Erste Ergebnisse sind nach 3–6 Monaten sichtbar, signifikante Verbesserungen nach 6–12 Monaten – je nach Wettbewerb und Domain-Alter." },
  { q: "Was ist der Unterschied zwischen SEO und SEA?", a: "SEO erzeugt organischen Traffic ohne direkte Klickkosten. SEA sind bezahlte Google Ads – sofort sichtbar, aber jeder Klick kostet." },
  { q: "Wie viele Keywords pro Seite?",                 a: "Eine Seite, ein Haupt-Keyword plus 3–5 semantisch verwandte Begriffe. Fokussiere dich auf Themen, nicht einzelne Wörter." },
  { q: "Sind Backlinks wirklich so wichtig?",           a: "Für kompetitive Keywords fast unerlässlich. Bei Long-Tail-Suchen kann sehr guter Content auch ohne viele Backlinks gut ranken." },
];

/* ──────────────────────── helper components ─────────────────────────────── */
function Tag({ children, color = C.accent }: { children: string; color?: string }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: `${color}18`, border: `1px solid ${color}35`,
      color, padding: "5px 14px", borderRadius: 100,
      fontSize: 12, fontWeight: 600, letterSpacing: "0.04em",
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: color, display: "inline-block" }} />
      {children}
    </span>
  );
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: C.surface,
        border: `1px solid ${hovered ? "rgba(99,102,241,0.35)" : C.border}`,
        borderRadius: 16,
        padding: "36px 32px",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-3px)" : "none",
        boxShadow: hovered ? "0 20px 60px rgba(99,102,241,0.08)" : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function IconBox({ Icon, color = C.accent }: { Icon: React.ElementType; color?: string }) {
  return (
    <div style={{
      width: 44, height: 44, borderRadius: 10, flexShrink: 0,
      background: `${color}14`, border: `1px solid ${color}28`,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <Icon size={20} color={color} strokeWidth={1.75} />
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${C.border}`, padding: "28px 0" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", textAlign: "left", background: "none", border: "none",
          cursor: "pointer", display: "flex", justifyContent: "space-between",
          alignItems: "center", gap: 16, color: C.text,
        }}
      >
        <span style={{ fontSize: 17, fontWeight: 500 }}>{q}</span>
        <span style={{
          flexShrink: 0, width: 28, height: 28, borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: open ? `${C.accent}20` : "rgba(255,255,255,0.06)",
          transition: "all 0.25s ease",
          transform: open ? "rotate(45deg)" : "none",
        }}>
          <Plus size={14} color={open ? C.accent : C.muted} />
        </span>
      </button>
      <div style={{ overflow: "hidden", maxHeight: open ? 200 : 0, transition: "max-height 0.35s ease" }}>
        <p style={{ paddingTop: 16, fontSize: 15, lineHeight: 1.75, color: C.muted }}>{a}</p>
      </div>
    </div>
  );
}

/* ──────────────────────────────── page ─────────────────────────────────── */
export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const NAV = ["Grundlagen", "Faktoren", "Optimierung", "Prozess", "Tools", "FAQ"];

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(9,9,15,0.8)", backdropFilter: "blur(18px)",
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{
              width: 32, height: 32, borderRadius: 9,
              background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Search size={15} color="#fff" strokeWidth={2.5} />
            </div>
            <span style={{ fontWeight: 700, fontSize: 15, color: C.text }}>
              SEO<span style={{ color: C.accent }}>Guide</span>
            </span>
          </a>

          <nav style={{ display: "flex", gap: 4 }} className="hidden-mobile">
            {NAV.map(n => (
              <a key={n} href={`#${n.toLowerCase()}`} style={{
                padding: "6px 14px", borderRadius: 8, fontSize: 14,
                color: C.muted, textDecoration: "none", transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = C.text)}
                onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
              >{n}</a>
            ))}
          </nav>

          <a href="#grundlagen" style={{
            background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`,
            color: "#fff", padding: "9px 22px", borderRadius: 9,
            fontSize: 14, fontWeight: 600, textDecoration: "none",
          }} className="show-desktop">Jetzt starten</a>

          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: "rgba(255,255,255,0.06)", border: "none", borderRadius: 8,
            padding: "8px 10px", cursor: "pointer", color: C.muted,
          }} className="show-burger">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M0 1h18M0 7h18M0 13h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div style={{ borderTop: `1px solid ${C.border}`, padding: "12px 32px 20px" }}>
            {NAV.map(n => (
              <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={{
                display: "block", padding: "10px 0",
                borderBottom: `1px solid ${C.border}`,
                color: C.muted, textDecoration: "none", fontSize: 15,
              }}>{n}</a>
            ))}
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-desktop  { display: inline-block !important; }
          .show-burger   { display: none !important; }
        }
        .hidden-mobile { display: none; }
        .show-desktop  { display: none; }
        .show-burger   { display: block; }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", paddingTop: 64 }}>
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 500, background: "radial-gradient(ellipse, rgba(99,102,241,0.13) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "65%", left: "20%", width: 350, height: 350, background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(99,102,241,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.04) 1px,transparent 1px)", backgroundSize: "72px 72px", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
          <div style={{ marginBottom: 32 }}>
            <Tag>Google Ranking Guide 2025</Tag>
          </div>

          <h1 style={{
            fontSize: "clamp(2.6rem, 6vw, 5rem)",
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: "-0.03em", color: C.text, marginBottom: 24,
          }}>
            Mehr Sichtbarkeit.<br />
            <span style={{ background: `linear-gradient(135deg, ${C.accent}, ${C.accent2}, #06b6d4)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Mehr Kunden.
            </span>
          </h1>

          <p style={{ fontSize: 18, color: C.muted, maxWidth: 520, margin: "0 auto 44px", lineHeight: 1.7 }}>
            Der komplette SEO-Leitfaden – kompakt erklärt. Lerne wie Google Rankings funktionieren und was du konkret tun kannst.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#grundlagen" style={{
              background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`,
              color: "#fff", padding: "14px 32px", borderRadius: 10,
              fontSize: 15, fontWeight: 600, textDecoration: "none",
              boxShadow: `0 8px 32px rgba(99,102,241,0.35)`,
              display: "flex", alignItems: "center", gap: 8,
            }}>
              Grundlagen verstehen <ArrowRight size={16} />
            </a>
            <a href="#prozess" style={{
              background: "rgba(255,255,255,0.05)",
              border: `1px solid ${C.border}`,
              color: C.text, padding: "14px 32px", borderRadius: 10,
              fontSize: 15, fontWeight: 500, textDecoration: "none",
            }}>Prozess ansehen</a>
          </div>

          <div style={{ marginTop: 80, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.18)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
            <div style={{ width: 1, height: 48, background: `linear-gradient(to bottom, ${C.accent}, transparent)` }} />
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────────────────── */}
      <section style={{ borderTop: `1px solid ${C.border}`, background: "#0b0b14" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "80px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 40, textAlign: "center" }}>
            {[
              { v: "93 %",     l: "aller Online-Erlebnisse starten mit Google" },
              { v: "75 %",     l: "der Nutzer klicken nie auf Seite 2" },
              { v: "68 %",     l: "des Traffics ist organisch" },
              { v: "3,5 Mrd.", l: "Suchanfragen täglich" },
            ].map((s, i) => (
              <div key={i}>
                <div style={{
                  fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 800,
                  background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  marginBottom: 10,
                }}>{s.v}</div>
                <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.5, maxWidth: 160, margin: "0 auto" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRUNDLAGEN ──────────────────────────────────────────────────── */}
      <section id="grundlagen" style={{ borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "120px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <div style={{ marginBottom: 24 }}><Tag>Was ist SEO?</Tag></div>
              <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.text, marginBottom: 24 }}>
                Organisch gefunden werden – ohne Werbekosten.
              </h2>
              <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.75, marginBottom: 20 }}>
                SEO (Search Engine Optimization) sorgt dafür, dass deine Webseite bei relevanten Suchanfragen ganz oben erscheint – dauerhaft und ohne Klickkosten.
              </p>
              <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.75 }}>
                Die ersten 3 organischen Ergebnisse erhalten über <strong style={{ color: C.text }}>50 % aller Klicks</strong>. Seite 2 ist quasi unsichtbar.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {BASICS.map(({ Icon, title, text }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "20px 24px", background: C.surface, borderRadius: 12, border: `1px solid ${C.border}` }}>
                  <IconBox Icon={Icon} />
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: C.text, marginBottom: 4 }}>{title}</div>
                    <div style={{ fontSize: 14, color: C.muted }}>{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAKTOREN ────────────────────────────────────────────────────── */}
      <section id="faktoren" style={{ borderTop: `1px solid ${C.border}`, background: "#0b0b14" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "120px 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ marginBottom: 20 }}><Tag>Die wichtigsten Signale</Tag></div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.text, marginBottom: 16 }}>
              Top Ranking-Faktoren
            </h2>
            <p style={{ fontSize: 17, color: C.muted, maxWidth: 480, margin: "0 auto" }}>
              Google bewertet über 200 Signale. Diese drei zählen am meisten.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 48 }}>
            {FACTORS.map(({ Icon, title, text }, i) => (
              <Card key={i}>
                <IconBox Icon={Icon} />
                <h3 style={{ fontSize: 19, fontWeight: 700, color: C.text, margin: "20px 0 12px" }}>{title}</h3>
                <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7 }}>{text}</p>
              </Card>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {SECONDARY_FACTORS.map(({ Icon, label }, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "16px 20px", background: C.surface, borderRadius: 10, border: `1px solid ${C.border}`,
              }}>
                <Icon size={16} color={C.muted} strokeWidth={1.75} />
                <span style={{ fontSize: 14, color: C.muted, fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ON-PAGE OPTIMIERUNG ─────────────────────────────────────────── */}
      <section id="optimierung" style={{ borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "120px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div style={{ position: "sticky", top: 96 }}>
              <div style={{ marginBottom: 24 }}><Tag color="#8b5cf6">On-Page SEO</Tag></div>
              <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.text, marginBottom: 20 }}>
                Was du direkt steuern kannst.
              </h2>
              <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.75 }}>
                On-Page SEO umfasst alle Optimierungen auf deiner eigenen Webseite – von der Struktur über Texte bis zu technischen Meta-Daten.
              </p>
            </div>

            <div>
              {ONPAGE.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 24, padding: "32px 0", borderBottom: `1px solid ${C.border}` }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: C.accent, opacity: 0.5, flexShrink: 0, paddingTop: 3, fontVariantNumeric: "tabular-nums" }}>{item.n}</span>
                  <div>
                    <div style={{ fontSize: 17, fontWeight: 600, color: C.text, marginBottom: 8 }}>{item.title}</div>
                    <div style={{ fontSize: 15, color: C.muted, lineHeight: 1.65 }}>{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OFF-PAGE ────────────────────────────────────────────────────── */}
      <section style={{ borderTop: `1px solid ${C.border}`, background: "#0b0b14" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "120px 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ marginBottom: 20 }}><Tag color="#06b6d4">Off-Page SEO</Tag></div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.text, marginBottom: 16 }}>
              Autorität, die Google überzeugt.
            </h2>
            <p style={{ fontSize: 17, color: C.muted, maxWidth: 480, margin: "0 auto" }}>
              Backlinks sind digitale Empfehlungen. Ein Link von Spiegel.de wiegt mehr als 1.000 Links von unbekannten Seiten.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {OFFPAGE.map(({ Icon, title, text }, i) => (
              <Card key={i}>
                <IconBox Icon={Icon} color="#06b6d4" />
                <h3 style={{ fontSize: 17, fontWeight: 700, color: C.text, margin: "20px 0 10px" }}>{title}</h3>
                <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7 }}>{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROZESS ─────────────────────────────────────────────────────── */}
      <section id="prozess" style={{ borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "120px 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ marginBottom: 20 }}><Tag color="#f59e0b">Dein Fahrplan</Tag></div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.text }}>
              SEO in 4 Schritten.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
            {PROCESS.map((p, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 16, margin: "0 auto 24px",
                  background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18, fontWeight: 800, color: C.accent,
                }}>{p.n}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.65, maxWidth: 200, margin: "0 auto" }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ───────────────────────────────────────────────────────── */}
      <section id="tools" style={{ borderTop: `1px solid ${C.border}`, background: "#0b0b14" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "120px 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ marginBottom: 20 }}><Tag>Software & Ressourcen</Tag></div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.text, marginBottom: 16 }}>
              Die besten SEO-Tools.
            </h2>
            <p style={{ fontSize: 17, color: C.muted }}>
              Mit den richtigen Tools sparst du Zeit und triffst bessere Entscheidungen.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {TOOLS.map(({ Icon, name, tag, text }, i) => (
              <Card key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <IconBox Icon={Icon} />
                  <span style={{
                    fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 100,
                    background: tag === "Kostenlos" ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.12)",
                    color: tag === "Kostenlos" ? "#34d399" : "#f87171",
                    border: `1px solid ${tag === "Kostenlos" ? "rgba(16,185,129,0.2)" : "rgba(239,68,68,0.2)"}`,
                  }}>{tag}</span>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: C.text, marginBottom: 10 }}>{name}</h3>
                <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7 }}>{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section id="faq" style={{ borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "120px 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ marginBottom: 20 }}><Tag>Häufige Fragen</Tag></div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", color: C.text }}>
              Deine Fragen beantwortet.
            </h2>
          </div>
          {FAQ.map((item, i) => <FaqItem key={i} q={item.q} a={item.a} />)}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section style={{ borderTop: `1px solid ${C.border}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 400, background: "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 720, margin: "0 auto", padding: "140px 32px", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: C.text, marginBottom: 20 }}>
            Bereit für mehr<br />
            <span style={{ background: `linear-gradient(135deg, ${C.accent}, ${C.accent2}, #06b6d4)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Sichtbarkeit?
            </span>
          </h2>
          <p style={{ fontSize: 17, color: C.muted, marginBottom: 44, lineHeight: 1.7 }}>
            Starte heute. Schon kleine Verbesserungen können deine Rankings dauerhaft verändern.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#grundlagen" style={{
              background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`,
              color: "#fff", padding: "15px 36px", borderRadius: 10,
              fontSize: 15, fontWeight: 600, textDecoration: "none",
              boxShadow: `0 8px 32px rgba(99,102,241,0.35)`,
              display: "flex", alignItems: "center", gap: 8,
            }}>
              Zum Anfang <ArrowRight size={16} />
            </a>
            <a href="#faktoren" style={{
              background: "rgba(255,255,255,0.05)", border: `1px solid ${C.border}`,
              color: C.text, padding: "15px 36px", borderRadius: 10,
              fontSize: 15, fontWeight: 500, textDecoration: "none",
            }}>Ranking-Faktoren</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: `1px solid ${C.border}`, background: "#060609" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "40px 32px", display: "flex", flexDirection: "column", gap: 20, alignItems: "center", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Search size={13} color="#fff" strokeWidth={2.5} />
            </div>
            <span style={{ fontWeight: 700, fontSize: 14, color: C.text }}>SEO<span style={{ color: C.accent }}>Guide</span></span>
          </div>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "center" }}>
            {NAV.map(n => (
              <a key={n} href={`#${n.toLowerCase()}`} style={{ fontSize: 13, color: "rgba(255,255,255,0.22)", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = C.muted)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.22)")}
              >{n}</a>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.2)" }}>
            © 2025 SEOGuide · Alle Angaben ohne Gewähr
          </p>
        </div>
      </footer>

    </div>
  );
}
