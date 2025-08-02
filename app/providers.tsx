import { AuthContextProvider } from '@/packages/ui/context/authContext';
import { ReactNode } from 'react';

export const Providers = ({ children }: { children: ReactNode }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
