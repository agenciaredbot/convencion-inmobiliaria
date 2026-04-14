export default function InvestBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image — beach/conference split */}
      <div className="absolute inset-0">
        <img
          src="/images/fondo-banner.jpg"
          alt=""
          width={1920}
          height={800}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/50 to-transparent" />
      </div>
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — headline */}
          <div className="animate-fade-in">
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

          </div>

          {/* Right — About card */}
          <div className="hidden lg:flex justify-center animate-fade-in">
            <div className="bg-navy-950/95 rounded-2xl p-10 border border-gold-500/30 max-w-md text-center shadow-2xl">
              <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-bold">
                Sobre el Evento
              </span>
              <h3
                className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4 leading-tight"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                ¿POR QUÉ{" "}
                <span className="text-gold-500">CONVENCIÓN INMOBILIARIA</span>?
              </h3>
              <div className="w-12 h-1 bg-gold-500 rounded-full mx-auto mb-6" />
              <p className="text-white text-base leading-relaxed font-medium">
                Tu oportunidad para conectar con los más grandes inversionistas
                internacionales y con grandes empresas para presentar y vender
                tu proyecto en mercados sólidos como USA, RD, MX, DU, COL.
              </p>

              {/* Ticket badge */}
              <div className="mt-8 inline-flex items-center gap-4 bg-navy-950 rounded-xl px-6 py-4 border border-gold-500/30">
                <span className="text-3xl">🎟️</span>
                <div className="text-left">
                  <p className="text-gold-500 font-bold text-base" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    ENTRADA COMPLETAMENTE GRATIS
                  </p>
                  <p className="text-white/60 text-sm">Solo necesitas registrarte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
