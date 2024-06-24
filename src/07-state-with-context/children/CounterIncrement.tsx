import type { JSX } from 'react';
import { observer } from 'mobx-react-lite';

import { useCounterStore } from '../stores';
import { getRandomColor } from '../../utils';

const _CounterIncrement = (): JSX.Element => {
  const { increment, incrementValue } = useCounterStore();

  console.log(`CounterIncrement: ${incrementValue}`);

  const bgColor = getRandomColor();

  return (
    <p className="children" style={{ backgroundColor: bgColor }}>
      <button onClick={increment}>CounterIncrement: {incrementValue}</button>
    </p>
  );
};

export const CounterIncrement = observer(_CounterIncrement);
