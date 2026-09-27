import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { FEATURE_CHECKLIST_ITEMS } from '../data/mockData';

export const FeatureChecklist = () => {
  return (
    <section id="features" className="py-4 sm:py-8">
      <div className="space-y-4">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span>Platform Offerings</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-display">
            Everything You Get
          </h2>
        </div>

        {/* Compact 2-Column Feature Grid */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {FEATURE_CHECKLIST_ITEMS.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm font-semibold text-slate-800"
              >
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
