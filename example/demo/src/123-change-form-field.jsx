import { useState } from "react"

function Field({label}){
  const [text, setText] = useState('');
  return (
    <label style={{display:'block'}}>
      {label} :{" "}
      <input
        value={text}
        placeholder={label}
        onChange={e=>setText(e.target.value)}
      />
    </label>
  )
}

export default function ChangeFormField() {
  const [reverse, setReverse] = useState(false);
  return (
    <div>
      {reverse ?
        <>
        <Field key='xing' label='姓氏' />
        <Field key='ming' label='名字' />
        </>
        :
        <>
        <Field key='ming' label='名字' />
        <Field key='xing' label='姓氏' />
        </>
      }
      <label>
        <input
          type='checkbox'
          checked={reverse}
          onChange={e=>setReverse(e.target.checked)}
        />
        {" "} 调换顺序
      </label>
    </div>
  )
}
