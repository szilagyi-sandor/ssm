import { useCallback, useEffect, useRef } from 'react';

export const useTimeout = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const restartTimeout = useCallback(
    (callback: () => void, timeout: number) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      return setTimeout(callback, timeout);
    },
    []
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        // this is needed for React.StrictMode, because it
        // unmounts the component then remounts it with the previous state.
        // without this the state can get stuck.
        timeoutRef.current = null;
      }
    };
  }, []);

  return { timeoutRef, restartTimeout };
};

// CHECKED 0.2.0
