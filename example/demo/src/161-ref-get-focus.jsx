import { useRef } from "react";


export default function RefGetFocus() {
  const refIpt = useRef(null);
  return (
    <>
      <button onClick={() => { refIpt.current.focus()}}>搜索</button>
      <br/>
      <br/>
      <input
        type='text'
        ref={refIpt}
        placeholder="找什么呢？"
      />
    </>
  )
}
