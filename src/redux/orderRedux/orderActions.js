import { getOrder, placeOrder } from "../../axios/orderAxios";
import { getCartItems } from "../cartItemRedux/cartItemsActions";
import { setOrders } from "./orderSlice";

// get order details
export const getUserOrderAction = (userId) => async (dispatch) => {
  const result = await getOrder(userId);
  if (result.status === "error") {
    return toast.error(error.message);
  }
  dispatch(setOrders(result.data));
};
// place cart order
export const placeOrderAction =
  (cartItems, totalPrice, userId, userAddress) => async (dispatch) => {
    console.log(cartItems);
    const result = await placeOrder(cartItems, totalPrice, userId, userAddress);
    console.log(result);
    if (result.status === "error") {
      toast.error(result.message);
    }
    if (result.status === "success") {
      dispatch(getUserOrderAction(userId));
      dispatch(getCartItems(userId));
    }
  };
