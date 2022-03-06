import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div class="card bg-dark col p-3 m-3 max-w-230">
      <img className="small max-h-150 object-fit-cover" src={product.anhcsvc} alt={product.ten_csvc} />
      <span class="h3">{product.ten_csvc}</span>
      <span class="font-size10px">Số lượng: {product.soluong}</span>
      <div>{product.giathue_csvc}đ</div>
      <div>
        <button class="bc-button" onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
