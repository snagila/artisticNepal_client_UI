import { toast } from "react-toastify";
import { setIsLoading } from "../helperRedux/helperSlice";
import {
  addItemsTowishlist,
  addWishlistitemsToCart,
  deleteWishlistItem,
  getItemsfromwishlist,
} from "../../axios/wishListAxios";
import { setWishList } from "./wishListSlice";

export const addWishListActions =
  (wishListItem, userID) => async (dispatch) => {
    dispatch(setIsLoading(true));
    const result = await addItemsTowishlist(wishListItem, userID);

    if (result.status === "error") {
      dispatch(setIsLoading(false));
      return toast.error(result.message);
    }
    if (result.status === "success") {
      let toastMessage = ` ${wishListItem.name} added to wishlist.`;
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

// add items to cart
export const addWishlistitemsToCartAction = (item) => async (dispatch) => {
  // dispatch(setIsLoading(true));
  const result = await addWishlistitemsToCart(item);
  console.log(result);
  if (result.status === "error") {
    dispatch(setIsLoading(false));
    return toast.error(result.message);
  }
  if (result.status === "success") {
    toast.success(result.message);
    dispatch(setIsLoading(false));
    dispatch(getWishListItems());
    return;
  }
  dispatch(setIsLoading(false));
  toast.error("Something went wrong.");
};

// delete items from wishlist
export const deleteWishlistItemAction =
  (itemSKU, itemName) => async (dispatch) => {
    dispatch(setIsLoading(true));
    const result = await deleteWishlistItem(itemSKU);
    if (result.status === "error") {
      dispatch(setIsLoading(false));
      return toast.error(result.message);
    }
    if (result.status === "success") {
      let toastMessage = ` ${itemName} removed from wishlist.`;
      toast.success(toastMessage);
      dispatch(setIsLoading(false));
      dispatch(getWishListItems());
      return;
    }
    dispatch(setIsLoading(false));
    toast.error("Something went wrong.");
  };
