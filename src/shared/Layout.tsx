import { PropsWithChildren, useEffect } from 'react';
import lazyWithPreload from 'react-lazy-with-preload';
import { useTimeout } from './helpers';
import { getThemeConfig } from './themes/getThemeConfig';
import { themes, useSetThemeContext, useThemeContext } from './themes';

const LightBeamLayout = lazyWithPreload(
  () => import('./themes/lightBeam/Layout')
);
const TrianglesLayout = lazyWithPreload(
  () => import('./themes/triangles/Layout')
);

const getLayoutById = (id?: number) => {
  switch (id) {
    case themes.lightBeam.id:
      return LightBeamLayout;

    case themes.triangles.id:
      return TrianglesLayout;

    default:
      return null;
  }
};

function Layout({ children }: PropsWithChildren) {
  const { restartTimeout } = useTimeout();
  const setThemeContext = useSetThemeContext();
  const { currentThemeId, upcomingThemeId, count } = useThemeContext();

  // set timeout to switch the current theme to the upcoming
  useEffect(() => {
    if (upcomingThemeId) {
      const config = getThemeConfig(currentThemeId);

      restartTimeout(() => {
        setThemeContext(({ count: prevCount }) => ({
          currentThemeId: upcomingThemeId,
          upcomingThemeId: undefined,
          count: prevCount + 1,
        }));
      }, config?.animateOutDuration || 0);
    }
  }, [upcomingThemeId, currentThemeId, setThemeContext, restartTimeout]);

  const CurrentLayout = getLayoutById(currentThemeId);
  const UpcomingLayout = getLayoutById(upcomingThemeId);

  if (UpcomingLayout) {
    UpcomingLayout.preload();
  }

  if (!CurrentLayout) {
    return null;
  }

  return <CurrentLayout key={count}>{children}</CurrentLayout>;
}

export { Layout };

// CHECKED 0.2.1
