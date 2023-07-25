import { ThemeClasses } from './domain';
import { useThemeContext } from './themeContext';
import { getThemeClasses } from './getThemeClasses';

export const useGetThemeClasses = (themeClasses: Partial<ThemeClasses>) => {
  const theme = useThemeContext();

  return getThemeClasses(theme.id, themeClasses);
};

// CHECKED 0.2.0
