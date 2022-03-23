import React from 'react';
//import { useSelector } from 'react-redux';
//import { ProductsContext } from '../context/products-context';
import { useStore } from '../components/hooks-store/store.js';
import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = props => {
  const[state] = useStore()[0];
  // const productList = useSelector(state => state.shop.products);
  //const productList = useContext(ProductsContext).products;
  //console.log(productList);
  return (
    <ul className="products-list">
      {state.Products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
