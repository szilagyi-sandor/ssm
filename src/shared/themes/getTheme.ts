import { themes } from './domain';
import { getThemeById } from './getThemeById';

export const getTheme = (defaultThemeId?: number) => {
  const storageThemeId = localStorage.getItem('themeId');

  if (storageThemeId && Number.isSafeInteger(+storageThemeId)) {
    const selectedTheme = getThemeById(+storageThemeId);

    if (selectedTheme) {
      return selectedTheme;
    }
  }

  const defaultTheme = getThemeById(defaultThemeId);

  if (defaultTheme) {
    return defaultTheme;
  }

  return themes.lightBeam;
};

// CHECKED 0.2.1
