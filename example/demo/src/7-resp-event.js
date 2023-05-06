import React from "react";


export default function ButtonEvent() { 
  function myButton() { 
    alert("你点我干嘛");
  }
    return(
      <button onClick={myButton}>
        点我看看
      </button>
    )
}