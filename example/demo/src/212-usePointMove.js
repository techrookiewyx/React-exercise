import { useEffect, useState } from "react";
export function usePointMove() { 
  const [position, setPosition] = useState({ x: 0, y: 0 });
  function handleMove(e) { 
      setPosition({ x: e.clientX, y: e.clientY });
  }
  useEffect(() => {
    window.addEventListener('pointermove', handleMove);
    return ()=> window.removeEventListener('pointermove', handleMove);
  },[])
  return position
}