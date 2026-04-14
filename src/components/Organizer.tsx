"use client";

import { motion } from "framer-motion";

export default function Organizer() {
  return (
    <section id="speakers" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-navy-radial" />
      <div className="absolute inset-0 noise" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-500/[0.02] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Photo with golden frame effect */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden glass-strong relative">
                <img
                  src="/images/claudia-rivera.jpeg"
                  alt="Claudia Rivera — CEO & Organizadora de Convención Inmobiliaria"
                  width={400}
                  height={533}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold-500/40" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold-500/40" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-gold rounded-xl px-5 py-3 glow-gold">
                <p className="text-gold-500 text-xs font-bold uppercase tracking-wider">CEO & Organizadora</p>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
              Organizadora
            </span>
            <div className="flex items-center gap-4 mt-3 mb-2">
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[0.95]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                CLAUDIA <span className="text-gold-500">RIVERA</span>
              </h2>
              <img
                src="/images/logo-claudia.jpg"
                alt="Claudia Rivera Real Estate"
                width={200}
                height={60}
                loading="lazy"
                className="h-15 w-auto opacity-60"
              />
            </div>
            <p className="text-white/95 text-sm mb-5" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              De Convención Inmobiliaria 2026
            </p>
            <div className="w-16 h-1 bg-gold-500 rounded-full mb-6" />

            <p className="text-white/95 leading-relaxed mb-3">
              Claudia Rivera es una experta en negocios inmobiliarios, asesora
              internacional de bienes raíces y líder reconocida en el sector.
            </p>
            <p className="text-white/95 leading-relaxed mb-6">
              Como CEO de Convención Inmobiliaria, asegura un enfoque único,
              profesional y de alto impacto para todos los participantes.
            </p>
            <p className="text-white/95 leading-relaxed mb-8">
              Su trayectoria y experiencia han consolidado este evento como un
              espacio estratégico para conectar proyectos inmobiliarios con
              inversionistas internacionales y actores clave de la industria.
            </p>

            {/* Social links */}
            <div className="flex gap-3 mb-8">
              <a
                href="https://www.instagram.com/claudiariverarealestate/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white/95 hover:text-gold-500 hover:bg-white/[0.08] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://wa.me/17542804030"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white/95 hover:text-gold-500 hover:bg-white/[0.08] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
              </a>
            </div>

            <a
              href="#registro"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 hover:scale-[1.02]"
            >
              Deseo Asistir al Evento
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
