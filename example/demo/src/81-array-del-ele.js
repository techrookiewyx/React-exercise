import {useState} from 'react'

let chushi = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];
export default function ArrayDel() {
  const [artlist, setArtlist] = useState(chushi);
  return (
    <div>
       <h1>振奋人心的雕塑家们：</h1>
      <ul>
        {artlist.map(ele =>
          <li key={ele.id}>{ele.name}{" "}
            <button onClick={() => {
              setArtlist(
                artlist.filter(a =>
                  a.id !== ele.id )
              )
            }
          }>  删除</button>
          </li> 
        )}
       </ul>
    </div>
  )
}
