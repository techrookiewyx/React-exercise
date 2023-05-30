import { useEffect, useState } from "react";

export default function IgnoreLinterFault(){
  const [count,setCount] = useState(0);
  const [add, setAdd] = useState(1);
  function onTick(){
    setCount(count + add);
  }
  useEffect(() => { 
    const id = setInterval(onTick, 1000);
    return ()=> clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
      <h1>Counter: {count}{' '}<button onClick={() => { setCount(0) }}>Reset</button></h1>
      <hr />
      <p>
        Every second, increment by:
        <button disabled={add === 0} onClick={() => {
          setAdd(i => i - 1);
        }}>–</button>
        <b>{add}</b>
        <button onClick={() => {
          setAdd(i => i + 1);
        }}>+</button>
      </p>
    </>
  )
}