import React from "react";
import "./8-example-logs.css"


export default function Log() { 
  return (
    <div className="logs">
      <div className="item">
        <div className="date">
          <div className="month">四月</div>
          <div className="day">15</div>
        </div>
        <div className="content">
          <h2 className="desc">React</h2>
          <div className="time">20分钟</div>
        </div>
      </div>
    </div>
  )
}