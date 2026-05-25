"use client";

import { useState } from "react";
import { fbqTrack } from "@/lib/fbpixel";

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbz1YNFEICfRFTVK-PyhoAl9aw8IRFxjqM-nCHz-jAkike-ksLzPJ7AGjE6CpzG2Ueza8Q/exec";

const founderBenefits = [
  "Descuento del 25% para siempre (no solo el primer año)",
  "Acceso prioritario a tours antes que los demás miembros",
  "Invitación al evento de lanzamiento VIP",
  "Garantía de cancelación: cancela cuando quieras (planes mensuales)",
];

export default function SectionCTAFinal() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    try {
      const nombre = (form.elements.namedItem("nombre") as HTMLInputElement)?.value || "";
      const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
      const telefono = (form.elements.namedItem("whatsapp") as HTMLInputElement)?.value || "";
      const perfil = (form.elements.namedItem("perfil") as HTMLSelectElement)?.value || "";

      const data = {
        tipo: "club-inmobiliario-v2",
        nombre,
        email,
        telefono,
        pais: "",
        perfil,
        plan: "fundador-25-off",
        evento: "Club Inmobiliario V2",
        interes: `[Fundador 25% OFF] [${perfil}] — Pre-registro Club V2`,
        fuente: "landing-club-v2",
        tag: "Club Inmobiliario V2",
      };

      const fetchWithTimeout = (url: string, opts: RequestInit, ms = 8000) => {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), ms);
        return fetch(url, { ...opts, signal: controller.signal }).finally(() =>
          clearTimeout(timer)
        );
      };

      await Promise.allSettled([
        fetchWithTimeout("/api/kommo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }),
        fetchWithTimeout(SHEETS_URL, {
          method: "POST",
          body: JSON.stringify(data),
          mode: "no-cors",
        }).catch(() => null),
      ]);

      fbqTrack("Lead", {
        content_name: "Pre-Registro Club Inmobiliario V2 — Fundador",
        content_category: "Club V2",
        plan: "fundador-25-off",
        perfil,
      });

      setSent(true);
      form.reset();
    } catch {
      alert("Error al enviar. Intenta de nuevo.");
    }
    setSending(false);
  }

  return (
    <section className="cta-final" id="preinscripcion">
      <div className="cta-bg" aria-hidden="true" />
      <div className="v2-container">
        <div className="cta-grid">
          <div className="cta-content reveal">
            <span className="section-marker">— Acceso fundadores</span>

            <h2 className="h-section">
              La ventana de pre-inscripción
              <br />
              se cierra pronto.
              <br />
              <em className="emphasis-yellow">Tu 25% OFF, también.</em>
            </h2>

            <p className="cta-text">
              Sé de los <strong>primeros 200 miembros fundadores</strong> y
              obtén un 25% de descuento de por vida en tu membresía. Una vez
              completemos los cupos, el descuento desaparece.
            </p>

            <ul className="cta-benefits">
              {founderBenefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <div className="founders-counter">
              <span className="counter-label">Cupos de fundador disponibles</span>
              <div className="counter-bar">
                <div className="counter-filled" style={{ width: "36%" }} />
              </div>
              <span className="counter-text">
                <strong>128 de 200</strong> cupos disponibles
              </span>
            </div>
          </div>

          <div className="cta-form-wrap reveal">
            <div className="cta-form-card">
              {sent ? (
                <div className="form-success">
                  <div className="success-icon" aria-hidden="true">🎉</div>
                  <h3 className="h-card success-title">
                    ¡Estás <em className="emphasis-gold">en la lista!</em>
                  </h3>
                  <p className="success-text">
                    Tu lugar como fundador con 25% OFF está reservado. Te
                    avisaremos cuando abramos oficialmente.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="success-reset"
                  >
                    Registrar a otra persona
                  </button>
                </div>
              ) : (
                <form className="preinscripcion-form" onSubmit={handleSubmit}>
                  <div className="form-header">
                    <span className="form-tag">🔓 Cupo de fundador</span>
                    <p className="form-title">
                      Activa tu <strong>25% OFF</strong> de por vida
                    </p>
                  </div>

                  <div className="form-fields">
                    <div className="field">
                      <label htmlFor="cta-nombre">Nombre completo</label>
                      <input
                        type="text"
                        id="cta-nombre"
                        name="nombre"
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="cta-email">Email</label>
                      <input
                        type="email"
                        id="cta-email"
                        name="email"
                        required
                        autoComplete="email"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="cta-whatsapp">WhatsApp (con código de país)</label>
                      <input
                        type="tel"
                        id="cta-whatsapp"
                        name="whatsapp"
                        placeholder="+1 305 123 4567"
                        required
                        autoComplete="tel"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="cta-perfil">¿Qué eres?</label>
                      <select id="cta-perfil" name="perfil" required defaultValue="">
                        <option value="" disabled>
                          Selecciona tu perfil
                        </option>
                        <option value="realtor">Agente Inmobiliario</option>
                        <option value="inversionista">Inversionista (quiero comprar)</option>
                        <option value="desarrollador">Desarrollador (tengo un proyecto)</option>
                        <option value="explorando">Estoy explorando</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn btn--primary btn--large btn--full"
                  >
                    {sending
                      ? "Enviando..."
                      : "Activar mi 25% OFF de fundador"}{" "}
                    <span className="btn-icon">→</span>
                  </button>

                  <p className="form-disclaimer">
                    Sin cobro inicial. Te avisaremos cuando esté listo el
                    acceso. Cero spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-final {
          background: var(--black-primary);
          color: var(--off-white);
          padding: var(--v2-space-8) 0;
          position: relative;
          overflow: hidden;
        }
        .cta-bg {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 60%;
          height: 120%;
          background: radial-gradient(circle, rgba(255, 212, 0, 0.08), transparent 60%);
          pointer-events: none;
        }
        .cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--v2-space-7);
          align-items: center;
          position: relative;
        }
        .cta-content :global(.section-marker) {
          color: var(--gold-luxury);
          margin-bottom: 1rem;
        }
        .cta-content :global(h2) {
          color: var(--off-white);
          margin-bottom: 1.5rem;
        }
        .cta-text {
          font-size: 1.125rem;
          line-height: 1.65;
          color: var(--cream);
          margin: 0 0 2rem;
        }
        .cta-text strong {
          color: var(--yellow-brand);
          font-weight: 600;
        }
        .cta-benefits {
          list-style: none;
          padding: 0;
          margin: 0 0 2.5rem;
        }
        .cta-benefits li {
          padding: 0.7rem 0 0.7rem 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.95rem;
          color: var(--cream);
          position: relative;
          line-height: 1.5;
        }
        .cta-benefits li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 0.75rem;
          color: var(--yellow-brand);
          font-weight: 700;
        }
        .founders-counter { margin-top: 1.5rem; }
        .counter-label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold-luxury);
          display: block;
          margin-bottom: 0.75rem;
        }
        .counter-bar {
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          margin-bottom: 0.5rem;
          overflow: hidden;
          border-radius: 3px;
        }
        .counter-filled {
          height: 100%;
          background: linear-gradient(90deg, var(--yellow-brand), var(--gold-luxury));
        }
        .counter-text {
          font-size: 0.875rem;
          color: var(--cream);
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
        }
        .counter-text strong {
          color: var(--yellow-brand);
          font-size: 1rem;
          font-weight: 600;
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-style: italic;
        }
        .cta-form-card {
          background: var(--off-white);
          color: var(--black-primary);
          padding: 2.5rem;
          border: 1px solid var(--gold-luxury);
          box-shadow: 12px 12px 0 0 var(--gold-luxury);
        }
        .form-header {
          margin-bottom: 1.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--gray-border);
        }
        .form-tag {
          display: inline-block;
          background: var(--yellow-brand);
          padding: 0.35rem 0.8rem;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          border: 1px solid var(--gold-dark);
        }
        .form-title {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.5rem;
          font-weight: 500;
          margin: 0;
          line-height: 1.2;
          color: var(--black-primary);
          letter-spacing: -0.01em;
        }
        .form-title strong { color: var(--gold-dark); font-weight: 600; }
        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .field { display: flex; flex-direction: column; gap: 0.4rem; }
        .field label {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gray-text);
          font-weight: 500;
        }
        .field input,
        .field select {
          font-family: var(--font-inter, 'Inter', sans-serif);
          font-size: 0.95rem;
          padding: 0.85rem 1rem;
          border: 1px solid var(--gray-border);
          background: var(--off-white);
          color: var(--black-primary);
          border-radius: 2px;
          transition: border-color 0.2s, background 0.2s;
        }
        .field input:focus,
        .field select:focus {
          outline: none;
          border-color: var(--gold-dark);
          background: #FFF;
        }
        .form-disclaimer {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          color: var(--gray-text);
          letter-spacing: 0.04em;
          text-align: center;
          margin: 1rem 0 0;
          line-height: 1.5;
        }

        .form-success {
          text-align: center;
          padding: 1.5rem 0.5rem;
        }
        .success-icon { font-size: 3rem; margin-bottom: 1rem; }
        .success-title {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-weight: 500;
          margin: 0 0 1rem;
          color: var(--black-primary);
        }
        .success-text {
          color: var(--gray-deep);
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0 0 1.5rem;
        }
        .success-reset {
          background: transparent;
          border: 0;
          color: var(--gold-dark);
          text-decoration: underline;
          font-family: var(--font-inter, 'Inter', sans-serif);
          font-size: 0.875rem;
          cursor: pointer;
          font-weight: 500;
        }

        @media (max-width: 1023px) {
          .cta-grid { grid-template-columns: 1fr; gap: var(--v2-space-5); }
        }
      `}</style>
    </section>
  );
}
