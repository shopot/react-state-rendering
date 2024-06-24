import { type JSX } from 'react';

import { CounterIncrement } from './children/CounterIncrement';
import { CounterDecrement } from './children/CounterDecrement';
import { getRandomColor } from '../utils';

export const GlobalState = (): JSX.Element => {
  console.log('GlobalState render');

  const bgColor = getRandomColor();

  return (
    <div className="parent" style={{ backgroundColor: bgColor }}>
      <p>GlobalState</p>
      <CounterIncrement />
      <CounterDecrement />
    </div>
  );
};
