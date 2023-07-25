import { useGetThemeClasses } from '../themes';
import { errorTexts } from './errorTexts';
// TODO: #1 remove:
import theLineClasses from './rootError.theLine.module.scss';

function RootError() {
  const classes = useGetThemeClasses({
    theLineClasses,
  });

  const { title, message } = errorTexts.default;

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

// CHECKED 0.2.0
