export type Theme = {
  id: number;
  name: string;
};

export const themes = {
  theLine: { id: 1, name: 'The line' },
  shapes: { id: 2, name: 'Shapes' },
};

export type ThemeKey = keyof typeof themes;

export type ThemeClasses = {
  theLineClasses?: CSSModuleClasses;
  shapesClasses?: CSSModuleClasses;
};

// CHECKED 0.2.0
