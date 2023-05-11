import React from 'react'
import PureSon from './44-pure-case-son'
export default function PureCase() {
  return (
    <React.StrictMode>
      <PureSon person={{name:'Subrahmanyan Chandrasekhar'}}/>
      <PureSon person={{name:'Creola Katherine Johnson'}}/>
    </React.StrictMode>
  )
}
