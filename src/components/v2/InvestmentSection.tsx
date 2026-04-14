"use client";

import { motion } from "framer-motion";

const countries = [
  {
    flag: "🇨🇴",
    name: "Colombia",
    subtitle: "Barranquilla · Medellín · Cartagena",
    color: "from-yellow-500/20 to-transparent",
    categories: [
      { icon: "🏙️", label: "Desarrollos Urbanos" },
      { icon: "🏗️", label: "Proyectos en Preventa" },
      { icon: "💰", label: "Alta Rentabilidad" },
    ],
    description: "El mercado colombiano con proyectos de alto impacto en las principales ciudades del país.",
  },
  {
    flag: "🇺🇸",
    name: "Miami, USA",
    subtitle: "South Florida · Brickell · Aventura",
    color: "from-blue-500/20 to-transparent",
    categories: [
      { icon: "🌴", label: "Propiedades en Dólares" },
      { icon: "🏖️", label: "Condominios de Lujo" },
      { icon: "📈", label: "Plusvalía Garantizada" },
    ],
    description: "El mercado inmobiliario más dinámico de América: propiedades en dólares con plusvalía sostenida.",
  },
  {
    flag: "🇩🇴",
    name: "República Dominicana",
    subtitle: "Punta Cana · Santo Domingo · Bávaro",
    color: "from-red-500/20 to-transparent",
    categories: [
      { icon: "🏝️", label: "Proyectos Turísticos" },
      { icon: "🌊", label: "Beachfront Properties" },
      { icon: "💵", label: "Renta en USD" },
    ],
    description: "El Caribe que más crece: resort residences y propiedades frente al mar con renta garantizada.",
  },
  {
    flag: "🇲🇽",
    name: "México",
    subtitle: "Cancún · Tulum · CDMX · Monterrey",
    color: "from-green-500/20 to-transparent",
    categories: [
      { icon: "🌿", label: "Desarrollos Eco-Luxury" },
      { icon: "🏰", label: "Condominios Boutique" },
      { icon: "🔑", label: "Airbnb Ready" },
    ],
    description: "De la Riviera Maya a la Ciudad de México: los destinos más codiciados para invertir en América Latina.",
  },
];

export default function InvestmentSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-navy-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-navy-800)_0%,_transparent_60%)]" />
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
            Oportunidades Internacionales
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-[0.95]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            INVERTIR FUERA DEL PAÍS<br />
            <span className="text-gold-500">¡SÍ ES POSIBLE!</span>
          </h2>
          <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto mb-6" />
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed text-lg">
            En la Convención Inmobiliaria 2026 te presentamos los mejores proyectos
            en 4 mercados internacionales. Propiedades en dólares al alcance de tu mano.
          </p>
        </motion.div>

        {/* Country cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country, i) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="relative glass rounded-2xl p-6 gradient-border hover:bg-white/[0.04] transition-all duration-500 group hover:glow-gold"
            >
              {/* Gradient accent */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${country.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Flag + name */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{country.flag}</span>
                  <div>
                    <h3
                      className="text-xl font-bold text-white"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {country.name}
                    </h3>
                    <p className="text-white/50 text-xs">{country.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  {country.description}
                </p>

                {/* Category tags */}
                <div className="space-y-2">
                  {country.categories.map((cat) => (
                    <div
                      key={cat.label}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg glass border border-gold-500/10 group-hover:border-gold-500/25 transition-colors"
                    >
                      <span className="text-base">{cat.icon}</span>
                      <span className="text-white/80 text-xs font-medium">{cat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 glass-strong rounded-2xl p-8 sm:p-10 border border-gold-500/20 glow-gold text-center"
        >
          <p className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Acceso Completamente Gratuito
          </p>
          <h3
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            UN DÍA. CUATRO MERCADOS. MILES DE OPORTUNIDADES.
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Conecta cara a cara con desarrolladores, inversionistas y expertos del sector.
            El evento es <strong className="text-gold-500">100% gratuito</strong> — solo necesitas registrarte.
          </p>
          <a
            href="#registro"
            className="inline-block px-10 py-4 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 hover:scale-[1.02]"
          >
            Quiero Asistir — Es Gratis
          </a>
        </motion.div>
      </div>
    </section>
  );
}
