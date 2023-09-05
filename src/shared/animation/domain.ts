type TransitionState = {
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

type TransitionStateKeys = keyof typeof transitionStates;

export const getNextTransitionState = (
  currentState: TransitionState
): TransitionState =>
  Object.keys(transitionStates)
    .map((key) => transitionStates[key as TransitionStateKeys])
    .find((s) => s.id === currentState.id + 1) || transitionStates.start;

const getTransitionStyleValues = (str: string) =>
  str.replace(/[A-Z]/gi, '').split(', ').map(parseFloat);

export const getMaxProperties = (
  properties: string[],
  totals: number[]
): string[] => {
  if (
    totals.length === 0 ||
    properties.length === 0 ||
    totals.length !== properties.length
  ) {
    return [];
  }

  let max = totals[0];
  let maxProperties = [properties[0]];

  totals.forEach((total, i) => {
    if (total > max) {
      max = total;
      maxProperties = [properties[i]];
    }

    if (total === max) {
      maxProperties.push(properties[i]);
    }
  });

  return maxProperties;
};

// this helps get the longest transitions on an html element.
// useful to detect onTransitionEnd for the last transition.
export const getMaxTransitionProperties = (
  el: HTMLElement,
  skips?: string[]
) => {
  const style = window.getComputedStyle(el);
  let properties = style.transitionProperty.split(', ');
  const delays = getTransitionStyleValues(style.transitionDelay);
  const durations = getTransitionStyleValues(style.transitionDuration);

  let totals = durations.map((v, i) => {
    return v + delays[i];
  });

  if (skips) {
    const skipIndexes: number[] = [];

    skips.forEach((skip) => {
      const skipIndex = properties.findIndex((property) => property === skip);

      if (skipIndex !== -1) {
        skipIndexes.push(skipIndex);
      }
    });

    properties = properties.filter((_, i) => !skipIndexes.includes(i));
    totals = totals.filter((_, i) => !skipIndexes.includes(i));
  }

  return getMaxProperties(properties, totals);
};

// CHECKED 0.2.1
