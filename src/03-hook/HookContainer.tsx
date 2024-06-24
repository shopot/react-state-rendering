import { type JSX } from 'react';
import { useCustomHook } from './useCustomHook';
import { getRandomColor } from '../utils';

export const HookContainer = (): JSX.Element => {
  const { state, setState } = useCustomHook();

  console.log('HookContainer render');

  const bgColor = getRandomColor();

  return (
    <p className="parent" style={{ backgroundColor: bgColor }}>
      <button onClick={() => setState(state + 1)}>HookContainer: {state}</button>{' '}
    </p>
  );
};
