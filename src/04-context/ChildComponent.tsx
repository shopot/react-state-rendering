import { useContext, type JSX } from 'react';

import { CounterContext } from './CounterContext';

import { getRandomColor } from '../utils';

export const ChildComponent = (): JSX.Element => {
  const value = useContext(CounterContext);

  console.log(`ChildComponent: ${value}`);

  const bgColor = getRandomColor();

  return (
    <p className="children" style={{ backgroundColor: bgColor }}>
      ChildComponent: {value}
    </p>
  );
};
