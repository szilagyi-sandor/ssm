import { useGetThemeClasses } from '@shared/themes';
import {
  getErrorText,
  useErrorContext,
  convertToCustomError,
} from '@shared/error';
// TODO: #1 update this import
import { Button } from '@shared/themes/lightBeam/ui/Button';
import lightBeam from './errorPage.theLine.module.scss';

function ErrorPage() {
  const classes = useGetThemeClasses({
    lightBeam,
  });

  const error = useErrorContext();

  if (!error) {
    return null;
  }

  const customError = convertToCustomError(error);
  const { title, message } = getErrorText(customError);

  return (
    <section className={classes.errorPage}>
      <header>
        <h1>{title}</h1>
      </header>

      {message ? <p>{message}</p> : null}

      <Button
        onClick={() => {
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }}
      >
        Refresh
      </Button>
    </section>
  );
}

export default ErrorPage;

// CHECKED 0.2.0
