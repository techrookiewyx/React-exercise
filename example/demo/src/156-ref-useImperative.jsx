import { forwardRef, useImperativeHandle, useRef } from "react"

const MyIpt = forwardRef((props,ref) => {
  const refRel = useRef(null);
  useImperativeHandle(ref, () => ({
    focus() { 
      refRel.current.focus();
    }
  }))
  return <input {...props} ref={refRel} />
})

export default function RefHandleExpose() {
  const refIpt = useRef(null);
  function handleClick() { 
    refIpt.current.focus();
  }
  return (
    <>
      <MyIpt ref={refIpt} />
      <button onClick={handleClick}>聚焦输入框</button>
    </>
  )
}
