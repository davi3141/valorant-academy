"use client";

import React from "react";
import { Zap, Trophy, Target, ShieldCheck, Flame } from "lucide-react";

export const KillfeedTicker: React.FC = () => {
  const events = [
    {
      icon: <Trophy className="w-3.5 h-3.5 text-val-gold" />,
      tag: "PROMOÇÃO DE ELO",
      text: "Jogador 'ViperGhost' subiu de OURO 2 para ASCENDENTE 1 em 28 dias",
      highlight: "+3 Elos",
      time: "há 2 min",
    },
    {
      icon: <Target className="w-3.5 h-3.5 text-val-cyan" />,
      tag: "MIRA BIO-MECÂNICA",
      text: "Aluno 'Lucas_Jett' atingiu 43.8% de Headshot no Tracker.gg",
      highlight: "Recorde",
      time: "há 6 min",
    },
    {
      icon: <Flame className="w-3.5 h-3.5 text-val-red" />,
      tag: "VOD REVIEW 1v1",
      text: "Coach V3XOR corrigiu 6 vícios de posicionamento no mapa Ascent",
      highlight: "Concluído",
      time: "há 11 min",
    },
    {
      icon: <ShieldCheck className="w-3.5 h-3.5 text-val-emerald" />,
      tag: "NOVA MATRÍCULA",
      text: "Novo recruta de São Paulo ingressou no Protocolo Operativo Elite",
      highlight: "Vaga Confirmada",
      time: "há 15 min",
    },
    {
      icon: <Zap className="w-3.5 h-3.5 text-val-cyan" />,
      tag: "WIN STREAK",
      text: "Duo de alunos fechou 9 vitórias consecutivas na Solo/Duo Queue",
      highlight: "9-0 Streak",
      time: "há 18 min",
    },
  ];

  return (
    <div className="w-full bg-val-black/90 border-y border-val-border/60 py-2.5 overflow-hidden relative z-20">
      {/* Subtle indicator */}
      <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-val-black via-val-black/80 to-transparent w-16 sm:w-24 z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-val-black via-val-black/80 to-transparent w-16 sm:w-24 z-10 pointer-events-none" />

      <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
        {/* Repeating twice to make endless marquee smooth */}
        {[...events, ...events].map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-3 px-4 py-1 bg-val-card/80 border border-val-border/50 rounded-sm text-xs"
          >
            <div className="flex items-center gap-1.5 font-tactical font-bold text-val-red uppercase tracking-wider text-[11px]">
              {item.icon}
              <span>[{item.tag}]</span>
            </div>
            <span className="text-val-offwhite font-medium">{item.text}</span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 bg-val-red/20 text-val-red border border-val-red/30 rounded-xs uppercase">
              {item.highlight}
            </span>
            <span className="text-[10px] text-val-gray">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
