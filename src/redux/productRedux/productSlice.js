import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: {},
};

const categorySlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});
const { reducer: productReducer, actions } = categorySlice;

export const { setProducts, setProduct } = actions;
export default productReducer;
