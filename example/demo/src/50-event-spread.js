import React from 'react'

export default function EventSpread() {
  return (
    <div style={{width:200,height:200,backgroundColor:"pink"}} onClick={()=>alert("我是div事件")}>
      <button onClick={() => alert("正在播放")}>
        播放电影
      </button>
      <button onClick={() => alert("正在上传")}>
        上传文件
      </button>
    </div>
  )
}
