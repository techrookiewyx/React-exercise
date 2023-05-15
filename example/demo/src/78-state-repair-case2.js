import { useState } from "react";
import Box from "./78-Box";
import Background from "./78-Background";

const chushi = {
  x: 0,
  y: 0
}
export default function Canvas() {
  const [shape , setShape] = useState({
    color:'orange',
    position: chushi
  })
  function handleColor(e) { 
    setShape({
      ...shape,
      color: e.target.value
    })
  }
  function handleMove(dx,dy) { 
    setShape({
      ...shape,
      position: {
        x: shape.position.x + dx,
        y: shape.position.y + dy
      }
    });
  }
  return(
    <div>
      <select value={shape.color} onChange={handleColor}>
        <option value='orange'>oragne</option>
        <option value='lightpink'>lightpink</option>
        <option value='aliceblue'>aliceblue</option>
      </select>
      <Background
        position={chushi}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
    </div> 
  )
}