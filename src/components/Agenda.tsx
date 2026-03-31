"use client";

import { motion } from "framer-motion";

const jornadaManana = [
  {
    time: "8:30 — 9:00 AM",
    title: "Registro & Networking",
    desc: "Acreditación de asistentes y primer espacio de networking para conectar con profesionales del sector inmobiliario.",
    icon: "📋",
  },
  {
    time: "9:00 — 9:30 AM",
    title: "Apertura y Presentación Sponsors",
    desc: "Inauguración oficial del evento. Palabras de bienvenida por Claudia Rivera y presentación de los sponsors que hacen posible la convención.",
    icon: "🎤",
  },
  {
    time: "9:30 — 10:00 AM",
    title: "Cómo Invertir en USA, RD y México",
    desc: "Estrategias y oportunidades de inversión inmobiliaria en los mercados más atractivos de la región.",
    icon: "🌎",
  },
  {
    time: "10:00 AM — 12:00 PM",
    title: "Presentación de Proyectos",
    desc: "Exhibición de proyectos inmobiliarios de alto perfil. Los principales desarrolladores presentan sus oportunidades de inversión.",
    icon: "🏗️",
  },
  {
    time: "12:00 — 1:00 PM",
    title: "Lunch VIP & Networking",
    desc: "Almuerzo exclusivo para conectar directamente con inversionistas, empresarios y líderes de proyectos. ¡La mesa donde nacen las alianzas reales!",
    icon: "🥂",
    highlight: true,
  },
  {
    time: "1:00 — 3:00 PM",
    title: "Panel Inversionistas & Expertos",
    desc: "Mesa de discusión con inversionistas y expertos del sector sobre tendencias, retos y oportunidades del mercado global.",
    icon: "💡",
  },
];

const jornadaTarde = [
  {
    time: "6:30 — 7:00 PM",
    title: "Registro",
    desc: "Acreditación y bienvenida a la cena VIP exclusiva.",
    icon: "📋",
  },
  {
    time: "7:00 — 9:00 PM",
    title: "Cena y Networking",
    desc: "Cena exclusiva y espacio de networking premium para cerrar negocios, fortalecer alianzas y conectar directamente con inversionistas y líderes del sector.",
    icon: "🥂",
  },
];

export default function Agenda() {
  return (
    <section id="agenda" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/networking-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-navy-950/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-transparent to-navy-950/70" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
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
          <p className="text-white/95 max-w-2xl leading-relaxed">
            Un día completo con dos jornadas diseñadas para maximizar tu experiencia:
            conferencias de alto nivel, networking estratégico y oportunidades
            de negocio reales.
          </p>
        </motion.div>

        {/* Jornada Mañana */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 glass-gold rounded-full px-5 py-2 mb-8">
            <span className="text-lg">🌅</span>
            <span className="text-gold-500 text-sm font-bold uppercase tracking-wider">
              Jornada Mañana — 8:30 AM a 3:00 PM
            </span>
          </div>
        </motion.div>

        <div className="relative mb-16">
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-gold-500/60 via-gold-500/30 to-gold-500/60" />

          <div className="space-y-8">
            {jornadaManana.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative pl-12 group"
              >
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-navy-950 border-2 border-gold-500 group-hover:bg-gold-500 transition-colors duration-300 z-10">
                  <div className="absolute inset-0 rounded-full bg-gold-500/20 scale-0 group-hover:scale-[2.5] transition-transform duration-500" />
                </div>

                <div className={`glass rounded-xl p-6 hover:bg-white/[0.06] transition-all duration-300 gradient-border group-hover:glow-gold ${item.highlight ? "border-gold-500/30 bg-gold-500/5" : ""}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span
                      className="text-gold-500 text-lg sm:text-xl font-bold shrink-0"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {item.time}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/95 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Jornada Tarde Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 mb-6"
        >
          <div className="inline-flex items-center gap-2 glass-gold rounded-full px-5 py-2">
            <span className="text-lg">🥂</span>
            <span className="text-gold-500 text-sm font-bold uppercase tracking-wider">
              Cena VIP + Networking — 6:30 PM a 9:00 PM
            </span>
          </div>
        </motion.div>

        {/* Jornada Tarde */}
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-gold-500/60 to-gold-500/20" />

          <div className="space-y-10">
          {jornadaTarde.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative pl-12 group"
            >
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-navy-950 border-2 border-gold-500 group-hover:bg-gold-500 transition-colors duration-300 z-10" />

              <div className="glass rounded-xl p-6 hover:bg-white/[0.06] transition-all duration-300 gradient-border group-hover:glow-gold">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span
                    className="text-gold-500 text-lg sm:text-xl font-bold shrink-0"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {item.time}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-white/95 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
