import { useState } from "react";

export default function ClearLoadingPic() { 
  const [index, setIndex] = useState(0);
  const hasNex = index < images.length - 1;
  function handleClick() { 
    if (hasNex) {
      setIndex(index + 1);
    } else { 
      setIndex(0);
    }
  }
  const image = images[index];
  return (
    <>
      <h1>清除正在加载的图片</h1>
      <button onClick={handleClick}>下一张</button>
      <br />
      <h3>
        {images.length} 张图片中的第 {index + 1} 张
      </h3>
      <img key={image.src} src={image.src} alt={image.place} />
      <p>{image.place}</p>
    </>
  )
}


let images = [{
  place: 'Penang, Malaysia',
  src: 'https://i.imgur.com/FJeJR8M.jpg'
}, {
  place: 'Lisbon, Portugal',
  src: 'https://i.imgur.com/dB2LRbj.jpg'
}, {
  place: 'Bilbao, Spain',
  src: 'https://i.imgur.com/z08o2TS.jpg'
}, {
  place: 'Valparaíso, Chile',
  src: 'https://i.imgur.com/Y3utgTi.jpg'
}, {
  place: 'Schwyz, Switzerland',
  src: 'https://i.imgur.com/JBbMpWY.jpg'
}, {
  place: 'Prague, Czechia',
  src: 'https://i.imgur.com/QwUKKmF.jpg'
}, {
  place: 'Ljubljana, Slovenia',
  src: 'https://i.imgur.com/3aIiwfm.jpg'
}];