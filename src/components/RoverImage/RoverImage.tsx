import * as React from 'react';
import cn from 'classnames';

import Cover from './Cover/Cover';

import { useRoverImage } from '~/hooks/useRoverImage';
import { IRoverInfo } from '~/interface/Rover';
import { getTitle } from '~/utils/rover';

import type CustomError from '~/interface/CustomError';

import styles from './RoverImage.module.css';

export interface IRoverImage {
  /** Rover Image Index value */
  index: number;
  /** Callback function on fetching of image fails */
  onError?: (error: CustomError) => void;
}

function Img(props: { image: IRoverInfo }) {
  const { image } = props;
  const title = getTitle(image)
    .map((el) => `${el.title}: ${el.value}`)
    .join(',');
  return (
    <img
      data-testid='rover-image'
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
  const { index, onError } = props;
  const controller = React.useRef<AbortController>(new AbortController());
  
  //@ts-ignore https://github.com/node-fetch/node-fetch/issues/741
  const { image, isError } = useRoverImage(index, { signal: controller.current.signal });
  React.useEffect(() => {
    return () => {
      controller.current?.abort?.();
    };
  }, []);

  React.useEffect(() => {
    if (isError && onError) {
      onError?.(isError);
    }
  }, [isError, onError]);
  
  if (!image || isError) {
    return (
      <RoverImage.Placeholder text={!isError ? 'Fetching image ...' : 'Fetching failed ...'} />
    );
  }

  return (
    <figure className={cn('flex-auto', 'pointer', styles.imgContainer)}>
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

RoverImage.Placeholder = ({ text }: { text?: string } = { text: 'Connecting to server ...' }) => (
  <figure className={cn('flex-auto', styles.imgContainer)}>
    <p className={cn('flex-auto', 'shimmer', 'font-regular', styles.placeholder)}>
      <span>{text}</span>
    </p>
  </figure>
);
