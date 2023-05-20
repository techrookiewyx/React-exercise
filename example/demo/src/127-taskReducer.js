export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "deleted": {
      return tasks.filter(ele=>ele.id!==action.id)
    }
    case 'changed' :{
      return tasks.map(ele => { 
        if (ele.id === action.task.id) {
          return action.task
        } else { 
          return ele
        }
      })
    }
    default: { 
      throw Error('未知 action：' + action.type);
    }
  }
}
