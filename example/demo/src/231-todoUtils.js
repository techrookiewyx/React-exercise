export function createTodoTTO() {
  const todos = [];
  for (let i = 0; i< 50; i++) { 
    todos.push({
      id: i,
      text: "Todo " + (i + 1),
      completed: Math.random() > 0.5
    })
  }
  return todos
}

export function filterTodo(todos,tab) { 
  console.log(`[人为地慢] 为“${tab}”选项卡过滤${todos.length}个待办事项`);
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
   
  }
  return todos.filter(ele => { 
    if (tab === 'all') {
      return true
    } else if (tab === 'active') { 
      return !ele.completed
    }else if(tab==='completed'){
      return ele.completed
    }else{
      return null;
    }
  })
}