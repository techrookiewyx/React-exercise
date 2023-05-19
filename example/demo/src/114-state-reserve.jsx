import { useState } from "react"
import './8-example-logs.css'
function Counter({showB}) {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);
  let className = 'count';
  if (hover) {
    className += ' hover';
  }
  if (showB) { 
    className += ' fancy'
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
export default function StateReserve() {
  const [showB, setShowB] = useState(false);
  return (
    <div style={{overflow:'hidden'}}>
      <h1>state保留</h1>
      {showB ?
        <Counter showB={true} />
        :
        <Counter showB={false} />
      }
      <label style={{clear:'left',display:'block'}}>
        <input
          type='checkbox'
          checked={showB}
          onChange={e => {setShowB(e.target.checked)}}
        />
        {" "} 使用好看的样式
      </label>
    </div>
  )
}
