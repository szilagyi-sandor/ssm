import { themes, useThemeContext } from '@shared/themes';
import { LazyLightBeamErrorPage } from './lightBeam';
import { LazyTrianglesErrorPage } from './triangles';

function ErrorPage() {
  const { currentThemeId } = useThemeContext();

  switch (currentThemeId) {
    case themes.lightBeam.id:
      return <LazyLightBeamErrorPage />;

    case themes.triangles.id:
      return <LazyTrianglesErrorPage />;

    default:
      return null;
  }
}

export { ErrorPage };

// CHECKED 0.2.1
