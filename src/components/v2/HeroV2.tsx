"use client";

import { useEffect, useMemo, useState } from "react";

function useCountdown(targetMs: number) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = targetMs - Date.now();
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
  }, [targetMs]);
  return timeLeft;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass-strong rounded-xl w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center glow-gold">
        <span
          className="text-3xl sm:text-5xl font-bold text-gold-500"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs sm:text-sm text-white/80 mt-2 uppercase tracking-widest font-medium">
        {label}
      </span>
    </div>
  );
}

export default function HeroV2() {
  const targetMs = useMemo(() => new Date("2026-04-22T09:00:00-05:00").getTime(), []);
  const countdown = useCountdown(targetMs);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/miami-bg.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-950/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/40 to-navy-950/80" />
      <div className="absolute inset-0 noise" />

      {/* Decorative accent */}
      <div className="absolute top-1/4 left-0 w-1 h-48 bg-gradient-to-b from-transparent via-gold-500/40 to-transparent" />
      <div className="absolute top-1/3 right-0 w-1 h-48 bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 pb-16">
        {/* Eyebrow chip */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-gold text-gold-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            Invertir en el Exterior — ¡Sí es Posible!
          </span>
        </div>

        {/* Logo */}
        <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.45s", animationFillMode: "both" }}>
          <img
            src="/images/logo-oficial.png"
            alt="Convención Inmobiliaria 2026"
            width={400}
            height={200}
            className="h-32 sm:h-44 lg:h-56 mx-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Main headline */}
        <div className="mb-4 animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-3"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            CONECTA CON LOS MEJORES<br />
            <span className="text-gold-500">PROYECTOS INTERNACIONALES</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.75s", animationFillMode: "both" }}
        >
          Propiedades en dólares en Colombia, Miami, República Dominicana y México.
          Un día para transformar tu patrimonio.
        </p>

        {/* Date badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in" style={{ animationDelay: "0.9s", animationFillMode: "both" }}>
          <div className="glass rounded-lg px-5 py-3 flex items-center gap-3">
            <span className="text-gold-500">📅</span>
            <div className="text-left">
              <p className="text-xs text-white/70 uppercase tracking-wider">25 & 26 de Mayo</p>
              <p className="text-sm font-semibold text-white">🇩🇴 Punta Cana, Rep. Dominicana</p>
            </div>
          </div>
          <div className="glass rounded-lg px-5 py-3 flex items-center gap-3">
            <span className="text-gold-500">📅</span>
            <div className="text-left">
              <p className="text-xs text-white/70 uppercase tracking-wider">28 & 29 de Mayo</p>
              <p className="text-sm font-semibold text-white">🇲🇽 Cancún, México</p>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: "1.05s", animationFillMode: "both" }}>
          <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-5 font-medium">
            El evento comienza en
          </p>
          <div className="flex justify-center gap-4 sm:gap-6">
            <CountdownUnit value={countdown.days} label="Días" />
            <CountdownUnit value={countdown.hours} label="Horas" />
            <CountdownUnit value={countdown.minutes} label="Min" />
            <CountdownUnit value={countdown.seconds} label="Seg" />
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "1.2s", animationFillMode: "both" }}>
          <a
            href="#registro"
            className="group relative px-8 py-4 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/30 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="relative z-10">Asistir Gratis — Regístrate Ahora</span>
            <div className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#agenda"
            className="px-8 py-4 glass border border-gold-500/40 text-gold-500 font-bold text-sm uppercase tracking-wider rounded-xl hover:border-gold-500/70 transition-all duration-300"
          >
            Ver Agenda
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "2s", animationFillMode: "both" }}>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5 animate-bounce">
            <div className="w-1 h-2.5 rounded-full bg-gold-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
