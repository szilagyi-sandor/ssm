import { themes } from './domain';

export const getTheme = () => {
  const storageTheme = localStorage.getItem('theme');

  if (storageTheme) {
    return JSON.parse(storageTheme);
  }

  // TODO: #1 should come from appsettings
  return themes.lightBeam;
};

// CHECKED 0.2.1
