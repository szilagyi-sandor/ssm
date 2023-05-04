import { createContext, useContext } from 'react';

const errorContext = createContext<Error | undefined>(undefined);

export const ErrorProvider = errorContext.Provider;

export const useErrorContext = () => useContext(errorContext);
