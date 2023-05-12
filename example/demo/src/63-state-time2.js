import React, { useState } from 'react'

export default function StateTimetwo() { 
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setTimeout(() => { 
          alert(number);
        },2000)
      }}>
        +5
      </button>
    </div>
    )
}