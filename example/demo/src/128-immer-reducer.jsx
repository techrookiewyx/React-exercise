import { useImmerReducer } from "use-immer";
import AddTask from "./126-addTask";
import List from "./126-task-list";
function immerTaskReducer(draft, aciton) {
  switch (aciton.type) {
    case 'added': {
      draft.push({
        id: aciton.id,
        text:aciton.text,
        done:false
      })
      break;
    }
    case 'changed':{ 
      const index = draft.findIndex(ele => ele.id === aciton.task.id);
      draft[index] = aciton.task;
      break;
    }
    case 'deleted':{ 
      return draft.filter(ele=>ele.id!==aciton.id)
    }
    default: {
      throw Error('未知 action：' + aciton.type);
    }
  }
}
const initialTasks = [
  {id: 0, text: '参观卡夫卡博物馆', done: true},
  {id: 1, text: '看木偶戏', done: false},
  {id: 2, text: '打卡列侬墙', done: false},
];
let nextId = 3;
export default function ImmerRedcuerFormOp() {
  const [tasks, dispatch] = useImmerReducer(immerTaskReducer, initialTasks);
  function handleAddTask(text) { 
    dispatch({
      type: 'added',
      text: text,
      id:nextId++
    })
  }
  function handleChangeTask(obj) { 
    dispatch({
      type: 'changed',
      task: obj
    })
  }
  function handleDelTask(id) { 
    dispatch({
      type: 'deleted',
      id: id 
    })
  }
  return (
    <div>
      <h1>布拉格的形成安排</h1>
      <AddTask onAddTask={handleAddTask} />
      <List
        onDelTast={handleDelTask}
        onChangeTask={handleChangeTask}
        tasks={tasks}
      />
    </div>
  )
}
