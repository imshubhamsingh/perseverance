import { cache } from 'swr';
import { testComponent, render, screen } from 'test-utils';
import RoverImage from '../RoverImage';

testComponent('Rover Image', () => {
  afterEach(() => cache.clear());
  
  it('Rendering Rover Image after fetching rover info', async () => {
    render(<RoverImage index={342} />);
    expect(await screen.findByText(/Fetching image/i)).toBeInTheDocument();
    expect(await screen.getByTestId('rover-image')).toBeInTheDocument();
    // console.log(img)
  });
  // it('Rendering Fallback when Rover Image fetching fails', async () => {
  //   render(<RoverImage index={342} />);
  //   expect(await screen.findByText(/Fetching failed .../i)).toBeInTheDocument()
  // });
});
