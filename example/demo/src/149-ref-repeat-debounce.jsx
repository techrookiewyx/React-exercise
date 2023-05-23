import { useRef } from "react";

function Button({ onClick, children }) {
  const ref = useRef(null);
  return (
    <button onClick={() => {
      clearTimeout(ref.current);
      ref.current = setTimeout(() => {
        onClick();
      }, 1000);
    }}>
      {children}
    </button>
  );
}
export default function RefRepeatDebounce() {
  return (
    <>
      <Button
        onClick={() => alert('宇宙飞船已发射！')}
      >
        发射宇宙飞船
      </Button>
      <br/>
      <Button
        onClick={() => alert('汤煮好了！')}
      >
        煮点儿汤
      </Button>
      <br/>
      <Button
        onClick={() => alert('摇篮曲唱完了！')}
      >
        唱首摇篮曲
      </Button>
    </>
  )
}
