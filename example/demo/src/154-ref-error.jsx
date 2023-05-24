import React, { useRef } from 'react'

function MyIpt(props) { 
  return <input {...props} />
}

export default function GetOtherUnitDomErr () {
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
