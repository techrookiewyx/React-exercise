import { useRef } from "react"


export default function RefGetDom() {
  const refInput = useRef(null);

  function handleClick() { 
    refInput.current.focus();
  }
  return (
    <div>
      <input ref={refInput} />
      <button onClick={handleClick}>聚焦输入框</button>
    </div>
  )
}
