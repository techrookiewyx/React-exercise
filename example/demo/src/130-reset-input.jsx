import { useReducer } from "react";
import { chuShi, messageReducer } from "./129-messageReducer";

const contacts = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
  {id: 1, name: 'Alice', email: 'alice@mail.com'},
  {id: 2, name: 'Bob', email: 'bob@mail.com'},
];

function List({ list, dispatch, selectedId }) { 
  return (
    <ul>
      {list.map(ele=>
        <li key={ele.id}>
          <button onClick={() => {
            dispatch({
              type: 'select',
              id: ele.id,
            })
          }}>
            {selectedId===ele.id?
              <b>{ele.name}</b> :
              ele.name
            }
          </button>
        </li>
      )}
    </ul>
  )
}
function Chat({ mes, pep, dispatch }) {
  return(
    <div>
      <textarea
        placeholder={`和 ${pep.name} 聊天`}
        value={mes}
        onChange={e => { 
          dispatch({
            type: 'textarea_input',
            message: e.target.value
          })
        }}
      />
      <br />
      <button onClick={() => {
        alert(`发送${mes} , 到${pep.email}`);
        dispatch({
          type:'textarea_input',
          message:''
        })
      }}>发送到 {pep.email}</button>
    </div>
  )
}
export default function ReducerChatResetInput() { 
  const [message, dispatch] = useReducer(messageReducer, chuShi);
  const mes = message.message;
  const people = contacts[message.selectedId];
  return (
    <div>
      <List
        list={contacts}
        dispatch={dispatch}
        selectedId={message.selectedId}
      />
      <Chat
        pep={people}
        mes={mes}
        key={people.id}
        dispatch={dispatch}
      />
    </div>
  )
}