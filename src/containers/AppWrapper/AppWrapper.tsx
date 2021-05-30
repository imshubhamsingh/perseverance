import * as React from 'react';
import cn from 'classnames';

import styles from './AppWrapper.module.css';

interface IAppWrapper {
  children: React.ReactElement;
}

function AppWrapper({ children }: IAppWrapper) {
  return <main className={cn('flex-auto', styles.main)}>{children}</main>;
}

export default AppWrapper;
