import { useState } from "react"
import { initialTodos,createTodo } from "./173-data-logic";

export default function NoEffectTodoList() {
  const [show, setShow] = useState(false);
  const [list, setList] = useState(initialTodos);
  const aictiveList = list.filter(ele => !ele.completed)
  const visible = show ? aictiveList : list;
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={show}
          onChange={e=>{setShow(e.target.checked)}}
        />
        {" "}
         Show only active todos
      </label>
      <br/>
      <AddTodo onAdd={(e) => { setList([...list, e]) }} />
      <ul>
        {visible.map(ele =>
          <li key={ele.id}>
            {ele.completed ? <s>{ele.text}</s>: ele.text }
          </li>
        )}
      </ul>
      <p>{aictiveList.length} todos left</p>
    </div>
  )
}
function AddTodo({ onAdd }) { 
  const [text, setText] = useState('');

  function handleClick() { 
     setText('');
    onAdd(createTodo(text));
  }
  return (
    <>
      <input
        type='text'
        value={text}
        onChange={e=>setText(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </>
  )
}
