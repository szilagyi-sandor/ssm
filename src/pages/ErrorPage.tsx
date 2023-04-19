import {
  getErrorInfo,
  useErrorContext,
  convertToCustomError,
} from '@shared/error';

function ErrorPage() {
  const error = useErrorContext();

  if (!error) {
    return null;
  }

  const { title, message } = getErrorInfo(convertToCustomError(error));

  return (
    <section>
      <header>
        <h1>{title}</h1>
      </header>

      {message ? <p>{message}</p> : null}
    </section>
  );
}

export default ErrorPage;
