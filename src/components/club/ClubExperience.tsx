"use client";

const highlights = [
  "Tours inmobiliarios a Miami, Nueva York, Dubái, Cancún, Punta Cana (RD) y Medellín",
  "Descuentos exclusivos en proyectos de preconstrucción",
  "Oportunidades de inversión antes que nadie",
  "Acceso a tecnología A.I para tu negocio",
  "Red de contactos en USA, LATAM y Medio Oriente",
];

export default function ClubExperience() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden club-light">
      {/* Subtle blueprint */}
      <div className="absolute inset-0 blueprint-bg opacity-50" />

      {/* Yellow corner accent */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[var(--color-marker-yellow)] opacity-25 rotate-[18deg] rounded-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Visual */}
          <div className="relative animate-fade-in">
            <div className="relative aspect-[4/3] overflow-hidden border-2 border-black">
              <img
                src="/images/collage-evento.jpg"
                alt="Experiencia Club Inmobiliario"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Floating yellow badge */}
            <div className="absolute -bottom-5 -right-5 sm:right-8 bg-[var(--color-marker-yellow)] border-2 border-black p-5 shadow-[6px_6px_0_0_#000]">
              <p
                className="text-black text-3xl font-bold leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                30% OFF
              </p>
              <p className="text-black/80 text-[10px] uppercase tracking-wider font-bold mt-1">
                Early Bird
              </p>
            </div>
          </div>

          {/* Right – Content */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="text-black text-xs uppercase tracking-[0.3em] font-bold">
              Más que una membresía
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-3 mb-6 leading-[0.95]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              UNA EXPERIENCIA QUE TRANSFORMA TU{" "}
              <span className="marker-bg px-2">NEGOCIO</span>
            </h2>
            <div className="w-16 h-1 bg-black mb-6" />

            <p className="text-black/75 leading-relaxed mb-8">
              El Club Inmobiliario es el portal exclusivo para profesionales del
              Real Estate que buscan crecer internacionalmente. Accede a
              oportunidades, descuentos y conexiones que no encontrarás en
              ningún otro lugar.
            </p>

            <div className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <div className="mt-0.5 w-5 h-5 bg-[var(--color-marker-yellow)] border border-black flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-black/85 text-sm leading-relaxed font-medium">{item}</p>
                </div>
              ))}
            </div>

            {/* Target audience pills */}
            <div className="flex flex-wrap gap-2">
              {["Realtors", "Inversionistas", "Desarrolladores", "Brokers", "Agentes"].map((role) => (
                <span
                  key={role}
                  className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-black text-white rounded-none"
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
