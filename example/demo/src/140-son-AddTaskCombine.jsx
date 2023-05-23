import { useContext,useState } from "react";
import { TasksDispatchContext } from "./140-context"; 

let nextId = 3;

export default function AddTaskCombine() { 
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);
  return (
    <>
      <input
        type='text'
        value={text}
        onChange={e=>setText(e.target.value)}
      />
      {" "}
      <button onClick={() => {
        setText('');
        dispatch({
          type: 'add',
          info: text,
          id: nextId++
        })
      }}>Add</button>
    </>
  )
}