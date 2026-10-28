"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { KillfeedTicker } from "@/components/KillfeedTicker";
import { Hero } from "@/components/Hero";
import { EloCalculator } from "@/components/EloCalculator";
import { Curriculum } from "@/components/Curriculum";
import { CoachingRoster } from "@/components/CoachingRoster";
import { StorePricing } from "@/components/StorePricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { CheckoutModal } from "@/components/CheckoutModal";
import { sounds } from "@/components/AudioEngine";
import { Crosshair } from "lucide-react";

export default function Home() {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState("Academy Pro");

  const handleOpenCheckout = (planName: string = "Academy Pro") => {
    setSelectedPlanForCheckout(planName);
    setCheckoutModalOpen(true);
  };

  const handleScrollToCalculator = () => {
    const el = document.getElementById("calculadora");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-val-dark text-val-offwhite overflow-x-hidden selection:bg-val-red selection:text-white">
      {/* Top Fixed Tactical Navbar */}
      <Navbar onOpenCheckout={handleOpenCheckout} />

      {/* Hero Section */}
      <Hero
        onOpenCheckout={handleOpenCheckout}
        onScrollToCalculator={handleScrollToCalculator}
      />

      {/* Live Killfeed Ticker with Real-time Student Updates */}
      <KillfeedTicker />

      {/* Interactive Elo Progression & Diagnosis Calculator */}
      <EloCalculator onOpenCheckout={handleOpenCheckout} />

      {/* The 4 Tactical Pillars Curriculum */}
      <div id="metodologia">
        <Curriculum onOpenCheckout={handleOpenCheckout} />
      </div>

      {/* Top 100 Coaches Roster */}
      <CoachingRoster onOpenCheckout={handleOpenCheckout} />

      {/* Store & Pricing Tiers */}
      <StorePricing onOpenCheckout={handleOpenCheckout} />

      {/* Social Proof & Verified Tracker.gg Testimonials */}
      <Testimonials />

      {/* Tactical FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Interactive Tactical Checkout & Lead Capture Modal */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        defaultPlan={selectedPlanForCheckout}
      />

      {/* Floating Tactical Quick-Action Pill on Mobile/Desktop */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2">
        <button
          onClick={() => {
            sounds.playSpike();
            handleOpenCheckout("Academy Pro");
          }}
          onMouseEnter={() => sounds.playHover()}
          className="px-4 py-2.5 bg-val-red hover:bg-val-red-dark text-white font-tactical text-xs font-bold tracking-widest uppercase clip-button shadow-2xl shadow-val-red/50 border border-white/20 flex items-center gap-2 transform hover:scale-105 active:scale-95 transition-all"
        >
          <Crosshair className="w-4 h-4 animate-spin-slow" />
          <span>GARANTIR VAGA (14 DIAS SEM RISCO)</span>
        </button>
      </div>
    </main>
  );
}
