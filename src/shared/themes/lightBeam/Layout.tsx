import { PropsWithChildren, useEffect, useState } from 'react';
import { ScrollRestoration, useLocation } from 'react-router-dom';
import { ErrorPage } from '@pages';
import { ErrorBoundary } from '../../error';
import { themeConfigs } from '../themeConfigs';
import { useThemeContext } from '../themeContext';
import { MainMenu, LightBeam, LoadingIndicator } from './ui';
import { LightBeamStateProvider } from './ui/lightBeamStateContext';
import {
  useTimeout,
  CustomSuspense,
  useSmoothStateSwitcher,
} from '../../helpers';
import {
  LoadingProvider,
  SmoothLoadingProvider,
  useFontLoadingContext,
} from '../../loading';
import classes from './layout.module.scss';
// we are importing theme related fonts at their layout level, but
// they are only going to start loading when they are rendered somewhere.
import '@assets/styles/lightBeam/fonts.scss';

function Layout({ children }: PropsWithChildren) {
  const { pathname } = useLocation();
  const { timeoutRef } = useTimeout();
  const isFontLoading = useFontLoadingContext();
  const { upcomingThemeId } = useThemeContext();

  const [suspenseActive, setSuspenseActive] = useState<boolean>();
  const [errorBoundaryActive, setErrorBoundaryActive] = useState(false);
  const [animationInLoading, setAnimationInLoading] = useState(true);

  const isThemeChanging = !!upcomingThemeId;
  const isSuspenseLoading = suspenseActive !== false;

  const loading =
    isSuspenseLoading || isFontLoading || animationInLoading || isThemeChanging;
  const smoothLoading = useSmoothStateSwitcher(loading);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setAnimationInLoading(false);
    }, themeConfigs.lightBeam.animateInDuration);
  }, [timeoutRef]);

  return (
    <LoadingProvider value={loading}>
      <SmoothLoadingProvider value={smoothLoading}>
        <LightBeamStateProvider>
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
        </LightBeamStateProvider>
      </SmoothLoadingProvider>
    </LoadingProvider>
  );
}

export default Layout;

// CHECKED 0.2.1
