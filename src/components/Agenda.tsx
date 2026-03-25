"use client";

import { motion } from "framer-motion";

const agendaItems = [
  {
    time: "8:30 AM",
    title: "Registro & Networking",
    desc: "Acreditación de asistentes y primer espacio de networking para conectar con profesionales del sector inmobiliario.",
  },
  {
    time: "9:00 AM",
    title: "Apertura — Claudia Rivera",
    desc: "Palabras de bienvenida e inauguración oficial a cargo de Claudia Rivera, Realtor Internacional y CEO de Convención Inmobiliaria.",
  },
  {
    time: "9:30 AM",
    title: "Cómo Invertir en USA, RD y México",
    desc: "Estrategias y oportunidades de inversión inmobiliaria en los mercados más atractivos de la región.",
  },
  {
    time: "10:00 AM",
    title: "Presentación Proyectos Internacionales",
    desc: "Exhibición de proyectos inmobiliarios de alto perfil en mercados internacionales consolidados y emergentes.",
  },
  {
    time: "11:00 AM",
    title: "Panel Inversionistas & Expertos",
    desc: "Mesa de discusión con inversionistas y expertos del sector sobre tendencias, retos y oportunidades del mercado global.",
  },
  {
    time: "12:00 — 12:30 PM",
    title: "Networking VIP",
    desc: "Espacio exclusivo de networking para cerrar negocios, agendar reuniones y fortalecer alianzas estratégicas.",
  },
  {
    time: "7:00 PM",
    title: "Cierre + Agenda de Citas Privadas",
    desc: "Cierre oficial del evento con agenda personalizada de citas privadas entre inversionistas y desarrolladores.",
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
      {/* Dark overlays */}
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
          <p className="text-white/50 max-w-2xl leading-relaxed">
            Un día completo diseñado para maximizar tu experiencia:
            conferencias de alto nivel, networking estratégico y oportunidades
            de negocio reales.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-gold-500/60 via-gold-500/30 to-gold-500/60" />

          <div className="space-y-10">
            {agendaItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative pl-12 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-navy-950 border-2 border-gold-500 group-hover:bg-gold-500 transition-colors duration-300 z-10">
                  <div className="absolute inset-0 rounded-full bg-gold-500/20 scale-0 group-hover:scale-[2.5] transition-transform duration-500" />
                </div>

                <div className="glass rounded-xl p-6 hover:bg-white/[0.06] transition-all duration-300 gradient-border group-hover:glow-gold">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-3">
                    <span
                      className="text-gold-500 text-xl sm:text-2xl font-bold shrink-0 min-w-[140px]"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {item.time}
                    </span>
                    <span className="hidden sm:block w-px h-5 bg-white/20" />
                    <h3 className="text-white font-semibold text-sm sm:text-base">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">
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
