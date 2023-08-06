import { PropsWithChildren, createContext, useContext } from 'react';
import { useFontLoadingChecker } from './useFontLoadingChecker';

const fontLoadingContext = createContext<boolean>(false);

export const useFontLoadingContext = () => useContext(fontLoadingContext);

export function FontLoadingProvider({ children }: PropsWithChildren) {
  const loading = useFontLoadingChecker();

  return (
    <fontLoadingContext.Provider value={loading}>
      {children}
    </fontLoadingContext.Provider>
  );
}

// CHECKED 0.2.1
