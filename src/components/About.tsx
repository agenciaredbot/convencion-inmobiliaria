"use client";

import { motion } from "framer-motion";

const highlights = [
  "Evento más reconocido en Estados Unidos por su trayectoria",
  "La mayoría de asistentes salen con negocios cerrados",
  "Figuras como Jurguen Klaric y Vicente Passariello han confiado en nosotros",
  "Expansión internacional: Estados Unidos, Colombia, México y Dubái",
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/convencion-bg.mp4" type="video/mp4" />
      </video>
      {/* Dark overlays for readability */}
      <div className="absolute inset-0 bg-navy-950/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-transparent to-navy-950/70" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Video placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden glass-strong glow-gold group cursor-pointer">
              {/* Video placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full glass-gold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8 text-gold-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white/40 text-sm uppercase tracking-wider">Ver video del evento</p>
                </div>
              </div>
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-500/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold-500/30 rounded-br-2xl" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
              Sobre el Evento
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-[0.95]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              ¿POR QUÉ{" "}
              <span className="text-gold-500">CONVENCIÓN INMOBILIARIA</span>?
            </h2>
            <div className="w-16 h-1 bg-gold-500 rounded-full mb-6" />

            <p className="text-white/60 leading-relaxed mb-8">
              La Convención Inmobiliaria es tu oportunidad para conectar con los
              más grandes inversionistas internacionales y con grandes empresas
              para presentar y vender tu proyecto en mercados sólidos como Miami,
              Cancún y República Dominicana.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 w-2 h-2 rounded-full bg-gold-500 shrink-0" />
                  <p className="text-white/70 text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>

            <a
              href="https://wa.me/17542804030"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 hover:scale-[1.02]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Quiero Ser Sponsor
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
