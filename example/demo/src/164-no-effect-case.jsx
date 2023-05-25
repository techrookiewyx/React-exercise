import { useRef, useState } from 'react'

function VideoPlayer({ isPlay, src }) {
  const refVideo = useRef(null);
  if (isPlay) {
    refVideo.current.play();
  } else {
    refVideo.current.pause();
  }
  return <video src={src} ref={refVideo} loop playsInline />
  
}
export default function EventOutsideEffect() {
  const [play, setPlay] = useState(false);
  return (
    <>
      <button onClick={() => {setPlay(!play)}}>
        {play ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer isPlay={play} src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' />
    </>
  )
}
