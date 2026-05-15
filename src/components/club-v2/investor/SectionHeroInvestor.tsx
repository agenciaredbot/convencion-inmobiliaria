"use client";

export default function SectionHeroInvestor() {
  return (
    <section className="hero-inv grain-overlay">
      <div className="v2-container hero-inv-container">
        <div className="hero-inv-content">
          <span className="section-marker">— Para inversionistas latinos en USA</span>

          <h1 className="h-hero hero-inv-title">
            <span className="hero-word">Tu dinero</span>{" "}
            <span className="hero-word">vale</span>{" "}
            <span className="hero-word">
              <em className="emphasis-gold-italic">4x más</em>
            </span>
            <br />
            <span className="hero-word">en Medellín</span>{" "}
            <span className="hero-word">que en Miami.</span>
          </h1>

          <p className="hero-inv-subhead">
            Compra propiedades en Latinoamérica con{" "}
            <strong>valorizaciones del 15-30% anual</strong> y rentabilidad en
            dólares. Te llevamos al tour, te conectamos con el desarrollador y
            te acompañamos hasta la escritura.
          </p>

          <ul className="hero-benefits">
            <li>
              <span className="benefit-icon" aria-hidden="true">🛡️</span>
              <span>Asesoría legal y contable internacional</span>
            </li>
            <li>
              <span className="benefit-icon" aria-hidden="true">✈️</span>
              <span>Tours con todo incluido (vuelos + hotel)</span>
            </li>
            <li>
              <span className="benefit-icon" aria-hidden="true">💵</span>
              <span>Renta en USD a tu cuenta en USA</span>
            </li>
          </ul>

          <div className="hero-ctas">
            <a href="#asesoria" className="btn btn--luxury btn--large">
              Agendar asesoría gratuita <span className="btn-icon">→</span>
            </a>
            <a href="#calculadora" className="btn btn--secondary">
              Calcular mi potencial de compra
            </a>
          </div>

          <p className="hero-disclaimer">
            ✓ Sin compromiso · Sin cobro inicial · Sin presión comercial
          </p>
        </div>

        <div className="hero-inv-visual">
          <div className="hero-inv-image-wrap">
            <img
              src="/images/club-v2/path-investor.jpg"
              alt="Inversionista en terraza premium"
              fetchPriority="high"
              className="hero-inv-image"
            />
            <div className="hero-inv-tint" />
          </div>
          <div className="hero-stat-overlay" aria-hidden="true">
            <span className="stat-overlay-number">+25%</span>
            <span className="stat-overlay-text">
              Valorización<br />proyectada<br />Medellín 2026
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-inv {
          min-height: 95vh;
          background: linear-gradient(135deg, var(--cream), var(--off-white));
          display: flex;
          align-items: center;
          padding: 7rem 0 5rem;
          position: relative;
          overflow: hidden;
        }
        .hero-inv-container {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: var(--v2-space-6);
          align-items: center;
          width: 100%;
          position: relative;
          z-index: 2;
        }
        .hero-inv-content { position: relative; }
        :global(.hero-inv .section-marker) {
          color: var(--gold-dark);
          margin-bottom: 1.25rem;
        }
        .hero-inv-title {
          color: var(--black-primary);
          margin-bottom: 1.5rem;
        }
        :global(.hero-inv .emphasis-gold-italic) {
          color: var(--gold-luxury);
          font-style: italic;
          font-weight: 400;
        }
        .hero-inv-subhead {
          font-family: var(--font-inter, 'Inter', sans-serif);
          font-size: clamp(1.0625rem, 1.6vw, 1.25rem);
          line-height: 1.55;
          color: var(--gray-deep);
          margin: 0 0 1.5rem;
          max-width: 540px;
        }
        .hero-inv-subhead strong {
          color: var(--gold-dark);
          font-weight: 600;
        }
        .hero-benefits {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .hero-benefits li {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--gray-border);
          font-size: 0.95rem;
          color: var(--gray-deep);
        }
        .benefit-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
        }
        .hero-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 1.5rem;
        }
        .hero-disclaimer {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.75rem;
          color: var(--gray-text);
          margin-top: 1.25rem;
          letter-spacing: 0.04em;
        }
        .hero-inv-visual {
          position: relative;
          height: 540px;
        }
        .hero-inv-image-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .hero-inv-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: contrast(1.05) saturate(0.95);
        }
        .hero-inv-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 244, 184, 0.15),
            transparent 40%,
            rgba(10, 10, 10, 0.18)
          );
          mix-blend-mode: multiply;
        }
        .hero-stat-overlay {
          position: absolute;
          bottom: 32px;
          left: -28px;
          background: var(--black-primary);
          color: var(--off-white);
          padding: 1.5rem 1.75rem;
          z-index: 3;
          border: 2px solid var(--gold-luxury);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.18);
          max-width: 220px;
        }
        .stat-overlay-number {
          display: block;
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 3.25rem;
          font-weight: 300;
          color: var(--yellow-brand);
          line-height: 1;
          margin-bottom: 0.5rem;
          letter-spacing: -0.04em;
        }
        .stat-overlay-text {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          line-height: 1.5;
          color: var(--gold-light);
          text-transform: uppercase;
        }
        @media (max-width: 1023px) {
          .hero-inv-container { grid-template-columns: 1fr; }
          .hero-inv-visual { height: 360px; order: -1; }
          .hero-stat-overlay { left: 16px; bottom: 16px; max-width: 180px; padding: 1rem 1.25rem; }
          .stat-overlay-number { font-size: 2.5rem; }
        }
        @media (max-width: 640px) {
          .hero-inv { padding: 6rem 0 4rem; min-height: 85vh; }
        }
      `}</style>
    </section>
  );
}
