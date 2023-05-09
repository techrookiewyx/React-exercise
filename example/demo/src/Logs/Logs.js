import React from 'react'
import LogItem from './LogItem'
import '../8-example-logs.css'
export default function Logs() {
  return (
    <div className='logs'>
      <LogItem date={new Date()} desc={"哈哈"} time={"50"} />
    </div>
  )
}
