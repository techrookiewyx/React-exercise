import  { useState } from 'react'


function Input({ text, label, onChange }) {
  return (
    <>
      <label>
        {label}
        {' '}
        <input onChange={onChange}
          value={text}
        />
      </label>
    </>
    )
}
export default function InputStateSync() {
  const [text, setText] = useState('');
  function handleInput(e) { 
    setText(e.target.value);
  }
  return (
    <div>
      <h1>
        输入框状态同步
      </h1>
      <Input text={text} label="第一个输入框" onChange={handleInput} />
      <br/>
      <Input text={text} label="第二个输入框" onChange={handleInput} />
    </div>
  )
}
