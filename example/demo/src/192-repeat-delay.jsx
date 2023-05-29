import { useEffect, useState } from "react";

export default function RepeatDelay() { 
  const [add,setAdd] = useState(1);
  const [count, setCount] = useState(0)
  const [delay, setDelay] = useState(100);
  useEffect(()=>{
    const id =setInterval(() => {
        setCount(c=>c+add)
    }, delay);
    return ()=> clearInterval(id)
  }, [delay, add])
  
  return (
    <>
      <h1>Counter: {count}{" "}<button onClick={() => { setCount(0) }}>Reset</button></h1>
      <hr/>
      <div>Increment by:{" "}
      <button disabled={add===0} onClick={()=>{setAdd(c=>c-1)}}>-</button>
        <b>{add}</b>
        <button onClick={()=>{setAdd(c=>c+1)}}>+</button>
      </div>
      <div>Increment delay::{" "}
      <button disabled={delay===100} onClick={()=>{setDelay(c=>c-100)}}>–100 ms</button>
        <b>{delay} ms</b>
        <button onClick={()=>{setDelay(c=>c+100)}}>+100 ms</button>
      </div>
    </>
  )
}