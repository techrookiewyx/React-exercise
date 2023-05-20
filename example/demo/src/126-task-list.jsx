import { useState } from "react";


function Task({task,onChange,onDel}){
  const [isEdit, setIsEdit] = useState(false);
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
          />{" "}
          {isEdit ?
            <input
              value={task.text}
              type="text"
              onChange={e => onChange({
                ...task,
                text:e.target.value
              })}
            />
            :
           task.text
       }
          {" "}
          {isEdit ? 
            <button onClick={() => { 
              setIsEdit(!isEdit);
            }}>保存</button>
            :
            <button onClick={() => { 
              setIsEdit(!isEdit)
            }}>编辑</button>
          }{" "}
          <button onClick={()=>onDel(task.id)}>删除</button>
     </>
   )
}
export default function List({ onDelTast, onChangeTask, tasks }) {
  return (
    <ul>
      {tasks.map(ele=>
        <li key={ele.id}>
          <Task task={ele} onChange={onChangeTask} onDel={onDelTast} />
        </li>
      )}
    </ul>
  )
}