import { createContext, useContext, useReducer } from "react";

export const TasksContextT = createContext(null);
export const TasksDispatchContextT = createContext(null); 

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <div>
    <TasksContextT.Provider value={tasks}>
      <TasksDispatchContextT.Provider value={dispatch}>
          {children}
      </TasksDispatchContextT.Provider>
    </TasksContextT.Provider>
  </div>
  )
}
export function useTasks() { 
  return useContext(TasksContextT)
}
export function useTasksDispatch() {
  return useContext(TasksDispatchContextT)
}
const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

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