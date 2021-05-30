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
  // console.log(image)
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

  function render() {
    if (!image) {
      return <p>Loading Image</p>;
    }

    return <Img image={image} />;
  }
  return (
    <figure
      className={cn('flex-auto', styles.imgContainer, {
        shimmer: !image,
      })}
    >
      {render()}
    </figure>
  );
}

export default RoverImage;
