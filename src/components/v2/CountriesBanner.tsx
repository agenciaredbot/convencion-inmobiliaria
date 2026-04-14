"use client";

import { motion } from "framer-motion";

export default function CountriesBanner() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 noise" />

      <div className="relative z-10">
        {/* Countries banner image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-6 pt-16"
        >
          <div className="text-center mb-10">
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
              Destinos de Inversión
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4 leading-[0.95]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              MERCADOS <span className="text-gold-500">INTERNACIONALES</span>
            </h2>
            <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto" />
          </div>

          {/* Banner image with glow effect */}
          <div className="relative rounded-2xl overflow-hidden glow-gold">
            <img
              src="/images/banner-paises.png"
              alt="Estados Unidos, República Dominicana, México, Colombia — Mercados internacionales de inversión"
              className="w-full h-auto block"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
          </div>
        </motion.div>

        {/* Category cards below the banner */}
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: "🏝️",
                title: "Proyectos Turísticos",
                desc: "Resorts, condohoteles y propiedades frente al mar en destinos premium del Caribe y Centroamérica.",
                countries: "RD · México · Colombia",
              },
              {
                icon: "🏙️",
                title: "Desarrollos Urbanos",
                desc: "Proyectos de vivienda y oficinas en las ciudades con mayor crecimiento y demanda de América.",
                countries: "Miami · Medellín · CDMX",
              },
              {
                icon: "💵",
                title: "Propiedades en Dólares",
                desc: "Inversiones seguras en mercados dolarizados con plusvalía comprobada y flujos de renta estables.",
                countries: "USA · RD · Panamá",
              },
            ].map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass rounded-2xl p-6 gradient-border hover:bg-white/[0.04] transition-all duration-500 group hover:glow-gold text-center"
              >
                <span className="text-4xl mb-4 block">{cat.icon}</span>
                <h3
                  className="text-xl font-bold text-gold-500 mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {cat.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {cat.desc}
                </p>
                <span className="text-xs text-gold-500/70 font-medium uppercase tracking-wider">
                  {cat.countries}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Ticket badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10 pb-4"
          >
            <a
              href="#registro"
              className="inline-flex items-center gap-4 glass rounded-xl px-8 py-5 border border-white/10 hover:border-gold-500/30 transition-all duration-300 group"
            >
              <span className="text-3xl">🎟️</span>
              <div>
                <p className="text-gold-500 font-bold text-lg" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  ENTRADA COMPLETAMENTE GRATIS
                </p>
                <p className="text-white/50 text-sm group-hover:text-white/70 transition-colors">Solo necesitas registrarte</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
