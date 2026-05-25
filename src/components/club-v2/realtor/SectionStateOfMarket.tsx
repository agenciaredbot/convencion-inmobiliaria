"use client";

const miamiStats = [
  { value: "93 días", label: "promedio para vender una casa" },
  { value: "76.71%", label: "de listings con reducción de precio" },
  { value: "13.7 meses", label: "de inventario en condos" },
  { value: "+3.4%", label: "valorización single-family (la más baja en 5 años)" },
  { value: "↓", label: "Comisiones bajo presión post-NAR settlement", arrow: true, negative: true },
];

const latamStats = [
  { value: "30-60 días", label: "tiempo promedio de venta en preventa" },
  { value: "+25%", label: "valorización Medellín 2026 (presión alcista)" },
  { value: "+10K", label: "operadores activos en la red del Club" },
  { value: "3-6%", label: "comisión directa pagada por el desarrollador" },
  { value: "↑", label: "Demanda creciente de latinos en USA con USD", arrow: true },
];

export default function SectionStateOfMarket() {
  return (
    <section className="state">
      <div className="v2-container">
        <header className="state-header reveal">
          <span className="section-number state-number" aria-hidden="true">01</span>
          <span className="section-marker">— La realidad del mercado</span>
          <h2 className="h-section">
            Los números que tu broker
            <br />
            <em className="emphasis-gold">no quiere que veas.</em>
          </h2>
        </header>

        <div className="comp">
          <article className="comp-col is-bad reveal">
            <header className="comp-head">
              <span className="comp-flag" aria-hidden="true">🇺🇸</span>
              <h3>Miami 2026</h3>
              <span className="comp-sub">Lo que enfrenta el agente inmobiliario promedio</span>
            </header>
            {miamiStats.map((s, i) => (
              <div className="comp-row" key={i}>
                <span className={`comp-val ${s.arrow ? "is-arrow" : ""} ${s.negative ? "is-negative" : ""}`}>
                  {s.value}
                </span>
                <span className="comp-label">{s.label}</span>
              </div>
            ))}
          </article>

          <article className="comp-col is-good reveal" style={{ transitionDelay: "0.1s" }}>
            <header className="comp-head">
              <span className="comp-flag" aria-hidden="true">🌎</span>
              <h3>LATAM 2026</h3>
              <span className="comp-sub">Lo que ven los agentes inmobiliarios del Club</span>
            </header>
            {latamStats.map((s, i) => (
              <div className="comp-row" key={i}>
                <span className={`comp-val ${s.arrow ? "is-arrow is-positive" : ""}`}>
                  {s.value}
                </span>
                <span className="comp-label">{s.label}</span>
              </div>
            ))}
          </article>
        </div>

        <p className="state-cta reveal">
          <strong>La pregunta no es si Miami va a recuperarse.</strong> Es si tú
          vas a esperar a que pase, o vas a diversificar mientras tanto.
        </p>
      </div>

      <style jsx>{`
        .state {
          background: var(--off-white);
          padding: var(--v2-space-8) 0;
          position: relative;
        }
        .state-header {
          position: relative;
          margin-bottom: 3rem;
          text-align: center;
        }
        .state-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
        }
        :global(.state-header h2),
        :global(.state-header .section-marker) {
          position: relative;
          z-index: 1;
        }
        :global(.state-header .section-marker) { margin-bottom: 1rem; }

        .comp {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .comp-col {
          padding: 2.25rem 2rem;
          border-top: 4px solid;
          display: flex;
          flex-direction: column;
        }
        .comp-col.is-bad {
          background: var(--gray-border);
          border-color: var(--error);
        }
        .comp-col.is-good {
          background: linear-gradient(135deg, var(--yellow-soft), var(--cream));
          border-color: var(--yellow-brand);
        }
        .comp-head {
          margin-bottom: 1.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(10, 10, 10, 0.12);
        }
        .comp-flag { font-size: 2.25rem; }
        .comp-head h3 {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.85rem;
          font-weight: 500;
          margin: 0.5rem 0 0.25rem;
          color: var(--black-primary);
          letter-spacing: -0.02em;
        }
        .comp-sub {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-text);
          display: block;
        }
        .comp-row {
          display: grid;
          grid-template-columns: 130px 1fr;
          gap: 1rem;
          padding: 0.85rem 0;
          border-bottom: 1px solid rgba(10, 10, 10, 0.06);
          align-items: center;
        }
        .comp-row:last-child { border-bottom: none; }
        .comp-val {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.4rem;
          font-weight: 500;
          color: var(--black-primary);
          letter-spacing: -0.01em;
        }
        .comp-col.is-good .comp-val { color: var(--gold-dark); }
        .comp-val.is-arrow {
          font-size: 2.25rem;
          line-height: 1;
        }
        .comp-val.is-arrow.is-negative { color: var(--error); }
        .comp-val.is-arrow.is-positive { color: var(--success); }
        .comp-label {
          font-size: 0.875rem;
          line-height: 1.45;
          color: var(--gray-text);
        }

        .state-cta {
          margin-top: 2.5rem;
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: clamp(1.15rem, 1.8vw, 1.5rem);
          font-style: italic;
          text-align: center;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
          color: var(--gray-deep);
          line-height: 1.4;
        }
        .state-cta strong {
          color: var(--black-primary);
          font-weight: 500;
          font-style: normal;
        }

        @media (max-width: 1023px) {
          .comp { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .comp-row { grid-template-columns: 100px 1fr; }
          .comp-val { font-size: 1.1rem; }
        }
      `}</style>
    </section>
  );
}
