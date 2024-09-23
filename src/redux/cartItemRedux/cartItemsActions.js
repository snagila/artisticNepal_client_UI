import { toast } from "react-toastify";
import {
  addItemsToCart,
  deleteCartItems,
  editProductQuantityAxios,
  getItemsfromCart,
} from "../../axios/cartAxios";
import { setCartItems } from "./cartItemsSlice";
import { setIsLoading } from "../helperRedux/helperSlice";

// add items to the cart
export const addItemsToCartActions =
  (cartItemObj, userID) => async (dispatch) => {
    dispatch(setIsLoading(true));
    const result = await addItemsToCart(cartItemObj, userID);

    if (result.status === "error") {
      dispatch(setIsLoading(false));
      return toast.error(result.message);
    }
    if (result.status === "success") {
      let toastMessage = `${cartItemObj.quantity} ${cartItemObj.name} added.`;
      toast.success(toastMessage);
      dispatch(setIsLoading(false));
      dispatch(getCartItems());
      return;
    }
    dispatch(setIsLoading(false));
    toast.error("Something went wrong.");
  };

//   get cart items
export const getCartItems = () => async (dispatch) => {
  const result = await getItemsfromCart();
  if (result.status === "error") {
    return toast.error(result.message);
  }
  if (result.status === "success") {
    return dispatch(setCartItems(result.data));
  }
};

// edit cart quantity
export const editProductQuantityAction =
  (cartId, productQuantity, itemPrice) => async (dispatch) => {
    const result = await editProductQuantityAxios(
      cartId,
      productQuantity,
      itemPrice
    );
    if (result.status === "success") {
      dispatch(getCartItems());
    }
  };

// delete items from the cart
export const deleteItemsFromCartAction = (cartID) => async (dispatch) => {
  const result = await deleteCartItems(cartID);
  if (result.status === "error") {
    return toast.error(result.message);
  }
  if (result.status === "success") {
    return dispatch(getCartItems());
  }
};
