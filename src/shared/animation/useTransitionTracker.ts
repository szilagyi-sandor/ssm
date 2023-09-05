import { useCallback, useEffect, useRef, useState } from 'react';
import { useTimeout } from '../helpers';

import {
  transitionStates,
  getNextTransitionState,
  getMaxTransitionProperties,
} from './domain';

const forceReflow = (el: HTMLElement | null) => el && el.offsetHeight;

type Param = {
  on: boolean;
  timeout: number;
  mountAnimation?: boolean;
  detectLastTransition?: boolean;
  skippedTransitionProperties?: string[];
};

export const useTransitionTracker = <T extends HTMLElement>({
  on,
  timeout,
  mountAnimation,
  detectLastTransition,
  skippedTransitionProperties,
}: Param) => {
  const ref = useRef<T>(null);
  const skippingEffectRef = useRef(!mountAnimation);
  const { timeoutRef: transitionEndTimeoutRef, clear } = useTimeout();
  const [transitionState, setTransitionState] = useState(
    on === !!mountAnimation ? transitionStates.start : transitionStates.end
  );

  // handles the initial state for both start and end
  useEffect(() => {
    if (skippingEffectRef.current) {
      skippingEffectRef.current = false;
    } else {
      setTransitionState(
        on ? transitionStates.startInit : transitionStates.endInit
      );
      clear();
      forceReflow(ref.current);
    }
  }, [on, clear]);

  // this will be triggered after a render with the initial states
  useEffect(() => {
    if (
      transitionState === transitionStates.startInit ||
      transitionState === transitionStates.endInit
    ) {
      const nextState = getNextTransitionState(transitionState);
      setTransitionState(nextState);
      forceReflow(ref.current);
      clear();

      // if the element does not have a transition,
      // this triggers setting the final end/start states after the timeout
      transitionEndTimeoutRef.current = setTimeout(() => {
        setTransitionState(getNextTransitionState(nextState));
      }, timeout);
    }
  }, [timeout, transitionState, clear, transitionEndTimeoutRef]);

  // clean up
  useEffect(() => {
    return () => {
      skippingEffectRef.current = !mountAnimation;
    };
  }, [mountAnimation]);

  const onTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLElement>) => {
      if (detectLastTransition) {
        const maxTransitionProps = getMaxTransitionProperties(
          e.currentTarget,
          skippedTransitionProperties
        );

        if (maxTransitionProps.includes(e.propertyName)) {
          clear();

          // the check is needed, because the function can be called multiple times with
          // the same maxTransitionProp.
          setTransitionState((currentState) =>
            currentState.name === transitionStates.startTransitioning.name ||
            currentState.name === transitionStates.endTransitioning.name
              ? getNextTransitionState(currentState)
              : currentState
          );
        }
      }
    },
    [detectLastTransition, clear, skippedTransitionProperties]
  );

  return {
    ref,
    onTransitionEnd,
    transitionState,
  };
};

// CHECKED 0.2.1
