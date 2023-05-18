import React, { useState } from 'react'
import LogItem from './LogItem'
import '../8-example-logs.css'
import Card from './Card'
import LogForm from './LogForm'
export default function Logs() {
  //定义state
  const [logDate, setLogsDate] = useState([
    {
      id:'001',
      date: new Date(2022, 6, 23, 5, 20),
      desc: '哈哈',
      time: 20
    }
  ])
  //定义一个函数作为props传递给子组件
  const savaLog = (newLog) => {
    newLog.id = Date.now() + "";
    setLogsDate([newLog,...logDate ]);
  }
  const delLog = (index) => {
    setLogsDate(pervDate => { 
      const newLogDate = [...pervDate];
      newLogDate.splice(index, 1);
      return newLogDate
    })
  }
  return ( 
    <div className='app'>
      <LogForm onLogSave={savaLog} />
      <Card className='logs'> 
        {logDate.length!==0 ? logDate.map((item,index) => 
          <LogItem key={item.id} logsDate={item} delLog={()=>delLog(index)} />
        ):<p>没有数据</p>}
      </Card>
    </div>
  )
}
