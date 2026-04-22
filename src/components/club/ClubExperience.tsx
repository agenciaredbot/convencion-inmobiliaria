"use client";

const highlights = [
  "Tours inmobiliarios a Miami, Nueva York, Dubái y Cancún",
  "Descuentos exclusivos en proyectos de preconstrucción",
  "Oportunidades de inversión antes que nadie",
  "Acceso a tecnología A.I para tu negocio",
  "Red de contactos en USA, LATAM y Medio Oriente",
];

export default function ClubExperience() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/networking-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-navy-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-navy-950" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Visual */}
          <div className="relative animate-fade-in">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-strong glow-gold">
              <img
                src="/images/collage-evento.jpg"
                alt="Experiencia Club Inmobiliario"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold-400/50 rounded-tl-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold-400/50 rounded-br-2xl pointer-events-none" />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 sm:right-8 glass-gold rounded-xl p-4 shadow-xl shadow-gold-500/10">
              <p
                className="text-gold-400 text-2xl font-bold"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                30% OFF
              </p>
              <p className="text-white/70 text-[10px] uppercase tracking-wider">
                Early Bird
              </p>
            </div>
          </div>

          {/* Right – Content */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="text-gold-400 text-xs uppercase tracking-[0.3em] font-semibold">
              Más que una membresía
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 leading-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              UNA EXPERIENCIA QUE TRANSFORMA TU{" "}
              <span
                className="text-gold-400"
                style={{ filter: "drop-shadow(0 0 15px rgba(255,210,0,0.3))" }}
              >
                NEGOCIO
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 rounded-full mb-6" />

            <p className="text-white/80 leading-relaxed mb-8">
              El Club Inmobiliario es el portal exclusivo para profesionales del
              Real Estate que buscan crecer internacionalmente. Accede a
              oportunidades, descuentos y conexiones que no encontrarás en
              ningún otro lugar.
            </p>

            <div className="space-y-4 mb-10">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-gold-400/15 border border-gold-400/30 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            {/* Target audience pills */}
            <div className="flex flex-wrap gap-2">
              {["Realtors", "Inversionistas", "Desarrolladores", "Brokers", "Agentes"].map((role) => (
                <span
                  key={role}
                  className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider glass-gold rounded-full text-gold-400"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
