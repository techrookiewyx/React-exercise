import  React ,{ useState } from "react";

export default function ChangeMoveDot(){
  const [position , setPosition] = useState({
    x:0,
    y:0
  })
  return (
    <div onPointerMove={e => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }}
      style={{
        position: 'relative',
        width:200,
        height: 200,
        backgroundColor:'green'
      }}
    >
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        top: -10,
        left:-10,
        width: 20,
        height:20
      }}
      /> 
    </div>
  )
}