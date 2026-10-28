"use client";

import React from "react";
import { Crosshair, ArrowUp, ShieldCheck } from "lucide-react";
import { sounds } from "./AudioEngine";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-val-black border-t-2 border-val-border py-12 relative overflow-hidden">
      {/* Decorative red line on top */}
      <div className="absolute top-0 left-0 w-32 h-1 bg-val-red" />
      <div className="absolute top-0 right-0 w-32 h-1 bg-val-cyan" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-val-red flex items-center justify-center clip-button">
                <Crosshair className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-2xl font-bold tracking-wider text-val-offwhite leading-none">
                PROTOCOLO<span className="text-val-red">.RADIANTE</span>
              </span>
            </div>
            <p className="text-xs text-val-offwhite/70 font-sans leading-relaxed max-w-sm mb-4">
              A academia tática de maior conversão e resultados competitivos do Brasil. Metodologia científica de mira, posicionamento e tomadas de decisão sob pressão.
            </p>
            <div className="text-[10px] font-mono text-val-gray">
              SYS.ID: 42-RADIANT-PROTOCOL-BR // STATUS: SECURE (TLS 1.3)
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-tactical font-bold text-xs uppercase tracking-widest text-val-cyan mb-3">
              NAVEGAÇÃO RÁPIDA
            </h4>
            <ul className="space-y-2 text-xs font-tactical font-semibold text-val-gray uppercase">
              <li><a href="#metodologia" className="hover:text-val-offwhite transition-colors">Metodologia dos 4 Pilares</a></li>
              <li><a href="#calculadora" className="hover:text-val-offwhite transition-colors">Calculadora de Elo</a></li>
              <li><a href="#cursos" className="hover:text-val-offwhite transition-colors">Cursos & Lineups</a></li>
              <li><a href="#coaches" className="hover:text-val-offwhite transition-colors">Coaches Top 100</a></li>
              <li><a href="#planos" className="hover:text-val-offwhite transition-colors">Planos & Loja</a></li>
              <li><a href="#faq" className="hover:text-val-offwhite transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <h4 className="font-tactical font-bold text-xs uppercase tracking-widest text-val-red mb-3">
              SEGURANÇA & CONFIANÇA
            </h4>
            <div className="space-y-2 text-xs text-val-gray font-sans">
              <div className="flex items-center gap-2 text-val-emerald font-tactical font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>GARANTIA SPIKE 14 DIAS</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Pagamentos processados com criptografia de ponta a ponta via PIX e principais bandeiras de cartão de crédito.
              </p>
              <div className="pt-2">
                <span className="text-[10px] font-mono text-val-gray/70 block">
                  HORÁRIO DE SUPORTE:
                </span>
                <span className="text-xs font-tactical text-val-offwhite">
                  Segunda a Domingo, das 09h às 23h
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 border-t border-val-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] text-val-gray/80 font-sans max-w-2xl leading-relaxed">
            <strong>Aviso Legal:</strong> O Protocolo Radiante é um projeto independente de treinamento e coaching educacional. Valorant é marca registrada da Riot Games, Inc. Este site não é patrocinado, endossado ou afiliado oficialmente à Riot Games.
          </p>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => sounds.playHover()}
            className="p-3 bg-val-card hover:bg-val-red border border-val-border hover:border-val-red text-val-offwhite hover:text-white rounded-xs transition-all flex items-center gap-1.5 font-tactical text-xs font-bold uppercase tracking-wider group"
          >
            <span>TOPO</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
