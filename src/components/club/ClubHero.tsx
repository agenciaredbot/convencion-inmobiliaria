"use client";

export default function ClubHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden club-light">
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-bg opacity-70" />

      {/* Yellow marker accents floating */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-[var(--color-marker-yellow)] opacity-20 rotate-12 rounded-3xl pointer-events-none" />
      <div className="absolute bottom-32 -right-24 w-96 h-64 bg-[var(--color-marker-yellow)] opacity-15 -rotate-6 rounded-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-24">
        {/* Back to main */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-black/60 hover:text-black text-xs uppercase tracking-widest mb-10 transition-colors animate-fade-in font-bold"
          style={{ animationDelay: "0.2s" }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Convención Inmobiliaria
        </a>

        {/* Logo */}
        <div className="mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <img
            src="/images/logo-conexion.jpg"
            alt="Conexión Inmobiliaria"
            width={520}
            height={195}
            fetchPriority="high"
            className="h-20 sm:h-28 lg:h-32 mx-auto object-contain"
          />
        </div>

        {/* CLUB title */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h1 className="flex flex-col items-center leading-none">
            <span
              className="text-[5.5rem] sm:text-[8rem] lg:text-[11rem] font-bold text-black tracking-tight leading-[0.85]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              CLUB
            </span>
            <span className="marker-bg mt-2">
              <span
                className="text-3xl sm:text-5xl lg:text-6xl font-bold text-black tracking-[0.12em] px-4"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                INMOBILIARIO
              </span>
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p
          className="text-base sm:text-lg lg:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          Únete al{" "}
          <span className="marker-underline font-bold text-black">grupo exclusivo</span>{" "}
          de inversionistas, realtors y actores del Real Estate que toman las mejores decisiones.
        </p>

        {/* Próximamente badge */}
        <div className="mb-10 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-black rounded-full">
            <span className="w-2 h-2 rounded-full bg-[var(--color-marker-yellow)] animate-pulse" />
            <span
              className="text-white text-sm font-bold uppercase tracking-[0.2em]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Próximamente — Cupos Limitados
            </span>
          </span>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 animate-fade-in" style={{ animationDelay: "1s" }}>
          <a
            href="#planes"
            className="group relative px-12 py-4 bg-[var(--color-marker-yellow)] text-black font-bold text-sm uppercase tracking-[0.15em] rounded-none hover:bg-black hover:text-[var(--color-marker-yellow)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] border-2 border-black"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem" }}
          >
            Pre-inscríbete con 30% OFF
          </a>
          <p className="text-black/50 text-xs font-medium">
            Descuento exclusivo para los primeros inscritos
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <div className="w-6 h-10 rounded-full border-2 border-black/30 flex items-start justify-center p-2">
          <div className="w-1 h-2.5 bg-black rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
