import React from 'react'

export default function CkBtn() {
  function clickHandler() { 
    alert("你点我干嘛！")
  }
  return (
    <div>
      <button style={{width:100,height:100}} onClick={clickHandler}>点我试试</button>
    </div>
  )
}
