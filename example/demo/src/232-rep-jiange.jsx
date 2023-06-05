import { useEffect } from "react";
import { useCount } from "./210-useCount";
export default function RepJiange() { 
  const count = useCount();
  useEffect(() => {
    const id = setInterval(()=>{ 
      const randomColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.2)`;
      document.body.style.backgroundColor = randomColor;
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, []);
   return <h1>Seconds passed: {count}</h1>;
} 