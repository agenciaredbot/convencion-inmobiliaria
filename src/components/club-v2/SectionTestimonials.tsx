"use client";

const stats = [
  { value: "+900", label: "Miembros activos" },
  { value: "+10,000", label: "Operadores en red" },
  { value: "5", label: "Países activos" },
  { value: "+10", label: "Años de trayectoria" },
];

const testimonials = [
  {
    quote:
      "En mi primer tour a Medellín cerré una operación de $180K USD. La comisión cubrió 4 años de membresía Premium. Ahora voy a todos los tours.",
    name: "Carlos M.",
    role: "Agente Inmobiliario · Miami, FL",
  },
  {
    quote:
      "Compré un apartamento en Punta Cana en preventa hace 18 meses. Hoy ya vale 22% más y tengo Airbnb gestionado por el equipo local del Club.",
    name: "María F.",
    role: "Inversionista · Houston, TX",
  },
  {
    quote:
      "Vendimos 7 unidades de nuestro proyecto en Cancún en el primer tour grupal. El ROI sobre la membresía Nivel 3 fue de 14x.",
    name: "Roberto L.",
    role: "Desarrollador · Cancún, MX",
  },
];

export default function SectionTestimonials() {
  return (
    <section className="testimonials">
      <div className="v2-container">
        <header className="t-header reveal">
          <span className="section-number t-number" aria-hidden="true">08</span>
          <span className="section-marker">— Capítulo 08 / La comunidad</span>
          <h2 className="h-section">
            +900 miembros activos
            <br />
            <em className="emphasis-yellow">no se equivocan.</em>
          </h2>
        </header>

        <div className="stats-block reveal">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <span className="stat-number">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="t-grid">
          {testimonials.map((t, i) => (
            <article key={i} className="t-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="t-quote-mark" aria-hidden="true">&ldquo;</div>
              <blockquote className="t-text">{t.quote}</blockquote>
              <footer className="t-footer">
                <strong className="t-name">{t.name}</strong>
                <span className="t-role">{t.role}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials {
          background: var(--black-primary);
          color: var(--off-white);
          padding: var(--v2-space-8) 0;
        }
        .t-header {
          position: relative;
          margin-bottom: 3.5rem;
          text-align: center;
        }
        .t-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
          color: var(--gold-luxury);
          opacity: 0.18;
        }
        :global(.t-header .section-marker) {
          color: var(--gold-luxury);
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }
        :global(.t-header h2) {
          color: var(--off-white);
          position: relative;
          z-index: 1;
        }
        .stats-block {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin: 0 0 4rem;
          padding: 2.5rem 0;
          border-top: 1px solid var(--gold-luxury);
          border-bottom: 1px solid var(--gold-luxury);
        }
        .stat-item { text-align: center; }
        .stat-number {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: clamp(2.75rem, 5.5vw, 4.5rem);
          font-weight: 300;
          color: var(--yellow-brand);
          line-height: 1;
          display: block;
          margin-bottom: 0.5rem;
          letter-spacing: -0.04em;
        }
        .stat-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.8125rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold-light);
        }
        .t-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }
        .t-card {
          background: var(--black-soft);
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
        }
        .t-quote-mark {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 5rem;
          color: var(--gold-luxury);
          line-height: 0.5;
          margin-bottom: 1rem;
          height: 1.5rem;
        }
        .t-text {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.2rem;
          font-style: italic;
          line-height: 1.5;
          margin: 0 0 2rem;
          color: var(--cream);
          letter-spacing: -0.005em;
        }
        .t-footer { display: flex; flex-direction: column; gap: 0.25rem; }
        .t-name {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--off-white);
        }
        .t-role {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          color: var(--gold-light);
          text-transform: uppercase;
        }
        @media (max-width: 1023px) {
          .stats-block, .t-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .stats-block, .t-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
