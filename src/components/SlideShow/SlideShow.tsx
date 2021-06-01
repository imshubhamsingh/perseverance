import * as React from 'react';
import cn from 'classnames';

import styles from './SlideShow.module.css';
import { throttle } from '~/utils';
import LazyLoader from '~/containers/LazyLoader/LazyLoader';

interface ISlideShow {
  /** Elements to be displayed as slideshow */
  children: React.ReactNode[];
  /** Speed of slideshow transition from one element to another */
  speed: number;
  /** Sets slideshow to change slides element automatically in one direction */
  autoplay: boolean;
  /** Slideshow container custom styles */
  style?: React.CSSProperties;
  /** lazy loading of element configuration */
  lazyLoaderConfig?: {
    /** placeholder element till the time actual slide is rendered */
    placeholder?: React.ReactElement;
    /** render slide if current slide + threshold is greater than slide index */
    threshold?: number;
  };
}

function SlideShow(props: ISlideShow) {
  const childrenArr = React.Children.toArray(props.children);

  const containerRef = React.useRef<HTMLUListElement>(null);
  const [count, setCount] = React.useState<number>(0);
  const [isPaused, setIsPaused] = React.useState<boolean>(false);

  const _timmer = Math.min(props.speed, 700);

  const previousImage = throttle(() => {
    setCount((el: number) => Math.max(0, el - 1));
  }, _timmer);

  const nextImage = throttle(() => {
    setCount((el: number) => Math.min(el + 1, childrenArr.length - 1));
  }, _timmer);

  function setPause(val: boolean) {
    setIsPaused(() => {
      return val;
    });
  }

  React.useEffect(() => {
    const el = containerRef.current;
    const child = el?.children[0] as HTMLElement;
    if (child && el) {
      el.style.transition = `transform ${_timmer}ms ease-in`;
      el.style.transform = `translateX(-${count * child.offsetWidth}px)`;
    }
  }, [_timmer, count]);

  React.useEffect(() => {
    let id: NodeJS.Timeout;
    if (props.autoplay && typeof props.speed === 'number') {
      id = setInterval(() => {
        if (isPaused) {
          clearInterval(id);
          return;
        }
        nextImage();
        if (count + 1 >= childrenArr.length) {
          console.log('clearedInterval');
          clearInterval(id);
        }
      }, props.speed);
    }
    return () => {
      clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.autoplay, props.speed, isPaused]);

  return (
    <div
      id='slide-show'
      className={styles.root}
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      {count > 0 && (
        <button
          onClick={previousImage}
          className={cn(styles.button, styles.previous)}
          disabled={count < 0}
        >
          ←
        </button>
      )}
      <div
        className={styles.slideShow}
        style={{
          ...props.style,
        }}
      >
        <ul ref={containerRef} className={styles.container} data-testid='slide-show-container'>
          {childrenArr.map((child, index) => (
            <li className={styles.item} key={index}>
              <LazyLoader index={index} current={count} {...props.lazyLoaderConfig}>
                {/** @ts-ignore*/}
                {child}
              </LazyLoader>
            </li>
          ))}
        </ul>
      </div>
      {count < childrenArr.length - 1 && (
        <button onClick={nextImage} className={cn(styles.button, styles.next)}>
          →
        </button>
      )}
    </div>
  );
}

export default SlideShow;

SlideShow.defaultProps = {
  speed: 5000,
  autoplay: false,
  lazyLoadingConfig: {
    placeholder: <div />,
    threshold: 0,
  },
};
