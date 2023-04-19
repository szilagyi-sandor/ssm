import { lazy } from 'react';

export { default as HomePage } from './HomePage';
export { default as ErrorPage } from './ErrorPage';
export { default as SandboxPage } from './SandboxPage';

const LazyHomePage = lazy(() => import('./HomePage'));
const LazyErrorPage = lazy(() => import('./ErrorPage'));
const LazySandboxPage = lazy(() => import('./SandboxPage'));

export { LazyHomePage, LazyErrorPage, LazySandboxPage };
