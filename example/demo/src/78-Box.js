import {useState} from 'react'

export default function Box({ color, position, children, onMove }) {
  const [last, setLast] = useState(null);
  function handlePointerDowm(e) {
    e.target.setPointerCapture(e.pointerId);
    setLast({
      x: e.clientX,
      y: e.clientY
    })
  }
  function handlePointerMove(e){
    if(last){
      setLast({
        x: e.clientX,
        y: e.clientY
      });
    const dx = e.clientX - last.x;
    const dy = e.clientY - last.y;
    onMove(dx, dy);
    }
  }
  function handlePointerUp() { 
    setLast(null);
  }
  return (
    <div 
      onPointerDown={handlePointerDowm}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
      width: 100,
      height: 100,
      cursor: 'grab',
      backgroundColor: color,
      position: 'absolute',
      border: '1px solid black',
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center',
      transform: `translate(
        ${position.x}px,
        ${position.y}px
      )`
    }}>
      {children}
    </div>
  )
}
