"use client";

import React, { useState } from "react";
import { Check, ShieldAlert, Flame, Shield, ArrowRight } from "lucide-react";
import { sounds } from "./AudioEngine";

interface StorePricingProps {
  onOpenCheckout: (planName: string) => void;
}

export const StorePricing: React.FC<StorePricingProps> = ({ onOpenCheckout }) => {
  const [billingCycle, setBillingCycle] = useState<"onetime" | "installments">("onetime");

  const plans = [
    {
      id: "iniciacao",
      name: "PROTOCOLO INICIAÇÃO",
      badge: "Para Ferro, Bronze e Prata",
      price: billingCycle === "onetime" ? "R$ 67" : "12x R$ 6,70",
      originalPrice: "R$ 147",
      desc: "O treinamento básico de sobrevivência tática para sair dos elos mais baixos e nunca mais sofrer com trollagens.",
      features: [
        "Calibração biomecânica de DPI e Sensibilidade",
        "Técnica de Deadzoning e Crosshair Placement básico",
        "Rotina diária de 20 minutos no Aim Labs",
        "40+ Lineups essenciais de ataque e retake",
        "Acesso vitalício à Guilda de Alunos no Discord",
        "Certificado de Conclusão de Recruta",
      ],
      notIncluded: [
        "VOD Review individual com Coach",
        "Workshops semanais ao vivo",
        "Acompanhamento no WhatsApp",
      ],
      cta: "COMEÇAR DO BÁSICO",
      popular: false,
      border: "border-val-border",
    },
    {
      id: "academy-pro",
      name: "ACADEMY PRO // ELITE",
      badge: "★ O MAIS ESCOLHIDO (94% DE APROVAÇÃO)",
      price: billingCycle === "onetime" ? "R$ 147" : "12x R$ 14,70",
      originalPrice: "R$ 297",
      desc: "O treinamento completo com acesso a todos os 4 pilares, rotinas de alto nível e VOD Review individual gravado.",
      features: [
        "Acesso TOTAL e vitalício a todos os 4 Módulos (60h+)",
        "1 VOD Review Individual Gravado por mês com feedback",
        "Rotinas exclusivas para KovaaKs e Aim Labs",
        "Workshops semanais ao vivo com Radiantes Top 100",
        "Guia completo de Psicologia Anti-Tilt e liderança de IGL",
        "Pack de Lineups Secretas de Nível VCT atualizadas a cada Patch",
        "Canal exclusivo no Discord com os instrutores",
        "Garantia Spike de 14 Dias sem risco",
      ],
      notIncluded: ["Sessões ao vivo 1-on-1 semanais com Coach"],
      cta: "GARANTIR ACESSO COMPLETO",
      popular: true,
      border: "border-val-red",
    },
    {
      id: "vip-coaching",
      name: "COACHING 1-ON-1 VIP",
      badge: "VAGAS RESTRITAS (APENAS 4 ESTE MÊS)",
      price: billingCycle === "onetime" ? "R$ 397" : "12x R$ 39,70",
      originalPrice: "R$ 697",
      desc: "Aceleração máxima. Acompanhamento cirúrgico e individualizado direto com um jogador Top Radiante no Discord e WhatsApp.",
      features: [
        "TUDO incluso no plano Academy Pro",
        "4 Sessões de 60min individuais ao vivo via Discord",
        "Análise em tempo real durante suas partidas ranqueadas",
        "Correção milimétrica de vícios de mira e posicionamento",
        "WhatsApp direto com seu Coach pessoal para tirar dúvidas",
        "Plano de treino tático sob medida para a sua rotina",
        "Garantia Contratual: suba no mínimo 2 elos ou dinheiro de volta",
      ],
      notIncluded: [],
      cta: "AGENDAR COACHING VIP",
      popular: false,
      border: "border-val-gold",
    },
  ];

  return (
    <section id="planos" className="py-24 bg-val-dark relative">
      {/* Radiant Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-val-red/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-val-card border border-val-red/40 text-val-red text-xs font-bold tracking-widest uppercase rounded-sm mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>{"// LOJA TEMÁTICA & PLANOS DE MATRÍCULA"}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-val-offwhite leading-tight">
            ESCOLHA SEU NÍVEL DE <span className="text-val-red text-glow-red">COMBATE</span>
          </h2>
          <p className="text-val-offwhite/70 font-tactical text-base sm:text-lg mt-3">
            Acesso imediato à plataforma de ensino, ferramentas de mira e comunidade exclusiva de alunos no Discord.
          </p>

          {/* Billing Switcher */}
          <div className="inline-flex items-center p-1 bg-val-card border border-val-border rounded-xs mt-6">
            <button
              onClick={() => {
                sounds.playClick();
                setBillingCycle("onetime");
              }}
              className={`px-4 py-1.5 text-xs font-tactical font-bold uppercase rounded-xs transition-all ${
                billingCycle === "onetime"
                  ? "bg-val-red text-white shadow-sm"
                  : "text-val-gray hover:text-val-offwhite"
              }`}
            >
              PAGAMENTO À VISTA (PIX COM DESCONTO)
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                setBillingCycle("installments");
              }}
              className={`px-4 py-1.5 text-xs font-tactical font-bold uppercase rounded-xs transition-all ${
                billingCycle === "installments"
                  ? "bg-val-red text-white shadow-sm"
                  : "text-val-gray hover:text-val-offwhite"
              }`}
            >
              PARCELADO EM ATÉ 12X
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-val-card border-2 ${plan.border} p-6 sm:p-8 rounded-sm clip-tactical flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 ${
                plan.popular ? "shadow-2xl shadow-val-red/20 ring-1 ring-val-red/50 lg:-translate-y-2" : ""
              }`}
            >
              {/* Popular ribbon */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-val-red text-white font-tactical font-bold text-xs uppercase tracking-widest clip-tag shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div>
                {!plan.popular && (
                  <span className="text-[11px] font-tactical font-bold uppercase text-val-cyan tracking-wider block mb-2">
                    {plan.badge}
                  </span>
                )}

                <h3 className="font-display text-3xl font-bold uppercase tracking-wider text-val-offwhite mb-2 leading-none mt-2">
                  {plan.name}
                </h3>

                <p className="text-xs text-val-offwhite/70 font-sans leading-relaxed mb-6">
                  {plan.desc}
                </p>

                {/* Price Box */}
                <div className="bg-val-dark/90 p-4 border border-val-border rounded-xs mb-6">
                  <span className="text-[10px] font-mono text-val-gray line-through block">
                    De {plan.originalPrice} por
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl sm:text-5xl font-bold text-val-offwhite">
                      {plan.price}
                    </span>
                    <span className="text-xs font-tactical text-val-gray uppercase">
                      {billingCycle === "onetime" ? "Acesso Único" : "no cartão"}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-[10px] font-mono text-val-gray uppercase tracking-widest block">
                    O que está incluído:
                  </span>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 bg-val-emerald/20 text-val-emerald flex items-center justify-center shrink-0 mt-0.5 rounded-xs">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs font-medium text-val-offwhite/90">
                        {feature}
                      </span>
                    </div>
                  ))}

                  {/* Not included items */}
                  {plan.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 opacity-40">
                      <div className="w-4 h-4 bg-zinc-800 text-zinc-500 flex items-center justify-center shrink-0 mt-0.5 rounded-xs">
                        <span className="text-xs">✕</span>
                      </div>
                      <span className="text-xs text-val-gray line-through">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => {
                    sounds.playSpike();
                    onOpenCheckout(plan.name);
                  }}
                  onMouseEnter={() => sounds.playHover()}
                  className={`w-full py-4 font-tactical font-bold text-sm uppercase tracking-widest clip-button transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-val-red hover:bg-val-red-dark text-white shadow-xl shadow-val-red/30"
                      : "bg-val-slate hover:bg-val-red text-val-offwhite hover:text-white border border-val-border"
                  }`}
                >
                  <Shield className="w-4 h-4" />
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 mt-3 text-[10px] font-mono text-val-gray">
                  <span>PAGAMENTO SEGURO VIA PIX / CARTÃO</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Spike Guarantee Banner (Risk Reversal) */}
        <div className="mt-16 bg-val-card border-2 border-val-emerald/40 p-6 sm:p-8 rounded-sm clip-tactical shadow-xl flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 bg-val-emerald/20 border border-val-emerald/50 text-val-emerald flex items-center justify-center shrink-0 clip-button">
            <ShieldAlert className="w-9 h-9" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-tactical font-bold text-val-emerald uppercase tracking-wider mb-1">
              <span>{"// GARANTIA SPIKE: 14 DIAS SEM RISCO"}</span>
            </div>
            <h4 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-val-offwhite leading-none">
              EVOLUA SEU ELO OU DEVOLVEMOS 100% DO SEU DINHEIRO
            </h4>
            <p className="text-xs sm:text-sm text-val-offwhite/80 font-sans mt-2 leading-relaxed">
              Você tem 14 dias inteiros para testar a metodologia, aplicar os treinos de mira e participar da comunidade. Se você não sentir uma melhora brutal na sua precisão e nas suas vitórias, basta enviar uma única mensagem para o nosso suporte que estornamos cada centavo na mesma hora. Sem perguntas, sem letras miúdas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
