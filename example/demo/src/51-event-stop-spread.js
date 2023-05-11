import React from 'react'

function Button({ onClick, children }) { 
  return <button onClick={e => {
              e.stopPropagation();
              onClick();
            }}>
            {children}
         </button>
}
export default function EventStopSpread() {
  return (
    <div style={{width:200,height:200,backgroundColor:"lightgreen",marginTop:20}} onClick={()=>alert("我是div事件")}>
    <Button onClick={() => alert("正在播放")}>
      播放电影
    </Button>
    <Button onClick={() => alert("正在上传")}>
      上传文件
    </Button>
  </div>
  )
}
