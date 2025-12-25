import React from 'react';

const IconButton = ({ Icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300 group border border-neutral-100"
  >
    <Icon className="w-5 h-5 text-neutral-600 group-hover:text-black transition-colors" />
  </a>
);

export default IconButton;