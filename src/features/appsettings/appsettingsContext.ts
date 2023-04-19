import { createContext, useContext } from 'react';
import { Appsettings } from './domain';

const appsettingsContext = createContext<Appsettings>({});

export const AppsettingsProvider = appsettingsContext.Provider;

export const useAppsettingsContext = () => useContext(appsettingsContext);
