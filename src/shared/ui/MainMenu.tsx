import { Link } from 'react-router-dom';
import { routes } from '@shared/constants';
import { ThemeChanger, useGetThemeClasses } from '@shared/themes';
import theLineClasses from './mainMenu.theLine.module.scss';

const links = [
  { path: routes.references, text: 'References' },
  { path: routes.technologies, text: 'Technologies' },
  { path: '/not-found', text: 'Not found' },
];

function MainMenu() {
  const classes = useGetThemeClasses({
    theLineClasses,
  });

  return (
    <div className={classes.mainMenu}>
      <div className={classes.content}>
        <h1>
          <Link to={routes.home}>
            <div className={classes.text}>SSM</div>
          </Link>
        </h1>

        <nav>
          <ul>
            {links.map(({ path, text }) => (
              <li key={path}>
                <Link to={path}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={classes.themeChangerContainer}>
          <ThemeChanger />
        </div>
      </div>
    </div>
  );
}

export { MainMenu };
