import * as React from 'react';
import cn from 'classnames';

import styles from './Header.module.css';

function Header() {
  return (
    <header className={cn('font-thin', 'text-4x', styles.header)}>
      PERSEVERANCE
    </header>
  );
}

export default Header;
