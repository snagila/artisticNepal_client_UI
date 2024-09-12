import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categoryRedux/categorySlice";
import productReducer from "./productRedux/productSlice";
import userReducer from "./userRedux/userSlice";
import cartItemsReducer from "./cartItemRedux/cartItemsSlice";
import helperReducer from "./helperRedux/helperSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    user: userReducer,
    cart: cartItemsReducer,
    helper: helperReducer,
  },
});
export default store;
