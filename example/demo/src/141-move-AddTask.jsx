import { useState } from "react";
import { useTasksDispatch } from "./141-context-reducer-move";

let nextId = 3;

export default function AddTaskCombineT() { 
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
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