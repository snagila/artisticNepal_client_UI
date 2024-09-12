import axios from "axios";

const CATEGORY_BASE_URL = `${
  import.meta.env.VITE_APP_USER_API_URL
}/api/category`;

export const getAllCategories = async () => {
  try {
    const response = await axios.get(CATEGORY_BASE_URL);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
