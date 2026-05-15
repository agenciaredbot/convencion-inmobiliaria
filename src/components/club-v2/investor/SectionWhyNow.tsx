"use client";

const cards = [
  {
    n: "01",
    title: "El dólar fuerte y la depreciación del peso",
    text: "Camacol confirma que un apartamento de 55m² que hace 5 años costaba $40K-50K USD, hoy ronda los $30K USD. Tu poder de compra en USA se multiplica al cruzar la frontera.",
  },
  {
    n: "02",
    title: "Déficit habitacional estructural",
    text: "Colombia tiene déficit del 26.8% con 370,000 nuevos hogares al año. La oferta nueva no cubre la demanda, garantizando presión alcista sostenida sobre los precios.",
  },
  {
    n: "03",
    title: "Nómadas digitales = renta dolarizada",
    text: "Medellín registra 4.07 propiedades Airbnb por cada 1,000 habitantes, nivel de Madrid y Estocolmo. Tu propiedad genera USD mientras se valoriza.",
  },
  {
    n: "04",
    title: "Mercado USA en desaceleración",
    text: "Miami: 93 días promedio en mercado, 76.71% de casas con reducción de precio, single-family solo +3.4% en 2026. El “Sunshine State” ya no rinde como antes.",
  },
];

export default function SectionWhyNow() {
  return (
    <section className="why-now">
      <div className="v2-container">
        <header className="why-header reveal">
          <span className="section-number why-number" aria-hidden="true">02</span>
          <span className="section-marker">— La ventana de oportunidad</span>
          <h2 className="h-section">
            Hay momentos que cambian
            <br />
            el rumbo de tu patrimonio.
            <br />
            <em className="emphasis-yellow">Este es uno de ellos.</em>
          </h2>
        </header>

        <div className="why-grid">
          {cards.map((c, i) => (
            <article key={c.n} className="why-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className="why-num">{c.n}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>

        <div className="why-cta reveal">
          <p className="cta-emphasis">
            Esta ventana <strong>no va a estar abierta para siempre.</strong> Las
            plusvalías más altas se obtienen al entrar antes que el mercado
            consolide los precios.
          </p>
          <a href="#asesoria" className="btn btn--primary btn--large">
            Empieza tu camino — agenda asesoría <span className="btn-icon">→</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .why-now {
          background: var(--black-primary);
          color: var(--off-white);
          padding: var(--v2-space-8) 0;
          position: relative;
        }
        .why-header {
          position: relative;
          margin-bottom: 3.5rem;
          text-align: center;
        }
        .why-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
          color: var(--gold-luxury);
          opacity: 0.18;
        }
        :global(.why-header .section-marker) {
          color: var(--gold-luxury);
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }
        :global(.why-header h2) {
          color: var(--off-white);
          position: relative;
          z-index: 1;
        }
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .why-card {
          background: var(--black-soft);
          padding: 2rem 2.25rem;
          border-left: 3px solid var(--gold-luxury);
        }
        .why-num {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 3.5rem;
          font-weight: 300;
          color: var(--gold-luxury);
          line-height: 1;
          display: block;
          margin-bottom: 1rem;
          letter-spacing: -0.04em;
        }
        .why-card h3 {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.45rem;
          font-weight: 500;
          margin: 0 0 0.85rem;
          color: var(--off-white);
          line-height: 1.2;
          letter-spacing: -0.015em;
        }
        .why-card p {
          color: var(--cream);
          line-height: 1.65;
          font-size: 0.95rem;
          margin: 0;
        }
        .why-cta {
          margin-top: 4rem;
          text-align: center;
          padding-top: 2.5rem;
          border-top: 1px solid var(--gold-luxury);
        }
        .cta-emphasis {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: clamp(1.15rem, 1.8vw, 1.5rem);
          font-style: italic;
          max-width: 720px;
          margin: 0 auto 2rem;
          color: var(--cream);
          line-height: 1.4;
        }
        .cta-emphasis strong {
          color: var(--yellow-brand);
          font-weight: 500;
        }
        @media (max-width: 1023px) {
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
