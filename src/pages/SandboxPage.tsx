import { themes, useThemeContext } from '@shared/themes';
import { LazyLightBeamSandboxPage } from './lightBeam';
import { LazyTrianglesSandboxPage } from './triangles';

function SandboxPage() {
  const { id } = useThemeContext();

  switch (id) {
    case themes.lightBeam.id:
      return <LazyLightBeamSandboxPage />;

    case themes.triangles.id:
      return <LazyTrianglesSandboxPage />;

    default:
      return null;
  }
}

export { SandboxPage };

// CHECKED 0.2.1
