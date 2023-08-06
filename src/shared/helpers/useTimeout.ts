import { useCallback, useEffect, useRef } from 'react';

export const useTimeout = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const restartTimeout = useCallback(
    (callback: () => void, timeout: number) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(callback, timeout);

      return timeoutRef.current;
    },
    []
  );

  const clear = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  return { timeoutRef, restartTimeout, clear };
};

// CHECKED 0.2.1
