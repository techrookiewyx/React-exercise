import React, { useState } from 'react'

export default function DataShare() {
  const [count, setCount] = useState(0);
  function handleClick() { 
    setCount(count + 1);
  }
  return (
    <div>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  )
}

function MyButton(props) {
    return (
      <button onClick={props.onClick}>点击了{props.count}次</button>
    )
}