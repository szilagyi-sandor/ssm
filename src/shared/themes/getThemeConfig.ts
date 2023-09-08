import { themeConfigs } from './themeConfigs';
import { ThemeConfig, ThemeKey, themes } from './domain';

export const getThemeConfig = (id?: number): ThemeConfig | undefined => {
  if (id === undefined) {
    return undefined;
  }

  const selectedKey = Object.keys(themes).find((themeKey) => {
    const theme = themes[themeKey as ThemeKey];
    return theme.id === id;
  });

  return themeConfigs[selectedKey as ThemeKey];
};

// CHECKED 0.2.1
