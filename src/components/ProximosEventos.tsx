"use client";

import { motion } from "framer-motion";

export default function ProximosEventos() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <img
        src="/images/PROXIMOS EVENTOS.jpeg"
        alt="Próximos Eventos — Convención Inmobiliaria 2026"
        className="w-full h-auto block"
      />
    </motion.section>
  );
}
