import React, { useState } from 'react'
import { data } from './53-exp-data'
export default function MoreState() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  function handleNext() { 
    setIndex(prevState => prevState + 1);
  }
  function handleDetil(){
    setShow(state=>!state);
  }
  let dateIndex = data[index];
  return (
    <>
           { index <= data.length-1 ?
      <div>
        <button onClick={handleNext}>Next</button>
        <h2>
            <i>{dateIndex.name}</i>
          by {dateIndex.artist}
          </h2>
          <h3>{index + 1} of {data.length}</h3>
          <button onClick={handleDetil}>
            {show ? 'Hide' : 'Show'} details
          </button>
          {show && <p>{dateIndex.description}</p> }
          <img
            src={data.url} 
            alt={data.alt}
          />
      </div> : <div>没有数据了</div>
      }
    </>
  )
}
