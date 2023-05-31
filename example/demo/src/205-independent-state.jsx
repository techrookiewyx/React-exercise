import { useState } from "react";

export default function IndependentStateForm() { 
  const [fstName,setFstName] = useState('Jane');
  const [lstName, setLstName] = useState('Poppins');
  function handleFstIpt(e) { 
    setFstName(e.target.value);
  }
  function handleLstIpt(e) { 
    setLstName(e.target.value);
  }
  return (
    <>
      <label>
        First name:{" "}
        <input
          value={fstName}
          onChange={handleFstIpt}
        />
      </label>
      <br/>
      <label>
        Last name::{" "}
        <input
          value={lstName}
          onChange={handleLstIpt}
        />
      </label>
      <p><b>Good morning, {fstName} {lstName}.</b></p>
    </>
  )
}