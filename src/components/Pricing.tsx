"use client";

import { motion } from "framer-motion";

const checkIconWhite = (
  <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
    <svg className="w-3 h-3 text-white/95" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

const checkIconGold = (
  <div className="w-5 h-5 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center shrink-0 mt-0.5">
    <svg className="w-3 h-3 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

export default function Pricing() {
  return (
    <section id="paquetes" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-navy-800)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
          <p className="text-white/95 max-w-2xl mx-auto leading-relaxed">
            Cuatro formas de vivir la Convención Inmobiliaria 2026.
            Elige la que mejor se adapte a tus objetivos.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* FREE Tier */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative glass rounded-2xl p-7 sm:p-8 gradient-border hover:bg-white/[0.03] transition-all duration-500 group"
          >
            <div className="absolute -top-3.5 left-6">
              <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                Acceso General
              </span>
            </div>

            <div className="mt-4 mb-6">
              <h3
                className="text-2xl sm:text-3xl font-bold text-white mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                FREE
              </h3>
              <div className="flex items-baseline gap-1">
                <span
                  className="text-4xl sm:text-5xl font-bold text-white"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  $0
                </span>
                <span className="text-white/95 text-sm">USD</span>
              </div>
            </div>

            <div className="w-full h-px bg-white/10 mb-6" />

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                {checkIconWhite}
                <span className="text-white/95 text-sm leading-relaxed">Acceso completo al evento</span>
              </div>
              <div className="flex items-start gap-3">
                {checkIconWhite}
                <span className="text-white/95 text-sm leading-relaxed">Todas las conferencias y paneles</span>
              </div>
              <div className="flex items-start gap-3">
                {checkIconWhite}
                <span className="text-white/95 text-sm leading-relaxed">Presentación de proyectos internacionales</span>
              </div>
              <div className="flex items-start gap-3">
                {checkIconWhite}
                <span className="text-white/95 text-sm leading-relaxed">Networking general</span>
              </div>
            </div>

            <a
              href="#registro"
              className="block text-center w-full py-3.5 glass border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-white/[0.06] hover:border-white/30 transition-all duration-300"
            >
              Registrarme Gratis
            </a>
          </motion.div>

          {/* VIP LUNCH Tier — Most Popular */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative glass-strong rounded-2xl p-7 sm:p-8 border-2 border-gold-500/30 glow-gold transition-all duration-500 group hover:border-gold-500/50 lg:scale-[1.02]"
          >
            {/* Popular badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1.5 bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-gold-500/20 whitespace-nowrap">
                ⭐ Más Popular
              </span>
            </div>

            <div className="absolute -top-20 right-0 w-40 h-40 bg-gold-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="mt-4 mb-6">
              <h3
                className="text-2xl sm:text-3xl font-bold text-gold-500 mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="brush-underline-red">VIP LUNCH</span>
              </h3>
              <div className="flex items-baseline gap-2">
                <span
                  className="text-4xl sm:text-5xl font-bold text-gold-500 brush-underline-red"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  $27
                </span>
                <span className="text-white/95 text-sm">USD</span>
              </div>
            </div>

            <div className="w-full h-px bg-gold-500/20 mb-6" />

            <div className="glass rounded-xl p-3 mb-5 border border-gold-500/10">
              <p className="text-white/95 text-xs sm:text-sm leading-relaxed">
                Lunch privado con los protagonistas del evento.
                <span className="text-gold-400 font-semibold"> ¡La mesa donde nacen las alianzas!</span> 🥂
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                {checkIconGold}
                <span className="text-white/95 text-sm leading-relaxed">
                  <strong className="text-white">Todo lo del FREE</strong> incluido
                </span>
              </div>
              <div className="flex items-start gap-3">
                {checkIconGold}
                <span className="text-white/95 text-sm leading-relaxed">
                  🤝 Lunch con <strong className="text-white">Inversionistas</strong>
                </span>
              </div>
              <div className="flex items-start gap-3">
                {checkIconGold}
                <span className="text-white/95 text-sm leading-relaxed">
                  🚀 Conexión con <strong className="text-white">Líderes de proyectos</strong>
                </span>
              </div>
              <div className="flex items-start gap-3">
                {checkIconGold}
                <span className="text-white/95 text-sm leading-relaxed">
                  🎁 <strong className="text-white">Ofertas de Sponsors</strong>
                </span>
              </div>
            </div>

            <a
              href="https://checkout.bold.co/payment/LNK_668PMLKYFP"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full py-3.5 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 hover:scale-[1.01] active:scale-[0.99]"
            >
              Quiero Acceso VIP
            </a>
          </motion.div>

          {/* Platinum Tier */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative glass rounded-2xl p-7 sm:p-8 gradient-border hover:bg-white/[0.03] transition-all duration-500 group border border-white/10 hover:border-white/20"
          >
            <div className="absolute -top-3.5 left-6">
              <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                💎 Platinum
              </span>
            </div>

            <div className="mt-4 mb-6">
              <h3
                className="text-2xl sm:text-3xl font-bold text-white mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                PLATINUM
              </h3>
              <div className="flex items-baseline gap-1">
                <span
                  className="text-4xl sm:text-5xl font-bold text-white"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  $50
                </span>
                <span className="text-white/95 text-sm">USD</span>
              </div>
            </div>

            <div className="w-full h-px bg-white/10 mb-6" />

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                {checkIconWhite}
                <span className="text-white/95 text-sm leading-relaxed italic">Beneficios próximamente</span>
              </div>
            </div>

            <a
              href="#registro"
              className="block text-center w-full py-3.5 glass border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-white/[0.06] hover:border-white/30 transition-all duration-300"
            >
              Solicitar Info
            </a>
          </motion.div>

          {/* Advance A.I Tier */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative glass rounded-2xl p-7 sm:p-8 gradient-border hover:bg-white/[0.03] transition-all duration-500 group border border-white/10 hover:border-white/20"
          >
            <div className="absolute -top-3.5 left-6">
              <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                🤖 Advance
              </span>
            </div>

            <div className="mt-4 mb-6">
              <h3
                className="text-2xl sm:text-3xl font-bold text-white mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                ADVANCE A.I
              </h3>
              <div className="flex items-baseline gap-1">
                <span
                  className="text-4xl sm:text-5xl font-bold text-white"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  $100
                </span>
                <span className="text-white/95 text-sm">USD</span>
              </div>
            </div>

            <div className="w-full h-px bg-white/10 mb-6" />

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                {checkIconWhite}
                <span className="text-white/95 text-sm leading-relaxed italic">Beneficios próximamente</span>
              </div>
            </div>

            <a
              href="#registro"
              className="block text-center w-full py-3.5 glass border border-white/20 text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-white/[0.06] hover:border-white/30 transition-all duration-300"
            >
              Solicitar Info
            </a>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gold-500 text-sm mt-10 italic"
        >
          Ambos accesos incluyen entrada a las dos sedes: Barranquilla (Miércoles 22 de Abril) y Medellín (Viernes 24 de Abril)
        </motion.p>
      </div>
    </section>
  );
}
