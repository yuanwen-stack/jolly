
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen">
      <div className="w-full max-w-xl bg-white border-4 md:border-8 border-sky-600 rounded-3xl shadow-2xl p-6 min-h-[85vh] flex flex-col relative overflow-hidden">
        {children}
      </div>
    </div>
  );
};
