import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { ENGINEERS } from '../data/mockData';

export const MobileBottomBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
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

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-xl transition-transform duration-300 safe-area-pb ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
        
        {/* Direct Call to Lead Architect */}
        <a
          href={ENGINEERS.anurag.callLink}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition min-h-[44px] border border-slate-200"
        >
          <Phone className="w-4 h-4 text-blue-600" />
          <span>Call Anurag</span>
        </a>

        {/* Direct WhatsApp */}
        <a
          href={ENGINEERS.anurag.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition min-h-[44px] shadow-sm shadow-blue-600/20"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Chat</span>
        </a>

      </div>
    </div>
  );
};
