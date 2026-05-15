"use client";

type Case = {
  flag: string;
  location: string;
  project: string;
  summary: string;
  results: { value: string; label: string }[];
  quote: string;
  author: string;
  authorMeta: string;
  image: string;
  alt: string;
};

const cases: Case[] = [
  {
    flag: "🇲🇽",
    location: "Cancún · Zona Hotelera",
    project: "Aurora Residences",
    summary:
      "Desarrollo de 64 unidades en preventa con baja tracción digital tradicional. Membresía Nivel 3 ($10K USD).",
    results: [
      { value: "7", label: "Unidades vendidas en primer tour grupal" },
      { value: "$1.4M", label: "Volumen de ventas generado año 1" },
      { value: "14x", label: "ROI sobre la membresía" },
    ],
    quote:
      "Vendimos 7 unidades en un solo tour. Llegaron compradores con capital y decididos. La asesoría legal del Club facilitó cierres en menos de 30 días.",
    author: "Roberto L.",
    authorMeta: "Director Comercial · Aurora Developers",
    image: "/images/club-v2/destino-cancun.jpg",
    alt: "Proyecto Aurora Residences en Cancún",
  },
  {
    flag: "🇨🇴",
    location: "Medellín · El Poblado",
    project: "Vértice 21",
    summary:
      "Torre boutique de 38 apartamentos. Difícil rotación post-lanzamiento. Membresía Nivel 2 ($5K USD).",
    results: [
      { value: "11", label: "Unidades vendidas en 8 meses" },
      { value: "$1.8M", label: "Volumen de ventas dolarizado" },
      { value: "5 meses", label: "Reducción del ciclo de venta" },
    ],
    quote:
      "El Club nos abrió un mercado al que no podíamos llegar solos: el comprador latino-americano en USA con dólares. Cerramos en USD, sin volatilidad cambiaria.",
    author: "Constructora Vértice",
    authorMeta: "Medellín, Colombia",
    image: "/images/club-v2/destino-medellin.jpg",
    alt: "Proyecto Vértice 21 en Medellín",
  },
];

export default function SectionCasesB2B() {
  return (
    <section className="cases" id="casos">
      <div className="v2-container">
        <header className="cs-header reveal">
          <span className="section-number cs-number" aria-hidden="true">04</span>
          <span className="section-marker">— Resultados verificables</span>
          <h2 className="h-section">
            Casos reales.
            <br />
            <em className="emphasis-gold">Números verificables.</em>
          </h2>
        </header>

        <div className="cs-list">
          {cases.map((c, i) => (
            <article key={c.project} className="cs-card reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="cs-image">
                <img src={c.image} alt={c.alt} loading="lazy" />
                <span className="cs-flag" aria-hidden="true">{c.flag}</span>
              </div>
              <div className="cs-content">
                <span className="cs-location">{c.location}</span>
                <h3 className="cs-project">{c.project}</h3>
                <p className="cs-summary">{c.summary}</p>

                <div className="cs-results">
                  {c.results.map((r, j) => (
                    <div key={j} className="cs-result">
                      <span className="cr-value">{r.value}</span>
                      <span className="cr-label">{r.label}</span>
                    </div>
                  ))}
                </div>

                <blockquote className="cs-quote">{c.quote}</blockquote>
                <footer className="cs-author">
                  <strong>{c.author}</strong> · {c.authorMeta}
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .cases {
          background: var(--cream);
          padding: var(--v2-space-8) 0;
        }
        .cs-header {
          position: relative;
          margin-bottom: 3rem;
          text-align: center;
        }
        .cs-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
        }
        :global(.cs-header h2),
        :global(.cs-header .section-marker) {
          position: relative;
          z-index: 1;
        }
        :global(.cs-header .section-marker) { margin-bottom: 1rem; }

        .cs-list {
          display: grid;
          gap: 2rem;
        }
        .cs-card {
          background: var(--off-white);
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 0;
          border: 1px solid var(--gold-luxury);
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .cs-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
        }
        .cs-image {
          position: relative;
          min-height: 380px;
          overflow: hidden;
        }
        .cs-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .cs-card:hover .cs-image img { transform: scale(1.04); }
        .cs-flag {
          position: absolute;
          top: 16px;
          left: 16px;
          font-size: 2rem;
          background: rgba(10, 10, 10, 0.55);
          padding: 0.4rem 0.65rem;
          backdrop-filter: blur(8px);
        }
        .cs-content {
          padding: 2.25rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .cs-location {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          color: var(--gold-dark);
          text-transform: uppercase;
          font-weight: 600;
        }
        .cs-project {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: clamp(1.85rem, 3vw, 2.5rem);
          font-weight: 500;
          margin: 0;
          line-height: 1;
          letter-spacing: -0.025em;
          color: var(--black-primary);
        }
        .cs-summary {
          color: var(--gray-text);
          margin: 0;
          font-size: 0.9375rem;
          line-height: 1.6;
        }
        .cs-results {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          padding: 1.5rem 0;
          border-top: 1px solid var(--gold-luxury);
          border-bottom: 1px solid var(--gold-luxury);
        }
        .cs-result { display: flex; flex-direction: column; gap: 0.4rem; }
        .cr-value {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: clamp(1.85rem, 3vw, 2.5rem);
          font-weight: 400;
          color: var(--gold-dark);
          line-height: 1;
          letter-spacing: -0.025em;
        }
        .cr-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          color: var(--gray-text);
          line-height: 1.5;
          text-transform: uppercase;
        }
        .cs-quote {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-style: italic;
          font-size: 1.1rem;
          line-height: 1.55;
          border-left: 3px solid var(--gold-luxury);
          padding-left: 1.25rem;
          margin: 0;
          color: var(--gray-deep);
        }
        .cs-author {
          font-size: 0.875rem;
          color: var(--gray-text);
        }
        .cs-author strong {
          color: var(--black-primary);
          font-weight: 600;
        }
        @media (max-width: 1023px) {
          .cs-card { grid-template-columns: 1fr; }
          .cs-image { min-height: 240px; }
          .cs-content { padding: 1.75rem 1.5rem; }
        }
        @media (max-width: 640px) {
          .cs-results { grid-template-columns: 1fr; gap: 0.75rem; }
        }
      `}</style>
    </section>
  );
}
