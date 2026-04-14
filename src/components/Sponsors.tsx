export default function Sponsors() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
            Confían en nosotros
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-12"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            MARCAS QUE YA <span className="text-gold-500">NOS HAN ACOMPAÑADO</span>
          </h2>
        </div>

        {/* Sponsors logos image */}
        <div className="glass rounded-2xl p-6 sm:p-10 gradient-border animate-fade-in">
          <img
            src="/images/MARCAS-ALIADAS.jpeg"
            alt="Marcas aliadas de Convención Inmobiliaria 2026"
            width={1200}
            height={400}
            loading="lazy"
            className="w-full h-auto rounded-xl"
          />
        </div>

        <div className="mt-10 animate-fade-in">
          <a
            href="/sponsors"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 hover:scale-[1.02] animate-sponsor-pulse"
          >
            Quiero Ser Sponsor
          </a>
        </div>
      </div>
    </section>
  );
}
