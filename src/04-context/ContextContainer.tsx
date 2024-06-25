import { useState, type JSX } from 'react';

import { ChildComponent } from './ChildComponent';
import { CounterContext } from './CounterContext';

import { getRandomColor } from '../utils';

export const ContextContainer = (): JSX.Element => {
  const [value, setValue] = useState(0);

  console.log(`ContextContainer: ${value}`);

  const bgColor = getRandomColor();

  return (
    <div className="parent" style={{ backgroundColor: bgColor }}>
      <p>
        <button onClick={() => setValue((prevValue) => prevValue + 1)}>ContextContainer: {value}</button>
      </p>
      <CounterContext.Provider value={value}>
        <ChildComponent />
      </CounterContext.Provider>
    </div>
  );
};
