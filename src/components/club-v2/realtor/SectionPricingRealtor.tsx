"use client";

type Tier = {
  id: "starter" | "elite" | "premium";
  name: string;
  tagline: string;
  oldPrice: number;
  newPrice: number;
  features: { text: string; bold?: string; off?: boolean }[];
  ctaLabel: string;
  ctaVariant: "secondary" | "primary" | "luxury";
  variant: "default" | "featured" | "premium";
};

const tiers: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Para empezar a operar internacionalmente",
    oldPrice: 27,
    newPrice: 20,
    features: [
      { text: "Acceso al portal de +40 proyectos" },
      { text: "Materiales de venta básicos" },
      { text: "Comunidad de Telegram (canal general)" },
      { text: "Webinars mensuales" },
      { text: "Comisiones por venta (3-6% según proyecto)" },
      { text: "Agente IA personalizado", off: true },
      { text: "Capacitaciones premium", off: true },
      { text: "Sesiones 1:1 con Claudia", off: true },
    ],
    ctaLabel: "Activar Starter con 25% OFF",
    ctaVariant: "secondary",
    variant: "default",
  },
  {
    id: "elite",
    name: "Elite",
    tagline: "El plan que eligen 7 de cada 10 realtors",
    oldPrice: 47,
    newPrice: 35,
    features: [
      { text: "Todo lo del plan Starter" },
      { text: "", bold: "Agente IA básico (landing con AI)" },
      { text: "Materiales de venta premium personalizables" },
      { text: "Acceso a tours con descuento" },
      { text: "Capacitaciones avanzadas" },
      { text: "Soporte prioritario WhatsApp" },
      { text: "Grupo VIP de Telegram" },
      { text: "Sesiones 1:1 con Claudia", off: true },
    ],
    ctaLabel: "Activar Elite con 25% OFF",
    ctaVariant: "primary",
    variant: "featured",
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Para realtors que quieren cerrar más operaciones",
    oldPrice: 87,
    newPrice: 65,
    features: [
      { text: "Todo lo del plan Elite" },
      { text: "", bold: "Agente IA avanzado (web + WhatsApp ilimitado)" },
      { text: "Branding personalizado con tu nombre" },
      { text: "1 sesión 1:1 mensual con Claudia o senior" },
      { text: "Acceso a tours sin costo adicional (1/año)" },
      { text: "Comisiones preferenciales en algunos proyectos" },
      { text: "Líneas de crédito comercial con aliados" },
      { text: "Asesoría legal y contable incluida" },
    ],
    ctaLabel: "Activar Premium con 25% OFF",
    ctaVariant: "luxury",
    variant: "premium",
  },
];

