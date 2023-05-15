import { useState } from "react";


let chushi = [0, 0, 0];
export default function ArrayReplace() { 
  const [count, setCount] = useState(chushi);
  function handleClick(i) { 
    const newCount = count.map((ele, index) => { 
      if (i === index) {
        return ele + 1
      } else { 
        return ele
      }
    })
    setCount(newCount);
  }
  return (
    <ul>
      {count.map((ele,index) =>
        <li key={index}>
          {ele}
          <button onClick={() => { 
            handleClick(index)
          }}> +1</button>
        </li>  
      )}
    </ul>
  )
}