"use client";

const problems = [
  {
    icon: "💸",
    title: "Costos de adquisición disparados",
    text: "El CPL (costo por lead) en Meta Ads para real estate subió 200% en 5 años. Y el lead promedio cualifica al 4%. La matemática ya no cierra.",
  },
  {
    icon: "🎯",
    title: "Leads sin capacidad real",
    text: "El 80% de los leads inmobiliarios digitales hoy no tienen capital, no tienen pre-aprobación, no tienen urgencia. Tu equipo comercial se quema.",
  },
  {
    icon: "⏳",
    title: "Ciclos de venta eternos",
    text: "De primer contacto a escritura: 6-18 meses. Mientras tanto el inventario envejece, los costos financieros crecen y la plata se queda quieta.",
  },
  {
    icon: "🌐",
    title: "Mercado local saturado",
    text: "Si vendes solo en tu ciudad, compites con todos los otros desarrolladores por el mismo cliente. El mercado USA es 10x más grande y está dolarizado.",
  },
];

export default function SectionProblemB2B() {
  return (
    <section className="problem-b2b">
      <div className="v2-container">
        <header className="pb-header reveal">
          <span className="section-number pb-number" aria-hidden="true">01</span>
          <span className="section-marker">— El problema del marketing inmobiliario hoy</span>
          <h2 className="h-section">
            Pauta digital cara.
            <br />
            Leads de baja calidad.
            <br />
            <em className="emphasis-gold">Inventario que no rota.</em>
          </h2>
        </header>

        <div className="problem-grid">
          {problems.map((p, i) => (
            <article key={p.title} className="problem-card reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
              <span className="problem-icon" aria-hidden="true">{p.icon}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .problem-b2b {
          background: var(--cream);
          padding: var(--v2-space-8) 0;
        }
        .pb-header {
          position: relative;
          margin-bottom: 3rem;
          text-align: center;
        }
        .pb-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
        }
        :global(.pb-header h2),
        :global(.pb-header .section-marker) {
          position: relative;
          z-index: 1;
        }
        :global(.pb-header .section-marker) { margin-bottom: 1rem; }

        .problem-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .problem-card {
          background: var(--off-white);
          padding: 2rem 2.25rem;
          border-left: 3px solid var(--error);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .problem-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }
        .problem-icon {
          font-size: 2.25rem;
          display: inline-flex;
          width: 56px;
          height: 56px;
          align-items: center;
          justify-content: center;
          background: rgba(139, 44, 44, 0.08);
          border: 1px solid rgba(139, 44, 44, 0.25);
          margin-bottom: 1rem;
        }
        .problem-card h3 {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.4rem;
          font-weight: 500;
          margin: 0 0 0.85rem;
          color: var(--black-primary);
          letter-spacing: -0.015em;
          line-height: 1.2;
        }
        .problem-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--gray-text);
          margin: 0;
        }
        @media (max-width: 1023px) {
          .problem-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
