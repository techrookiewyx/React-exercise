import { useRef, useState } from "react";
import './8-example-logs.css'
import { useFadeIn } from "./209-useFadeIn";
function Welcome() { 
  const ref = useRef(null);
  useFadeIn(ref, 1000);
  return (
    <div
      ref={ref}
      className="welcome"
    >
      Welcome
    </div>
  )
}
export default function HookFadeIn() { 
  const [show, setShow] = useState(false);
  return (
    <>
      <button style={{marginBottom:20}} onClick={() => { setShow(!show) }}>{show ? 'Remove' : 'Show'}</button>
      <hr />
      {show && <Welcome/>}
    </>
  )
}