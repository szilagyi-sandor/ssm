import { PropsWithChildren, lazy } from 'react';
import { themes, useThemeContext } from './themes';

const LightBeamLayout = lazy(() => import('./themes/lightBeam/Layout'));

function Layout({ children }: PropsWithChildren) {
  const { id } = useThemeContext();

  switch (id) {
    case themes.lightBeam.id:
      return <LightBeamLayout>{children}</LightBeamLayout>;

    default:
      return null;
  }
}

export { Layout };

// CHECKED 0.2.1
