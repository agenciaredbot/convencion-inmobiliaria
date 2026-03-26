"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      <span className="text-xs sm:text-sm text-white/95 mt-2 uppercase tracking-widest font-medium">
        {label}
      </span>
    </div>
  );
}

/* Floating particle dots */
function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gold-500/20"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const countdown = useCountdown(new Date("2026-04-22T09:00:00-05:00"));

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-navy-radial" />
      <div className="absolute inset-0 noise" />
      <Particles />

      {/* Decorative geometric shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 border border-gold-500/10 rounded-full blur-sm" />
      <div className="absolute bottom-20 left-10 w-96 h-96 border border-gold-500/5 rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-1 h-32 bg-gradient-to-b from-gold-500/20 to-transparent rotate-12" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 pb-16"
      >
        {/* Tagline chip */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-gold text-gold-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            Invierte · Acciona · Crece
          </span>
        </motion.div>

        {/* Main logo */}
        <motion.div variants={itemVariants} className="mb-6">
          <img
            src="/images/logo-oficial.png"
            alt="Convención Inmobiliaria 2026"
            className="h-32 sm:h-44 lg:h-56 mx-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Conecta con los más grandes inversionistas internacionales.
          <br className="hidden sm:block" />
          Presenta y vende tu proyecto inmobiliario.
        </motion.p>

        {/* Date & Location badges */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="glass rounded-lg px-5 py-3 flex items-center gap-3">
            <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="text-left">
              <p className="text-xs text-white/95 uppercase tracking-wider">Abril 22</p>
              <p className="text-sm font-semibold text-white">Barranquilla — Hotel Estelar</p>
            </div>
          </div>
          <div className="glass rounded-lg px-5 py-3 flex items-center gap-3">
            <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="text-left">
              <p className="text-xs text-white/95 uppercase tracking-wider">Abril 24</p>
              <p className="text-sm font-semibold text-white">Medellín — Hotel Estelar</p>
            </div>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-white/95 mb-5 font-medium">
            El evento comienza en
          </p>
          <div className="flex justify-center gap-4 sm:gap-6">
            <CountdownUnit value={countdown.days} label="Días" />
            <CountdownUnit value={countdown.hours} label="Horas" />
            <CountdownUnit value={countdown.minutes} label="Min" />
            <CountdownUnit value={countdown.seconds} label="Seg" />
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#registro"
            className="group relative px-8 py-4 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/30 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="relative z-10">Deseo Asistir al Evento</span>
            <div className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="/sponsors"
            className="px-8 py-4 bg-gold-500 text-navy-950 font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-gold-400 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] animate-sponsor-pulse"
          >
            Quiero Ser Sponsor
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-2.5 rounded-full bg-gold-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
