import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { cache } from 'swr';

import { server } from './server/server';

beforeAll(() => server.listen());
// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of them
// (which is important for test isolation):
afterEach(async () => {
    await waitFor(() => cache.clear());
    server.resetHandlers()
});
afterAll(() => server.close());
