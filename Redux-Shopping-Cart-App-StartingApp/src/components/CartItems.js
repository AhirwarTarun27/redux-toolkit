import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  console.log("cartItems:", cartItems);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItem
              id={item.id}
              quantity={item.quantity}
              price={item.price}
              name={item.name}
              totalPrice={item.totalPrice}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
