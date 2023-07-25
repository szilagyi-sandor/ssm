import { PropsWithChildren, useState } from 'react';
import { ScrollRestoration, useLocation } from 'react-router-dom';
import { ErrorPage } from '@pages';
import { MainMenu } from './MainMenu';
import { ErrorBoundary } from '../error';
import { TheLine } from '../themes/theLine';
import { LoadingProvider } from '../loading';
import { useGetThemeClasses } from '../themes';
import { LoadingIndicator } from './LoadingIndicator';
import { CustomSuspense, useSmoothStateSwitcher } from '../helpers';
import theLineClasses from './layout.theLine.module.scss';

// TODO: #1 double check Custom suspense
// TODO: #1 add loading provider for not delayed loading
// TODO: #1 remove theme related stuff

function Layout({ children }: PropsWithChildren) {
  const classes = useGetThemeClasses({
    theLineClasses,
  });

  const { pathname } = useLocation();

  const [suspenseActive, setSuspenseActive] = useState<boolean>();
  const [errorBoundaryActive, setErrorBoundaryActive] = useState(false);

  const loading = suspenseActive !== false;

  const delayedLoading = useSmoothStateSwitcher(loading);

  return (
    <LoadingProvider value={delayedLoading}>
      <section className={classes.layout}>
        <header>
          <MainMenu error={errorBoundaryActive} />
        </header>

        <TheLine error={errorBoundaryActive} />

        <main>
          <div className={classes.pageContainer} key={pathname}>
            <ErrorBoundary
              fallback={<ErrorPage />}
              onCatch={() => setErrorBoundaryActive(true)}
              onUnmount={() => setErrorBoundaryActive(false)}
            >
              <CustomSuspense
                setSuspense={setSuspenseActive}
                fallback={<LoadingIndicator />}
              >
                {children}
              </CustomSuspense>
            </ErrorBoundary>
          </div>
        </main>

        <footer>
          <div className={classes.footerContent}>Copyright © 2023 SSM.</div>
        </footer>

        <ScrollRestoration />
      </section>
    </LoadingProvider>
  );
}

export { Layout };

// CHECKED 0.2.0
