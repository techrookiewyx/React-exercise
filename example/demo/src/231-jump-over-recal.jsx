import { useState } from "react";
import { createTodoTTO } from "./231-todoUtils"
import DOList from "./231-doList";
const todos = createTodoTTO();
export default function JumpRecal() {
  const [tab, setTab] = useState('all');
  const [dark, setDark] = useState(false);
  return(
  <>
    <button onClick={() => {setTab('all')}}>All</button>
    <button onClick={() => {setTab('active')}}>Active</button>
    <button onClick={() => {setTab('completed')}}>Completed</button>
    <br />
    <label>
      <input
        type='checkbox'
        value={dark}
        onChange={(e)=>{setDark(e.target.checked)}}
      />
      {" "} Dark mode
    </label>
    <hr />
    <DOList
      todos={todos}
      tab={tab}
      theme={dark?'night223':'light223'}  
    />
  </>
  )
}