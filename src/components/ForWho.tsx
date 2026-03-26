"use client";

import { motion } from "framer-motion";

const audiences = [
  { label: "Pre-Constructores", icon: "🏗️" },
  { label: "Agentes Inmobiliarios", icon: "🏠" },
  { label: "Bancos", icon: "🏦" },
  { label: "Compañías de Créditos", icon: "💳" },
  { label: "Agentes de Seguros", icon: "🛡️" },
  { label: "Abogados", icon: "⚖️" },
  { label: "Contadores", icon: "📊" },
  { label: "Compañías de Título", icon: "📋" },
];

const benefits = [
  {
    title: "Maximiza tu Exposición y agentes de bienes raíces",
    desc: "Resalta tu proyecto inmobiliario ante un público exclusivo de inversionistas internacionales y agentes de bienes raíces interesados en mercados como Miami, Cancún y República Dominicana.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Visibilidad y Promoción",
    desc: "Aprovecha el escenario perfecto para mostrar tu proyecto a tomadores de decisiones clave y potenciales inversores de alto nivel.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: "Networking Exclusivo",
    desc: "Establece conexiones con profesionales clave del sector inmobiliario: agentes, contadores, abogados, bancos y más.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "Conéctate Globalmente",
    desc: "La convención se extiende a mercados internacionales con presencia en Orlando, Nueva York, Los Ángeles y Dubái.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ForWho() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Audience section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
            ¿Para quién es?
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            LA <span className="text-gold-500">CONVENCIÓN INMOBILIARIA</span>
          </h2>
          <p className="text-white/95 max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl font-bold leading-snug">
            Si eres una pre-constructora, inversionista o agente inmobiliario con proyectos de finca raíz en mercados internacionales
            y deseas acceder a una audiencia selecta de inversionistas, este evento es para ti.
          </p>
        </motion.div>

        {/* Audience grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-24">
          {audiences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass rounded-xl p-5 text-center cursor-default hover:bg-white/[0.06] transition-all duration-300 gradient-border"
            >
              <span className="text-2xl mb-2 block">{item.icon}</span>
              <p className="text-sm font-medium text-white/95">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h3
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            ¿Por qué reservar tu espacio como{" "}
            <span className="text-gold-500">SPONSOR</span>?
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-strong rounded-2xl p-8 group hover:bg-white/[0.08] transition-all duration-500 gradient-border"
            >
              <div className="w-14 h-14 rounded-xl glass-gold flex items-center justify-center text-gold-500 mb-5 group-hover:scale-110 transition-transform duration-300">
                {b.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{b.title}</h4>
              <p className="text-white/95 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
