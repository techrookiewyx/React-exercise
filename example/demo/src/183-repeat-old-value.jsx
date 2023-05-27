import { useState, useEffect } from 'react';

export default function RepeatEmpetDeps() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [move, setMove] = useState(true);
  function handleMove(e) {
    if (move) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
  }
  useEffect(() => {
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  });
  return (
    <>
      <label>
        <input type="checkbox"
          checked={move}
          onChange={e => setMove(e.target.checked)} 
        />
        The dot is allowed to move
      </label>
      <hr />
      <div style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity: 0.7,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }} />
    </>
  );
}