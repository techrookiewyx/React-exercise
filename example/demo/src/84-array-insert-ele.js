import { useState } from "react";
let nextId = 3;
const chushi = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];
export default function ArrayInsert() {
  const [name, setName] = useState('');
  const [artlist, setArtlist] = useState(chushi);
  function handleClick(){ 
    const insertAt = 1;
    const newList = [
      ...artlist.slice(0, insertAt),
      { id: nextId++, name: name },
      ...artlist.slice(insertAt)
    ];
    setArtlist(newList);
    setName('');
  }
  return (
    <div>
      <h1>振奋人心的雕塑家们：</h1>
      <input
        value={name}
        onChange={e => {setName(e.target.value)}}
      />
      <button onClick={handleClick}>插入</button>
      <ul>
        {artlist.map(ele=>
          <li key={ele.id}>{ele.name}</li>
        )}
      </ul>
    </div>
  )
}