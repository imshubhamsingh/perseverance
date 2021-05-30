import * as React from 'react';
import styles from './AppWrapper.module.css';

interface IAppWrapper {
  children: React.ReactElement;
}

function AppWrapper({ children }: IAppWrapper) {
  return <main className={styles.main}>{children}</main>;
}

export default AppWrapper;
