/* eslint-disable import/no-extraneous-dependencies */
import { expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
import { server } from './mocks/server';
import 'whatwg-fetch';

expect.extend(matchers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

// CHECKED 0.2.0
