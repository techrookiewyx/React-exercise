import  { useRef, useState } from 'react'

export default function RefStopwatch() {
  const [startTime,setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const ref = useRef(null);
  function handleStart() { 
    setStartTime(Date.now());
    setNow(Date.now());
    ref.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }
  function handleStop() { 
    clearInterval(ref.current);
  }
  let passed = 0;
  if (startTime != null && now != null) { 
    passed = (now - startTime) / 1000;
  }
  return (
    <div>
      <h1>时间过去了:{passed.toFixed(3)}</h1>
      <button onClick={handleStart}>开始</button>
      <button onClick={handleStop}>停止</button>
    </div>
  )
}
