import { useState } from "react";
import './220-case.css'
export default function AddRemCssClass() {
  const [backActive, setbackActive] = useState(true);
  let bgcStyle = 'back';
  let imgStyle = 'picture';
  if (backActive) { 
    bgcStyle += ' back-avtive' 
  } else {
    imgStyle += ' picture--active'
  }
  return (
    <div
      className={bgcStyle}
      onClick={()=>setbackActive(true)}
    >
      点击图片再点击背景查看效果
      <img
        className={imgStyle}
        onClick={e=>{
          e.stopPropagation();
          setbackActive(false);
        }
      }
      alt="Rainbow houses in Kampung Pelangi, Indonesia"
      src="https://i.imgur.com/5qwVYb1.jpeg"  
      />
    </div>
  )
} 