"use client";

import React from "react";
import { Star, TrendingUp, CheckCircle } from "lucide-react";

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Guilherme S. (ViperGhost)",
      discord: "guilherme#vct",
      before: "PRATA 2",
      after: "ASCENDENTE 1",
      days: "42 DIAS",
      hs: "+24.8% HEADSHOT",
      quote:
        "Eu passei quase 1 ano travado entre Prata 2 e Ouro 1 achando que era azar com time troll. Na primeira VOD review com o Coach V3XOR ele me mostrou que eu morria 7 vezes por partida simplesmente abrindo ângulo errado. Ajustei isso e a subida de elo foi inevitável.",
      role: "Aluno Academy Pro",
    },
    {
      name: "Lucas R. (JettGod)",
      discord: "lucas_fps#777",
      before: "OURO 3",
      after: "IMORTAL 2",
      days: "60 DIAS",
      hs: "43.2% HS ATUAL",
      quote:
        "A rotina de mira com deadzoning e micro-correção mudou completamente minha confiança. Antes eu hesitava na hora de entrar no bomb. Hoje eu garanto o first kill na maioria dos rounds. Valeu cada centavo investido no coaching 1-on-1.",
      role: "Aluno Coaching VIP",
    },
    {
      name: "Matheus F. (FadeLover)",
      discord: "matheus_br#101",
      before: "BRONZE 1",
      after: "PLATINA 3",
      days: "30 DIAS",
      hs: "+18.5% HS",
      quote:
        "Só tenho 1 hora e meia por dia para jogar por causa do trabalho e faculdade. Seguir o treino de 20 minutos de mira antes de puxar ranked economizou meses de frustração. A didática dos módulos é direta ao ponto sem enrolação.",
      role: "Aluno Protocolo Iniciação",
    },
  ];

  return (
    <section className="py-24 bg-val-black relative border-t border-val-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-val-card border border-val-emerald/40 text-val-emerald text-xs font-bold tracking-widest uppercase rounded-sm mb-4">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>{"// PROVA SOCIAL & HISTÓRICO AUDITADO"}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-val-offwhite leading-tight">
            QUEM APLICOU O MÉTODO, <span className="text-val-emerald text-glow-cyan">SUBIU DE ELO</span>
          </h2>
          <p className="text-val-offwhite/70 font-tactical text-base sm:text-lg mt-3">
            Resultados reais de jogadores que pararam de culpar a Solo Queue e adotaram um plano tático consistente.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-val-card border border-val-border p-6 sm:p-7 rounded-sm clip-tactical flex flex-col justify-between shadow-xl relative group hover:border-val-emerald/60 transition-colors"
            >
              {/* Tracker Tag */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-val-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-val-emerald" />
                  <span className="text-[10px] font-mono text-val-emerald font-bold uppercase">
                    TRACKER.GG VERIFICADO
                  </span>
                </div>
                <div className="flex text-val-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-val-gold" />
                  ))}
                </div>
              </div>

              {/* Evolution Badges */}
              <div className="bg-val-dark/90 p-3 border border-val-border rounded-xs mb-4 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-val-gray uppercase block">Antes</span>
                  <span className="text-xs font-tactical font-bold text-val-red line-through">
                    {item.before}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <TrendingUp className="w-4 h-4 text-val-emerald animate-pulse" />
                  <span className="text-[9px] font-mono text-val-emerald font-bold">{item.days}</span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-mono text-val-gray uppercase block">Agora</span>
                  <span className="text-xs font-tactical font-bold text-val-emerald">
                    {item.after}
                  </span>
                </div>
              </div>

              {/* Quote */}
              <p className="text-xs text-val-offwhite/85 font-sans leading-relaxed italic mb-6 flex-grow">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* User footer */}
              <div className="pt-3 border-t border-val-border/50 flex items-center justify-between">
                <div>
                  <span className="font-tactical font-bold text-sm text-val-offwhite block">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono text-val-gray">
                    Discord: {item.discord}
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-val-slate text-val-cyan text-[10px] font-tactical font-bold uppercase rounded-xs">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
