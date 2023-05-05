import React from 'react';
import ReactDOM from 'react-dom/client';



//JSX是JS的扩展
//JSX语法中只有一个根标签，若有多个JSX标签，需要将他们包裹在一个根标签中
const div = <div>
    <div>hahaha</div>
    <div>hahaha</div>
</div>;
export default function Fn2(){
  return (
    <div>
      <div>hahaha</div>
      <div>hahaha</div>
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);

