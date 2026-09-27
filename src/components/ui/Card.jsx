import React from 'react';

export const Card = ({
  children,
  className = '',
  hover = false,
  ...props
}) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 sm:p-7 ${
        hover ? 'hover:border-slate-300 hover:shadow-md transition-all duration-200' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
