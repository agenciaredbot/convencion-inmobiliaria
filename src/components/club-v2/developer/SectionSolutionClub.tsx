"use client";

type Solution = {
  letter: string;
  title: string;
  text: string;
  size: "large" | "medium";
  features?: string[];
};

const solutions: Solution[] = [
  {
    letter: "A",
    title: "Vitrina en portal del Club",
    text: "Tu proyecto aparece en el portal accedido por +900 agentes inmobiliarios activos y +10,000 operadores en red. Con ficha técnica completa, fotos profesionales, datos de rentabilidad, planos y video tour. Los agentes inmobiliarios lo presentan a sus clientes directamente.",
    size: "large",
    features: [
      "Ficha técnica editorial profesional",
      "Galería de fotos + video tour",
      "Datos de rentabilidad auditados",
      "Materiales descargables para agentes inmobiliarios",
    ],
  },
  {
    letter: "B",
    title: "Tours grupales a tu proyecto",
    text: "Coordinamos tours mensuales con 10-12 inversionistas y agentes inmobiliarios viajando a tu ciudad. Llegan con capital, ya pre-calificados, listos para ver tu proyecto en sitio.",
    size: "large",
    features: [
      "Logística completa de los tours",
      "Inversionistas pre-calificados",
      "Visitas in-situ programadas",
      "Eventos de cierre con asesores legales",
    ],
  },
  {
    letter: "C",
    title: "Campañas a la red activa",
    text: "Email blasts, newsletters segmentadas, posts en grupos privados de Telegram y WhatsApp. Tu proyecto llega directamente a +2,000 agentes inmobiliarios activos en LATAM y USA.",
    size: "medium",
  },
  {
    letter: "D",
    title: "Presencia en eventos exclusivos",
    text: "Tu marca y proyecto en la Convención Inmobiliaria USA, masterclasses mensuales y eventos VIP con la red del Club.",
    size: "medium",
  },
  {
    letter: "E",
    title: "Soporte de venta y cierre",
    text: "Equipo del Club acompaña el cierre de cada operación: dudas legales, contables, migratorias. Más cierre, menos fricción.",
    size: "medium",
  },
  {
    letter: "F",
    title: "Co-branding y autoridad",
    text: "Asociar tu proyecto con el sello del Club te da credibilidad ante el inversionista latino en USA. Es un endoso de Claudia Rivera.",
    size: "medium",
  },
];

export default function SectionSolutionClub() {
  return (
    <section className="solution">
      <div className="v2-container">
        <header className="sol-header reveal">
          <span className="section-number sol-number" aria-hidden="true">02</span>
          <span className="section-marker">— Lo que ofrecemos</span>
          <h2 className="h-section">
            Una red activa.
            <br />
            Calificación de demanda.
            <br />
            <em className="emphasis-yellow">Ventas predecibles.</em>
          </h2>
          <p className="body-text sol-intro">
            El Club Inmobiliario es un canal de distribución alternativo a la
            pauta digital tradicional. Tu proyecto entra a un ecosistema de
            venta consolidado y maduro.
          </p>
        </header>

        <div className="sol-grid">
          {solutions.map((s, i) => (
            <article
              key={s.letter}
              className={`sol-card sol-card--${s.size} reveal`}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <span className="sol-letter">{s.letter}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              {s.features && (
                <ul className="sol-features">
                  {s.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .solution {
          background: var(--black-primary);
          color: var(--off-white);
          padding: var(--v2-space-8) 0;
        }
        .sol-header {
          position: relative;
          margin-bottom: 3.5rem;
          text-align: center;
        }
        .sol-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
          color: var(--gold-luxury);
          opacity: 0.18;
        }
        :global(.sol-header .section-marker) {
          color: var(--gold-luxury);
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }
        :global(.sol-header h2),
        :global(.sol-header .body-text) {
          position: relative;
          z-index: 1;
        }
        :global(.sol-header h2) { color: var(--off-white); margin-bottom: 1.25rem; }
        .sol-intro {
          max-width: 720px;
          margin: 0 auto;
          color: var(--cream);
        }

        .sol-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1.5rem;
        }
        .sol-card--large { grid-column: span 3; }
        .sol-card--medium { grid-column: span 2; }
        .sol-card {
          background: var(--black-soft);
          padding: 2rem 2.25rem;
          border-top: 3px solid var(--gold-luxury);
          display: flex;
          flex-direction: column;
        }
        .sol-letter {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 3rem;
          font-weight: 300;
          color: var(--gold-luxury);
          line-height: 1;
          margin-bottom: 1rem;
          letter-spacing: -0.04em;
        }
        .sol-card h3 {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.4rem;
          font-weight: 500;
          margin: 0 0 0.85rem;
          color: var(--off-white);
          line-height: 1.2;
          letter-spacing: -0.015em;
        }
        .sol-card p {
          color: var(--cream);
          line-height: 1.6;
          margin: 0;
          font-size: 0.95rem;
          opacity: 0.9;
        }
        .sol-features {
          list-style: none;
          padding: 0;
          margin: 1.25rem 0 0;
        }
        .sol-features li {
          padding: 0.6rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.875rem;
          color: var(--gold-light);
          padding-left: 1rem;
          position: relative;
        }
        .sol-features li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: var(--gold-luxury);
        }

        @media (max-width: 1023px) {
          .sol-grid { grid-template-columns: 1fr 1fr; }
          .sol-card--large, .sol-card--medium { grid-column: span 1; }
        }
        @media (max-width: 640px) {
          .sol-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
