"use client";

type Destino = {
  flag: string;
  country: string;
  name: string;
  tagline: string;
  image: string;
  size: "large" | "medium" | "small";
  badge?: string;
  stats?: { big: string; text: string }[];
  highlights: string[];
};

const destinos: Destino[] = [
  {
    flag: "🇨🇴",
    country: "Colombia",
    name: "Medellín",
    tagline: "La capital de la innovación inmobiliaria latina",
    image: "/images/club-v2/destino-medellin.jpg",
    size: "large",
    stats: [
      { big: "+25%", text: "valorización proyectada 2026" },
      { big: "0.47%", text: "renta mensual neta en locales" },
    ],
    highlights: [
      "Top global en Airbnb (nivel Madrid, Estocolmo)",
      "Demanda dolarizada por nómadas digitales",
      "Zonas estrella: El Poblado, Laureles, Envigado",
    ],
  },
  {
    flag: "🇩🇴",
    country: "República Dominicana",
    name: "Punta Cana",
    tagline: "Valorización + Rentabilidad en una sola plaza",
    image: "/images/club-v2/destino-puntacana.jpg",
    size: "large",
    badge: "Próximamente",
    stats: [
      { big: "+10-15%", text: "valorización anual sostenida" },
      { big: "0.7%", text: "rentabilidad mensual bruta" },
    ],
    highlights: [
      "Mercado naturalmente dolarizado",
      "Precios de entrada accesibles vs USA",
      "Inversión con residencia para extranjeros",
    ],
  },
  {
    flag: "🇲🇽",
    country: "México",
    name: "Cancún",
    tagline: "Renta turística en dólares todo el año",
    image: "/images/club-v2/destino-cancun.jpg",
    size: "medium",
    badge: "Próximamente",
    highlights: [
      "Demanda turística récord histórico",
      "ROI superior al promedio de Miami",
      "Visa de residencia accesible",
    ],
  },
  {
    flag: "🇨🇴",
    country: "Colombia",
    name: "Barranquilla",
    tagline: "El secreto del Caribe colombiano",
    image: "/images/club-v2/destino-barranquilla.jpg",
    size: "small",
    highlights: [
      "+6-12% valorización 2025",
      "Costos accesibles, alto potencial",
      "Alto Prado, Villa Santos en expansión",
    ],
  },
  {
    flag: "🇦🇪",
    country: "Emiratos Árabes",
    name: "Dubai",
    tagline: "El mercado luxury con cero impuestos",
    image: "/images/club-v2/destino-dubai.jpg",
    size: "medium",
    highlights: [
      "Sin impuestos a la renta sobre propiedad",
      "Visa de residencia con inversión",
      "Crecimiento explosivo en Marina/Downtown",
    ],
  },
];

export default function SectionDestinos() {
  return (
    <section className="destinos" id="destinos">
      <div className="v2-container">
        <header className="destinos-header reveal">
          <span className="section-number destinos-number" aria-hidden="true">04</span>
          <span className="section-marker">— Capítulo 04 / Los mercados</span>
          <h2 className="h-section">
            5 mercados.
            <br />
            5 oportunidades distintas.
            <br />
            <em className="emphasis-gold">Una sola membresía.</em>
          </h2>
          <p className="body-text destinos-intro">
            No vendemos &ldquo;destinos turísticos&rdquo;. Vendemos los mercados
            inmobiliarios con mayor potencial de retorno del mundo hispano.
            Cada uno con su lógica, su data y sus ganadores.
          </p>
        </header>

        <div className="destinos-grid">
          {destinos.map((d) => (
            <article key={d.name} className={`destino-card destino-${d.size} reveal`}>
              <div className="destino-image">
                <img src={d.image} alt={d.name} loading="lazy" />
                {d.badge && <span className="destino-badge">{d.badge}</span>}
              </div>
              <div className="destino-content">
                <div className="destino-meta">
                  <span className="destino-flag" aria-hidden="true">{d.flag}</span>
                  <span className="destino-country">{d.country}</span>
                </div>
                <h3 className="destino-name">{d.name}</h3>
                <p className="destino-tagline">{d.tagline}</p>
                {d.stats && (
                  <div className="destino-stats">
                    {d.stats.map((s, i) => (
                      <div key={i} className="destino-stat">
                        <span className="stat-big">{s.big}</span>
                        <span className="stat-text">{s.text}</span>
                      </div>
                    ))}
                  </div>
                )}
                <ul className="destino-highlights">
                  {d.highlights.map((h, i) => (<li key={i}>{h}</li>))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="destinos-footer">
          <a href="/club-inmobiliario/v2/inversionistas" className="btn btn--secondary">
            Ver todos los proyectos curados <span className="btn-icon">→</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .destinos {
          background: var(--cream);
          padding: var(--v2-space-8) 0;
          position: relative;
        }
        .destinos-header {
          position: relative;
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .destinos-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
        }
        :global(.destinos-header h2),
        :global(.destinos-header .section-marker),
        :global(.destinos-header .body-text) {
          position: relative;
          z-index: 1;
        }
        :global(.destinos-header .section-marker) { margin-bottom: 1rem; }
        :global(.destinos-header h2) { margin-bottom: 1.25rem; }
        .destinos-intro { max-width: 720px; margin: 0 auto; }
        .destinos-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1.5rem;
        }
        .destino-large { grid-column: span 3; }
        .destino-medium { grid-column: span 3; }
        .destino-small { grid-column: span 2; }
        .destino-medium:nth-of-type(3),
        .destino-medium:nth-of-type(5) { grid-column: span 2; }
        .destino-card {
          background: var(--off-white);
          border: 1px solid var(--gray-border);
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
        }
        .destino-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.1);
        }
        .destino-image {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }
        .destino-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .destino-card:hover .destino-image img { transform: scale(1.06); }
        .destino-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: var(--yellow-brand);
          color: var(--black-primary);
          padding: 0.4rem 0.85rem;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: 1px solid var(--gold-dark);
        }
        .destino-content {
          padding: 1.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }
        .destino-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .destino-flag { font-size: 1.5rem; }
        .destino-country {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold-dark);
        }
        .destino-name {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 2.5rem;
          font-weight: 500;
          line-height: 1;
          margin: 0 0 0.5rem;
          color: var(--black-primary);
          letter-spacing: -0.02em;
        }
        .destino-tagline {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-style: italic;
          color: var(--gray-text);
          margin: 0 0 1rem;
          font-size: 1.05rem;
          line-height: 1.4;
        }
        .destino-stats {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.25rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--gold-luxury);
        }
        .destino-stat { display: flex; flex-direction: column; gap: 0.25rem; }
        .stat-big {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.85rem;
          font-weight: 500;
          color: var(--gold-dark);
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .stat-text {
          font-size: 0.75rem;
          color: var(--gray-text);
          line-height: 1.3;
          max-width: 140px;
        }
        .destino-highlights {
          list-style: none;
          padding: 0;
          margin: auto 0 0;
        }
        .destino-highlights li {
          padding: 0.55rem 0;
          font-size: 0.9rem;
          border-bottom: 1px solid var(--gray-border);
          color: var(--gray-deep);
        }
        .destino-highlights li:last-child { border-bottom: none; }
        .destinos-footer {
          margin-top: 2.5rem;
          text-align: center;
        }
        @media (max-width: 1023px) {
          .destinos-grid { grid-template-columns: 1fr 1fr; }
          .destino-large, .destino-medium, .destino-small { grid-column: span 1; }
        }
        @media (max-width: 640px) {
          .destinos-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
