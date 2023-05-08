import React from 'react'
import { useState } from 'react'

function MyButton() { 
  const [count, setCount] = useState(0);
  function clickBtn(){ 
    setCount(count + 1);
  }
  return (
    <button onClick={clickBtn}>
      点击{ count }次
    </button>
  )
}

export default function MyButtonTen(){
  return (
    <>
    <MyButton/> <br />
    <MyButton/>
    </>
  )
}

