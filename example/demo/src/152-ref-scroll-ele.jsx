import React, { useRef } from 'react'
import './8-example-logs.css'
export default function RefOpaDomScroll() {
  const fst = useRef(null);
  const scd = useRef(null);
  const trd = useRef(null);
  function handleFirst() { 
    fst.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }
  function handleSecond() { 
    scd.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }
  function handleThird() { 
    trd.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }
  return (
    <>
      <nav className='nav152'>
        <button className='btn152' onClick={handleFirst}>
          Tom
        </button>
        <button className='btn152' onClick={handleSecond}>
          Maru
        </button>
        <button className='btn152' onClick={handleThird}>
          Jellylorum
        </button>
      </nav>
      <div className='div152'>
        <ul className='ul152'>
          <li className='li152'>
            <img
              ref={fst}
              src="https://placekitten.com/g/200/200"
              alt="Tom"
            />
          </li>
          <li className='li152'>
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
              ref={scd}
            />
          </li>
          <li className='li152'>
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
              ref={trd}
            />
          </li>
        </ul>
      </div>
    </>
  )
}
