import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Layout } from '@shared/Layout';
import { routes } from '@shared/constants';
import {
  RootError,
  ErrorThrower,
  ErrorBoundary,
  notFoundError,
} from '@shared/error';
import {
  HomePage,
  SandboxPage,
  ReferencesPage,
  TechnologiesPage,
} from '@pages';

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: (
      <ErrorBoundary fallback={<RootError />}>
        <Layout>
          <Outlet />
        </Layout>
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: routes.sandbox,
        element: <SandboxPage />,
      },
      {
        path: routes.references,
        element: <ReferencesPage />,
      },
      {
        path: routes.technologies,
        element: <TechnologiesPage />,
      },
      {
        path: '*',
        element: <ErrorThrower error={notFoundError} />,
      },
    ],
  },
]);

// CHECKED 0.2.1
