import React from 'react'
import SonProps from './23-props-son'
function Card({children}){
  return (
    <div>
      { children }
    </div>
  )
}
export default function FatherProps() {
  return (
    <Card>
      <SonProps size={100} desc={'你好吗'} />
    </Card>
  )
}
