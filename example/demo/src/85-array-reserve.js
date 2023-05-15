import { useState } from "react";

const chushi = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

export default function ArrayRev() {
  const [list, setList] = useState(chushi);
  function handleClick(){
    const newList = [...list];
    newList.reverse();
    setList(newList);
  }
  return (
    <div>
      <button onClick={handleClick}>反转</button>
      <ul>
        {list.map(ele =>
          <li key={ele.id}>{ele.title}</li>
        )}
      </ul>
    </div>
  )
}