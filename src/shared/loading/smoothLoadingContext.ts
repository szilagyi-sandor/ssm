import { createContext, useContext } from 'react';

const smoothLoadingContext = createContext<boolean>(false);

export const SmoothLoadingProvider = smoothLoadingContext.Provider;

export const useSmoothLoadingContext = () => useContext(smoothLoadingContext);

// CHECKED 0.2.1
