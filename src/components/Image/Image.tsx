import React from 'react';
import styles from './Image.module.css';

export interface IImage {
  src: string;
  alt: string;
  ariaLabel: string;
  title: string;
}

function Image(props: IImage) {
  return (
    <img
      src={props.src}
      alt={props.src}
      aria-label={props.ariaLabel}
      title={props.title}
      className={styles.img}
    />
  );
}

export default Image;
