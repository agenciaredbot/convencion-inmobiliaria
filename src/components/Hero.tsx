"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-navy-radial" />
      <div className="absolute inset-0 noise" />

      {/* Decorative geometric shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 border border-gold-500/10 rounded-full blur-sm" />
      <div className="absolute bottom-20 left-10 w-96 h-96 border border-gold-500/5 rounded-full" />

      {/* Content — CSS fade-in animations instead of Framer Motion */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 pb-16 animate-fade-in-up">
        {/* Tagline chip */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-gold text-gold-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            Invierte · Acciona · Crece
          </span>
        </div>

        {/* Main logo */}
        <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <img
            src="/images/logo-oficial.png"
            alt="Convención Inmobiliaria 2026"
            width={400}
            height={200}
            fetchPriority="high"
            className="h-32 sm:h-44 lg:h-56 mx-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto mb-4 leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s" }}>
          Conecta con los más grandes inversionistas internacionales.
          <br className="hidden sm:block" />
          Presenta y vende tu proyecto inmobiliario.
        </p>

        {/* Date & Location badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="glass rounded-lg px-5 py-3 flex items-center gap-3">
            <svg className="w-5 h-5 text-gold-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="text-left">
              <p className="text-xs text-gold-500 uppercase tracking-wider font-bold">Pronto</p>
              <p className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="text-2xl leading-none">🇩🇴</span>
                Punta Cana, Rep. Dominicana
              </p>
            </div>
          </div>
          <div className="glass rounded-lg px-5 py-3 flex items-center gap-3">
            <svg className="w-5 h-5 text-gold-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="text-left">
              <p className="text-xs text-gold-500 uppercase tracking-wider font-bold">Pronto</p>
              <p className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="text-2xl leading-none">🇲🇽</span>
                Cancún, México
              </p>
            </div>
          </div>
        </div>

        {/* Save the date message (replaces countdown) */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="glass-strong rounded-2xl max-w-2xl mx-auto px-6 py-7 glow-gold relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-gold-500/5 pointer-events-none" />
            <p className="text-xs uppercase tracking-[0.3em] text-gold-500 mb-3 font-bold relative z-10">
              Save the Date
            </p>
            <p
              className="text-xl sm:text-2xl lg:text-3xl text-white leading-snug relative z-10"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
            >
              <span className="text-gold-500">Pronto,</span> se vienen eventos y tours para realtors e inversionistas
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-row gap-2 sm:gap-4 justify-center animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <a
            href="#registro"
            className="group relative px-4 py-2.5 sm:px-8 sm:py-4 bg-gold-500 text-navy-950 font-bold text-[11px] sm:text-sm uppercase tracking-wider rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/30 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="relative z-10">Deseo Asistir al Evento</span>
            <div className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="/sponsors"
            className="px-4 py-2.5 sm:px-8 sm:py-4 bg-gold-500 text-navy-950 font-bold text-[11px] sm:text-sm uppercase tracking-wider rounded-lg sm:rounded-xl hover:bg-gold-400 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] animate-sponsor-pulse"
          >
            Quiero Ser Sponsor
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "2s" }}>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5 animate-bounce">
            <div className="w-1 h-2.5 rounded-full bg-gold-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
