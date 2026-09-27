import React, { useState } from 'react';
import { Package, AlertCircle, Send, CheckCircle2, RotateCcw } from 'lucide-react';
import { INITIAL_INVENTORY_ITEMS } from '../data/mockData';
import { buildWhatsAppLink } from '../utils/whatsapp';

export const InventoryDemo = ({ onTriggerToast }) => {
  const [items, setItems] = useState(INITIAL_INVENTORY_ITEMS);

  const handleStockChange = (id, newStock) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, stock: parseInt(newStock, 10) || 0 } : item
      )
    );
  };

  const handleReset = () => {
    setItems(INITIAL_INVENTORY_ITEMS);
    if (onTriggerToast) {
      onTriggerToast('info', 'Stock Reset', 'Reset inventory to default levels.');
    }
  };

  const lowStockItems = items.filter((item) => item.stock < item.threshold);
  const hasLowStock = lowStockItems.length > 0;

  const handleSendWhatsAppPO = () => {
    if (!hasLowStock) {
      if (onTriggerToast) {
        onTriggerToast('info', 'Stock Healthy', 'All items are above safety thresholds.');
      }
      return;
    }

    const poLines = lowStockItems.map(
      (item) => `• ${item.name}: ${item.stock} ${item.unit} (Min: ${item.threshold})`
    );

    const poText = `*FREESTYLE SYSTEMS — SUPPLIER RE-ORDER*\n\n` +
      `Low stock alert:\n` +
      poLines.join('\n') +
      `\n\nPlease dispatch replacements.`;

    const waUrl = buildWhatsAppLink('919511896416', poText);
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    if (onTriggerToast) {
      onTriggerToast('success', 'Order Sent', `Redirected to WhatsApp for ${lowStockItems.length} items.`);
    }
  };

  return (
    <div className="space-y-3">
      
      {/* Top Banner */}
      {hasLowStock ? (
        <div className="p-2.5 bg-red-50 border border-red-200 rounded-xl flex items-center justify-between text-xs text-red-800">
          <div className="flex items-center gap-1.5 font-bold">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>{lowStockItems.length} item{lowStockItems.length > 1 ? 's' : ''} below safety threshold</span>
          </div>
          <button
            onClick={handleSendWhatsAppPO}
            className="text-red-700 underline font-bold hover:text-red-900"
          >
            Reorder
          </button>
        </div>
      ) : (
        <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-1.5 text-xs text-emerald-800 font-bold">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>All 5 inventory items healthy.</span>
        </div>
      )}

      {/* 5 SKU Compact Table */}
      <div className="space-y-2">
        {items.map((item) => {
          const isLow = item.stock < item.threshold;
          return (
            <div
              key={item.id}
              className={`p-3 rounded-xl border transition-all ${
                isLow
                  ? 'bg-red-50/50 border-red-300 ring-1 ring-red-300'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between gap-2 pb-1.5">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <Package className={`w-3.5 h-3.5 shrink-0 ${isLow ? 'text-red-600' : 'text-slate-400'}`} />
                  <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">{item.name}</span>
                </div>

                <div className="shrink-0 flex items-center">
                  {isLow ? (
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-red-100 text-red-700">
                      {item.stock} left (Low)
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {item.stock} {item.unit}
                    </span>
                  )}
                </div>
              </div>

              {/* Slider */}
              <div className="flex items-center gap-2 pt-0.5">
                <span className="text-[10px] text-slate-400 font-mono">0</span>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={item.stock}
                  onChange={(e) => handleStockChange(item.id, e.target.value)}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 min-h-[36px]"
                  aria-label={`Adjust stock for ${item.name}`}
                />
                <span className="text-[10px] text-slate-400 font-mono">20</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2">
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 p-2"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>

        <button
          onClick={handleSendWhatsAppPO}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs shadow-sm transition min-h-[40px]"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Send Reorder on WhatsApp</span>
        </button>
      </div>

    </div>
  );
};
