import {
  getErrorInfo,
  useErrorContext,
  convertToCustomError,
} from '@shared/error';
import { Button } from '@shared/ui';
import { useGetThemeClasses } from '@shared/themes';
import theLineClasses from './errorPage.theLine.module.scss';

function ErrorPage() {
  const classes = useGetThemeClasses({
    theLineClasses,
  });

  const error = useErrorContext();

  if (!error) {
    return null;
  }

  const customError = convertToCustomError(error);
  const { title, message } = getErrorInfo(customError);

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
