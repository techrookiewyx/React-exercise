import React from "react";
//请根据给你的数组生成菜谱列表！其中每个菜谱，都用 <h2> 来显示它的名称，并在 <ul> 里列出它所需的原料。
const dish = [
  {
    id: "greek-salad",
    name: "希腊沙拉",
    ingredients: ["西红柿", "黄瓜", "洋葱", "油橄榄", "羊奶酪"],
  },
  {
    id: "hawaiian-pizza",
    name: "夏威夷披萨",
    ingredients: ["披萨饼皮", "披萨酱", "马苏里拉奶酪", "火腿", "菠萝"],
  },
  {
    id: "hummus",
    name: "鹰嘴豆泥",
    ingredients: ["鹰嘴豆", "橄榄油", "蒜瓣", "柠檬", "芝麻酱"],
  },
];
//嵌套列表-拆分组件
function DishItem({ id, name, ingredients }) {
  return (
    <li>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ele=> 
          <li key={ele}>{ele}</li>
        )}
      </ul>
    </li>
    )
}
export default function RecipeList2() {
  return (
    <div>
      <h1>菜名</h1>
      <ul>
        {dish.map(ele=>
          <DishItem {...ele} key={ele.id} />
        )}
      </ul>
    </div>
  );
}
