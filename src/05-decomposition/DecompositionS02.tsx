import { useState, type JSX } from 'react';

import { CounterIncrement } from './children/CounterIncrement';
import { CounterDecrement } from './children/CounterDecrement';
import { getRandomColor } from '../utils';

type CounterState = {
  incrementValue: number;
  decrementValue: number;
};

export const DecompositionS02 = (): JSX.Element => {
  const [value, setValue] = useState<CounterState>({ incrementValue: 0, decrementValue: 0 });

  console.log('DecompositionS02');

  const increment = () => {
    setValue((prevValue) => ({ ...prevValue, incrementValue: prevValue.incrementValue + 1 }));
  };

  const decrement = () => {
    setValue((prevValue) => ({ ...prevValue, decrementValue: prevValue.decrementValue - 1 }));
  };

  const bgColor = getRandomColor();

  return (
    <div className="parent" style={{ backgroundColor: bgColor }}>
      <p>
        DecompositionS02:{' '}
        <strong>
          {value.incrementValue}, {value.decrementValue}
        </strong>
      </p>
      {/* Меморизация компонентов */}
      <CounterIncrement value={value.incrementValue} onIncrement={increment} />
      <CounterDecrement value={value.decrementValue} onDecrement={decrement} />
    </div>
  );
};
