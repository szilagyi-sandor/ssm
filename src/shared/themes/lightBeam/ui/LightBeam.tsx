import classNames from 'classnames';
import { beamFullDuration } from '../config';
import { useThemeContext } from '../../themeContext';
import { useLightBeamStateContext } from './lightBeamStateContext';
import { useTransitionTracker } from '../../../animation/useTransitionTracker';
import { useSmoothLoadingContext } from '../../../loading/smoothLoadingContext';
import classes from './lightBeam.module.scss';

type Props = {
  errorBoundaryActive: boolean;
};

const skippedTransitionProperties = ['box-shadow'];

// the grid and the lightBeam are
// different elements so z-index is easier to manage
function LightBeam({ errorBoundaryActive }: Props) {
  // TODO: #1
  const stage = 1 - 1;
  const loading = useSmoothLoadingContext();
  const { on } = useLightBeamStateContext();
  const { upcomingThemeId: changing } = useThemeContext();

  const available = !errorBoundaryActive && !loading;

  const {
    ref,
    onTransitionEnd,
    transitionState: { name: transitionName },
  } = useTransitionTracker<HTMLDivElement>({
    on,
    timeout: beamFullDuration + 100,
    mountAnimation: true,
    detectLastTransition: true,
    skippedTransitionProperties,
  });

  return (
    <div className={classes.lightBeamWrapper}>
      <div
        ref={ref}
        onTransitionEnd={onTransitionEnd}
        className={classNames(classes.lightBeam, classes[transitionName], {
          [classes.error]: errorBoundaryActive,
          [classes.loading]: !errorBoundaryActive && loading,
          [classes['stage-0']]: available && stage === 0,
          [classes['stage-1']]: available && stage === 1,
        })}
      />

      <div
        className={classNames(
          classes.overlay,
          changing ? classes.appear : classes.disappear
        )}
      />

      <div
        className={classNames(
          classes.grid,
          on ? classes.appear : classes.disappear
        )}
      />
    </div>
  );
}

export { LightBeam };

// CHECKED 0.2.1
