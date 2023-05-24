import React, { useRef } from "react";
import "./8-example-logs.css";
const catList =[];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i
  });
}
export default function RefCallBack() {
  const itemsRef = useRef(null);
  function handleTo(id) { 
    const map = getMap();
    const node = map.get(id);
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }
  function getMap() { 
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current
  }
  return (
    <>
      <nav className="nav152">
        <button className="btn152" onClick={() => { handleTo(0)}}>
          Tom
        </button>
        <button className="btn152" onClick={() => { handleTo(5)}}>
          Maru
        </button>
        <button className="btn152" onClick={() => { handleTo(9)}}>
          Jellylorum
        </button>
      </nav>
      <div className='div152'>
        <ul className='ul152'>
        {catList.map(ele =>
          <li
            ref={(node) => { 
              const map = getMap();
              if (node) {
                map.set(ele.id,node)
              } else { 
                map.delete(ele.id)
              }
            }}
            className="li152"
            key={ele.id}
          >
            <img
              src={ele.imageUrl}
              alt={`Cat # ${ele.id}`}
            />
          </li>
        )}
        </ul>
      </div>
    </>
  );
}
