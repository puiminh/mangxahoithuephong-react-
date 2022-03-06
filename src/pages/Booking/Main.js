import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block bc-block scroll-500">
      <div className="row row-cols-2">
        {products.map((product) => (
          <Product key={product.id_csvc} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
