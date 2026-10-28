"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Calculator, ArrowRight, Zap, Target, TrendingUp, Sparkles } from "lucide-react";
import { sounds } from "./AudioEngine";

interface EloCalculatorProps {
  onOpenCheckout: (planName: string) => void;
}

const ranks = [
  { id: "iron", name: "Ferro", tierScore: 1, color: "text-zinc-400", bg: "bg-zinc-800" },
  { id: "bronze", name: "Bronze", tierScore: 2, color: "text-amber-700", bg: "bg-amber-950/40" },
  { id: "silver", name: "Prata", tierScore: 3, color: "text-slate-300", bg: "bg-slate-700/40" },
  { id: "gold", name: "Ouro", tierScore: 4, color: "text-yellow-400", bg: "bg-yellow-950/40" },
  { id: "plat", name: "Platina", tierScore: 5, color: "text-cyan-400", bg: "bg-cyan-950/40" },
  { id: "diamond", name: "Diamante", tierScore: 6, color: "text-purple-400", bg: "bg-purple-950/40" },
  { id: "ascendant", name: "Ascendente", tierScore: 7, color: "text-emerald-400", bg: "bg-emerald-950/40" },
  { id: "immortal", name: "Imortal", tierScore: 8, color: "text-rose-500", bg: "bg-rose-950/40" },
  { id: "radiant", name: "Radiante", tierScore: 9, color: "text-val-gold", bg: "bg-amber-500/20" },
];

