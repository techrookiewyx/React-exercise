import React from 'react'

export default function SonProps({ size, desc}) {
  return (
    <img 
      className='avatar'
      src='https://i.imgur.com/1bX5QH6.jpg'
      alt={desc}
      width={size}
      height={size}
    />
  )
}
