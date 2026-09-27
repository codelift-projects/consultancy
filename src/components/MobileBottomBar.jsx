import React, { useState, useEffect } from 'react';
import { Package, Receipt, MessageCircle } from 'lucide-react';
import { ENGINEERS } from '../data/mockData';

export const MobileBottomBar = ({ onSelectTab }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show on top or when scrolling up
      if (currentScrollY < 50 || currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleTabJump = (tabId) => {
    if (onSelectTab) {
      onSelectTab(tabId);
    }
    const element = document.getElementById('demos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 shadow-xl transition-transform duration-300 safe-area-pb ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
        
        {/* Target 1: Inventory */}
        <button
          onClick={() => handleTabJump('inventory')}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition min-h-[48px]"
        >
          <Package className="w-5 h-5 text-blue-600" />
          <span className="text-[11px] font-bold mt-0.5">Inventory</span>
        </button>

        {/* Target 2: POS */}
        <button
          onClick={() => handleTabJump('pos')}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition min-h-[48px]"
        >
          <Receipt className="w-5 h-5 text-blue-600" />
          <span className="text-[11px] font-bold mt-0.5">POS Billing</span>
        </button>

        {/* Target 3: WhatsApp */}
        <a
          href={ENGINEERS.anurag.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition min-h-[48px] shadow-sm"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[11px] font-bold mt-0.5">WhatsApp</span>
        </a>

      </div>
    </div>
  );
};
