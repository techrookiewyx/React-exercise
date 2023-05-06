import React from 'react';



let content;
let login = 0;
function Ok(){ 
  return (
    <div>
      正确
    </div>
  )
}
function False(){
  return (
    <div>
      错误
    </div>
  )
}
//JSX中虽然不能使用JS语句（if，for），但JS语句中可以使用JSX
if (login) {
  content = <Ok />
} else { 
  content = <False />
}

export const jsx4 = content;