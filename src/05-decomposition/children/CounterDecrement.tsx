import type { JSX } from 'react';
import { getRandomColor } from '../../utils';

type CounterDecrementProps = {
  value: number;
  onDecrement: () => void;
};

export const CounterDecrement = ({ value, onDecrement }: CounterDecrementProps): JSX.Element => {
  console.log(`CounterDecrement: ${value}`);

  const bgColor = getRandomColor();

  return (
    <p className="children" style={{ backgroundColor: bgColor }}>
      <button onClick={onDecrement}>CounterDecrement: {value}</button>
    </p>
  );
};