export const EloCalculator: React.FC<EloCalculatorProps> = ({ onOpenCheckout }) => {
  const [currentRankIndex, setCurrentRankIndex] = useState(2); // Default Prata
  const [targetRankIndex, setTargetRankIndex] = useState(6); // Default Ascendente
  const [, setCalculated] = useState(false);

  const currentRank = ranks[currentRankIndex];
  const targetRank = ranks[targetRankIndex];

  const rankDiff = Math.max(1, targetRank.tierScore - currentRank.tierScore);

  // Projections
  const estimatedWeeks = Math.max(2, rankDiff * 1.8).toFixed(0);
  const hsCurrent = (12 + currentRank.tierScore * 2.5).toFixed(1);
  const hsTarget = Math.min(48, 18 + targetRank.tierScore * 3.4).toFixed(1);
  const winRateTarget = (58 + rankDiff * 2.2).toFixed(1);

  // Recommended Plan
  const recommendedPlan =
    targetRank.tierScore >= 8
      ? "Coaching 1-on-1 VIP"
      : currentRank.tierScore >= 5
      ? "Academy Pro"
      : "Protocolo Iniciação";

  const handleCalculate = () => {
    sounds.playRadiant();
    setCalculated(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#FF4655", "#00F0FF", "#F5C042"],
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <section id="calculadora" className="py-24 bg-val-black relative border-y border-val-border/60">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-val-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-val-card border border-val-cyan/40 text-val-cyan text-xs font-bold tracking-widest uppercase rounded-sm mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>{"// SIMULADOR DE PROGRESSÃO TÁTICA"}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-val-offwhite leading-tight">
            CALCULE SEU POTENCIAL DE <span className="text-val-cyan text-glow-cyan">EVOLUÇÃO DE ELO</span>
          </h2>
          <p className="text-val-offwhite/70 font-tactical text-base sm:text-lg mt-3">
            Descubra exatamente quantas semanas e qual a rotina ideal para sair do seu elo atual e alcançar o topo da tabela sem perder sanidade mental.
          </p>
        </div>

        {/* Interactive Calculator Body */}
        <div className="bg-val-card border border-val-border p-6 sm:p-10 rounded-sm clip-tactical shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            
            {/* Step 1: Select Current Rank */}
            <div>
              <label className="block text-xs font-tactical font-bold text-val-gray uppercase tracking-widest mb-3">
                1. QUAL O SEU ELO ATUAL NO VALORANT?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {ranks.slice(0, 8).map((rank, index) => (
                  <button
                    key={rank.id}
                    onClick={() => {
                      sounds.playHover();
                      setCurrentRankIndex(index);
                      if (index >= targetRankIndex) {
                        setTargetRankIndex(Math.min(ranks.length - 1, index + 2));
                      }
                    }}
                    className={`p-3 border rounded-xs font-tactical font-bold text-sm tracking-wider uppercase transition-all flex flex-col items-center justify-center gap-1 ${
                      currentRankIndex === index
                        ? "border-val-red bg-val-red/15 text-val-offwhite shadow-md shadow-val-red/20"
                        : "border-val-border bg-val-dark/70 text-val-gray hover:text-val-offwhite hover:border-val-slate"
                    }`}
                  >
                    <span className={`text-xs ${rank.color}`}>{rank.name}</span>
                    <span className="text-[10px] text-val-gray/70">Atual</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Target Rank */}
            <div>
              <label className="block text-xs font-tactical font-bold text-val-cyan uppercase tracking-widest mb-3">
                2. QUAL ELO VOCÊ QUER ALCANÇAR?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {ranks.slice(1).map((rank, index) => {
                  const actualIndex = index + 1;
                  const isAvailable = actualIndex > currentRankIndex;
                  return (
                    <button
                      key={rank.id}
                      disabled={!isAvailable}
                      onClick={() => {
                        sounds.playHover();
                        setTargetRankIndex(actualIndex);
                      }}
                      className={`p-3 border rounded-xs font-tactical font-bold text-sm tracking-wider uppercase transition-all flex flex-col items-center justify-center gap-1 ${
                        targetRankIndex === actualIndex
                          ? "border-val-cyan bg-val-cyan/15 text-val-offwhite shadow-md shadow-val-cyan/20"
                          : !isAvailable
                          ? "opacity-30 border-val-border/40 bg-val-dark/30 text-val-gray cursor-not-allowed"
                          : "border-val-border bg-val-dark/70 text-val-gray hover:text-val-offwhite hover:border-val-slate"
                      }`}
                    >
                      <span className={`text-xs ${rank.color}`}>{rank.name}</span>
                      <span className="text-[10px] text-val-gray/70">Objetivo</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Action Button */}
          <div className="text-center mb-8">
            <button
              onClick={handleCalculate}
              onMouseEnter={() => sounds.playHover()}
              className="px-10 py-4 bg-val-cyan hover:bg-cyan-400 text-val-black font-tactical text-base font-bold tracking-widest uppercase clip-button shadow-lg shadow-val-cyan/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-3"
            >
              <Zap className="w-5 h-5 text-val-black" />
              <span>GERAR DIAGNÓSTICO PERSONALIZADO</span>
            </button>
          </div>

          {/* Results Box */}
          <div className="bg-val-dark/95 border-2 border-val-border/80 p-6 sm:p-8 rounded-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-val-border/60 pb-6 mb-6">
              <div>
                <span className="text-[11px] font-mono text-val-cyan tracking-widest uppercase block mb-1">
                  {"// RESULTADO DA PROJEÇÃO"}
                </span>
                <div className="flex items-center gap-3">
                  <span className={`font-display text-3xl font-bold ${currentRank.color}`}>
                    {currentRank.name.toUpperCase()}
                  </span>
                  <ArrowRight className="w-6 h-6 text-val-red animate-pulse" />
                  <span className={`font-display text-4xl font-bold ${targetRank.color} text-glow-cyan`}>
                    {targetRank.name.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Time to Reach */}
              <div className="flex items-center gap-4 bg-val-card px-4 py-3 border border-val-border rounded-xs">
                <div>
                  <span className="text-[10px] font-tactical text-val-gray uppercase tracking-wider block">
                    Tempo Estimado com Método
                  </span>
                  <span className="font-display text-2xl font-bold text-val-gold">
                    ~{estimatedWeeks} Semanas
                  </span>
                </div>
                <div className="text-right border-l border-val-border/60 pl-4">
                  <span className="text-[10px] font-tactical text-val-gray uppercase tracking-wider block">
                    Tempo Médio Solo Queue
                  </span>
                  <span className="font-display text-2xl font-bold text-val-red line-through">
                    +8 Meses
                  </span>
                </div>
              </div>
            </div>

            {/* Diagnostic Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-val-card/60 border border-val-border rounded-xs">
                <div className="flex items-center gap-2 text-val-cyan mb-1">
                  <Target className="w-4 h-4" />
                  <span className="text-xs font-tactical font-bold uppercase">Headshot % Projetado</span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-sm text-val-gray line-through">{hsCurrent}%</span>
                  <span className="font-display text-3xl font-bold text-val-cyan">+{hsTarget}%</span>
                </div>
                <p className="text-[11px] text-val-gray mt-1">
                  Correção de alinhamento em ângulos pré-definidos de mira.
                </p>
              </div>

              <div className="p-4 bg-val-card/60 border border-val-border rounded-xs">
                <div className="flex items-center gap-2 text-val-emerald mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs font-tactical font-bold uppercase">Win Rate Esperado</span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-display text-3xl font-bold text-val-emerald">{winRateTarget}%</span>
                  <span className="text-xs text-val-emerald font-bold font-mono">+16% Acima da Média</span>
                </div>
                <p className="text-[11px] text-val-gray mt-1">
                  Domínio de timings de rotação e isolamento de duelos 1v1.
                </p>
              </div>

              <div className="p-4 bg-val-card/60 border border-val-border rounded-xs">
                <div className="flex items-center gap-2 text-val-gold mb-1">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs font-tactical font-bold uppercase">Rotina Diária Otimizada</span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-display text-3xl font-bold text-val-gold">25 Min / dia</span>
                </div>
                <p className="text-[11px] text-val-gray mt-1">
                  Exercícios biomecânicos específicos em vez de 5h de ranked desregrada.
                </p>
              </div>
            </div>

            {/* Direct Recommendation Footer */}
            <div className="bg-val-red/10 border border-val-red/40 p-4 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-val-red flex items-center justify-center clip-button shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-tactical font-bold text-val-red uppercase tracking-wider block">
                    PLANO RECOMENDADO PARA SUA TRANSIÇÃO:
                  </span>
                  <span className="font-display text-xl font-bold text-val-offwhite">
                    {recommendedPlan.toUpperCase()}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  sounds.playSpike();
                  onOpenCheckout(recommendedPlan);
                }}
                onMouseEnter={() => sounds.playHover()}
                className="px-6 py-3 bg-val-red hover:bg-val-red-dark text-white font-tactical text-sm font-bold tracking-widest uppercase clip-button flex items-center justify-center gap-2 shadow-md shadow-val-red/30 transition-all"
              >
                <span>VER DETALHES DO PLANO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
