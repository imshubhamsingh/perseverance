import { IRoverInfo } from '~/interface/Rover';

export function getTitle(image: IRoverInfo) {
  return `sol: ${image.metadata.sol}, Date: ${image.metadata.earth_date}`;
}
