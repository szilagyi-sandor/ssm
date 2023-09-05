import { Suspense } from 'react';
import classNames from 'classnames';
import { RouterProvider } from 'react-router-dom';
import { useGetThemeClasses } from '@shared/themes';
import { router } from './routing';
import defaultClasses from './app.module.scss';
import lightBeam from './app.lightBeam.module.scss';
import triangles from './app.triangles.module.scss';

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
