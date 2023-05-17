import { useState } from "react";
import { chushiLetters } from "./106-data";

function Letter({ letter, onHover, onToggleStar, hitghLightId }) {
  return (
    <li
      onFocus={() => { onHover(letter.id) }}
      onPointerMove={() => { onHover(letter.id) }}
      style={hitghLightId ? { backgroundColor: 'lightblue' }:{}}
    >
      <button onClick={() => {
        onToggleStar(letter.id);
      }}>
        {letter.isStarred ? 'Unstar' : 'Star'}
      </button>
      {" "}
      {letter.subject}
    </li>
  )
}

export default function MailClient() {
  const [letters, setLetters] = useState(chushiLetters);
  const [hitghLightId, setHighLightId] = useState(null);
  function handleHover(id) { 
     setHighLightId(id)
  }
  function handleStar(id) { 
    setLetters(letters.map(ele => { 
      if (ele.id === id) {
        return {
          ...ele,
          isStarred: !ele.isStarred
        }
      } else { 
        return ele
      }
    }))
  }
  return (
    <div>
      <h2>Inbox</h2>
      <ul>
        {letters.map(ele=>
          <Letter
            key={ele.id}
            letter={ele}
            onHover={handleHover}
            hitghLightId={ele.id===hitghLightId}
            onToggleStar={handleStar}
          />
        )}
      </ul>
    </div>
  )
}