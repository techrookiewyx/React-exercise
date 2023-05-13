import { useState } from "react";

export default function UpdateFunciton() { 
  const [complete, setComplete] = useState(0);
  const [wait, setWait] = useState(0);
  function handleClick() {
    setWait(w => w + 1);
    setTimeout(() => { 
      setWait(w => w - 1);
      setComplete(cp => cp + 1);
    },3000)
  }
  return (
    <div>
      <h3>等待： {wait}</h3>
      <h3>完成： {complete}</h3>
      <button onClick={handleClick}>够买</button>
    </div>
  )
}