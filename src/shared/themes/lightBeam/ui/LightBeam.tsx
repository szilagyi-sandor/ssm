import classNames from 'classnames';
import { useLightBeamStageContext } from '../lightBeamStageContext';
import { useSmoothLoadingContext } from '../../../loading';
import classes from './lightBeam.module.scss';

type Props = {
  errorBoundaryActive: boolean;
};

// the grid and lightBeam are
// different components so z-index is easier to manage
function LightBeam({ errorBoundaryActive }: Props) {
  const loading = useSmoothLoadingContext();
  const stage = useLightBeamStageContext();
  const available = !errorBoundaryActive && !loading;

  return (
    <div className={classes.lightBeamWrapper}>
      <div
        className={classNames(classes.lightBeam, {
          [classes.error]: errorBoundaryActive,
          [classes.loading]: !errorBoundaryActive && loading,
          [classes['stage-0']]: available && stage === 0,
          [classes['stage-1']]: available && stage === 1,
        })}
      />

      <div className={classes.grid} />
    </div>
  );
}

export { LightBeam };

// CHECKED 0.2.1
