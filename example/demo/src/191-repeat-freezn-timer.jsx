import { useEffect, useState } from "react";
import { useEffectEvent } from 'react';
export default function RepeatFreezeTimer() { 
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(1);
  const updateCount = useEffectEvent(() => { 
    setCount(c => c + add);
  })
  useEffect(()=>{
    const id = setInterval(() => {
      updateCount();
    }, 1000);
    return () => {clearInterval(id)}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
      <h1>
        Counter: {count}
        {" "}
        <button onClick={()=>{setCount(0)}}>Reset</button>  
      </h1>
      <hr />
      <div>
        Every second, increment by:{" "}
        <button disabled={add===0} onClick={()=>{setAdd(c=>c-1)}}>-</button>
        <b>{add}</b>
        <button onClick={()=>{setAdd(c=>c+1)}}>+</button>
      </div>
    </>
  )
}