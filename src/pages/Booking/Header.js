import React from 'react';

export default function Header(props) {
  return (
    <header className="bc-block bc-row center">
      
        
          <h3 class="text-center">CƠ SỞ VẬT CHẤT</h3>
          <span className="badge badge-pill badge-danger">{props.countCartItems}</span>
          {/* {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )} */}
    </header>
  );
}
