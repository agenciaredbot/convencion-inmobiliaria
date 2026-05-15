"use client";

const days = [
  {
    n: "Día 1",
    title: "Llegada + Bienvenida VIP",
    items: [
      { icon: "✈️", text: "Recepción en aeropuerto con traslado privado" },
      { icon: "🏨", text: "Check-in en hotel/resort premium" },
      { icon: "🥂", text: "Cena de bienvenida con Claudia y desarrolladores" },
      { icon: "📋", text: "Briefing del tour, agenda y objetivos" },
    ],
  },
  {
    n: "Día 2",
    title: "Visitas a proyectos curados",
    items: [
      { icon: "🏗️", text: "Visita en sitio a 3-4 proyectos exclusivos" },
      { icon: "👤", text: "Reuniones 1:1 con gerentes comerciales" },
      { icon: "📊", text: "Análisis financiero de cada proyecto" },
      { icon: "🍽️", text: "Almuerzos de networking con otros inversionistas" },
      { icon: "🌃", text: "Cocktail nocturno con la red del Club" },
    ],
  },
  {
    n: "Día 3",
    title: "Decisión + Asesoría legal",
    items: [
      { icon: "📑", text: "Sesión privada con asesores legales y contables" },
      { icon: "💼", text: "Estructuración de tu compra (si decides)" },
      { icon: "🔑", text: "Reserva de unidad sobre el papel (opcional)" },
      { icon: "✈️", text: "Traslado al aeropuerto + cierre del tour" },
    ],
  },
];

const includes = [
  { icon: "✈️", text: "Vuelos desde Miami (otras ciudades coordinables)" },
  { icon: "🏨", text: "Hospedaje premium" },
  { icon: "🍽️", text: "Comidas oficiales" },
  { icon: "🚐", text: "Transporte local" },
  { icon: "👨‍⚖️", text: "Asesoría legal y contable" },
  { icon: "🤝", text: "Networking exclusivo" },
];

export default function SectionTourInside() {
  return (
    <section className="tour-inside">
      <div className="v2-container">
        <header className="ti-header reveal">
          <span className="section-number ti-number" aria-hidden="true">04</span>
          <span className="section-marker">— La experiencia</span>
          <h2 className="h-section">
            Esto es lo que vives
            <br />
            en un tour del <em className="emphasis-gold">Club.</em>
          </h2>
        </header>

        <div className="timeline">
          {days.map((d, i) => (
            <article key={d.n} className="day-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="day-num">{d.n}</span>
              <h3 className="day-title">{d.title}</h3>
              <ul className="day-list">
                {d.items.map((it, j) => (
                  <li key={j}>
                    <span aria-hidden="true">{it.icon}</span> {it.text}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="includes-box reveal">
          <h4 className="includes-title">
            Todo incluido. <em>Sin letra pequeña.</em>
          </h4>
          <div className="includes-grid">
            {includes.map((it, i) => (
              <span key={i} className="includes-item">
                <span aria-hidden="true">{it.icon}</span> {it.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .tour-inside {
          background: var(--off-white);
          padding: var(--v2-space-8) 0;
        }
        .ti-header {
          position: relative;
          margin-bottom: 3.5rem;
          text-align: center;
        }
        .ti-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
        }
        :global(.ti-header h2),
        :global(.ti-header .section-marker) {
          position: relative;
          z-index: 1;
        }
        :global(.ti-header .section-marker) { margin-bottom: 1rem; }
        .timeline {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .day-card {
          background: var(--cream);
          padding: 2.25rem 2rem;
          border-top: 4px solid var(--gold-luxury);
          display: flex;
          flex-direction: column;
        }
        .day-num {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.85rem;
          letter-spacing: 0.18em;
          color: var(--gold-dark);
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .day-title {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.5rem;
          font-weight: 500;
          margin: 0 0 1.25rem;
          letter-spacing: -0.015em;
          color: var(--black-primary);
          line-height: 1.2;
        }
        .day-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .day-list li {
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--gray-border);
          font-size: 0.9rem;
          color: var(--gray-deep);
          display: flex;
          gap: 0.6rem;
          align-items: flex-start;
          line-height: 1.5;
        }
        .day-list li:last-child { border-bottom: none; }
        .day-list li > span:first-child { flex-shrink: 0; }

        .includes-box {
          margin-top: 3rem;
          padding: 2.5rem 2.25rem;
          background: var(--black-primary);
          color: var(--off-white);
          border: 2px solid var(--yellow-brand);
          box-shadow: 12px 12px 0 0 var(--yellow-brand);
        }
        .includes-title {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 500;
          margin: 0 0 1.5rem;
          color: var(--yellow-brand);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        .includes-title em {
          color: var(--gold-light);
          font-style: italic;
          font-weight: 400;
        }
        .includes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem 1.5rem;
        }
        .includes-item {
          padding: 0.65rem 0;
          font-size: 0.95rem;
          color: var(--cream);
          display: flex;
          gap: 0.6rem;
          align-items: center;
          line-height: 1.4;
        }
        @media (max-width: 1023px) {
          .timeline { grid-template-columns: 1fr; }
          .includes-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .includes-grid { grid-template-columns: 1fr; }
          .includes-box { box-shadow: 6px 6px 0 0 var(--yellow-brand); }
        }
      `}</style>
    </section>
  );
}
