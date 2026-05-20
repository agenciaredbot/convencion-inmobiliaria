const checkIconGold = (
  <div className="w-5 h-5 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center shrink-0 mt-0.5">
    <svg className="w-3 h-3 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

const freeBenefits = [
  "Acceso completo al evento",
  "Todas las conferencias y paneles",
  "Presentación de proyectos internacionales",
  "Networking con inversionistas",
  "Conexión con líderes de proyectos",
  "Acceso a ambos destinos (Punta Cana y Cancún)",
];

const premiumBenefits = [
  "Los mejores proyectos de inversión en Miami, Cancún y Rep. Dominicana",
  "Reunión con los mayores inversionistas en Real Estate del extranjero",
  "Ecosistema completo: legal, contable y participantes clave",
  "Espacios exclusivos para alianzas y networking premium",
  "Información de valor sobre la dirección de la industria",
];

export default function Pricing() {
  return (
    <section id="paquetes" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-navy-800)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
            Acceso al Evento
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-[0.95]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            DOS FORMAS DE <span className="text-gold-500">PARTICIPAR</span>
          </h2>
          <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto mb-6" />
          <p className="text-white/95 max-w-2xl mx-auto leading-relaxed text-lg">
            Asiste gratis al evento o elige el acceso premium pensado para realtors
            y agentes que quieren maximizar cada conexión.
          </p>
        </div>

        {/* Two-column tiers */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {/* FREE — Primary */}
          <div className="relative glass-strong rounded-2xl p-8 sm:p-10 border-2 border-gold-500/30 glow-gold animate-fade-in">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="px-6 py-2 bg-gold-500 text-navy-950 text-sm font-bold uppercase tracking-wider rounded-full shadow-lg shadow-gold-500/20 whitespace-nowrap">
                🎟️ Acceso Gratuito
              </span>
            </div>

            <div className="absolute -top-20 right-0 w-40 h-40 bg-gold-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="text-center mt-4 mb-8">
              <h3
                className="text-3xl sm:text-4xl font-bold text-gold-500 mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                ENTRADA FREE
              </h3>
              <div className="flex items-baseline justify-center gap-2">
                <span
                  className="text-6xl sm:text-7xl font-bold text-gold-500"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  $0
                </span>
                <span className="text-white/70 text-lg">USD</span>
              </div>
              <p className="text-white/60 text-sm mt-2">Sin costo. Sin letra pequeña.</p>
            </div>

            <div className="w-full h-px bg-gold-500/20 mb-8" />

            <div className="space-y-3 mb-8">
              {freeBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  {checkIconGold}
                  <span className="text-white/95 text-sm leading-relaxed">{b}</span>
                </div>
              ))}
            </div>

            <a
              href="#registro"
              className="block text-center w-full py-4 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 hover:scale-[1.01] active:scale-[0.99]"
            >
              Registrarme Gratis
            </a>
          </div>

          {/* PREMIUM AGENTE */}
          <div
            className="relative glass-strong rounded-2xl p-8 sm:p-10 border border-white/10 animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="px-6 py-2 bg-white text-navy-950 text-sm font-bold uppercase tracking-wider rounded-full shadow-lg whitespace-nowrap">
                💼 Brokers y Agentes Inmobiliarios
              </span>
            </div>

            <div className="text-center mt-4 mb-8">
              <h3
                className="text-3xl sm:text-4xl font-bold text-white mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                AGENTE PREMIUM
              </h3>
              <div className="flex items-baseline justify-center gap-2">
                <span
                  className="text-6xl sm:text-7xl font-bold text-white"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  $599
                </span>
                <span className="text-white/70 text-lg">USD</span>
              </div>
              <p className="text-white/60 text-sm mt-2">Por país (1 destino)</p>

              {/* Launch promo */}
              <div className="mt-4 inline-flex flex-col items-center gap-1 px-5 py-3 bg-gold-500/10 border border-gold-500/40 rounded-xl">
                <span className="text-gold-500 text-[10px] uppercase tracking-[0.2em] font-bold">
                  🔥 Precio Especial Lanzamiento
                </span>
                <span
                  className="text-2xl font-bold text-gold-500"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  $1,000 USD · 2 países
                </span>
                <span className="text-white/70 text-xs">Rep. Dominicana 🇩🇴 + México 🇲🇽</span>
              </div>
            </div>

            <div className="w-full h-px bg-white/10 mb-8" />

            <div className="space-y-3 mb-8">
              {premiumBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  {checkIconGold}
                  <span className="text-white/95 text-sm leading-relaxed">{b}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/13053050880?text=Hola%20Claudia%2C%20quiero%20información%20sobre%20el%20acceso%20Agente%20Premium%20de%20%24599%20USD"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full py-4 bg-white text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-400 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
            >
              Hablar con Claudia
            </a>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-gold-500 text-sm mt-10 italic animate-fade-in">
          El acceso incluye ambos destinos: Punta Cana, RD (15 & 16 Junio) y Cancún, México (18 & 19 Junio)
        </p>
      </div>
    </section>
  );
}
