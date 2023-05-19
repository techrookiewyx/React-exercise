import { useState } from "react";
import { foods,filterItems } from "./111-data";

function SearchBar({ query, onChangeInp }) { 
  return (
    <>
      <label>
        搜索：{" "}
        <input
          onChange={onChangeInp}
          value={query}
        />
      </label>
    </>
    )
}
function List({ items }) {
  return (
    <>
      <table>
        <tbody>
          {items.map(ele=>
            <tr key={ele.id}>
              <td>{ele.name}</td>
              <td>{ele.description}</td>
            </tr> 
          )}
        </tbody>
      </table>
    </>
  )
}

export default function StateImproveListFilter() { 
  const [query, setQuery] = useState('');
  const res = filterItems(foods, query);
  console.log(res);
  function handleChangeInp(e) { 
    setQuery(e.target.value);
  }
  return (
    <>
      <SearchBar query={query} onChangeInp={handleChangeInp} />
      <hr />
      <List items={res} />
    </>
  )
}