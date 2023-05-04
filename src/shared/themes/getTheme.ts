import { themes } from './domain';

export const getTheme = () => {
  const storageTheme = localStorage.getItem('theme');

  if (storageTheme) {
    return JSON.parse(storageTheme);
  }

  return themes.theLine;
};
