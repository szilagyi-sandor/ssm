import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorPage } from '@pages';
import { ErrorBoundary } from '@shared/error';
import { getAppsettings, AppsettingsProvider } from '@features/appsettings';
import { App } from './App';
import './assets/styles/global.css';

const mockType = import.meta.env.VITE_MOCK_TYPE;

if (mockType === 'msw') {
  const { worker } = await import('./mocks/browser');
  await worker.start();
}

const startApp = async () => {
  const appsettings = await getAppsettings();

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <ErrorBoundary fallback={<ErrorPage />}>
        <AppsettingsProvider value={appsettings}>
          <App />
        </AppsettingsProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

startApp();
