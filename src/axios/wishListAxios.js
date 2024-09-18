import axios from "axios";

const WISHLIST_API_URL = `${
  import.meta.env.VITE_APP_USER_API_URL
}/api/wishlist`;

//add items to the wishlist
export const addItemsTowishlist = async (wishListItem, userID) => {
  try {
    const response = await axios.post(WISHLIST_API_URL, {
      wishListItem,
      userID,
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

// get items from the wishlist
export const getItemsfromwishlist = async () => {
  try {
    const response = await axios.get(WISHLIST_API_URL, {
      headers: { Authorization: sessionStorage.getItem("accessJWT") },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

// add wishlist item to cart
export const addWishlistitemsToCart = async (item) => {
  try {
    const response = await axios.post(`${WISHLIST_API_URL}/${item._id}`, item);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

// delete items from wishlist
export const deleteWishlistItem = async (itemSKU) => {
  try {
    const response = await axios.delete(`${WISHLIST_API_URL}/${itemSKU}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
