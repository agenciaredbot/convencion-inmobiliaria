"use client";

import { motion } from "framer-motion";

const packages = [
  {
    tier: "Silver",
    price: "Consultar",
    featured: false,
    benefits: [
      "Logo en materiales del evento",
      "Mención en redes sociales",
      "1 espacio de exhibición",
      "2 entradas VIP al evento",
      "Acceso a networking general",
    ],
  },
  {
    tier: "Gold",
    price: "Consultar",
    featured: true,
    benefits: [
      "Logo destacado en escenario principal",
      "Mención en redes + email marketing",
      "2 espacios de exhibición premium",
      "5 entradas VIP al evento",
      "Acceso a networking VIP",
      "Presentación de 5 min en tarima",
      "Base de datos de asistentes",
    ],
  },
  {
    tier: "Platinum",
    price: "Consultar",
    featured: false,
    benefits: [
      "Naming del evento (co-branding)",
      "Logo principal en toda la comunicación",
      "Espacio de exhibición premium doble",
      "10 entradas VIP al evento",
      "Networking VIP + citas privadas",
      "Presentación de 15 min en tarima",
      "Base de datos completa de asistentes",
      "Cobertura en medios como sponsor principal",
    ],
  },
];

export default function SponsorPackages() {
  return (
    <section id="paquetes" className="relative py-24 lg:py-32 overflow-hidden">
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
      <div className="absolute inset-0 bg-navy-950/90" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-transparent to-navy-950/80" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
            Niveles de Sponsorship
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-[0.95]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            PAQUETES DE <span className="text-gold-500">SPONSOR</span>
          </h2>
          <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto mb-6" />
          <p className="text-white/95 max-w-2xl mx-auto leading-relaxed">
            Elige el nivel de exposición que mejor se adapte a tu marca.
            Cada paquete está diseñado para maximizar tu retorno de inversión.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative rounded-2xl p-8 transition-all duration-500 ${
                pkg.featured
                  ? "glass-strong border-2 border-gold-500/30 glow-gold scale-[1.02] lg:scale-105"
                  : "glass gradient-border hover:bg-white/[0.04]"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider rounded-full">
                  Más Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className={`text-3xl font-bold mb-2 ${pkg.featured ? "text-gold-500" : "text-white"}`}
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {pkg.tier}
                </h3>
                <p className="text-white/95 text-sm">{pkg.price}</p>
              </div>

              <div className="space-y-3 mb-8">
                {pkg.benefits.map((benefit, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 shrink-0 mt-0.5 ${pkg.featured ? "text-gold-500" : "text-gold-500/60"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/95 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <a
                href="#registro-sponsor"
                className={`block text-center px-6 py-3.5 font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 ${
                  pkg.featured
                    ? "bg-gold-500 text-navy-950 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/20"
                    : "glass border border-gold-500/20 text-white hover:bg-white/[0.06] hover:border-gold-500/40"
                }`}
              >
                Solicitar {pkg.tier}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/95 text-sm mt-10"
        >
          * Los precios y beneficios son personalizables. Contáctanos para crear un paquete a tu medida.
        </motion.p>
      </div>
    </section>
  );
}
