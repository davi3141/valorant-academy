"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { sounds } from "./AudioEngine";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Eu trabalho/estudo e só tenho 1 ou 2 horas livres por dia. O método funciona para mim?",
      a: "Sim, absolutamente! A metodologia do Protocolo Radiante foi desenhada exatamente para quem não tem 8 horas diárias para gastar em partidas sem rumo. Nossas rotinas de mira levam de 15 a 25 minutos diários no Aim Labs/The Range, focando em qualidade e biomecânica em vez de repetição exaustiva.",
    },
    {
      q: "Qual é a diferença entre os módulos gravados e o Coaching 1-on-1 Individual?",
      a: "Nos cursos gravados você aprende toda a teoria, setups, mapas e biomecânica com exercícios passo a passo. No Coaching 1-on-1, um jogador Top 100 Radiante entra em chamada privada com você no Discord, assiste suas partidas ou revisa seu VOD pausando os rounds, desenhando na tela e corrigindo seus vícios individuais que você nem sabia que tinha.",
    },
    {
      q: "Meu PC não é topo de linha e meu monitor é 60Hz/75Hz. Consigo subir de elo?",
      a: "Sim! Vários dos nossos instrutores chegaram ao Imortal jogando em telas de 60Hz. O curso ensina as configurações ideais de otimização de input lag, resolução esticada vs nativa, clareza gráfica do Valorant e posicionamento preditivo que compensa qualquer limitação técnica de hardware.",
    },
    {
      q: "Como funciona a Garantia Spike de 14 dias?",
      a: "É risco zero total. Você adquire qualquer plano, acessa todas as aulas, baixa as planilhas e participa da comunidade. Se em até 14 dias você achar que o conteúdo não é para você, basta nos enviar um único e-mail ou mensagem no WhatsApp e devolvemos 100% do seu dinheiro, sem burocracia.",
    },
    {
      q: "Existe algum risco de banimento da minha conta Riot?",
      a: "Zero risco! O Protocolo Radiante ensina pura habilidade mecânica, raciocínio tático, posicionamento e lineups legítimas dentro do jogo. Não usamos, não indicamos e repudiamos qualquer tipo de macro, software de terceiros invasivo ou trapaça.",
    },
    {
      q: "O acesso à plataforma e ao Discord é vitalício?",
      a: "Sim! Nos planos Iniciação e Academy Pro o acesso às aulas atuais e futuras atualizações de patches do Valorant é vitalício, incluindo o acesso à nossa comunidade exclusiva de alunos no Discord.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-val-dark relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-val-card border border-val-border text-val-cyan text-xs font-bold tracking-widest uppercase rounded-sm mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{"// PERGUNTAS FREQUENTES & RESPOSTAS TÁTICAS"}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-val-offwhite leading-tight">
            DÚVIDAS SOBRE O <span className="text-val-cyan text-glow-cyan">PROTOCOLO</span>
          </h2>
          <p className="text-val-offwhite/70 font-tactical text-base mt-2">
            Tudo o que você precisa saber antes de iniciar sua jornada rumo ao Radiante.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-val-card border border-val-border rounded-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => {
                    sounds.playClick();
                    setOpenIndex(isOpen ? null : index);
                  }}
                  onMouseEnter={() => sounds.playHover()}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-tactical text-base font-bold text-val-offwhite uppercase tracking-wide hover:text-val-red transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-val-red">0{index + 1}.</span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-val-gray transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-val-red" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-val-offwhite/80 font-sans leading-relaxed border-t border-val-border/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
