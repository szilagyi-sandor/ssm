import { themes, useThemeContext } from '@shared/themes';
import { LazyLightBeamHomePage } from './lightBeam';

function HomePage() {
  const { id } = useThemeContext();

  switch (id) {
    case themes.lightBeam.id:
      return <LazyLightBeamHomePage />;

    default:
      return null;
  }
}

export { HomePage };

// CHECKED 0.2.1
