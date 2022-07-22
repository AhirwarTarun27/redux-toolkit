import { createSlice } from '@reduxjs/toolkit/dist/createSlice';

const cartStore = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart: (action, payload) => {
      const newItem = action.payload;

      // check if item is already in cart
      const existingItem = action.state.cartItems.find(
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
      }
    },
    removeFromCart: () => {},
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartStore.actions;

export default cartStore;
