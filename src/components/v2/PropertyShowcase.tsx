"use client";

import { motion } from "framer-motion";

const properties = [
  {
    image: "/images/v2/miami-skyline.jpg",
    location: "Miami, Florida",
    flag: "🇺🇸",
    type: "Condominios de Lujo",
    highlight: "Desde $250K USD",
    desc: "Propiedades en el corazón de South Florida con vista al mar y acceso a la mejor calidad de vida.",
  },
  {
    image: "/images/v2/playa-caribe.jpg",
    location: "Punta Cana, RD",
    flag: "🇩🇴",
    type: "Resort Residences",
    highlight: "Renta en USD",
    desc: "Frente al mar Caribe, con programa de renta turística y retorno garantizado desde el día uno.",
  },
  {
    image: "/images/v2/mexico-tulum.jpg",
    location: "Riviera Maya, México",
    flag: "🇲🇽",
    type: "Eco-Luxury Living",
    highlight: "Airbnb Ready",
    desc: "Desarrollos boutique en los destinos turísticos más codiciados de México.",
  },
  {
    image: "/images/v2/colombia-cartagena.jpg",
    location: "Colombia",
    flag: "🇨🇴",
    type: "Desarrollos Premium",
    highlight: "Alta Valorización",
    desc: "Proyectos de alto impacto en Cartagena, Barranquilla y Medellín con crecimiento sostenido.",
  },
];

export default function PropertyShowcase() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-navy-800)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
            Proyectos que se presentan
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-[0.95]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            OPORTUNIDADES DE <span className="text-gold-500">INVERSIÓN</span>
          </h2>
          <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto mb-6" />
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
            Conoce en persona los proyectos que se presentarán en la convención.
            Habla directamente con los desarrolladores y toma decisiones informadas.
          </p>
        </motion.div>

        {/* Property Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((prop, i) => (
            <motion.div
              key={prop.location}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group relative rounded-2xl overflow-hidden gradient-border hover:glow-gold transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={prop.image}
                  alt={`${prop.type} en ${prop.location}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback gradient if image missing
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) parent.classList.add("bg-gradient-to-br", "from-navy-800", "to-navy-900");
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />

                {/* Flag + location overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2 glass rounded-full px-3 py-1.5">
                  <span className="text-base">{prop.flag}</span>
                  <span className="text-white text-xs font-medium">{prop.location}</span>
                </div>

                {/* Highlight badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-gold-500 text-navy-950 text-xs font-bold rounded-full">
                    {prop.highlight}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="glass p-5">
                <h3
                  className="text-lg font-bold text-gold-500 mb-1"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {prop.type}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  {prop.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/50 text-sm mb-4">
            Estos y muchos más proyectos serán presentados en vivo durante la convención.
          </p>
          <a
            href="#registro"
            className="inline-block px-8 py-3.5 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30"
          >
            Registrarme Gratis
          </a>
        </motion.div>
      </div>
    </section>
  );
}
