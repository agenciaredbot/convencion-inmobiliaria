"use client";

const items = [
  { label: "Medellín", value: "+25%" },
  { label: "Miami", value: "+3.4%" },
  { label: "Punta Cana", value: "+15%" },
  { label: "Condos Miami", value: "−2.3%" },
  { label: "Cartagena", value: "+15.7%" },
  { label: "Días en mercado Miami", value: "93" },
  { label: "Dubai", value: "Cero impuestos" },
  { label: "RD", value: "0.7% renta mensual" },
  { label: "Barranquilla", value: "+12%" },
];

function TickerContent({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="ticker-content" aria-hidden={ariaHidden ? "true" : undefined}>
      {items.map((item, i) => (
        <span key={i} className="ticker-item">
          <span>{item.label}</span> <strong>{item.value}</strong>
          <span className="ticker-sep">★</span>
        </span>
      ))}
    </div>
  );
}

export default function SectionTicker() {
  return (
    <section className="ticker-section" aria-label="Datos de mercado en vivo">
      <div className="ticker-track">
        <TickerContent />
        <TickerContent ariaHidden />
      </div>

      <style jsx>{`
        .ticker-section {
          background: var(--yellow-brand);
          color: var(--black-primary);
          overflow: hidden;
          padding: 1.1rem 0;
          border-top: 1px solid var(--gold-dark);
          border-bottom: 1px solid var(--gold-dark);
        }
        :global(.ticker-section .ticker-content) {
          display: flex;
          gap: 2rem;
          align-items: center;
          padding-right: 2rem;
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: clamp(1.1rem, 2vw, 1.65rem);
          font-weight: 400;
          letter-spacing: -0.01em;
          flex-shrink: 0;
        }
        :global(.ticker-section .ticker-item) {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        :global(.ticker-section .ticker-item strong) {
          font-weight: 600;
          color: var(--gold-dark);
          font-style: italic;
        }
        :global(.ticker-section .ticker-sep) {
          color: var(--gold-dark);
          font-size: 0.85em;
          margin-left: 1.5rem;
        }
      `}</style>
    </section>
  );
}
