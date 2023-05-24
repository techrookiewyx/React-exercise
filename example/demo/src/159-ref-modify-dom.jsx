import React, { useRef, useState } from 'react'

export default function RefModifDom() {
  const [show, setShow] = useState(true);
  const delRef = useRef(null);

  return (
    <div>
      <button onClick={() => { setShow(!show) }}>通过 setState 切换</button>
      <br />
      <button onClick={() => {delRef.current.remove()}}>从 DOM 中删除</button>
      {show && <p ref={delRef}>Hello world</p>}
    </div>
  )
}
