import {
  Dispatch,
  useState,
  useEffect,
  useContext,
  createContext,
  SetStateAction,
  PropsWithChildren,
} from 'react';
import { noop, useTimeout } from '../../../helpers';
import { useThemeContext } from '../../themeContext';
import { gridFullDuration } from '../config';

type LightBeamState = {
  on: boolean;
  isActive: boolean;
  // calculated based on light beam + grid full duration
  animating: boolean;
};

const lightBeamStateContext = createContext<LightBeamState>({
  on: true,
  isActive: false,
  animating: false,
});
const setLightBeamStateContext =
  createContext<Dispatch<SetStateAction<LightBeamState>>>(noop);

export const useLightBeamStateContext = () => useContext(lightBeamStateContext);
export const useSetLightBeamStateContext = () =>
  useContext(setLightBeamStateContext);

const LightBeamStateValueProvider = lightBeamStateContext.Provider;
const SetLightBeamStateProvider = setLightBeamStateContext.Provider;

export function LightBeamStateProvider({ children }: PropsWithChildren) {
  const { upcomingThemeId } = useThemeContext();
  const { restartTimeout } = useTimeout();
  const [state, setState] = useState<LightBeamState>({
    on: true,
    isActive: false,
    animating: false,
  });

  useEffect(() => {
    if (upcomingThemeId) {
      setState((prevState) => ({ ...prevState, on: false }));
    }
  }, [upcomingThemeId]);

  useEffect(() => {
    setState((prevState) => ({ ...prevState, animating: true }));

    restartTimeout(
      () => setState((prevState) => ({ ...prevState, animating: false })),
      gridFullDuration
    );
  }, [restartTimeout, state.on]);

  return (
    <LightBeamStateValueProvider value={state}>
      <SetLightBeamStateProvider value={setState}>
        {children}
      </SetLightBeamStateProvider>
    </LightBeamStateValueProvider>
  );
}

// CHECKED 0.2.1
