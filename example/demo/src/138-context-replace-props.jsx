import { createContext, useContext, useState } from "react";
import { places } from "./138-data";
import './8-example-logs.css'
function getImageUrl(place) {
  return (
    'https://i.imgur.com/' +
    place.imageId +
    'l.jpg'
  );
}
const ImageSizeContext = createContext(500);
export default function ContextChallange() {
  const [isLarge, setIsLarge] = useState(false);
  const imgageSize = isLarge ? 150 : 100;
 
  return (
    <ImageSizeContext.Provider value={imgageSize}>
      <label>
        <input
          checked={isLarge}
          type='checkbox'
          onChange={e=>setIsLarge(e.target.checked)}
        />
        Use large images
      </label>
      <hr />
      <List/>
    </ImageSizeContext.Provider>
  )
}

function List() { 
  return (
    <ul className="case138-ul">
      {places.map(ele=>
        <li key={ele.id} className="case138-li">
          <Place  place={ele}/>
        </li>
      )}
    </ul>
   )
}

function Place({ place }) {
  return (
    <>
      <ImgPlace place={place} />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
   )
}

function ImgPlace({ place }) {
  const imgSize = useContext(ImageSizeContext);
  return (
    <>
      <img
           src={getImageUrl(place)}
           alt={place.name}
           width={imgSize}
           height={imgSize}
      />
    </>
  )
}