'use client'

import React, { createContext, useContext, useState } from 'react';

type FrameVisibilityContextType = {
  visible: boolean;
  setVisible: (value: boolean) => void;
};

const FrameVisibilityContext = createContext<FrameVisibilityContextType | undefined>(undefined);

export const useFrameVisibility = () => {
  const context = useContext(FrameVisibilityContext);
  if (!context) throw new Error('useFrameVisibility must be used within FrameVisibilityProvider');
  return context;
};

export const FrameVisibilityProvider = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(false);

  return (
    <FrameVisibilityContext.Provider value={{ visible, setVisible }}>
      {children}
    </FrameVisibilityContext.Provider>
  );
};
