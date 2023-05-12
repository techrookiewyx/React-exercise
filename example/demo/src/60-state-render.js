import React, { useState} from 'react'

export default function StateRender() {
  const [message, setMessage] = useState('');
  const [isSend, setIsSend] = useState(false);
  if (isSend) { 
    return <h1>Your message is on its way!</h1>
  }
  return (
    <form onSubmit={e => {
      e.preventDefault();
      setIsSend(true);
    }}>
      <textarea
        placeholder='Message'
        onChange={e => setMessage(e.target.value)}
        value={message}
      />
      <button type='submit'>提交</button>
    </form>
  )
}
