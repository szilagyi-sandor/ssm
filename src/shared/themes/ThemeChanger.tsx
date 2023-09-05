import { ThemeKey, themes } from './domain';
import { useThemeContext, useSetThemeContext } from './themeContext';

function ThemeChanger() {
  const { currentThemeId } = useThemeContext();
  const setTheme = useSetThemeContext();

  return (
    <div>
      <button type="button">{currentThemeId}</button>

      <ul>
        {Object.keys(themes).map((key) => {
          const theme = themes[key as ThemeKey];

          return (
            <li key={key}>
              <button
                onClick={() =>
                  setTheme((prevState) => ({
                    ...prevState,
                    upcomingThemeId: theme.id,
                  }))
                }
                type="button"
              >
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
