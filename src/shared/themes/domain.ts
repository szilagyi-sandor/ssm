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
  // counting theme changes is helping with
  // state re-initialization if we switch to the same theme.
  count: number;
};

export const themes = {
  lightBeam: { id: 1, name: 'Light beam' },
  triangles: { id: 2, name: 'Triangles' },
};

export type ThemeKey = keyof typeof themes;

export type ThemeClasses = Record<ThemeKey, CSSModuleClasses>;

// CHECKED 0.2.1
