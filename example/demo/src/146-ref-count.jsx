import { useRef } from 'react'

export default function RefCount() {
  const ref = useRef(0);
  function handleAdd() {
    ref.current = ref.current + 1;
  }
  return (
    <button onClick={handleAdd}>你点击了{ref.current}次</button>
  )
}
