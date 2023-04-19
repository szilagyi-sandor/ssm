import { CustomError, customErrorCauseSchema } from './domain';

export const convertToCustomError = (error: Error): CustomError => {
  const parsedCause = customErrorCauseSchema.safeParse(error.cause);

  return {
    ...error,
    cause: parsedCause.success ? parsedCause.data : undefined,
  };
};
