import React, { useState } from 'react'

export default function StateCount() {
  const [count, setCount] = useState(0);
  function handleAdd() {
    setCount(count + 1);
  }
  return (
    <button onClick={handleAdd}>你点击了{count}次</button>
  )
}
