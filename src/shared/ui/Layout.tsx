import { PropsWithChildren, useState } from 'react';
import { ScrollRestoration, useLocation } from 'react-router-dom';
import { ErrorPage } from '@pages';
import { MainMenu } from './MainMenu';
import { ErrorBoundary } from '../error';
import { CustomSuspense } from '../helpers';
import { TheLine } from '../themes/theLine';
import { useGetThemeClasses } from '../themes';
import { LoadingIndicator } from './LoadingIndicator';
import theLineClasses from './layout.theLine.module.scss';

function Layout({ children }: PropsWithChildren) {
  const classes = useGetThemeClasses({
    theLineClasses,
  });

  const { pathname } = useLocation();

  const [suspenseActive, setSuspenseActive] = useState<boolean>();
  const [errorBoundaryActive, setErrorBoundaryActive] = useState(false);

  const loading = suspenseActive !== false;

  return (
    <section className={classes.layout}>
      <header>
        <MainMenu />
      </header>

      <TheLine loading={loading} error={errorBoundaryActive} />

      <main>
        <div className={classes.pageContainer} key={pathname}>
          <ErrorBoundary
            fallback={<ErrorPage />}
            onCatch={() => setErrorBoundaryActive(true)}
            onUnmount={() => setErrorBoundaryActive(false)}
          >
            <CustomSuspense
              setSuspenseActive={setSuspenseActive}
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
  );
}

export { Layout };
