import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categoryRedux/categorySlice";
import productReducer from "./productRedux/productSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
  },
});
export default store;
