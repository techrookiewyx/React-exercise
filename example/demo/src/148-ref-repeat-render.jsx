import { useState } from "react";

export default function Toggle() {
  const [isOn,setIsOn] = useState(false);

  return (
    <button onClick={() => {
      setIsOn(!isOn)
    }}>
      {isOn ? '开' : '关'}
    </button>
  );
}