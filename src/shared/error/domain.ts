import { z } from 'zod';

export const customErrorCauseSchema = z.object({
  errorCode: z.number().nonnegative().finite(),
});

export type CustomErrorCause = z.infer<typeof customErrorCauseSchema>;

export type CustomError = Error & {
  cause?: CustomErrorCause;
};

export type ErrorText = {
  title: string;
  message?: string;
};

export const notFoundError = new Error('', {
  cause: {
    errorCode: 404,
  },
});

// CHECKED 0.2.0
