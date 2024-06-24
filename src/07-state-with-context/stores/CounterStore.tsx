import { makeAutoObservable } from 'mobx';
import { type ReactNode, createContext, useContext } from 'react';

class GlobalCounterStore {
  incrementValue: number;
  decrementValue: number;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });

    this.incrementValue = 0;
    this.decrementValue = 0;
  }

  increment = () => {
    this.incrementValue += 1;
  };

  decrement = () => {
    this.decrementValue -= 1;
  };
}

const CounterStoreContext = createContext<GlobalCounterStore>(null!);

type CounterProviderProps = {
  children: ReactNode;
};

export const CounterStoreProvider = ({ children }: CounterProviderProps) => (
  <CounterStoreContext.Provider value={new GlobalCounterStore()}>{children}</CounterStoreContext.Provider>
);

export const useCounterStore = () => {
  const store = useContext(CounterStoreContext);

  if (!store) {
    throw new Error('useGlobalCounterStore must be used within a CounterStoreProvider');
  }

  return store;
};
