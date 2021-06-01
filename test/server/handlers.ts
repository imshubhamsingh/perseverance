import { rest } from 'msw';

import roverImageFixture from './fixtures/roverInfo.json';
import roverLatestImageFixture from './fixtures/latest.json';
import { API_END_POINT } from '~/services/RoverImageService';

const handlers = [
  rest.get(`${API_END_POINT}/:index`, async (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(roverImageFixture));
  }),
  rest.get(`${API_END_POINT}/latest`, async (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(roverImageFixture));
  }),
  rest.get(`${API_END_POINT}/`, async (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(roverLatestImageFixture));
  }),
];
export { handlers };
