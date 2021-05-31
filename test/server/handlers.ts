import { rest } from 'msw';
import roverImageFixture from './fixtures/roverInfo.json';
import { API_END_POINT } from '~/services/RoverImageService';

const handlers = [
  rest.get(`${API_END_POINT}/:index`, async (_, res, ctx) => {
    debugger;
    return res(ctx.status(200), ctx.json(roverImageFixture));
  }),
];
export { handlers };
