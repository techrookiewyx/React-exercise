import React from 'react'

function Toolbar({onPlayMovie,onUploadFile}) { 
  return (
    <div>
      <Button onEvent={onPlayMovie}>
      正在播放  
    </Button>
      <Button onEvent={onUploadFile}>
      正在上传
    </Button>
    </div>
   )
}
function Button({onEvent,children}) {
  return <button onClick={onEvent}>{children}</button>
}
export default function EventMoreProps() {
  return (
    <div>
      <Toolbar onPlayMovie={() => alert("正在播放")}  onUploadFile={()=> alert("正在上传")} />
    </div>
  )
}
