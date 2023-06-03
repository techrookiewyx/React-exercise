import { useTimeTTO } from "./221-hook-useTime";
import './8-example-logs.css'
function TrueClock({ time }) { 
  let hours = time.getHours();
  let style;
  if (hours >= 17 && hours <= 24) { 
    style = 'night223'
  } else {
    style = 'day223'
  }
  return (
    <h1 className={style}>
      {time.toLocaleTimeString()}
    </h1>
  )
}

export default function RepBrokenClock() { 
  const time = useTimeTTO();
  return (
    <TrueClock time={time} />
  )
}