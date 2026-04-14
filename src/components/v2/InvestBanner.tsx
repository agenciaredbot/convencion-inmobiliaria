"use client";

import { motion } from "framer-motion";

export default function InvestBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image — beach/conference split */}
      <div className="absolute inset-0">
        <img
          src="/images/fondo-banner.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/50 to-transparent" />
      </div>
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-gold-500 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
              Convención Inmobiliaria 2026
            </span>

            <h2
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.9] mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              INVERTIR EN<br />
              EL EXTERIOR<br />
              <span className="text-gold-500">¡SÍ ES POSIBLE!</span>
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
              Descubre oportunidades reales de inversión inmobiliaria en los
              mercados más atractivos de América. Propiedades en dólares,
              plusvalía garantizada y renta turística.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { flag: "🇺🇸", label: "Miami" },
                { flag: "🇩🇴", label: "Rep. Dominicana" },
                { flag: "🇲🇽", label: "México" },
                { flag: "🇨🇴", label: "Colombia" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-gold-500/20"
                >
                  <span className="text-xl">{c.flag}</span>
                  <span className="text-white text-sm font-medium">{c.label}</span>
                </div>
              ))}
            </div>

            <a
              href="#registro"
              className="inline-block px-10 py-4 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-400 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/30 hover:scale-[1.02]"
            >
              Asistir Gratis al Evento
            </a>

            {/* Ticket badge */}
            <div className="mt-8 inline-flex items-center gap-4 glass rounded-xl px-6 py-4 border border-white/10">
              <span className="text-3xl">🎟️</span>
              <div>
                <p className="text-gold-500 font-bold text-lg" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  ENTRADA COMPLETAMENTE GRATIS
                </p>
                <p className="text-white/50 text-sm">Solo necesitas registrarte</p>
              </div>
            </div>
          </motion.div>

          {/* Right — floating stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="glass-strong rounded-2xl p-8 border border-gold-500/20 glow-gold">
                <h3
                  className="text-3xl font-bold text-gold-500 text-center mb-4"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  4 MERCADOS INTERNACIONALES
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: "🌴", text: "Proyectos Turísticos frente al mar" },
                    { icon: "🏙️", text: "Desarrollos Urbanos de alto nivel" },
                    { icon: "💵", text: "Propiedades en Dólares" },
                    { icon: "📈", text: "Plusvalía y renta garantizada" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 px-5 py-4 bg-navy-950/90 border border-gold-500/30 rounded-xl">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-white text-sm font-bold">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 glass-gold rounded-xl px-5 py-3 border border-gold-500/30">
                <p className="text-gold-500 font-bold text-sm" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  ENTRADA GRATIS
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
