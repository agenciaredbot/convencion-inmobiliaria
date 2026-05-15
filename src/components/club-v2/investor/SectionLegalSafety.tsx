"use client";

const cards = [
  {
    icon: "🔐",
    title: "Estructura legal binacional",
    text: "Te ayudamos a estructurar tu compra desde USA: fiducias mercantiles en Colombia, fideicomisos en RD, sociedades en México. Cada estructura optimizada para tu situación tributaria en USA.",
  },
  {
    icon: "💰",
    title: "Optimización fiscal",
    text: "Tratados de doble imposición entre USA y cada país. Estrategias para minimizar impuestos legalmente. Asesoría con CPAs especializados en operaciones binacionales.",
  },
  {
    icon: "📑",
    title: "Escrituración blindada",
    text: "Verificación de certificado de tradición y libertad, registro de propiedad, contratos de preventa con cláusulas protectoras, fiducias para proyectos en construcción.",
  },
  {
    icon: "🏦",
    title: "Transferencias declaradas",
    text: "Cómo mover tu capital legalmente entre USA y el país destino. Cumplimiento FATCA, reporte ante IRS, declaración ante DIAN/SAT. Todo limpio. Todo trazable.",
  },
  {
    icon: "🏠",
    title: "Administración remota",
    text: "Operadores locales certificados que administran tu propiedad: Airbnb, mantenimiento, servicios. Reportes mensuales transparentes. Tu rentabilidad en USD a tu cuenta.",
  },
  {
    icon: "⚖️",
    title: "Soporte legal continuo",
    text: "Acompañamiento legal post-compra: temas migratorios (visas de inversión), sucesiones internacionales, cambios regulatorios. Nuestro equipo te respalda años después.",
  },
];

export default function SectionLegalSafety() {
  return (
    <section className="legal">
      <div className="v2-container">
        <header className="legal-header reveal">
          <span className="section-number legal-number" aria-hidden="true">05</span>
          <span className="section-marker">— Tu mayor preocupación, resuelta</span>
          <h2 className="h-section">
            “¿Y si me estafan?
            <br />
            ¿Y los impuestos?
            <br />
            ¿Y si pierdo mi dinero?”
            <br />
            <em className="emphasis-gold">Aquí están las respuestas.</em>
          </h2>
        </header>

        <div className="legal-grid">
          {cards.map((c, i) => (
            <article key={c.title} className="legal-card reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="legal-icon" aria-hidden="true">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>

        <div className="trust-box reveal">
          <h4 className="trust-title">
            +10 años. Cientos de operaciones. <em>Clientes e inversionistas cerrando negocios.</em>
          </h4>
          <p>
            El know-how legal y contable internacional es{" "}
            <strong>la razón principal por la que existe el Club</strong>. No
            vendemos propiedades. Vendemos la seguridad de operar en mercados
            extranjeros con la tranquilidad de operar en tu casa.
          </p>
        </div>
      </div>

      <style jsx>{`
        .legal {
          background: var(--cream);
          padding: var(--v2-space-8) 0;
        }
        .legal-header {
          position: relative;
          margin-bottom: 3.5rem;
          text-align: center;
        }
        .legal-number {
          position: absolute;
          top: -3rem;
          left: 50%;
          transform: translateX(-50%);
        }
        :global(.legal-header h2),
        :global(.legal-header .section-marker) {
          position: relative;
          z-index: 1;
        }
        :global(.legal-header .section-marker) { margin-bottom: 1rem; }
        .legal-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .legal-card {
          background: var(--off-white);
          border: 1px solid var(--gray-border);
          padding: 2rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
          border-top: 3px solid var(--gold-luxury);
        }
        .legal-card:hover {
          transform: translateY(-4px);
          border-color: var(--gold-dark);
        }
        .legal-icon {
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
        .legal-card h3 {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.35rem;
          font-weight: 500;
          margin: 0 0 0.75rem;
          color: var(--black-primary);
          letter-spacing: -0.015em;
          line-height: 1.2;
        }
        .legal-card p {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--gray-text);
          margin: 0;
        }
        .trust-box {
          margin-top: 3rem;
          padding: 2.5rem 2.25rem;
          background: var(--black-primary);
          color: var(--cream);
          border: 1px solid var(--gold-luxury);
          text-align: center;
        }
        .trust-title {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 500;
          margin: 0 0 1rem;
          color: var(--off-white);
          letter-spacing: -0.02em;
          line-height: 1.15;
        }
        .trust-title em {
          color: var(--yellow-brand);
          font-style: italic;
          font-weight: 400;
        }
        .trust-box p {
          font-size: 1.0625rem;
          line-height: 1.65;
          max-width: 720px;
          margin: 0 auto;
          color: var(--cream);
        }
        .trust-box strong {
          color: var(--yellow-brand);
          font-weight: 600;
        }
        @media (max-width: 1023px) {
          .legal-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .legal-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
