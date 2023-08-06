export type Theme = {
  id: number;
  name: string;
};

export const themes = {
  lightBeam: { id: 1, name: 'Light beam' },
  triangles: { id: 2, name: 'Triangles' },
};

export type ThemeKey = keyof typeof themes;

export type ThemeClasses = Record<ThemeKey, CSSModuleClasses>;

// CHECKED 0.2.1
