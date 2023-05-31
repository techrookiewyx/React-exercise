import { useEffect, useState } from "react";

export function useCountDelay(delay) { 
  const [count, setCount] = useState(0);
  useEffect(()=>{
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, delay);
    return () => clearInterval(id);
  }, [delay])
  return count;
}