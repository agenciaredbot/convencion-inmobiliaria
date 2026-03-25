"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SHEETS_URL = "https://script.google.com/macros/s/AKfycbx5Y5LIKu60jcAaCsotwuFg7kgpXQKmD_36XSBqQd8tfDdSSYb46LVLLotC-buE9P4B7A/exec";

export default function Registration() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = {
      form_type: "asistente",
      source: "landing-asistentes",
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value,
      participacion: (form.elements.namedItem("participacion") as HTMLSelectElement).value,
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
      {/* Dark overlays for readability */}
      <div className="absolute inset-0 bg-navy-950/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-transparent to-navy-950/70" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
              No te quedes fuera
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-[0.95]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              RESERVA TU <span className="text-gold-500">CUPO</span>
            </h2>
            <div className="w-16 h-1 bg-gold-500 rounded-full mb-6" />
            <p className="text-white/60 leading-relaxed mb-6">
              Asegura tu lugar en la Convención Inmobiliaria 2026.
              Completa el formulario y nuestro equipo se pondrá en contacto
              contigo para confirmar tu participación.
            </p>
            <div className="space-y-4">
              {[
                "Acceso a todas las conferencias y paneles",
                "Networking con inversionistas internacionales",
                "Material exclusivo del evento",
                "Certificado de participación",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full glass-gold flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white/60 text-sm">{item}</p>
                </div>
              ))}
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
                REGISTRO
              </h3>
              {sent ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">✅</div>
                  <h4 className="text-white text-xl font-bold mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    ¡REGISTRO EXITOSO!
                  </h4>
                  <p className="text-white/50 text-sm">Nuestro equipo se pondrá en contacto contigo pronto.</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-gold-500 text-sm underline hover:text-gold-400">
                    Registrar otra persona
                  </button>
                </div>
              ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50 focus:bg-white/[0.07] transition-all duration-300 text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50 focus:bg-white/[0.07] transition-all duration-300 text-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono (con código de país)"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold-500/50 focus:bg-white/[0.07] transition-all duration-300 text-sm"
                  />
                </div>
                <div>
                  <select name="participacion" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white/30 focus:outline-none focus:border-gold-500/50 focus:bg-white/[0.07] transition-all duration-300 text-sm appearance-none">
                    <option value="">¿Cómo deseas participar?</option>
                    <option value="asistente-free">Asistente — Acceso Free</option>
                    <option value="asistente-vip">Asistente — VIP Lunch ($27 USD)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? "Enviando..." : "Quiero Asistir"}
                </button>
                <p className="text-white/20 text-xs text-center">
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
