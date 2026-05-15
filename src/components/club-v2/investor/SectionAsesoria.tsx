"use client";

import { useState } from "react";
import { fbqTrack } from "@/lib/fbpixel";

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbz1YNFEICfRFTVK-PyhoAl9aw8IRFxjqM-nCHz-jAkike-ksLzPJ7AGjE6CpzG2Ueza8Q/exec";

const promises = [
  "Entendemos tu situación financiera y objetivos",
  "Te mostramos qué mercado se ajusta mejor a tu perfil",
  "Te damos un mapa de oportunidades reales",
  "Te enseñamos los próximos pasos posibles",
  "Si no es para ti, te lo decimos honestamente",
];

const CAPITAL_LABELS: Record<string, string> = {
  "50-100": "$50K - $100K USD",
  "100-200": "$100K - $200K USD",
  "200-500": "$200K - $500K USD",
  "500-plus": "$500K+ USD",
  explorando: "Aún explorando",
};

export default function SectionAsesoria() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

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
      const capital = (fd.get("capital") as string) || "";
      const pais = (fd.get("pais") as string) || "";
      const tiempo = (fd.get("tiempo") as string) || "";

      const data = {
        tipo: "club-v2-asesoria-inversionista",
        nombre,
        email,
        telefono,
        pais,
        perfil: "inversionista",
        plan: "asesoria-gratuita",
        evento: "Club V2 — Inversionistas",
        interes: `[Asesoría Inversionista] [Capital: ${
          CAPITAL_LABELS[capital] || capital
        }] [País interés: ${pais}] [Timing: ${tiempo}] [Ciudad: ${ciudad}]`,
        fuente: "landing-club-v2-inversionistas",
        tag: "Club V2 Inversionistas",
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
        content_name: "Asesoría Inversionista — Club V2",
        content_category: "Inversionista",
        capital,
        pais,
        tiempo,
      });

      setSent(true);
      form.reset();
    } catch {
      alert("Error al enviar. Intenta de nuevo.");
    }
    setSending(false);
  }

  return (
    <section className="asesoria" id="asesoria">
      <div className="v2-container">
        <div className="ase-grid">
          <div className="ase-content reveal">
            <span className="section-marker">— Asesoría gratuita 1:1</span>
            <h2 className="h-section">
              Hablemos de tu caso
              <br />
              <em className="emphasis-gold">específico.</em>
            </h2>

            <p className="ase-text">
              30 minutos por Zoom con un asesor senior del Club.{" "}
              <strong>
                Sin costo. Sin compromiso. Sin presión comercial.
              </strong>
            </p>

            <ul className="ase-promise">
              {promises.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>

            <div className="ase-disclaimer-box">
              <strong>¿Por qué es gratis?</strong>
              <p>
                Nuestro modelo se sostiene en comisiones que pagan los
                desarrolladores aliados, no tú. Si decides comprar, el
                desarrollador paga la comisión. Tu único costo eventual es el
                tour y la propiedad. Cero intermediación oculta.
              </p>
            </div>
          </div>

          <div className="ase-form-wrap reveal">
            <div className="ase-form-card">
              {sent ? (
                <div className="form-success">
                  <div className="success-icon" aria-hidden="true">📅</div>
                  <h3 className="h-card success-title">
                    ¡Tu asesoría está <em className="emphasis-gold">reservada!</em>
                  </h3>
                  <p className="success-text">
                    Te contactaremos en máximo 24 horas para coordinar la sesión
                    en tu horario.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="success-reset"
                  >
                    Registrar otra persona
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="ase-form">
                  <h3 className="form-title">Agenda tu asesoría</h3>

                  <div className="field">
                    <label htmlFor="ase-nombre">Nombre completo</label>
                    <input
                      type="text"
                      id="ase-nombre"
                      name="nombre"
                      required
                      autoComplete="name"
                    />
                  </div>

                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="ase-email">Email</label>
                      <input
                        type="email"
                        id="ase-email"
                        name="email"
                        required
                        autoComplete="email"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="ase-wa">WhatsApp</label>
                      <input
                        type="tel"
                        id="ase-wa"
                        name="whatsapp"
                        placeholder="+1 305 123 4567"
                        required
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="ase-ciudad">Ciudad actual</label>
                    <input
                      type="text"
                      id="ase-ciudad"
                      name="ciudad"
                      placeholder="Ej: Miami, Houston, NY..."
                      required
                    />
                  </div>

                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="ase-capital">Capital disponible</label>
                      <select id="ase-capital" name="capital" required defaultValue="">
                        <option value="" disabled>Selecciona</option>
                        <option value="50-100">$50K - $100K USD</option>
                        <option value="100-200">$100K - $200K USD</option>
                        <option value="200-500">$200K - $500K USD</option>
                        <option value="500-plus">$500K+ USD</option>
                        <option value="explorando">Aún explorando</option>
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="ase-pais">País de mayor interés</label>
                      <select id="ase-pais" name="pais" required defaultValue="">
                        <option value="" disabled>Selecciona</option>
                        <option value="colombia">Colombia (Medellín, Barranquilla)</option>
                        <option value="rd">República Dominicana (Punta Cana)</option>
                        <option value="mexico">México (Cancún)</option>
                        <option value="dubai">Dubai (EAU)</option>
                        <option value="no-se">No estoy seguro</option>
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="ase-tiempo">¿Cuándo planeas invertir?</label>
                    <select id="ase-tiempo" name="tiempo" required defaultValue="">
                      <option value="" disabled>Selecciona</option>
                      <option value="ya">Ya estoy listo</option>
                      <option value="3meses">En 1-3 meses</option>
                      <option value="6meses">En 3-6 meses</option>
                      <option value="1ano">En 6-12 meses</option>
                      <option value="explorando">Solo explorando</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn btn--luxury btn--large btn--full"
                  >
                    {sending ? "Enviando..." : "Agendar mi asesoría gratis"}{" "}
                    <span className="btn-icon">→</span>
                  </button>

                  <p className="form-disclaimer">
                    Te contactaremos en máximo 24 horas. 🔒 Tus datos están
                    seguros. No compartimos información con terceros.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .asesoria {
          background: var(--off-white);
          padding: var(--v2-space-8) 0;
        }
        .ase-grid {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: var(--v2-space-6);
          align-items: start;
        }
        .ase-content :global(.section-marker) { margin-bottom: 1rem; }
        .ase-content :global(h2) { margin-bottom: 1.25rem; }
        .ase-text {
          font-size: 1.0625rem;
          line-height: 1.6;
          color: var(--gray-deep);
          margin: 0 0 1.5rem;
        }
        .ase-text strong {
          color: var(--gold-dark);
          font-weight: 600;
        }
        .ase-promise {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem;
        }
        .ase-promise li {
          padding: 0.7rem 0 0.7rem 2rem;
          border-bottom: 1px solid var(--gray-border);
          font-size: 0.9375rem;
          color: var(--gray-deep);
          position: relative;
          line-height: 1.5;
        }
        .ase-promise li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 0.6rem;
          color: var(--gold-dark);
          font-weight: 700;
          font-size: 1.1rem;
        }
        .ase-disclaimer-box {
          background: var(--cream);
          border-left: 3px solid var(--gold-luxury);
          padding: 1.25rem 1.5rem;
        }
        .ase-disclaimer-box strong {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.1rem;
          color: var(--gold-dark);
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }
        .ase-disclaimer-box p {
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--gray-deep);
          margin: 0;
        }
        .ase-form-card {
          background: var(--cream);
          padding: 2.5rem;
          border: 1px solid var(--gold-luxury);
          box-shadow: 12px 12px 0 0 var(--gold-luxury);
        }
        .form-title {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.75rem;
          font-weight: 500;
          margin: 0 0 1.5rem;
          color: var(--black-primary);
          letter-spacing: -0.015em;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--gold-luxury);
        }
        .ase-form { display: flex; flex-direction: column; gap: 1rem; }
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
          background: #FFF;
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
          .ase-grid { grid-template-columns: 1fr; gap: var(--v2-space-5); }
        }
        @media (max-width: 640px) {
          .field-row { grid-template-columns: 1fr; gap: 1rem; }
          .ase-form-card { padding: 1.75rem 1.5rem; box-shadow: 6px 6px 0 0 var(--gold-luxury); }
        }
      `}</style>
    </section>
  );
}
