"use client";

import { motion } from "framer-motion";

const agenda = [
  {
    time: "8:30 — 9:00 AM",
    title: "Registro y Bienvenida",
    desc: "Acreditación de asistentes. Primer espacio de networking para conectar con profesionales del sector inmobiliario internacional.",
    icon: "📋",
  },
  {
    time: "9:00 AM — 12:00 PM",
    title: "Presentación de Proyectos Internacionales",
    desc: "Presentación de oportunidades de inversión en Colombia, Miami, República Dominicana y México. Desarrolladores y expertos exponen sus proyectos en vivo.",
    icon: "🏗️",
    highlight: true,
  },
  {
    time: "12:00 — 2:00 PM",
    title: "Networking & Cierre",
    desc: "Espacio dedicado para conectar directamente con inversionistas, desarrolladores y expertos del sector. El momento donde nacen las alianzas reales.",
    icon: "🤝",
  },
];

export default function AgendaV2() {
  return (
    <section id="agenda" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/networking-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-navy-950/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-transparent to-navy-950/70" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
            Programa del Evento
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-[0.95]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            AGENDA
          </h2>
          <div className="w-16 h-1 bg-gold-500 rounded-full mb-6" />
          <p className="text-white/80 max-w-xl leading-relaxed">
            Un programa intenso y enfocado: conoce los proyectos, conecta con los actores clave
            y toma decisiones de inversión informadas.
          </p>
        </motion.div>

        {/* Jornada badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 glass-gold rounded-full px-5 py-2">
            <span className="text-lg">🌅</span>
            <span className="text-gold-500 text-sm font-bold uppercase tracking-wider">
              Jornada — 8:30 AM a 2:00 PM
            </span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-gold-500/60 via-gold-500/30 to-gold-500/60" />

          <div className="space-y-8">
            {agenda.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative pl-12 group"
              >
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-navy-950 border-2 border-gold-500 group-hover:bg-gold-500 transition-colors duration-300 z-10">
                  <div className="absolute inset-0 rounded-full bg-gold-500/20 scale-0 group-hover:scale-[2.5] transition-transform duration-500" />
                </div>

                <div className={`glass rounded-xl p-6 sm:p-8 hover:bg-white/[0.06] transition-all duration-300 gradient-border group-hover:glow-gold ${item.highlight ? "border-gold-500/30 bg-gold-500/5" : ""}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <span
                      className="text-gold-500 text-xl sm:text-2xl font-bold shrink-0"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {item.time}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg sm:text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  {item.highlight && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["🇨🇴 Colombia", "🇺🇸 Miami", "🇩🇴 Rep. Dominicana", "🇲🇽 México"].map((country) => (
                        <span
                          key={country}
                          className="text-xs px-3 py-1 glass-gold rounded-full text-gold-500 font-medium"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/50 text-sm mt-10 italic"
        >
          El programa aplica para ambas sedes: Barranquilla (22 Abr) y Medellín (24 Abr)
        </motion.p>

        {/* Ticket badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <a
            href="#registro"
            className="inline-flex items-center gap-4 glass rounded-xl px-8 py-5 border border-white/10 hover:border-gold-500/30 transition-all duration-300 group"
          >
            <span className="text-3xl">🎟️</span>
            <div>
              <p className="text-gold-500 font-bold text-lg" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                ENTRADA COMPLETAMENTE GRATIS
              </p>
              <p className="text-white/50 text-sm group-hover:text-white/70 transition-colors">Solo necesitas registrarte</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
