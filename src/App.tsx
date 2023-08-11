import { Suspense } from 'react';
import classNames from 'classnames';
import { RouterProvider } from 'react-router-dom';
import { useGetThemeClasses } from '@shared/themes';
import { router } from './routing';
import defaultClasses from './app.module.scss';
import lightBeam from './app.lightBeam.module.scss';
import triangles from './app.triangles.module.scss';

// TODO: #1 add transition tracker from ITINPT

// TODO: #1 animateIn and out functionality for themes
// - lightBeam: beam comes in (+overflow hidden), squares fade in, page overlay fades out -> pure css
// - fadeIn + fadeOut for triangles for now

// TODO: #1 add some basic styling to triangles theme,
// + write down theme adding strategy
// + write down theme design strategy

// TODO: #1 Azure first release

// TODO: #1 No index.js usage in shared

// TODO: #1 blue color should be active/action
// TODO: #1 error/color setting from comps
// TODO: #1 check steps of creating a new theme and put all related files to one folder
// TODO: #1 change fonts for light beam

// TODO: technologies from core to libraries/frameworks
// TODO: cv page
// TODO: fix lazy load blocking
// TODO: 2.2 check: add new rules (app vs index, no index usage upwards)
// TODO: update planning

function App() {
  const classes = useGetThemeClasses({
    lightBeam,
    triangles,
  });

  return (
    <div id="app" className={classNames(defaultClasses.app, classes.app)}>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export { App };

// CHECKED 0.2.1
