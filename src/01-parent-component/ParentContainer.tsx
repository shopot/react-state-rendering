import { useState, type JSX } from 'react';
import { ChildComponent } from './ChildComponent';
import { getRandomColor } from '../utils';

export const ParentContainer = (): JSX.Element => {
  const [value, setValue] = useState(0);

  console.log(`ParentContainer: ${value}`);

  const bgColor = getRandomColor();

  const handleChangeValue = () => setValue((prevValue) => prevValue + 1);

  return (
    <div className="parent" style={{ backgroundColor: bgColor }}>
      <p>
        <button onClick={handleChangeValue}>ParentContainer: {value}</button>
      </p>
      <ChildComponent />
    </div>
  );
};
