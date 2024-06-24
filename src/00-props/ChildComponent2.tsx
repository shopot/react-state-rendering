import { type JSX } from 'react';
import { getRandomColor } from '../utils';

type ChildComponent2Props = {
  counter: number;
};

export const ChildComponent2 = ({ counter }: ChildComponent2Props): JSX.Element => {
  console.log('ChildComponent2 render');

  const bgColor = getRandomColor();

  return (
    <h3 className="children" style={{ backgroundColor: bgColor }}>
      ChildComponent2: {counter}
    </h3>
  );
};
