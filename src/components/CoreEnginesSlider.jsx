import React, { useState, useEffect } from 'react';
import { 
  Package, 
  Receipt, 
  QrCode, 
  BarChart3, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  BellRing,
  Send,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ENGINES = [
  {
    id: 'inventory',
    icon: Package,
    title: 'Smart Inventory Control',
    desc: 'Recipe-level depletion with auto low-stock alerts.',
    tabId: 'inventory',
    preview: (
      <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200 text-xs space-y-1.5">
        <div className="flex justify-between font-bold text-slate-800">
          <span>Espresso Roast (1kg)</span>
          <span className="text-red-600 font-mono">2 Bags Left</span>
        </div>
        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
          <div className="bg-red-500 h-full w-1/4 rounded-full" />
        </div>
        <div className="flex items-center justify-between text-[10px] text-red-600 font-semibold pt-0.5">
          <span className="flex items-center gap-1">
            <BellRing className="w-3 h-3" /> Auto Alert Triggered
          </span>
          <span className="text-blue-600 font-mono">Reorder PO</span>
        </div>
      </div>
    )
  },
  {
    id: 'pos',
    icon: Receipt,
    title: 'Instant WhatsApp Billing',
    desc: 'Tap-to-bill POS. GST invoice on WhatsApp in 2 seconds.',
    tabId: 'pos',
    preview: (
      <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200 text-xs space-y-1.5">
        <div className="flex justify-between font-bold text-slate-800 font-mono">
          <span>INV-4890</span>
          <span className="text-emerald-600">₹420.00</span>
        </div>
        <div className="text-[10px] text-slate-500 flex justify-between">
          <span>Paneer Roll + Cold Brew</span>
          <span className="text-slate-400">GST 5%</span>
        </div>
        <div className="flex items-center justify-between text-[10px] text-blue-600 font-bold pt-0.5">
          <span className="flex items-center gap-1">
            <Send className="w-3 h-3" /> WhatsApp Delivered
          </span>
          <span className="text-slate-400 font-mono">+91 9511896416</span>
        </div>
      </div>
    )
  },
  {
    id: 'restaurant',
    icon: QrCode,
    title: 'QR Menu & Kitchen Tokens',
    desc: 'Scan, order, track every dish from table to serve.',
    tabId: 'restaurant',
    preview: (
      <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200 text-xs space-y-1.5">
        <div className="flex justify-between items-center font-bold text-slate-800">
          <span className="font-mono text-sm text-blue-600">Token #104</span>
          <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-bold">
            In Kitchen
          </span>
        </div>
        <div className="text-[10px] text-slate-500">
          Table 3 • 2 Dishes
        </div>
        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
          <div className="bg-amber-500 h-full w-2/3 rounded-full" />
        </div>
      </div>
    )
  },
  {
    id: 'reports',
    icon: BarChart3,
    title: 'Automated BI Reports',
    desc: 'Daily profit & top-seller breakdown in real time.',
    tabId: 'reports',
    preview: (
      <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200 text-xs space-y-1.5">
        <div className="flex justify-between font-bold text-slate-800">
          <span>Daily Revenue</span>
          <span className="text-emerald-600 font-mono font-bold">₹84,320</span>
        </div>
        <div className="text-[10px] text-slate-500 flex justify-between">
          <span>Net Margin: 22.4%</span>
          <span className="text-slate-700 font-medium">58 Sold</span>
        </div>
        <div className="text-[10px] text-purple-700 font-semibold pt-0.5">
          <span>Live Metrics Dashboard</span>
        </div>
      </div>
    )
  }
];

export const CoreEnginesSlider = ({ onSelectTab }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ENGINES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? ENGINES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ENGINES.length);
  };

  const handleOpenDemo = (tabId) => {
    if (onSelectTab) {
      onSelectTab(tabId);
    }
    const element = document.getElementById('demos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="py-2 sm:py-8">
      <div className="space-y-3 sm:space-y-6">
        
        {/* Section Header with Arrows */}
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>Core Architecture</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              Multi Engines. One System.
            </h2>
          </div>

          {/* Desktop & Mobile Arrow Controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition min-h-[38px] min-w-[38px] flex items-center justify-center shadow-2xs"
              title="Previous Engine"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition min-h-[38px] min-w-[38px] flex items-center justify-center shadow-2xs"
              title="Next Engine"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Container with Touch Drag Swipe */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Mobile Swipeable Card */}
          <div className="sm:hidden touch-pan-y">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -40 || info.velocity.x < -300) {
                    handleNext();
                  } else if (info.offset.x > 40 || info.velocity.x > 300) {
                    handlePrev();
                  }
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3 cursor-grab active:cursor-grabbing select-none"
              >
                {(() => {
                  const engine = ENGINES[currentIndex];
                  const Icon = engine.icon;
                  return (
                    <>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-slate-900 leading-snug">{engine.title}</h3>
                            <span className="text-[10px] text-slate-400 font-mono">Engine 0{currentIndex + 1} of 04</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {engine.desc}
                      </p>

                      <div>
                        {engine.preview}
                      </div>

                      <button
                        onClick={() => handleOpenDemo(engine.tabId)}
                        className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition shadow-2xs min-h-[40px]"
                      >
                        <span>Open Live Demo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Multi-Card Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ENGINES.map((engine, idx) => {
              const Icon = engine.icon;
              const isCurrent = currentIndex === idx;
              return (
                <div
                  key={engine.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`bg-white rounded-2xl border p-4 shadow-sm flex flex-col justify-between space-y-3 transition-all duration-150 cursor-pointer ${
                    isCurrent ? 'border-blue-500 ring-2 ring-blue-500/10 shadow-md' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {engine.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {engine.desc}
                    </p>

                    <div>
                      {engine.preview}
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenDemo(engine.tabId);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 pt-1 group"
                  >
                    <span>Open Demo</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-1.5 pt-3">
            {ENGINES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all min-h-[6px] ${
                  currentIndex === idx ? 'w-5 bg-blue-600' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
                title={`Engine 0${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
