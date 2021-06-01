import * as React from 'react';
import { SWRConfig } from 'swr';
import { configure } from '@testing-library/dom';
import { renderHook } from '@testing-library/react-hooks';

configure({
  testIdAttribute: 'data-testid',
});

function testComponent(testname: string, cb = () => {}) {
  describe(`⚛️ Component :: ${testname}`, cb);
}

function testUtil(testname: string, cb = () => {}) {
  describe(`🔧 Util :: ${testname}`, cb);
}

function testHook(testname: string, cb = () => {}) {
  describe(`🪝 Hook :: ${testname}`, cb);
}

function testService(testname: string, cb = () => {}) {
  describe(`🚚 Service :: ${testname}`, cb);
}

function SWRWrapper({ children }: { children: React.ReactNode }) {
  return <SWRConfig value={{ dedupingInterval: 0 }}>{children}</SWRConfig>;
}

export * from '@testing-library/react';

export * from './server/server';
export { testComponent, testUtil, testService, testHook, renderHook, SWRWrapper };
