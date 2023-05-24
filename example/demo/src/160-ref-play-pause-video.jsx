import { useRef, useState } from "react";

export default function VideoPlayer() { 
  const [paly, setPlay] = useState(false);
  const videoRef = useRef(null)
  function handleClick() {
    const nextPlay = !paly;
    setPlay(!paly)
    if (nextPlay) { 
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }
  return (
    <>
      <button onClick={handleClick}>{paly ? '暂停' : '播放'}</button>
      <video
        ref={videoRef} 
        width="250"
        onPlay={() => {setPlay(true)}}
        onPause={() => {setPlay(false)}}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}