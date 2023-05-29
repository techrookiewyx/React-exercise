import { useEffect, useState } from "react";

export default function UpdateTimer() { 
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(1);
  useEffect(()=>{
    const id = setInterval(() => {
       setCount(c=>c+add)
    }, 1000);
    return () => {clearInterval(id)}
  },[add])
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