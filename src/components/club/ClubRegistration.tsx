"use client";

import { useState, useEffect } from "react";

const SHEETS_URL = "https://script.google.com/macros/s/AKfycbz1YNFEICfRFTVK-PyhoAl9aw8IRFxjqM-nCHz-jAkike-ksLzPJ7AGjE6CpzG2Ueza8Q/exec";

const PLANS: Record<string, { label: string; full: string }> = {
  esencial: { label: "Esencial", full: "Esencial — $27/mes" },
  profesional: { label: "Profesional", full: "Profesional — $47/mes" },
  elite: { label: "Elite", full: "Elite — $87/mes" },
  indeciso: { label: "Indeciso", full: "Aún no estoy seguro" },
};

const VALID_PLANS = ["esencial", "profesional", "elite", "indeciso"];

export default function ClubRegistration() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [plan, setPlan] = useState("");

  useEffect(() => {
    const urlPlan = new URLSearchParams(window.location.search).get("plan");
    if (urlPlan && VALID_PLANS.includes(urlPlan)) {
      setPlan(urlPlan);
    }
  }, []);

  const buttonLabel = sending
    ? "Enviando..."
    : plan && plan !== "indeciso" && PLANS[plan]
    ? `Reservar mi plan ${PLANS[plan].label} con 30% OFF`
    : "Quiero mi 30% de descuento";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    try {
      const nombre = (form.elements.namedItem("nombre") as HTMLInputElement)?.value || "";
      const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
      const telefono = (form.elements.namedItem("telefono") as HTMLInputElement)?.value || "";
      const pais = (form.elements.namedItem("pais") as HTMLInputElement)?.value || "";
      const rol = (form.elements.namedItem("rol") as HTMLSelectElement)?.value || "";
      const planValue = (form.elements.namedItem("plan") as HTMLSelectElement)?.value || "";
      const planFull = PLANS[planValue]?.full || "Sin especificar";
      const data = {
        tipo: "club-inmobiliario",
        nombre,
        email,
        telefono,
        pais,
        perfil: rol,
        plan: planValue,
        evento: "Club Inmobiliario",
        interes: `[Plan: ${planFull}] [${rol}] [${pais}] [Club Inmobiliario] — Pre-registro Early Bird 30% OFF`,
        fuente: "landing-club",
        tag: "Club Inmobiliario",
      };

      const fetchWithTimeout = (url: string, opts: RequestInit, ms = 8000) => {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), ms);
        return fetch(url, { ...opts, signal: controller.signal }).finally(() => clearTimeout(timer));
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

      setSent(true);
      form.reset();
    } catch {
      alert("Error al enviar. Intenta de nuevo.");
    }
    setSending(false);
  }

  const inputClass =
    "w-full px-5 py-4 bg-white border-2 border-black text-black placeholder-black/50 focus:outline-none focus:bg-[var(--color-marker-yellow)] transition-all duration-300 text-sm font-medium";

  return (
    <section
      id="pre-registro"
      className="relative py-24 lg:py-32 overflow-hidden club-light"
    >
      <div className="absolute inset-0 blueprint-bg opacity-50" />

      {/* Yellow corner */}
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-[var(--color-marker-yellow)] opacity-20 -rotate-12 rounded-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Message */}
          <div className="animate-fade-in">
            <span className="text-black text-xs uppercase tracking-[0.3em] font-bold">
              Cupos Limitados
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mt-3 mb-6 leading-[0.95]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              ASEGURA TU{" "}
              <span className="marker-bg px-2">LUGAR</span>
            </h2>
            <div className="w-16 h-1 bg-black mb-6" />

            <p className="text-black/80 leading-relaxed mb-8">
              Pre-inscríbete ahora y obtén un{" "}
              <span className="marker-underline font-bold text-black">
                30% de descuento exclusivo
              </span>{" "}
              como Early Bird. Serás de los primeros en acceder a todas las
              ventajas del Club Inmobiliario.
            </p>

            {/* Trust signals */}
            <div className="space-y-3">
              {[
                "Descuento exclusivo del 30% para Early Birds",
                "Primer acceso a tours internacionales",
                "Invitación a evento de lanzamiento VIP",
                "Sin compromiso — cancela cuando quieras",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[var(--color-marker-yellow)] border border-black flex items-center justify-center shrink-0">
                    <svg
                      className="w-3 h-3 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-black/85 text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>

            {/* Backed by badge */}
            <div className="mt-8 flex items-center gap-3 pt-6 border-t-2 border-black/10">
              <div className="w-12 h-12 border-2 border-dashed border-black/30 flex items-center justify-center bg-white">
                <span className="text-black/40 text-[8px] uppercase tracking-wider font-bold">Logo</span>
              </div>
              <span className="text-black/60 text-xs font-medium">
                Respaldado por Convención Inmobiliaria
              </span>
            </div>
          </div>

          {/* Right – Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white border-2 border-black p-8 sm:p-10 shadow-[8px_8px_0_0_#000]">
              {/* Header */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-0.5 flex-1 bg-black" />
                <span
                  className="text-black text-lg font-bold uppercase tracking-wider"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Pre-Registro Early Bird
                </span>
                <div className="h-0.5 flex-1 bg-black" />
              </div>

              {sent ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">🎉</div>
                  <h4
                    className="text-black text-3xl font-bold mb-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    ¡ESTÁS EN LA <span className="marker-bg px-2">LISTA</span>!
                  </h4>
                  <p className="text-black/80 text-sm mb-2 font-medium">
                    Tu descuento del 30% está reservado.
                  </p>
                  <p className="text-black/60 text-xs">
                    Te notificaremos cuando abramos oficialmente.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-black text-sm underline hover:text-black/70 font-bold"
                  >
                    Registrar otra persona
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <select
                    name="plan"
                    required
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    className={inputClass + " appearance-none"}
                  >
                    <option value="">Selecciona un plan</option>
                    <option value="esencial">Esencial — $27/mes</option>
                    <option value="profesional">Profesional — $47/mes</option>
                    <option value="elite">Elite — $87/mes</option>
                    <option value="indeciso">Aún no estoy seguro / Quiero asesoría</option>
                  </select>
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Nombre completo"
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Correo electrónico"
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    name="telefono"
                    required
                    placeholder="Teléfono (con código de país)"
                    className={inputClass}
                  />
                  <input
                    type="text"
                    name="pais"
                    required
                    placeholder="País de residencia"
                    className={inputClass}
                  />
                  <select
                    name="rol"
                    required
                    className={inputClass + " appearance-none"}
                  >
                    <option value="">¿Cuál es tu rol?</option>
                    <option value="realtor">Realtor / Agente Inmobiliario</option>
                    <option value="inversionista">Inversionista</option>
                    <option value="desarrollador">Desarrollador / Pre-constructora</option>
                    <option value="broker">Broker</option>
                    <option value="otro">Otro</option>
                  </select>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 bg-[var(--color-marker-yellow)] text-black font-bold uppercase tracking-wider border-2 border-black hover:bg-black hover:text-[var(--color-marker-yellow)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", letterSpacing: "0.1em" }}
                  >
                    {buttonLabel}
                  </button>

                  <p className="text-black/50 text-xs text-center font-medium">
                    Pre-registro sin costo. Te avisaremos cuando estemos listos.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
