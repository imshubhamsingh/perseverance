// https://nextjs.org/docs/advanced-features/custom-error-page

import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';

export const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sorry, the page you were looking for doesn&apos;t exist. (404)</title>
      </Head>
      <div>
        <div className='text-white'>
          <div className='text-center full-width'>
            <h1 className='mb8 text-4x'>404</h1>
            <h2 className='mb8 font-thin'>You are looking for something that isn&apos;t here</h2>
            <h3 className="font-thin">
              Try{' '}
              <Link href='/'>
                <a className="link font-bold">Home</a>
              </Link>
              , maybe?
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
