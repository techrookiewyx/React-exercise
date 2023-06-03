import { useEffect, useState } from "react";
import React from "react";
function Count() { 
  const [count, setCount] = useState(0);
  useEffect(() => { 
    function onTick(){
      setCount(c=>c+1)
    }
    const id = setInterval(onTick, 1000);
    return () => clearInterval(id);
  },[])
  return <h1>{count}</h1>
}

export default function RepTwiceTrigger() {
  const [show, setShow] = useState(false);
  return (
    <React.StrictMode>
      <button onClick={() => { setShow(!show) }}>{show ? 'Hide counter' : 'Show counter'}</button>
      <br />
      <hr/>
      {show &&  <Count />}
    </React.StrictMode>
  )
}