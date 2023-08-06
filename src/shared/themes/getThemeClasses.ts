import { ThemeClasses, themes } from './domain';

export const getThemeClasses = (
  currentThemeId: number,
  themeClasses: Partial<ThemeClasses>
): CSSModuleClasses => {
  switch (currentThemeId) {
    case themes.lightBeam.id:
      return themeClasses.lightBeam || {};

    case themes.triangles.id:
      return themeClasses.triangles || {};

    default:
      return {};
  }
};

// CHECKED 0.2.1
