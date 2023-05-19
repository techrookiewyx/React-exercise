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
export default function StateResetSwitch() {
  const [showB, setShowB] = useState(false);
  return (
    <div style={{overflow:'hidden'}}>
      <h1>相同位置的不同组件会使state重置</h1>
      {showB ?
        <p>待会见！</p> 
        :
        <Counter />
      }
      <label style={{clear:'left',display:'block'}}>
        <input
          type='checkbox'
          checked={showB}
          onChange={e => {setShowB(e.target.checked)}}
        />
        {" "} 休息一下
      </label>
    </div>
  )
}
