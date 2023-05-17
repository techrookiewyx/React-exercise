import React, { useState } from 'react'

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

export default function RepeatState() {
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  return (
    <div>
      <h2>What's your travel snack?</h2>
      <ul>
        {initialItems.map(ele => 
            <li key={ele.id}>
            {ele.title}
            {" "}
            <button onClick={()=>{setSelectedItem(ele)}}>Choose</button>
          </li>
        )}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </div>
  )
}
