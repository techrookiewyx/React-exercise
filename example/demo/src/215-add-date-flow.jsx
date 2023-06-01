import { PRODUCTS } from "./213-produces";
import './213-case.css'
import { useState } from "react";
function SearchBar({text,stock,onTextChange,onStock}) { 
  return (
    <form>
      <input value={text} onChange={e=>onTextChange(e.target.value)} placeholder="Search..." />
      <label>
        <input onChange={e=>onStock(e.target.checked)} checked={stock} type='checkbox'/>{" "}
         Only show products in stock
      </label>
    </form>
  )
}
function ProductCateRow({ cate }) { 
  return (
    <tr colSpan='2'>
      <th>
        {cate}
      </th>
    </tr>
  )
}
function ProductRow({ product }) {
  const name = product.stocked ? product.name : <span style={{color:'red'}}>{product.name}</span> 
  return (
   <tr>
    <td>{name}</td>
    <td>{product.price}</td>
   </tr>
 )
}
function ProductTable({ products,text,stock}) {
  const rows = [];
  let lastCate = null;
  products.forEach(ele => {
    if(ele.name.toLowerCase().indexOf(text.toLowerCase())===-1) {return}
    if (!ele.stocked && stock) { return }
    if (ele.category !== lastCate) {
      rows.push(
        <ProductCateRow cate={ele.category} key={ele.category}/>
      )
    }
    rows.push(
      <ProductRow product={ele} key={ele.name}/>
    )
    lastCate = ele.category;
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}
function FilterProductTable({ products }) {
  const [text, setText] = useState('');
  const [stock, setStock] = useState(false);
  return(
    <div>
      <SearchBar onTextChange={e=>setText(e)} onStock={e=>setStock(e)} text={text} stock={stock} />
      <ProductTable text={text} stock={stock} products={products}/>
    </div>
  )
}
export default function AddDateFlow() { 
  return <FilterProductTable products={PRODUCTS} />
}