import React from 'react';
import { Package, Receipt, QrCode, BarChart3, Sparkles, ChevronDown, ChevronUp, X, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { InventoryDemo } from '../demos/InventoryDemo';
import { PosDemo } from '../demos/PosDemo';
import { QrTokenDemo } from '../demos/QrTokenDemo';
import { BiReportDemo } from '../demos/BiReportDemo';

const DEMO_TABS = [
  { id: 'inventory', label: 'Inventory', icon: Package },
  { id: 'pos', label: 'POS Billing', icon: Receipt },
  { id: 'restaurant', label: 'QR Tokens', icon: QrCode },
  { id: 'reports', label: 'BI Reports', icon: BarChart3 },
];

export const DemosSection = ({
  activeTab,
  setActiveTab,
  isOpen,
  setIsOpen,
  onTriggerToast
}) => {
  return (
    <section id="demos" className="py-3 sm:py-8 scroll-mt-20">
      {!isOpen ? (
        /* Collapsed State: Sleek Interactive Teaser Card */
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-slate-50 rounded-2xl border border-blue-200/80 p-5 sm:p-8 shadow-xs text-center space-y-3 relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-white text-blue-700 border border-blue-200 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Interactive Sandbox</span>
          </div>

          <div className="max-w-xl mx-auto space-y-1">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-display">
              Try FreeStyle OS Live in Your Browser
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Test inventory sliders, generate WhatsApp tax invoices, simulate live kitchen tokens, and view real-time BI velocity.
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md shadow-blue-600/20 hover:shadow-lg transition min-h-[44px] group"
            >
              <Play className="w-4 h-4 fill-white text-white group-hover:scale-110 transition" />
              <span>Launch Interactive Sandbox</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition" />
            </button>
          </div>
        </div>
      ) : (
        /* Expanded State: Full Interactive Sandboxes */
        <div className="space-y-3 sm:space-y-5 animate-in fade-in duration-200">
          
          {/* Top Bar with Heading and Close Button */}
          <div className="flex items-center justify-between gap-3 bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-extrabold text-slate-900 font-display">
                  Live Sandbox Simulation
                </h2>
                <p className="text-[11px] text-slate-500 hidden sm:block">
                  Mock environment — tap controls to trigger live automations
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition min-h-[36px]"
              title="Close Sandbox"
            >
              <X className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Close Sandbox</span>
            </button>
          </div>

          {/* Tab Selector Bar - Compact & Clean */}
          <div className="w-full overflow-x-auto pb-1 scrollbar-hide flex sm:justify-center">
            <div className="inline-flex items-center gap-1 p-1 bg-slate-200/80 rounded-2xl border border-slate-300/60 shrink-0">
              {DEMO_TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all shrink-0 min-h-[38px] select-none ${
                      isActive
                        ? 'bg-white text-blue-600 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Demo Stage Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-3.5 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.12 }}
              >
                {activeTab === 'inventory' && (
                  <InventoryDemo onTriggerToast={onTriggerToast} />
                )}
                {activeTab === 'pos' && (
                  <PosDemo onTriggerToast={onTriggerToast} />
                )}
                {activeTab === 'restaurant' && (
                  <QrTokenDemo onTriggerToast={onTriggerToast} />
                )}
                {activeTab === 'reports' && (
                  <BiReportDemo onTriggerToast={onTriggerToast} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      )}
    </section>
  );
};
