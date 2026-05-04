const checkIconGold = (
  <div className="w-5 h-5 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center shrink-0 mt-0.5">
    <svg className="w-3 h-3 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

export default function PricingV2() {
  return (
    <section id="paquetes" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-navy-800)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
            Acceso al Evento
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-[0.95]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            ENTRADA <span className="text-gold-500">100% GRATUITA</span>
          </h2>
          <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto mb-6" />
          <p className="text-white/95 max-w-2xl mx-auto leading-relaxed text-lg">
            Todos los accesos a la Convención Inmobiliaria 2026 son completamente
            gratis. Regístrate y vive la experiencia completa sin costo alguno.
          </p>
        </div>

        {/* Single FREE Card */}
        <div className="relative glass-strong rounded-2xl p-8 sm:p-10 border-2 border-gold-500/30 glow-gold max-w-2xl mx-auto animate-fade-in">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="px-6 py-2 bg-gold-500 text-navy-950 text-sm font-bold uppercase tracking-wider rounded-full shadow-lg shadow-gold-500/20 whitespace-nowrap">
              🎟️ Acceso Gratuito
            </span>
          </div>

          <div className="absolute -top-20 right-0 w-40 h-40 bg-gold-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="text-center mt-4 mb-8">
            <h3
              className="text-3xl sm:text-4xl font-bold text-gold-500 mb-2"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              ENTRADA FREE
            </h3>
            <div className="flex items-baseline justify-center gap-2">
              <span
                className="text-6xl sm:text-7xl font-bold text-gold-500"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                $0
              </span>
              <span className="text-white/70 text-lg">USD</span>
            </div>
            <p className="text-white/60 text-sm mt-2">Sin costo. Sin letra pequeña.</p>
          </div>

          <div className="w-full h-px bg-gold-500/20 mb-8" />

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3">
              {checkIconGold}
              <span className="text-white/95 text-sm leading-relaxed">
                Acceso completo al evento
              </span>
            </div>
            <div className="flex items-start gap-3">
              {checkIconGold}
              <span className="text-white/95 text-sm leading-relaxed">
                Todas las conferencias y paneles
              </span>
            </div>
            <div className="flex items-start gap-3">
              {checkIconGold}
              <span className="text-white/95 text-sm leading-relaxed">
                Presentación de proyectos internacionales
              </span>
            </div>
            <div className="flex items-start gap-3">
              {checkIconGold}
              <span className="text-white/95 text-sm leading-relaxed">
                Networking con inversionistas
              </span>
            </div>
            <div className="flex items-start gap-3">
              {checkIconGold}
              <span className="text-white/95 text-sm leading-relaxed">
                Conexión con líderes de proyectos
              </span>
            </div>
            <div className="flex items-start gap-3">
              {checkIconGold}
              <span className="text-white/95 text-sm leading-relaxed">
                Acceso a ambos destinos (Punta Cana y Cancún)
              </span>
            </div>
          </div>

          <a
            href="#registro"
            className="block text-center w-full py-4 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 hover:scale-[1.01] active:scale-[0.99]"
          >
            Registrarme Gratis
          </a>
        </div>

        <p className="text-center text-gold-500 text-sm mt-10 italic animate-fade-in">
          El acceso incluye ambos destinos: Punta Cana, RD (25 & 26 Mayo) y Cancún, México (28 & 29 Mayo)
        </p>
      </div>
    </section>
  );
}
