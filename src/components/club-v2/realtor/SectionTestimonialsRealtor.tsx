"use client";

const testimonials = [
  {
    quote:
      "En mi primer tour a Medellín cerré una operación de $180K USD. La comisión cubrió 4 años de membresía Premium. El ROI de ese tour solo fue de 28x.",
    name: "Carlos M.",
    role: "Realtor · Miami, FL · 8 años",
    metric: "ROI tour: 28x",
  },
  {
    quote:
      "El agente IA me cambió el negocio. Antes respondía mensajes a las 2am desesperado. Hoy mi IA califica todo y me llegan solo leads serios. Cerré 5 operaciones en 3 meses.",
    name: "Ana P.",
    role: "Realtor · Doral, FL · 4 años",
    metric: "5 cierres en 90 días",
  },
  {
    quote:
      "Llevaba 6 meses sin cerrar nada en Miami. Entré al Club, asistí al tour de Punta Cana y vendí dos villas en 90 días. La comisión: $32K USD.",
    name: "Diego R.",
    role: "Realtor · Aventura, FL · 6 años",
    metric: "Comisión: $32K USD",
  },
];

export default function SectionTestimonialsRealtor() {
  return (
    <section className="t-real">
      <div className="v2-container">
        <header className="tr-header reveal">
          <span className="section-marker">— Realtors que ya operan internacionalmente</span>
          <h2 className="h-section">
            +900 realtors latinos
            <br />
            <em className="emphasis-gold">ya están cerrando.</em>
          </h2>
        </header>

        <div className="tr-grid">
          {testimonials.map((t, i) => (
            <article key={i} className="tr-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="tr-quote-mark" aria-hidden="true">&ldquo;</div>
              <blockquote className="tr-text">{t.quote}</blockquote>
              <div className="tr-metric">{t.metric}</div>
              <footer className="tr-footer">
                <strong className="tr-name">{t.name}</strong>
                <span className="tr-role">{t.role}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .t-real {
          background: var(--cream);
          padding: var(--v2-space-8) 0;
        }
        .tr-header {
          margin-bottom: 3.5rem;
          text-align: center;
        }
        :global(.tr-header .section-marker) { margin-bottom: 1rem; }
        .tr-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }
        .tr-card {
          background: var(--off-white);
          padding: 2rem 2.25rem;
          border: 1px solid var(--gold-luxury);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .tr-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
        }
        .tr-quote-mark {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 5rem;
          color: var(--gold-luxury);
          line-height: 0.5;
          height: 1.5rem;
        }
        .tr-text {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.1rem;
          font-style: italic;
          line-height: 1.55;
          margin: 0;
          color: var(--gray-deep);
          flex: 1;
        }
        .tr-metric {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold-dark);
          padding: 0.65rem 0.9rem;
          background: var(--yellow-soft);
          border: 1px solid var(--gold-luxury);
          align-self: flex-start;
          font-weight: 600;
        }
        .tr-footer {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding-top: 1rem;
          border-top: 1px solid var(--gray-border);
        }
        .tr-name {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--black-primary);
        }
        .tr-role {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          color: var(--gray-text);
          text-transform: uppercase;
        }
        @media (max-width: 1023px) {
          .tr-grid { grid-template-columns: 1fr; gap: 1.25rem; }
        }
      `}</style>
    </section>
  );
}
