import { Theme, ThemeKey, themes } from './domain';

export const getThemeById = (id?: number): Theme | undefined => {
  if (id === undefined) {
    return undefined;
  }

  const selectedKey = Object.keys(themes).find((themeKey) => {
    const theme = themes[themeKey as ThemeKey];
    return theme.id === id;
  });

  return themes[selectedKey as ThemeKey];
};

// CHECKED 0.2.1
