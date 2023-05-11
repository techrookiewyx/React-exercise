import React from 'react'

function Header({person}) { 
  return <h1>{person}</h1>
}
function Avatar({person}) {
  return <img
    src='https://i.imgur.com/1bX5QH6.jpg'
    alt={person}
    width={50}
    height={50}
          />
}
export default function PureSon({person}) {
  return (
    <div>
      <Header person={person.name} />
      <Avatar person={person.name}/>
    </div>
  )
}
