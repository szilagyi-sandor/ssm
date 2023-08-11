import { errorTexts } from './errorTexts';
import { useGetThemeClasses } from '../themes';
import lightBeam from './rootError.lightBeam.module.scss';
import triangles from './rootError.triangles.module.scss';

function RootError() {
  const classes = useGetThemeClasses({
    lightBeam,
    triangles,
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

// CHECKED 0.2.1
