import { ThemeClasses, themes } from './domain';

export const getThemeClasses = (
  currentThemeId: number,
  themeClasses: Partial<ThemeClasses>
): CSSModuleClasses => {
  switch (currentThemeId) {
    case themes.theLine.id:
      return themeClasses.theLineClasses || {};

    case themes.shapes.id:
      return themeClasses.shapesClasses || {};

    default:
      return {};
  }
};
