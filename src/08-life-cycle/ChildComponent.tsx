import { useEffect, useLayoutEffect, useState, type JSX } from 'react';
import { getRandomColor } from '../utils';

export const ChildComponent = (): JSX.Element => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('After first render - Component Mount');

    return () => {
      console.log('useEffect - Component Unmount');
    };
  }, []);

  useEffect(() => {
    console.log('State variable is changed');
  }, [value]);

  useLayoutEffect(() => {
    console.log('Before first render');

    return () => {
      console.log('useLayoutEffect - Component Unmount');
    };
  }, []);

  const bgColor = getRandomColor();

  return (
    <p className="children" style={{ backgroundColor: bgColor }}>
      <button onClick={() => setValue((prevValue) => prevValue + 1)}>ChildComponent: {value}</button>
    </p>
  );
};
