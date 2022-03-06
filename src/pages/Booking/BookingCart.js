import Header from './Header';
import Main from './Main';
import Basket from './Basket';
import data from './data';
import { useState, useEffect } from 'react';
function BookingCart(props) {

  const [products, setCSVC] = useState([]);

  const getCSVC = async() => {
      try {
          const id_phong = parseInt(localStorage.getItem("id_phong"));
          const response = await fetch(`http://localhost:5000/getcsvcfromnvh/${id_phong}`);
          const jsonData = await response.json()
          console.log('res:', response);
          setCSVC(jsonData);

          
      } catch (error) {
          console.error(error.message);
      }
  }


  // const { products } = products;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id_csvc === product.id_csvc);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id_csvc === product.id_csvc ? { ...exist, 
            qty:  (exist.qty+1>=exist.soluong)?(exist.soluong):(exist.qty+1) } : x
        )
      )
            
      console.log('cartItems:', cartItems);
      // props.getItems(cartItems);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      console.log('cartItems:', cartItems);
      // props.getItems(cartItems);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id_csvc === product.id_csvc);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id_csvc !== product.id_csvc))
      console.log('cartItems:', cartItems);;
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id_csvc === product.id_csvc ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
      console.log('cartItems:', cartItems);
      // props.getItems(cartItems);
    }
  };
  
  useEffect(()=>{
    getCSVC();
    props.getItems(cartItems);
},[cartItems])
  return (
    <div className="bookingcart-biggestdiv">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          tienthue={props.tienthue}
          getTongtien={props.getTongtien}
        ></Basket>
      </div>
    </div>
  );
}

export default BookingCart;
