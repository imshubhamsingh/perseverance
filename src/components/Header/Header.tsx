import * as React from 'react';
import cn from 'classnames';

import styles from './Header.module.css';

function Header() {
  return (
    <header className={cn('font-thin', 'text-4x', 'text-center', styles.header)}>
      <p>PERSEVERANCE</p>
      <p className={cn('mt12', 'text-2x', 'font-cursive')}>Gallery</p>
    </header>
  );
}

export default Header;
