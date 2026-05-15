"use client";

export default function SectionHero() {
  return (
    <section className="hero-main grain-overlay">
      <div className="hero-container v2-container">
        <div className="hero-content">
          <span className="section-marker hero-marker">— Capítulo 00 / La oportunidad</span>

          <h1 className="h-hero hero-title">
            <span className="hero-word">Mientras</span>{" "}
            <span className="hero-word">Estados Unidos</span>{" "}
            <span className="hero-word">se enfría,</span>
            <br />
            <span className="hero-word">Latinoamérica</span>{" "}
            <span className="hero-word">
              <em className="emphasis-yellow">se calienta.</em>
            </span>
          </h1>

          <p className="hero-subhead">
            Te llevamos a los 5 mercados inmobiliarios más rentables del mundo
            hispano. Sin licencia local. Sin volar a ciegas. Sin abogados
            costosos. Además te incluimos{" "}
            <strong>asesoría legal y contable</strong>.
          </p>

          <div className="hero-social-proof">
            <span className="micro">+900 MIEMBROS</span>
            <span className="dot-separator">·</span>
            <span className="micro">+10,000 OPERADORES</span>
            <span className="dot-separator">·</span>
            <span className="micro">5 MERCADOS</span>
            <span className="dot-separator">·</span>
            <span className="micro">15 AÑOS</span>
          </div>

          <div className="hero-ctas">
            <a href="#preinscripcion" className="btn btn--primary btn--large">
              Quiero mi 25% OFF <span className="btn-icon">→</span>
            </a>
            <a href="#destinos" className="btn btn--ghost">
              Ver los 5 mercados
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img
              src="/images/club-v2/hero-luxury-skyline.jpg"
              alt="Vista urbana premium"
              className="hero-image"
              fetchPriority="high"
            />
            <div className="hero-image-tint" />
          </div>
          <div className="sticker sticker--animated hero-sticker">
            <span className="sticker-big">+25%</span>
            <span className="sticker-line">
              Valorización<br />promedio LATAM 2026
            </span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <span className="scroll-text">Descubre más</span>
        <div className="scroll-line" />
      </div>

      <style jsx>{`
        .hero-main {
          min-height: 100vh;
          background: var(--black-primary);
          color: var(--off-white);
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 7rem 0 5rem;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: var(--v2-space-6);
          align-items: center;
          width: 100%;
        }
        .hero-content { position: relative; z-index: 2; }
        :global(.hero-main .hero-marker) {
          color: var(--gold-luxury);
          margin-bottom: 1.5rem;
        }
        .hero-title {
          color: var(--off-white);
          margin-bottom: 1.5rem;
        }
        .hero-subhead {
          font-family: var(--font-inter, 'Inter', sans-serif);
          font-size: clamp(1.0625rem, 1.6vw, 1.25rem);
          line-height: 1.55;
          color: var(--cream);
          margin: 0 0 1.5rem;
          max-width: 540px;
        }
        .hero-subhead strong {
          color: var(--yellow-brand);
          font-weight: 600;
        }
        .hero-social-proof {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2.25rem;
          color: var(--gold-light);
          align-items: center;
        }
        .dot-separator { color: var(--gold-luxury); }
        .hero-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .hero-visual {
          position: relative;
          height: 520px;
        }
        .hero-image-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(0.3) contrast(1.05) brightness(0.85);
        }
        .hero-image-tint {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(10, 10, 10, 0.15), rgba(10, 10, 10, 0.55)),
            linear-gradient(135deg, rgba(255, 212, 0, 0.12), transparent 50%);
          mix-blend-mode: multiply;
        }
        .hero-sticker {
          position: absolute;
          top: 30px;
          right: -28px;
          z-index: 3;
          padding: 1.25rem 1.75rem;
        }
        .scroll-indicator {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          color: var(--gold-luxury);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .scroll-text {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.6875rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .scroll-line {
          width: 1px;
          height: 36px;
          background: var(--gold-luxury);
          animation: v2-scroll-pulse 2s ease-in-out infinite;
          transform-origin: top;
        }
        @media (max-width: 1023px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: var(--v2-space-5);
          }
          .hero-visual {
            order: -1;
            height: 320px;
          }
          .hero-sticker {
            right: 16px;
            top: 16px;
          }
        }
        @media (max-width: 640px) {
          .hero-main { padding: 6rem 0 4rem; min-height: 90vh; }
          .scroll-indicator { display: none; }
        }
      `}</style>
    </section>
  );
}
