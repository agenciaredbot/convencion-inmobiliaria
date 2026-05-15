"use client";

export default function SectionWebinar() {
  return (
    <section className="webinar">
      <div className="v2-container">
        <div className="webinar-box reveal">
          <div className="webinar-content">
            <span className="section-marker">— Capítulo 09 / Empieza aquí</span>
            <span className="webinar-tag">🎥 Webinar gratuito</span>

            <h2 className="h-section">
              Cómo comprar propiedades
              <br />
              fuera de Estados Unidos
              <br />
              con <em className="emphasis-gold">15-30% de valorización</em>
              <br />
              al año.
            </h2>

            <p className="webinar-subhead">
              Sin licencia local. Sin volar a ciegas. Sin abogados costosos.
            </p>

            <p className="body-text">
              Una sesión de 45 minutos donde <strong>Claudia Rivera</strong> te
              muestra:
            </p>

            <ul className="webinar-bullets">
              <li>Los 5 mercados con mayor retorno en 2026 (con data real)</li>
              <li>Cómo estructurar una compra internacional desde USA sin riesgos</li>
              <li>El error #1 que cometen los compradores que terminan estafados</li>
              <li>Cómo se ve un tour inmobiliario por dentro</li>
            </ul>

            <a href="#preinscripcion" className="btn btn--primary btn--large">
              Apartar mi cupo gratis <span className="btn-icon">→</span>
            </a>

            <p className="webinar-disclaimer">
              100% gratuito. Sin spam. Cupos limitados a 100 personas por sesión.
            </p>
          </div>

          <div className="webinar-visual" aria-hidden="true">
            <div className="webinar-mockup">
              <img
                src="/images/club-v2/webinar-preview.jpg"
                alt=""
                loading="lazy"
              />
              <div className="webinar-play">▶</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .webinar {
          background: linear-gradient(180deg, var(--cream), var(--off-white));
          padding: var(--v2-space-8) 0;
        }
        .webinar-box {
          background: var(--off-white);
          border: 1px solid var(--gold-luxury);
          padding: var(--v2-space-6) var(--v2-space-5);
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: var(--v2-space-5);
          align-items: center;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.06);
        }
        .webinar-content :global(.section-marker) { margin-bottom: 0.75rem; }
        .webinar-tag {
          display: inline-block;
          background: var(--yellow-brand);
          color: var(--black-primary);
          padding: 0.4rem 0.9rem;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          margin-bottom: 1.25rem;
          border: 1px solid var(--gold-dark);
        }
        .webinar-content :global(h2) { margin-bottom: 1.25rem; }
        .webinar-subhead {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.4rem;
          font-style: italic;
          color: var(--gold-dark);
          margin: 1rem 0 1.75rem;
          line-height: 1.3;
        }
        .webinar-content :global(.body-text) {
          margin: 0.5rem 0 1rem;
        }
        .webinar-bullets {
          list-style: none;
          padding: 0;
          margin: 0.5rem 0 2rem;
        }
        .webinar-bullets li {
          padding: 0.7rem 0 0.7rem 2rem;
          border-bottom: 1px solid var(--gray-border);
          font-size: 0.9375rem;
          color: var(--gray-deep);
          position: relative;
          line-height: 1.5;
        }
        .webinar-bullets li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 0.6rem;
          color: var(--gold-dark);
          font-weight: 600;
          font-size: 1.1rem;
        }
        .webinar-bullets li:last-child { border-bottom: none; }
        .webinar-disclaimer {
          margin-top: 1rem;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          color: var(--gray-text);
          letter-spacing: 0.05em;
        }
        .webinar-mockup {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border: 1px solid var(--gold-luxury);
        }
        .webinar-mockup img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.7) contrast(1.05);
        }
        .webinar-play {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          color: var(--yellow-brand);
          text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
          line-height: 1;
        }
        @media (max-width: 1023px) {
          .webinar-box { grid-template-columns: 1fr; padding: 2rem 1.75rem; }
        }
      `}</style>
    </section>
  );
}
