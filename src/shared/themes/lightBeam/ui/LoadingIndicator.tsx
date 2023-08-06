import classes from './loadingIndicator.module.scss';

type Props = {
  loading?: boolean;
};

function LoadingIndicator({ loading }: Props) {
  if (loading === false) {
    return null;
  }

  return (
    <div className={classes.loadingIndicator}>
      <span className={classes.text}>
        Loading
        <span className={classes.dot}>.</span>
        <span className={classes.dot}>.</span>
        <span className={classes.dot}>.</span>
      </span>
    </div>
  );
}

export { LoadingIndicator };

// CHECKED 0.2.1
