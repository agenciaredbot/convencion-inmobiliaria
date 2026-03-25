"use client";

import { motion } from "framer-motion";

const countries = [
  { name: "Estados Unidos", flag: "🇺🇸", city: "Miami · Orlando" },
  { name: "República Dominicana", flag: "🇩🇴", city: "Punta Cana" },
  { name: "México", flag: "🇲🇽", city: "Cancún" },
  { name: "Colombia", flag: "🇨🇴", city: "Barranquilla · Medellín" },
];

export default function Countries() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
            Alcance Internacional
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-12"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            MERCADOS QUE <span className="text-gold-500">REPRESENTAMOS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass rounded-2xl p-8 text-center group cursor-default hover:bg-white/[0.06] transition-all duration-500 gradient-border"
            >
              <span className="text-5xl mb-4 block group-hover:scale-125 transition-transform duration-500">
                {c.flag}
              </span>
              <h3 className="text-lg font-bold text-white mb-1">{c.name}</h3>
              <p className="text-white/95 text-sm">{c.city}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
