"use client";

const testimonials = [
  {
    quote:
      "Vine pensando que iba a comprar un condo en Doral. Salí del primer tour del Club entendiendo que con esa misma plata podía tener dos rentables apartamentos en Medellín generando USD. Año y medio después, eso es exactamente lo que tengo.",
    name: "Jorge M.",
    role: "Inversionista · Miami, FL",
    metric: "ROI año 1: +35%",
  },
  {
    quote:
      "El miedo era no saber cómo manejar una propiedad a 2,000 km. El equipo del Club me conectó con el operador local en Punta Cana. Cero dolores de cabeza. Recibo $850 USD/mes neto sin mover un dedo.",
    name: "María F.",
    role: "Inversionista · Houston, TX",
    metric: "Renta mensual: $850 USD",
  },
  {
    quote:
      "Lo que valoro del Club no es solo conseguir el proyecto. Es la asesoría legal binacional. Mi CPA en Miami no sabía nada de fiducias colombianas. El equipo del Club los conectó. Operación limpia ante el IRS.",
    name: "Roberto P.",
    role: "Inversionista · Tampa, FL",
    metric: "Estructura binacional optimizada",
  },
];

export default function SectionTestimonialsInvestor() {
  return (
    <section className="t-inv">
      <div className="v2-container">
        <header className="ti-header reveal">
          <span className="section-marker">— La voz de quienes ya compraron</span>
          <h2 className="h-section">
            Inversionistas reales,
            <br />
            <em className="emphasis-yellow">resultados reales.</em>
          </h2>
        </header>

        <div className="ti-grid">
          {testimonials.map((t, i) => (
            <article key={i} className="ti-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="ti-quote-mark" aria-hidden="true">&ldquo;</div>
              <blockquote className="ti-text">{t.quote}</blockquote>
              <div className="ti-metric">{t.metric}</div>
              <footer className="ti-footer">
                <strong className="ti-name">{t.name}</strong>
                <span className="ti-role">{t.role}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .t-inv {
          background: var(--black-primary);
          color: var(--off-white);
          padding: var(--v2-space-8) 0;
        }
        .ti-header {
          margin-bottom: 3.5rem;
          text-align: center;
        }
        :global(.ti-header .section-marker) {
          color: var(--gold-luxury);
          margin-bottom: 1rem;
        }
        :global(.ti-header h2) { color: var(--off-white); }
        .ti-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }
        .ti-card {
          background: var(--black-soft);
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          position: relative;
        }
        .ti-quote-mark {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 5rem;
          color: var(--gold-luxury);
          line-height: 0.5;
          height: 1.5rem;
        }
        .ti-text {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.1rem;
          font-style: italic;
          line-height: 1.55;
          margin: 0;
          color: var(--cream);
          flex: 1;
        }
        .ti-metric {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--yellow-brand);
          padding: 0.65rem 0.85rem;
          background: rgba(255, 212, 0, 0.08);
          border: 1px solid rgba(255, 212, 0, 0.25);
          align-self: flex-start;
        }
        .ti-footer {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .ti-name {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--off-white);
        }
        .ti-role {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          color: var(--gold-light);
          text-transform: uppercase;
        }
        @media (max-width: 1023px) {
          .ti-grid { grid-template-columns: 1fr; gap: 1.25rem; }
        }
      `}</style>
    </section>
  );
}
