import { lazy } from 'react';

const LazyTrianglesHomePage = lazy(() => import('./HomePage'));
const LazyTrianglesErrorPage = lazy(() => import('./ErrorPage'));
const LazyTrianglesSandboxPage = lazy(() => import('./SandboxPage'));
const LazyTrianglesReferencesPage = lazy(() => import('./ReferencesPage'));
const LazyTrianglesTechnologiesPage = lazy(() => import('./TechnologiesPage'));

export {
  LazyTrianglesHomePage,
  LazyTrianglesErrorPage,
  LazyTrianglesSandboxPage,
  LazyTrianglesReferencesPage,
  LazyTrianglesTechnologiesPage,
};

// CHECKED 0.2.1
