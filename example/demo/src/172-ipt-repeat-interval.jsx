import { useEffect, useRef } from "react";


export function MyIptRepeatCase({value,onChange,show}){
  const refIpt = useRef(null);
  useEffect(() => { 
    if (show) { 
      refIpt.current.focus();
    }
  },[show])
  
  return <input ref={refIpt} value={value} onChange={onChange} />
}