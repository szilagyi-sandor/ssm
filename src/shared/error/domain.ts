import { z } from 'zod';

export const customErrorCauseSchema = z.object({
  errorCode: z.number().nonnegative().finite(),
});

type CustomErrorCause = z.infer<typeof customErrorCauseSchema>;

export type CustomError = Error & {
  cause?: CustomErrorCause;
};

export const notFoundError = new Error('', {
  cause: {
    errorCode: 404,
  },
});
