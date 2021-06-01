import { testService } from '~/../test/test-utils';
import RoverImageService from '../RoverImageService';

testService('Rover Image Service', () => {
  const roverService = new RoverImageService();

  it('Fetching Rover Image by Index', async () => {
    const { metadata } = await roverService.fetchByIndex(23);
    const { name } = metadata.rover;
    expect(name).toEqual('Perseverance');
  });

  it('Fetching Rover Latest Image', async () => {
    const { metadata } = await roverService.fetchLatest();
    const { name } = metadata.rover;
    expect(name).toEqual('Perseverance');
  });
  it('Fetching Total Images size captured by Rover', async () => {
    const result = await roverService.fetchTotalImageSize();
    expect(result).toMatchInlineSnapshot(`
      Object {
        "key": "73c5032a1d659438a7386f9c1137d173c680676e155c2b7dd51bf60f41de507d",
        "numImages": 343,
      }
    `);
  });
  it('Fetching Images stream by Rover', async () => {
    const TO = 20;
    const iterator = roverService.stream(TO);
    for await (const { metadata } of iterator) {
      const { name } = metadata.rover;
      expect(name).toEqual('Perseverance');
    }
  });
});
