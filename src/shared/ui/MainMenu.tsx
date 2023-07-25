import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { routes } from '../constants';
import { useLoadingContext } from '../loading';
import { useGetThemeClasses } from '../themes';
import { useStageContext } from '../themes/theLine';
import theLineClasses from './mainMenu.theLine.module.scss';

const links = [
  { path: routes.references, text: 'References' },
  { path: routes.technologies, text: 'Technologies' },
  { path: routes.sandbox, text: 'Sandbox' },
  { path: '/not-found', text: 'Not found' },
];

type Props = {
  error: boolean;
};

function MainMenu({ error }: Props) {
  const classes = useGetThemeClasses({
    theLineClasses,
  });

  const stage = useStageContext();
  const loading = useLoadingContext();
  const available = !error && !loading;

  return (
    <div
      className={classNames(classes.mainMenu, {
        [classes.error]: error,
        [classes.loading]: !error && loading,
        [classes['stage-0']]: available && stage === 0,
        [classes['stage-1']]: available && stage === 1,
      })}
    >
      <div className={classes.content}>
        <h1>
          <Link to={routes.home}>SSM</Link>
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
      </div>
    </div>
  );
}

export { MainMenu };

// CHECKED 0.2.0
