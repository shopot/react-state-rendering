import { makeAutoObservable } from 'mobx';

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

export const globalCounterStore = new GlobalCounterStore();
