import React from 'react';
import { Sparkles } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';

export const HowItWorks = () => {
  return (
    <section className="py-4 sm:py-8">
      <div className="space-y-4 sm:space-y-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span>Turnkey Onboarding</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-display">
            How It Works
          </h2>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col justify-between space-y-2 hover:border-slate-300 transition"
            >
              <div className="space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs font-mono shadow-sm">
                  {step.step}
                </div>

                <h3 className="text-sm font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="pt-1 border-t border-slate-100 text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                Step {step.step}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
