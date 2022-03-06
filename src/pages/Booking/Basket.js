import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove, tienthue } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.giathue_csvc, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="bc-block">
      <h2>HÓA ĐƠN</h2>
      <div>
        {/* {cartItems.length === 0 && <div>Giỏ hàng trống</div>} */}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-4">{item.ten_csvc}</div>
            <div className="col-4">
              <button onClick={() => onAdd(item)} className="btn btn-success mb-3">
                +
              </button>{'     '}
              <button onClick={() => onRemove(item)} className="btn btn-danger mb-3">
                -
              </button>

            </div>

            <div className="col-4 text-right">
              {item.qty} x ${item.giathue_csvc}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-8">Tiền cơ sở vật chất</div>
              <div className="col-4 text-right h5">{itemsPrice}đ</div>
            </div>
            <div className="row">
              <div className="col-8">Tiền thuê phòng</div>
              <div className="col-4 text-right h5">{tienthue}đ</div>
            </div>
            {/* <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div> */}
            <hr />
            <div className="row">
              <div className="col-8">
                <strong className='colorffc001 h3'>Total Price</strong>
              </div>
              <div className="col-4 text-right h3">
                <strong className='colorffc001'>{itemsPrice+tienthue}đ</strong>
              </div>
            </div>
            <hr />
            {/* <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div> */}
          </>
        )}
      </div>
    </aside>
  );
}
