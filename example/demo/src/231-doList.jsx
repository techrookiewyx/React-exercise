import { useMemo } from "react";
import { filterTodo } from "./231-todoUtils";
import './8-example-logs.css'
export default function DOList({ theme, todos, tab }) { 
  const visibleTodos = useMemo(() =>filterTodo(todos,tab)
    , [todos, tab])
  return (
    <div className={theme}>
      <p><b>注意: <code>过滤列表</code> 是经过人为减速的</b></p>
      <ul>
        {visibleTodos.map(ele =>
          <li key={ele.id}>
            {ele.completed ?
              <s>{ele.text}</s>:
              ele.text
            }
          </li>
        )}
      </ul>
    </div>
  )
}