export default function SectionPricingRealtor() {
  return (
    <section className="pricing" id="planes">
      <div className="v2-container">
        <header className="pricing-header reveal">
          <span className="section-number pricing-number" aria-hidden="true">03</span>
          <span className="section-marker">— Planes Realtor</span>
          <h2 className="h-section">
            Elige tu plan.
            <br />
            <em className="emphasis-gold">25% OFF de por vida</em>
            <br />
            para los primeros 200 fundadores.
          </h2>
        </header>

        <div className="pricing-grid">
          {tiers.map((t, i) => (
            <article
              key={t.id}
              className={`pricing-card pricing-card--${t.variant} reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {t.variant === "featured" && (
                <div className="pricing-sticker sticker sticker--animated" aria-hidden="true">
                  <span className="sticker-line">Más<br />popular</span>
                </div>
              )}

              <header className="pc-header">
                <h3 className="pc-name">{t.name}</h3>
                <p className="pc-tagline">{t.tagline}</p>
                <div className="pc-price">
                  <span className="price-old">${t.oldPrice}</span>
                  <span className="price-new">
                    <span className="price-symbol">$</span>
                    <strong>{t.newPrice}</strong>
                    <span className="price-unit">USD/mes</span>
                  </span>
                  <span className="price-save">
                    Ahorra ${t.oldPrice - t.newPrice}/mes para siempre
                  </span>
                </div>
              </header>

              <ul className="pc-features">
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
                href={`/club-inmobiliario/v2#preinscripcion?plan=${t.id}-realtor`}
                className={`btn btn--${t.ctaVariant} btn--full pc-cta`}
              >
                {t.ctaLabel}
              </a>
            </article>
          ))}
        </div>

        <div className="guarantee reveal">
          <span className="guarantee-icon" aria-hidden="true">🛡️</span>
          <div className="guarantee-content">
            <strong>Garantía sin compromiso</strong>
            <p>
              Cancela cuando quieras. Sin permanencia mínima. Sin penalizaciones.
              Si en los primeros 30 días sientes que no es para ti, te devolvemos
              el 100% del primer mes.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pricing {
          background: var(--off-white);
          padding: var(--v2-space-8) 0;
        }
        .pricing-header {
          position: relative;
          margin-bottom: 3.5rem;
          text-align: center;
        }
        .pricing-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
        }
        :global(.pricing-header h2),
        :global(.pricing-header .section-marker) {
          position: relative;
          z-index: 1;
        }
        :global(.pricing-header .section-marker) { margin-bottom: 1rem; }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }
        .pricing-card {
          background: var(--cream);
          padding: 2.25rem 2rem 2rem;
          border: 1px solid var(--gold-luxury);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .pricing-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
        }
        .pricing-card--featured {
          background: var(--black-primary);
          color: var(--off-white);
          border-color: var(--yellow-brand);
          transform: scale(1.04);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.25);
        }
        .pricing-card--featured:hover {
          transform: scale(1.04) translateY(-6px);
        }
        .pricing-card--premium {
          background: linear-gradient(135deg, var(--gold-light), var(--cream));
          border-color: var(--gold-dark);
        }
        .pricing-sticker {
          position: absolute;
          top: -22px;
          right: 24px;
          z-index: 10;
          padding: 0.75rem 1rem;
        }

        .pc-header {
          padding-bottom: 1.5rem;
          border-bottom: 1px solid currentColor;
          margin-bottom: 1.5rem;
        }
        .pricing-card .pc-header { border-bottom-color: var(--gray-border); }
        .pricing-card--featured .pc-header { border-bottom-color: rgba(255, 255, 255, 0.2); }
        .pricing-card--premium .pc-header { border-bottom-color: rgba(154, 126, 63, 0.3); }
        .pc-name {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 2.75rem;
          font-weight: 500;
          line-height: 1;
          margin: 0 0 0.5rem;
          letter-spacing: -0.025em;
        }
        .pricing-card--featured .pc-name { color: var(--yellow-brand); }
        .pricing-card--premium .pc-name { color: var(--gold-dark); }
        .pc-tagline {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-style: italic;
          margin: 0 0 1.25rem;
          font-size: 0.95rem;
          opacity: 0.75;
          line-height: 1.4;
        }
        .pc-price {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .price-old {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.95rem;
          text-decoration: line-through;
          opacity: 0.5;
        }
        .price-new {
          display: flex;
          align-items: baseline;
          gap: 0.35rem;
        }
        .price-symbol {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.75rem;
          font-weight: 300;
          opacity: 0.7;
        }
        .price-new strong {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: clamp(3.5rem, 7vw, 4.5rem);
          font-weight: 400;
          line-height: 1;
          letter-spacing: -0.03em;
        }
        .pricing-card--featured .price-new strong { color: var(--yellow-brand); }
        .pricing-card--premium .price-new strong { color: var(--gold-dark); }
        .price-unit {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.8125rem;
          letter-spacing: 0.05em;
          opacity: 0.7;
          margin-left: 0.25rem;
        }
        .price-save {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          color: var(--gold-dark);
          font-weight: 600;
          text-transform: uppercase;
        }
        .pricing-card--featured .price-save { color: var(--yellow-brand); }

        .pc-features {
          list-style: none;
          padding: 0;
          margin: 0 0 1.75rem;
          flex: 1;
        }
        .pc-features li {
          padding: 0.7rem 0;
          border-bottom: 1px solid rgba(10, 10, 10, 0.08);
          font-size: 0.9375rem;
          line-height: 1.5;
          display: flex;
          gap: 0.6rem;
          align-items: flex-start;
        }
        .pricing-card--featured .pc-features li {
          border-bottom-color: rgba(255, 255, 255, 0.08);
        }
        .pc-features li.is-off {
          opacity: 0.4;
        }
        .feat-mark {
          color: var(--gold-dark);
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 0.05rem;
        }
        .pricing-card--featured .feat-mark { color: var(--yellow-brand); }
        .pricing-card--featured .feat-mark:has(+ * strong) { color: var(--yellow-brand); }
        .pc-features li.is-off .feat-mark { color: currentColor; }
        .feat-text { flex: 1; }
        .pc-features strong {
          font-weight: 600;
          color: inherit;
        }
        .pricing-card--featured .pc-features strong { color: var(--yellow-brand); }
        .pricing-card--premium .pc-features strong { color: var(--gold-dark); }

        .pc-cta {
          margin-top: auto;
        }

        .guarantee {
          margin-top: 3rem;
          padding: 1.75rem 2rem;
          background: var(--yellow-soft);
          border: 1px solid var(--gold-dark);
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }
        .guarantee-icon {
          font-size: 2.5rem;
          flex-shrink: 0;
        }
        .guarantee-content strong {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.25rem;
          display: block;
          margin-bottom: 0.4rem;
          color: var(--black-primary);
          font-weight: 500;
          letter-spacing: -0.01em;
        }
        .guarantee-content p {
          font-size: 0.9375rem;
          line-height: 1.55;
          color: var(--gray-deep);
          margin: 0;
        }

        @media (max-width: 1023px) {
          .pricing-grid { grid-template-columns: 1fr; }
          .pricing-card--featured { transform: none; }
          .pricing-card--featured:hover { transform: translateY(-6px); }
        }
        @media (max-width: 640px) {
          .guarantee { flex-direction: column; gap: 0.75rem; padding: 1.25rem 1.5rem; }
        }
      `}</style>
    </section>
  );
}
