import React, { useState } from 'react'

export default function FormState() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  function handleFirstChange(e){
    setFirstName(e.target.value);
  }
  function handleLastChange(e) {
    setLastName(e.target.value);
  }
  function handleRest(){
    setFirstName("");
    setLastName("");
  }
  return (
    <form onSubmit={e=>e.preventDefault()}>
      <input
        placeholder='First name'
        onChange={handleFirstChange}
        value={firstName}
      />
      <input
        placeholder='Last name'
        onChange={handleLastChange}
        value={lastName}
      />
      <h1>H1, {firstName} {lastName}</h1>
      <button onClick={handleRest}>
        Reset
      </button>
    </form>
  )
}
