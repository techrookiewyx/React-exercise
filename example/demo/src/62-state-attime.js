import React, { useState } from 'react'

export default function StateAtTime() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={()=>{
        setNumber(number+5);
        alert(number);
      }}>+5</button>
    </div>
  )
}
