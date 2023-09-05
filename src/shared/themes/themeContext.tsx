import {
  useState,
  Dispatch,
  useContext,
  createContext,
  SetStateAction,
  PropsWithChildren,
  useEffect,
} from 'react';
import { useAppsettingsContext } from '../settings/appsettingsContext';
import { ThemeContext } from './domain';
import { getTheme } from './getTheme';

const themeContext = createContext<ThemeContext>({
  currentThemeId: getTheme().id,
});
const setThemeContext = createContext<Dispatch<SetStateAction<ThemeContext>>>(
  () => {}
);

export const useThemeContext = () => useContext(themeContext);
export const useSetThemeContext = () => useContext(setThemeContext);

const ThemeValueProvider = themeContext.Provider;
const SetThemeProvider = setThemeContext.Provider;

export function ThemeProvider({ children }: PropsWithChildren) {
  const { defaultThemeId } = useAppsettingsContext();
  const [theme, setTheme] = useState<ThemeContext>({
    currentThemeId: getTheme(defaultThemeId).id,
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
