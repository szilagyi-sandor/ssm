import {
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
  PropsWithChildren,
} from 'react';
import { themes } from '../domain';
import { useThemeContext } from '../themeContext';
import { getRandomNumberFromInterval, useTimeout } from '../../helpers';

const lightBeamStageContext = createContext<number>(0);

export const useLightBeamStageContext = () => useContext(lightBeamStageContext);

const LightBeamStageValueProvider = lightBeamStageContext.Provider;

const getNextState = (stage: number) => {
  if (stage === 1) {
    return 0;
  }
  return stage + 1;
};

const MIN_SWITCH_TIME_SECOND = 10;
const MAX_SWITCH_TIME_SECOND = 20;

export function LightBeamStageProvider({ children }: PropsWithChildren) {
  const { currentThemeId } = useThemeContext();

  const { restartTimeout, clear } = useTimeout();
  const [stage, setStage] = useState(0);

  const handleTimeout = useCallback(() => {
    restartTimeout(() => {
      setStage(getNextState);
      handleTimeout();
    }, getRandomNumberFromInterval(MIN_SWITCH_TIME_SECOND, MAX_SWITCH_TIME_SECOND) * 1000);
  }, [restartTimeout]);

  useEffect(() => {
    if (currentThemeId === themes.lightBeam.id) {
      handleTimeout();
    } else {
      clear();
    }
  }, [handleTimeout, currentThemeId, clear]);

  return (
    <LightBeamStageValueProvider value={stage}>
      {children}
    </LightBeamStageValueProvider>
  );
}

// CHECKED 0.2.1
