import { useState } from "react";
import './224-case.css'
//获取图片url函数
function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}
//Profile子组件
function Profile({person}) { 
  const [show, setShow] = useState(true);
  return (
    <section className="panel">
      <button onClick={() => { setShow(!show) }}>{show ? 'Collapse' : 'Expand'}</button>
      {show && <Info person={person} />}
    </section>
  )
}
function Info({ person }) { 
  return (
     <>
      <h1 className='h1224'>{person.name}</h1>
      <img
        width={50}
        height={50}
        alt={person.name}
        className="avatar"
        src={getImageUrl(person)}
      />
     </>
   ) 
}
export default function RepeatDataCard() {
  return (
    <>
      <Profile person={{
         imageId: 'lrWQx8l',
         name: 'Subrahmanyan Chandrasekhar',
      }} />
       <Profile person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
    </>
  )
}