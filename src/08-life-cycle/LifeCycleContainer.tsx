import { useState, type JSX } from 'react';
import { ChildComponent } from './ChildComponent';

import { getRandomColor } from '../utils';

export const LifeCycleContainer = (): JSX.Element => {
  const [value, setValue] = useState(false);

  const bgColor = getRandomColor();

  return (
    <div className="parent" style={{ backgroundColor: bgColor }}>
      <button onClick={() => setValue((prevValue) => !prevValue)}>Toggle children: {String(value)}</button>

      {value === true && <ChildComponent />}
      {value === false && <p>Children is hidden.</p>}
    </div>
  );
};
