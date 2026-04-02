"use client";

import { motion } from "framer-motion";

const eventos = [
  {
    pais: "🇨🇴",
    label: "Convención Colombia",
    fecha: "ABRIL 22",
    ciudad: "Barranquilla",
  },
  {
    pais: "🇨🇴",
    label: "Convención Colombia",
    fecha: "ABRIL 24",
    ciudad: "Medellín",
  },
  {
    pais: "🇩🇴",
    label: "República Dominicana",
    fecha: "MAYO 26",
    ciudad: "",
  },
  {
    pais: "🇲🇽",
    label: "México",
    fecha: "MAYO 28",
    ciudad: "",
  },
  {
    pais: "🇺🇸",
    label: "Miami",
    fecha: "AGOSTO",
    ciudad: "",
  },
  {
    pais: "🇺🇸",
    label: "Orlando",
    fecha: "AGOSTO",
    ciudad: "",
  },
];

export default function ProximosEventos() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-navy-800)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 noise" />

      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <img
            src="/images/logo-oficial.png"
            alt="Convención Inmobiliaria"
            className="h-16 mx-auto object-contain opacity-90"
          />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gold-500 leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            ¡PRÓXIMOS{" "}
            <span className="text-white">EVENTOS!</span>
          </h2>
        </motion.div>

        {/* Events grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          {eventos.map((evento, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass rounded-xl p-4 sm:p-5 gradient-border hover:bg-white/[0.05] hover:glow-gold transition-all duration-300 group"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl sm:text-3xl">{evento.pais}</span>
              </div>
              <p className="text-white/70 text-xs uppercase tracking-wider mb-1 leading-tight">
                {evento.label}
              </p>
              <p
                className="text-gold-500 text-xl sm:text-2xl font-bold leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {evento.fecha}
              </p>
              {evento.ciudad && (
                <p className="text-white/60 text-xs mt-1 uppercase tracking-wider">
                  {evento.ciudad}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-navy-950 rounded-full shadow-lg shadow-gold-500/20">
            <span
              className="text-lg sm:text-xl font-bold uppercase tracking-wider"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              ¡ÚNETE A LA GIRA MÁS GRANDE!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
