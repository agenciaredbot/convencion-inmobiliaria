"use client";

const steps = [
  {
    n: "01",
    title: "Reunión comercial",
    text: "Sesión de 45 min con equipo comercial. Entendemos tu proyecto, tu mercado objetivo y diseñamos plan estratégico.",
    when: "Día 1",
  },
  {
    n: "02",
    title: "Curaduría del proyecto",
    text: "Auditamos tu proyecto: documentación, números, fotos. Si pasa el filtro, firmamos partnership. No todos los proyectos entran.",
    when: "Días 2-14",
  },
  {
    n: "03",
    title: "Producción de materiales",
    text: "Producimos ficha técnica editorial, sesión de fotos profesionales, video tour, materiales para agentes inmobiliarios.",
    when: "Días 15-30",
  },
  {
    n: "04",
    title: "Lanzamiento + activación",
    text: "Publicamos en portal. Email blast a la red. Capacitación a agentes inmobiliarios. Primer tour grupal coordinado.",
    when: "Días 30-60",
  },
];

export default function SectionProcessB2B() {
  return (
    <section className="process-b2b">
      <div className="v2-container">
        <header className="proc-header reveal">
          <span className="section-number proc-number" aria-hidden="true">05</span>
          <span className="section-marker">— Proceso de implementación</span>
          <h2 className="h-section">
            De firma de contrato
            <br />
            a primera venta:{" "}
            <em className="emphasis-gold">60 días.</em>
          </h2>
        </header>

        <div className="proc-timeline">
          {steps.map((s, i) => (
            <div key={s.n} className="proc-step reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className="proc-num">{s.n}</span>
              {i < steps.length - 1 && <div className="proc-connector" aria-hidden="true" />}
              <h3 className="proc-title">{s.title}</h3>
              <p className="proc-text">{s.text}</p>
              <span className="proc-when">{s.when}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .process-b2b {
          background: var(--off-white);
          padding: var(--v2-space-8) 0;
        }
        .proc-header {
          position: relative;
          margin-bottom: 4rem;
          text-align: center;
        }
        .proc-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
        }
        :global(.proc-header h2),
        :global(.proc-header .section-marker) {
          position: relative;
          z-index: 1;
        }
        :global(.proc-header .section-marker) { margin-bottom: 1rem; }
        .proc-timeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          position: relative;
        }
        .proc-step {
          position: relative;
          background: var(--cream);
          padding: 2rem 1.85rem;
          border-top: 4px solid var(--gold-luxury);
        }
        .proc-num {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 3.5rem;
          font-weight: 300;
          color: var(--gold-luxury);
          line-height: 1;
          display: block;
          margin-bottom: 1rem;
          letter-spacing: -0.04em;
        }
        .proc-connector {
          position: absolute;
          top: 3rem;
          right: -2rem;
          width: 2rem;
          height: 1px;
          background: var(--gold-luxury);
          opacity: 0.5;
        }
        .proc-connector::after {
          content: "→";
          position: absolute;
          right: -0.5rem;
          top: -0.7rem;
          color: var(--gold-luxury);
          font-size: 1.25rem;
        }
        .proc-title {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.4rem;
          font-weight: 500;
          margin: 0 0 0.85rem;
          color: var(--black-primary);
          letter-spacing: -0.015em;
          line-height: 1.2;
        }
        .proc-text {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--gray-text);
          margin: 0 0 1rem;
        }
        .proc-when {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          color: var(--gold-dark);
          text-transform: uppercase;
          font-weight: 600;
          padding: 0.4rem 0.7rem;
          background: var(--yellow-soft);
          border: 1px solid var(--gold-luxury);
          display: inline-block;
        }
        @media (max-width: 1023px) {
          .proc-timeline { grid-template-columns: 1fr 1fr; gap: 1.5rem; }
          .proc-connector { display: none; }
        }
        @media (max-width: 640px) {
          .proc-timeline { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
