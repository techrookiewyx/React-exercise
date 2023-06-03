import { useState } from "react";
import { ColorChange } from "./219-ColorChange";
export default function ColorSwitch() {
  const [count, setCount] = useState(0);
  function handleClickOut(){
    setCount(c => c + 1);
  }
  function getRandomColor() { 
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    return `rgb(${r},${g},${b})`
  }
  function handleChangeColor() {
    let bodyStyle = document.body.style;
    console.log(getRandomColor());
    bodyStyle.backgroundColor = getRandomColor();
  }
  return (
    <div
      style={{ width: '100%', height: '100%' }}
      onClick={handleClickOut}>
      <ColorChange onChangeColor={handleChangeColor} />
      <br/>
      <br/>
      <h2>页面点击次数:{count}</h2>
    </div>
  )
}