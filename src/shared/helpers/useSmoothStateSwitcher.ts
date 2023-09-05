import { useCallback, useEffect, useRef, useState } from 'react';
import { useTimeout } from './useTimeout';

export const useSmoothStateSwitcher = <T>(
  incomingState: T,
  skipDefaultDelay = false,
  timeout = 1000
) => {
  const { timeoutRef, restartTimeout } = useTimeout();

  const isFirstEffect = useRef(true);
  const readyToSwitch = useRef(skipDefaultDelay);
  const pendingState = useRef<T | undefined>(undefined);

  const [state, setState] = useState(incomingState);

  // if pending state is empty it sets readyToSwitch to true, because
  // it means the time has passed and when the incoming state changes it can be set right away.
  // if pending state is not empty the timer will set the state to it, clear it then
  // call itself again so the readyToSwitch can be set to true if the pending state remains empty.
  const handleTimeout = useCallback(() => {
    restartTimeout(() => {
      if (pendingState.current !== undefined) {
        setState(pendingState.current);
        pendingState.current = undefined;
        handleTimeout();
      } else {
        readyToSwitch.current = true;
      }
    }, timeout);
  }, [timeout, restartTimeout]);

  useEffect(() => {
    if (isFirstEffect.current) {
      // it's the first effect, the timer needs to get started
      handleTimeout();
      isFirstEffect.current = false;
    }
    // the check for timer.current is needed only because of React.StrictMode,
    // because it could clear the timer, and this can get stuck.
    else if (readyToSwitch.current || !timeoutRef.current) {
      // if it's ready to switch set the incomingState to the state and start the timeout handler.
      setState(incomingState);
      handleTimeout();
      readyToSwitch.current = false;
    } else {
      // if it's not ready to switch the pending state to the
      // latest incoming state.
      pendingState.current = incomingState;
    }
  }, [handleTimeout, incomingState, timeoutRef]);

  useEffect(() => {
    return () => {
      // this is needed for React.StrictMode, because it
      // unmounts the component then remounts it with the previous state.
      // without this the isFirstEffect will not work properly.
      isFirstEffect.current = true;
    };
  }, []);

  return state;
};

// CHECKED 0.2.1
