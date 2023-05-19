import { useState } from "react"
import './8-example-logs.css'
function Counter() {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);
  let className = 'count';
  if (hover) {
    className += ' hover';
  }
  return (
    <div
      className={className}
      onPointerEnter={()=>setHover(true)}
      onPointerLeave={()=>setHover(false)}
    >
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>加一</button>
    </div>
   )
}
export default function StateTree() {
  const counter = <Counter/>
  return (
    <div>
      <h1>state与树中的某个位置关联</h1>
      { counter }
      { counter }
    </div>
  )
}
