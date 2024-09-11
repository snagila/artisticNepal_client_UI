import axios from "axios";

const PRODUCT_BASE_URL = `${
  import.meta.env.VITE_APP_ADMIN_API_URL
}/api/product`;

export const getProducts = async () => {
  try {
    const response = await axios.get(PRODUCT_BASE_URL);
    return response.data;
  } catch (error) {
    console.log("axios error", error.message);
    return error.message;
  }
};

export const getAProductAxios = async (productSKU) => {
  try {
    const response = await axios.get(`${PRODUCT_BASE_URL}/${productSKU}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
