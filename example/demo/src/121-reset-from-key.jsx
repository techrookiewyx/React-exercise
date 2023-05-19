import { useState } from "react";
const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

function ContactList({contacts,onSelect}) { 
  return (
    <div>
      <ul>
      {contacts.map(ele=>
        <li key={ele.id}>
          <button
            onClick={() => {onSelect(ele)}} 
          >{ele.name}
          </button>
        </li>
      )}
      </ul>
    </div>
  )
}
function Chat({to}) {
  const [text, setText] = useState('');
  return (
    <div>
      <textarea
        value={text}
        placeholder={`跟 ${to.name} 聊一聊`}
        onChange={e => {setText(e.target.value)}}
      />
      <button>发送到 {to.email}</button>
    </div>
  )
}
export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return(
    <div>
      <h1>key更新state-表单</h1>
      <ContactList
        contacts={contacts}
        onSelect={e=>setTo(e)}
      />
      <Chat
        to={to}
        key={to.id}
      />
    </div>
  )
}
