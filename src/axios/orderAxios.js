import axios from "axios";

const ORDER_BASE_URL = `${import.meta.env.VITE_APP_USER_API_URL}/api/order`;

// place order
export const placeOrder = async (cartItems, totalPrice, userId) => {
  try {
    const response = await axios.post(`${ORDER_BASE_URL}/order`, {
      cartItems,
      totalPrice,
      userId,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

// getOrder
export const getOrder = async (userID) => {
  try {
    const response = await axios.get(`${ORDER_BASE_URL}/userorder/${userID}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
