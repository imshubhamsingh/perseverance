import * as React from 'react';
import cn from 'classnames';
import { useRoverImage } from '~/hooks/useRoverImage';
import { IRoverInfo } from '~/interface/Rover';
import { getTitle } from '~/utils/rover';

import styles from './RoverImage.module.css';

export interface IRoverImage {
  index: number;
}

function Img(props: { image: IRoverInfo }) {
  const { image } = props;
  return (
    <img
      key={image.metadata.id}
      src={image.images.base64}
      alt={String(image.metadata.id)}
      title={getTitle(image)}
      aria-label={getTitle(image)}
      className={styles.img}
    />
  );
}

function RoverImage(props: IRoverImage) {
  const { index } = props;
  const { image, controller } = useRoverImage(index);

  React.useEffect(() => {
    return () => {
      controller?.abort?.();
    };
  }, [controller]);

  if (!image) {
    return <RoverImage.Placeholder />;
  }

  return (
    <figure className={cn('flex-auto', styles.imgContainer)}>
      <Img image={image} />
    </figure>
  );
}

export default RoverImage;

RoverImage.Placeholder = () => (
  <figure className={cn('flex-auto', styles.imgContainer)}>
    <p className={cn('flex-auto', 'shimmer', 'font-regular', styles.placeholder)}>
      <span>Fetching Image</span>
    </p>
  </figure>
);
