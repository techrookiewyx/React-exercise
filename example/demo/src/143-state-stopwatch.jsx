import React, { useState } from 'react'

export default function StateStopwatch() {
  const [startTime,setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  function handleStart() { 
    setStartTime(Date.now());
    setNow(Date.now());
    setInterval(() => {
      setNow(Date.now())
    }, 10);
  }
  let passed = 0;
  if (startTime != null && now != null) {
    passed = (now - startTime) / 1000;
  }
  return (
    <div>
      <h1>时间过去了:{passed.toFixed(3)}</h1>
      <button onClick={handleStart}>开始</button>
    </div>
  )
}
