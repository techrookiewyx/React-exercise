import {useState} from 'react'

let chushi = [
  { id: 0, type: 'circle', x: 50, y: 50 },
  { id: 1, type: 'square', x: 150, y: 50 },
  { id: 2, type: 'circle', x: 250, y: 50 }
]
export default function ArrayChange() {
  const [shapelist, setShaplist] = useState(chushi);
  function handleClick() { 
    const newShaplist = shapelist.map(ele => { 
      if (ele.type === 'square') { 
        return ele
      } else {
        return {
          ...ele,
          y: ele.y +50 }
      }
    })
    setShaplist(newShaplist);
  }
  return (
    <div style={{position:'relative'}}>
      <button onClick={handleClick}>所有原型向下移动</button>
      {shapelist.map(ele => 
        <div key={ele.id}
          style={{
            backgroundColor: 'pink',
            position: 'absolute',
            left: ele.x,
            top: ele.y,
            borderRadius: ele.type === 'circle' ? '50%' : '',
            width: 20,
            height: 20,
          }}
        >  
        </div>
      )}
    </div>
  )
}
