import * as React from 'react';
import Head from 'next/head';
import cn from 'classnames';

import styles from './AppWrapper.module.css';
import Header from '~/components/Header/Header';

interface IAppWrapper {
  children: React.ReactElement;
}

function AppWrapper({ children }: IAppWrapper) {
  return (
    <>
      <Head>
        <title>PERSEVERANCE | Gallery</title>
        <meta name='theme-color' content='#111111' />
        <link rel='shortcut icon' href='/meta/favicon.png' />
      </Head>
      <main className={cn('flex-auto', 'flex-column', styles.main)}>
        <Header />
        <div>{children}</div>
      </main>
    </>
  );
}

export default AppWrapper;
