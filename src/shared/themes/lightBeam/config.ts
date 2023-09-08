import { ThemeConfig } from '../domain';

export const beamDelay = 200;
export const beamDuration = 400;
export const beamFullDuration = beamDuration + beamDelay;
export const gridDelay = beamFullDuration;
export const gridDuration = 300;
export const gridFullDuration = gridDelay + gridDuration;
export const overlayDelay = gridFullDuration + 200;
export const overlayDuration = 400;
export const overlayFullDuration = overlayDelay + overlayDuration;

const animateInDuration = overlayFullDuration;
const animateOutDuration = overlayFullDuration;

export const lightBeamConfig: ThemeConfig = {
  animateInDuration,
  animateOutDuration,
};

// CHECKED 0.2.1
