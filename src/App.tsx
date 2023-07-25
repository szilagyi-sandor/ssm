import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useGetThemeClasses } from '@shared/themes';
import { router } from './routing';
import theLineClasses from './app.theLine.module.scss';

// TODO: #1 use appsettings to set default theme
// TODO: #1 app wrapper to themes, remove useGetThemeClasses
// TODO: #1 make sure all files have the CHECKED comment
function App() {
  const classes = useGetThemeClasses({
    theLineClasses,
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

// CHECKED 0.2.0
