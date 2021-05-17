import { atom, useAtom } from "jotai";

export const counterAtom = atom(0);

export const useCounter = () => {
  const [counter, setCounter] = useAtom(counterAtom);

  const increase = () => setCounter(counter + 1);

  const decrease = () => setCounter(counter - 1);

  return { counter, increase, decrease };
};
