import { useEffect, useRef, useState } from 'react'

function VideoPlayer({ isPlay, src }) {
  const refVideo = useRef(null);
  useEffect(()=>{
    if (isPlay) {
      console.log('Calling video.play()');
      refVideo.current.play();
    } else {
      console.log('Calling video.pause()');
      refVideo.current.pause();
    }
  })
  return <video src={src} ref={refVideo} loop playsInline />
  
}
export default function EffectRun() {
  const [play, setPlay] = useState(false);
  const [text,setText] = useState("")
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <br/>
      <button onClick={() => {setPlay(!play)}}>
        {play ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer isPlay={play} src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' />
    </>
  )
}
