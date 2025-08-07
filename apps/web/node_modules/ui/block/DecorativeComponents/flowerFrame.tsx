'use client';

import React, { ReactNode } from 'react';
import { useFrameVisibility } from '../../context/frameVisbilityContext';
import { AnimatePresence, motion } from 'framer-motion';

const FloralFrame = ({ children }: { children: ReactNode }) => {
  const { visible } = useFrameVisibility();
  return (
    <div className="relative w-full h-screen p-8 bg-[#fffaf1] overflow-hidden  shadow-xl">
      {/* Border Image */}
      {/* <img
        className="absolute inset-0 w-full h-full  pointer-events-none select-none z-10 scale-y-[1.11] scale-x-[1.08]"
        src="/images/borderflowers1.png"
        alt="Floral Border Frame"
      /> */}
      <AnimatePresence>
        {visible && (
          <motion.img
            className="absolute inset-0 w-full h-full  pointer-events-none select-none z-10 scale-y-[1.25] scale-x-[1.20]"
            src="/images/borderflowers.png"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        )}
      </AnimatePresence>
      {/* Content */}
      <div className="relative  w-full h-full overflow-auto prose prose-lg prose-slate dark:prose-invert font-serif">
        {children}
      </div>
    </div>
  );
};

export default FloralFrame;
