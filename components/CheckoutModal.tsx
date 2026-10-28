"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { X, CheckCircle, ArrowRight, Lock } from "lucide-react";
import { sounds } from "./AudioEngine";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  defaultPlan = "Academy Pro",
}) => {
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan);
  const [name, setName] = useState("");
  const [riotId, setRiotId] = useState("");
  const [discord, setDiscord] = useState("");
  const [currentElo, setCurrentElo] = useState("Prata");
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleApplyCoupon = () => {
    sounds.playClick();
    if (coupon.trim().toUpperCase() === "RADIANTE10" || coupon.trim().toUpperCase() === "VCT") {
      setCouponApplied(true);
      sounds.playRadiant();
    } else {
      alert("Cupom inválido. Tente 'RADIANTE10' para 10% de desconto!");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playSpike();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      sounds.playRadiant();
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FF4655", "#00F0FF", "#F5C042"],
        });
      } catch {
        // safe
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-val-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-val-card border-2 border-val-red p-6 sm:p-8 rounded-sm clip-tactical shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-val-gray hover:text-val-red transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {!success ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-val-red uppercase tracking-widest mb-1">
                <span className="w-2 h-2 rounded-full bg-val-red animate-ping" />
                <span>{"// FORMULÁRIO DE RECRUTAMENTO MILITAR"}</span>
              </div>
              <h3 className="font-display text-3xl font-bold uppercase tracking-wider text-val-offwhite leading-none">
                INGRESSAR NO <span className="text-val-red">PROTOCOLO</span>
              </h3>
              <p className="text-xs text-val-offwhite/70 font-sans mt-1">
                Preencha seus dados para receber o acesso imediato à plataforma e ao servidor privado no Discord.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Plan Picker */}
              <div>
                <label className="block text-[11px] font-tactical font-bold text-val-gray uppercase tracking-wider mb-1.5">
                  PLANO SELECIONADO:
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full bg-val-dark border border-val-border text-val-offwhite px-3 py-2.5 rounded-xs font-tactical font-bold text-sm focus:border-val-red focus:outline-none"
                >
                  <option value="Protocolo Iniciação">Protocolo Iniciação - R$ 67 (ou 12x R$ 6,70)</option>
                  <option value="Academy Pro">Academy Pro // Elite - R$ 147 (ou 12x R$ 14,70)</option>
                  <option value="Coaching 1-on-1 VIP">Coaching 1-on-1 VIP - R$ 397 (ou 12x R$ 39,70)</option>
                </select>
              </div>

              {/* Name & Nick */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-tactical font-bold text-val-gray uppercase tracking-wider mb-1">
                    SEU NOME COMPLETO:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Matheus Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-val-dark border border-val-border text-val-offwhite px-3 py-2 rounded-xs text-xs focus:border-val-red focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-tactical font-bold text-val-gray uppercase tracking-wider mb-1">
                    RIOT ID (NICK#TAG):
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: JettClutch#BR1"
                    value={riotId}
                    onChange={(e) => setRiotId(e.target.value)}
                    className="w-full bg-val-dark border border-val-border text-val-offwhite px-3 py-2 rounded-xs text-xs focus:border-val-red focus:outline-none"
                  />
                </div>
              </div>

              {/* Discord & Elo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-tactical font-bold text-val-gray uppercase tracking-wider mb-1">
                    DISCORD (USUÁRIO):
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: matheus_fps"
                    value={discord}
                    onChange={(e) => setDiscord(e.target.value)}
                    className="w-full bg-val-dark border border-val-border text-val-offwhite px-3 py-2 rounded-xs text-xs focus:border-val-red focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-tactical font-bold text-val-gray uppercase tracking-wider mb-1">
                    SEU ELO ATUAL:
                  </label>
                  <select
                    value={currentElo}
                    onChange={(e) => setCurrentElo(e.target.value)}
                    className="w-full bg-val-dark border border-val-border text-val-offwhite px-3 py-2 rounded-xs text-xs focus:border-val-red focus:outline-none"
                  >
                    <option value="Ferro">Ferro 1 a 3</option>
                    <option value="Bronze">Bronze 1 a 3</option>
                    <option value="Prata">Prata 1 a 3</option>
                    <option value="Ouro">Ouro 1 a 3</option>
                    <option value="Platina">Platina 1 a 3</option>
                    <option value="Diamante">Diamante 1 a 3</option>
                    <option value="Ascendente">Ascendente 1 a 3</option>
                    <option value="Imortal">Imortal</option>
                  </select>
                </div>
              </div>

              {/* Coupon Field */}
              <div className="pt-2">
                <label className="block text-[11px] font-tactical font-bold text-val-gray uppercase tracking-wider mb-1">
                  CUPOM DE DESCONTO:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Use RADIANTE10"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="flex-grow bg-val-dark border border-val-border text-val-offwhite px-3 py-2 rounded-xs text-xs uppercase focus:border-val-cyan focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="px-4 py-2 bg-val-slate hover:bg-val-card border border-val-border text-val-offwhite text-xs font-tactical font-bold uppercase rounded-xs"
                  >
                    Aplicar
                  </button>
                </div>
                {couponApplied && (
                  <span className="text-[10px] text-val-emerald font-bold font-mono mt-1 block">
                    ✓ Cupom de 10% OFF ativado com sucesso!
                  </span>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-val-red hover:bg-val-red-dark text-white font-tactical text-base font-bold tracking-widest uppercase clip-button shadow-lg shadow-val-red/30 transition-all flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>
                    {isSubmitting ? "PROCESSANDO MATRÍCULA..." : "FINALIZAR E RECEBER ACESSO IMEDIATO"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-center text-val-gray font-mono mt-2">
                  🔒 PAGAMENTO 100% CRIPTOGRAFADO // ACESSO INSTANTÂNEO POR E-MAIL E DISCORD
                </p>
              </div>

            </form>
          </>
        ) : (
          /* Success Screen */
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-val-emerald/20 border-2 border-val-emerald text-val-emerald flex items-center justify-center mx-auto rounded-full mb-4">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-display text-3xl font-bold uppercase tracking-wider text-val-offwhite mb-2 leading-none">
              RECRUTAMENTO CONFIRMADO!
            </h3>
            <p className="text-sm text-val-offwhite/80 font-sans max-w-md mx-auto mb-6">
              Parabéns, <strong>{name || "Agente"}</strong>! Seu acesso ao <strong>{selectedPlan}</strong> foi reservado com sucesso para o Riot ID <strong>{riotId || "Sua Conta"}</strong>.
            </p>
            <div className="bg-val-dark p-4 border border-val-border rounded-xs text-xs text-left space-y-2 mb-6">
              <div className="flex items-center justify-between text-val-offwhite">
                <span>Instruções enviadas para seu e-mail:</span>
                <span className="text-val-emerald font-bold">OK</span>
              </div>
              <div className="flex items-center justify-between text-val-offwhite">
                <span>Convite exclusivo para a Guilda no Discord:</span>
                <span className="text-val-emerald font-bold">GERADO</span>
              </div>
            </div>
            <button
              onClick={() => {
                sounds.playClick();
                onClose();
                setSuccess(false);
              }}
              className="px-8 py-3 bg-val-red text-white font-tactical text-sm font-bold tracking-widest uppercase clip-button"
            >
              RETORNAR À BASE
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
