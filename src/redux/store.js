import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categoryRedux/categorySlice";
import productReducer from "./productRedux/productSlice";
import userReducer from "./userRedux/userSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    user: userReducer,
  },
});
export default store;
