"use client";

const credentials = [
  { value: "+40", label: "Proyectos\nactivos hoy" },
  { value: "~$48M", label: "Volumen vendido\n2024-2025" },
  { value: "12-18", label: "Meses promedio\nde venta total" },
  { value: "4-7x", label: "ROI promedio\nsobre membresía" },
];

export default function SectionHeroDeveloper() {
  return (
    <section className="hero-d grain-overlay">
      <div className="v2-container hero-d-container">
        <div className="hero-d-content">
          <span className="section-marker hero-d-marker">— B2B / Para desarrolladores</span>

          <h1 className="h-hero hero-d-title">
            <span className="hero-word">Pon tu proyecto</span>
            <br />
            <span className="hero-word">frente a</span>{" "}
            <span className="hero-word">
              <em className="emphasis-gold-italic">+10,000 ojos</em>
            </span>
            <br />
            <span className="hero-word">con dólares</span>{" "}
            <span className="hero-word">en la mano.</span>
          </h1>

          <p className="hero-d-subhead">
            Conectamos tu desarrollo inmobiliario con una red activa de{" "}
            <strong>
              +900 realtors latinos en USA, +10,000 operadores en LATAM
            </strong>{" "}
            y miles de inversionistas calificados con capacidad de compra en
            USD.
          </p>

          <div className="hero-d-credentials">
            {credentials.map((c, i) => (
              <div key={i} className="credential">
                <span className="cred-value">{c.value}</span>
                <span className="cred-label">{c.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-ctas">
            <a href="#agendar-reunion" className="btn btn--luxury btn--large">
              Agendar reunión comercial <span className="btn-icon">→</span>
            </a>
            <a href="#planes" className="btn btn--ghost">
              Ver planes B2B
            </a>
          </div>
        </div>

        <div className="hero-d-visual">
          <div className="hero-d-image-wrap">
            <img
              src="/images/club-v2/path-developer.jpg"
              alt="Proyecto inmobiliario premium aéreo"
              fetchPriority="high"
              className="hero-d-image"
            />
            <div className="hero-d-tint" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-d {
          background: linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%);
          color: var(--off-white);
          min-height: 95vh;
          display: flex;
          align-items: center;
          padding: 7rem 0 5rem;
          position: relative;
          overflow: hidden;
        }
        .hero-d-container {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: var(--v2-space-6);
          align-items: center;
          width: 100%;
          position: relative;
          z-index: 2;
        }
        :global(.hero-d .hero-d-marker) {
          color: var(--gold-luxury);
          margin-bottom: 1.25rem;
        }
        .hero-d-title {
          color: var(--off-white);
          margin-bottom: 1.5rem;
        }
        :global(.hero-d .emphasis-gold-italic) {
          color: var(--gold-luxury);
          font-style: italic;
          font-weight: 400;
        }
        .hero-d-subhead {
          font-family: var(--font-inter, 'Inter', sans-serif);
          font-size: clamp(1.0625rem, 1.6vw, 1.25rem);
          line-height: 1.6;
          color: var(--cream);
          margin: 0 0 2rem;
          max-width: 580px;
        }
        .hero-d-subhead strong {
          color: var(--gold-light);
          font-weight: 600;
        }
        .hero-d-credentials {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin: 2rem 0 2.5rem;
          padding: 1.5rem 0;
          border-top: 1px solid var(--gold-luxury);
          border-bottom: 1px solid var(--gold-luxury);
        }
        .credential {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .cred-value {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: clamp(1.75rem, 3.5vw, 2.5rem);
          font-weight: 400;
          color: var(--gold-luxury);
          line-height: 1;
          letter-spacing: -0.025em;
        }
        .cred-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold-light);
          line-height: 1.5;
          white-space: pre-line;
        }
        .hero-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .hero-d-visual {
          position: relative;
          height: 540px;
        }
        .hero-d-image-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .hero-d-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(0.25) contrast(1.1) brightness(0.9);
        }
        .hero-d-tint {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(10, 10, 10, 0.18), rgba(10, 10, 10, 0.55)),
            linear-gradient(135deg, rgba(201, 169, 97, 0.18), transparent 50%);
          mix-blend-mode: multiply;
        }
        @media (max-width: 1023px) {
          .hero-d-container { grid-template-columns: 1fr; }
          .hero-d-visual { height: 320px; order: -1; }
          .hero-d-credentials { grid-template-columns: 1fr 1fr; gap: 1rem; }
        }
        @media (max-width: 640px) {
          .hero-d { padding: 6rem 0 4rem; min-height: 85vh; }
        }
      `}</style>
    </section>
  );
}
