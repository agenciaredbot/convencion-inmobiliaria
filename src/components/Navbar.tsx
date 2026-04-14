"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Speakers", href: "#speakers" },
  { label: "Agenda", href: "#agenda" },
  { label: "Paquetes", href: "#paquetes" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    {/* Red free-entry banner */}
    <div className="fixed top-0 left-0 right-0 z-[60] bg-red-600 text-white text-center py-2.5 shadow-lg">
      <a href="#registro" className="flex items-center justify-center gap-2">
        <span className="text-lg">🎟️</span>
        <span className="font-bold text-sm sm:text-base uppercase tracking-wider">
          ENTRADA 100% GRATIS — Regístrate Ahora
        </span>
        <span className="text-lg">🎟️</span>
      </a>
    </div>

    <nav
      className={`fixed top-[42px] left-0 right-0 z-50 transition-all duration-500 animate-slide-down ${
        scrolled
          ? "bg-navy-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center group">
          <img
            src="/images/logo-oficial.png"
            alt="Convención Inmobiliaria 2026"
            width={200}
            height={56}
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-white/95 hover:text-white transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold-500 group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
          <a
            href="#registro"
            className="ml-4 px-6 py-2.5 bg-gold-500 text-navy-950 font-bold text-sm rounded-lg hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            RESERVA TU ESPACIO
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-white block transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
          <span className={`w-6 h-0.5 bg-white block transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white block transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-navy-950/95 backdrop-blur-xl border-t border-white/5 overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/95 hover:text-gold-500 text-lg font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#registro"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-6 py-3 bg-gold-500 text-navy-950 font-bold text-center rounded-lg"
          >
            RESERVA TU ESPACIO
          </a>
        </div>
      </div>
    </nav>
    </>
  );
}
