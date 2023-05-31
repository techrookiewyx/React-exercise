import { useState } from "react";
import { useCountDelay } from "./211-useCountDelay";

export default function HookCountDelay() { 
  const [delay, setDelay] = useState(1000);
  const count = useCountDelay(delay);
  return(
  <>
    <label>
      Tick duration: {delay} ms
      <br />
      <input
        type="range"
        value={delay}
        min="10"
        max="2000"
        onChange={e => {setDelay(e.target.value)}}
      />
    </label>
    <hr />
    <h1>Ticks: {count}</h1>
  </>
  )
}