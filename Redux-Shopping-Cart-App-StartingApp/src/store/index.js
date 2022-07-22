const { configureStore } = require('@reduxjs/toolkit');
const { default: authStore } = require('./auth-store');
const { default: cartStore } = require('./cart-store');

const store = configureStore({
  reducer: {
    auth: authStore.reducer,
    cart: cartStore.reducer,
  },
});
export default store;
