import { IRoverImage } from '~/interface/Rover';

export function getTitle(image: IRoverImage) {
  return `sol: ${image.metadata.sol}, Date: ${image.metadata.earth_date}`;
}
