import React from "react";



const arr1 = ["张三", "李四", "王五"];
//JSX中会自动将数组中元素在页面中显示
const div = <div>{arr1}</div>  //显示 张三李四王五

//以列表形式在页面中显示数组中的元素
//本质就是需要根据["张三", "李四", "王五"]创建[<li>张三</li>，<li>李四</li>，<li>王五</li>]
const newArr = arr1.map(person =>
  <li>
    {person}
  </li>
);
const list = <ul>{newArr}</ul>;

export const jsx5_1 = div;
export const jsx5_2 = list;