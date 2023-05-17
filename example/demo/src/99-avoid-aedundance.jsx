import { useState } from "react"

export default function AvoidRedundance() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  function handleFirstName(e) {
    setFirstName(e.target.value);  
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  const fullName = firstName + ' ' + lastName;
  return (
    <div>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstName}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastName}
        />
      </label>
      <p>Your ticket will be issued to: <b>{fullName}</b></p>
    </div>
  )
}
