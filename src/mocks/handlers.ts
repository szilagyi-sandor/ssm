// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const delay = process.env.NODE_ENV === 'test' ? 0 : 1500;

export const handlers = [
  rest.get('/msw', (req, res, ctx) => {
    return res(
      ctx.delay(delay),
      ctx.status(200),
      ctx.json({ customMessage: 'Hello world!' })
    );
  }),
];
