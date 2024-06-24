import { type JSX } from 'react';
import { getRandomColor } from '../utils';

export const SecondChildComponent = (): JSX.Element => {
  console.log('SecondChildComponent render');

  const bgColor = getRandomColor();

  return (
    <p className="children" style={{ backgroundColor: bgColor }}>
      SecondChildComponent
    </p>
  );
};
