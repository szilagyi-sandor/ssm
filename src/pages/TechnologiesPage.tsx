import { themes, useThemeContext } from '@shared/themes';
import { LazyLightBeamTechnologiesPage } from './lightBeam';

function TechnologiesPage() {
  const { id } = useThemeContext();

  switch (id) {
    case themes.lightBeam.id:
      return <LazyLightBeamTechnologiesPage />;

    default:
      return null;
  }
}

export { TechnologiesPage };

// CHECKED 0.2.1
