"use client";

import React from "react";
import { Users, Star, Clock, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { sounds } from "./AudioEngine";

interface CoachingRosterProps {
  onOpenCheckout: (planName: string) => void;
}

export const CoachingRoster: React.FC<CoachingRosterProps> = ({ onOpenCheckout }) => {
  const coaches = [
    {
      id: "k4iros",
      nick: "K4IROS // MATHEUS",
      role: "Especialista em Duelistas & Entry Frag",
      peak: "TOP 24 RADIANTE BR",
      exp: "Ex-Player VCB Challengers",
      hours: "1.200+ Horas de Coaching",
      winrate: "73.2% Win Rate",
      rating: "4.99/5 (310 avaliações)",
      agents: ["Jett", "Reyna", "Raze", "Iso"],
      specialty: "Micro-flick, deadzoning e criação agressiva de espaço sob pressão.",
      slots: "2 vagas restantes",
      color: "border-val-red",
      tagColor: "bg-val-red/20 text-val-red border-val-red/40",
    },
    {
      id: "v3xor",
      nick: "V3XOR // GABRIEL",
      role: "Especialista em Controladores & IGL",
      peak: "TOP 38 RADIANTE BR",
      exp: "Ex-Analista Tático VCT",
      hours: "980+ Horas de Coaching",
      winrate: "75.4% Win Rate",
      rating: "4.98/5 (240 avaliações)",
      agents: ["Omen", "Viper", "Astra", "Brimstone"],
      specialty: "Macro-game cirúrgico, one-way smokes, rotações e chamadas decisivas de round.",
      slots: "3 vagas restantes",
      color: "border-val-cyan",
      tagColor: "bg-val-cyan/20 text-val-cyan border-val-cyan/40",
    },
    {
      id: "nyx",
      nick: "NYX // BEATRIZ",
      role: "Especialista em Iniciadores & Mira",
      peak: "TOP 15 RADIANTE BR",
      exp: "Top 1 Aim Labs Brasil",
      hours: "850+ Horas de Coaching",
      winrate: "71.8% Win Rate",
      rating: "5.0/5 (190 avaliações)",
      agents: ["Sova", "Fade", "KAY/O", "Breach"],
      specialty: "Lineups de pós-plant impossíveis de punir e rotinas biomecânicas de mira rápida.",
      slots: "1 vaga restante",
      color: "border-val-gold",
      tagColor: "bg-val-gold/20 text-val-gold border-val-gold/40",
    },
  ];

  return (
    <section id="coaches" className="py-24 bg-val-black relative border-t border-val-border/60">
      {/* Background accents */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-val-red/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-val-card border border-val-gold/40 text-val-gold text-xs font-bold tracking-widest uppercase rounded-sm mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>{"// CORPO DOCENTE COMPETITIVO"}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-val-offwhite leading-tight">
            TREINE COM O <span className="text-val-gold text-glow-cyan">TOP 100 RADIANTE</span> DO BRASIL
          </h2>
          <p className="text-val-offwhite/70 font-tactical text-base sm:text-lg mt-3">
            Nossos instrutores não são apenas criadores de conteúdo: são jogadores que disputam as maiores ranqueadas e o cenário competitivo diariamente.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              className={`bg-val-card border-2 ${coach.color} p-6 sm:p-7 rounded-sm clip-tactical shadow-xl flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 relative`}
            >
              {/* Badge slots remaining */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-2 py-0.5 text-[10px] font-tactical font-bold uppercase border rounded-xs ${coach.tagColor}`}>
                  {coach.peak}
                </span>
                <span className="text-[10px] font-mono text-val-emerald flex items-center gap-1 font-bold">
                  <Clock className="w-3 h-3" />
                  {coach.slots}
                </span>
              </div>

              {/* Coach Nickname */}
              <div className="mb-4">
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-val-offwhite leading-none">
                  {coach.nick}
                </h3>
                <p className="text-xs font-tactical font-semibold text-val-gray mt-1">
                  {coach.role}
                </p>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 gap-2 bg-val-dark/90 p-3 border border-val-border rounded-xs mb-4">
                <div>
                  <span className="text-[10px] font-mono text-val-gray uppercase block">Experiência</span>
                  <span className="text-xs font-bold font-tactical text-val-offwhite">{coach.exp}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-val-gray uppercase block">Avaliação</span>
                  <div className="flex items-center gap-1 text-xs font-bold text-val-gold">
                    <Star className="w-3 h-3 fill-val-gold" />
                    <span>{coach.rating}</span>
                  </div>
                </div>
              </div>

              {/* Specialty & Description */}
              <div className="space-y-3 mb-6 flex-grow">
                <div className="text-xs text-val-offwhite/85 leading-relaxed font-sans">
                  &ldquo;{coach.specialty}&rdquo;
                </div>

                {/* Agents Pills */}
                <div>
                  <span className="text-[10px] font-mono text-val-gray uppercase block mb-1.5">
                    Agentes Especialistas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {coach.agents.map((agent) => (
                      <span
                        key={agent}
                        className="px-2 py-0.5 bg-val-slate text-val-offwhite text-[11px] font-tactical font-bold uppercase rounded-xs"
                      >
                        {agent}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  sounds.playSpike();
                  onOpenCheckout(`Coaching 1-on-1 com ${coach.nick.split(" ")[0]}`);
                }}
                onMouseEnter={() => sounds.playHover()}
                className="w-full py-3 bg-val-card hover:bg-val-red border border-val-border hover:border-val-red text-val-offwhite hover:text-white font-tactical font-bold text-xs uppercase tracking-widest clip-button transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-val-red group-hover:text-white"
              >
                <Calendar className="w-4 h-4" />
                <span>AGENDAR SESSÃO 1-ON-1</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Live VOD Review Guarantee Box */}
        <div className="mt-12 bg-val-card/60 border border-val-border p-6 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-val-emerald/20 border border-val-emerald/40 text-val-emerald flex items-center justify-center shrink-0 rounded-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-xl font-bold uppercase tracking-wider text-val-offwhite leading-none">
                COMO FUNCIONA O COACHING INDIVIDUAL?
              </h4>
              <p className="text-xs text-val-offwhite/75 font-sans mt-1">
                Você envia o VOD de uma partida ranqueada ou joga ao vivo via transmissão de tela no Discord. O coach pausa cada erro, desenha na tela e constrói um plano de ação personalizado para os próximos 30 dias.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              sounds.playClick();
              onOpenCheckout("Coaching 1-on-1 VIP");
            }}
            className="px-5 py-2.5 bg-val-emerald/90 hover:bg-val-emerald text-val-black font-tactical text-xs font-bold tracking-widest uppercase clip-button whitespace-nowrap self-start md:self-auto"
          >
            GARANTIR MINHA VAGA
          </button>
        </div>

      </div>
    </section>
  );
};
