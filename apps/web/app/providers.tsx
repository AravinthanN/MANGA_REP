import { AuthContextProvider } from 'ui/context/authContext';
import { FrameVisibilityProvider } from 'ui/context/frameVisbilityContext';
import { ReactNode } from 'react';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <AuthContextProvider>
      <FrameVisibilityProvider>{children}</FrameVisibilityProvider>
    </AuthContextProvider>
  );
};
