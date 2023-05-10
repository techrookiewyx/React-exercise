import React from 'react'

function Item({name,isPacked}){
  if (isPacked) { 
    return <li>{name} ✔</li>
  }
  return  <li>{name}</li>
}

export default function Judge() {
  return (
    <div>
      <h1>Sally Ride的行李清单</h1>
      <ul>
        <Item name='宇航服' isPacked={true}/>
        <Item name='带金箔的头盔' isPacked={true}/>
        <Item name='Tam的照片' isPacked={false}/>
      </ul>
    </div>
  )
}
