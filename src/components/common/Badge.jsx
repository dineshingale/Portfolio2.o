import React from 'react';

const Badge = ({ children, className = "" }) => (
  <span className={`px-3 py-1 rounded-md text-xs font-medium tracking-wide border ${className}`}>
    {children}
  </span>
);

export default Badge;