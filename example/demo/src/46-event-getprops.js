import React from 'react'

function TestButton({ message, children }) { 
  return <button onClick={()=>alert(message)}>
      {children}
    </button>
}

export default function EventGetProps() {
  return (
    <div>
      <TestButton message="正在播放">
        播放电影
      </TestButton>
      <TestButton message="正在上传">
        上传文件
      </TestButton>
    </div>
  )
}
