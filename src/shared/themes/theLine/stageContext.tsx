import {
  useRef,
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
  PropsWithChildren,
} from 'react';
import { getRandomNumberFromInterval } from '../../helpers';

const stageContext = createContext<number>(0);

export const useStageContext = () => useContext(stageContext);

const StageValueProvider = stageContext.Provider;

const switchState = (stage: number) => {
  if (stage === 1) {
    return 0;
  }
  return stage + 1;
};

// TODO: disable when other theme is active and not used
export function StageProvider({ children }: PropsWithChildren) {
  const timer = useRef<NodeJS.Timer | null>(null);
  const [stage, setStage] = useState(0);

  const setTimer = useCallback(() => {
    timer.current = setTimeout(() => {
      setStage(switchState);
      setTimer();
    }, getRandomNumberFromInterval(10, 20) * 1000);
  }, []);

  useEffect(() => {
    setTimer();

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [setTimer]);

  return <StageValueProvider value={stage}>{children}</StageValueProvider>;
}

// CHECKED 0.2.0
