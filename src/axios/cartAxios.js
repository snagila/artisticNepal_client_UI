import axios from "axios";

const CART_BASE_URL = `${import.meta.env.VITE_APP_USER_API_URL}/api/cart`;

//add items to the cart
export const addItemsToCart = async (cartItem, userID) => {
  try {
    const response = await axios.post(CART_BASE_URL, { cartItem, userID });
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

// get items from the cart
export const getItemsfromCart = async () => {
  try {
    const response = await axios.get(CART_BASE_URL, {
      headers: { Authorization: sessionStorage.getItem("accessJWT") },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

// edit cart quantity
export const editProductQuantityAxios = async (
  cartId,
  productQuantity,
  itemPrice
) => {
  try {
    const response = await axios.patch(
      `${CART_BASE_URL}/editcart/${cartId}`,

      { productQuantity, itemPrice }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

// delete cart items
export const deleteCartItems = async (cartID) => {
  try {
    const response = await axios.delete(`${CART_BASE_URL}/${cartID}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

// place order
export const placeOrder = async (cartItems, totalPrice, userId) => {
  try {
    const response = await axios.post(`${CART_BASE_URL}/order`, {
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
    const response = await axios.get(`${CART_BASE_URL}/userorder/${userID}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
