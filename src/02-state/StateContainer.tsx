import { useState, type JSX } from 'react';

import { ChildComponent } from './ChildComponent';

import { getRandomColor } from '../utils';

export const StateContainer = (): JSX.Element => {
  const [value, setValue] = useState(0);

  console.log(`StateContainer: ${value}`);

  const bgColor = getRandomColor();

  return (
    <div className="parent" style={{ backgroundColor: bgColor }}>
      <p>
        <button onClick={() => setValue((prevValue) => prevValue + 1)}>StateContainer: {value}</button>
      </p>
      <ChildComponent />
    </div>
  );
};
