import { useState } from "react";

export function useFromIpt(chushi){ 
  const [value, setValue] = useState(chushi);
  function handleChange(e){
    setValue(e.target.value);
  }
  const obj = {
    value:value,
    onChange:handleChange
  }
  return obj
}