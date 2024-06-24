import { type JSX } from 'react';
import { getRandomColor } from '../utils';

export const ChildComponent1 = (): JSX.Element => {
  console.log('ChildComponent1 render');

  const bgColor = getRandomColor();

  return (
    <h3 className="children" style={{ backgroundColor: bgColor }}>
      ChildComponent1
    </h3>
  );
};
