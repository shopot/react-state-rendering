import { useState } from 'react';

export const useCustomHook = () => {
  const [value, setValue] = useState(0);

  const setState = (newValue: number) => {
    setValue(newValue);
  };

  return {
    state: value,
    setState,
  };
};
