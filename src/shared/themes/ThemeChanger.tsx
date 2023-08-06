import { ThemeKey, themes } from './domain';
import { useThemeContext, useSetThemeContext } from './themeContext';

// TODO: make this appear in a drawer
function ThemeChanger() {
  const currentTheme = useThemeContext();
  const setTheme = useSetThemeContext();

  return (
    <div>
      <button type="button">{currentTheme.name}</button>

      <ul>
        {Object.keys(themes).map((key) => {
          const theme = themes[key as ThemeKey];

          return (
            <li key={key}>
              <button onClick={() => setTheme(theme)} type="button">
                {theme.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { ThemeChanger };

// CHECKED 0.2.1
