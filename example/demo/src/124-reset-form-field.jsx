import { useState } from "react";

const initialContacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

function List({ list, onSelect, selectId }) {
  return (
    <ul style={{ listStyleType: 'none', display: 'flex', padding:0}}>
      {list.map(ele =>
        <li key={ele.id}>
          <button onClick={() => { onSelect(ele.id) }}>
            {ele.id === selectId ?
              <b>{ele.name}</b> :
               ele.name
            }
          </button>
        </li>
      )}
    </ul>
  )
}

function EdlitForm({ people, onSave}) { 
  const [name, setName] = useState(people.name);
  const [email, setEmail] = useState(people.email);
  return (
    <div>
      <label style={{display:'block'}}>
        名称：{" "}
        <input
          type="text"
          value={name}
          onChange={e=>setName(e.target.value)}
        />
      </label>
      <label style={{display:'block'}}>
        邮箱：{" "}
        <input
          type="email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />
      </label>
      <button onClick={() => {
        onSave({
          id: people.id,
          name: name,
          email:email
        })
      }}>保存
      </button>
      <button
        onClick={() => { 
          setName(people.name);
          setEmail(people.email);
        }}
      >重置</button>
    </div>
  )
}
export default function ResetFormField() {
  const [peopleList, setPeopleList] = useState(initialContacts);
  const [selectId, setSelectId] = useState(0);
  const people = peopleList.find(ele => ele.id === selectId);
  function handleSelect(id) { 
    setSelectId(id);
  }
  function handleSave(obj) { 
    setPeopleList(peopleList.map(ele => { 
      if (ele.id === obj.id) {
        return obj
      } else { 
         return ele
      }
    }))
  }
  return (
    <div>
      <List
        list={peopleList}
        onSelect={handleSelect}
        selectId={selectId}
      />
      <hr />
      <EdlitForm
        key={selectId}
        people={people}
        onSave={handleSave}
      />
    </div>
  )
}
