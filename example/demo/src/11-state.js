import React, { useState } from 'react'
import './8-example-logs.css'
export default function StateEleven() {
  const [count, setCount] = useState(0);
  function addHandler() {
    setCount(count + 1);
  }
  function lessHandler() {
    setCount(count - 1);
  }
  return (
    <div className='stateele'>
      <h1>{ count }</h1>
      <button onClick={lessHandler}>-</button>
      <button onClick={addHandler}>+</button>
    </div>
  )
}
