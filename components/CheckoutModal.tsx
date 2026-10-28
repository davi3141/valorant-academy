"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  X,
  CheckCircle,
  ArrowRight,
  Lock,
  QrCode,
  CreditCard,
  Copy,
  Check,
  Clock,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
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
  const [step, setStep] = useState<"form" | "pix" | "success">("form");
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan);
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix");
  const [name, setName] = useState("");
  const [riotId, setRiotId] = useState("");
  const [discord, setDiscord] = useState("");
  const [currentElo, setCurrentElo] = useState("Prata");
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos em segundos
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Cartão states
  const [cardNumber, setCardNumber] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  // Base prices
  const planPrices: Record<string, { base: number; label: string }> = {
    "Protocolo Iniciação": { base: 67, label: "R$ 67,00" },
    "Academy Pro": { base: 147, label: "R$ 147,00" },
    "Coaching 1-on-1 VIP": { base: 397, label: "R$ 397,00" },
  };

  const currentPriceInfo = planPrices[selectedPlan] || { base: 147, label: "R$ 147,00" };
  const discountMultiplier = (couponApplied ? 0.9 : 1) * (paymentMethod === "pix" ? 0.95 : 1);
  const finalPrice = (currentPriceInfo.base * discountMultiplier).toFixed(2).replace(".", ",");

  // Código PIX Copia e Cola dinâmico
  const pixCopiaECola = `00020126580014br.gov.bcb.pix0136radiant-protocol-pix-${Date.now().toString().slice(-6)}@vct.br520400005303986540${currentPriceInfo.base.toFixed(2)}5802BR5920PROTOCOLO RADIANTE6009SAO PAULO62070503***6304E8A9`;

  // Timer do PIX
  useEffect(() => {
    if (step !== "pix") return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [step]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

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

  const handleCopyPix = () => {
    sounds.playRadiant();
    navigator.clipboard.writeText(pixCopiaECola);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playSpike();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      if (paymentMethod === "pix") {
        setStep("pix");
        setTimeLeft(15 * 60);
      } else {
        handlePaymentSuccess();
      }
    }, 800);
  };

  const handlePaymentSuccess = () => {
    sounds.playRadiant();
    setStep("success");
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#FF4655", "#00F0FF", "#F5C042", "#00D68F"],
      });
    } catch {
      // safe
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-val-black/90 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-xl bg-val-card border-2 border-val-red p-6 sm:p-8 rounded-sm clip-tactical shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={() => {
            sounds.playClick();
            onClose();
            setStep("form");
          }}
          className="absolute top-4 right-4 p-2 text-val-gray hover:text-val-red transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>

        {/* STEP 1: FORMULÁRIO DE DADOS & ESCOLHA DE MÉTODO */}
        {step === "form" && (
          <>
            <div className="mb-5">
              <div className="flex items-center gap-2 text-xs font-mono text-val-red uppercase tracking-widest mb-1">
                <span className="w-2 h-2 rounded-full bg-val-red animate-ping" />
                <span>{"// RECRUTAMENTO MILITAR // ETAPA 01"}</span>
              </div>
              <h3 className="font-display text-3xl font-bold uppercase tracking-wider text-val-offwhite leading-none">
                INGRESSAR NO <span className="text-val-red">PROTOCOLO</span>
              </h3>
              <p className="text-xs text-val-offwhite/70 font-sans mt-1">
                Acesso imediato à guilda do Discord e materiais de treino liberados logo após a confirmação.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Plan Picker */}
              <div>
                <label className="block text-[11px] font-tactical font-bold text-val-gray uppercase tracking-wider mb-1">
                  SELECIONE O PLANO:
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full bg-val-dark border border-val-border text-val-offwhite px-3 py-2.5 rounded-xs font-tactical font-bold text-sm focus:border-val-red focus:outline-none"
                >
                  <option value="Protocolo Iniciação">Protocolo Iniciação — R$ 67,00</option>
                  <option value="Academy Pro">Academy Pro // Elite — R$ 147,00 (Recomendado)</option>
                  <option value="Coaching 1-on-1 VIP">Coaching 1-on-1 VIP — R$ 397,00</option>
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
                    placeholder="Ex: Gabriel Souza"
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
                    DISCORD (TAG):
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: gabriel_fps"
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

              {/* Seletor de Método de Pagamento (PIX vs Cartão) */}
              <div>
                <label className="block text-[11px] font-tactical font-bold text-val-gray uppercase tracking-wider mb-2">
                  FORMA DE PAGAMENTO:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      sounds.playClick();
                      setPaymentMethod("pix");
                    }}
                    className={`p-3 border rounded-xs font-tactical text-left transition-all flex items-center justify-between ${
                      paymentMethod === "pix"
                        ? "border-val-emerald bg-val-emerald/15 text-val-offwhite shadow-md shadow-val-emerald/20"
                        : "border-val-border bg-val-dark/70 text-val-gray hover:border-val-slate"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <QrCode className="w-5 h-5 text-val-emerald" />
                      <div>
                        <span className="font-bold text-xs uppercase block">PIX IMEDIATO</span>
                        <span className="text-[10px] text-val-emerald font-mono">+5% OFF EXTRA</span>
                      </div>
                    </div>
                    {paymentMethod === "pix" && <Check className="w-4 h-4 text-val-emerald" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      sounds.playClick();
                      setPaymentMethod("card");
                    }}
                    className={`p-3 border rounded-xs font-tactical text-left transition-all flex items-center justify-between ${
                      paymentMethod === "card"
                        ? "border-val-cyan bg-val-cyan/15 text-val-offwhite shadow-md shadow-val-cyan/20"
                        : "border-val-border bg-val-dark/70 text-val-gray hover:border-val-slate"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-val-cyan" />
                      <div>
                        <span className="font-bold text-xs uppercase block">CARTÃO DE CRÉDITO</span>
                        <span className="text-[10px] text-val-gray font-mono">EM ATÉ 12X</span>
                      </div>
                    </div>
                    {paymentMethod === "card" && <Check className="w-4 h-4 text-val-cyan" />}
                  </button>
                </div>
              </div>

              {/* Campos do Cartão se selecionado */}
              {paymentMethod === "card" && (
                <div className="bg-val-dark/90 p-3.5 border border-val-border rounded-xs space-y-2.5 animate-fadeIn">
                  <div>
                    <label className="block text-[10px] font-mono text-val-gray uppercase mb-1">
                      NÚMERO DO CARTÃO:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="0000 0000 0000 0000"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full bg-val-card border border-val-border text-val-offwhite px-3 py-1.5 rounded-xs text-xs focus:border-val-cyan focus:outline-none font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-mono text-val-gray uppercase mb-1">
                        VALIDADE:
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="MM/AA"
                        value={cardExp}
                        onChange={(e) => setCardExp(e.target.value)}
                        className="w-full bg-val-card border border-val-border text-val-offwhite px-3 py-1.5 rounded-xs text-xs focus:border-val-cyan focus:outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-val-gray uppercase mb-1">
                        CVV:
                      </label>
                      <input
                        type="password"
                        required
                        maxLength={4}
                        placeholder="123"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        className="w-full bg-val-card border border-val-border text-val-offwhite px-3 py-1.5 rounded-xs text-xs focus:border-val-cyan focus:outline-none font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Coupon Field */}
              <div>
                <label className="block text-[11px] font-tactical font-bold text-val-gray uppercase tracking-wider mb-1">
                  CUPOM TÁTICO:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Use RADIANTE10"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="flex-grow bg-val-dark border border-val-border text-val-offwhite px-3 py-2 rounded-xs text-xs uppercase focus:border-val-cyan focus:outline-none font-mono"
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
                    ✓ Cupom de 10% OFF ativado!
                  </span>
                )}
              </div>

              {/* Resumo do Valor */}
              <div className="bg-val-dark/95 p-3.5 border border-val-border rounded-xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-val-gray uppercase block">TOTAL A PAGAR:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-2xl font-bold text-val-emerald">
                      R$ {finalPrice}
                    </span>
                    {paymentMethod === "pix" && (
                      <span className="text-[10px] text-val-emerald font-bold font-mono bg-val-emerald/20 px-1 rounded-xs">
                        5% OFF PIX
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right text-[10px] font-mono text-val-gray">
                  <div>GARANTIA: 14 DIAS</div>
                  <div className="text-val-emerald font-bold">LIBERAÇÃO IMEDIATA</div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-val-red hover:bg-val-red-dark text-white font-tactical text-base font-bold tracking-widest uppercase clip-button shadow-lg shadow-val-red/30 transition-all flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>
                    {isSubmitting
                      ? "PROCESSANDO..."
                      : paymentMethod === "pix"
                      ? "AVANÇAR PARA PAGAMENTO PIX"
                      : "FINALIZAR MATRÍCULA NO CARTÃO"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          </>
        )}

        {/* STEP 2: TELA DE PAGAMENTO PIX DINÂMICO */}
        {step === "pix" && (
          <div className="animate-fadeIn">
            <div className="mb-4 text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-val-emerald/20 text-val-emerald border border-val-emerald/40 text-[11px] font-mono font-bold uppercase rounded-xs mb-2">
                <Clock className="w-3.5 h-3.5 animate-pulse" />
                <span>EXPIRA EM: {formatTimer(timeLeft)}</span>
              </div>
              <h3 className="font-display text-3xl font-bold uppercase tracking-wider text-val-offwhite leading-none">
                PAGUE COM <span className="text-val-emerald">PIX QR CODE</span>
              </h3>
              <p className="text-xs text-val-offwhite/70 font-sans mt-1">
                Abra o app do seu banco, escolha &ldquo;Pagar com Pix&rdquo; e escaneie o código ou copie a chave.
              </p>
            </div>

            {/* Tactical QR Code Container */}
            <div className="bg-val-dark/95 border-2 border-val-emerald/60 p-5 rounded-xs flex flex-col items-center justify-center relative mb-4">
              
              {/* Tactical Corners */}
              <div className="absolute top-2 left-2 text-[8px] font-mono text-val-emerald">
                PIX.RADIANTE.AUTH
              </div>
              <div className="absolute top-2 right-2 text-[8px] font-mono text-val-emerald animate-pulse">
                ● AGUARDANDO
              </div>

              {/* High-Tech Tactical QR Code (SVG) */}
              <div className="w-48 h-48 bg-white p-3 rounded-xs shadow-lg relative flex items-center justify-center">
                {/* SVG QR Code Simulation with Valorant Icon in center */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Outer corner anchors */}
                  <rect x="5" y="5" width="22" height="22" fill="#090D12" />
                  <rect x="8" y="8" width="16" height="16" fill="#ffffff" />
                  <rect x="11" y="11" width="10" height="10" fill="#090D12" />

                  <rect x="73" y="5" width="22" height="22" fill="#090D12" />
                  <rect x="76" y="8" width="16" height="16" fill="#ffffff" />
                  <rect x="79" y="11" width="10" height="10" fill="#090D12" />

                  <rect x="5" y="73" width="22" height="22" fill="#090D12" />
                  <rect x="8" y="76" width="16" height="16" fill="#ffffff" />
                  <rect x="11" y="79" width="10" height="10" fill="#090D12" />

                  {/* QR Matrix Random Pattern Simulation */}
                  <rect x="33" y="10" width="6" height="6" fill="#090D12" />
                  <rect x="45" y="12" width="6" height="6" fill="#090D12" />
                  <rect x="57" y="8" width="6" height="6" fill="#090D12" />
                  <rect x="35" y="24" width="6" height="6" fill="#090D12" />
                  <rect x="47" y="26" width="6" height="6" fill="#090D12" />
                  <rect x="60" y="22" width="6" height="6" fill="#090D12" />
                  <rect x="10" y="35" width="6" height="6" fill="#090D12" />
                  <rect x="22" y="45" width="6" height="6" fill="#090D12" />
                  <rect x="75" y="35" width="6" height="6" fill="#090D12" />
                  <rect x="85" y="47" width="6" height="6" fill="#090D12" />
                  <rect x="35" y="72" width="6" height="6" fill="#090D12" />
                  <rect x="48" y="78" width="6" height="6" fill="#090D12" />
                  <rect x="65" y="74" width="6" height="6" fill="#090D12" />
                  <rect x="75" y="80" width="6" height="6" fill="#090D12" />
                  <rect x="85" y="70" width="6" height="6" fill="#090D12" />

                  {/* Center Valorant Emblem */}
                  <rect x="40" y="40" width="20" height="20" fill="#FF4655" rx="2" />
                  <path d="M 46 45 L 54 55 M 54 45 L 46 55" stroke="#ffffff" strokeWidth="2.5" />
                </svg>
              </div>

              {/* Price Tag */}
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs font-tactical text-val-gray uppercase">Valor com Desconto:</span>
                <span className="font-display text-2xl font-bold text-val-emerald">
                  R$ {finalPrice}
                </span>
              </div>
            </div>

            {/* PIX Copia e Cola Field */}
            <div className="mb-4">
              <label className="block text-[10px] font-mono text-val-gray uppercase mb-1">
                PIX COPIA E COLA (CÓDIGO DE PAGAMENTO):
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  readOnly
                  value={pixCopiaECola}
                  className="flex-grow bg-val-dark border border-val-border text-val-offwhite px-3 py-2 rounded-xs text-[11px] font-mono focus:outline-none select-all"
                />
                <button
                  type="button"
                  onClick={handleCopyPix}
                  className={`px-4 py-2 font-tactical text-xs font-bold uppercase clip-button flex items-center gap-1.5 transition-all ${
                    copiedPix
                      ? "bg-val-emerald text-val-black"
                      : "bg-val-red hover:bg-val-red-dark text-white"
                  }`}
                >
                  {copiedPix ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>COPIADO!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>COPIAR</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Simulated Live Payment Action (para demonstração perfeita) */}
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={handlePaymentSuccess}
                className="w-full py-3.5 bg-val-emerald hover:bg-emerald-400 text-val-black font-tactical text-sm font-bold tracking-widest uppercase clip-button shadow-lg shadow-val-emerald/30 transition-all flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-val-black" />
                <span>CONFIRMAR / SIMULAR APROVAÇÃO DO PIX</span>
              </button>

              <button
                type="button"
                onClick={() => setStep("form")}
                className="w-full py-2 bg-transparent hover:bg-val-slate text-val-gray hover:text-val-offwhite font-tactical text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Voltar e alterar dados
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: TELA DE SUCESSO & LIBERAÇÃO IMEDIATA */}
        {step === "success" && (
          <div className="text-center py-4 animate-fadeIn">
            <div className="w-16 h-16 bg-val-emerald/20 border-2 border-val-emerald text-val-emerald flex items-center justify-center mx-auto rounded-full mb-3 shadow-lg shadow-val-emerald/30">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-val-emerald/20 text-val-emerald border border-val-emerald/40 text-[10px] font-mono font-bold uppercase rounded-xs mb-2">
              <span>PAGAMENTO APROVADO COM SUCESSO</span>
            </div>

            <h3 className="font-display text-3xl font-bold uppercase tracking-wider text-val-offwhite mb-2 leading-none">
              BEM-VINDO AO <span className="text-val-red">PROTOCOLO</span>!
            </h3>

            <p className="text-sm text-val-offwhite/85 font-sans max-w-md mx-auto mb-5">
              Parabéns, <strong>{name || "Agente"}</strong>! Seu acesso ao <strong>{selectedPlan}</strong> está ativo para a conta <strong>{riotId || "Sua Conta"}</strong>.
            </p>

            <div className="bg-val-dark p-4 border border-val-border rounded-xs text-xs text-left space-y-2.5 mb-6">
              <div className="flex items-center justify-between text-val-offwhite">
                <span className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-val-emerald" />
                  Módulos de Treino & Planilhas:
                </span>
                <span className="text-val-emerald font-bold font-mono">LIBERADOS</span>
              </div>
              <div className="flex items-center justify-between text-val-offwhite">
                <span className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-val-emerald" />
                  Acesso à Guilda no Discord:
                </span>
                <span className="text-val-emerald font-bold font-mono">ENVIADO NO E-MAIL</span>
              </div>
              <div className="flex items-center justify-between text-val-offwhite">
                <span className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-val-emerald" />
                  Garantia Spike de 14 Dias:
                </span>
                <span className="text-val-emerald font-bold font-mono">ATIVA</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  sounds.playClick();
                  onClose();
                  setStep("form");
                }}
                className="w-full sm:w-auto flex-grow py-3 bg-val-red hover:bg-val-red-dark text-white font-tactical text-xs font-bold tracking-widest uppercase clip-button"
              >
                RETORNAR À PLATAFORMA
              </button>

              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-val-slate hover:bg-val-card border border-val-border text-val-offwhite font-tactical text-xs font-bold tracking-widest uppercase clip-button flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-val-cyan" />
                <span>ENTRAR NO DISCORD VIP</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
