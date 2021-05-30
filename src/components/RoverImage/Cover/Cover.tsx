import * as React from 'react';
import cn from 'classnames';
import styles from './Cover.module.css';

interface ICover {
  children: React.ReactChild;
  style?: React.CSSProperties;
  caretStyle?: React.CSSProperties;
  caretDirection?: 'up';
  toRender?: React.ReactChild;
}

function Cover(props: ICover) {
  return (
    <div className={cn(styles.container)}>
      {props.children}
      <div style={props.style} className={styles.widget}>
        {props.toRender}
      </div>
    </div>
  );
}

export default Cover;
