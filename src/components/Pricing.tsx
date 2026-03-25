"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section id="paquetes" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-navy-800)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
            Elige Tu Experiencia
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-[0.95]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            TIPO DE <span className="text-gold-500">ACCESO</span>
          </h2>
          <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto mb-6" />
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
            Dos formas de vivir la Convención Inmobiliaria 2026.
            Elige la que mejor se adapte a tus objetivos.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* FREE Tier */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative glass rounded-2xl p-8 sm:p-10 gradient-border hover:bg-white/[0.03] transition-all duration-500 group"
          >
            {/* Tag */}
            <div className="absolute -top-3.5 left-8">
              <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                Acceso General
              </span>
            </div>

            <div className="mt-4 mb-8">
              <h3
                className="text-3xl sm:text-4xl font-bold text-white mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                FREE
              </h3>
              <div className="flex items-baseline gap-1">
                <span
                  className="text-5xl sm:text-6xl font-bold text-white"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  $0
                </span>
                <span className="text-white/30 text-sm">USD</span>
              </div>
            </div>

            <div className="w-full h-px bg-white/10 mb-8" />

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/60 text-sm leading-relaxed">
                  Acceso completo al evento
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/60 text-sm leading-relaxed">
                  Acceso a todas las conferencias y paneles
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/60 text-sm leading-relaxed">
                  Presentación de proyectos internacionales
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/60 text-sm leading-relaxed">
                  Networking general con asistentes
                </span>
              </div>
            </div>

            <a
              href="#registro"
              className="block text-center w-full py-4 glass border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-white/[0.06] hover:border-white/30 transition-all duration-300"
            >
              Registrarme Gratis
            </a>
          </motion.div>

          {/* VIP Tier */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative glass-strong rounded-2xl p-8 sm:p-10 border-2 border-gold-500/30 glow-gold transition-all duration-500 group hover:border-gold-500/50"
          >
            {/* Tag */}
            <div className="absolute -top-3.5 left-8">
              <span className="px-4 py-1.5 bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-gold-500/20">
                ⭐ Recomendado
              </span>
            </div>

            {/* Glow accent */}
            <div className="absolute -top-20 right-0 w-40 h-40 bg-gold-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="mt-4 mb-8">
              <h3
                className="text-3xl sm:text-4xl font-bold text-gold-500 mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                VIP LUNCH
              </h3>
              <div className="flex items-baseline gap-2">
                <span
                  className="text-5xl sm:text-6xl font-bold text-gold-500"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  $29
                </span>
                <span className="text-white/40 text-sm">USD</span>
              </div>
            </div>

            <div className="w-full h-px bg-gold-500/20 mb-8" />

            {/* VIP Description */}
            <div className="glass rounded-xl p-4 mb-6 border border-gold-500/10">
              <p className="text-white/70 text-sm leading-relaxed">
                Lunch privado para conectar directamente con los protagonistas del evento.
                <span className="text-gold-400 font-semibold"> ¡Es la mesa donde nacen las alianzas reales!</span> 🥂
              </p>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/70 text-sm leading-relaxed">
                  <strong className="text-white">Todo lo del acceso FREE</strong> incluido
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/70 text-sm leading-relaxed">
                  🤝 Lunch privado con <strong className="text-white">Inversionistas y Empresarios</strong>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/70 text-sm leading-relaxed">
                  🚀 Conexión directa con <strong className="text-white">Líderes de proyectos y Desarrolladores</strong>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/70 text-sm leading-relaxed">
                  🎁 Acceso a <strong className="text-white">ofertas especiales de Sponsors</strong>
                </span>
              </div>
            </div>

            <a
              href="#registro"
              className="block text-center w-full py-4 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 hover:scale-[1.01] active:scale-[0.99]"
            >
              Quiero Acceso VIP
            </a>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/25 text-sm mt-10"
        >
          Ambos accesos incluyen entrada a las dos sedes: Barranquilla (Abril 22) y Medellín (Abril 24)
        </motion.p>
      </div>
    </section>
  );
}
