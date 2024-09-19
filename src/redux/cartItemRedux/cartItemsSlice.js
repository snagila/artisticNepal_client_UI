import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  orders: [],
};

const cartItemsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
});
const { reducer: cartItemsReducer, actions } = cartItemsSlice;

export const { setCartItems, setOrders } = actions;
export default cartItemsReducer;
