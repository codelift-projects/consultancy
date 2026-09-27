import React from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { ENGINEERS } from '../data/mockData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-600">
      <div className="max-w-6xl mx-auto px-4 space-y-8">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-100">

          {/* Brand & Tagline */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="7" height="9" x="3" y="3" rx="1" />
                  <rect width="7" height="5" x="14" y="3" rx="1" />
                  <rect width="7" height="9" x="14" y="12" rx="1" />
                  <rect width="7" height="5" x="3" y="16" rx="1" />
                </svg>
              </div>
              <span className="font-extrabold text-base text-slate-900 tracking-tight font-display">
                FreeStyle Systems
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm">
              Inventory, billing, kitchen tokens, and daily BI — one complete system.
            </p>
          </div>

          {/* Anchor Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-slate-600">
            <a href="#solutions" className="hover:text-blue-600 transition">Solutions</a>
            <a href="#demos" className="hover:text-blue-600 transition">Live Demos</a>
            <a href="#features" className="hover:text-blue-600 transition">Features</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-700 transition"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar with Contact Lines & Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4 font-mono">
            <a href={ENGINEERS.anurag.callLink} className="hover:text-blue-600 transition">
              Anurag Choudhary: {ENGINEERS.anurag.phone}
            </a>
          </div>

          <div>
            © 2025 FreeStyle Systems. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
