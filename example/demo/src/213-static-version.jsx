import { PRODUCTS } from "./213-produces";
import './213-case.css'
function SearchBar() { 
  return (
    <form>
      <input placeholder="Search..." />
      <label>
        <input type='checkbox'/>{" "}
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
function ProductTable({ products }) {
  const rows = [];
  let lastCate = null;
  products.forEach(ele => {
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
  return(
    <div>
      <SearchBar />
      <ProductTable products={products}/>
    </div>
  )
}
export default function StaticVer() { 
  return <FilterProductTable products={PRODUCTS} />
}