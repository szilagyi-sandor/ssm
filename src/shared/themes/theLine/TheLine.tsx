import classNames from 'classnames';
import { useStageContext } from './stageContext';
import classes from './theLine.module.scss';

type Props = {
  loading: boolean;
  error: boolean;
};

function TheLine({ error, loading }: Props) {
  const stage = useStageContext();
  const available = !error && !loading;

  return (
    <div className={classes.theLineWrapper}>
      <div
        className={classNames(classes.theLine, {
          [classes.error]: error,
          [classes.loading]: !error && loading,
          [classes['stage-0']]: available && stage === 0,
          [classes['stage-1']]: available && stage === 1,
        })}
      />

      <div className={classes.grid} />
    </div>
  );
}

export { TheLine };
