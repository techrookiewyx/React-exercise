import { useState } from "react"
import './8-example-logs.css'
function Counter({showB}) {
  const [count,setCount] = useState(0);
  const [hover, setHover] = useState(false);
  let className = 'count';
  if (hover) { 
    className += ' hover';
  }
  if (showB) { 
    className += ' fancy';
  }
  return (
    <div 
      className={className}
      onPointerEnter={() => { setHover(true) }}
      onPointerLeave={() => { setHover(false)}}
    >
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>加一</button>
    </div>
  )
}
export default function StateTreeNotice() {
  const [showB, setShowB] = useState(false);
  if (showB) {
    return (
      <div style={{overflow:'hidden'}}>
        <h1>对 React 来说重要的是组件在 UI 树中的位置</h1>
        <Counter showB={true} />
        <label style={{clear:'left',display:'block'}}>
          <input
            type='checkbox'
            checked={showB}
            onChange={e=>{setShowB(e.target.checked)}}
          />
          {" "} 好看的样式
        </label>
      </div>
    )
  } else { 
    return (
      <div style={{overflow:'hidden'}}>
      <h1>对 React 来说重要的是组件在 UI 树中的位置</h1>
      <Counter showB={false} />
      <label style={{clear:'left',display:'block'}}>
        <input
          type='checkbox'
          checked={showB}
          onChange={e=>{setShowB(e.target.checked)}}
        />
        {" "} 好看的样式
      </label>
    </div>
    )
  }
}
