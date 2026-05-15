"use client";

const usaRows = [
  { value: "+3.4%", label: "Valorización Miami single-family 2026" },
  { value: "76.71%", label: "Casas con reducción de precio" },
  { value: "93 días", label: "Promedio en mercado" },
  { value: "13.7", label: "Meses de inventario en condos" },
  { value: "↓", label: "Comisiones bajo presión a la baja", negative: true },
];

const latamRows = [
  { value: "+25%", label: "Valorización Medellín 2026" },
  { value: "+0.7%/mes", label: "Renta mensual RD + 10-15% valorización" },
  { value: "+15.7%", label: "Valorización Cartagena 2025" },
  { value: "26.8%", label: "Déficit habitacional estructural" },
  { value: "3-6%", label: "Comisión directa del desarrollador" },
];

export default function SectionNumbers() {
  return (
    <section className="numbers">
      <div className="v2-container">
        <header className="numbers-header reveal">
          <span className="section-number numbers-number" aria-hidden="true">02</span>
          <span className="section-marker">— Capítulo 02 / Los datos</span>
          <h2 className="h-section">
            Los números no mienten.
            <br />
            La oportunidad <em className="emphasis-gold">tampoco va a esperar.</em>
          </h2>
          <p className="body-text section-intro">
            En 2026, dos mercados están operando en direcciones opuestas. Saber
            esto antes que los demás es lo que separa al inversionista promedio
            del estratégico.
          </p>
        </header>

        <div className="comp-table reveal">
          <div className="comp-col comp-col-usa">
            <header className="comp-header">
              <span className="comp-flag">🇺🇸</span>
              <h3 className="comp-title">Estados Unidos</h3>
              <span className="comp-subtitle">Mercado en desaceleración</span>
            </header>
            {usaRows.map((row, i) => (
              <div className="comp-row" key={i}>
                <span className={`comp-value ${row.negative ? "is-negative" : ""}`}>
                  {row.value}
                </span>
                <span className="comp-label">{row.label}</span>
              </div>
            ))}
          </div>
          <div className="comp-col comp-col-latam">
            <header className="comp-header">
              <span className="comp-flag">🌎</span>
              <h3 className="comp-title">Latam + Caribe</h3>
              <span className="comp-subtitle">Mercado en expansión</span>
            </header>
            {latamRows.map((row, i) => (
              <div className="comp-row" key={i}>
                <span className="comp-value">{row.value}</span>
                <span className="comp-label">{row.label}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="footnote">
          Fuentes: MIAMI Realtors®, La Lonja de Medellín, DANE Colombia,
          Camacol, AirDNA. Datos 2025-2026.
        </p>
      </div>

      <style jsx>{`
        .numbers {
          background: var(--off-white);
          padding: var(--v2-space-8) 0;
        }
        .numbers-header {
          position: relative;
          margin-bottom: 3rem;
          text-align: center;
        }
        .numbers-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 0;
        }
        :global(.numbers-header h2),
        :global(.numbers-header .section-marker),
        :global(.numbers-header .body-text) {
          position: relative;
          z-index: 1;
        }
        :global(.numbers-header .section-marker) { margin-bottom: 1rem; }
        :global(.numbers-header h2) { margin-bottom: 1.25rem; }
        .section-intro {
          max-width: 640px;
          margin: 0 auto;
        }
        .comp-table {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          margin-top: 3rem;
          border: 1px solid var(--gray-border);
          background: var(--off-white);
        }
        .comp-col {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
        }
        .comp-col-usa {
          border-right: 1px solid var(--gray-border);
        }
        .comp-col-latam {
          background: linear-gradient(135deg, var(--yellow-soft), var(--cream));
        }
        .comp-header {
          margin-bottom: 2rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--gold-luxury);
        }
        .comp-flag { font-size: 2.25rem; }
        .comp-title {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.75rem;
          font-weight: 500;
          margin: 0.5rem 0 0.25rem;
          letter-spacing: -0.01em;
        }
        .comp-subtitle {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gray-text);
          display: block;
        }
        .comp-row {
          display: grid;
          grid-template-columns: 150px 1fr;
          gap: 1rem;
          padding: 1.1rem 0;
          border-bottom: 1px solid var(--gray-border);
          align-items: center;
        }
        .comp-row:last-child { border-bottom: none; }
        .comp-value {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.85rem;
          font-weight: 400;
          color: var(--black-primary);
          letter-spacing: -0.015em;
        }
        .comp-col-latam .comp-value {
          color: var(--gold-dark);
          font-weight: 500;
        }
        .comp-value.is-negative {
          color: var(--error);
        }
        .comp-label {
          font-size: 0.9375rem;
          color: var(--gray-text);
          line-height: 1.4;
        }
        .footnote {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.75rem;
          color: var(--gray-text);
          letter-spacing: 0.05em;
          text-align: center;
          margin: 2rem 0 0;
        }
        @media (max-width: 1023px) {
          .comp-table { grid-template-columns: 1fr; }
          .comp-col-usa {
            border-right: none;
            border-bottom: 1px solid var(--gray-border);
          }
        }
        @media (max-width: 640px) {
          .comp-row { grid-template-columns: 110px 1fr; }
          .comp-value { font-size: 1.5rem; }
        }
      `}</style>
    </section>
  );
}
