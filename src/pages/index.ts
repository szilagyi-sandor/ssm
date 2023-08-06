import { lazy } from 'react';

export { default as HomePage } from './HomePage';
export { default as ErrorPage } from './ErrorPage';
export { default as SandboxPage } from './SandboxPage';
export { default as ReferencesPage } from './ReferencesPage';
export { default as TechnologiesPage } from './TechnologiesPage';

const LazyHomePage = lazy(() => import('./HomePage'));
const LazyErrorPage = lazy(() => import('./ErrorPage'));
const LazySandboxPage = lazy(() => import('./SandboxPage'));
const LazyReferencesPage = lazy(() => import('./ReferencesPage'));
const LazyTechnologiesPage = lazy(() => import('./TechnologiesPage'));

export {
  LazyHomePage,
  LazyErrorPage,
  LazySandboxPage,
  LazyReferencesPage,
  LazyTechnologiesPage,
};

// CHECKED 0.2.1
