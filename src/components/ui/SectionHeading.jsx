import React from 'react';

export const SectionHeading = ({
  badge,
  badgeIcon: BadgeIcon,
  title,
  subtitle,
  centered = true,
  className = ''
}) => {
  return (
    <div className={`space-y-3 ${centered ? 'text-center max-w-2xl mx-auto' : ''} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 ${centered ? 'mx-auto' : ''}`}>
          {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 text-blue-600" />}
          <span>{badge}</span>
        </div>
      )}
      
      {title && (
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
