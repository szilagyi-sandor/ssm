import { PropsWithChildren, useState } from 'react';
import { ScrollRestoration, useLocation } from 'react-router-dom';
import { ErrorPage } from '@pages';
import { ErrorBoundary } from '../../error';
import { MainMenu, LightBeam, LoadingIndicator } from './ui';
import { CustomSuspense, useSmoothStateSwitcher } from '../../helpers';
import {
  LoadingProvider,
  SmoothLoadingProvider,
  useFontLoadingContext,
} from '../../loading';
import classes from './layout.module.scss';
// we are importing theme related fonts at their layout level, but
// they are only going to start loading when they are rendered somewhere.
// tested only in chrome.
// TODO: test in other browsers
import '@assets/styles/lightBeam/fonts.scss';

function Layout({ children }: PropsWithChildren) {
  const { pathname } = useLocation();
  const isFontLoading = useFontLoadingContext();

  const [suspenseActive, setSuspenseActive] = useState<boolean>();
  const [errorBoundaryActive, setErrorBoundaryActive] = useState(false);

  const loading = suspenseActive !== false || isFontLoading;
  const smoothLoading = useSmoothStateSwitcher(loading);

  return (
    <LoadingProvider value={loading}>
      <SmoothLoadingProvider value={smoothLoading}>
        <section className={classes.layout}>
          <LoadingIndicator loading={smoothLoading} />

          <header>
            <MainMenu errorBoundaryActive={errorBoundaryActive} />
          </header>

          <LightBeam errorBoundaryActive={errorBoundaryActive} />

          <main>
            <CustomSuspense setSuspense={setSuspenseActive}>
              <ErrorBoundary
                key={pathname}
                fallback={<ErrorPage />}
                onCatch={() => setErrorBoundaryActive(true)}
                onUnmount={() => setErrorBoundaryActive(false)}
              >
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
      </SmoothLoadingProvider>
    </LoadingProvider>
  );
}

export default Layout;

// CHECKED 0.2.1
