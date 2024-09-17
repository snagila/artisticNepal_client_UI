import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    setWishList: (state, action) => {
      state.wishList = action.payload;
    },
  },
});
const { reducer: wishListReducer, actions } = wishListSlice;

export const { setWishList } = actions;
export default wishListReducer;
