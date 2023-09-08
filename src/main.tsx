import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@shared/themes';
import { FontLoadingProvider } from '@shared/loading';
import { ErrorBoundary, RootError } from '@shared/error';

import { AppsettingsProvider, getAppsettings } from '@shared/settings';
import { App } from './App';
import './assets/styles/defaults.scss';

const mockType = import.meta.env.VITE_MOCK_TYPE;

if (mockType === 'msw') {
  const { worker } = await import('./mocks/browser');
  await worker.start();
}

const startApp = async () => {
  const appsettings = await getAppsettings();

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <ErrorBoundary fallback={<RootError />}>
        <AppsettingsProvider value={appsettings}>
          <FontLoadingProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </FontLoadingProvider>
        </AppsettingsProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

startApp();

// CHECKED 0.2.1
