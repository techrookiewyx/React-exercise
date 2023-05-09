import React from "react";
import './18-JSX-repair.css'
export default function Bio() {
  return (
    <div>
    <div className="intro">
      <h1>欢迎来到我的站点！</h1>
    </div>
    <p className="summary">
      你可以在这里了解我的想法。
      <br/><br/>
      <b>还有科学家们的<i>照片</i></b>！
    </p>
    </div>
  );
}