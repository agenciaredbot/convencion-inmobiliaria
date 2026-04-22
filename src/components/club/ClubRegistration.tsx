"use client";

import { useState } from "react";

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbx5Y5LIKu60jcAaCsotwuFg7kgpXQKmD_36XSBqQd8tfDdSSYb46LVLLotC-buE9P4B7A/exec";

export default function ClubRegistration() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = {
      form_type: "club-inmobiliario",
      source: "landing-club",
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value,
      pais: (form.elements.namedItem("pais") as HTMLInputElement).value,
      rol: (form.elements.namedItem("rol") as HTMLSelectElement).value,
    };
    try {
      await fetch(SHEETS_URL, {
        method: "POST",
        body: JSON.stringify(data),
        mode: "no-cors",
      });
      setSent(true);
      form.reset();
    } catch {
      alert("Error al enviar. Intenta de nuevo.");
    }
    setSending(false);
  }

  return (
    <section
      id="pre-registro"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,210,0,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 noise" />

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Message */}
          <div className="animate-fade-in">
            <span className="text-gold-400 text-xs uppercase tracking-[0.3em] font-semibold">
              Cupos Limitados
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-[0.95]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              ASEGURA TU{" "}
              <span
                className="text-gold-400"
                style={{ filter: "drop-shadow(0 0 20px rgba(255,210,0,0.4))" }}
              >
                LUGAR
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 rounded-full mb-6" />

            <p className="text-white/80 leading-relaxed mb-8">
              Pre-inscríbete ahora y obtén un{" "}
              <span className="text-gold-400 font-bold text-lg">
                30% de descuento exclusivo
              </span>{" "}
              como Early Bird. Serás de los primeros en acceder a todas las
              ventajas del Club Inmobiliario.
            </p>

            {/* Trust signals */}
            <div className="space-y-4">
              {[
                "Descuento exclusivo del 30% para Early Birds",
                "Primer acceso a tours internacionales",
                "Invitación a evento de lanzamiento VIP",
                "Sin compromiso — cancela cuando quieras",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-400/15 border border-gold-400/30 flex items-center justify-center shrink-0">
                    <svg
                      className="w-3 h-3 text-gold-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-white/80 text-sm">{item}</p>
                </div>
              ))}
            </div>

            {/* Backed by badge */}
            <div className="mt-8 flex items-center gap-3">
              <img
                src="/images/logo-oficial.png"
                alt="Convención Inmobiliaria"
                className="h-8 object-contain opacity-60"
              />
              <span className="text-white/40 text-xs">
                Respaldado por Convención Inmobiliaria
              </span>
            </div>
          </div>

          {/* Right – Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="glass-strong rounded-2xl p-8 sm:p-10 border border-gold-400/20 shadow-xl shadow-gold-500/5">
              {/* Header */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-400/30" />
                <span
                  className="text-gold-400 text-lg font-bold uppercase tracking-wider"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Pre-Registro Early Bird
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-400/30" />
              </div>

              {sent ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">🎉</div>
                  <h4
                    className="text-white text-2xl font-bold mb-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    ¡ESTÁS EN LA LISTA!
                  </h4>
                  <p className="text-white/70 text-sm mb-2">
                    Tu descuento del 30% está reservado.
                  </p>
                  <p className="text-white/50 text-xs">
                    Te notificaremos cuando abramos oficialmente.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-gold-400 text-sm underline hover:text-gold-300"
                  >
                    Registrar otra persona
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Nombre completo"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/90 focus:outline-none focus:border-gold-400/50 focus:bg-white/[0.07] transition-all duration-300 text-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Correo electrónico"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/90 focus:outline-none focus:border-gold-400/50 focus:bg-white/[0.07] transition-all duration-300 text-sm"
                  />
                  <input
                    type="tel"
                    name="telefono"
                    required
                    placeholder="Teléfono (con código de país)"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/90 focus:outline-none focus:border-gold-400/50 focus:bg-white/[0.07] transition-all duration-300 text-sm"
                  />
                  <input
                    type="text"
                    name="pais"
                    required
                    placeholder="País de residencia"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/90 focus:outline-none focus:border-gold-400/50 focus:bg-white/[0.07] transition-all duration-300 text-sm"
                  />
                  <select
                    name="rol"
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white/90 focus:outline-none focus:border-gold-400/50 focus:bg-white/[0.07] transition-all duration-300 text-sm appearance-none"
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
                    className="w-full py-4 bg-gold-400 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-300 transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                  >
                    {sending
                      ? "Enviando..."
                      : "Quiero mi 30% de descuento"}
                  </button>

                  <p className="text-white/40 text-xs text-center">
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
