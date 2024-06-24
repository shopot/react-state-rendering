import { type JSX } from 'react';

import { CounterIncrement } from './children/CounterIncrement';
import { CounterDecrement } from './children/CounterDecrement';
import { CounterStoreProvider } from './stores';
import { getRandomColor } from '../utils';

export const CounterStoreContext = (): JSX.Element => {
  console.log('CounterStoreContext render');

  const bgColor = getRandomColor();

  return (
    <div className="parent" style={{ backgroundColor: bgColor }}>
      <CounterStoreProvider>
        <p>CounterStoreContext</p>
        <CounterIncrement />
        <CounterDecrement />
      </CounterStoreProvider>
    </div>
  );
};
