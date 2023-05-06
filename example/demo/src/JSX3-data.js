import React from "react";

//案例

const user = {
  name:'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

//JSX的标签必须为闭合标签  如 <img />、<input />
export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={ 'hello'+user.name}
        style={{
          width: user.imageSize ,
          height: user.imageSize 
        }}
      />
    </>
    )
}