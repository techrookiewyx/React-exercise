import React from 'react'

function Avatar({size , des}) { 
   return(
     <img
       className='avatar'
       src='https://i.imgur.com/1bX5QH6.jpg'
       alt={des}
       width={size}
       height={size}
     />
   )
}
export default function Commun() {
  return (
    <div>
    <Avatar size={100} des={'tom'} />
    <Avatar size={80} des={'jerry'} />
    <Avatar size={50} des={'jane'} />
    </div>
  )
}
