import React, { useState } from 'react'

export default function StateFeature() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={()=>{
        setNumber(number+1);
        setNumber(number+1);
        setNumber(number+1);
      }}>+3</button>
    </div>
  )
}
