import React from 'react';
import { TrendingUp, BarChart2 } from 'lucide-react';
import { BI_STATS, WEEKLY_SALES_DATA, TOP_SELLING_ITEMS } from '../data/mockData';

export const BiReportDemo = () => {
  return (
    <div className="space-y-3">
      
      {/* 3 KPI Cards */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
        
        {/* Card 1: Revenue */}
        <div className="p-2 sm:p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-0.5">
          <span className="text-[10px] text-slate-400 font-semibold block">Revenue</span>
          <div className="text-xs sm:text-xl font-extrabold text-slate-900 font-mono">
            {BI_STATS.revenue}
          </div>
          <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5">
            <TrendingUp className="w-2.5 h-2.5" /> +14%
          </div>
        </div>

        {/* Card 2: Margin */}
        <div className="p-2 sm:p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-0.5">
          <span className="text-[10px] text-slate-400 font-semibold block">Margin</span>
          <div className="text-xs sm:text-xl font-extrabold text-slate-900 font-mono">
            {BI_STATS.margin}
          </div>
          <span className="text-[10px] text-slate-400 block">Food Cost</span>
        </div>

        {/* Card 3: Top Seller */}
        <div className="p-2 sm:p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-0.5">
          <span className="text-[10px] text-slate-400 font-semibold block">Top Item</span>
          <div className="text-[11px] sm:text-sm font-bold text-slate-900 truncate">
            {BI_STATS.topSeller}
          </div>
          <span className="text-[10px] text-slate-400 block">58 Sold</span>
        </div>

      </div>

      {/* 7-Day Revenue Velocity Chart */}
      <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 font-bold text-slate-900">
            <BarChart2 className="w-3.5 h-3.5 text-blue-600" />
            <span>7-Day Revenue Velocity</span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">Real-Time</span>
        </div>

        <div className="pt-2 pb-1 flex items-end justify-between gap-1.5 h-24 border-b border-slate-100">
          {WEEKLY_SALES_DATA.map((item) => (
            <div key={item.day} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
              <div
                style={{ height: `${item.heightPct}%` }}
                className="w-full max-w-[24px] bg-blue-600 rounded-t-sm"
              />
              <span className="text-[10px] font-mono text-slate-500 font-semibold">
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Top 5 Items Compact Table */}
      <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
        <div className="text-xs font-bold text-slate-900">
          Top Sellers Today
        </div>

        <div className="divide-y divide-slate-100 text-xs">
          {TOP_SELLING_ITEMS.slice(0, 3).map((item) => (
            <div key={item.rank} className="py-1.5 flex items-center justify-between">
              <div className="flex items-center gap-2 truncate pr-2">
                <span className="font-mono text-slate-400 text-[10px]">#{item.rank}</span>
                <span className="font-semibold text-slate-800 truncate">{item.name}</span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-slate-400 text-[11px]">{item.qty} sold</span>
                <span className="font-mono font-bold text-slate-900 text-right">
                  {item.revenue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
