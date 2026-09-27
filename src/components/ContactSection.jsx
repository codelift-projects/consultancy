import React, { useState } from 'react';
import { Phone, MessageSquare, Send, Sparkles } from 'lucide-react';
import { ENGINEERS } from '../data/mockData';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const ContactSection = ({ onTriggerToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      if (onTriggerToast) {
        onTriggerToast('error', 'Required', 'Enter your name and phone.');
      }
      return;
    }

    const text =
      `*FREESTYLE SYSTEMS — DEMO REQUEST*\n\n` +
      `*Name:* ${formData.name.trim()}\n` +
      `*Business:* ${formData.business.trim() || 'N/A'}\n` +
      `*Phone:* ${formData.phone.trim()}\n` +
      `*Note:* ${formData.message.trim() || 'Interested in live walkthrough.'}`;

    const waUrl = buildWhatsAppLink('919511896416', text);

    if (onTriggerToast) {
      onTriggerToast('success', 'Opening WhatsApp', 'Connecting with Anurag Choudhary.');
    }

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 300);

    setFormData({ name: '', business: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-4 sm:py-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-4 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Direct Call Links */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                <Sparkles className="w-3 h-3 text-blue-600" />
                <span>Get Started</span>
              </div>

              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                Book a 20-min walkthrough.
              </h2>
            </div>

            {/* Direct Tappable Phone Lines */}
            <div className="space-y-2 pt-1">
              <a
                href={ENGINEERS.anurag.callLink}
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">{ENGINEERS.anurag.name}</span>
                </div>
                <span className="font-mono text-xs font-bold text-blue-600">{ENGINEERS.anurag.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Callback Request Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[40px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="e.g. Spice Restaurant"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[40px]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Phone (WhatsApp) *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 95118 96416"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[40px]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Requirements
                </label>
                <textarea
                  name="message"
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Notes about your store..."
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-sm transition min-h-[42px]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Request Callback on WhatsApp</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
