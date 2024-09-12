import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartItemsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});
const { reducer: cartItemsReducer, actions } = cartItemsSlice;

export const { setCartItems } = actions;
export default cartItemsReducer;
