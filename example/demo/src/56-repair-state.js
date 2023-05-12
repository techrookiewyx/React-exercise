import React, { useState } from 'react'
import { data } from './53-exp-data'
export default function RepairState() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  function handleNext() { 
    setIndex(prevState => prevState + 1);
  }
  function handlePrve() { 
    setIndex(prevState => prevState - 1);
  }
  function handleDetil(){
    setShow(state=>!state);
  }
  let dateIndex = data[index];
  let prevIndex = index > 0;
  let nextIndex = index < data.length - 1;
  return (
    <>     
      <div>
        <button onClick={handleNext} disabled={!nextIndex}>Next</button>
        <button onClick={handlePrve} disabled={!prevIndex}>Prve</button>
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
      </div>   
    </>
  )
}
