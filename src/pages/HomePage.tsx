import { themes, useThemeContext } from '@shared/themes';
import { LazyLightBeamHomePage } from './lightBeam';
import { LazyTrianglesHomePage } from './triangles';

function HomePage() {
  const { id } = useThemeContext();

  switch (id) {
    case themes.lightBeam.id:
      return <LazyLightBeamHomePage />;

    case themes.triangles.id:
      return <LazyTrianglesHomePage />;

    default:
      return null;
  }
}

export { HomePage };

// CHECKED 0.2.1
