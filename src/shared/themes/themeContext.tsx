import {
  useState,
  Dispatch,
  useEffect,
  useContext,
  createContext,
  SetStateAction,
  PropsWithChildren,
} from 'react';
import { getTheme } from './getTheme';
import { noop } from '../helpers/noop';
import { ThemeContext } from './domain';
import { useAppsettingsContext } from '../settings/appsettingsContext';

const themeContext = createContext<ThemeContext>({
  currentThemeId: 0,
  count: 0,
});
const setThemeContext =
  createContext<Dispatch<SetStateAction<ThemeContext>>>(noop);

export const useThemeContext = () => useContext(themeContext);
export const useSetThemeContext = () => useContext(setThemeContext);

const ThemeValueProvider = themeContext.Provider;
const SetThemeProvider = setThemeContext.Provider;

export function ThemeProvider({ children }: PropsWithChildren) {
  const { defaultThemeId } = useAppsettingsContext();
  const [theme, setTheme] = useState<ThemeContext>({
    currentThemeId: getTheme(defaultThemeId).id,
    count: 0,
  });

  useEffect(() => {
    localStorage.setItem('themeId', theme.currentThemeId.toString());
  }, [theme.currentThemeId]);

  return (
    <ThemeValueProvider value={theme}>
      <SetThemeProvider value={setTheme}>{children}</SetThemeProvider>
    </ThemeValueProvider>
  );
}

// CHECKED 0.2.1
