"use client";

const cards = [
  {
    icon: "🏗️",
    title: "Proyectos curados",
    text: "+40 desarrollos en Medellín, Cancún, Punta Cana, Barranquilla y Dubai. Filtrados, auditados, listos para vender.",
  },
  {
    icon: "🤖",
    title: "Agente IA personalizado",
    text: "Tu propio agente IA que califica leads 24/7 en español e inglés. Incluido desde el plan Elite.",
  },
  {
    icon: "📑",
    title: "Know-how legal completo",
    text: "Te enseñamos cómo cobrar comisiones internacionales, estructurar tu operación y operar legalmente sin licencia local.",
  },
  {
    icon: "🎓",
    title: "Capacitación continua",
    text: "Webinars mensuales, masterclasses con expertos, certificaciones internacionales. Tu conocimiento se multiplica.",
  },
  {
    icon: "✈️",
    title: "Tours con tus clientes",
    text: "Trae a tus clientes a los tours del Club. Cierra operaciones in-situ con respaldo legal y contable presente.",
  },
  {
    icon: "🤝",
    title: "Red de +900 colegas",
    text: "Comunidad activa de realtors latinos operando entre USA y LATAM. Networking, referidos, conocimiento compartido.",
  },
];

export default function SectionWhatYouSell() {
  return (
    <section className="sell">
      <div className="v2-container">
        <header className="sell-header reveal">
          <span className="section-number sell-number" aria-hidden="true">02</span>
          <span className="section-marker">— Tu inventario internacional</span>
          <h2 className="h-section">
            +40 proyectos exclusivos.
            <br />
            4 países. <em className="emphasis-gold">Una sola plataforma.</em>
          </h2>
          <p className="body-text sell-intro">
            Cada proyecto del Club viene con ficha técnica completa, datos de
            rentabilidad auditados, materiales de venta listos y comisión clara.
            Tu trabajo: presentárselo a tu cliente. El nuestro: todo lo demás.
          </p>
        </header>

        <div className="sell-grid">
          {cards.map((c, i) => (
            <article key={c.title} className="sell-card reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="sell-icon" aria-hidden="true">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .sell {
          background: var(--cream);
          padding: var(--v2-space-8) 0;
        }
        .sell-header {
          position: relative;
          margin-bottom: 3.5rem;
          text-align: center;
        }
        .sell-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
        }
        :global(.sell-header h2),
        :global(.sell-header .section-marker),
        :global(.sell-header .body-text) {
          position: relative;
          z-index: 1;
        }
        :global(.sell-header .section-marker) { margin-bottom: 1rem; }
        :global(.sell-header h2) { margin-bottom: 1.25rem; }
        .sell-intro { max-width: 720px; margin: 0 auto; }

        .sell-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .sell-card {
          background: var(--off-white);
          padding: 2rem 2.25rem;
          border-left: 3px solid var(--yellow-brand);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .sell-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
          border-left-color: var(--gold-dark);
        }
        .sell-icon {
          font-size: 2.25rem;
          margin-bottom: 1rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          background: var(--yellow-soft);
          border: 1px solid var(--gold-luxury);
        }
        .sell-card h3 {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.4rem;
          font-weight: 500;
          margin: 0 0 0.85rem;
          color: var(--black-primary);
          letter-spacing: -0.015em;
          line-height: 1.2;
        }
        .sell-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--gray-text);
          margin: 0;
        }
        @media (max-width: 1023px) { .sell-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 640px) { .sell-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
