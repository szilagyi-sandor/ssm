import { transitionStates } from './domain';

export const getIsTransitionLoading = (stateId: number) =>
  ![transitionStates.start.id, transitionStates.end.id].includes(stateId);

// CHECKED 0.2.1
