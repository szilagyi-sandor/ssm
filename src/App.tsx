import { Suspense } from 'react';
import { router } from '@features/routing';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div id="app">
      <Suspense fallback={<>Loading...</>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export { App };
