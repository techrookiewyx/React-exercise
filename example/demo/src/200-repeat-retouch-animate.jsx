import { useEffect, useRef, useState } from "react";
import { FadeInAnimation } from "./200-animation";

function Welcome({ duration }) {
  const ref = useRef(null);
  useEffect(() => { 
    const animation = new FadeInAnimation(ref.current);
    animation.start(duration);
    return () => animation.stop();
  },[duration])
  return (
    <h1
      ref={ref}
      style={{
        opacity: 0,
        color: 'white',
        padding: 50,
        textAlign: 'center',
        fontSize: 50,
        backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
      }}
    >
       Welcome
    </h1>
  )
}
export default function RepeatAnimation() { 
  const [show, setShow] = useState(false);
  const [duration, setDuration] = useState(1000);
  return (
    <>
      <label style={{display:'block',marginBottom:20}}>
        <input
          type='range'
          min='100'
          max='3000'
          value={duration}
          onChange={e=>setDuration(e.target.value)}
        />
        <br />
        Fade in duration: {duration} ms
      </label>
      <button style={{
        display: 'block', marginBottom: 20
      }}
        onClick={() => {setShow(!show)}}
      >
        {show? 'Remove':'Show'}
      </button>
      <hr />
      {show && <Welcome duration={duration} />}
    </>
  )
}