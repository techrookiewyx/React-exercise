import  { useRef } from 'react'

export default function RefUse() {
  const ref = useRef(0);
  function handleClick() {
    ref.current=ref.current+1;
    alert(`你点击了 ${ref.current} 次！`)
  }
  return (
    <button onClick={handleClick}>点我</button>
  )
}
