import React from 'react';

export const ZeusLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <img 
    src="/logo-zeus.png" 
    alt="Club Zeus Logo" 
    className={`${className} object-contain drop-shadow-[0_0_15px_rgba(191,194,255,0.3)]`} 
  />
);
