"use client";

export default function ClubHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/miami-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-navy-950/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-transparent to-navy-950" />
      <div className="absolute inset-0 noise" />

      {/* Animated gold particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold-400 rounded-full opacity-40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${3 + i * 0.7}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Golden radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Back to main */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-gold-400 text-xs uppercase tracking-widest mb-8 transition-colors animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Convención Inmobiliaria
        </a>

        {/* Logo */}
        <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <img
            src="/images/logo-oficial.png"
            alt="Convención Inmobiliaria"
            className="h-16 sm:h-20 mx-auto mb-4 object-contain"
          />
        </div>

        {/* CLUB title */}
        <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h1 className="flex flex-col items-center gap-0">
            <span
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-wide"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              CONVENCIÓN INMOBILIARIA
            </span>
            <span
              className="text-6xl sm:text-8xl lg:text-9xl text-gold-400 leading-none -mt-2"
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontWeight: 700,
                filter: "drop-shadow(0 0 40px rgba(255,210,0,0.5))",
              }}
            >
              Club
            </span>
          </h1>
        </div>

        {/* Divider */}
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.5s" }} />

        {/* Tagline */}
        <p
          className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-6 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          Únete a un{" "}
          <span className="text-gold-400 font-bold">grupo exclusivo</span> de
          inversionistas, realtors y actores del ecosistema de Real Estate que
          toman las{" "}
          <span className="text-gold-400 font-bold">mejores decisiones</span>
        </p>

        {/* Próximamente badge */}
        <div className="mb-10 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <span className="inline-flex items-center gap-2 px-6 py-2.5 glass-gold rounded-full">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span
              className="text-gold-400 text-sm font-bold uppercase tracking-[0.2em]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Próximamente — Cupos Limitados
            </span>
          </span>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 animate-fade-in" style={{ animationDelay: "1s" }}>
          <a
            href="#pre-registro"
            className="px-10 py-4 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-400 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-gold-500/30 active:scale-[0.98] animate-sponsor-pulse"
          >
            Pre-inscríbete con 30% OFF
          </a>
          <p className="text-white/40 text-xs">
            Descuento exclusivo para los primeros inscritos
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1.5s" }}>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-2.5 bg-gold-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
