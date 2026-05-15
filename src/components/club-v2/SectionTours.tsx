"use client";

type Tour = {
  urgency: string;
  date: string;
  destination: string;
  details: { icon: string; text: string }[];
  capacity: number;
  capacityText: string;
  href: string;
  image: string;
};

const tours: Tour[] = [
  {
    urgency: "Próximo tour",
    date: "30 de Mayo",
    destination: "Punta Cana, República Dominicana",
    details: [
      { icon: "⏱️", text: "3 días / 2 noches" },
      { icon: "✈️", text: "Tiquetes aéreos incluidos" },
      { icon: "🏨", text: "Resort all-inclusive premium" },
      { icon: "🚐", text: "Transporte local cubierto" },
      { icon: "🏗️", text: "Visita a 4 proyectos exclusivos" },
      { icon: "📑", text: "Asesoría legal y contable" },
    ],
    capacity: 67,
    capacityText: "8 de 12 cupos reservados",
    href: "#preinscripcion",
    image: "/images/club-v2/tour-puntacana.jpg",
  },
  {
    urgency: "Siguiente tour",
    date: "15 de Junio",
    destination: "Cancún, México",
    details: [
      { icon: "⏱️", text: "3 días / 2 noches" },
      { icon: "✈️", text: "Tiquetes aéreos incluidos" },
      { icon: "🏨", text: "Hotel boutique 5★ Zona Hotelera" },
      { icon: "🚐", text: "Transporte local cubierto" },
      { icon: "🏗️", text: "Visita a 5 proyectos exclusivos" },
      { icon: "📑", text: "Asesoría legal y contable" },
    ],
    capacity: 42,
    capacityText: "5 de 12 cupos reservados",
    href: "#preinscripcion",
    image: "/images/club-v2/tour-cancun.jpg",
  },
];

export default function SectionTours() {
  return (
    <section className="tours" id="tours">
      <div className="v2-container">
        <header className="tours-header reveal">
          <span className="section-number tours-number" aria-hidden="true">07</span>
          <span className="section-marker">— Capítulo 07 / Este mes</span>
          <h2 className="h-section">
            Los próximos viajes
            <br />
            ya están abiertos.
            <br />
            <em className="emphasis-gold">Y los cupos son reales.</em>
          </h2>
          <p className="body-text tours-intro">
            Cada tour incluye vuelos, alojamiento premium, transporte local,
            visitas a proyectos curados, eventos de networking con
            desarrolladores y asesoría legal/contable de cierre. Sin letra
            pequeña.
          </p>
        </header>

        <div className="tours-grid">
          {tours.map((t, i) => (
            <article key={i} className="tour-card reveal">
              <div className="tour-image">
                <img src={t.image} alt={t.destination} loading="lazy" />
              </div>
              <div className="tour-content">
                <div className="tour-urgency">
                  <span className="dot-blink" aria-hidden="true" />
                  <span>{t.urgency}</span>
                </div>
                <h3 className="tour-date">{t.date}</h3>
                <h4 className="tour-destination">{t.destination}</h4>
                <ul className="tour-details">
                  {t.details.map((d, j) => (
                    <li key={j}>
                      <span aria-hidden="true">{d.icon}</span> {d.text}
                    </li>
                  ))}
                </ul>
                <div className="tour-capacity">
                  <div className="capacity-bar">
                    <div className="capacity-filled" style={{ width: `${t.capacity}%` }} />
                  </div>
                  <span className="capacity-text">
                    <strong>{t.capacityText}</strong>
                  </span>
                </div>
                <a href={t.href} className="btn btn--primary btn--full">
                  Reservar mi cupo <span className="btn-icon">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="tours-upcoming">
          💡 Próximos destinos planificados:{" "}
          <strong>Medellín (julio) · Dubai (agosto) · Barranquilla (septiembre)</strong>
        </p>
      </div>

      <style jsx>{`
        .tours {
          background: var(--off-white);
          padding: var(--v2-space-8) 0;
          position: relative;
        }
        .tours-header {
          position: relative;
          margin-bottom: 3.5rem;
          text-align: center;
        }
        .tours-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
        }
        :global(.tours-header h2),
        :global(.tours-header .section-marker),
        :global(.tours-header .body-text) {
          position: relative;
          z-index: 1;
        }
        :global(.tours-header .section-marker) { margin-bottom: 1rem; }
        :global(.tours-header h2) { margin-bottom: 1.25rem; }
        .tours-intro { max-width: 720px; margin: 0 auto; }
        .tours-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .tour-card {
          background: var(--cream);
          border: 1px solid var(--gold-luxury);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .tour-card:hover {
          transform: translateY(-6px);
          box-shadow: 12px 12px 0 0 rgba(201, 169, 97, 0.25);
        }
        .tour-image {
          aspect-ratio: 16 / 9;
          overflow: hidden;
        }
        .tour-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .tour-card:hover .tour-image img { transform: scale(1.05); }
        .tour-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
        }
        .tour-urgency {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--error);
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        .tour-date {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 2.5rem;
          font-weight: 500;
          margin: 0;
          line-height: 1;
          color: var(--black-primary);
          letter-spacing: -0.025em;
        }
        .tour-destination {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-style: italic;
          font-size: 1.2rem;
          color: var(--gold-dark);
          margin: 0 0 0.5rem;
          font-weight: 400;
        }
        .tour-details {
          list-style: none;
          padding: 0;
          margin: 0.5rem 0 1rem;
        }
        .tour-details li {
          padding: 0.55rem 0;
          font-size: 0.9rem;
          border-bottom: 1px solid rgba(201, 169, 97, 0.2);
          color: var(--gray-deep);
          display: flex;
          gap: 0.6rem;
          align-items: center;
        }
        .tour-details li:last-child { border-bottom: none; }
        .tour-capacity {
          margin-top: auto;
          padding-top: 1rem;
        }
        .capacity-bar {
          height: 6px;
          background: rgba(0, 0, 0, 0.08);
          margin-bottom: 0.5rem;
          overflow: hidden;
          border-radius: 3px;
        }
        .capacity-filled {
          height: 100%;
          background: linear-gradient(90deg, var(--yellow-brand), var(--gold-luxury));
          transition: width 1s ease;
        }
        .capacity-text {
          font-size: 0.8125rem;
          color: var(--gray-text);
          display: block;
          margin-bottom: 1rem;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
        }
        .capacity-text strong {
          color: var(--black-primary);
          font-weight: 600;
        }
        .tours-upcoming {
          text-align: center;
          margin-top: 2.5rem;
          font-size: 0.95rem;
          color: var(--gray-deep);
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-style: italic;
        }
        .tours-upcoming strong {
          color: var(--gold-dark);
          font-style: normal;
          font-weight: 500;
        }
        @media (max-width: 1023px) {
          .tours-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
