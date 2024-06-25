import type { JSX } from 'react';

import { getRandomColor } from '../../utils';

type CounterDecrementProps = {
  value: number;
  onIncrement: () => void;
};

export const CounterIncrement = ({ value, onIncrement }: CounterDecrementProps): JSX.Element => {
  console.log(`CounterIncrement: ${value}`);

  const bgColor = getRandomColor();

  return (
    <p className="children" style={{ backgroundColor: bgColor }}>
      <button onClick={onIncrement}>CounterDecrement: {value}</button>
    </p>
  );
};
