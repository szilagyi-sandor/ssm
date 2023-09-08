import {
  TransitionState,
  transitionStates,
  TransitionStateKeys,
} from './domain';

export const getNextTransitionState = (
  currentState: TransitionState
): TransitionState =>
  Object.keys(transitionStates)
    .map((key) => transitionStates[key as TransitionStateKeys])
    .find((s) => s.id === currentState.id + 1) || transitionStates.start;

// CHECKED 0.2.1
