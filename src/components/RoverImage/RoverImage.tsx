import * as React from 'react';
import cn from 'classnames';

import Cover from './Cover/Cover';

import { useRoverImage } from '~/hooks/useRoverImage';
import { IRoverInfo } from '~/interface/Rover';
import { getTitle } from '~/utils/rover';

import styles from './RoverImage.module.css';

export interface IRoverImage {
  index: number;
}

function Img(props: { image: IRoverInfo }) {
  const { image } = props;
  const title = getTitle(image)
    .map((el) => `${el.title}: ${el.value}`)
    .join(',');
  return (
    <img
      key={image.metadata.id}
      src={image.images.base64}
      alt={String(image.metadata.id)}
      title={title}
      aria-label={title}
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
    return <RoverImage.Placeholder text={'Connection established 📟 ...'} />;
  }

  return (
    <figure className={cn('flex-auto', styles.imgContainer)}>
      <Cover
        toRender={
          <div className={styles.title}>
            {getTitle(image).map((el) => (
              <div key={el.title} className='mt12'>
                <p className='text-12'>{el.title}</p>
                <p>{el.value}</p>
              </div>
            ))}
          </div>
        }
      >
        <Img image={image} />
      </Cover>
    </figure>
  );
}

export default RoverImage;

RoverImage.Placeholder = ({ text }: { text: string } = { text: 'Connecting to 🛰 ...' }) => (
  <figure className={cn('flex-auto', styles.imgContainer)}>
    <p className={cn('flex-auto', 'shimmer', 'font-regular', styles.placeholder)}>
      <span>{text}</span>
    </p>
  </figure>
);
