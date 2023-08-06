import { themes, useThemeContext } from '@shared/themes';
import { LazyLightBeamErrorPage } from './lightBeam';

function ErrorPage() {
  const { id } = useThemeContext();

  switch (id) {
    case themes.lightBeam.id:
      return <LazyLightBeamErrorPage />;

    default:
      return null;
  }
}

export { ErrorPage };

// CHECKED 0.2.1
