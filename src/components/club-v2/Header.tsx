"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "/club-inmobiliario/v2/realtors", label: "Realtors" },
  { href: "/club-inmobiliario/v2/inversionistas", label: "Inversionistas" },
  { href: "/club-inmobiliario/v2/desarrolladores", label: "Desarrolladores" },
  { href: "/club-inmobiliario/v2#tours", label: "Tours" },
  { href: "/club-inmobiliario/v2#claudia", label: "Sobre Claudia" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`v2-header ${scrolled ? "is-scrolled" : ""}`}
        data-open={open}
      >
        <div className="v2-header-inner">
          <a href="/club-inmobiliario/v2" className="v2-logo" aria-label="Club Inmobiliario — Conexión Inmobiliaria Luxury">
            <img
              src="/images/logo-conexion-luxury-nobg.png"
              alt="Club Inmobiliario · Conexión Inmobiliaria Luxury"
              className="v2-logo-img"
            />
          </a>

          <nav className="v2-nav" aria-label="Navegación principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="v2-nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="v2-actions">
            <button
              type="button"
              className="v2-lang"
              aria-label="Cambiar idioma"
              title="Bilingüe próximamente"
            >
              <span className="is-active">ES</span>
              <span aria-hidden="true">/</span>
              <span>EN</span>
            </button>

            <a
              href="https://wa.me/17542804030"
              className="v2-wa"
              aria-label="WhatsApp"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.46 0 .12 5.34.12 11.92a11.9 11.9 0 0 0 1.6 5.97L0 24l6.27-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.58 0 11.92-5.34 11.93-11.92 0-3.18-1.24-6.18-3.46-8.43Zm-8.48 18.34h-.01a9.93 9.93 0 0 1-5.06-1.39l-.36-.21-3.72.97 1-3.63-.24-.37a9.91 9.91 0 1 1 18.39-5.27c0 5.47-4.45 9.9-9.99 9.9Zm5.45-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
              </svg>
            </a>

            <a href="#preinscripcion" className="btn btn--primary btn--small v2-cta-desktop">
              25% OFF <span className="btn-icon">→</span>
            </a>

            <button
              type="button"
              className="v2-menu-btn"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`v2-mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav className="v2-mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="v2-mobile-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#preinscripcion"
            className="btn btn--primary btn--large v2-mobile-cta"
            onClick={() => setOpen(false)}
          >
            Activar 25% OFF <span className="btn-icon">→</span>
          </a>
        </nav>
      </div>

      <style jsx>{`
        .v2-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: transparent;
          transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          border-bottom: 1px solid transparent;
        }
        .v2-header.is-scrolled {
          background: var(--black-primary);
          border-bottom-color: rgba(201, 169, 97, 0.5);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
        }
        .v2-header-inner {
          max-width: var(--v2-container-max);
          margin: 0 auto;
          padding: 1.1rem var(--v2-space-5);
          display: flex;
          align-items: center;
          gap: var(--v2-space-4);
        }
        .v2-logo {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          line-height: 0;
        }
        .v2-logo-img {
          height: 52px;
          width: auto;
          display: block;
          object-fit: contain;
          transition: height 0.3s ease, filter 0.3s ease;
        }
        .v2-header.is-scrolled .v2-logo-img {
          height: 44px;
        }
        @media (max-width: 767px) {
          .v2-logo-img { height: 40px; }
          .v2-header.is-scrolled .v2-logo-img { height: 36px; }
        }
        .v2-nav {
          display: flex;
          gap: 1.75rem;
          margin-left: auto;
        }
        .v2-nav-link {
          font-family: var(--font-inter, 'Inter', sans-serif);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--off-white);
          text-decoration: none;
          letter-spacing: 0.01em;
          opacity: 0.85;
          transition: color 0.2s ease, opacity 0.2s ease;
          mix-blend-mode: difference;
        }
        .v2-header.is-scrolled .v2-nav-link {
          color: var(--cream);
          mix-blend-mode: normal;
        }
        .v2-nav-link:hover {
          color: var(--yellow-brand);
          opacity: 1;
        }
        .v2-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .v2-lang {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: var(--off-white);
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 0.4rem 0.7rem;
          cursor: pointer;
          mix-blend-mode: difference;
          display: inline-flex;
          gap: 0.3rem;
          align-items: center;
        }
        .v2-header.is-scrolled .v2-lang {
          color: var(--cream);
          border-color: rgba(201, 169, 97, 0.4);
          mix-blend-mode: normal;
        }
        .v2-lang .is-active { color: var(--yellow-brand); }
        .v2-wa {
          color: var(--off-white);
          mix-blend-mode: difference;
          display: inline-flex;
          align-items: center;
        }
        .v2-header.is-scrolled .v2-wa {
          color: var(--gold-luxury);
          mix-blend-mode: normal;
        }
        .v2-wa:hover { color: var(--yellow-brand); }
        .v2-cta-desktop {
          display: inline-flex;
        }
        .v2-menu-btn {
          display: none;
          background: transparent;
          border: 0;
          width: 36px;
          height: 36px;
          padding: 0;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
          justify-content: center;
          align-items: center;
        }
        .v2-menu-btn span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: var(--off-white);
          mix-blend-mode: difference;
          transition: transform 0.3s, opacity 0.3s, background 0.3s;
        }
        .v2-header.is-scrolled .v2-menu-btn span,
        .v2-header[data-open="true"] .v2-menu-btn span {
          background: var(--cream);
          mix-blend-mode: normal;
        }
        .v2-header[data-open="true"] .v2-menu-btn span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        .v2-header[data-open="true"] .v2-menu-btn span:nth-child(2) {
          opacity: 0;
        }
        .v2-header[data-open="true"] .v2-menu-btn span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }

        .v2-mobile-menu {
          position: fixed;
          inset: 0;
          background: var(--black-primary);
          z-index: 99;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
        }
        .v2-mobile-menu.is-open {
          opacity: 1;
          pointer-events: auto;
        }
        .v2-mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          align-items: center;
        }
        .v2-mobile-link {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 2rem;
          color: var(--off-white);
          text-decoration: none;
        }
        .v2-mobile-link:hover { color: var(--yellow-brand); }
        .v2-mobile-cta { margin-top: 1.5rem; }

        @media (max-width: 1023px) {
          .v2-nav { display: none; }
          .v2-cta-desktop { display: none; }
          .v2-lang { display: none; }
          .v2-menu-btn { display: inline-flex; }
          .v2-actions { margin-left: auto; }
        }
        @media (max-width: 767px) {
          .v2-header-inner {
            padding: 0.85rem var(--v2-space-3);
          }
        }
      `}</style>
    </>
  );
}
