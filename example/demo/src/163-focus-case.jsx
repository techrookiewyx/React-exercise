import { forwardRef, useRef } from "react";

function SearchButton({ onSearch }) {
  return (
    <button onClick={onSearch}>搜索</button>
  )
}

const SearchInput = forwardRef((props, ref)=>{
  return <input {...props} ref={ref} placeholder="找什么" />
})
export default function PageFocus() {
  const refIpt = useRef(null);
  function handleFocus() { 
    refIpt.current.focus();
  }
  return (
    <>
      <nav>
        <SearchButton onSearch={handleFocus} />
      </nav>
      <SearchInput ref={refIpt} />
    </>
  );
}