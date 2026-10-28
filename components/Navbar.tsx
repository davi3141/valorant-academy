"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Menu, X, Shield, Crosshair, Sparkles } from "lucide-react";
import { sounds } from "./AudioEngine";

interface NavbarProps {
  onOpenCheckout: (planName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    sounds.enabled = newState;
    if (newState) sounds.playClick();
  };

  const navLinks = [
    { label: "METODOLOGIA", href: "#metodologia" },
    { label: "CALCULADORA DE ELO", href: "#calculadora" },
    { label: "CURSOS & AULAS", href: "#cursos" },
    { label: "COACHES", href: "#coaches" },
    { label: "PLANOS & LOJA", href: "#planos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-val-dark/95 backdrop-blur-md border-b border-val-border/60 py-3 shadow-2xl"
          : "bg-transparent border-b border-white/5 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          onMouseEnter={() => sounds.playHover()}
          onClick={() => sounds.playClick()}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 bg-val-red flex items-center justify-center clip-button transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-val-red/30">
            <Crosshair className="w-6 h-6 text-white stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-val-offwhite leading-none">
                PROTOCOLO<span className="text-val-red">.RADIANTE</span>
              </span>
              <span className="hidden sm:inline-block text-[10px] font-bold tracking-widest uppercase bg-val-red/20 text-val-red border border-val-red/40 px-1.5 py-0.5 rounded-sm">
                VCT READY
              </span>
            </div>
            <p className="text-[10px] tracking-[0.25em] text-val-gray uppercase font-semibold font-tactical">
              {"// VALORANT TACTICAL ACADEMY"}
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => sounds.playHover()}
              className="text-xs uppercase font-bold tracking-widest text-val-offwhite/80 hover:text-val-red transition-colors relative py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-val-red transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? "Desativar efeitos de som" : "Ativar efeitos de som"}
            className="p-2 border border-val-border bg-val-card hover:border-val-red transition-all text-val-offwhite/80 hover:text-val-red rounded-sm"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-val-cyan" />
            ) : (
              <VolumeX className="w-4 h-4 text-val-gray" />
            )}
          </button>

          {/* Online Recrutamento Badge */}
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 bg-val-card border border-val-emerald/30 rounded-sm text-[11px] font-semibold text-val-emerald">
            <span className="w-2 h-2 rounded-full bg-val-emerald animate-ping" />
            <span>VAGAS 1v1 ABERTAS</span>
          </div>

          {/* Primary CTA */}
          <button
            onClick={() => {
              sounds.playSpike();
              onOpenCheckout("Academy Pro");
            }}
            onMouseEnter={() => sounds.playHover()}
            className="relative px-5 py-2.5 bg-val-red hover:bg-val-red-dark text-white font-tactical text-sm font-bold tracking-widest uppercase clip-button shadow-lg shadow-val-red/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
          >
            <Shield className="w-4 h-4 text-white" />
            <span>ENTRAR NO PROTOCOLO</span>
            <div className="absolute inset-0 border border-white/20 pointer-events-none" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => {
              sounds.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 text-val-offwhite hover:text-val-red"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-val-card/98 border-b border-val-border px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  sounds.playClick();
                  setMobileMenuOpen(false);
                }}
                className="text-sm font-bold tracking-widest text-val-offwhite hover:text-val-red border-b border-val-border/40 pb-2"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                sounds.playSpike();
                setMobileMenuOpen(false);
                onOpenCheckout("Academy Pro");
              }}
              className="mt-3 w-full py-3 bg-val-red text-white font-tactical text-sm font-bold tracking-widest uppercase clip-button flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>GARANTIR VAGA AGORA</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
