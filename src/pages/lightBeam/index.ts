import { lazy } from 'react';

const LazyLightBeamHomePage = lazy(() => import('./HomePage'));
const LazyLightBeamErrorPage = lazy(() => import('./ErrorPage'));
const LazyLightBeamSandboxPage = lazy(() => import('./SandboxPage'));
const LazyLightBeamReferencesPage = lazy(() => import('./ReferencesPage'));
const LazyLightBeamTechnologiesPage = lazy(() => import('./TechnologiesPage'));

export {
  LazyLightBeamHomePage,
  LazyLightBeamErrorPage,
  LazyLightBeamSandboxPage,
  LazyLightBeamReferencesPage,
  LazyLightBeamTechnologiesPage,
};

// CHECKED 0.2.1
