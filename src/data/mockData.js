// Engineers
export const ENGINEERS = {
  anurag: {
    name: "Anurag Choudhary",
    role: "Lead Automation Architect",
    phone: "+919511896416",
    cleanPhone: "919511896416",
    callLink: "tel:+919511896416",
    whatsappLink: "https://wa.me/919511896416",
    initials: "AC"
  }
};

// Demo A: 5 Inventory SKUs
export const INITIAL_INVENTORY_ITEMS = [
  { id: 'sku-1', name: 'Premium Espresso Roast (1kg)', stock: 4, threshold: 8, unit: 'bags' },
  { id: 'sku-2', name: 'Mozzarella Cheese Blocks (2kg)', stock: 9, threshold: 5, unit: 'blocks' },
  { id: 'sku-3', name: 'Imported Pasta Penne (500g)', stock: 3, threshold: 6, unit: 'packs' },
  { id: 'sku-4', name: 'Fresh Paneer (1kg)', stock: 12, threshold: 4, unit: 'kg' },
  { id: 'sku-5', name: 'Extra Virgin Olive Oil (1L)', stock: 2, threshold: 5, unit: 'bottles' }
];

// Demo B: 6 POS Items
export const POS_CATALOG = [
  { id: 'pos-1', name: 'Paneer Tikka Roll', price: 180, category: 'Food' },
  { id: 'pos-2', name: 'Butter Chicken Meal Box', price: 280, category: 'Food' },
  { id: 'pos-3', name: 'Cold Brew Coffee (300ml)', price: 140, category: 'Beverage' },
  { id: 'pos-4', name: 'Farmhouse Pizza (9 inch)', price: 340, category: 'Food' },
  { id: 'pos-5', name: 'Belgium Chocolate Shake', price: 160, category: 'Beverage' },
  { id: 'pos-6', name: 'Garlic Breadsticks with Dip', price: 120, category: 'Side' }
];

// Demo C: 6 QR Menu Dishes
export const QR_DISHES = [
  { id: 'qr-1', name: 'Paneer Butter Masala Bowl', price: 240, category: 'Food', desc: 'Creamy tomato gravy with spiced cottage cheese.' },
  { id: 'qr-2', name: 'Crispy Veg Dimsums (6 pcs)', price: 190, category: 'Food', desc: 'Steamed dumplings served with spicy chili garlic dip.' },
  { id: 'qr-3', name: 'Signature Iced Latte', price: 150, category: 'Beverages', desc: 'Double espresso shot poured over chilled milk & ice.' },
  { id: 'qr-4', name: 'Fresh Mango Mint Cooler', price: 130, category: 'Beverages', desc: 'Refreshing seasonal pulp with crushed mint leaves.' },
  { id: 'qr-5', name: 'Truffle Mushroom Pizza', price: 390, category: 'Specials', desc: 'Wild portobello mushrooms, mozzarella, truffle oil.' },
  { id: 'qr-6', name: 'Chef Special Sizzling Brownie', price: 180, category: 'Specials', desc: 'Warm fudge cake with vanilla ice cream and hot chocolate.' }
];

// Demo D: BI Reports Data
export const BI_STATS = {
  revenue: '₹84,320',
  margin: '22.4%',
  topSeller: 'Paneer Tikka Roll',
  topSellerCount: '58 units sold today'
};

export const WEEKLY_SALES_DATA = [
  { day: 'Mon', revenue: 62000, heightPct: 65 },
  { day: 'Tue', revenue: 58000, heightPct: 58 },
  { day: 'Wed', revenue: 71000, heightPct: 75 },
  { day: 'Thu', revenue: 69000, heightPct: 72 },
  { day: 'Fri', revenue: 84320, heightPct: 90 },
  { day: 'Sat', revenue: 98000, heightPct: 100 },
  { day: 'Sun', revenue: 92000, heightPct: 94 }
];

export const TOP_SELLING_ITEMS = [
  { rank: 1, name: 'Paneer Tikka Roll', qty: 58, revenue: '₹10,440' },
  { rank: 2, name: 'Farmhouse Pizza', qty: 42, revenue: '₹14,280' },
  { rank: 3, name: 'Cold Brew Coffee', qty: 38, revenue: '₹5,320' },
  { rank: 4, name: 'Butter Chicken Meal', qty: 26, revenue: '₹7,280' },
  { rank: 5, name: 'Belgium Chocolate Shake', qty: 24, revenue: '₹3,840' }
];

// Feature Checklist 6 Compact Items
export const FEATURE_CHECKLIST_ITEMS = [
  "100% Secure Platform & Role Access",
  "Recipe-level inventory & low-stock alerts",
  "GST WhatsApp invoices in 2 seconds",
  "Contactless QR menu & live kitchen tokens",
  "Daily automated executive BI reports",
  "Rapid 48-hour on-site setup & deployment"
];

// How It Works 4-Step Timeline
export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Custom Setup",
    desc: "We map your exact menu items, inventory recipes, barcode catalogs, and safety thresholds into the system."
  },
  {
    step: "02",
    title: "Staff Onboarding",
    desc: "Hands-on role-specific onboarding for cashiers, inventory managers, and kitchen prep crews."
  },
  {
    step: "03",
    title: "Go Live in 48 Hours",
    desc: "Your complete operating system runs smoothly in production without interrupting active sales."
  },
  {
    step: "04",
    title: "Dedicated Support",
    desc: "Direct WhatsApp and phone line to Lead Architect Anurag Choudhary for zero downtime."
  }
];
