import { AuthContextProvider } from '@/packages/ui/context/authContext';
import { FrameVisibilityProvider } from '@/packages/ui/context/frameVisbilityContext';
import { ReactNode } from 'react';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <AuthContextProvider>
      <FrameVisibilityProvider>{children}</FrameVisibilityProvider>
    </AuthContextProvider>
  );
};
