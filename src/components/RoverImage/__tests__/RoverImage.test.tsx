import { testComponent, render, screen, SWRWrapper, act, server, rest } from 'test-utils';
import { API_END_POINT } from '~/services/RoverImageService';

import RoverImage from '../RoverImage';

testComponent('Rover Image', () => {
  it('Rendering Rover Image after fetching rover info', async () => {
    render(
      <SWRWrapper>
        <RoverImage index={342} />
      </SWRWrapper>
    );

    expect(await screen.findByText(/Fetching image/i)).toBeInTheDocument();
    // TODO: need to check if this can be removed.
    await act(() => new Promise((r) => setTimeout(r, 2000)));
    expect(await screen.getByTestId('rover-image')).toBeInTheDocument();
  });
  it('Rendering Fallback when Rover Image fetching fails', async () => {
    server.use(
      rest.get(API_END_POINT + '/:index', async (_, res, ctx) => {
        return res(ctx.status(404));
      })
    );
    const onError = jest.fn();
    render(
      <SWRWrapper>
        <RoverImage index={342} onError={onError} />
      </SWRWrapper>
    );
    expect(await screen.findByText(/Fetching failed/i)).toBeInTheDocument();
    expect(onError.mock.calls.length).toBe(1);
  });
});
