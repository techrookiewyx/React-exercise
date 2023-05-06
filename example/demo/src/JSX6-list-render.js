import React from "react";


const arr = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 }
];

export default function FuritList(){ 
  const listItems = arr.map(item =>
    <li
      key={item.id}
      style={
        {color: item.isFruit? "green" : "red" }
        }
    >
      {item.title}
    </li>
  )
  return <ul>{listItems}</ul>
}