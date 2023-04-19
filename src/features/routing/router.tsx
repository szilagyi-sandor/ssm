import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Layout } from '@shared/ui';
import { routes } from '@shared/constants';
import { notFoundError, ErrorProvider } from '@shared/error';
import { ErrorPage, LazyHomePage, LazySandboxPage } from '@pages';

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: (
      <Layout>
        <Outlet />
      </Layout>
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
        path: '*',
        element: (
          <ErrorProvider value={notFoundError}>
            <ErrorPage />
          </ErrorProvider>
        ),
      },
    ],
  },
]);
