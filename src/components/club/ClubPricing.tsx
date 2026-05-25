const tiers = [
  {
    id: "esencial",
    name: "Esencial",
    price: 27,
    tagline: "Empieza tu camino en el Club",
    features: [
      "Acceso prioritario a todos los eventos",
      "Listado y Magazine de los proyectos de inversión más representativos de todos los países del portal",
      "Acceso a la app web con todos los proyectos publicados",
    ],
    featured: false,
    ctaLabel: "Quiero el Esencial",
  },
  {
    id: "profesional",
    name: "Profesional",
    price: 47,
    tagline: "El plan más elegido",
    features: [
      "Todo lo del plan Esencial",
      "Networking VIP en todos los eventos",
      "Acceso exclusivo a herramientas de A.I. para Agentes Inmobiliarios",
      "10% de descuento en viajes y tours del Club Inmobiliario",
    ],
    featured: true,
    ctaLabel: "Quiero el Profesional",
  },
  {
    id: "elite",
    name: "Elite",
    price: 87,
    tagline: "Acceso total y prioridad VIP",
    features: [
      "Todo lo de los planes anteriores",
      "25% de descuento en los tours inmobiliarios",
      "Acceso completo a nuestra plataforma de A.I. para vender propiedades",
      "Generación de contenidos con A.I. incluida",
      "Acceso exclusivo a oportunidades de inversión con agentes inmobiliarios e inversionistas de alto nivel",
      "Push y promo dedicada para tu proyecto",
      "Reuniones con inversionistas y agentes para ventas y alianzas",
      "Webinar y activación de pauta para promover tu proyecto",
    ],
    featured: false,
    ctaLabel: "Quiero el Elite",
  },
];

const checkIcon = (
  <svg
    className="w-5 h-5 text-black shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function ClubPricing() {
  return (
    <section id="planes" className="relative py-24 lg:py-32 overflow-hidden club-light-alt">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-black text-xs uppercase tracking-[0.3em] font-bold">
            Membresías del Club
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mt-3 mb-6 leading-[0.95]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            ELIGE TU <span className="marker-bg px-2">NIVEL</span>
          </h2>
          <div className="w-16 h-1 bg-black mx-auto mb-6" />
          <p className="text-black/70 max-w-xl mx-auto leading-relaxed">
            Tres niveles de membresía pensados para acompañarte en cada etapa
            de tu carrera inmobiliaria.
          </p>
        </div>

        {/* Tiers grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-8 flex flex-col border-2 border-black transition-all duration-300 animate-fade-in ${
                tier.featured
                  ? "bg-[var(--color-marker-yellow)] md:-translate-y-3 shadow-[8px_8px_0_0_#000]"
                  : "bg-white hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000]"
              }`}
            >
              {/* Featured badge */}
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-black text-[var(--color-marker-yellow)] text-[11px] font-bold uppercase tracking-widest border-2 border-black">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-marker-yellow)] animate-pulse" />
                    Más Popular
                  </span>
                </div>
              )}

              {/* Tier name */}
              <h3
                className="text-4xl font-bold text-black leading-none mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {tier.name}
              </h3>
              <p className="text-black/70 text-sm mb-6 font-medium">{tier.tagline}</p>

              {/* Price */}
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-black text-2xl font-bold">$</span>
                <span
                  className="text-black text-7xl font-bold leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {tier.price}
                </span>
                <span className="text-black/70 text-sm ml-1 font-medium">USD / mes</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {checkIcon}
                    <span className="text-black text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`/club-inmobiliario?plan=${tier.id}#pre-registro`}
                className={`block text-center w-full py-4 font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-2 border-black ${
                  tier.featured
                    ? "bg-black text-[var(--color-marker-yellow)] hover:bg-white hover:text-black"
                    : "bg-[var(--color-marker-yellow)] text-black hover:bg-black hover:text-[var(--color-marker-yellow)]"
                }`}
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1rem", letterSpacing: "0.1em" }}
              >
                {tier.ctaLabel}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-black/60 text-sm mt-10 italic animate-fade-in font-medium">
          Cancela cuando quieras. Pagos mensuales seguros.
        </p>
      </div>
    </section>
  );
}
