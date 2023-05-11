import React, { useState } from 'react'
import { data } from './53-exp-data';
export default function StateExp() {
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex(prevState => prevState + 1);
    console.log(index);
  }
  let dateIndex = data[index];
  return (
    <>
      {index <= data.length-1 ? 
    <div>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{dateIndex.name}</i>
        by {dateIndex.artist}
      </h2>
      <h3>{index + 1} of {data.length}</h3>
      <img
        src={data.url} 
        alt={data.alt}
      />
      <p>{data.description}</p>
      </div>
        : <div>没有数据了</div>
      }
    </>
  )
}
