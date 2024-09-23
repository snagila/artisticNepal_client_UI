import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categoryRedux/categorySlice";
import productReducer from "./productRedux/productSlice";
import userReducer from "./userRedux/userSlice";
import cartItemsReducer from "./cartItemRedux/cartItemsSlice";
import helperReducer from "./helperRedux/helperSlice";
import wishListReducer from "./wishListRedux/wishListSlice";
import orderReducer from "./orderRedux/orderSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    user: userReducer,
    cart: cartItemsReducer,
    helper: helperReducer,
    wishList: wishListReducer,
    order: orderReducer,
  },
});
export default store;
