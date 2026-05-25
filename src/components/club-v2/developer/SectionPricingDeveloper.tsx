"use client";

type Tier = {
  level: string;
  name: string;
  price: number;
  tagline: string;
  features: { text: string; bold?: string; off?: boolean }[];
  ctaLabel: string;
  ctaVariant: "secondary" | "primary" | "luxury";
  variant: "default" | "featured" | "premium";
};

const tiers: Tier[] = [
  {
    level: "Nivel 01",
    name: "Visibilidad",
    price: 3000,
    tagline: "Ideal para proyectos boutique de 20-50 unidades",
    features: [
      { text: "Vitrina en portal del Club (ficha completa)" },
      { text: "2 email blasts/año a toda la red" },
      { text: "Posts en grupos privados (4/año)" },
      { text: "Acceso al directorio de agentes inmobiliarios" },
      { text: "Reporte trimestral de tráfico y leads" },
      { text: "Tours grupales personalizados", off: true },
      { text: "Eventos exclusivos", off: true },
      { text: "Co-branding en convención", off: true },
    ],
    ctaLabel: "Solicitar información",
    ctaVariant: "secondary",
    variant: "default",
  },
  {
    level: "Nivel 02",
    name: "Activación",
    price: 5000,
    tagline: "Para proyectos de 50-150 unidades en lanzamiento",
    features: [
      { text: "Todo lo de Nivel 01" },
      { text: "", bold: "1 tour grupal personalizado/año" },
      { text: "6 email blasts/año + newsletter destacada" },
      { text: "Capacitación a agentes inmobiliarios sobre tu proyecto" },
      { text: "Presencia en 2 eventos del Club" },
      { text: "Acompañamiento legal/contable en cierres" },
      { text: "Reporte mensual de performance" },
      { text: "Co-branding en convención", off: true },
    ],
    ctaLabel: "Agendar reunión comercial",
    ctaVariant: "primary",
    variant: "featured",
  },
  {
    level: "Nivel 03",
    name: "Partnership",
    price: 10000,
    tagline: "Para desarrollos grandes (+150 unidades) o pipeline de varios proyectos",
    features: [
      { text: "Todo lo de Nivel 02" },
      { text: "", bold: "3 tours grupales personalizados/año" },
      { text: "Email blasts ilimitados" },
      { text: "Tu proyecto destacado en home del portal" },
      { text: "", bold: "Stand en Convención Inmobiliaria USA" },
      { text: "Co-branding y rueda de prensa" },
      { text: "Gerente de cuenta dedicado" },
      { text: "Estrategia comercial personalizada" },
    ],
    ctaLabel: "Hablar con equipo comercial",
    ctaVariant: "luxury",
    variant: "premium",
  },
];

const fmtPrice = (n: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);

