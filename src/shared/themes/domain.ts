export type Theme = {
  id: number;
  name: string;
};

export const themes = {
  theLine: { id: 0, name: 'The line' },
  shapes: { id: 1, name: 'Shapes' },
};

export type ThemeKey = keyof typeof themes;

export type ThemeClasses = {
  theLineClasses?: CSSModuleClasses;
  shapesClasses?: CSSModuleClasses;
};
