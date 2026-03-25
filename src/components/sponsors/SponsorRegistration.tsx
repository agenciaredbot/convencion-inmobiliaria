"use client";

import { motion } from "framer-motion";

const highlights = [
  "Espacio de exhibición en el evento",
  "Visibilidad ante inversionistas internacionales",
  "Networking VIP con decisores clave",
  "Cobertura en redes sociales y medios",
  "Presentación de tu marca en tarima",
  "Base de datos de asistentes calificados",
];

export default function SponsorRegistration() {
  return (
    <section id="registro-sponsor" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/miami-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-navy-950/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-transparent to-navy-950/70" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
              Reserva Tu Espacio
            </span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-[0.95]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              SÉ PARTE COMO{" "}
              <span className="text-gold-500">SPONSOR</span>
            </h2>
            <div className="w-16 h-1 bg-gold-500 rounded-full mb-6" />

            <p className="text-white/50 leading-relaxed mb-8">
              Completa el formulario y nuestro equipo se pondrá en contacto contigo
              para presentarte los paquetes disponibles y crear una propuesta
              personalizada para tu marca.
            </p>

            <div className="space-y-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/60 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-strong rounded-2xl p-8 sm:p-10 glow-gold gradient-border">
              <h3
                className="text-2xl text-center text-white font-bold mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                SOLICITUD DE SPONSOR
              </h3>
              <p className="text-center text-white/30 text-xs mb-8 uppercase tracking-wider">
                Espacios limitados
              </p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <input type="hidden" name="form_type" value="sponsor" />

                <div>
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full px-5 py-3.5 rounded-xl glass border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-gold-500/50 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Empresa / Marca"
                    className="w-full px-5 py-3.5 rounded-xl glass border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-gold-500/50 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full px-5 py-3.5 rounded-xl glass border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-gold-500/50 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Teléfono (con código de país)"
                    className="w-full px-5 py-3.5 rounded-xl glass border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-gold-500/50 transition-colors"
                  />
                </div>
                <div>
                  <select className="w-full px-5 py-3.5 rounded-xl glass border border-white/10 text-white/50 text-sm focus:outline-none focus:border-gold-500/50 transition-colors bg-transparent">
                    <option value="" className="bg-navy-900">¿Qué paquete te interesa?</option>
                    <option value="silver" className="bg-navy-900">Silver</option>
                    <option value="gold" className="bg-navy-900">Gold</option>
                    <option value="platinum" className="bg-navy-900">Platinum</option>
                    <option value="personalizado" className="bg-navy-900">Paquete personalizado</option>
                  </select>
                </div>
                <div>
                  <select className="w-full px-5 py-3.5 rounded-xl glass border border-white/10 text-white/50 text-sm focus:outline-none focus:border-gold-500/50 transition-colors bg-transparent">
                    <option value="" className="bg-navy-900">¿En qué ciudad deseas participar?</option>
                    <option value="barranquilla" className="bg-navy-900">Barranquilla — Abril 22</option>
                    <option value="medellin" className="bg-navy-900">Medellín — Abril 24</option>
                    <option value="ambas" className="bg-navy-900">Ambas ciudades</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 hover:scale-[1.01] active:scale-[0.99]"
                >
                  Solicitar Información
                </button>

                <p className="text-white/20 text-xs text-center">
                  Al enviar aceptas recibir información sobre oportunidades de sponsorship.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
