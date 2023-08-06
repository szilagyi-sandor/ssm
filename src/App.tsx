import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useGetThemeClasses } from '@shared/themes';
import { router } from './routing';
import lightBeam from './app.lightBeam.module.scss';

// TODO: #1 use appsettings to set default theme
// TODO: #1 make sure all files have the CHECKED comment
// TODO: #1 search for Shapes and change to Triangles

// TODO: #1 theme loader + loading out can be used with delayer nicely

// TODO: #1 finish 0.2.1 check then do 0.2.2 check because imports changed a lot, and also check all the files

// TODO: cv page

function App() {
  const classes = useGetThemeClasses({
    lightBeam,
  });

  return (
    <div id="app" className={classes.app}>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export { App };

// CHECKED 0.2.1
