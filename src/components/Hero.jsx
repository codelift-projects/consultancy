import React from 'react';
import { Sparkles, ArrowRight, MessageCircle, Zap, ShieldCheck, Phone } from 'lucide-react';
import { ENGINEERS } from '../data/mockData';

export const Hero = () => {
  return (
    <section className="pt-4 sm:pt-14 pb-6 sm:pb-16 text-center">
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Business OS & Automation Consultancy</span>
        </div>

        {/* H1 Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-display tracking-tight leading-[1.15]">
          High-Velocity Operations. <br className="hidden sm:inline" />
          <span className="text-blue-600">Zero Leakage. Zero Paper.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Inventory, billing, kitchen tokens, and daily BI — one complete system.
        </p>

        {/* 2 CTAs */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <a
            href="#demos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm shadow-sm hover:shadow-md transition min-h-[48px]"
          >
            <span>Try Live Demo</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={ENGINEERS.anurag.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl text-sm border border-slate-200 shadow-2xs transition min-h-[48px]"
          >
            <MessageCircle className="w-4 h-4 text-blue-600" />
            <span>Talk to an Engineer</span>
          </a>
        </div>

        {/* 3 Trust Chips */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/80 border border-slate-200">
            <Zap className="w-4 h-4 text-blue-600" />
            <span>48-Hour Onboarding</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/80 border border-slate-200">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Role-Based Access</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/80 border border-slate-200">
            <MessageCircle className="w-4 h-4 text-blue-600" />
            <span>WhatsApp Native</span>
          </div>
        </div>

      </div>
    </section>
  );
};
