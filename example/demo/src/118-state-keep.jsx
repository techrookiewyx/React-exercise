import { useState } from "react"
import './8-example-logs.css'
function Counter({person}) {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);
  let className = 'count';
  if (hover) {
    className += ' hover';
  }
  return (
    <div
      className={className}
      onPointerEnter={() => { setHover(true)}}
      onPointerLeave={() => { setHover(false)}}
    >
      <h2>{person} 的分数：{count}</h2>
      <button onClick={()=>{setCount(count+1)}}>加一</button>
    </div>
  )
}
export default function StateKeepNohope() {
  const [showB, setShowB] = useState(true);
  return (
    <div style={{ overflow: 'hidden' }}>
      <h1>state保留-不希望的情况</h1>
      {showB?
        <Counter person="Taylor" />
       :
        <Counter person="Sarah" />
      }
      <button
        onClick={()=>{setShowB(!showB)}}
        style={{ clear: 'left', display: 'block' }}
      >
        下一位玩家
      </button>
    </div>
  )
}
