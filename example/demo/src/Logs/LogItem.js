import React from 'react'
import MyDate from './MyDate'

export default function LogItem(props) {
  // const date = new Date(props.date);
  return (
    <div className='item'>
      <MyDate date={props.date} />
        <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}分钟</div>
        </div>
    </div>
  )
}
