import React from "react";
import "./JSX2.css"

//在JSX中可以在{ }来嵌入表达式（有值的语句）
const a= 5;
const b = "aaa";
export const div2 = <div>
              age={a} <br />
              name={b} <br />
            </div>
    
    
//在JSX可以直接为标签设置属性,style必须使用对象来设置多个样式之间用逗号分隔
export const div3 = <div className='box' style={{ backgroundColor: "red" }} onClick={() => { alert("aaa") }}>哈哈哈</div>
