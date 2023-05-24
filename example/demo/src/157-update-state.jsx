import { useRef, useState } from "react";

let nextId = 0;
let chuShi = [];
for (let i = 0; i < 50; i++){
  chuShi.push({
    id: nextId++,
    text: `代办 # ${i+1}`
  })
}
export default function TodoList() { 
  const [text, setText] = useState('');
  const listRef = useRef(null);
  const [toods, setToods] = useState(chuShi);
  console.log(chuShi);
  function handleAdd() {
    const newTood = {id:nextId++,text:text}
    setToods([...toods,newTood]);
    setText("");
    listRef.current.lastChild.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    })
  }
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={e=>setText(e.target.value)}
      />
      {" "}
      <button onClick={handleAdd}>添加</button>
      <ul ref={listRef}>
        {toods.map(ele=>
          <li key={ele.id}>{ele.text}</li>
        )}
      </ul>
    </>
  )
}