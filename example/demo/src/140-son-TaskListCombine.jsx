import { useContext,useState } from "react";
import { TasksDispatchContext,TasksContext } from "./140-context"; 

function Task({ task }) { 
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useContext(TasksDispatchContext);
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
export default function TaskListCombine() { 
  const tasks = useContext(TasksContext);
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