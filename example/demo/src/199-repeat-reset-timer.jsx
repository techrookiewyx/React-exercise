import { useEffect, useState } from "react";

export default function RepeatResetGap() {
  const [count, setCount] = useState(0);
  useEffect(() => { 
    console.log('✅ Creating an interval');
    const id = setInterval(() => {
      console.log('⏰ Interval tick');
      setCount(c => c + 1);
    }, 1000);
    return () => { 
      console.log('❌ Clearing an interval');
      clearInterval(id);
    }
  },[])
  return (
    <h1>Counter: {count}</h1>
  )
}