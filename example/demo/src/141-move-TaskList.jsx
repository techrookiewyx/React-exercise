import { useState } from "react";
import { useTasksDispatch,useTasks } from "./141-context-reducer-move";
function Task({ task }) { 
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useTasksDispatch();
  return (
    <>
      <input
        type='checkbox'
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'change',
            task: {
              ...task,
              done: e.target.checked
            }
          })
        }}
      />
      {" "}
      {isEdit ?
        <input
          type="text"
          value={task.text}
          onChange={e => { 
            dispatch({
              type: 'change',
              task: {
                ...task,
                text: e.target.value
              }
            })
          }}
        />
        : task.text
      }{" "} 
      {isEdit ? <button onClick={()=>setIsEdit(false)}>Save</button>
        : <button onClick={()=>setIsEdit(true)}>Edit</button>
      }
      {" "}
      <button onClick={() => { 
        dispatch({
          type: 'del',
          delId: task.id
        })
      }}>Delete</button>
    </>
  )
}
export default function TaskListCombineT() { 
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map(ele =>
        <li key={ele.id}>
          <Task task={ele} />
        </li>
      )}
    </ul>
  )
}