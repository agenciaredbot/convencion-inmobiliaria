const highlights = [
  "Evento más reconocido en Estados Unidos por su trayectoria",
  "La mayoría de asistentes salen con negocios cerrados",
  "Figuras como Jurguen Klaric y Vicente Passariello han confiado en nosotros",
  "Expansión internacional: Estados Unidos, Colombia, México, Dubái, República Dominicana y Panamá",
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
        preload="none"
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
          <div className="animate-fade-in">
            <div className="relative aspect-video rounded-2xl overflow-hidden glass-strong glow-gold group">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="none"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/images/video-evento.mp4" type="video/mp4" />
              </video>
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-500/30 rounded-tl-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold-500/30 rounded-br-2xl pointer-events-none" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-fade-in">
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

            <p className="text-white/95 leading-relaxed mb-8">
              La Convención Inmobiliaria es tu oportunidad para conectar con los
              más grandes inversionistas internacionales y con grandes empresas
              para presentar y vender tu proyecto en mercados sólidos como USA, RD, MX, DU, COL.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 animate-fade-in"
                >
                  <div className="mt-1 w-2 h-2 rounded-full bg-gold-500 shrink-0" />
                  <p className="text-white/95 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <a
              href="/sponsors"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-400 transition-all duration-300 animate-sponsor-pulse"
            >
              Quiero Ser Sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
