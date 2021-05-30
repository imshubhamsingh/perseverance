import * as React from 'react';
import cn from 'classnames';

import styles from './AppWrapper.module.css';
import Header from '~/components/Header/Header';

interface IAppWrapper {
  children: React.ReactElement;
}

function AppWrapper({ children }: IAppWrapper) {
  return (
    <main className={cn('flex-auto', 'flex-column', styles.main)}>
      <Header />
      <div>{children}</div>
    </main>
  );
}

export default AppWrapper;
