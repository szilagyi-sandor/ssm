import { PropsWithChildren, useState } from 'react';
import { Link, ScrollRestoration, useLocation } from 'react-router-dom';
import { ErrorPage } from '@pages';
import { ErrorBoundary } from '../../error';
import { CustomSuspense } from '../../helpers';
import { mainMenuLinks } from '../../constants';
import { LoadingProvider, useFontLoadingContext } from '../../loading';
import classes from './layout.module.scss';
import '@assets/styles/triangles/fonts.scss';

function Layout({ children }: PropsWithChildren) {
  const { pathname } = useLocation();
  const isFontLoading = useFontLoadingContext();

  const [suspenseActive, setSuspenseActive] = useState<boolean>();

  const loading = suspenseActive !== false || isFontLoading;

  return (
    <LoadingProvider value={loading}>
      <section className={classes.layout}>
        {loading && 'Loading...'}

        <header>
          <nav>
            <ul>
              {mainMenuLinks.map(({ path, text }) => (
                <li key={path}>
                  <Link to={path}>{text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main>
          <CustomSuspense setSuspense={setSuspenseActive}>
            <ErrorBoundary key={pathname} fallback={<ErrorPage />}>
              <div className={classes.pageContainer} key={pathname}>
                {children}
              </div>
            </ErrorBoundary>
          </CustomSuspense>
        </main>

        <footer>
          <div className={classes.footerContent}>Copyright © 2023 SSM.</div>
        </footer>

        <ScrollRestoration />
      </section>
    </LoadingProvider>
  );
}

export default Layout;

// CHECKED 0.2.1
