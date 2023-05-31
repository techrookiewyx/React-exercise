import { useCount } from "./210-useCount"

export default function HookCount() { 
  const count = useCount();
  return <h1>Seconds passed: {count}</h1>
}