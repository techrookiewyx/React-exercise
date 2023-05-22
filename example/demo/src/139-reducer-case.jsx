import { useReducer } from "react";
import AddTaskT from "./139-addTask";
import TaskList from "./139-TaskList";
let nextId = 3;
const chuShi = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];
export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, chuShi);
  function handleAdd(text) { 
    dispatch({
      type: 'add',
      info: text
    })
  }
  function handleChange(obj) { 
    dispatch({
      type: 'change',
      task: obj
    })
  }
  function handleDel(id) { 
    dispatch({
      type: 'del',
      taskId: id
    })
  }
  return (
    <div>
      <h1>Day off in Kyoto</h1>
      <AddTaskT
        onAddTask={handleAdd}
      />
      <TaskList
        onChangeTask={handleChange}
        tasks={tasks}
        onDelTask={handleDel}
      />
    </div>
  )
}
function tasksReducer(tasks, action) { 
  switch (action.type) { 
    case 'add': { 
      return [
        ...tasks,{
          id: nextId++,
          text: action.info,
          done: false
        }
      ]
    }
    case 'change': { 
      return tasks.map(ele => { 
        if (ele.id === action.task.id) {
          return action.task
        } else { 
          return ele
        }
      })
    }
    case 'del': { 
      return tasks.filter(ele=>ele.id!==action.taskId)
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}