import React from 'react'

function Button({onClick,children}) { 
  return <button onClick={onClick}>
          {children}
        </button>
}
function FileButton(){
  return <Button onClick={()=>alert("正在上传")}>
            上传图片
         </Button>
}
function VideoButoon({ movieName }) {
  function handleClick() {
     alert(`正在播放${movieName}!`);
  }
  return <Button onClick={handleClick}>
          播放"{movieName}"
         </Button>
}

export default function EventTransProps() {
  return (
    <div>
      <VideoButoon movieName="overlord"/>
      <FileButton/>
    </div>
  )
}
