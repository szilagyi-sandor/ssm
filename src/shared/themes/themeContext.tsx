import {
  useState,
  Dispatch,
  useContext,
  useCallback,
  createContext,
  PropsWithChildren,
} from 'react';
import { Theme } from './domain';
import { getTheme } from './getTheme';

const themeContext = createContext<Theme>(getTheme());
const setThemeContext = createContext<Dispatch<Theme>>(() => {});

export const useThemeContext = () => useContext(themeContext);
export const useSetThemeContext = () => useContext(setThemeContext);

const ThemeValueProvider = themeContext.Provider;
const SetThemeProvider = setThemeContext.Provider;

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setThemeState] = useState(getTheme());

  const setTheme = useCallback(
    (newTheme: Theme) => {
      localStorage.setItem('theme', JSON.stringify(newTheme));
      setThemeState(newTheme);
    },
    [setThemeState]
  );

  return (
    <ThemeValueProvider value={theme}>
      <SetThemeProvider value={setTheme}>{children}</SetThemeProvider>
    </ThemeValueProvider>
  );
}

// CHECKED 0.2.0
