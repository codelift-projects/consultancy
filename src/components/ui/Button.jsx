import React from 'react';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'danger' | 'success'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  icon: Icon,
  disabled = false,
  type = 'button',
  onClick,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none min-h-[44px] min-w-[44px]';

  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm focus:ring-blue-500 active:scale-[0.98]',
    secondary: 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-2xs focus:ring-slate-400 active:scale-[0.98]',
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900 focus:ring-slate-300',
    danger: 'bg-red-600 hover:bg-red-700 text-white shadow-sm focus:ring-red-500 active:scale-[0.98]',
    success: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm focus:ring-emerald-500 active:scale-[0.98]'
  };

  const sizeStyles = {
    sm: 'px-3 py-2 text-xs gap-1.5',
    md: 'px-4 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5'
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.md} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      {children}
    </button>
  );
};
