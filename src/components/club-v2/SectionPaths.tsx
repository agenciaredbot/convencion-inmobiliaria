"use client";

type Path = {
  href: string;
  tag: string;
  tagVariant: "yellow" | "gold" | "dark";
  title: string;
  tagline: string;
  benefits: string[];
  price: string;
  priceFrom?: string;
  cta: string;
  image: string;
  alt: string;
  border: string;
  featured?: boolean;
};

const paths: Path[] = [
  {
    href: "/club-inmobiliario/v2/realtors",
    tag: "Para agentes",
    tagVariant: "yellow",
    title: "Soy Agente Inmobiliario",
    tagline: "Diversifica tus comisiones. Sin licencia local. Con respaldo legal.",
    benefits: [
      "+40 proyectos exclusivos en 4 países",
      "Comisiones internacionales 3x más altas",
      "Know-how legal y contable incluido",
      "Agente IA para vender en automático",
    ],
    price: "$27 USD/mes",
    priceFrom: "Desde",
    cta: "Ver planes Agente Inmobiliario",
    image: "/images/club-v2/path-realtor.jpg",
    alt: "Agente inmobiliario profesional",
    border: "var(--yellow-brand)",
  },
  {
    href: "/club-inmobiliario/v2/inversionistas",
    tag: "Para compradores",
    tagVariant: "gold",
    title: "Soy Inversionista",
    tagline:
      "Multiplica tu capital en USD en los mercados de mayor crecimiento del mundo hispano.",
    benefits: [
      "Valorización 15-30% anual en LATAM",
      "Tours físicos con todo incluido",
      "Asesoría legal y contable internacional",
      "Administración local de tu propiedad",
    ],
    price: "Asesoría inicial sin costo",
    cta: "Agendar asesoría gratis",
    image: "/images/club-v2/path-investor.jpg",
    alt: "Inversionista en terraza premium",
    border: "var(--gold-luxury)",
    featured: true,
  },
  {
    href: "/club-inmobiliario/v2/desarrolladores",
    tag: "Para constructoras",
    tagVariant: "dark",
    title: "Tengo un Proyecto",
    tagline:
      "Conecta tu desarrollo con +900 agentes inmobiliarios y +10,000 operadores en USA y LATAM.",
    benefits: [
      "Vitrina en portal del Club",
      "Presencia en eventos exclusivos",
      "Campañas a +2,000 agentes inmobiliarios activos",
      "Tours grupales a tu proyecto",
    ],
    price: "$3,000 USD/año",
    priceFrom: "Desde",
    cta: "Ver planes Desarrollador",
    image: "/images/club-v2/path-developer.jpg",
    alt: "Proyecto inmobiliario premium",
    border: "var(--off-white)",
  },
];

export default function SectionPaths() {
  return (
    <section className="paths">
      <div className="v2-container">
        <header className="paths-header reveal">
          <span className="section-number paths-number" aria-hidden="true">03</span>
          <span className="section-marker">— Capítulo 03 / Tu camino</span>
          <h2 className="h-section">
            Tres formas de aprovechar
            <br />
            esta oportunidad.{" "}
            <em className="emphasis-yellow">Elige la tuya.</em>
          </h2>
        </header>

        <div className="paths-grid">
          {paths.map((p) => (
            <a key={p.href} href={p.href} className={`path-card reveal ${p.featured ? "is-featured" : ""}`} style={{ borderTopColor: p.border }}>
              {p.featured && (
                <div className="path-sticker sticker sticker--gold" aria-hidden="true">
                  <span className="sticker-line">Path<br />principal</span>
                </div>
              )}
              <div className="path-image-wrap">
                <img src={p.image} alt={p.alt} className="path-image" loading="lazy" />
                <div className="path-overlay" />
              </div>
              <div className="path-content">
                <span className={`path-tag path-tag--${p.tagVariant}`}>{p.tag}</span>
                <h3 className="path-title">{p.title}</h3>
                <p className="path-tagline">{p.tagline}</p>
                <ul className="path-benefits">
                  {p.benefits.map((b, i) => (<li key={i}>{b}</li>))}
                </ul>
                <div className="path-price">
                  {p.priceFrom && <span className="price-from">{p.priceFrom}</span>}
                  <strong>{p.price}</strong>
                </div>
                <span className="path-cta">
                  {p.cta} <span className="btn-icon">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .paths {
          background: var(--black-primary);
          color: var(--off-white);
          padding: var(--v2-space-8) 0;
          position: relative;
        }
        .paths-header {
          position: relative;
          margin-bottom: 3.5rem;
          text-align: center;
        }
        .paths-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
          color: var(--gold-luxury);
          opacity: 0.15;
        }
        :global(.paths-header .section-marker) {
          color: var(--gold-luxury);
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }
        :global(.paths-header h2) {
          color: var(--off-white);
          position: relative;
          z-index: 1;
        }
        .paths-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr 1fr;
          gap: 1.5rem;
          align-items: stretch;
        }
        .path-card {
          background: var(--black-soft);
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: var(--off-white);
          border-top: 4px solid var(--off-white);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .path-card.is-featured {
          background: #15140f;
          transform: translateY(-12px);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
        }
        .path-card:hover { transform: translateY(-18px); }
        .path-card.is-featured:hover { transform: translateY(-22px); }
        .path-image-wrap {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .path-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .path-card:hover .path-image { transform: scale(1.08); }
        .path-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.6));
          pointer-events: none;
        }
        .path-content {
          padding: 2rem 1.85rem 2.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 0.5rem;
        }
        .path-tag {
          display: inline-block;
          padding: 0.4rem 0.85rem;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.6875rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          align-self: flex-start;
        }
        .path-tag--yellow { background: var(--yellow-brand); color: var(--black-primary); }
        .path-tag--gold { background: var(--gold-luxury); color: var(--black-primary); }
        .path-tag--dark { background: var(--off-white); color: var(--black-primary); }
        .path-title {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 2.25rem;
          font-weight: 500;
          margin: 0 0 0.5rem;
          letter-spacing: -0.02em;
        }
        .path-tagline {
          font-style: italic;
          color: var(--gold-light);
          margin: 0 0 1.25rem;
          line-height: 1.4;
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.05rem;
        }
        .path-benefits {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem;
          flex: 1;
        }
        .path-benefits li {
          padding: 0.6rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          font-size: 0.9375rem;
          color: var(--cream);
          line-height: 1.5;
        }
        .path-benefits li::before {
          content: '→';
          color: var(--gold-luxury);
          margin-right: 0.6rem;
          font-weight: 600;
        }
        .path-price {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.4rem;
          font-weight: 500;
          margin-bottom: 1rem;
          color: var(--yellow-brand);
        }
        .price-from {
          font-size: 0.7rem;
          color: var(--gray-text);
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          display: block;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 0.25rem;
        }
        .path-cta {
          font-weight: 600;
          color: var(--yellow-brand);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-bottom: 1px solid var(--yellow-brand);
          padding-bottom: 0.25rem;
          align-self: flex-start;
          font-size: 0.95rem;
          transition: gap 0.3s ease;
        }
        .path-card:hover .path-cta { gap: 0.85rem; }
        .path-sticker {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 5;
          padding: 0.85rem 1.1rem;
        }
        @media (max-width: 1023px) {
          .paths-grid { grid-template-columns: 1fr; gap: 1.25rem; }
          .path-card.is-featured { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
