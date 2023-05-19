import React, { useState } from 'react'

function Form() { 
  const [text, setText] = useState('');
  return (
    <textarea
      value={text}
      onChange={e=>{setText(e.target.value)}}
    />
  )
}
export default function RepairLostInput() {
  const [showHint, setShowHint] = useState(false);
  const newHimt = showHint;
  return (
    <div>
      {showHint &&
         <p><i>提示：你最喜欢的城市？</i></p>
      }
      <Form />
      <button style={{display:'block'}} onClick={() => { setShowHint(!newHimt) }}>显示提示</button>
    </div>
  )
}