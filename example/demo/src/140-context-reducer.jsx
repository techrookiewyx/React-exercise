import { useReducer } from "react";
import { TasksContext, TasksDispatchContext } from "./140-context";
import AddTaskCombine from "./140-son-AddTaskCombine";
import TaskListCombine from "./140-son-TaskListCombine";
const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

export default function TaskAppRedCon() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <div>
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          <h1>Day off in Kyoto</h1>
          <AddTaskCombine />
          <TaskListCombine />
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    </div>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) { 
    case 'add': { 
      return [
        ...tasks,
        {
          id: action.id,
          text: action.info,
          done: false
        }
      ]
    }
    case 'change':{
      return tasks.map(ele=>{
        if (ele.id === action.task.id) {
          return action.task
        } else { 
          return ele
        }
      })
    }
    case 'del': {
      return tasks.filter(ele=>ele.id!==action.delId)
    }
    default: { 
      throw Error('Unknown action: ' + action.type);
    }
  }
}