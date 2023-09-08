export type TransitionState = {
  id: number;
  name: string;
};

export const transitionStates = {
  start: { id: 1, name: 'start' },
  startInit: { id: 2, name: 'startInit' },
  startTransitioning: { id: 3, name: 'startTransitioning' },
  end: { id: 4, name: 'end' },
  endInit: { id: 5, name: 'endInit' },
  endTransitioning: { id: 6, name: 'endTransitioning' },
};

export type TransitionStateKeys = keyof typeof transitionStates;

// CHECKED 0.2.1
