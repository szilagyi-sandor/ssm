import { useGetThemeClasses } from '@shared/themes';
import theLineClasses from './loadingIndicator.theLine.module.scss';

type Props = {
  loading?: boolean;
};

function LoadingIndicator({ loading }: Props) {
  const classes = useGetThemeClasses({
    theLineClasses,
  });

  if (loading === false) {
    return null;
  }

  return (
    <div className={classes.loadingIndicator}>
      <div className={classes.indicator}>
        <span className={classes.text}>
          Loading
          {[1, 2, 3].map((key) => (
            <span key={key} className={classes.dot}>
              .
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

export { LoadingIndicator };
