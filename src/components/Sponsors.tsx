"use client";

import { motion } from "framer-motion";

export default function Sponsors() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
            Confían en nosotros
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-12"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            MARCAS QUE YA <span className="text-gold-500">NOS HAN ACOMPAÑADO</span>
          </h2>
        </motion.div>

        {/* Sponsors logos image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-6 sm:p-10 gradient-border"
        >
          <img
            src="/images/sponsors-logos.png"
            alt="Sponsors de Convención Inmobiliaria — QKapital Group, Constructora La Meseta, Glass & Windows, Luxury Homes, Home2InvestUS, Doxa, Near North Title Group, Gus Capital Group, Hamilton Rua, Baycana Properties, La Vida Real de un Realtor, Franchise Connectors, Flip that House, Mr. Credit 305, Visions Resort & Spa, Nexx Office"
            className="w-full h-auto rounded-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <a
            href="/sponsors"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 hover:scale-[1.02] animate-sponsor-pulse"
          >
            Quiero Ser Sponsor
          </a>
        </motion.div>
      </div>
    </section>
  );
}
