import { useState, type JSX } from 'react';

import { getRandomColor } from '../utils';

export const ChildComponent = (): JSX.Element => {
  const [childValue, setChildValue] = useState(0);

  console.log(`ChildComponent: ${childValue}`);

  const bgColor = getRandomColor();

  return (
    <p className="children" style={{ backgroundColor: bgColor }}>
      <button onClick={() => setChildValue(childValue + 1)}>ChildComponent: {childValue} </button>
    </p>
  );
};
