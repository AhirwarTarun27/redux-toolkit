import { createSlice } from "@reduxjs/toolkit";

const cartStore = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      // check if item is already in cart
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;

      const presentItem = state.cartItems.find((item) => item.id === id);

      if (presentItem == 1) {
        state.cartItems = state.cartItems.filter((item) => item.id === id);
        state.totalQuantity--;
      } else {
        presentItem.quantity--;
        presentItem.totalPrice -= presentItem.price;
      }
    },
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

console.log("dsfd", cartStore.actions.toggleCart());

export const cartActions = cartStore.actions;

export default cartStore;
