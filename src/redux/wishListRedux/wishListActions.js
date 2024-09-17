import { toast } from "react-toastify";
import { setIsLoading } from "../helperRedux/helperSlice";
import {
  addItemsTowishlist,
  getItemsfromwishlist,
} from "../../axios/wishListAxios";
import { setWishList } from "./wishListSlice";

export const addWishListActions = (product, userID) => async (dispatch) => {
  const result = await addItemsTowishlist(product, userID);
  dispatch(setIsLoading(true));
  if (result.status === "error") {
    dispatch(setIsLoading(false));
    return toast.error(result.message);
  }
  if (result.status === "success") {
    let toastMessage = ` ${product.name} added.`;
    toast.success(toastMessage);
    dispatch(setIsLoading(false));
    dispatch(getWishListItems());
    return;
  }
  dispatch(setIsLoading(false));
  toast.error("Something went wrong.");
};

//   get wishlist items
export const getWishListItems = () => async (dispatch) => {
  const result = await getItemsfromwishlist();
  if (result.status === "error") {
    return toast.error(result.message);
  }
  if (result.status === "success") {
    return dispatch(setWishList(result.data));
  }
};
