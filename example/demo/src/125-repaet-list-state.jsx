import { useState } from "react";

const contacts = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];

function Item({ list }) { 
  const [expend, setExpend] = useState(false);
  return (
    <>
      <p><b>{list.name}</b></p>
      {expend && <p><i>{list.email}</i></p>}
      <button onClick={()=>setExpend(!expend)}>
        {expend ? '隐藏' : '显示'}邮箱
      </button>
    </>
  )
}
export default function RepaetListDislocation() { 
  const [reverse, setReverse] = useState(false);
  const newList = [...contacts];
  if (reverse) { 
    newList.reverse();
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={reverse}
          onChange={e=>setReverse(e.target.checked)}
        />
        {" "} 以相反的顺序显示
      </label>
      <ul>
        {newList.map(ele =>
          <li key={ele.id}>
            <Item list={ele} />
          </li>
        )}
      </ul>
    </div>
  )
}