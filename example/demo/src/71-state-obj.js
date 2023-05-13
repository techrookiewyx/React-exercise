import { useState } from "react";

export default function MoveDot(){
  const [position , setPosition] = useState({
    x:0,
    y:0
  })
  return (
    <div onPointerMove={e => {
      position.x = e.x;
      position.y = e.y;
    }}
      style={{
        position: 'relative',
        width:200,
        height: 200,
        backgroundColor:'pink'
      }}
    >
      <div style={{
        position: 'absolute',
        backgroundColor: 'yellow',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y})`,
        top: -10,
        left:-10,
        width: 20,
        height:20
      }}
      /> 
    </div>
  )
}