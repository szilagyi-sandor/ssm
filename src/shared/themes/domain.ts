export type Theme = {
  id: number;
  name: string;
};

export type ThemeConfig = {
  animateInDuration: number;
  animateOutDuration: number;
};

export type ThemeContext = {
  currentThemeId: number;
  upcomingThemeId?: number;
};

export const themes = {
  lightBeam: { id: 1, name: 'Light beam' },
  triangles: { id: 2, name: 'Triangles' },
};

export type ThemeKey = keyof typeof themes;

export const themeConfigs: Record<ThemeKey, ThemeConfig> = {
  lightBeam: { animateInDuration: 1500, animateOutDuration: 1500 },
  triangles: { animateInDuration: 100, animateOutDuration: 100 },
};

export type ThemeClasses = Record<ThemeKey, CSSModuleClasses>;

// CHECKED 0.2.1
