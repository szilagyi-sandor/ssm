import { themes, useThemeContext } from '@shared/themes';
import { LazyLightBeamTechnologiesPage } from './lightBeam';
import { LazyTrianglesTechnologiesPage } from './triangles';

function TechnologiesPage() {
  const { currentThemeId } = useThemeContext();

  switch (currentThemeId) {
    case themes.lightBeam.id:
      return <LazyLightBeamTechnologiesPage />;

    case themes.triangles.id:
      return <LazyTrianglesTechnologiesPage />;

    default:
      return null;
  }
}

export { TechnologiesPage };

// CHECKED 0.2.1
