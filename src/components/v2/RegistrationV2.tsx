"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SHEETS_URL = "https://script.google.com/macros/s/AKfycbz1YNFEICfRFTVK-PyhoAl9aw8IRFxjqM-nCHz-jAkike-ksLzPJ7AGjE6CpzG2Ueza8Q/exec";

export default function RegistrationV2() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const perfil = (form.elements.namedItem("perfil") as HTMLSelectElement).value;
    const pais = (form.elements.namedItem("pais") as HTMLInputElement).value;
    const evento = (form.elements.namedItem("evento") as HTMLSelectElement).value;
    const data = {
      tipo: "asistente",
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value,
      pais,
      perfil,
      evento,
      interes: `[${perfil || "Sin perfil"}] [${pais || "Sin país"}] [${evento || "Sin evento"}] — Convención Inmobiliaria 2026`,
      fuente: "formulario-nueva",
      tag: "Nueva landing",
    };
    try {
      fetch(SHEETS_URL, {
        method: "POST",
        body: JSON.stringify(data),
        mode: "no-cors",
      });
      fetch("/api/kommo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSent(true);
      form.reset();
    } catch {
      alert("Error al enviar. Intenta de nuevo.");
    }
    setSending(false);
  }

  return (
    <section id="registro" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/miami-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-navy-950/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-transparent to-navy-950/70" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
              Acceso 100% Gratuito
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-[0.95]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              ASEGURA TU <span className="text-gold-500">LUGAR</span>
            </h2>
            <div className="w-16 h-1 bg-gold-500 rounded-full mb-6" />
            <p className="text-white/80 leading-relaxed mb-8 text-lg">
              Tu registro es gratuito. Un día de conexiones reales con los principales
              desarrolladores e inversionistas internacionales.
            </p>

            {/* Value props */}
            <div className="space-y-4">
              {[
                { icon: "🏗️", text: "Proyectos en Colombia, Miami, RD y México" },
                { icon: "🤝", text: "Networking con inversionistas internacionales" },
                { icon: "💡", text: "Estrategias para invertir en el exterior" },
                { icon: "🎤", text: "Expertos del mercado inmobiliario global" },
                { icon: "🌍", text: "Propiedades en dólares al alcance de tu mano" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl glass-gold flex items-center justify-center shrink-0 text-lg">
                    {item.icon}
                  </div>
                  <p className="text-white/80 text-sm">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Free badge */}
            <div className="mt-10 inline-flex items-center gap-3 glass rounded-xl px-6 py-4 border border-gold-500/30">
              <span className="text-3xl">🎟️</span>
              <div>
                <p className="text-gold-500 font-bold text-lg" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  ENTRADA COMPLETAMENTE GRATIS
                </p>
                <p className="text-white/60 text-xs">Solo necesitas registrarte</p>
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-strong rounded-2xl p-8 sm:p-10 glow-gold gradient-border">
              <h3
                className="text-2xl sm:text-3xl font-bold text-white text-center mb-8"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                REGISTRO GRATUITO
              </h3>
              {sent ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">✅</div>
                  <h4 className="text-white text-xl font-bold mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    ¡REGISTRO EXITOSO!
                  </h4>
                  <p className="text-white/70 text-sm">
                    Nuestro equipo se pondrá en contacto contigo para confirmar tu asistencia.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-gold-500 text-sm underline hover:text-gold-400"
                  >
                    Registrar otra persona
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo"
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-gold-500/30 rounded-xl text-white placeholder-white font-bold focus:outline-none focus:border-gold-500/60 focus:bg-white/[0.07] transition-all duration-300 text-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-gold-500/30 rounded-xl text-white placeholder-white font-bold focus:outline-none focus:border-gold-500/60 focus:bg-white/[0.07] transition-all duration-300 text-sm"
                  />
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono con código de país. Ej: +57 300 123 4567"
                    className="w-full px-5 py-4 bg-white/5 border border-gold-500/30 rounded-xl text-white placeholder-white font-bold focus:outline-none focus:border-gold-500/60 focus:bg-white/[0.07] transition-all duration-300 text-sm"
                  />
                  <input
                    type="text"
                    name="pais"
                    placeholder="País"
                    className="w-full px-5 py-4 bg-white/5 border border-gold-500/30 rounded-xl text-white placeholder-white font-bold focus:outline-none focus:border-gold-500/60 focus:bg-white/[0.07] transition-all duration-300 text-sm"
                  />
                  <select
                    name="evento"
                    className="w-full px-5 py-4 bg-white/5 border border-gold-500/30 rounded-xl text-white font-bold focus:outline-none focus:border-gold-500/60 focus:bg-white/[0.07] transition-all duration-300 text-sm appearance-none"
                  >
                    <option value="">¿A qué evento quieres asistir?</option>
                    <option value="barranquilla">Barranquilla</option>
                    <option value="medellin">Medellín</option>
                  </select>
                  <select
                    name="perfil"
                    className="w-full px-5 py-4 bg-white/5 border border-gold-500/30 rounded-xl text-white font-bold focus:outline-none focus:border-gold-500/60 focus:bg-white/[0.07] transition-all duration-300 text-sm appearance-none"
                  >
                    <option value="">Tipo de Perfil</option>
                    <option value="agente-inmobiliario">Agente Inmobiliario</option>
                    <option value="constructora">Constructora</option>
                    <option value="broker">Broker</option>
                    <option value="inversionista">Inversionista</option>
                    <option value="asistente">Asistente</option>
                    <option value="sponsor">Sponsor</option>
                  </select>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? "Enviando..." : "Registrarme Gratis"}
                  </button>
                  <p className="text-white/70 text-xs text-center font-medium">
                    Al registrarte aceptas recibir información sobre el evento.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
