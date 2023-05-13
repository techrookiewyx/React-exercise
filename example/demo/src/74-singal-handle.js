import { useState } from "react";


export default function SingalHandle(){
  const [person , setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });
  function hanldeChange(e){
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }
  return (
    <div>
      <label>
        First name:
        <input
          name="firstName"  
          value={person.firstName}
          onChange={hanldeChange}
        />
      </label>
      <label>
        Last name;
        <input
          name="lastName"
           value={person.lastName}
           onChange={hanldeChange}        
        />
      </label>
      <label>
        Email:
        <input
           name="email"
           value={person.email}
           onChange={hanldeChange}
        />
      </label>
      <p>
        {person.firstName}{" "}
        {person.lastName}{" "}
        ({person.email})
      </p>
    </div>
  )
}