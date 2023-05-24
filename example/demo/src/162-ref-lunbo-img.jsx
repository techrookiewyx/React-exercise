import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import './8-example-logs.css'
const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i
  });
}

export default function CatFriends(){
  const listRef = useRef(null)
  const [index, setIndex] = useState(0);
  return (
    <>
      <nav className="nav152">
        <button className="btn152" onClick={() => { 
          flushSync(() => { 
            if (index < catList.length - 1) {
              setIndex(index + 1);
            } else { 
              setIndex(0);
            }
          })
          listRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });            
        }}>
          下一个
        </button>
      </nav>
      <div className="div152">
      <ul className="ul152">
        {catList.map((ele,i) =>
          <li
            className="li152"
            key={ele.id}
            ref={index===i ? listRef: null }
          >
            <img
              className={index===i ? `img162 active162`:`img162`}
              src={ele.imageUrl}
              alt={'猫猫 #' + ele.id}
            />
          </li>
        )}
        </ul>
      </div>
    </>
  )
} 