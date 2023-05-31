import { useEffect, useState } from "react";
import { usePointMove } from "./212-usePointMove";
function useDelayValue(value,delay) { 
  const [delayV, setDelayV] = useState(value);
  useEffect(() => {
    setTimeout(() => {
      setDelayV(value);
    }, delay);
  },[delay,value])
  return delayV
}
function Dot({ position, opacity }) {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "pink",
        borderRadius: "50%",
        opacity,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: "none",
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }}
    />
  );
}
export default function HookDelayValue() {
  const pos1 = usePointMove();
  const pos2 = useDelayValue(pos1,100);
  const pos3 = useDelayValue(pos2,200);
  const pos4 = useDelayValue(pos3,100);
  const pos5 = useDelayValue(pos4,50);
  return (
    <>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
    </>
  );
}
