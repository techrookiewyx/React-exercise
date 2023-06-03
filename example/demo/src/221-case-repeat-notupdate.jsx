import { useState } from "react";
import { useTimeTTO } from "./221-hook-useTime";
import { Clock } from "./221-Clock";
export default function RepeatNotUpdate(){
  const [color,setColor] = useState('lightcoral');
  const time = useTimeTTO();
  return (
    <div>
      <p>Pick a color:{' '}
        <select
          value={color}
          onChange={e => {setColor(e.target.value)}}
        >
           <option value="lightcoral">lightcoral</option>
          <option value="midnightblue">midnightblue</option>
          <option value="rebeccapurple">rebeccapurple</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()} />
    </div>
  )
}