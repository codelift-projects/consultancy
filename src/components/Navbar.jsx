import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { ENGINEERS } from '../data/mockData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Live Demos', href: '#demos' },
    { label: 'Features', href: '#features' },
    { label: 'Happy Customers', href: '#happy-customers' },
  ];

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 80);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Left: Favicon SVG Logo + Brand */}
            <a href="#" className="flex items-center gap-2.5 group focus:outline-none">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition">
                <svg 
                  className="w-5 h-5" 
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
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 font-display">
                FreeStyle <span className="text-blue-600">Systems</span>
              </span>
            </a>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={ENGINEERS.anurag.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 px-3.5 py-2 rounded-xl text-sm transition min-h-[44px]"
              >
                Talk to Engineer
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm px-4 py-2 rounded-xl text-sm transition min-h-[44px]"
              >
                Book Demo
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-100 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Open Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Slide-Over Drawer - Fixed Viewport Root */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity animate-in fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Body */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl flex flex-col justify-between p-5 z-[101] overflow-y-auto animate-in slide-in-from-right duration-200">
            
            <div className="space-y-4">
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
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
                  <span className="font-extrabold text-base text-slate-900">
                    FreeStyle Systems
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-700 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1 pt-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => handleLinkClick(link.href)}
                    className="w-full text-left block px-3.5 py-3 text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition min-h-[44px]"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Direct Engineer Lines */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Direct Engineering Desk
              </div>

              <a
                href={ENGINEERS.anurag.callLink}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>Anurag Choudhary</span>
                </div>
                <span className="font-bold text-blue-600 font-mono text-[11px]">{ENGINEERS.anurag.phone}</span>
              </a>

              <div className="pt-1">
                <a
                  href={ENGINEERS.anurag.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs shadow-sm transition min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Talk on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
