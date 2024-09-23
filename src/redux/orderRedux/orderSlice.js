import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const cartItemsSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
});
const { reducer: orderReducer, actions } = cartItemsSlice;

export const { setOrders } = actions;
export default orderReducer;
