import { useState } from 'react';

export default function UpdateStateRep() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => { 
        setNumber(number+5);
        setNumber(n => n + 1);
      }}>
      增加数字 </button>
    </div>
  );
}
