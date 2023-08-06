import { themes, useThemeContext } from '@shared/themes';
import { LazyLightBeamReferencesPage } from './lightBeam';

function ReferencesPage() {
  const { id } = useThemeContext();

  switch (id) {
    case themes.lightBeam.id:
      return <LazyLightBeamReferencesPage />;

    default:
      return null;
  }
}

export { ReferencesPage };

// CHECKED 0.2.1
