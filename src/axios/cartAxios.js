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
  productIdOnCart,
  productQuantity
) => {
  try {
    const response = await axios.patch(
      `${CART_BASE_URL}/editcart/${cartId}`,

      { productIdOnCart, productQuantity },
      {
        headers: { Authorization: sessionStorage.getItem("accessJWT") },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
