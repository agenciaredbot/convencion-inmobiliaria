"use client";

import { useEffect, useState } from "react";
import { fbqTrack } from "@/lib/fbpixel";

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbz1YNFEICfRFTVK-PyhoAl9aw8IRFxjqM-nCHz-jAkike-ksLzPJ7AGjE6CpzG2Ueza8Q/exec";

const NIVEL_LABELS: Record<string, string> = {
  "1": "Nivel 01 — Visibilidad ($3,000 USD/año)",
  "2": "Nivel 02 — Activación ($5,000 USD/año)",
  "3": "Nivel 03 — Partnership ($10,000 USD/año)",
};

const promises = [
  { icon: "📊", text: "Análisis de tu proyecto y mercado objetivo" },
  { icon: "🎯", text: "Proyección de ROI con casos comparables" },
  { icon: "📋", text: "Plan estratégico personalizado" },
  { icon: "💰", text: "Estructura de partnership recomendada" },
  { icon: "❌", text: "Si no eres fit, te lo decimos honestamente" },
];

export default function SectionCTADeveloper() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [nivel, setNivel] = useState("");

  useEffect(() => {
    // Si vienen del pricing card con #agendar-reunion?nivel=2 etc.
    const raw = window.location.hash;
    const match = raw.match(/nivel=(\d+)/);
    if (match && ["1", "2", "3"].includes(match[1])) {
      setNivel(match[1]);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    try {
      const fd = new FormData(form);
      const nombre = (fd.get("nombre") as string) || "";
      const cargo = (fd.get("cargo") as string) || "";
      const empresa = (fd.get("empresa") as string) || "";
      const email = (fd.get("email") as string) || "";
      const telefono = (fd.get("whatsapp") as string) || "";
      const pais = (fd.get("pais") as string) || "";
      const unidades = (fd.get("unidades") as string) || "";
      const etapa = (fd.get("etapa") as string) || "";
      const nivelInteres = (fd.get("nivel") as string) || nivel;

      const data = {
        tipo: "club-v2-reunion-desarrollador",
        nombre,
        email,
        telefono,
        pais,
        perfil: "desarrollador",
        plan: nivelInteres ? `nivel-${nivelInteres}` : "no-especificado",
        evento: "Club V2 — Desarrolladores B2B",
        interes: `[Reunión B2B Desarrollador] [Empresa: ${empresa}] [Cargo: ${cargo}] [Proyecto: ${unidades} unidades, ${etapa}] [País: ${pais}] [Nivel interés: ${
          NIVEL_LABELS[nivelInteres] || "Sin especificar"
        }]`,
        fuente: "landing-club-v2-desarrolladores",
        tag: "Club V2 Desarrollador",
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
        content_name: "Reunión Comercial B2B — Club V2",
        content_category: "Desarrollador",
        nivel: nivelInteres,
        pais,
        unidades,
        etapa,
      });

      setSent(true);
      form.reset();
    } catch {
      alert("Error al enviar. Intenta de nuevo.");
    }
    setSending(false);
  }

  return (
    <section className="cta-d" id="agendar-reunion">
      <div className="cta-bg" aria-hidden="true" />
      <div className="v2-container">
        <div className="cta-d-grid">
          <div className="cta-d-content reveal">
            <span className="section-marker">— Próximo paso</span>
            <h2 className="h-section">
              Hablemos de tu proyecto.
              <br />
              <em className="emphasis-gold">Sin compromiso.</em>
            </h2>

            <p className="cta-d-text">
              45 minutos por Zoom con nuestro equipo comercial. Analizamos tu
              proyecto, te mostramos casos comparables, te proyectamos el ROI
              esperado y respondemos todas tus preguntas.{" "}
              <strong>Sin presión de cierre.</strong>
            </p>

            <ul className="cta-d-promise">
              {promises.map((p, i) => (
                <li key={i}>
                  <span aria-hidden="true">{p.icon}</span> {p.text}
                </li>
              ))}
            </ul>

            <div className="cta-d-contact">
              <strong>Contacto directo</strong>
              <p>
                <span aria-hidden="true">📞</span>{" "}
                <a href="tel:+17542804030">+1 (754) 280-4030</a>
              </p>
              <p>
                <span aria-hidden="true">📧</span>{" "}
                <a href="mailto:desarrolladores@clubinmobiliario.com">
                  desarrolladores@clubinmobiliario.com
                </a>
              </p>
            </div>
          </div>

          <div className="cta-d-form-wrap reveal">
            <div className="cta-d-form-card">
              {sent ? (
                <div className="form-success">
                  <div className="success-icon" aria-hidden="true">📅</div>
                  <h3 className="h-card success-title">
                    Reunión <em className="emphasis-gold">solicitada.</em>
                  </h3>
                  <p className="success-text">
                    Te contactamos en máximo 24 horas hábiles para coordinar la
                    sesión. Información tratada con confidencialidad absoluta.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="success-reset"
                  >
                    Registrar otro proyecto
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="cta-d-form">
                  <h3 className="form-title">Agenda tu reunión</h3>

                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="d-nombre">Tu nombre</label>
                      <input
                        type="text"
                        id="d-nombre"
                        name="nombre"
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="d-cargo">Cargo / Posición</label>
                      <input
                        type="text"
                        id="d-cargo"
                        name="cargo"
                        placeholder="Director Comercial, CEO..."
                        required
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="d-empresa">Empresa / Constructora</label>
                    <input
                      type="text"
                      id="d-empresa"
                      name="empresa"
                      required
                      autoComplete="organization"
                    />
                  </div>

                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="d-email">Email corporativo</label>
                      <input
                        type="email"
                        id="d-email"
                        name="email"
                        required
                        autoComplete="email"
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="d-wa">WhatsApp</label>
                      <input
                        type="tel"
                        id="d-wa"
                        name="whatsapp"
                        placeholder="+57 314 123 4567"
                        required
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="d-pais">País del proyecto</label>
                    <select id="d-pais" name="pais" required defaultValue="">
                      <option value="" disabled>Selecciona</option>
                      <option value="colombia">Colombia</option>
                      <option value="mexico">México</option>
                      <option value="rd">República Dominicana</option>
                      <option value="emiratos">Emiratos Árabes Unidos</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="d-unidades">Tamaño (unidades)</label>
                      <select
                        id="d-unidades"
                        name="unidades"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>Selecciona rango</option>
                        <option value="1-30">1 - 30 unidades</option>
                        <option value="31-80">31 - 80 unidades</option>
                        <option value="81-200">81 - 200 unidades</option>
                        <option value="200-plus">+200 unidades</option>
                        <option value="multiple">Múltiples proyectos</option>
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="d-etapa">Etapa del proyecto</label>
                      <select id="d-etapa" name="etapa" required defaultValue="">
                        <option value="" disabled>Selecciona</option>
                        <option value="planeacion">En planeación</option>
                        <option value="preventa">Preventa</option>
                        <option value="construccion">Construcción</option>
                        <option value="entrega">Listo para entrega</option>
                        <option value="varios">
                          Varios proyectos en distintas etapas
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="d-nivel">Nivel de interés (opcional)</label>
                    <select
                      id="d-nivel"
                      name="nivel"
                      value={nivel}
                      onChange={(e) => setNivel(e.target.value)}
                    >
                      <option value="">Aún no estoy seguro</option>
                      <option value="1">Nivel 01 — Visibilidad ($3K)</option>
                      <option value="2">Nivel 02 — Activación ($5K)</option>
                      <option value="3">Nivel 03 — Partnership ($10K)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn btn--luxury btn--large btn--full"
                  >
                    {sending ? "Enviando..." : "Agendar reunión comercial"}{" "}
                    <span className="btn-icon">→</span>
                  </button>

                  <p className="form-disclaimer">
                    Te contactamos en máximo 24h hábiles. Información tratada
                    con confidencialidad absoluta.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-d {
          background: var(--black-primary);
          color: var(--off-white);
          padding: var(--v2-space-8) 0;
          position: relative;
          overflow: hidden;
        }
        .cta-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 30%, rgba(201, 169, 97, 0.1), transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 212, 0, 0.06), transparent 50%);
          pointer-events: none;
        }
        .cta-d-grid {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: var(--v2-space-7);
          align-items: start;
          position: relative;
        }
        .cta-d-content :global(.section-marker) {
          color: var(--gold-luxury);
          margin-bottom: 1rem;
        }
        .cta-d-content :global(h2) {
          color: var(--off-white);
          margin-bottom: 1.5rem;
        }
        .cta-d-text {
          margin: 0 0 2rem;
          color: var(--cream);
          font-size: 1.0625rem;
          line-height: 1.65;
        }
        .cta-d-text strong {
          color: var(--gold-light);
          font-weight: 600;
        }
        .cta-d-promise {
          list-style: none;
          padding: 0;
          margin: 0 0 2.5rem;
        }
        .cta-d-promise li {
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.95rem;
          color: var(--cream);
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }
        .cta-d-contact {
          padding-top: 1.75rem;
          border-top: 1px solid var(--gold-luxury);
        }
        .cta-d-contact strong {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold-luxury);
          display: block;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .cta-d-contact p {
          font-family: var(--font-fraunces, 'Fraunces', serif);
          font-size: 1.15rem;
          margin: 0.4rem 0;
          color: var(--cream);
        }
        .cta-d-contact a {
          color: var(--yellow-brand);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s ease;
        }
        .cta-d-contact a:hover { border-bottom-color: var(--yellow-brand); }

        .cta-d-form-card {
          background: var(--off-white);
          color: var(--black-primary);
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
        .cta-d-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
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
          .cta-d-grid { grid-template-columns: 1fr; gap: var(--v2-space-5); }
        }
        @media (max-width: 640px) {
          .field-row { grid-template-columns: 1fr; gap: 1rem; }
          .cta-d-form-card { padding: 1.75rem 1.5rem; box-shadow: 6px 6px 0 0 var(--gold-luxury); }
        }
      `}</style>
    </section>
  );
}
