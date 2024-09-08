import { toast } from "react-toastify";
import { getAllCategories } from "../../axios/categoryAxios";
import { setCategories } from "./categorySlice";

export const getCategoriesAction = () => async (dispatch) => {
  const result = await getAllCategories();
  if (result.status === "error") {
    toast.error(result.message);
    return;
  }
  if (result.status === "success") {
    dispatch(setCategories(result.data));
  }
};
