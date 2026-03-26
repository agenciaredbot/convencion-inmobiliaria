"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { id: 1, src: "/images/carousel/evento-1.jpg", alt: "Convención Inmobiliaria — Evento 1" },
  { id: 2, src: "/images/carousel/evento-2.jpg", alt: "Convención Inmobiliaria — Evento 2" },
  { id: 3, src: "/images/carousel/evento-3.jpg", alt: "Convención Inmobiliaria — Evento 3" },
  { id: 4, src: "/images/carousel/evento-4.jpg", alt: "Convención Inmobiliaria — Evento 4" },
  { id: 5, src: "/images/carousel/evento-5.jpeg", alt: "Convención Inmobiliaria — Evento 5" },
  { id: 6, src: "/images/carousel/evento-5b.jpg", alt: "Convención Inmobiliaria — Evento 5b" },
  { id: 7, src: "/images/carousel/evento-6.jpeg", alt: "Convención Inmobiliaria — Evento 6" },
  { id: 8, src: "/images/carousel/evento-7.jpeg", alt: "Convención Inmobiliaria — Evento 7" },
  { id: 9, src: "/images/carousel/evento-8.jpeg", alt: "Convención Inmobiliaria — Evento 8" },
  { id: 10, src: "/images/carousel/evento-9.jpeg", alt: "Convención Inmobiliaria — Evento 9" },
  { id: 11, src: "/images/carousel/evento-10.jpeg", alt: "Convención Inmobiliaria — Evento 10" },
  { id: 12, src: "/images/carousel/evento-11.jpeg", alt: "Convención Inmobiliaria — Evento 11" },
  { id: 13, src: "/images/carousel/evento-12.jpeg", alt: "Convención Inmobiliaria — Evento 12" },
];

export default function EventCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 600 : -600, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -600 : 600, opacity: 0, scale: 0.95 }),
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 noise" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold-500 text-xs uppercase tracking-[0.3em] font-semibold">
            Revive la Experiencia
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            EVENTOS <span className="text-gold-500">ANTERIORES</span>
          </h2>
          <div className="w-16 h-1 bg-gold-500 rounded-full mx-auto" />
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Main slide */}
          <div className="relative aspect-[16/9] sm:aspect-[2.2/1] rounded-2xl overflow-hidden glass-strong glow-gold">
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={slides[current].id}
                src={slides[current].src}
                alt={slides[current].alt}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent pointer-events-none" />
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold-500/40 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold-500/40 pointer-events-none" />

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-gold-500 hover:bg-white/10 transition-all z-20"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-gold-500 hover:bg-white/10 transition-all z-20"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-1.5 z-20">
              <span className="text-white/95 text-xs font-medium">
                {current + 1} / {slides.length}
              </span>
            </div>
          </div>

          {/* Dot indicators (mobile-friendly) */}
          <div className="flex gap-1.5 mt-4 justify-center flex-wrap">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`shrink-0 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 h-2.5 bg-gold-500 shadow-lg shadow-gold-500/30"
                    : "w-2.5 h-2.5 bg-white/25 hover:bg-white/50"
                }`}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
