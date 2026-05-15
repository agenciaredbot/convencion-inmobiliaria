"use client";

export default function SectionArbitrage() {
  return (
    <section className="arbitrage" id="arbitraje">
      <div className="v2-container">
        <div className="arbitrage-grid">
          <div className="arbitrage-content reveal">
            <span className="section-marker">— Capítulo 01 / El arbitraje</span>

            <h2 className="h-section arbitrage-title">
              Tu dinero vale
              <br />
              <span className="number-huge">4x más</span>
              <br />
              en Medellín
              <br />
              que en Miami.
            </h2>

            <div className="arbitrage-body">
              <p className="body-text">
                La cuota inicial de un condo de $400K en Brickell te compra{" "}
                <strong>dos apartamentos en El Poblado</strong> que valorizan
                15-25% al año y generan renta en dólares vía Airbnb.
              </p>
              <p className="editorial-emphasis">
                Los inversionistas más rentables lo saben y llevan tiempo
                aplicando esta estrategia.
              </p>
            </div>

            <a href="/club-inmobiliario/v2/inversionistas" className="btn btn--secondary">
              Ver cómo funciona el modelo <span className="btn-icon">→</span>
            </a>
          </div>

          <div className="arbitrage-visual reveal">
            <div className="comparison-box comparison-miami">
              <span className="box-label">$400K USD en Miami</span>
              <span className="box-result">1 condo</span>
              <span className="box-sublabel">1,000 sqft · ~3% renta</span>
            </div>
            <div className="comparison-box comparison-medellin">
              <span className="box-label">$400K USD en Medellín</span>
              <span className="box-result">2 apartamentos</span>
              <span className="box-sublabel">
                + renta dolarizada Airbnb
                <br />
                + valorización 15-25%/año
              </span>
            </div>
          </div>
        </div>
      </div>

      <span className="section-number arbitrage-number" aria-hidden="true">01</span>

      <style jsx>{`
        .arbitrage {
          background: var(--cream);
          padding: var(--v2-space-8) 0;
          position: relative;
          overflow: hidden;
        }
        .arbitrage-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--v2-space-7);
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .arbitrage-title {
          margin-top: 1.25rem;
          margin-bottom: 1.5rem;
          color: var(--black-primary);
        }
        :global(.arbitrage-title .number-huge) {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: clamp(5rem, 14vw, 12rem);
          font-weight: 300;
          color: var(--gold-luxury);
          line-height: 0.9;
          letter-spacing: -0.06em;
          font-style: italic;
          display: inline-block;
        }
        .arbitrage-body { margin-bottom: 2rem; }
        .arbitrage-body :global(.body-text) { margin: 0 0 1rem; }
        :global(.editorial-emphasis) {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-style: italic;
          font-size: 1.5rem;
          color: var(--black-primary);
          margin: 1rem 0 0;
          font-weight: 400;
        }
        .arbitrage-visual {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          align-items: flex-start;
        }
        .comparison-box {
          padding: 1.75rem;
          background: var(--off-white);
          border: 1px solid var(--gold-luxury);
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: transform 0.4s ease;
        }
        .comparison-miami {
          width: 38%;
          min-width: 220px;
          opacity: 0.85;
        }
        .comparison-medellin {
          width: 100%;
          background: linear-gradient(135deg, var(--yellow-soft), var(--cream));
          border-color: var(--gold-dark);
          padding: 2.25rem 2rem;
          box-shadow: 8px 8px 0 0 var(--gold-luxury);
        }
        :global(.box-label) {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: var(--gold-dark);
          text-transform: uppercase;
        }
        :global(.box-result) {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: clamp(1.75rem, 3vw, 2.75rem);
          font-weight: 500;
          color: var(--black-primary);
          line-height: 1;
          letter-spacing: -0.02em;
        }
        :global(.box-sublabel) {
          font-size: 0.875rem;
          color: var(--gray-text);
          line-height: 1.5;
        }
        .arbitrage-number {
          position: absolute;
          top: 1.5rem;
          right: var(--v2-space-5);
          z-index: 1;
        }
        @media (max-width: 1023px) {
          .arbitrage-grid { grid-template-columns: 1fr; gap: var(--v2-space-5); }
          .arbitrage-number { display: none; }
        }
      `}</style>
    </section>
  );
}
