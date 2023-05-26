import { useState } from "react";
export function EditForm({ selectP, onSave }) {
  const [name, setName] = useState(selectP.name);
  const [email, setEmail] = useState(selectP.email);
  return (
    <div>
      <label>
        Name:{' '}
        <input
          type="text"
          value={name}
          onChange={e=>setName(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Email:{' '}
        <input
          type="email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />
      </label>
      <br/>
      <button onClick={() => { 
        onSave({
          id:selectP.id,
          name: name,
          email: email
        })
      }}>
        Save
      </button>
      {"  "}{"  "}
      <button onClick={()=>{
        setName(selectP.name);
        setEmail(selectP.email);
      }}>
        Reset
      </button>
    </div>
  )
}