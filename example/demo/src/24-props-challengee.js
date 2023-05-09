import React from 'react'
import './24-props.css'
function Info({name,pros,award,discover}) {
  return (
    <div className='info-item'>
      <h2>{name}</h2>
      <ul>
        <li><b>Profession:</b>{pros}</li>
        <li><b>Awards:{award.length}</b>({award.join(", ")})</li>
        <li><b>Discovered:</b>{discover}</li>
      </ul>
    </div>
  )
}
export default function PropsChall() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Info
        name="Maria Skłodowska-Curie"
        pros="physicist and chemist"
        award={["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"]}
        discover="polonium (chemical element)"
      />
        <Info
        name='Katsuko Saruhashi'
        pros='geochemist'
        discover="a method for measuring carbon dioxide in seawater"
        award={['Miyake Prize for geochemistry','Tanaka Prize']}
      />
    </div>
  )
}
