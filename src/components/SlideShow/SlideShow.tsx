import React from 'react';
import cn from 'classnames';

import styles from './SlideShow.module.css';
import { throttle } from '~/utils';

interface ISlideShow {
  children: React.ReactNode[];
  speed: number;
}

function SlideShow(props: ISlideShow) {
  const childrenArr = React.Children.toArray(props.children);

  const containerRef = React.useRef<HTMLUListElement>(null);
  const count = React.useRef(0);

  const previousImage = throttle(() => {
    const el = containerRef.current;
    const child = el?.children[0] as HTMLElement;
    if (child && el && count.current - 1 >= 0) {
      count.current = count.current - 1;
      el.style.transform = `translateX(-${count.current * child.offsetWidth}px)`;
    }
  }, 700);

  const nextImage = throttle(() => {
    const el = containerRef.current;
    const child = el?.children[0] as HTMLElement;
    if (child && el && count.current + 1 < childrenArr.length) {
      count.current = count.current + 1;
      el.style.transform = `translateX(-${count.current * child.offsetWidth}px)`;
    }
  }, 700);

  React.useEffect(() => {
    const id = setInterval(nextImage, props.speed);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div id='slide-show' className={styles.slideShow}>
      <button onClick={previousImage} className={cn(styles.button, styles.previous)}>
        &lt;&lt;
      </button>
      <ul ref={containerRef} className={styles.container}>
        {childrenArr.map((child, index) => (
          <li className={styles.item} key={index} data-index={index}>
            {child}
          </li>
        ))}
      </ul>
      <button onClick={nextImage} className={cn(styles.button, styles.next)}>
        &gt;&gt;
      </button>
    </div>
  );
}

export default SlideShow;

SlideShow.defaultProps = {
  speed: 1000,
};
