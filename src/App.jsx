import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreEnginesSlider } from './components/CoreEnginesSlider';
import { DemosSection } from './components/DemosSection';
import { FeatureChecklist } from './components/FeatureChecklist';
import { HowItWorks } from './components/HowItWorks';
import { ClientShowcase } from './components/ClientShowcase';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { Toast } from './components/Toast';

export function App() {
  const [activeDemoTab, setActiveDemoTab] = useState('inventory');
  const [toasts, setToasts] = useState([]);

  const handleTriggerToast = (type, title, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2500);
  };

  const handleDismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Toast Notification Container */}
      <Toast toasts={toasts} onDismiss={handleDismissToast} />

      {/* 1) Sticky Navbar */}
      <Navbar />

      {/* Main Single-Page Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 pb-20 md:pb-12 space-y-1 sm:space-y-4">
        {/* 2) Hero */}
        <Hero />

        {/* 3) Core Engines Slider */}
        <CoreEnginesSlider onSelectTab={setActiveDemoTab} />

        {/* 4) Live Demos (Tabbed) */}
        <DemosSection
          activeTab={activeDemoTab}
          setActiveTab={setActiveDemoTab}
          onTriggerToast={handleTriggerToast}
        />

        {/* 5) Feature Checklist */}
        <FeatureChecklist />

        {/* 6) How It Works Timeline */}
        <HowItWorks />

        {/* 7) Live Coding Institute Client Platform Showcase (CodeLift) */}
        <ClientShowcase />

        {/* 8) Contact & Walkthrough Form */}
        <ContactSection onTriggerToast={handleTriggerToast} />
      </main>

      {/* 8) Footer */}
      <Footer />

      {/* 9) Mobile Sticky Bottom Bar */}
      <MobileBottomBar onSelectTab={setActiveDemoTab} />
    </div>
  );
}

export default App;
