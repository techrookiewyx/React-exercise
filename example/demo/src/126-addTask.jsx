import { useState } from "react";

export default function AddTask({ onAddTask }) { 
  const [addText, setAddText] = useState('');
  return (
    <div>
      <input
        type="text"
        placeholder="添加任务"
        value={addText}
        onChange={e => setAddText(e.target.value)}
      />
      {" "}
      <button onClick={() => {onAddTask(addText)}}>添加</button>
    </div>
  )
}