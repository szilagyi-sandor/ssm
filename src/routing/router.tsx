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
  LazyHomePage,
  LazySandboxPage,
  LazyReferencesPage,
  LazyTechnologiesPage,
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
        element: <LazyHomePage />,
      },
      {
        path: routes.sandbox,
        element: <LazySandboxPage />,
      },
      {
        path: routes.references,
        element: <LazyReferencesPage />,
      },
      {
        path: routes.technologies,
        element: <LazyTechnologiesPage />,
      },
      {
        path: '*',
        element: <ErrorThrower error={notFoundError} />,
      },
    ],
  },
]);

// CHECKED 0.2.1
