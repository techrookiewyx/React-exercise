import { useState } from "react";
import { useInterval } from "./211-2-useInterval";

export function useCounter(delay) {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(c => c + 1);
  }, delay)
  return count;
}