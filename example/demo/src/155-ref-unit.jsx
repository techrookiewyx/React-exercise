import React, { forwardRef, useRef } from 'react'

const MyIpt= forwardRef((props,ref)=>{ 
  return <input {...props} ref={ref} />
})

export default function GetOtherUnitDom () {
  const refIpt = useRef(null);
  function handleClick() {
    refIpt.current.focus();
  }
  return (
    <>
     <MyIpt ref={refIpt}/>
     <button onClick={handleClick}>聚焦输入框</button>
    </>
  )
}
