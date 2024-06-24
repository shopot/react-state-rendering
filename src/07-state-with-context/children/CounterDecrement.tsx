import type { JSX } from 'react';
import { observer } from 'mobx-react-lite';

import { useCounterStore } from '../stores';
import { getRandomColor } from '../../utils';

const _CounterDecrement = (): JSX.Element => {
  const { decrement, decrementValue } = useCounterStore();

  console.log(`CounterDecrement: ${decrementValue}`);

  const bgColor = getRandomColor();

  return (
    <p className="children" style={{ backgroundColor: bgColor }}>
      <button onClick={decrement}>CounterDecrement: {decrementValue}</button>
    </p>
  );
};

export const CounterDecrement = observer(_CounterDecrement);
