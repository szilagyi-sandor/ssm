import { themes, useThemeContext } from '@shared/themes';
import { LazyLightBeamReferencesPage } from './lightBeam';
import { LazyTrianglesReferencesPage } from './triangles';

function ReferencesPage() {
  const { currentThemeId } = useThemeContext();

  switch (currentThemeId) {
    case themes.lightBeam.id:
      return <LazyLightBeamReferencesPage />;

    case themes.triangles.id:
      return <LazyTrianglesReferencesPage />;

    default:
      return null;
  }
}

export { ReferencesPage };

// CHECKED 0.2.1
