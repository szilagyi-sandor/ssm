import { z } from 'zod';

export const customErrorCauseSchema = z.object({
  errorCode: z.number().nonnegative().finite(),
});

export type CustomErrorCause = z.infer<typeof customErrorCauseSchema>;

export type CustomError = Error & {
  cause?: CustomErrorCause;
};

export type ErrorInfo = {
  title: string;
  message?: string;
};

export const notFoundError = new Error('', {
  cause: {
    errorCode: 404,
  },
});

export const errorInfos = {
  401: {
    title: '401 - Unauthorized',
    message: 'Access is denied due to invalid credentials',
  },
  403: {
    title: '403 - Forbidden',
    message: "You don't have permission to access this page.",
  },
  404: {
    title: '404 - Not found',
    message:
      'What you are looking for might have been removed, had its name changed or is temporally unavailable.',
  },
  default: {
    title: 'Error',
    message: 'Sorry, something went wrong. Our team is working on it.',
  },
};
