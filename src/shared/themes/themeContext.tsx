import {
  useState,
  Dispatch,
  useContext,
  useCallback,
  createContext,
  PropsWithChildren,
} from 'react';
import { useAppsettingsContext } from '@shared/settings';
import { Theme } from './domain';
import { getTheme } from './getTheme';
import { getThemeById } from './getThemeById';

const themeContext = createContext<Theme>(getTheme());
const setThemeContext = createContext<Dispatch<number>>(() => {});

export const useThemeContext = () => useContext(themeContext);
export const useSetThemeContext = () => useContext(setThemeContext);

const ThemeValueProvider = themeContext.Provider;
const SetThemeProvider = setThemeContext.Provider;

export function ThemeProvider({ children }: PropsWithChildren) {
  const { defaultThemeId } = useAppsettingsContext();
  const [theme, setThemeState] = useState(getTheme(defaultThemeId));

  const setTheme = useCallback(
    (newThemeId: number) => {
      const newTheme = getThemeById(newThemeId);

      if (newTheme) {
        localStorage.setItem('themeId', newThemeId.toString());
        setThemeState(newTheme);
      } else {
        // eslint-disable-next-line no-console
        console.error('Invalid theme id');
      }
    },
    [setThemeState]
  );

  return (
    <ThemeValueProvider value={theme}>
      <SetThemeProvider value={setTheme}>{children}</SetThemeProvider>
    </ThemeValueProvider>
  );
}

// CHECKED 0.2.1
