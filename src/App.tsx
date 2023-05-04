import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@features/routing';
import { useGetThemeClasses } from '@shared/themes';
import theLineClasses from './app.theLine.module.scss';

// TODO: use appsettings to set default theme
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
