import { useState, type JSX } from 'react';

import { getRandomColor } from '../utils';

type CounterState = {
  incrementValue: number;
  decrementValue: number;
};

export const DecompositionS01 = (): JSX.Element => {
  const [value, setValue] = useState<CounterState>({ incrementValue: 0, decrementValue: 0 });

  console.log('DecompositionS01');

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
        DecompositionS01:{' '}
        <strong>
          {value.incrementValue}, {value.decrementValue}
        </strong>
      </p>
      <p>
        <button onClick={increment}>CounterIncrement: {value.incrementValue}</button>
      </p>
      <p>
        <button onClick={decrement}>CounterDecrement: {value.decrementValue}</button>
      </p>
    </div>
  );
};
