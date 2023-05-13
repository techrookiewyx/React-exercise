import { useState } from 'react';

export default function UpdateState() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => { 
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>
        +3 </button>
    </div>
  );
}
