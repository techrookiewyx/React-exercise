import { useMemo, useState } from "react"
import { initialTodos,createTodo } from "./173-data-logic";

export default function UseMemoTodoList() {
  const [show, setShow] = useState(false);
  const [list, setList] = useState(initialTodos);
  const [text, setText] = useState('');
  const visible = useMemo(
    () => getVisibleTodos(list, show),
    [list,show]
  )
  function handleClick() { 
     setText('');
    setList([...list, createTodo(text)]);
   }
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
      <input
        type='text'
        value={text}
        onChange={e=>setText(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      <ul>
        {visible.map(ele =>
          <li key={ele.id}>
            {ele.completed ? <s>{ele.text}</s>: ele.text }
          </li>
        )}
      </ul>
    </div>
  )
}

function getVisibleTodos(todos, show) {
  console.log(`getVisibleTodos() 被调用 ${++calls} 次`);
  const aictiveList = todos.filter(ele => !ele.completed)
  const visible = show ? aictiveList : todos;
  return visible
}
let calls = 0;
