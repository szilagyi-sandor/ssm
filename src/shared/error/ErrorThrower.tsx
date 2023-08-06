type Props = {
  error: Error;
};

function ErrorThrower({ error }: Props): JSX.Element {
  throw error;
}

export { ErrorThrower };

// CHECKED 0.2.1
