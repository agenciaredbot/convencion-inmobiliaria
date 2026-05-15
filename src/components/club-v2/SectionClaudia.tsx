"use client";

export default function SectionClaudia() {
  return (
    <section className="claudia" id="claudia">
      <div className="v2-container">
        <div className="claudia-grid">
          <div className="claudia-image-wrap reveal">
            <div className="claudia-image">
              <img
                src="/images/club-v2/claudia.jpg"
                alt="Claudia Rivera, fundadora del Club Inmobiliario"
                loading="lazy"
              />
            </div>
            <div className="sticker sticker--animated claudia-sticker" aria-hidden="true">
              <span className="sticker-line">Fundadora</span>
            </div>
            <div className="claudia-credentials">
              <strong>Claudia Rivera</strong>
              <span>Fundadora &amp; CEO</span>
              <span>Club Inmobiliario · Conexión Inmobiliaria USA</span>
            </div>
          </div>

          <div className="claudia-content reveal">
            <span className="section-number claudia-number" aria-hidden="true">05</span>
            <span className="section-marker">— Capítulo 05 / La autora</span>

            <h2 className="h-section claudia-title">
              Detrás del Club hay <em className="emphasis-gold">+10 años</em>
              <br />
              abriendo puertas que nadie
              <br />
              más conoce.
            </h2>

            <div className="claudia-body">
              <p>
                Soy <strong>Claudia Rivera</strong>, fundadora del Club
                Inmobiliario y de Conexión Inmobiliaria USA.
              </p>
              <p>
                Llevo más de 10 años moviéndome entre los mercados inmobiliarios
                de{" "}
                <strong>Colombia, Miami, República Dominicana y México</strong>.
                He organizado convenciones con las voces más importantes del real
                estate del mundo hispano. He acompañado a cientos de
                inversionistas y realtors a cruzar fronteras, aprovechar
                oportunidades y construir patrimonio internacional.
              </p>
              <p className="editorial-pull">
                El Club Inmobiliario es la suma de todo ese networking, ese
                know-how y esa experiencia, condensados en una membresía que te
                abre las puertas que yo tardé +10 años en abrir.
              </p>
            </div>

            {/* Instagram CTA temporalmente oculto — restaurar cuando esté listo el perfil
            <div className="claudia-cta">
              <a
                href="https://instagram.com/claudiariverarealestate"
                className="btn btn--secondary"
                target="_blank"
                rel="noreferrer"
              >
                Ver su trabajo en Instagram <span className="btn-icon">→</span>
              </a>
            </div>
            */}

            <div className="claudia-credentials-row">
              <span className="micro">Apariciones y alianzas</span>
              <div className="credentials-logos">
                <span>Convención Inmobiliaria USA</span>
                <span>Telemundo</span>
                <span>El Tiempo</span>
                <span>+10 medios latinos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .claudia {
          background: var(--off-white);
          padding: var(--v2-space-8) 0;
        }
        .claudia-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: var(--v2-space-7);
          align-items: start;
        }
        .claudia-image-wrap { position: relative; }
        .claudia-image {
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: var(--gray-border);
        }
        .claudia-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(0.15) contrast(1.05);
        }
        .claudia-sticker {
          position: absolute;
          top: 24px;
          right: -16px;
          padding: 0.85rem 1.2rem;
        }
        .claudia-credentials {
          margin-top: 1.5rem;
          border-top: 1px solid var(--gold-luxury);
          padding-top: 1.25rem;
        }
        .claudia-credentials strong {
          display: block;
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 0.3rem;
          letter-spacing: -0.01em;
        }
        .claudia-credentials span {
          display: block;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          color: var(--gray-text);
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }
        .claudia-content { position: relative; }
        .claudia-number {
          position: absolute;
          top: -2.5rem;
          right: 0;
        }
        :global(.claudia-content .section-marker) { margin-bottom: 1rem; }
        .claudia-title { margin-bottom: 1.5rem; }
        .claudia-body { margin: 1.5rem 0; }
        .claudia-body p {
          font-size: 1.0625rem;
          line-height: 1.65;
          color: var(--gray-deep);
          margin: 0 0 1rem;
        }
        .editorial-pull {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.4rem !important;
          font-style: italic;
          color: var(--gold-dark) !important;
          border-left: 3px solid var(--gold-luxury);
          padding-left: 1.25rem;
          margin: 1.5rem 0 !important;
          line-height: 1.4 !important;
        }
        .claudia-signature {
          font-size: 1.15rem !important;
          font-family: var(--font-fraunces, 'Fraunces', serif);
        }
        .claudia-cta { margin-bottom: 1.75rem; }
        .claudia-credentials-row {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--gray-border);
        }
        .credentials-logos {
          display: flex;
          gap: 1.5rem;
          margin-top: 0.75rem;
          flex-wrap: wrap;
        }
        .credentials-logos span {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.8125rem;
          color: var(--gray-text);
          letter-spacing: 0.05em;
        }
        @media (max-width: 1023px) {
          .claudia-grid { grid-template-columns: 1fr; gap: var(--v2-space-5); }
          .claudia-number { display: none; }
          .claudia-image { aspect-ratio: 4 / 3; }
        }
      `}</style>
    </section>
  );
}
