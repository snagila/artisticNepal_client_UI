import { getOrder, placeOrder } from "../../axios/orderAxios";
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
  (cartItems, totalPrice, userId) => async (dispatch) => {
    const result = await placeOrder(cartItems, totalPrice, userId);
    console.log(result);
    if (result.status === "error") {
      toast.error(result.message);
    }
    if (result.status === "success") {
      dispatch(getUserOrderAction(userId));
    }
  };
