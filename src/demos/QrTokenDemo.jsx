import React, { useState } from 'react';
import { Plus, ChefHat, ShoppingCart, ArrowRight } from 'lucide-react';
import { QR_DISHES } from '../data/mockData';

export const QrTokenDemo = ({ onTriggerToast }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([
    { id: 'qr-1', name: 'Paneer Butter Masala Bowl', price: 240, qty: 1 }
  ]);
  const [tokens, setTokens] = useState([
    {
      id: 103,
      table: 'Table 2',
      items: ['Dimsums x 1', 'Mango Cooler x 1'],
      total: 320,
      status: 'In Kitchen'
    }
  ]);
  const [nextTokenNumber, setNextTokenNumber] = useState(104);

  const categories = ['All', 'Food', 'Beverages', 'Specials'];

  const filteredDishes = selectedCategory === 'All'
    ? QR_DISHES
    : QR_DISHES.filter((d) => d.category === selectedCategory);

  const addToCart = (dish) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === dish.id);
      if (existing) {
        return prev.map((p) =>
          p.id === dish.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...dish, qty: 1 }];
    });
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalCartValue = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      if (onTriggerToast) {
        onTriggerToast('error', 'No Items', 'Select at least one dish.');
      }
      return;
    }

    const newToken = {
      id: nextTokenNumber,
      table: `Table ${Math.floor(Math.random() * 6) + 1}`,
      items: cart.map((c) => `${c.name.split(' ')[0]} x ${c.qty}`),
      total: totalCartValue,
      status: 'In Kitchen'
    };

    setTokens((prev) => [newToken, ...prev]);
    setNextTokenNumber((prev) => prev + 1);
    setCart([]);

    if (onTriggerToast) {
      onTriggerToast('success', `Token #${nextTokenNumber} Created`, 'Sent to kitchen.');
    }
  };

  const updateTokenStatus = (tokenId, newStatus) => {
    setTokens((prev) =>
      prev.map((t) => (t.id === tokenId ? { ...t, status: newStatus } : t))
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      
      {/* Menu & Ordering (7 Cols) */}
      <div className="lg:col-span-7 space-y-3">
        
        {/* Category Filter Pills & Cart Count */}
        <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1 scrollbar-hide">
          <div className="flex items-center gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg text-xs font-bold shrink-0 font-mono">
            <ShoppingCart className="w-3 h-3" />
            <span>{totalCartCount} (₹{totalCartValue})</span>
          </div>
        </div>

        {/* 6 Menu Items Grid */}
        <div className="grid grid-cols-2 gap-2">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-2xs flex flex-col justify-between space-y-2 hover:border-slate-300 transition min-h-[72px]"
            >
              <div>
                <div className="flex items-start justify-between gap-1">
                  <span className="text-xs font-bold text-slate-900 leading-snug line-clamp-1">
                    {dish.name}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-900 shrink-0">
                    ₹{dish.price}
                  </span>
                </div>
              </div>

              <button
                onClick={() => addToCart(dish)}
                className="w-full inline-flex items-center justify-center gap-1 py-1.5 bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white font-bold rounded-lg text-xs transition"
              >
                <Plus className="w-3 h-3" />
                <span>Add</span>
              </button>
            </div>
          ))}
        </div>

        {/* Place Order CTA Banner */}
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-2">
          <div className="text-xs font-bold text-slate-900 font-mono">
            {totalCartCount} items • ₹{totalCartValue}
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={cart.length === 0}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs shadow-sm transition disabled:opacity-50"
          >
            <span>Order (Token #{nextTokenNumber})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Kitchen Display Screen (5 Cols) */}
      <div className="lg:col-span-5 p-3.5 bg-slate-100 rounded-2xl border border-slate-200 space-y-2">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-slate-900">
            <ChefHat className="w-3.5 h-3.5 text-blue-600" />
            <span>Kitchen Board</span>
          </div>
          <span className="text-[10px] font-mono font-bold bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-600">
            {tokens.length} Active
          </span>
        </div>

        {/* Active Token Cards */}
        <div className="space-y-2 max-h-[300px] overflow-y-auto pr-0.5">
          {tokens.map((token) => {
            const isKitchen = token.status === 'In Kitchen';
            const isReady = token.status === 'Order Ready';
            const isServed = token.status === 'Served';

            return (
              <div
                key={token.id}
                className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 font-mono">
                    Token #{token.id} <span className="text-slate-400 font-normal">({token.table})</span>
                  </span>

                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                      isKitchen
                        ? 'bg-amber-100 text-amber-800'
                        : isReady
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {token.status}
                  </span>
                </div>

                <div className="text-[11px] text-slate-600 bg-slate-50 p-1.5 rounded font-medium">
                  {token.items.join(', ')}
                </div>

                {/* 3 Status Toggle Buttons */}
                <div className="grid grid-cols-3 gap-1 pt-0.5">
                  <button
                    onClick={() => updateTokenStatus(token.id, 'In Kitchen')}
                    className={`py-1 rounded text-[9px] font-bold transition ${
                      isKitchen ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Kitchen
                  </button>

                  <button
                    onClick={() => updateTokenStatus(token.id, 'Order Ready')}
                    className={`py-1 rounded text-[9px] font-bold transition ${
                      isReady ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Ready
                  </button>

                  <button
                    onClick={() => updateTokenStatus(token.id, 'Served')}
                    className={`py-1 rounded text-[9px] font-bold transition ${
                      isServed ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Served
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
