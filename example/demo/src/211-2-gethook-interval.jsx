import { useCounter } from "./211-2-hook-count";

export default function DrawInterval() { 
  const count = useCounter(1000);
  return (
     <h1>Seconds passed: {count}</h1>
  )
}