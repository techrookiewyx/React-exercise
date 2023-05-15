import { useState } from 'react';

const initialProducts = [
  { id: 0, name: 'Baklava', count: 1, },
  { id: 1, name: 'Cheese', count: 5, },
  { id: 2, name: 'Spaghetti', count: 2, }
];

export default function ShoppingCart2() {
  const [products,setProducts] = useState(initialProducts)
  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  function handleJian(id) {
    let newArr = products.map(ele => {
      if (ele.id === id) {
        return {
          ...ele,
          count: ele.count - 1
        };
      } else {
        return {...ele}
      }
    });
    newArr = newArr.filter(ele =>
      ele.count > 0
    );
    setProducts(newArr)
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() => {
            handleJian(product.id);
          }}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
