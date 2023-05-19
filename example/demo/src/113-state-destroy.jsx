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
export default function StateDestroy() {
  const [showB, setShowB] = useState(true);
  return (
    <div style={{overflow:'hidden'}}>
      <h1>当一个组件从树中被移除，其state会被销毁</h1>
      <Counter/>
      {showB && <Counter />}
      <label style={{clear:'left',display:'block'}}>
        <input
          type='checkbox'
          checked={showB}
          onChange={e => {setShowB(e.target.checked)}}
        />
        {" "} 渲染第二个计数器
      </label>
    </div>
  )
}
