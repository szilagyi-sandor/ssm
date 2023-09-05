import classNames from 'classnames';
import { useLightBeamStageContext } from '../lightBeamStageContext';
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
  const loading = useSmoothLoadingContext();
  const stage = useLightBeamStageContext();
  const available = !errorBoundaryActive && !loading;

  const {
    ref,
    onTransitionEnd,
    transitionState: { name: transitionName },
  } = useTransitionTracker<HTMLDivElement>({
    on: true,
    timeout: 1500,
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

      <div className={classes.overlay} />

      <div className={classes.grid} />
    </div>
  );
}

export { LightBeam };

// CHECKED 0.2.1
