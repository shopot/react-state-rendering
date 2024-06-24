import type { JSX } from 'react';
import { observer } from 'mobx-react-lite';

import { globalCounterStore } from '../stores';
import { getRandomColor } from '../../utils';

export const CounterDecrement = observer((): JSX.Element => {
  const { decrement, decrementValue } = globalCounterStore;

  console.log(`CounterDecrement: ${decrementValue}`);

  const bgColor = getRandomColor();

  return (
    <p className="children" style={{ backgroundColor: bgColor }}>
      <button onClick={decrement}>CounterDecrement: {decrementValue}</button>
    </p>
  );
});
