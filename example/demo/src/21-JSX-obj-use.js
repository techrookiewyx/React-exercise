import React from 'react'

export default function JsxMore() {
  const person = {
    name:'Tom',
    theme: {
      backgroundColor: 'lightgreen',
      color:'white'
    }
  }
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  )
}
