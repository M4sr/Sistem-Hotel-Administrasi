import React from 'react';

export default function MobileHeader({ title, children, className }: { title: string, children?: React.ReactNode, className?: string }) {
  return (
    <header className={`w-full bg-white shadow-lg rounded-b-2xl py-3 px-4 flex items-center justify-between sticky top-0 z-30 ${className || ''}`}>
      <span className="text-lg font-bold text-pink-600">{title}</span>
      {children && <div>{children}</div>}
    </header>
  );
} 