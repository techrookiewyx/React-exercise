import React from 'react'
import MyDate from './MyDate'
import Card from './Card'

export default function LogItem({ logsDate , delLog }) {
  const delHandler = () => { 
    const isDel = window.confirm("是否删除");
    if (isDel) { 
      delLog();
    }
  }
  return (
    <Card className='item'>
      <MyDate date={logsDate.date} />
      <div className="content">
        <h2 className="desc">{logsDate.desc}</h2>
        <div className="time">{logsDate.time}分钟</div>
      </div>
      <div className='del' onClick={delHandler}>x</div>
    </Card>
  )
}
