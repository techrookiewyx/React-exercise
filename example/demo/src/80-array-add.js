import {useState} from 'react'

let nextId = 0
export default function ArrayAdd() {
  const [name,setName] = useState('');
  const [artlist, setArtlist] = useState([]);
  return (
    <div>
       <h1>振奋人心的雕塑家们：</h1>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <button onClick={() => { 
        setArtlist([
          ...artlist,
          {id:nextId++,name:name}
        ])
      }}
      >添加</button>
      <ul>
        {artlist.map(ele => <li key={ele.id}>{ele.name}</li>)}
      </ul>
    </div>
  )
}
