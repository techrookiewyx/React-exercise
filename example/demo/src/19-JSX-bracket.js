import React from 'react'

export default function Bracket() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'JSX中大括号的使用';
  const name ='Gregorio Y. Zara';
  //scr中的avatar和类名avatar不同，scr中的avatar会去读取JS的变量值
  return (
    <>
    <h1>{name}'s To Do List</h1>
    <img
      className='avatar'
      src={avatar}
      alt={description}
    />
    </>
  )
}
