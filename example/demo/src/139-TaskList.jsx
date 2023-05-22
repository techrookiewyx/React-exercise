import { useState } from "react";

function Task({ task, onChange, onDel }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <input
        type='checkbox'
        checked={task.done}
        onChange={e => { 
          onChange({
            ...task,
            done:e.target.checked
          })
        }}
      />
      {" "}
      {isChecked ?
        <input
          value={task.text}
          type='text'
          onChange={e=>{
            onChange({
              ...task,
              text:e.target.value
            })
          }}
        />
        : task.text 
      }
      {" "}
      {isChecked ?
        <button onClick={() => setIsChecked(!isChecked)}>Save</button>
        :
        <button onClick={() => setIsChecked(!isChecked)}>Edit</button>
      }
      <button onClick={() => {onDel(task.id)}}>Delete</button>
    </>
  )
}
export default function TaskList({tasks,onChangeTask,onDelTask}){
  return (
    <ul>
      {tasks.map(ele =>
        <li key={ele.id}>
          <Task
            task={ele}
            onChange={onChangeTask}
            onDel={onDelTask}
          />
        </li>  
      )}  
    </ul>  
  )
}