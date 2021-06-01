import { testComponent, render, screen, act } from 'test-utils';

import SlideShow from '../SlideShow';

testComponent('Slide Show', () => {
  it('Render Slides', async () => {
    render(
      <SlideShow>
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <p key={idx}>Test {idx}</p>
          ))}
      </SlideShow>
    );
    // Render slide on screen
    expect(await screen.findByText(/Test 0/i)).toBeInTheDocument();
  });

  it('Auto play', async () => {
    render(
      <SlideShow autoplay={true}>
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <p key={idx}>Test {idx}</p>
          ))}
      </SlideShow>
    );
    await act(() => new Promise((r) => setTimeout(r, 2000)));
    // Render slide on screen
    const container = await screen.getByTestId('slide-show-container');
    expect(container.style).toHaveProperty('transition', 'transform 700ms ease-in');
  });

  it('Speed Control', async () => {
    const SPEED = 600;
    render(
      <SlideShow autoplay={true} speed={SPEED}>
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <p key={idx}>Test {idx}</p>
          ))}
      </SlideShow>
    );
    await act(() => new Promise((r) => setTimeout(r, 2000)));
    const container = await screen.getByTestId('slide-show-container');
    expect(container.style).toHaveProperty('transition', `transform ${SPEED}ms ease-in`);
  });
});
