import React from 'react';
import ReactDOM from 'react-dom/client';
import Fn2 from './JSX1';
function MyButton(){
  return (
      <button>
        按钮
      </button>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>我的第一个react程序</h1>
    <MyButton />
    <Fn2 />
    </div>
);

