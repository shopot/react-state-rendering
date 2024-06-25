import { type JSX } from 'react';

import { SecondChildComponent } from './SecondChildComponent';

import { getRandomColor } from '../utils';

export const ChildComponent = (): JSX.Element => {
  console.log('ChildComponent render');

  const bgColor = getRandomColor();

  return (
    <div className="children" style={{ backgroundColor: bgColor }}>
      ChildComponent
      <SecondChildComponent />
    </div>
  );
};
