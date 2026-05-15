"use client";

const steps = [
  {
    n: "01",
    title: "Suscríbete o agenda",
    text: "Elige tu camino: realtor, inversionista o desarrollador. Te asignamos un asesor del Club que te guía desde el día uno.",
  },
  {
    n: "02",
    title: "Accede al portal",
    text: "+40 proyectos curados con fichas técnicas, datos de rentabilidad auditados y materiales de venta listos para usar.",
  },
  {
    n: "03",
    title: "Viaja con nosotros",
    text: "Tours mensuales con vuelos, hotel, transporte local y visitas curadas. Tú solo llegas, nosotros nos encargamos de todo.",
  },
  {
    n: "04",
    title: "Cierra con respaldo",
    text: "Equipo legal y contable internacional acompaña tu operación de principio a fin. Sin sorpresas. Sin riesgos.",
  },
];

export default function SectionHowItWorks() {
  return (
    <section className="howitworks">
      <div className="v2-container">
        <header className="hiw-header reveal">
          <span className="section-number hiw-number" aria-hidden="true">06</span>
          <span className="section-marker">— Capítulo 06 / El proceso</span>
          <h2 className="h-section">
            De cero a tu primera operación
            <br />
            internacional, en <em className="emphasis-gold">4 pasos.</em>
          </h2>
        </header>

        <div className="timeline">
          {steps.map((s, i) => (
            <div key={s.n} className="timeline-step reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className="step-number">{s.n}</span>
              {i < steps.length - 1 && <div className="step-arrow" aria-hidden="true">→</div>}
              <h3 className="step-title">{s.title}</h3>
              <p className="step-text">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .howitworks {
          background: var(--cream);
          padding: var(--v2-space-8) 0;
        }
        .hiw-header {
          position: relative;
          margin-bottom: 4rem;
          text-align: center;
        }
        .hiw-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
        }
        :global(.hiw-header .section-marker) {
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }
        :global(.hiw-header h2) {
          position: relative;
          z-index: 1;
        }
        .timeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          position: relative;
        }
        .timeline-step { position: relative; }
        .step-number {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 4.5rem;
          font-weight: 300;
          color: var(--gold-luxury);
          line-height: 1;
          display: block;
          margin-bottom: 1rem;
          letter-spacing: -0.04em;
        }
        .step-arrow {
          position: absolute;
          top: 1.25rem;
          right: -1rem;
          font-size: 2rem;
          color: var(--gold-luxury);
          opacity: 0.4;
          line-height: 1;
        }
        .step-title {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.5rem;
          font-weight: 500;
          margin: 0 0 0.75rem;
          color: var(--black-primary);
          letter-spacing: -0.015em;
        }
        .step-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--gray-text);
          margin: 0;
        }
        @media (max-width: 1023px) {
          .timeline { grid-template-columns: 1fr 1fr; gap: 2.5rem; }
          .step-arrow { display: none; }
        }
        @media (max-width: 640px) {
          .timeline { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
