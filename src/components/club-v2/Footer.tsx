"use client";

export default function Footer() {
  return (
    <footer className="v2-footer">
      <div className="v2-container v2-footer-inner">
        <div className="v2-footer-brand">
          <p className="v2-footer-logo">
            Club <em>Inmobiliario</em>
          </p>
          <p className="v2-footer-tagline">
            <span>Invierte</span>
            <span className="v2-footer-dot">·</span>
            <span>Acciona</span>
            <span className="v2-footer-dot">·</span>
            <span>Crece</span>
          </p>
          <p className="v2-footer-claudia">
            Una iniciativa de <strong>Claudia Rivera</strong>
            <br />
            &amp; Conexión Inmobiliaria USA
          </p>
        </div>

        <div className="v2-footer-cols">
          <div className="v2-footer-col">
            <h4>Para ti</h4>
            <a href="/club-inmobiliario/v2/realtors">Soy Realtor</a>
            <a href="/club-inmobiliario/v2/inversionistas">Soy Inversionista</a>
            <a href="/club-inmobiliario/v2/desarrolladores">Tengo un Proyecto</a>
          </div>

          <div className="v2-footer-col">
            <h4>Recursos</h4>
            <a href="/club-inmobiliario/v2#tours">Próximos Tours</a>
            <a href="/club-inmobiliario/v2#destinos">Destinos</a>
            <a href="/club-inmobiliario/v2#faq">FAQ</a>
          </div>

          <div className="v2-footer-col">
            <h4>Contacto</h4>
            <a href="https://wa.me/17542804030">+1 (754) 280-4030</a>
            <a href="mailto:hola@clubinmobiliario.com">hola@clubinmobiliario.com</a>
            <a
              href="https://instagram.com/claudiariverarealestate"
              target="_blank"
              rel="noreferrer"
            >
              @claudiariverarealestate
            </a>
          </div>
        </div>
      </div>

      <div className="v2-container v2-footer-bottom">
        <p>© {new Date().getFullYear()} Claudia Rivera · Todos los derechos reservados</p>
        <div className="v2-footer-legal">
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
          <a href="#">Cookies</a>
        </div>
      </div>

      <style jsx>{`
        .v2-footer {
          background: var(--black-primary);
          color: var(--cream);
          padding: var(--v2-space-7) 0 var(--v2-space-4);
        }
        .v2-footer-inner {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--v2-space-7);
          padding-bottom: var(--v2-space-6);
        }
        .v2-footer-logo {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--off-white);
          margin: 0 0 0.75rem;
          letter-spacing: -0.02em;
        }
        .v2-footer-logo em {
          font-style: italic;
          color: var(--gold-luxury);
          font-weight: 400;
          margin-left: 0.25rem;
        }
        .v2-footer-tagline {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.8125rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold-luxury);
          display: flex;
          gap: 0.5rem;
          margin: 0 0 1.25rem;
        }
        .v2-footer-dot { color: var(--gold-dark); }
        .v2-footer-claudia {
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--gold-light);
          margin: 0;
        }
        .v2-footer-claudia strong {
          color: var(--off-white);
          font-weight: 500;
        }
        .v2-footer-cols {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--v2-space-4);
        }
        .v2-footer-col h4 {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold-luxury);
          margin: 0 0 1rem;
          font-weight: 500;
        }
        .v2-footer-col a {
          display: block;
          color: var(--cream);
          text-decoration: none;
          font-size: 0.9375rem;
          padding: 0.4rem 0;
          transition: color 0.2s ease;
        }
        .v2-footer-col a:hover {
          color: var(--yellow-brand);
        }
        .v2-footer-bottom {
          display: flex;
          justify-content: space-between;
          padding-top: var(--v2-space-3);
          border-top: 1px solid rgba(201, 169, 97, 0.2);
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.75rem;
          letter-spacing: 0.05em;
          color: var(--gray-text);
        }
        .v2-footer-legal {
          display: flex;
          gap: 1.25rem;
        }
        .v2-footer-legal a {
          color: var(--gray-text);
          text-decoration: none;
        }
        .v2-footer-legal a:hover { color: var(--gold-luxury); }
        @media (max-width: 1023px) {
          .v2-footer-inner {
            grid-template-columns: 1fr;
            gap: var(--v2-space-5);
          }
        }
        @media (max-width: 767px) {
          .v2-footer-cols {
            grid-template-columns: 1fr;
            gap: var(--v2-space-4);
          }
          .v2-footer-bottom {
            flex-direction: column;
            gap: 0.75rem;
            text-align: center;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
}
