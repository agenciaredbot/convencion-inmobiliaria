"use client";

import { useEffect, useState } from "react";
import { fbqTrack } from "@/lib/fbpixel";

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbz1YNFEICfRFTVK-PyhoAl9aw8IRFxjqM-nCHz-jAkike-ksLzPJ7AGjE6CpzG2Ueza8Q/exec";

const PLAN_LABELS: Record<string, { full: string; price: string }> = {
  starter: { full: "Starter — $20 USD/mes (25% OFF)", price: "$20" },
  elite: { full: "Elite — $35 USD/mes (25% OFF)", price: "$35" },
  premium: { full: "Premium — $65 USD/mes (25% OFF)", price: "$65" },
};

const VALID_PLANS = ["starter", "elite", "premium"];

const WHATSAPP_LINK =
  "https://wa.me/17542804030?text=" +
  encodeURIComponent(
    "Hola, vi la página del Club Inmobiliario y quiero info sobre el plan Agente Inmobiliario."
  );

export default function SectionCTAFinalRealtor() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [plan, setPlan] = useState("elite");

  useEffect(() => {
    // El href del pricing card incluye ?plan=elite-realtor — leemos ese hash
    const raw = window.location.hash;
    const match = raw.match(/plan=([a-z]+)-realtor/);
    if (match && VALID_PLANS.includes(match[1])) {
      setPlan(match[1]);
    } else {
      const params = new URLSearchParams(window.location.search);
      const p = params.get("plan");
      if (p && VALID_PLANS.includes(p)) setPlan(p);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    try {
      const fd = new FormData(form);
      const nombre = (fd.get("nombre") as string) || "";
      const email = (fd.get("email") as string) || "";
      const telefono = (fd.get("whatsapp") as string) || "";
      const ciudad = (fd.get("ciudad") as string) || "";
      const planValue = (fd.get("plan") as string) || plan;
      const experiencia = (fd.get("experiencia") as string) || "";

      const data = {
        tipo: "club-v2-suscripcion-realtor",
        nombre,
        email,
        telefono,
        pais: "USA",
        perfil: "realtor",
        plan: planValue,
        evento: "Club V2 — Realtors",
        interes: `[Suscripción Realtor] [Plan: ${
          PLAN_LABELS[planValue]?.full || planValue
        }] [Experiencia: ${experiencia}] [Ciudad: ${ciudad}] — 25% OFF Fundador`,
        fuente: "landing-club-v2-realtors",
        tag: "Club V2 Realtor",
      };

      const fetchWithTimeout = (url: string, opts: RequestInit, ms = 8000) => {
        const controller = new AbortController();
        const t = setTimeout(() => controller.abort(), ms);
        return fetch(url, { ...opts, signal: controller.signal }).finally(() =>
          clearTimeout(t)
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
        content_name: "Suscripción Realtor — Club V2",
        content_category: "Realtor",
        plan: planValue,
        experiencia,
      });

      setSent(true);
      form.reset();
    } catch {
      alert("Error al enviar. Intenta de nuevo.");
    }
    setSending(false);
  }

  return (
    <section className="cta-r" id="suscripcion">
      <div className="cta-bg" aria-hidden="true" />
      <div className="v2-container">
        <div className="cta-r-grid">
          <div className="cta-r-content reveal">
            <span className="section-marker">— Acceso fundadores</span>
            <h2 className="h-section">
              Los primeros 200 agentes inmobiliarios
              <br />
              que se suscriban tienen
              <br />
              <em className="emphasis-yellow">25% OFF para siempre.</em>
            </h2>

            <p className="cta-r-text">
              Después de esos cupos, el precio regular.{" "}
              <strong>No es marketing. Es real.</strong>
            </p>

            <div className="founders-counter">
              <span className="counter-label">
                Cupos de fundador agente inmobiliario disponibles
              </span>
              <div className="counter-bar">
                <div className="counter-filled" style={{ width: "42%" }} />
              </div>
              <span className="counter-text">
                <strong>116 de 200</strong> cupos restantes
              </span>
            </div>

            <div className="cta-r-actions">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn btn--ghost"
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
                Preguntar por WhatsApp primero
              </a>
            </div>
          </div>

          <div className="cta-r-form-wrap reveal">
            <div className="cta-r-form-card">
              {sent ? (
                <div className="form-success">
                  <div className="success-icon" aria-hidden="true">🚀</div>
                  <h3 className="h-card success-title">
                    ¡Listo, <em className="emphasis-gold">eres fundador!</em>
                  </h3>
                  <p className="success-text">
                    Tu plan {PLAN_LABELS[plan]?.full || plan} con 25% OFF está
                    reservado. Te contactaremos en máximo 24 horas para activar
                    tu acceso al portal.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="success-reset"
                  >
                    Registrar a otro agente inmobiliario
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="cta-r-form">
                  <div className="form-header">
                    <span className="form-tag">🔓 Cupo de fundador</span>
                    <p className="form-title">
                      Activa tu plan con <strong>25% OFF</strong>
                    </p>
                  </div>

                  <div className="field">
                    <label htmlFor="r-plan">Plan elegido</label>
                    <select
                      id="r-plan"
                      name="plan"
                      required
                      value={plan}
                      onChange={(e) => setPlan(e.target.value)}
                    >
                      <option value="starter">Starter — $20 USD/mes</option>
                      <option value="elite">Elite — $35 USD/mes</option>
                      <option value="premium">Premium — $65 USD/mes</option>
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="r-nombre">Nombre completo</label>
                    <input
                      type="text"
                      id="r-nombre"
                      name="nombre"
                      required
                      autoComplete="name"
                    />
                  </div>

                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="r-email">Email</label>
                      <input
                        type="email"
                        id="r-email"
                        name="email"
                        required
                        autoComplete="email"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="r-wa">WhatsApp</label>
                      <input
                        type="tel"
                        id="r-wa"
                        name="whatsapp"
                        placeholder="+1 305 123 4567"
                        required
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="r-ciudad">Ciudad</label>
                      <input
                        type="text"
                        id="r-ciudad"
                        name="ciudad"
                        placeholder="Miami, Doral, Orlando..."
                        required
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="r-exp">Años como agente inmobiliario</label>
                      <select
                        id="r-exp"
                        name="experiencia"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>Selecciona</option>
                        <option value="0-2">0-2 años</option>
                        <option value="3-5">3-5 años</option>
                        <option value="6-10">6-10 años</option>
                        <option value="10+">+10 años</option>
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
                      : `Activar mi plan ${PLAN_LABELS[plan]?.price || ""} con 25% OFF`}{" "}
                    <span className="btn-icon">→</span>
                  </button>

                  <p className="form-disclaimer">
                    Sin permanencia. Cancela cuando quieras. Garantía 100% en los
                    primeros 30 días.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-r {
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
          background: radial-gradient(
            circle,
            rgba(255, 212, 0, 0.08),
            transparent 60%
          );
          pointer-events: none;
        }
        .cta-r-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--v2-space-7);
          align-items: center;
          position: relative;
        }
        .cta-r-content :global(.section-marker) {
          color: var(--gold-luxury);
          margin-bottom: 1rem;
        }
        .cta-r-content :global(h2) {
          color: var(--off-white);
          margin-bottom: 1.5rem;
        }
        .cta-r-text {
          font-size: 1.125rem;
          line-height: 1.65;
          color: var(--cream);
          margin: 0 0 2rem;
        }
        .cta-r-text strong {
          color: var(--yellow-brand);
          font-weight: 600;
        }

        .founders-counter { margin-bottom: 2rem; }
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

        .cta-r-actions { display: flex; flex-wrap: wrap; gap: 1rem; }

        .cta-r-form-card {
          background: var(--off-white);
          color: var(--black-primary);
          padding: 2.5rem;
          border: 1px solid var(--gold-luxury);
          box-shadow: 12px 12px 0 0 var(--yellow-brand);
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
        .form-title strong {
          color: var(--gold-dark);
          font-weight: 600;
        }
        .cta-r-form { display: flex; flex-direction: column; gap: 1rem; }
        .field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
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
          background: #fff;
        }
        .form-disclaimer {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.7rem;
          color: var(--gray-text);
          letter-spacing: 0.04em;
          text-align: center;
          margin: 0.75rem 0 0;
          line-height: 1.6;
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
          .cta-r-grid { grid-template-columns: 1fr; gap: var(--v2-space-5); }
        }
        @media (max-width: 640px) {
          .field-row { grid-template-columns: 1fr; gap: 1rem; }
          .cta-r-form-card { padding: 1.75rem 1.5rem; box-shadow: 6px 6px 0 0 var(--yellow-brand); }
        }
      `}</style>
    </section>
  );
}
