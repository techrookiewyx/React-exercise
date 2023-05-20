import { useState } from "react";
import { chuShi2,messageReducerC} from "./131-messageReducer-change";
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
          type:'send'
        })
      }}>发送到 {pep.email}</button>
    </div>
  )
}
export default function ComeTureReducer() { 
  const [message, dispatch] = useReducer(messageReducerC, chuShi2);
  const mes = message.message[message.selectedId];
  const people = contacts[message.selectedId];
  function useReducer(reducer,initState) { 
    const [state, setState] = useState(initState);
    function dispatcha(action) {
      const newState = reducer(state, action);
      setState(newState);
    }
    return [state,dispatcha]
  }
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