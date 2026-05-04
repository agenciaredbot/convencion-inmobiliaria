const tiers = [
  {
    name: "Esencial",
    price: 27,
    tagline: "Empieza tu camino en el Club",
    features: [
      "Acceso prioritario a todos los eventos",
      "Listado de los proyectos de inversión más representativos de todos los países del portal",
      "Acceso a la app web con todos los proyectos publicados",
    ],
    featured: false,
    ctaLabel: "Quiero el Esencial",
  },
  {
    name: "Profesional",
    price: 47,
    tagline: "El plan más elegido",
    features: [
      "Todo lo del plan Esencial",
      "Networking VIP en todos los eventos",
      "Acceso exclusivo a herramientas de A.I. para Realtors",
      "10% de descuento en viajes y tours del Club Inmobiliario",
    ],
    featured: true,
    ctaLabel: "Quiero el Profesional",
  },
  {
    name: "Elite",
    price: 87,
    tagline: "Acceso total y prioridad VIP",
    features: [
      "Todo lo de los planes anteriores",
      "25% de descuento en los tours inmobiliarios",
      "Acceso completo a nuestra plataforma de A.I. para vender propiedades",
      "Generación de contenidos con A.I. incluida",
      "Acceso exclusivo a oportunidades de inversión con realtors e inversionistas de alto nivel",
    ],
    featured: false,
    ctaLabel: "Quiero el Elite",
  },
];

const checkIcon = (
  <svg
    className="w-5 h-5 text-gold-500 shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function ClubPricing() {
  return (
    <section id="planes" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-navy-radial" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
            Membresías del Club
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-[0.95]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            ELIGE TU <span className="text-gold-500">NIVEL</span>
          </h2>
          <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto mb-6" />
          <p className="text-white/80 max-w-xl mx-auto leading-relaxed">
            Tres niveles de membresía pensados para acompañarte en cada etapa
            de tu carrera inmobiliaria.
          </p>
        </div>

        {/* Tiers grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative glass rounded-2xl p-8 flex flex-col gradient-border transition-all duration-300 animate-fade-in ${
                tier.featured
                  ? "border-gold-500/40 bg-gold-500/[0.04] glow-gold scale-[1.02] md:-translate-y-2"
                  : "hover:bg-white/[0.06]"
              }`}
            >
              {/* Featured badge */}
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold-500 text-navy-950 text-[11px] font-bold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-950 animate-pulse" />
                    Más Popular
                  </span>
                </div>
              )}

              {/* Tier name */}
              <h3
                className="text-3xl font-bold text-white leading-none mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {tier.name}
              </h3>
              <p className="text-white/70 text-sm mb-6">{tier.tagline}</p>

              {/* Price */}
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-gold-500 text-2xl font-bold">$</span>
                <span
                  className="text-white text-6xl font-bold leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {tier.price}
                </span>
                <span className="text-white/60 text-sm ml-1">USD / mes</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {checkIcon}
                    <span className="text-white/90 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#registro-club"
                className={`block text-center w-full py-4 font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                  tier.featured
                    ? "bg-gold-500 text-navy-950 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/30"
                    : "glass-gold text-gold-500 border border-gold-500/30 hover:bg-gold-500/10"
                }`}
              >
                {tier.ctaLabel}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-white/50 text-sm mt-10 italic animate-fade-in">
          Cancela cuando quieras. Pagos mensuales seguros.
        </p>
      </div>
    </section>
  );
}
