import { useGetThemeClasses } from '@shared/themes';
import { errorInfos } from './domain';
import theLineClasses from './rootError.theLine.module.scss';

function RootError() {
  const classes = useGetThemeClasses({
    theLineClasses,
  });

  const { title, message } = errorInfos.default;

  return (
    <section className={classes.rootError}>
      <header>
        <h1>{title}</h1>
      </header>

      {message ? <p>{message}</p> : null}
    </section>
  );
}

export { RootError };
