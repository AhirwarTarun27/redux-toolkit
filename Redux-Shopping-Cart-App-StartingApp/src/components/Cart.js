import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cartActions } from "../store/cart-store";
import "./Cart.css";
const Cart = () => {
  //for counting the cart item
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.toggleCart());
    console.log(cartActions.toggleCart());
  };
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
