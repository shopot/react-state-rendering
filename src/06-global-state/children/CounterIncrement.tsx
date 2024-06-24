import type { JSX } from 'react';
import { observer } from 'mobx-react-lite';

import { globalCounterStore } from '../stores';
import { getRandomColor } from '../../utils';

export const CounterIncrement = observer((): JSX.Element => {
  const { increment, incrementValue } = globalCounterStore;

  console.log(`CounterIncrement: ${incrementValue}`);

  const bgColor = getRandomColor();

  return (
    <p className="children" style={{ backgroundColor: bgColor }}>
      <button onClick={increment}>CounterIncrement: {incrementValue}</button>
    </p>
  );
});
