const destinations = [
  {
    country: "Rep. Dominicana",
    flag: "🇩🇴",
    city: "Punta Cana",
    days: [
      {
        date: "Lunes 25 de Mayo",
        type: "Visita de Proyectos",
        typeIcon: "🏗️",
        hours: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"],
        desc: "Recorridos guiados por proyectos internacionales en cuatro turnos. Conoce en persona las oportunidades de inversión disponibles en Punta Cana.",
      },
      {
        date: "Martes 26 de Mayo",
        type: "Evento Presencial",
        typeIcon: "🎯",
        hours: ["9:00 AM — 12:00 PM"],
        desc: "Presentaciones de proyectos, conferencias de expertos y networking con inversionistas internacionales.",
      },
    ],
  },
  {
    country: "México",
    flag: "🇲🇽",
    city: "Cancún",
    days: [
      {
        date: "Jueves 28 de Mayo",
        type: "Evento Presencial",
        typeIcon: "🎯",
        hours: ["9:00 AM — 2:00 PM"],
        desc: "Jornada completa de presentaciones, oportunidades de inversión y conexión directa con desarrolladores y compradores internacionales.",
      },
      {
        date: "Viernes 29 de Mayo",
        type: "Visita de Proyectos",
        typeIcon: "🏗️",
        hours: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"],
        desc: "Recorridos en cuatro turnos por los proyectos más exclusivos del Caribe Mexicano. Inversión en vivo, cara a cara.",
      },
    ],
  },
];

export default function Agenda() {
  return (
    <section id="agenda" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/networking-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-navy-950/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-transparent to-navy-950/70" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
            Programa del Evento
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-[0.95]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            AGENDA
          </h2>
          <div className="w-16 h-1 bg-gold-500 rounded-full mb-6" />
          <p className="text-white/80 max-w-xl leading-relaxed">
            Dos destinos del Caribe. Cuatro días de conexiones reales, proyectos en vivo
            y oportunidades de inversión internacional.
          </p>
        </div>

        {/* Destinations */}
        <div className="space-y-16">
          {destinations.map((dest, di) => (
            <div key={di} className="animate-fade-in">
              {/* Destination header */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl">{dest.flag}</span>
                <div>
                  <p className="text-gold-500 text-xs uppercase tracking-[0.25em] font-semibold mb-1">
                    {dest.country}
                  </p>
                  <h3
                    className="text-3xl sm:text-4xl font-bold text-white leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {dest.city}
                  </h3>
                </div>
                <div className="flex-1 h-px bg-gold-500/20 ml-4" />
              </div>

              {/* Days timeline */}
              <div className="relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-gold-500/60 via-gold-500/30 to-gold-500/60" />

                <div className="space-y-6">
                  {dest.days.map((day, di2) => (
                    <div key={di2} className="relative pl-12 group">
                      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-navy-950 border-2 border-gold-500 group-hover:bg-gold-500 transition-colors duration-300 z-10">
                        <div className="absolute inset-0 rounded-full bg-gold-500/20 scale-0 group-hover:scale-[2.5] transition-transform duration-500" />
                      </div>

                      <div className="glass rounded-xl p-6 sm:p-8 hover:bg-white/[0.06] transition-all duration-300 gradient-border group-hover:glow-gold">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-4">
                          <span className="text-3xl shrink-0">{day.typeIcon}</span>
                          <div>
                            <p className="text-gold-500 text-xs uppercase tracking-widest font-semibold mb-1">
                              {day.date}
                            </p>
                            <h4
                              className="text-white text-2xl sm:text-3xl font-bold leading-none"
                              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                            >
                              {day.type}
                            </h4>
                          </div>
                        </div>

                        <p className="text-white/75 text-sm leading-relaxed mb-4">
                          {day.desc}
                        </p>

                        {/* Hours */}
                        <div className="flex flex-wrap gap-2">
                          {day.hours.map((h, hi) => (
                            <span
                              key={hi}
                              className="text-xs px-3 py-1.5 glass-gold rounded-full text-gold-500 font-bold tracking-wider"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
