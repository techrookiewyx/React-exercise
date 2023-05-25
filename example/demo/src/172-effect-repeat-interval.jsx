import React, { useState } from 'react'
import { MyIptRepeatCase } from './172-ipt-repeat-interval';
export default function EffectFocus() {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');
  return (
    <div>
      <button onClick={() => { setShow(!show) }}>{show ? 'Hide form' : 'Show form'}</button>
      <br />
      <hr />
      {show&& 
        <>
            <div>
          Enter your first name:
          <MyIptRepeatCase
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            show={true}
          />
        </div>
        <div>
          Enter your first name:
          <MyIptRepeatCase
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          show={false}
          />
        </div>
      <p>Hello,<b>{`${firstName} ${lastName}`}</b></p>
        </>
      }
    </div>
  )
}
