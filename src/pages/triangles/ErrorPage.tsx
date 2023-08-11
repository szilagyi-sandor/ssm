import {
  getErrorText,
  useErrorContext,
  convertToCustomError,
} from '@shared/error';

function ErrorPage() {
  const error = useErrorContext();

  if (!error) {
    return null;
  }

  const customError = convertToCustomError(error);
  const { title, message } = getErrorText(customError);

  return (
    <section>
      <header>
        <h1>{title}</h1>
      </header>

      {message ? <p>{message}</p> : null}

      <button
        type="button"
        onClick={() => {
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }}
      >
        Refresh
      </button>
    </section>
  );
}

export default ErrorPage;

// CHECKED 0.2.1
