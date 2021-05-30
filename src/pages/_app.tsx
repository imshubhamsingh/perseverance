import '~/styles/global.css'

import * as React from 'react';
import NextApp from 'next/app';
import type { AppInitialProps } from 'next/app';

import AppWrapper from '~/containers/AppWrapper/AppWrapper';

interface AppCustomProps {}

class Perseverance extends NextApp<AppCustomProps, AppInitialProps> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    );
  }
}
export default Perseverance;
