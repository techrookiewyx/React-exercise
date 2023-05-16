import { useState } from "react";

export default function ImitsateCase() {
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState('Jacobs');
  const [isEdit, setIsEdit] = useState(false);
  return (
    <form onSubmit={e => {
      e.preventDefault();
      setIsEdit(!isEdit);
    }}>
      <label>
        First name:{' '}
        {isEdit ? <input
          onChange={e => {
            setFirstName(e.target.value);
          }}
          value={firstName}
        /> :
          <b>{firstName}</b>
        }
      </label>
      <br/>
      <label>
        Last name:{' '}
        {isEdit ? <input
          onChange={e => {
            setLastName(e.target.value);
          }}
          value={lastName}
        /> :
          <b>{lastName}</b>
        }
      </label>
      <br/>
      <button type='submit'>
          {isEdit ? 'Save': 'Edit'} Profile
      </button>
      <br/>
      <p><i>Hello, {firstName} {lastName}!</i></p>
    </form>
  )
}