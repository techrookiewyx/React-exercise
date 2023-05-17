import { useState } from "react"
import { chushiLetters } from "./106-data"

function Letter({letter,onToggle,isSelected}) {
  return (
    <li style={isSelected ? { backgroundColor: 'lightblue' } : {}}>
      <input
        type="checkbox"
        onChange={() => {
          onToggle(letter.id)
        }}
        checked={isSelected}
      />
      {" "}
      {letter.subject}
    </li>
  )
}

export default function MailClientTwo() {
  const [selectedIds, setSelectedIds] = useState([]);
  const selectedCount = selectedIds.length;
  function handleToggle(id){ 
    if (selectedIds.includes(id)) { 
      setSelectedIds(selectedIds.filter(ele => ele!==id))
    } else {
      setSelectedIds([
        ...selectedIds,
        id
      ])
    }
  }
  return (
    <div>
      <h2>Inbox</h2>
      <ul>
        {chushiLetters.map(ele =>
          <Letter
            key={ele.id}
            letter={ele}
            onToggle={handleToggle}
            isSelected={selectedIds.includes(ele.id)}
          />
        )}
        <hr />
        <p><b>You selected {selectedCount} letters</b></p>
      </ul>
    </div>
  )
}
