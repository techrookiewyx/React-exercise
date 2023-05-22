import { useState } from "react";

export default function AddTaskT({onAddTask}){ 
  const [text, setText] = useState('');
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
        onAddTask(text);
      }}>Add</button>
    </>
  )
}