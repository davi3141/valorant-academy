"use client";

import React, { useState } from "react";
import { ArrowRight, Crosshair, Sparkles, CheckCircle2, Flame, Award } from "lucide-react";
import { sounds } from "./AudioEngine";

interface HeroProps {
  onOpenCheckout: (planName?: string) => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout, onScrollToCalculator }) => {
  const [selectedAgent, setSelectedAgent] = useState<"jett" | "reyna" | "sova" | "omen">("jett");

  const agentData = {
    jett: {
      name: "JETT // DUELIST",
      role: "Entry Fragger & Space Creator",
      headshot: "44.2%",
      winrate: "71.3%",
      rank: "RADIANTE #24",
      highlight: "Deadzoning & Dash Angulation",
      quote: "Aprenda a abrir bomb sem depender de flash e garantir o primeiro abate em 9 de 10 rounds.",
      badgeColor: "from-val-cyan/20 to-transparent text-val-cyan border-val-cyan/40",
      accent: "text-val-cyan",
    },
    reyna: {
      name: "REYNA // DUELIST",
      role: "Solo Carry & 1v1 Isolation",
      headshot: "48.1%",
      winrate: "68.9%",
      rank: "RADIANTE #57",
      highlight: "Micro-Flick & Overheal Timing",
      quote: "Isole cada duelo 1v1 no timing exato para transformar rounds perdidos em clutch 1v3.",
      badgeColor: "from-purple-500/20 to-transparent text-purple-400 border-purple-500/40",
      accent: "text-purple-400",
    },
    sova: {
      name: "SOVA // INITIATOR",
      role: "Info Gathering & Post-Plant Lineups",
      headshot: "39.5%",
      winrate: "74.0%",
      rank: "RADIANTE #12",
      highlight: "Double Shock Dart & Drone Pathing",
      quote: "Lineups cirúrgicas que limpam posições fechadas e garantem o defuse sem você se expor.",
      badgeColor: "from-blue-500/20 to-transparent text-blue-400 border-blue-500/40",
      accent: "text-blue-400",
    },
    omen: {
      name: "OMEN // CONTROLLER",
      role: "Map Control & Lurk Execution",
      headshot: "41.0%",
      winrate: "72.4%",
      rank: "RADIANTE #31",
      highlight: "One-Way Smokes & Paranoia Angles",
      quote: "Cegue a visão do time inimigo e vença rounds na inteligência e timing de rotação.",
      badgeColor: "from-val-red/20 to-transparent text-val-red border-val-red/40",
      accent: "text-val-red",
    },
  };

  const current = agentData[selectedAgent];

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-tactical-grid">
      {/* Radiant Glow Spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-val-red/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-val-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: High-converting Gamer Copywriting */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tactical Protocol Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-val-card border border-val-red/50 text-val-red text-xs font-bold tracking-widest uppercase rounded-sm mb-6 shadow-sm">
              <span className="w-2 h-2 bg-val-red rounded-full animate-pulse" />
              <span>{"// PROTOCOLO RADIANTE: EDITAL 2026 // TOP 100 BR"}</span>
            </div>

            {/* Powerful Main Headline */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-val-offwhite leading-[0.95] mb-6">
              PARE DE SER O <span className="text-val-red text-glow-red">HARDSTUCK</span> QUE DEPENDE DE TIME ALEATÓRIO.
            </h1>

            {/* Neuro-copy Subheadline */}
            <p className="text-base sm:text-lg text-val-offwhite/80 font-tactical font-medium leading-relaxed max-w-2xl mb-8">
              A diferença entre o seu elo e o <span className="text-val-gold font-bold">Radiante</span> não é a velocidade do reflexo — é a <span className="text-val-cyan font-bold">biomecânica da sua mira</span>, o pré-posicionamento preditivo e as chamadas de macro-jogo. Pare de perder horas em partidas frustrantes e treine como os profissionais.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => {
                  sounds.playSpike();
                  onOpenCheckout("Academy Pro");
                }}
                onMouseEnter={() => sounds.playHover()}
                className="px-8 py-4 bg-val-red hover:bg-val-red-dark text-white font-tactical text-base sm:text-lg font-bold tracking-widest uppercase clip-button shadow-xl shadow-val-red/30 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 group"
              >
                <span>QUERO SUBIR DE ELO AGORA</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  sounds.playClick();
                  onScrollToCalculator();
                }}
                onMouseEnter={() => sounds.playHover()}
                className="px-6 py-4 bg-val-card hover:bg-val-card-hover border border-val-border hover:border-val-cyan text-val-offwhite font-tactical text-base font-bold tracking-widest uppercase clip-button transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Crosshair className="w-4 h-4 text-val-cyan group-hover:rotate-45 transition-transform duration-300" />
                <span>CALCULAR MEU POTENCIAL</span>
              </button>
            </div>

            {/* Quick Guarantees & Social Proof Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-val-border/60 w-full">
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-bold text-val-red leading-none">
                  +4.870
                </span>
                <span className="text-[11px] font-tactical font-semibold text-val-gray uppercase tracking-wider mt-1">
                  Alunos Evoluídos
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-bold text-val-cyan leading-none">
                  94.2%
                </span>
                <span className="text-[11px] font-tactical font-semibold text-val-gray uppercase tracking-wider mt-1">
                  Taxa de Subida de Elo
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-bold text-val-gold leading-none">
                  14 DIAS
                </span>
                <span className="text-[11px] font-tactical font-semibold text-val-gray uppercase tracking-wider mt-1">
                  Garantia Sem Risco
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-bold text-val-emerald leading-none">
                  TOP 100
                </span>
                <span className="text-[11px] font-tactical font-semibold text-val-gray uppercase tracking-wider mt-1">
                  Coaches Radiantes
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Tactical Valorant HUD Card & Interactive Agent Simulation */}
          <div className="lg:col-span-5 relative">
            
            {/* Tactical Framed Card Container */}
            <div className="bg-val-card border-2 border-val-border rounded-sm p-5 sm:p-6 shadow-2xl relative clip-tactical group hover:border-val-red/60 transition-colors duration-500">
              
              {/* Corner framing indicators */}
              <div className="absolute top-2 left-2 text-[9px] font-mono text-val-gray tracking-widest">
                SYS.V4.REC // CLASSIFIED
              </div>
              <div className="absolute top-2 right-2 text-[9px] font-mono text-val-red tracking-widest animate-pulse">
                ● LIVE STATS
              </div>

              {/* Agent Selector Tabs */}
              <div className="flex items-center gap-1.5 mt-4 mb-5 border-b border-val-border/60 pb-3 overflow-x-auto">
                {(["jett", "reyna", "sova", "omen"] as const).map((agentKey) => (
                  <button
                    key={agentKey}
                    onClick={() => {
                      sounds.playHover();
                      setSelectedAgent(agentKey);
                    }}
                    className={`px-3 py-1 text-xs font-tactical font-bold uppercase tracking-wider rounded-xs transition-all ${
                      selectedAgent === agentKey
                        ? "bg-val-red text-white shadow-md shadow-val-red/30"
                        : "bg-val-dark/60 text-val-gray hover:text-val-offwhite hover:bg-val-slate"
                    }`}
                  >
                    {agentKey.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Agent Info & Rank Spotlight */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-val-offwhite leading-none">
                    {current.name}
                  </h3>
                  <p className="text-xs font-tactical text-val-gray font-semibold tracking-wide">
                    {current.role}
                  </p>
                </div>
                
                {/* Radiant Badge */}
                <div className="px-3 py-1 bg-gradient-to-r from-val-gold/20 to-val-gold/5 border border-val-gold/60 text-val-gold text-xs font-bold tracking-wider rounded-xs flex items-center gap-1.5 shadow-lg shadow-val-gold/10">
                  <Award className="w-3.5 h-3.5 text-val-gold" />
                  <span>{current.rank}</span>
                </div>
              </div>

              {/* Tactical Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-val-dark/90 p-3 border border-val-border rounded-xs">
                  <span className="text-[10px] font-tactical font-bold uppercase text-val-gray tracking-widest block">
                    Taxa de Headshot
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-display text-2xl font-bold text-val-cyan">
                      {current.headshot}
                    </span>
                    <span className="text-[10px] text-val-emerald font-bold font-mono">
                      TOP 0.1%
                    </span>
                  </div>
                  <div className="w-full bg-val-border h-1 mt-2 rounded-full overflow-hidden">
                    <div className="bg-val-cyan h-full w-[88%]" />
                  </div>
                </div>

                <div className="bg-val-dark/90 p-3 border border-val-border rounded-xs">
                  <span className="text-[10px] font-tactical font-bold uppercase text-val-gray tracking-widest block">
                    Win Rate Competitivo
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-display text-2xl font-bold text-val-gold">
                      {current.winrate}
                    </span>
                    <span className="text-[10px] text-val-emerald font-bold font-mono">
                      +18.4% MÉDIA
                    </span>
                  </div>
                  <div className="w-full bg-val-border h-1 mt-2 rounded-full overflow-hidden">
                    <div className="bg-val-gold h-full w-[75%]" />
                  </div>
                </div>
              </div>

              {/* Dynamic Tactical Tip */}
              <div className="bg-val-slate/50 border border-val-border p-3.5 rounded-xs mb-5">
                <div className="flex items-center gap-2 text-xs font-bold font-tactical text-val-red mb-1">
                  <Flame className="w-3.5 h-3.5" />
                  <span>FOCO TÁTICO: {current.highlight}</span>
                </div>
                <p className="text-xs text-val-offwhite/90 leading-relaxed font-sans">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </div>

              {/* Interactive Module Highlight */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs text-val-offwhite/80 py-1 border-b border-val-border/40">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-val-emerald" />
                    Rotina Personalizada no Aim Labs
                  </span>
                  <span className="font-mono text-[10px] text-val-emerald">INCLUÍDO</span>
                </div>
                <div className="flex items-center justify-between text-xs text-val-offwhite/80 py-1 border-b border-val-border/40">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-val-emerald" />
                    VOD Review Cirúrgico de Duelos
                  </span>
                  <span className="font-mono text-[10px] text-val-emerald">1-ON-1</span>
                </div>
                <div className="flex items-center justify-between text-xs text-val-offwhite/80 py-1">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-val-emerald" />
                    50+ Lineups de Post-Plant e Retake
                  </span>
                  <span className="font-mono text-[10px] text-val-emerald">VCT PACK</span>
                </div>
              </div>

              {/* Direct Booking on Card */}
              <button
                onClick={() => {
                  sounds.playSpike();
                  onOpenCheckout("Academy Pro");
                }}
                onMouseEnter={() => sounds.playHover()}
                className="w-full py-3 bg-val-red/90 hover:bg-val-red text-white font-tactical font-bold text-xs uppercase tracking-widest clip-button flex items-center justify-center gap-2 transition-all shadow-md shadow-val-red/20"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>LIBERAR ACESSO À METODOLOGIA</span>
              </button>

              {/* Card Footer Micro-copy */}
              <div className="flex items-center justify-between mt-3 text-[10px] font-mono text-val-gray">
                <span>COORD: 35.6762° N // 139.6503° E</span>
                <span>STATUS: PRONTO PARA COMBATE</span>
              </div>
            </div>

            {/* Glowing Accent Dot */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-val-red/20 rounded-full blur-xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
