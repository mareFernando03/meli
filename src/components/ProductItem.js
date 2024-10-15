import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <div>
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <Link to={`/product/${product.id}`}>Ver detalles</Link>
    </div>
  );
};

export default ProductItem;