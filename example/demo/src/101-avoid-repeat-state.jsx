import { useState } from 'react'

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

export default function AvoidRepeatState() {
  const [items, setItems] = useState(initialItems);
  const [selectedID, setSelectedID] = useState(0);
  const selectedItem = items.find(ele => ele.id === selectedID);
  function handleItemChange(id, e) {
    setItems(items.map(ele => { 
      if (id === ele.id) {
        return {
          ...ele,
          title: e.target.value
        }
      } else { 
        return ele
      }
    }))
  }
  return (
    <div>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map(ele => 
            <li key={ele.id}>
            <input
              value={ele.title}
              onChange={e => {handleItemChange(ele.id,e)}}
            />
            {" "}
            <button onClick={() => { 
              setSelectedID(ele.id)
            }}>Choose</button>
          </li>
        )}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </div>
  )
}
