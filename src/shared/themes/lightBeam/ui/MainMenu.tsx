import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { routes, mainMenuLinks } from '../../../constants';
import { useSmoothLoadingContext } from '../../../loading';
import { useLightBeamStageContext } from '../lightBeamStageContext';
import classes from './mainMenu.module.scss';

type Props = {
  errorBoundaryActive: boolean;
};

// TODO: add design
function MainMenu({ errorBoundaryActive }: Props) {
  const stage = useLightBeamStageContext();
  const loading = useSmoothLoadingContext();
  const available = !errorBoundaryActive && !loading;

  return (
    <div
      className={classNames(classes.mainMenu, {
        [classes.error]: errorBoundaryActive,
        [classes.loading]: !errorBoundaryActive && loading,
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
            {mainMenuLinks.map(({ path, text }) => (
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

// CHECKED 0.2.1
