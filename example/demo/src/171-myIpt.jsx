import { useEffect, useRef } from "react";


export function MyIpt({value,onChange}){
  const refIpt = useRef(null);
  useEffect(() => { 
    refIpt.current.focus();
  },[])
  
  return <input ref={refIpt} value={value} onChange={onChange} />
}