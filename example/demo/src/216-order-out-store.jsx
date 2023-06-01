import { useSyncExternalStore } from "react";
import { todosStore } from "./216-todoStore";

export default function OrderOutStore() { 
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  return (
    <>
      <button onClick={() => { todosStore.addTodo() }}>Add todo</button>
      <hr />
      <ul>
        {todos.map(ele=><li key={ele.id}>{ele.text}</li>)}
      </ul>
    </>
  )
}