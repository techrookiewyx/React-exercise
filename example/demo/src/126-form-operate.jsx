import { useState } from "react";
import AddTask from "./126-addTask";
import List from "./126-task-list";
const initialTasks = [
  {id: 0, text: '参观卡夫卡博物馆', done: true},
  {id: 1, text: '看木偶戏', done: false},
  {id: 2, text: '打卡列侬墙', done: false},
];
let nextId = 3;


export default function FormOperate() {
  const [tasks, setTasks] = useState(initialTasks);
  function handleChangeTask(obj) { 
    setTasks(tasks.map(ele=>{
      if (ele.id === obj.id) { 
        return obj
      }else{
        return ele
      }
    }))
  }
  function handleDelTask(id) {
    setTasks(tasks.filter(ele=>ele.id!==id))
  }
  function handleAddTask(addText) { 
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: addText,
        done:false
      },
    ])
  }
  return (
    <div>
      <h1>布拉格的行程安排</h1>
      <AddTask onAddTask={handleAddTask} />
      <List
        onDelTast={handleDelTask}
        onChangeTask={handleChangeTask}
        tasks={tasks}
      />
    </div>
  )
}
