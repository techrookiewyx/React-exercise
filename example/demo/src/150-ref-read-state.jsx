import { useState, useRef } from 'react';

export default function RefGetNewState() {
  const [text, setText] = useState('');
  const ref = useRef(null);
  ref.current = text;
  function handleSend() {
    setTimeout(() => {
      alert('正在发送：' + ref.current);
    }, 3000);
  }
  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={handleSend}>
        发送
      </button>
    </>
  );
}