export default function SectionPricingDeveloper() {
  return (
    <section className="dev-pricing" id="planes">
      <div className="v2-container">
        <header className="dp-header reveal">
          <span className="section-number dp-number" aria-hidden="true">03</span>
          <span className="section-marker">— Planes anuales B2B</span>
          <h2 className="h-section">
            Tres niveles de presencia
            <br />
            según el tamaño
            <br />
            <em className="emphasis-gold">de tu proyecto.</em>
          </h2>
        </header>

        <div className="dp-grid">
          {tiers.map((t, i) => (
            <article
              key={t.name}
              className={`dp-card dp-card--${t.variant} reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {t.variant === "featured" && (
                <div className="dp-sticker sticker sticker--gold sticker--animated" aria-hidden="true">
                  <span className="sticker-line">Más<br />solicitado</span>
                </div>
              )}

              <header className="dp-head">
                <span className="dp-level">{t.level}</span>
                <h3 className="dp-name">{t.name}</h3>
                <div className="dp-price">
                  <span className="price-symbol">$</span>
                  <strong>{fmtPrice(t.price)}</strong>
                  <span className="price-unit">USD / año</span>
                </div>
                <p className="dp-tagline">{t.tagline}</p>
              </header>

              <ul className="dp-features">
                {t.features.map((f, j) => (
                  <li key={j} className={f.off ? "is-off" : ""}>
                    <span className="feat-mark" aria-hidden="true">
                      {f.off ? "✗" : "✓"}
                    </span>
                    <span className="feat-text">
                      {f.bold ? <strong>{f.bold}</strong> : f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`#agendar-reunion?nivel=${t.level.replace(/[^\d]/g, "")}`}
                className={`btn btn--${t.ctaVariant} btn--full dp-cta`}
              >
                {t.ctaLabel}
              </a>
            </article>
          ))}
        </div>

        <p className="dp-note">
          💡 <strong>Modelo de inversión, no de costo.</strong> El ROI promedio
          sobre la membresía es de 4-7x el primer año en proyectos activos.{" "}
          <a href="#casos">Ver casos.</a>
        </p>
      </div>

      <style jsx>{`
        .dev-pricing {
          background: var(--off-white);
          padding: var(--v2-space-8) 0;
        }
        .dp-header {
          position: relative;
          margin-bottom: 3.5rem;
          text-align: center;
        }
        .dp-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
        }
        :global(.dp-header h2),
        :global(.dp-header .section-marker) {
          position: relative;
          z-index: 1;
        }
        :global(.dp-header .section-marker) { margin-bottom: 1rem; }

        .dp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }
        .dp-card {
          background: var(--cream);
          padding: 2.25rem 2rem 2rem;
          border: 1px solid var(--gold-luxury);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .dp-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
        }
        .dp-card--featured {
          background: var(--black-primary);
          color: var(--off-white);
          border-color: var(--gold-luxury);
          transform: scale(1.04);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.25);
        }
        .dp-card--featured:hover {
          transform: scale(1.04) translateY(-6px);
        }
        .dp-card--premium {
          background: linear-gradient(135deg, var(--gold-light), var(--cream));
          border-color: var(--gold-dark);
        }

        .dp-sticker {
          position: absolute;
          top: -22px;
          right: 24px;
          z-index: 10;
          padding: 0.75rem 1rem;
        }

        .dp-head {
          padding-bottom: 1.5rem;
          border-bottom: 1px solid currentColor;
          margin-bottom: 1.5rem;
        }
        .dp-card .dp-head { border-bottom-color: var(--gray-border); }
        .dp-card--featured .dp-head { border-bottom-color: rgba(255, 255, 255, 0.18); }
        .dp-card--premium .dp-head { border-bottom-color: rgba(154, 126, 63, 0.3); }
        .dp-level {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.75rem;
          letter-spacing: 0.18em;
          color: var(--gold-dark);
          display: block;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          font-weight: 600;
        }
        .dp-card--featured .dp-level { color: var(--gold-luxury); }
        .dp-name {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 2.5rem;
          font-weight: 500;
          line-height: 1;
          margin: 0 0 1rem;
          letter-spacing: -0.025em;
        }
        .dp-card--featured .dp-name { color: var(--yellow-brand); }
        .dp-card--premium .dp-name { color: var(--gold-dark); }

        .dp-price {
          display: flex;
          align-items: baseline;
          gap: 0.35rem;
          margin-bottom: 0.85rem;
        }
        .price-symbol {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.5rem;
          font-weight: 300;
          opacity: 0.7;
        }
        .dp-price strong {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: clamp(2.75rem, 5.5vw, 3.5rem);
          font-weight: 400;
          line-height: 1;
          letter-spacing: -0.03em;
          color: var(--gold-dark);
        }
        .dp-card--featured .dp-price strong { color: var(--gold-luxury); }
        .price-unit {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.8125rem;
          letter-spacing: 0.08em;
          opacity: 0.7;
          margin-left: 0.4rem;
        }
        .dp-tagline {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-style: italic;
          font-size: 0.9375rem;
          opacity: 0.75;
          margin: 0;
          line-height: 1.4;
        }

        .dp-features {
          list-style: none;
          padding: 0;
          margin: 0 0 1.75rem;
          flex: 1;
        }
        .dp-features li {
          padding: 0.7rem 0;
          border-bottom: 1px solid rgba(10, 10, 10, 0.08);
          font-size: 0.9375rem;
          line-height: 1.5;
          display: flex;
          gap: 0.6rem;
          align-items: flex-start;
        }
        .dp-card--featured .dp-features li {
          border-bottom-color: rgba(255, 255, 255, 0.08);
        }
        .dp-features li.is-off { opacity: 0.4; }
        .feat-mark {
          color: var(--gold-dark);
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 0.05rem;
        }
        .dp-card--featured .feat-mark { color: var(--gold-luxury); }
        .dp-features li.is-off .feat-mark { color: currentColor; }
        .feat-text { flex: 1; }
        .dp-features strong { font-weight: 600; }
        .dp-card--featured .dp-features strong { color: var(--yellow-brand); }
        .dp-card--premium .dp-features strong { color: var(--gold-dark); }

        .dp-cta { margin-top: auto; }

        .dp-note {
          margin-top: 2.5rem;
          text-align: center;
          font-size: 0.95rem;
          color: var(--gray-text);
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-style: italic;
        }
        .dp-note strong {
          color: var(--black-primary);
          font-weight: 500;
          font-style: normal;
        }
        .dp-note a {
          color: var(--gold-dark);
          font-weight: 600;
          text-decoration: underline;
          font-style: normal;
        }

        @media (max-width: 1023px) {
          .dp-grid { grid-template-columns: 1fr; }
          .dp-card--featured { transform: none; }
          .dp-card--featured:hover { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
}
