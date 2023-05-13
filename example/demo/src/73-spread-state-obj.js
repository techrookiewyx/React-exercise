import { useState } from "react";


export default function SpreadStateObj(){
  const [person , setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });
  function hanldeFitstChange(e){
    setPerson({
      ...person,
      firstName: e.target.value
    });
  }
  function hanldeLastChange(e){
    setPerson({
      ...person,
      lastName: e.target.value
    });
  }
  function hanldeEmailChange(e){
    setPerson({
      ...person,
      email: e.target.value
    });
  }
  return (
    <div>
      <label>
        First name:
        <input  
          value={person.firstName}
          onChange={hanldeFitstChange}
        />
      </label>
      <label>
        Last name;
        <input
           value={person.lastName}
           onChange={hanldeLastChange}        
        />
      </label>
      <label>
        Email:
        <input
           value={person.email}
           onChange={hanldeEmailChange}
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