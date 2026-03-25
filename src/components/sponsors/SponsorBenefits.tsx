"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    icon: "🎯",
    title: "Audiencia Calificada",
    desc: "Acceso directo a inversionistas, constructores y profesionales del sector inmobiliario con poder de decisión.",
  },
  {
    icon: "🌎",
    title: "Alcance Internacional",
    desc: "Presencia en dos ciudades estratégicas de Colombia con asistentes de USA, México, RD y más.",
  },
  {
    icon: "🏆",
    title: "Posicionamiento Premium",
    desc: "Tu marca visible en todas las piezas del evento: escenario, materiales impresos, redes sociales y transmisiones.",
  },
  {
    icon: "🤝",
    title: "Networking Exclusivo",
    desc: "Acceso a reuniones privadas y mesas de negocios con los principales actores del mercado.",
  },
  {
    icon: "📣",
    title: "Exposición en Medios",
    desc: "Cobertura mediática del evento con menciones de tu marca en prensa, redes sociales y email marketing.",
  },
  {
    icon: "💼",
    title: "Generación de Leads",
    desc: "Base de datos de asistentes calificados interesados en productos y servicios inmobiliarios.",
  },
];

export default function SponsorBenefits() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Parallax video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ transform: "translateZ(0) scale(1.1)" }}
        >
          <source src="/images/convencion-bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-navy-950/88" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-transparent to-navy-950/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-gold-500)_0%,_transparent_50%)] opacity-[0.03]" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
            ¿Por Qué Ser Sponsor?
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-[0.95]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            BENEFICIOS <span className="text-gold-500">EXCLUSIVOS</span>
          </h2>
          <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto mb-6" />
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
            Ser sponsor de la Convención Inmobiliaria te posiciona como líder
            ante una audiencia de alto valor. Estos son los beneficios que
            obtendrás al reservar tu espacio.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-strong rounded-2xl p-8 gradient-border hover:bg-white/[0.04] transition-all duration-500 group hover:glow-gold"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
