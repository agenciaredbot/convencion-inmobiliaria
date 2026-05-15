"use client";

export default function SectionHeroRealtor() {
  return (
    <section className="hero-r grain-overlay">
      <div className="v2-container hero-r-container">
        <div className="hero-r-content">
          <span className="section-marker hero-r-marker">— Para realtors latinos en USA</span>

          <h1 className="h-hero hero-r-title">
            <span className="hero-word">Mientras</span>{" "}
            <span className="hero-word">el realtor</span>{" "}
            <span className="hero-word">promedio</span>{" "}
            <span className="hero-word">pelea por</span>{" "}
            <span className="hero-word">listings</span>{" "}
            <span className="hero-word">en Miami,</span>
            <br />
            <span className="hero-word">
              <em className="emphasis-yellow">tú accedes</em>
            </span>{" "}
            <span className="hero-word">
              <em className="emphasis-yellow">a 4 mercados</em>
            </span>{" "}
            <span className="hero-word">
              <em className="emphasis-yellow">con comisiones 3x más altas.</em>
            </span>
          </h1>

          <p className="hero-r-subhead">
            Vende propiedades en{" "}
            <strong>Colombia, México, RD y Dubai</strong> desde tu oficina en
            Miami. Sin licencia local. Con know-how legal. Con +40 proyectos
            curados listos para mostrar.
          </p>

          <div className="hero-r-data">
            <div className="data-item">
              <span className="data-number">93</span>
              <span className="data-label">
                Días promedio
                <br />
                en mercado Miami
              </span>
            </div>
            <div className="data-item is-highlight">
              <span className="data-number">3-6%</span>
              <span className="data-label">
                Comisión directa
                <br />
                en LATAM
              </span>
            </div>
            <div className="data-item">
              <span className="data-number">+40</span>
              <span className="data-label">
                Proyectos curados
                <br />
                en el portal
              </span>
            </div>
          </div>

          <div className="hero-ctas">
            <a href="#planes" className="btn btn--primary btn--large">
              Ver planes con 25% OFF <span className="btn-icon">→</span>
            </a>
            <a href="#agente-ia" className="btn btn--ghost">
              Conocer el agente IA
            </a>
          </div>
        </div>

        <div className="hero-r-visual">
          <div className="hero-r-image-wrap">
            <img
              src="/images/club-v2/path-realtor.jpg"
              alt="Realtor latina trabajando"
              fetchPriority="high"
              className="hero-r-image"
            />
            <div className="hero-r-tint" />
          </div>
          <div className="sticker sticker--animated hero-r-sticker">
            <span className="sticker-line">Desde</span>
            <span className="sticker-big">$20</span>
            <span className="sticker-line">USD/mes con 25% OFF</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-r {
          background: var(--black-primary);
          color: var(--off-white);
          min-height: 95vh;
          display: flex;
          align-items: center;
          padding: 7rem 0 5rem;
          position: relative;
          overflow: hidden;
        }
        .hero-r-container {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: var(--v2-space-6);
          align-items: center;
          width: 100%;
          position: relative;
          z-index: 2;
        }
        :global(.hero-r .hero-r-marker) {
          color: var(--gold-luxury);
          margin-bottom: 1.25rem;
        }
        .hero-r-title {
          color: var(--off-white);
          margin-bottom: 1.5rem;
        }
        .hero-r-subhead {
          font-family: var(--font-inter, 'Inter', sans-serif);
          font-size: clamp(1.0625rem, 1.6vw, 1.25rem);
          line-height: 1.55;
          color: var(--cream);
          margin: 0 0 1.5rem;
          max-width: 540px;
        }
        .hero-r-subhead strong {
          color: var(--yellow-brand);
          font-weight: 600;
        }
        .hero-r-data {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin: 2rem 0;
          padding: 1.25rem 0;
          border-top: 1px solid var(--gold-luxury);
          border-bottom: 1px solid var(--gold-luxury);
        }
        .data-item { display: flex; flex-direction: column; gap: 0.4rem; }
        .data-number {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 300;
          color: var(--gold-luxury);
          line-height: 1;
          letter-spacing: -0.03em;
        }
        .data-item.is-highlight .data-number {
          color: var(--yellow-brand);
        }
        .data-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          color: var(--gold-light);
          line-height: 1.5;
          text-transform: uppercase;
        }
        .hero-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .hero-r-visual {
          position: relative;
          height: 540px;
        }
        .hero-r-image-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .hero-r-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(0.2) contrast(1.05) brightness(0.85);
        }
        .hero-r-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(10, 10, 10, 0.18),
            rgba(10, 10, 10, 0.55)
          );
          mix-blend-mode: multiply;
        }
        .hero-r-sticker {
          position: absolute;
          top: 30px;
          right: -28px;
          z-index: 3;
          padding: 1.25rem 1.75rem;
          max-width: 200px;
        }
        @media (max-width: 1023px) {
          .hero-r-container { grid-template-columns: 1fr; }
          .hero-r-visual { height: 320px; order: -1; }
          .hero-r-sticker { right: 16px; top: 16px; }
        }
        @media (max-width: 640px) {
          .hero-r { padding: 6rem 0 4rem; min-height: 85vh; }
          .hero-r-data { grid-template-columns: 1fr; gap: 1rem; }
        }
      `}</style>
    </section>
  );
}
