import { createContext, useContext } from 'react';

const loadingContext = createContext<boolean>(false);

export const LoadingProvider = loadingContext.Provider;

export const useLoadingContext = () => useContext(loadingContext);

// CHECKED 0.2.0
