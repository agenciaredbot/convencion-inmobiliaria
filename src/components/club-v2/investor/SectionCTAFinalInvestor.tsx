"use client";

const WHATSAPP_LINK =
  "https://wa.me/17542804030?text=" +
  encodeURIComponent(
    "Hola, vi la página del Club Inmobiliario y quisiera agendar una asesoría como inversionista."
  );

export default function SectionCTAFinalInvestor() {
  return (
    <section className="cta-inv">
      <div className="v2-container">
        <div className="cta-inv-inner reveal">
          <span className="section-marker">— Última llamada</span>
          <h2 className="h-section">
            La oportunidad <em className="emphasis-yellow">está abierta hoy.</em>
            <br />
            Mañana, los precios ya subieron.
          </h2>

          <p className="cta-inv-text">
            Agenda 30 minutos con un asesor del Club. Sin costo, sin compromiso.
            Te decimos honestamente si esto es para ti.
          </p>

          <div className="cta-actions">
            <a href="#asesoria" className="btn btn--luxury btn--large">
              Agendar asesoría gratuita <span className="btn-icon">→</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost btn--large"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.46 0 .12 5.34.12 11.92a11.9 11.9 0 0 0 1.6 5.97L0 24l6.27-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.58 0 11.92-5.34 11.93-11.92 0-3.18-1.24-6.18-3.46-8.43Zm-8.48 18.34h-.01a9.93 9.93 0 0 1-5.06-1.39l-.36-.21-3.72.97 1-3.63-.24-.37a9.91 9.91 0 1 1 18.39-5.27c0 5.47-4.45 9.9-9.99 9.9Zm5.45-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
              </svg>
              Hablar por WhatsApp ahora
            </a>
          </div>

          <p className="cta-disclaimer">
            +1 (754) 280-4030 · Respuesta en menos de 24 horas
          </p>
        </div>
      </div>

      <style jsx>{`
        .cta-inv {
          background: linear-gradient(180deg, var(--black-primary), #161510);
          color: var(--off-white);
          padding: var(--v2-space-8) 0;
          position: relative;
          overflow: hidden;
        }
        .cta-inv::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at center top,
            rgba(201, 169, 97, 0.12),
            transparent 60%
          );
          pointer-events: none;
        }
        .cta-inv-inner {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        :global(.cta-inv-inner .section-marker) {
          color: var(--gold-luxury);
          margin-bottom: 1rem;
        }
        :global(.cta-inv-inner h2) {
          color: var(--off-white);
          margin-bottom: 1.5rem;
        }
        .cta-inv-text {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: clamp(1.05rem, 1.6vw, 1.3rem);
          font-style: italic;
          color: var(--cream);
          margin: 0 auto 2.5rem;
          line-height: 1.5;
          max-width: 560px;
        }
        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }
        .cta-disclaimer {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          color: var(--gold-light);
          margin: 0;
        }
      `}</style>
    </section>
  );
}
