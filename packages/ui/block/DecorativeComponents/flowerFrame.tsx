'use client';

import React, { ReactNode } from 'react';

const FloralFrame = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative w-full h-screen p-8 bg-[#fffaf1] overflow-hidden  shadow-xl">
      {/* Border Image */}
      <img
        className="absolute inset-0 w-full h-full  pointer-events-none select-none z-10 scale-y-[1.11] scale-x-[1.08]"
        src="/images/borderflowers1.png"
        alt="Floral Border Frame"
      />

      {/* Content */}
      <div className="relative  w-full h-full overflow-auto prose prose-lg prose-slate dark:prose-invert font-serif">
        {children}
      </div>
    </div>
  );
};

export default FloralFrame;
