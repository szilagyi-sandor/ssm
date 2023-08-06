import { themes, useThemeContext } from '@shared/themes';
import { LazyLightBeamSandboxPage } from './lightBeam';

function SandboxPage() {
  const { id } = useThemeContext();

  switch (id) {
    case themes.lightBeam.id:
      return <LazyLightBeamSandboxPage />;

    default:
      return null;
  }
}

export { SandboxPage };

// CHECKED 0.2.1
