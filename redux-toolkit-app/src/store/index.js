import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state, action) => state + action.payload,
    decrement: (state, action) => state - action.payload,
    addBy: (state, action) => (state += action.payload),
  },
});

export const { increment, decrement, addBy } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
