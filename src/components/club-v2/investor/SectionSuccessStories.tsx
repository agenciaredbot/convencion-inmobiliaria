"use client";

type Story = {
  flag: string;
  tag: string;
  headline: string;
  quote: string;
  stats: { label: string; value: string; highlight?: boolean }[];
  author: string;
  authorMeta: string;
  image: string;
  alt: string;
};

const stories: Story[] = [
  {
    flag: "🇩🇴",
    tag: "Punta Cana · 2024",
    headline: "“De $120K a $147K + renta en USD”",
    quote:
      "Compré un apartamento en preventa por $120K USD. Hoy, 18 meses después, vale $147K y genera $850 USD/mes vía Airbnb. La asesoría legal del Club hizo todo posible.",
    stats: [
      { label: "Inversión", value: "$120K USD" },
      { label: "Valor actual", value: "$147K USD" },
      { label: "Renta mensual", value: "$850 USD" },
      { label: "ROI año 1", value: "+30%", highlight: true },
    ],
    author: "María F.",
    authorMeta: "Houston, TX · Inversionista",
    image: "/images/club-v2/destino-puntacana.jpg",
    alt: "Punta Cana villa premium",
  },
  {
    flag: "🇨🇴",
    tag: "Medellín · 2023",
    headline: "“2 apartamentos con la cuota inicial de uno en Miami”",
    quote:
      "Iba a comprar un condo en Doral. Claudia me mostró los números. Terminé comprando dos apartamentos en El Poblado por el mismo dinero. Hoy ambos están en Airbnb generando $3,200 USD/mes.",
    stats: [
      { label: "Inversión", value: "$280K USD" },
      { label: "Valor actual", value: "$340K USD" },
      { label: "Renta mensual", value: "$3,200 USD" },
      { label: "ROI año 1", value: "+35%", highlight: true },
    ],
    author: "Jorge M.",
    authorMeta: "Miami, FL · Inversionista",
    image: "/images/club-v2/destino-medellin.jpg",
    alt: "Medellín apartamento El Poblado",
  },
];

export default function SectionSuccessStories() {
  return (
    <section className="success">
      <div className="v2-container">
        <header className="success-header reveal">
          <span className="section-number success-number" aria-hidden="true">03</span>
          <span className="section-marker">— Casos reales</span>
          <h2 className="h-section">
            Inversionistas como tú,
            <br />
            <em className="emphasis-gold">resultados como estos.</em>
          </h2>
        </header>

        <div className="success-grid">
          {stories.map((s, i) => (
            <article key={i} className="success-card reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="success-image">
                <img src={s.image} alt={s.alt} loading="lazy" />
                <span className="success-flag" aria-hidden="true">{s.flag}</span>
              </div>
              <div className="success-content">
                <span className="success-tag">{s.tag}</span>
                <h3 className="success-headline">{s.headline}</h3>
                <blockquote className="success-quote">{s.quote}</blockquote>
                <div className="success-stats">
                  {s.stats.map((st, j) => (
                    <div
                      key={j}
                      className={`stat ${st.highlight ? "stat--highlight" : ""}`}
                    >
                      <span className="stat-label">{st.label}</span>
                      <span className="stat-value">{st.value}</span>
                    </div>
                  ))}
                </div>
                <footer className="success-author">
                  <strong>{s.author}</strong> · {s.authorMeta}
                </footer>
              </div>
            </article>
          ))}
        </div>

        <p className="success-disclaimer">
          *Casos reales. Identidades modificadas por privacidad. Datos verificables
          con asesores del Club.
        </p>
      </div>

      <style jsx>{`
        .success {
          background: var(--cream);
          padding: var(--v2-space-8) 0;
        }
        .success-header {
          position: relative;
          margin-bottom: 3rem;
          text-align: center;
        }
        .success-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
        }
        :global(.success-header h2),
        :global(.success-header .section-marker) {
          position: relative;
          z-index: 1;
        }
        :global(.success-header .section-marker) { margin-bottom: 1rem; }
        .success-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .success-card {
          background: var(--off-white);
          border: 1px solid var(--gray-border);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .success-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
        }
        .success-image {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
        }
        .success-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .success-card:hover .success-image img { transform: scale(1.06); }
        .success-flag {
          position: absolute;
          top: 16px;
          right: 16px;
          font-size: 2rem;
          background: rgba(10, 10, 10, 0.5);
          padding: 0.4rem 0.65rem;
          backdrop-filter: blur(8px);
        }
        .success-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex: 1;
        }
        .success-tag {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          color: var(--gold-dark);
          text-transform: uppercase;
          font-weight: 500;
        }
        .success-headline {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: clamp(1.4rem, 2.2vw, 1.85rem);
          font-weight: 500;
          margin: 0;
          line-height: 1.15;
          letter-spacing: -0.015em;
          color: var(--black-primary);
        }
        .success-quote {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-style: italic;
          font-size: 1.0625rem;
          color: var(--gray-deep);
          margin: 0;
          line-height: 1.55;
          padding-left: 1rem;
          border-left: 2px solid var(--gold-luxury);
        }
        .success-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          padding: 1.25rem 0;
          border-top: 1px solid var(--gray-border);
          border-bottom: 1px solid var(--gray-border);
          margin: 0.5rem 0;
        }
        .stat {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding: 0.5rem 0.75rem;
        }
        .stat--highlight {
          background: var(--yellow-soft);
          border: 1px solid var(--gold-dark);
        }
        .stat-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gray-text);
        }
        .stat-value {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--black-primary);
          letter-spacing: -0.01em;
        }
        .stat--highlight .stat-value {
          color: var(--gold-dark);
        }
        .success-author {
          font-size: 0.875rem;
          color: var(--gray-text);
          margin-top: auto;
        }
        .success-author strong {
          color: var(--black-primary);
          font-weight: 600;
        }
        .success-disclaimer {
          text-align: center;
          margin-top: 2rem;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          color: var(--gray-text);
          letter-spacing: 0.04em;
        }
        @media (max-width: 1023px) {
          .success-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
