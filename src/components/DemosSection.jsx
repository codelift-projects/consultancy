import React from 'react';
import { Package, Receipt, QrCode, BarChart3, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { InventoryDemo } from '../demos/InventoryDemo';
import { PosDemo } from '../demos/PosDemo';
import { QrTokenDemo } from '../demos/QrTokenDemo';
import { BiReportDemo } from '../demos/BiReportDemo';

const DEMO_TABS = [
  { id: 'inventory', label: 'Inventory Control', icon: Package },
  { id: 'pos', label: 'POS Billing', icon: Receipt },
  { id: 'restaurant', label: 'QR & Tokens', icon: QrCode },
  { id: 'reports', label: 'BI Reports', icon: BarChart3 },
];

export const DemosSection = ({ activeTab, setActiveTab, onTriggerToast }) => {
  return (
    <section id="demos" className="py-4 sm:py-12">
      <div className="space-y-4 sm:space-y-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span>Interactive Sandboxes</span>
          </div>

          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Try It Yourself — No Signup Needed
          </h2>
        </div>

        {/* Tab Selector Bar - Fully Touch Scrollable */}
        <div className="w-full overflow-x-auto pb-1 scrollbar-hide flex sm:justify-center">
          <div className="inline-flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-2xl border border-slate-300/60 shrink-0">
            {DEMO_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 min-h-[40px] select-none ${
                    isActive
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Demo Stage Card with Fade Transition */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
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
    </section>
  );
};
