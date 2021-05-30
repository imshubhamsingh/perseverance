import { IRoverInfo } from '~/interface/Rover';

export function getTitle(image: IRoverInfo) {
  const info = [
    {
      title: 'sol',
      value: image.metadata.sol,
    },
    {
      title: 'Earth Date',
      value: image.metadata.earth_date
    }
  ]

  return info;
}
