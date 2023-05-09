import React from 'react'

export default function MyDate({ date }) {
  return (
    <div className="date">
      <div className="month">{date.toLocaleString('zh-CN',{month:'short'})}</div>
      <div className="day">{date.getDate()}</div>
    </div>
  )
}
