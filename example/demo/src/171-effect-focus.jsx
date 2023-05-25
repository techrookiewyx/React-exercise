import React, { useState } from 'react'
import { MyIpt } from './171-myIpt';
export default function EffectFocus() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Taylor');
  const [check, setCheck] = useState(false);
  return (
    <div>
      <button onClick={() => { setShow(!show) }}>{show ? 'Hide form' : 'Show form'}</button>
      <br />
      <hr />
      {show &&
        <div>
          Enter your name:
          <MyIpt
            value={text}
            onChange={e=>setText(e.target.value)}
          />
        </div>
      }
       <label>
        <input
          type='checkbox'
          checked={check}
          onChange={e=>setCheck(e.target.checked)}
        />
        {" "} Make it uppercase
      </label>
      <p>Hello,<b>{check? text.toUpperCase(): text}</b></p>
    </div>
  )
}
