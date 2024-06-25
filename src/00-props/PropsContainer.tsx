import { useState, type JSX } from 'react';

import { ChildComponent1 } from './ChildComponent1';
import { ChildComponent2 } from './ChildComponent2';

import { getRandomColor } from '../utils';

export const PropsContainer = (): JSX.Element => {
  const [value, setValue] = useState(0);

  const bgColor = getRandomColor();

  return (
    <div className="parent" style={{ backgroundColor: bgColor }}>
      <button onClick={() => setValue((prevValue) => prevValue + 1)}>PropsContainer: {value}</button>

      <ChildComponent1 />
      <ChildComponent2 counter={value} />
    </div>
  );
};
