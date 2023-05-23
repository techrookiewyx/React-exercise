import { useRef, useState } from "react"


export default function RefRepeatInput() {
  const [text, setText] = useState('');
  const [send, setSend] = useState(false);
  const ref = useRef(null);
  function handleSend() { 
    setSend(true);
    ref.current = setTimeout(() => {
      setText('');
      alert('已发送！');
      setSend(false);
    },3000)
  }
  function handleCanel() { 
    setSend(false);
    clearTimeout(ref.current);
  }
  return (
    <>
      <input
        type='text'
        value={text}
        disabled={send}
        onChange={e=>setText(e.target.value)}
      />
      {" "}
      <button
        disabled={send}
        onClick={handleSend} >
        {send ? '发送中....' : '发送'}
      </button>
      {send&&<button onClick={handleCanel}>撤销</button>}
    </>
  )
}
