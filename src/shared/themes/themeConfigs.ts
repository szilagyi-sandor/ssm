import { ThemeConfig, ThemeKey } from './domain';
import { lightBeamConfig } from './lightBeam/config';

export const themeConfigs: Record<ThemeKey, ThemeConfig> = {
  lightBeam: lightBeamConfig,
  triangles: { animateInDuration: 500, animateOutDuration: 500 },
};
