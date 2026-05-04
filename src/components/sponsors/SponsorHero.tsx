"use client";

import { useEffect, useState } from "react";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return timeLeft;
}

export default function SponsorHero() {
  const countdown = useCountdown(new Date("2026-05-25T09:00:00-04:00"));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-navy-800)_0%,_var(--color-navy-950)_60%,_#000_100%)]" />

      {/* Gold accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-500/3 rounded-full blur-[120px]" />

      <div className="absolute inset-0 noise" />

      <div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Exclusive badge */}
        <div className="mb-8 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-gold-400 text-xs uppercase tracking-[0.25em] font-semibold">
              Oportunidad Exclusiva para Sponsors
            </span>
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
          </span>
        </div>

        {/* Headline */}
        <div className="animate-fade-in">
          <h1 className="leading-[0.9] mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-white">
              POSICIONA TU
            </span>
            <span className="block text-6xl sm:text-8xl lg:text-9xl text-gold-500">
              MARCA
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-white/95">
              ANTE INVERSIONISTAS GLOBALES
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-8 animate-fade-in">
          <p className="text-white/95 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Conecta tu empresa con los principales actores del mercado inmobiliario
            internacional. Espacios limitados para máximo impacto y exclusividad.
          </p>
        </div>

        {/* Event badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in">
          <div className="glass rounded-lg px-5 py-3 flex items-center gap-3 border border-gold-500/10">
            <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="text-left">
              <p className="text-xs text-white/95 uppercase tracking-wider">25 & 26 de Mayo</p>
              <p className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="text-2xl leading-none">🇩🇴</span>
                Punta Cana, Rep. Dominicana
              </p>
            </div>
          </div>
          <div className="glass rounded-lg px-5 py-3 flex items-center gap-3 border border-gold-500/10">
            <svg className="w-5 h-5 text-gold-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="text-left">
              <p className="text-xs text-white/95 uppercase tracking-wider">28 & 29 de Mayo</p>
              <p className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="text-2xl leading-none">🇲🇽</span>
                Cancún, México
              </p>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-12 animate-fade-in">
          <p className="text-xs uppercase tracking-[0.3em] text-white/95 mb-5 font-medium">
            Asegura tu espacio antes de
          </p>
          <div className="flex justify-center gap-4 sm:gap-6">
            {[
              { value: countdown.days, label: "Días" },
              { value: countdown.hours, label: "Horas" },
              { value: countdown.minutes, label: "Min" },
              { value: countdown.seconds, label: "Seg" },
            ].map((unit) => (
              <div key={unit.label} className="flex flex-col items-center">
                <div className="glass-strong rounded-xl w-18 h-18 sm:w-22 sm:h-22 flex items-center justify-center border border-gold-500/20">
                  <span
                    className="text-3xl sm:text-4xl font-bold text-gold-500"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {String(unit.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs text-white/95 mt-2 uppercase tracking-widest font-medium">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <a
            href="#paquetes"
            className="group px-8 py-4 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            Ver Paquetes de Sponsor
          </a>
          <a
            href="#registro-sponsor"
            className="px-8 py-4 glass border border-gold-500/20 text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-white/[0.06] transition-all duration-300 hover:border-gold-500/40"
          >
            Solicitar Información
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-gold-500/60" />
        </div>
      </div>
    </section>
  );
}
