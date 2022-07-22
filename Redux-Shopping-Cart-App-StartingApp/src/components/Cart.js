import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
const Cart = () => {
  //for counting the cart item
  const quantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="cartIcon">
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
