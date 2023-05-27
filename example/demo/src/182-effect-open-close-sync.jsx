import { useEffect, useState } from "react";
export default function EffectChangeSync() { 
  const [post, setPost] = useState({ x: 0, y: 0 });
  const [move, setMove] = useState(true);
  useEffect(() => {
    function handleMove(e) {
      setPost({
        x: e.clientX,
        y: e.clientY
      })
    }
    if (move) {
      window.addEventListener('pointermove', handleMove);
      return ()=>window.removeEventListener('pointermove', handleMove)
    }
  },[move])
  return (
    <>
      <label>
        <input
          type='checkbox'
          checked={move}
          onChange={e => setMove(e.target.checked)}
        />
        {" "}
        The dot is allowed to move
      </label>
      <hr />
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'pink',
          width:40,
          height: 40,
          borderRadius:'50%',
          opacity: 0.7,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          transform: `translate(${post.x}px,${post.y}px)`
        }}
      />
    </>
  )
}