import React from 'react';
import {
  ExternalLink,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  Code2,
  HeartHandshake,
  Quote,
  Star,
  Users,
  Zap,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export const ClientShowcase = () => {
  return (
    <section id="happy-customers" className="py-4 sm:py-8 scroll-mt-20">
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">

        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">

          {/* Top Banner: Happy Customer Tag & Verified Rating */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2.5 flex-wrap">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 shadow-2xs">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                <span>Happy Customer Spotlight</span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                Live Production Deployment
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-amber-300 font-mono font-semibold">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white font-bold ml-1">5.0 / 5.0</span>
              <span className="text-slate-400 text-[11px]">(Verified Client)</span>
            </div>
          </div>

          {/* Main Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

            {/* Left 7 Cols: Customer Profile & Testimonial */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-white/10 p-1.5 flex items-center justify-center shadow-md border border-slate-700 shrink-0 overflow-hidden">
                  <img
                    src="/brand.png"
                    alt="CodeLift"
                    className="w-full h-full object-contain rounded-xl"
                    onError={(e) => {
                      e.currentTarget.src = 'https://codelift-official.github.io/platform/brand.png';
                    }}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white font-display">
                      CodeLift Academy
                    </h3>
                    <span className="text-[10px] font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full border border-blue-400/30">
                      EdTech OS
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">
                    Premier Technical Coding Institute & Student LMS Platform
                  </p>
                </div>
              </div>

              {/* Verified Customer Quote Card */}
              <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 text-xs sm:text-sm text-slate-200 space-y-2 relative shadow-inner">
                <Quote className="w-6 h-6 text-blue-500/20 absolute top-3 right-3" />
                <p className="leading-relaxed italic text-slate-300">
                  "Fully Working, Secure & Beautiful Website Students Love — With Proper Fees Management, WhatsApp Receipts & Smooth Code Runner. Value for Money work. Team also very cooperative."
                </p>
                <div className="not-italic text-[11px] font-bold text-blue-400 pt-1 flex items-center justify-between border-t border-slate-800/80">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified Production Client</span>
                  </span>
                  <span className="text-slate-400 font-mono font-normal">Active Since 2025</span>
                </div>
              </div>

              {/* 3 Impact Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-center">
                  <div className="text-sm sm:text-base font-extrabold text-white font-mono">100%</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">Automated Fees</div>
                </div>
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-center">
                  <div className="text-sm sm:text-base font-extrabold text-emerald-400 font-mono">&lt; 3 Sec</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">WhatsApp Alert</div>
                </div>
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-center">
                  <div className="text-sm sm:text-base font-extrabold text-blue-400 font-mono">24+ Themes</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">Student Portals</div>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: System Capabilities Card + Direct Redirect */}
            <div className="lg:col-span-5 bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-4 shadow-lg">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    <span>Operating System Modules</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    Live
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-300 pt-1">
                  <div className="flex items-start gap-2 p-2 bg-slate-800/60 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-[11px]">Batch & Enrollment Automation</div>
                      <div className="text-[10px] text-slate-400">Automated scheduling and real-time attendance</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-2 bg-slate-800/60 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-[11px]">Online Code Test Compiler</div>
                      <div className="text-[10px] text-slate-400">Browser-based test execution & scoring</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-2 bg-slate-800/60 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-[11px]">Instant WhatsApp Receipts</div>
                      <div className="text-[10px] text-slate-400">Automated invoices sent directly to parents</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-1">
                <a
                  href="https://codelift-official.github.io/platform/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs sm:text-sm transition shadow-md shadow-blue-600/20 min-h-[44px] group"
                >
                  <span>Visit CodeLift Platform (Live Client)</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
