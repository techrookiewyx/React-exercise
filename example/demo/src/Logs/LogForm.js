import React, { useState } from 'react'
import Card from './Card'
export default function LogForm({onLogSave}) {
  //使用state创建可控变量
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  //表单项改变的响应函数
  const contentChange = (event) => { 
    setContent(event.target.value);
  }
  const dateChange = (event) => { 
     setDate(event.target.value);
  }
  const timeChange = (event) => { 
     setTime(event.target.value);
  }
  const submitHandler = (event) => { 
    event.preventDefault();
    //获取输入内容，将数据拼装为对象
    const newLog = {
      date: new Date(date),
      desc: content,
      time : +time
    }
    //当添加新日志时，调用父组件传递的函数,把数据传递给父组件
    onLogSave(newLog);
    //表单提交将其中内容清空,但目前的表单在React中称为非受控组件（需要操作原生DOM）
    //通过state显示表单中的数据（value属性）,反之当表单向发生变化state也会跟着改变，这样就将表单和state数据进行双向绑定，这时表单就是受控组件
    setContent("");
    setTime("");
    setDate("");
  }
  return (
    <Card>
      <form>
        <div>
          <label htmlFor='date'>日期</label>
          <input onChange={dateChange} value={date} type='date' id='date'/>
        </div>
        <div>
          <label htmlFor='content'>内容</label>
          <input onChange={contentChange} type='text' value={content} id='content'/>
        </div>
        <div>
          <label htmlFor='time'>时长</label>
          <input onChange={timeChange} type='number' value={time} id='time'/>
        </div>
        <button onClick={submitHandler}>添加</button>
      </form>
    </Card>
  )
}
