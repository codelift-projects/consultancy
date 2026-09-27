import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = ({ toasts = [], onDismiss }) => {
  if (!toasts.length) return null;

  return (
    <div className="fixed z-50 pointer-events-none flex flex-col gap-2 p-4 inset-x-0 top-4 items-center sm:inset-x-auto sm:top-auto sm:right-4 sm:bottom-4 sm:items-end">
      {toasts.map((toast) => {
        const icons = {
          success: CheckCircle2,
          error: AlertCircle,
          info: Info
        };
        const Icon = icons[toast.type] || CheckCircle2;

        const borderColors = {
          success: 'border-emerald-200 bg-white text-slate-900',
          error: 'border-red-200 bg-white text-slate-900',
          info: 'border-blue-200 bg-white text-slate-900'
        };

        const iconColors = {
          success: 'text-emerald-600',
          error: 'text-red-600',
          info: 'text-blue-600'
        };

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg max-w-sm w-full animate-in fade-in slide-in-from-top-2 sm:slide-in-from-bottom-2 duration-200 ${borderColors[toast.type] || borderColors.success}`}
          >
            <Icon className={`w-5 h-5 shrink-0 ${iconColors[toast.type] || iconColors.success}`} />
            <div className="flex-1 text-xs sm:text-sm">
              {toast.title && <div className="font-bold">{toast.title}</div>}
              {toast.message && <div className="text-slate-600 text-xs mt-0.5">{toast.message}</div>}
            </div>
            {onDismiss && (
              <button
                onClick={() => onDismiss(toast.id)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};
