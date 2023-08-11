import { PropsWithChildren, lazy } from 'react';
import { themes, useThemeContext } from './themes';

const LightBeamLayout = lazy(() => import('./themes/lightBeam/Layout'));
const TrianglesLayout = lazy(() => import('./themes/triangles/Layout'));

function Layout({ children }: PropsWithChildren) {
  const { id } = useThemeContext();

  switch (id) {
    case themes.lightBeam.id:
      return <LightBeamLayout>{children}</LightBeamLayout>;

    case themes.triangles.id:
      return <TrianglesLayout>{children}</TrianglesLayout>;

    default:
      return null;
  }
}

export { Layout };

// CHECKED 0.2.1
