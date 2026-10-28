"use client";

import React, { useState } from "react";
import { Target, Compass, Sparkles, Brain, Check, Play, Layers } from "lucide-react";
import { sounds } from "./AudioEngine";

interface CurriculumProps {
  onOpenCheckout: (planName?: string) => void;
}

export const Curriculum: React.FC<CurriculumProps> = ({ onOpenCheckout }) => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: "aim",
      icon: <Target className="w-5 h-5 text-val-cyan" />,
      tag: "MÓDULO 01 // MECÂNICA PURA",
      title: "BIOMECÂNICA DE MIRA & CROSSHAIR PLACEMENT PREDITIVO",
      desc: "Você não erra tiro porque seu mouse é ruim. Você erra porque mira onde o inimigo estava, e não onde a cabeça dele vai aparecer. Nós desconstruímos seu movimento de pulso e braço para criar memória muscular de nível Radiante.",
      lessons: [
        "Calibração milimétrica de DPI e Sensibilidade efetiva (eDPI)",
        "Técnica de Deadzoning e Counter-strafing em duelo aberto",
        "Micro-correção de mira sem 'over-flick' (o erro mais comum)",
        "Pre-aim absoluto nos 11 mapas competitivos do circuito VCT",
        "Rotinas progressivas no Aim Labs com métricas auditadas",
      ],
      badge: "40+ Horas de Prática",
      highlight: "Taxa de Headshot sobe para +35%",
    },
    {
      id: "macro",
      icon: <Compass className="w-5 h-5 text-val-red" />,
      tag: "MÓDULO 02 // GAME SENSE",
      title: "MACRO JOGO, LEITURA DE MAPA & CONTROLE DE ESPAÇO",
      desc: "Como ler o round antes mesmo da spike ser plantada. Aprenda a prever rotações inimigas pelo barulho de passos, ler padrões de economia do adversário e nunca mais morrer de costas para um lurker.",
      lessons: [
        "Previsão de rotações e timings de cobertura em menos de 3 segundos",
        "Isolamento sistemático de duelos 1v1 (como nunca lutar em desvantagem)",
        "Gestão de Economia: Forçados estratégicos, Bonus rounds e Save rounds",
        "Controle de mapa e punição cirúrgica de agressões precipitadas",
        "Protocolo de Retake 3v5 e 2v4 com sincronia de utilitários",
      ],
      badge: "Estratégia VCT",
      highlight: "Win Rate em Ataque e Defesa +22%",
    },
    {
      id: "lineups",
      icon: <Sparkles className="w-5 h-5 text-val-gold" />,
      tag: "MÓDULO 03 // AGENTES & LINEUPS",
      title: "SETUPS SECRETOS, LINEUPS DE POST-PLANT & COMBOS",
      desc: "Domine seu agente favorito ao limite máximo. Tenha um arsenal de lineups que garantem o round do outro lado do mapa e setups defensivos que travam execuções completas com apenas um jogador no bomb.",
      lessons: [
        "Lineups milimétricas de pós-plant com Sova, Viper, Brimstone e Fade",
        "Setups de One-Way smokes para controle unilateral de visão",
        "Câmeras e armadilhas 'invisíveis' de Cypher e Killjoy",
        "Combos sincronizados de flash + abertura de duelista",
        "Guia completo de escolhas táticas por mapa (Haven, Ascent, Lotus, etc.)",
      ],
      badge: "60+ Vídeos de Lineups",
      highlight: "Garantia de 3 rounds fáceis por partida",
    },
    {
      id: "mindset",
      icon: <Brain className="w-5 h-5 text-val-emerald" />,
      tag: "MÓDULO 04 // PSICOLOGIA & IGL",
      title: "PSICOLOGIA DE RANKED, COMUNICAÇÃO DE IGL & ANTI-TILT",
      desc: "O maior inimigo do seu elo não é o adversário: é o tilt mental e a falta de comunicação assertiva. Aprenda a liderar o time sem arrogância, manter o foco após rounds perdidos e jogar sob pressão extrema.",
      lessons: [
        "Protocolo Anti-Tilt: Como resetar a mentalidade após um round perdido",
        "Comunicação limpa de alto impacto (chamadas de 2 palavras)",
        "Liderança tática de IGL (In-Game Leader) na Solo Queue",
        "Como carregar partidas onde 2 jogadores do seu time estão offline",
        "Rotina pré-jogo de foco cognitivo e aquecimento neural",
      ],
      badge: "Mental de Radiante",
      highlight: "Zero Partidas Perdidas por Tilt",
    },
  ];

  const current = pillars[activeTab];

  return (
    <section id="cursos" className="py-24 bg-val-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-val-card border border-val-red/40 text-val-red text-xs font-bold tracking-widest uppercase rounded-sm mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>{"// GRADE CURRICULAR COMPLETA"}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-val-offwhite leading-tight">
            A METODOLOGIA DOS <span className="text-val-red text-glow-red">4 PILARES</span>
          </h2>
          <p className="text-val-offwhite/70 font-tactical text-base sm:text-lg mt-3">
            Não ensinamos &ldquo;truques mágicos&rdquo;. Ensinamos a mecânica, o raciocínio e a estrutura mental que os melhores do mundo utilizam no mais alto nível competitivo.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-10">
          {pillars.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                sounds.playClick();
                setActiveTab(index);
              }}
              onMouseEnter={() => sounds.playHover()}
              className={`p-4 border rounded-xs font-tactical text-left transition-all relative ${
                activeTab === index
                  ? "border-val-red bg-val-card text-val-offwhite shadow-lg shadow-val-red/20"
                  : "border-val-border bg-val-dark/70 text-val-gray hover:text-val-offwhite hover:border-val-slate"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {item.icon}
                <span className="text-[11px] font-bold uppercase tracking-wider text-val-red">
                  PILAR 0{index + 1}
                </span>
              </div>
              <span className="font-display text-lg sm:text-xl font-bold uppercase leading-none block line-clamp-1">
                {item.id === "aim"
                  ? "Mira & Biomecânica"
                  : item.id === "macro"
                  ? "Game Sense & Macro"
                  : item.id === "lineups"
                  ? "Agentes & Setups"
                  : "Mindset & Anti-Tilt"}
              </span>
              {activeTab === index && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-val-red" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Detail Panel */}
        <div className="bg-val-card border-2 border-val-border p-6 sm:p-10 rounded-sm clip-tactical shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-2.5 py-1 bg-val-red/15 text-val-red text-xs font-bold uppercase font-tactical border border-val-red/30 rounded-xs">
                  {current.tag}
                </span>
                <span className="px-2.5 py-1 bg-val-cyan/15 text-val-cyan text-xs font-bold uppercase font-tactical border border-val-cyan/30 rounded-xs">
                  {current.badge}
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-val-offwhite mb-4 leading-tight">
                {current.title}
              </h3>

              <p className="text-val-offwhite/80 font-sans text-sm sm:text-base leading-relaxed mb-6">
                {current.desc}
              </p>

              {/* Lessons checklist */}
              <div className="space-y-3 mb-8">
                {current.lessons.map((lesson, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-val-red/20 border border-val-red/50 text-val-red flex items-center justify-center shrink-0 mt-0.5 rounded-xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-val-offwhite/90">
                      {lesson}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    sounds.playSpike();
                    onOpenCheckout("Academy Pro");
                  }}
                  onMouseEnter={() => sounds.playHover()}
                  className="px-6 py-3.5 bg-val-red hover:bg-val-red-dark text-white font-tactical text-sm font-bold tracking-widest uppercase clip-button flex items-center gap-2 shadow-lg shadow-val-red/30 transition-all"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>ASSISTIR AULA DE DEGUSTAÇÃO</span>
                </button>
              </div>

            </div>

            {/* Right highlight card */}
            <div className="lg:col-span-5 bg-val-dark/90 border border-val-border p-6 rounded-sm relative">
              <div className="text-[10px] font-mono text-val-gray uppercase tracking-widest mb-3">
                IMPACTO MEDIDO NA RANKED
              </div>

              <div className="p-4 bg-val-card border border-val-border/60 rounded-xs mb-4">
                <span className="text-xs font-tactical font-bold text-val-cyan uppercase block mb-1">
                  MÉTRICA CHAVE
                </span>
                <span className="font-display text-3xl font-bold text-val-offwhite">
                  {current.highlight}
                </span>
              </div>

              <div className="space-y-3 text-xs text-val-offwhite/80">
                <div className="p-3 bg-val-slate/30 border-l-2 border-val-red">
                  <span className="font-bold text-val-offwhite block mb-0.5">Aulas em Vídeo 4K:</span>
                  Acesso imediato no computador ou celular com exercícios práticos ao final de cada módulo.
                </div>
                <div className="p-3 bg-val-slate/30 border-l-2 border-val-cyan">
                  <span className="font-bold text-val-offwhite block mb-0.5">Planilhas de Treino de Mira:</span>
                  Rotinas pré-programadas para KovaaKs e Aimlabs com acompanhamento de metas.
                </div>
                <div className="p-3 bg-val-slate/30 border-l-2 border-val-gold">
                  <span className="font-bold text-val-offwhite block mb-0.5">Suporte no Discord:</span>
                  Tire dúvidas diretamente com os instrutores na nossa guilda privada de alunos.
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-val-border/60 flex items-center justify-between text-[11px] font-mono text-val-gray">
                <span>CERTIFICADO // PROTOCOLO V4</span>
                <span className="text-val-emerald font-bold">100% ATUALIZADO</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
